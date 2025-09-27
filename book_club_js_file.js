// Long Division Book Club Registration Form JavaScript

// App state
let formData = {
    name: '',
    email: '',
    phone: '',
    membershipType: 'long-division-club',
    selectedBooks: [],
    preferences: '',
    paymentMethod: 'amazon-direct'
};

// Book data
const featuredBooks = [
    {
        id: 1,
        title: "Long Division: The Journey From One to Oneness",
        author: "Kevin D. Franklin",
        price: 16.88,
        amazonUrl: "https://www.amazon.com/gp/product/B0FPRLSY3T?ref_=dbs_m_mng_rwt_calw_tpbk_0&storeType=ebooks",
        type: "Book"
    },
    {
        id: 2,
        title: "Long Division: The Journey From One to Oneness - Couples Workbook",
        author: "Kevin D. Franklin",
        price: 19.88,
        amazonUrl: "https://www.amazon.com/gp/product/B0FR4BJC7W?ref_=dbs_m_mng_rwt_calw_tpbk_1&storeType=ebooks",
        type: "Couples Workbook"
    },
    {
        id: 3,
        title: "Long Division: Book + Couples Workbook Bundle",
        author: "Kevin D. Franklin",
        price: 24.99,
        originalPrice: 36.76,
        amazonUrl: "https://mygodgivenwrites.com/product/long-division-couples-workbook-bundle/",
        type: "Complete Bundle",
        isBundle: true,
        savings: 11.77
    }
];

// Book selection logic
function selectBook(bookId) {
    if (bookId === 3) { // Bundle selected
        if (formData.selectedBooks.includes(3)) {
            // Deselect bundle
            formData.selectedBooks = [];
        } else {
            // Select bundle and deselect individual books
            formData.selectedBooks = [3];
        }
    } else { // Individual book selected
        if (formData.selectedBooks.includes(bookId)) {
            // Deselect individual book
            formData.selectedBooks = formData.selectedBooks.filter(id => id !== bookId);
        } else {
            // Select individual book and deselect bundle
            formData.selectedBooks = formData.selectedBooks.filter(id => id !== 3);
            formData.selectedBooks.push(bookId);
        }
    }
    updateUI();
}

// Update UI based on state
function updateUI() {
    // Update book selections
    [1, 2, 3].forEach(id => {
        const bookElement = document.getElementById(`book-${id}`);
        const checkbox = document.getElementById(`checkbox-${id}`);
        
        if (formData.selectedBooks.includes(id)) {
            bookElement.className = bookElement.className.replace('border-gray-200 bg-white', 'border-indigo-500 bg-indigo-50');
            checkbox.checked = true;
        } else {
            bookElement.className = bookElement.className.replace('border-indigo-500 bg-indigo-50', 'border-gray-200 bg-white');
            checkbox.checked = false;
        }
    });

    // Update cost summary
    updateCostSummary();
    updateSubmitButton();
}

function updateCostSummary() {
    const membershipType = document.getElementById('membershipType').value;
    const membershipFee = membershipType === 'monthly' ? 9.99 : 
                         membershipType === 'annual' ? 99.99 : 0.00;

    const totalBookCost = featuredBooks
        .filter(book => formData.selectedBooks.includes(book.id))
        .reduce((sum, book) => sum + book.price, 0);

    // Update membership label
    const membershipLabel = membershipType === 'long-division-club' ? 'Long Division Book Club' :
                           membershipType === 'monthly' ? 'Monthly' : 'Annual';
    document.getElementById('membership-label').textContent = `Membership Fee (${membershipLabel})`;
    document.getElementById('membership-cost').textContent = `$${membershipFee.toFixed(2)}`;

    // Update books cost
    const booksRow = document.getElementById('books-cost-row');
    if (formData.selectedBooks.length > 0) {
        booksRow.style.display = 'flex';
        document.getElementById('books-label').textContent = `Long Division Items (${formData.selectedBooks.length})`;
        document.getElementById('books-cost').textContent = `$${totalBookCost.toFixed(2)}`;
    } else {
        booksRow.style.display = 'none';
    }

    // Update total
    document.getElementById('total-cost').textContent = `$${(membershipFee + totalBookCost).toFixed(2)}`;
}

function updateSubmitButton() {
    const membershipType = document.getElementById('membershipType').value;
    const membershipFee = membershipType === 'long-division-club' ? 0 : 
                         membershipType === 'monthly' ? 9.99 : 99.99;
    
    let buttonText = 'Join Club & Buy on Amazon';
    
    if (membershipFee === 0 && formData.selectedBooks.length === 0) {
        buttonText = 'Join Free Book Club';
    }
    
    document.getElementById('submit-button').textContent = buttonText;
}

// Form validation
function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    
    let isValid = true;
    
    // Clear previous error messages
    clearErrors();
    
    // Validate name
    if (!name) {
        showError('name', 'Full name is required');
        isValid = false;
    }
    
    // Validate email
    if (!email) {
        showError('email', 'Email address is required');
        isValid = false;
    } else if (!isValidEmail(email)) {
        showError('email', 'Please enter a valid email address');
        isValid = false;
    }
    
    return isValid;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    field.classList.add('error');
    
    // Create error message element
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    errorDiv.id = `${fieldId}-error`;
    
    // Insert error message after the field
    field.parentNode.insertBefore(errorDiv, field.nextSibling);
}

function clearErrors() {
    // Remove error classes
    document.querySelectorAll('.error').forEach(element => {
        element.classList.remove('error');
    });
    
    // Remove error messages
    document.querySelectorAll('.error-message').forEach(element => {
        element.remove();
    });
}

// Show loading state
function showLoading() {
    const button = document.getElementById('submit-button');
    button.classList.add('button-loading');
    button.disabled = true;
}

// Hide loading state
function hideLoading() {
    const button = document.getElementById('submit-button');
    button.classList.remove('button-loading');
    button.disabled = false;
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Membership type change listener
    document.getElementById('membershipType').addEventListener('change', function(e) {
        formData.membershipType = e.target.value;
        updateCostSummary();
        updateSubmitButton();
    });

    // Form submission
    document.getElementById('registrationForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validate form
        if (!validateForm()) {
            return;
        }
        
        // Show loading state
        showLoading();
        
        // Get form data
        formData.name = document.getElementById('name').value.trim();
        formData.email = document.getElementById('email').value.trim();
        formData.phone = document.getElementById('phone').value.trim();
        formData.preferences = document.getElementById('preferences').value.trim();
        
        const membershipType = document.getElementById('membershipType').value;
        const membershipFee = membershipType === 'long-division-club' ? 0 : 
                             membershipType === 'monthly' ? 9.99 : 99.99;

        // Simulate processing delay
        setTimeout(() => {
            hideLoading();
            
            if (formData.selectedBooks.length > 0) {
                // Redirect to Amazon/website for direct book purchase
                const selectedBookData = featuredBooks.filter(book => 
                    formData.selectedBooks.includes(book.id)
                );
                
                alert(`Long Division Book Club registration submitted! You've selected ${selectedBookData.length} item(s). Redirecting for purchase...`);
                
                // Open first selected book URL (in real app, you'd handle multiple books)
                if (selectedBookData.length > 0) {
                    window.open(selectedBookData[0].amazonUrl, '_blank');
                }
            } else {
                const welcomeMessage = membershipFee === 0
                    ? 'Welcome to the Long Division Book Club! Your free membership is confirmed.'
                    : 'Long Division Book Club registration submitted successfully!';
                alert(welcomeMessage);
            }
            
            // Optional: Reset form after successful submission
            // document.getElementById('registrationForm').reset();
            // formData.selectedBooks = [];
            // updateUI();
        }, 1000);
    });

    // Initialize UI
    updateUI();
});

// Utility functions for potential future enhancements
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(amount);
}

function logFormData() {
    console.log('Current form data:', formData);
}

// Export functions for potential testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        selectBook,
        validateForm,
        isValidEmail,
        formatCurrency,
        featuredBooks,
        formData
    };
}
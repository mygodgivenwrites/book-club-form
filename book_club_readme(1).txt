# Long Division Book Club Registration Form

A responsive web form for registering members to the Long Division Book Club and facilitating book purchases.

## Files Included

- `index.html` - Main HTML structure
- `styles.css` - Custom CSS styling 
- `script.js` - JavaScript functionality
- `README.md` - Setup instructions (this file)

## Quick Start

1. **Download all files** to the same folder on your computer
2. **Open `index.html`** in any web browser to view the form
3. **Upload to your web hosting** to make it live

## Features

- ✅ Responsive design (works on mobile, tablet, desktop)
- ✅ Free book club membership (default option)
- ✅ Individual book selection ($16.88 book, $19.88 workbook)
- ✅ Bundle deal ($24.99 for both books - saves $11.77!)
- ✅ Smart selection logic (bundle vs individual books)
- ✅ Real-time cost calculation
- ✅ Form validation
- ✅ Direct Amazon integration for individual books
- ✅ Custom website integration for bundle purchase

## Book Options

1. **Long Division: The Journey From One to Oneness** - $16.88
   - Links to Amazon for purchase
   
2. **Long Division: Couples Workbook** - $19.88
   - Links to Amazon for purchase
   
3. **Bundle Deal** - $24.99 (Save $11.77!)
   - Links to mygodgivenwrites.com for purchase

## Membership Types

- **Free Book Club** - $0.00 (default)
- **Monthly Membership** - $9.99/month
- **Annual Membership** - $99.99/year

## Making It Live

### Option 1: Netlify (Recommended - Free)

1. Go to [netlify.com](https://netlify.com)
2. Sign up for free account
3. Drag and drop your folder with all files
4. Get instant live URL

**To collect form submissions:**
- Add `netlify` attribute to the `<form>` tag in `index.html`:
```html
<form id="registrationForm" netlify>
```

### Option 2: GitHub Pages (Free)

1. Create GitHub account at [github.com](https://github.com)
2. Create new repository
3. Upload all files
4. Enable GitHub Pages in repository settings
5. Your site will be live at: `username.github.io/repository-name`

### Option 3: Traditional Web Hosting

Upload all files to your web hosting via FTP/cPanel file manager.

## Customization

### Update Book Information

Edit the `featuredBooks` array in `script.js`:

```javascript
const featuredBooks = [
    {
        id: 1,
        title: "Your Book Title",
        author: "Your Name",
        price: 19.99,
        amazonUrl: "https://amazon.com/your-book-link",
        type: "Book"
    },
    // ... more books
];
```

### Change Colors/Styling

Edit `styles.css` to customize:
- Colors (search for `#6366f1` to change primary color)
- Fonts
- Spacing
- Layout

### Update Membership Options

Edit the `<select>` element in `index.html`:

```html
<option value="your-plan">Your Plan Name - $X.XX</option>
```

And update the pricing logic in `script.js`.

## Form Processing Options

### Basic Email Notifications

**Formspree (Recommended):**
1. Sign up at [formspree.io](https://formspree.io)
2. Update form action in `index.html`:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

**Netlify Forms:**
- Just add `netlify` attribute to form tag
- Submissions appear in Netlify dashboard

### Advanced Integration

**Email Marketing:**
- Integrate with Mailchimp, ConvertKit, or ActiveCampaign
- Automatically add members to email lists

**Database Storage:**
- Connect to Airtable, Google Sheets, or database
- Store member information for management

**Payment Processing:**
- Add Stripe integration for membership fees
- Process credit card payments

## Browser Compatibility

- ✅ Chrome (latest)
- ✅ Firefox (latest) 
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## Dependencies

- [Tailwind CSS](https://tailwindcss.com) - Loaded from CDN
- No other external dependencies required

## File Structure

```
book-club-form/
├── index.html          # Main HTML file
├── styles.css          # Custom CSS styles
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## Support

For technical questions or customization help:
1. Check browser console for JavaScript errors
2. Validate HTML/CSS using online validators
3. Test form submission functionality

## Security Notes

- Form validation is client-side only
- Add server-side validation for production use
- Use HTTPS for any sensitive data collection
- Consider adding CAPTCHA for spam prevention

## License

This code is provided as-is for your book club use. Feel free to modify and customize as needed.

---

**Need help getting this live? Contact your web developer or hosting provider for assistance with file upload and domain setup.**
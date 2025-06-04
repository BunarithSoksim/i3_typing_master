# TypingMaster - Typing Speed Test Application

![TypingMaster](https://img.shields.io/badge/TypingMaster-v1.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

A modern, interactive typing speed test application that helps users improve their typing skills with real-time feedback, progress tracking, and a beautiful user interface.

## 🚀 Features

- **Interactive Typing Test**: Real-time typing speed measurement
- **Speed Calculation**: Accurate Words Per Minute (WPM) calculation
- **User Authentication**: Login and registration system
- **Progress Tracking**: View test results and performance history
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Modern UI**: Beautiful gradient backgrounds with smooth animations
- **Password Strength**: Real-time password strength indicator
- **Test Results**: Detailed performance analytics

## 📁 Project Structure

```
TypingMaster/
├── Home.html              # Main landing page
├── typing-test.html       # Core typing test functionality
├── login.html             # User login page
├── register.html          # User registration page
├── about.html             # About us page
├── listResultTest.html    # Test results display
├── resetpassword.html     # Password reset page
└── README.md             # Project documentation
```

## 🛠️ Setup Instructions

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional but recommended)
- Text editor or IDE (VS Code, Sublime Text, etc.)

### Method 1: Direct File Opening (Simple)

1. **Download the Project**
   ```bash
   git clone https://github.com/yourusername/typingmaster.git
   cd typingmaster
   ```

2. **Open in Browser**
   - Double-click `Home.html` to open in your default browser
   - Or right-click and select "Open with" → your preferred browser

### Method 2: Local Web Server (Recommended)

#### Using Live Server Extension (VS Code)

1. **Install Live Server extension** in VS Code
2. **Right-click** on `Home.html`
3. **Select** "Open with Live Server"

## 🎮 How to Use

### Getting Started

1. **Home Page**: Open `Home.html` to see the main landing page
2. **Start Test**: Click "Start Typing Now" or navigate to the typing test
3. **Take Test**: Type the displayed text as quickly and accurately as possible
4. **View Results**: See your WPM score and accuracy after completion
5. **Track Progress**: Visit the results page to see your performance history

### Navigation

- **Home**: Main landing page with features overview
- **Start**: Begin a typing speed test
- **Result**: View your test results and performance history
- **About**: Learn about the development team
- **Login/Register**: User authentication system

### Features Walkthrough

#### Typing Test (`typing-test.html`)
- Real-time timer starts when you begin typing
- Automatic completion detection
- Instant WPM calculation
- Restart functionality

#### User Registration (`register.html`)
- Password strength indicator
- Form validation
- Animated UI elements
- Terms and conditions checkbox

#### Results Display (`listResultTest.html`)
- Tabular display of test results
- Responsive design with Tailwind CSS
- Easy navigation back to tests

## 🔧 Customization

### Changing Test Text

Edit the text in `typing-test.html`:
```html
<p id="testText">Your custom text here...</p>
```

### Modifying Styling

Each HTML file contains embedded CSS that can be customized:

- **Colors**: Modify gradient backgrounds and accent colors
- **Fonts**: Change font families in the CSS
- **Animations**: Adjust animation durations and effects
- **Layout**: Modify responsive breakpoints

### Adding New Features

The project uses vanilla JavaScript, making it easy to extend:

1. **Add new test modes**: Modify the JavaScript in `typing-test.html`
2. **Include more statistics**: Extend the results calculation
3. **Add themes**: Create additional CSS classes
4. **Implement backend**: Connect to a server for data persistence

## 🌐 Browser Compatibility

- **Chrome**: Fully supported
- **Firefox**: Fully supported
- **Safari**: Fully supported
- **Edge**: Fully supported
- **Mobile browsers**: Responsive design works on all modern mobile browsers

## 📱 Mobile Responsive

The application is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones
- Different screen orientations

## 🔒 Security Notes

- The current implementation uses client-side validation only
- For production use, implement server-side authentication
- Passwords are not actually stored (demo purposes)
- Forms currently redirect to static pages

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/new-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m "Add new feature"
   ```
4. **Push to branch**
   ```bash
   git push origin feature/new-feature
   ```
5. **Create Pull Request**

## 📋 Future Enhancements

- [ ] Backend integration for user data persistence
- [ ] Multiple difficulty levels
- [ ] Leaderboard system
- [ ] Custom text import
- [ ] Typing lessons and tutorials
- [ ] Sound effects and themes
- [ ] Advanced statistics and analytics
- [ ] Social sharing features

## 🐛 Troubleshooting

### Common Issues

**1. Styles not loading properly**
- Ensure all files are in the same directory
- Check browser console for errors
- Try refreshing the page

**2. Forms not working**
- Current forms are for demonstration
- JavaScript validation works client-side only
- No actual data is stored

**3. Mobile display issues**
- Clear browser cache
- Ensure viewport meta tag is present
- Test in different browsers

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Development Team

- **Seyha** - Frontend Developer
- **PornSophath** - Frontend Developer
- **Ascendant-7** - Frontend Developer
- **Seng-chaokun** - Frontend Developer
- **sakda** - Frontend Developer

## 📞 Support

For support, please contact:
- Create an issue on GitHub
- Email: support@typingmaster.com
- Join our community Discord

## 🌟 Acknowledgments

- Inspired by modern typing test applications
- Built with vanilla HTML, CSS, and JavaScript
- Uses Tailwind CSS for some components
- Responsive design principles

---

**Happy Typing! 🎯**

Built with ❤️ for better typing skills

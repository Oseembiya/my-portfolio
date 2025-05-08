# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## 🎨 Features in Detail

### Home Section

- Hero section with professional introduction
- Call-to-action buttons
- Social media links

### About Section

- Professional summary
- Skills showcase with animations
- Technical expertise display

### Projects Section

- Project filtering by category
- Project cards with hover effects
- Links to live demos and source code
- Responsive grid layout

### Contact Section

- Contact form with validation
- EmailJS integration for sending messages
- Social media links
- Professional contact information

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### Customization

- Edit `src/components/Project/ProjectDetails.js` to add your projects
- Modify styles in `src/styles/scss/` directory
- Update content in respective component files

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints at:

- Mobile: 425px
- Tablet: 768px
- Desktop: 1024px

## ⚡ Performance Optimizations

- Lazy loading of non-critical components
- Image optimization
- Code splitting
- CSS animations with GPU acceleration
- Debounced scroll events

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## 👤 Author

Your Name

- Website: [your-website.com](https://your-website.com)
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Name](https://linkedin.com/in/yourprofile)

## 🙏 Acknowledgments

- React Team for the amazing framework
- Vite Team for the build tool
- Font Awesome for the icons
- All contributors and supporters

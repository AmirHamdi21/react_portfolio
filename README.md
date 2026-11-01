# Amir Mohamed Hamdi El Sayed - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion — designed with the **"The Instrument"** design system (panels, status semantics, IBM Plex type, amber accent). See [`design-system/MASTER.md`](design-system/MASTER.md) for the full design contract.

## 🚀 Features

- **"The Instrument" design system**: instrument-panel aesthetic with semantic tokens; anti-AI-slop rules enforced (see MASTER.md §8)
- **Dark/Light Mode**: Toggle between themes with preference persistence
- **Fully Responsive**: Optimized for mobile, tablet, and desktop
- **Smooth Animations**: Powered by Framer Motion for enhanced UX
- **SEO Optimized**: Meta tags and semantic HTML structure
- **Accessible**: WCAG compliant with proper ARIA labels and keyboard navigation
- **Fast Performance**: Built with Vite for optimal loading speeds

## 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Ready for Bolt Hosting, Netlify, or Vercel

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/
│   │   ├── NavBar.tsx          # Navigation with dark mode toggle
│   │   ├── SectionWrapper.tsx   # Reusable section container
│   │   ├── SkillBadge.tsx      # Skill display component
│   │   ├── ProgressBar.tsx     # Animated progress bars
│   │   ├── ProjectCard.tsx     # Project showcase cards
│   │   ├── ContactForm.tsx     # Contact form with validation
│   │   └── CertificateCard.tsx # Certificate display
│   └── sections/
│       ├── Hero.tsx            # Landing section
│       ├── About.tsx           # About & education
│       ├── Skills.tsx          # Technical & soft skills
│       ├── Projects.tsx        # Project showcase
│       ├── Experience.tsx      # Work experience
│       ├── Certificates.tsx    # Certificates & courses
│       ├── Contact.tsx         # Contact information & form
│       └── Footer.tsx          # Footer with links
├── hooks/
│   └── useDarkMode.ts         # Dark mode state management
├── App.tsx                    # Main app component
├── main.tsx                   # App entry point
└── index.css                  # Global styles & Tailwind imports
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd amir-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production

```bash
npm run build
```

The build files will be generated in the `dist` directory.

## 🎨 Customization

### Colors

Colors are **semantic CSS variables** (defined in `src/index.css`, mapped in `tailwind.config.js`). Change values in `:root` (bench light) and `.dark` (dark field) — never hard-code hex in components. Full token reference: `design-system/MASTER.md` §3.

```css
:root { --c-amber: #B45309; /* accent, bench light */ }
.dark { --c-amber: #E8A33D; /* accent, dark field */ }
```

### Content Updates

#### Personal Information
- Update hero section content in `src/components/sections/Hero.tsx`
- Modify about section in `src/components/sections/About.tsx`

#### Projects
- Add project details in `src/components/sections/Projects.tsx`
- Replace placeholder GitHub and live demo links
- Add project screenshots to public folder and update image URLs

#### Skills
- Update capability modules (load-dot levels) and chip lists in `src/components/sections/Skills.tsx`
- Note: percent progress bars are **banned** by the design system (recruiter credibility) — express seniority via the module dots

#### Experience
- Modify work experience details in `src/components/sections/Experience.tsx`

### 📝 TODO: Content Updates Required

**Amir needs to update these sections with actual data:**

1. **Projects Section** (`src/components/sections/Projects.tsx`):
   - Replace placeholder GitHub URLs with actual repository links
   - Replace placeholder live demo URLs
   - Add actual project screenshots to `/public` folder
   - Update project descriptions with more detailed information

2. **Certificates Section** (`src/components/sections/Certificates.tsx`):
   - Add actual Google Drive links for certificates
   - Update certificate titles, issuers, and dates
   - Add more course details and completion dates

3. **Hero Section** (`src/components/sections/Hero.tsx`):
   - Replace CV download link with actual CV file link
   - Add actual CV file to `/public` folder

4. **Images**:
   - Add profile photo to replace text-based avatar
   - Add project screenshots
   - Add favicon and social media images

## 🎯 SEO Configuration

Update the following files for SEO:

1. **`index.html`**: Update meta tags, Open Graph, and Twitter Card data
2. **`public/`**: Add favicon, og-image.jpg, and twitter-image.jpg

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🌙 Dark Mode

Dark mode is implemented using:
- Tailwind CSS dark mode classes
- `useDarkMode` hook for state management
- Local storage for preference persistence
- System preference detection

## 📧 Contact Form

The contact form currently opens the default email client. To implement server-side handling:

1. Replace the `mailto:` functionality in `ContactForm.tsx`
2. Add your preferred form handling service (Formspree, Netlify Forms, etc.)
3. Update the form submission logic

## 🚀 Deployment

### Bolt Hosting
The project is ready for Bolt Hosting deployment with the included build configuration.

### Other Platforms
- **Netlify**: Connect your repository and deploy
- **Vercel**: Import project and deploy automatically
- **GitHub Pages**: Use the build output from `dist/`

## 📄 License

This project is created for Amir Mohamed Hamdi El Sayed's personal portfolio.

## 🤝 Contributing

This is a personal portfolio project. For suggestions or improvements, please reach out to Amir directly.

---

**Built with ❤️ by Amir Mohamed Hamdi El Sayed**

For any questions or updates needed, contact: [amirhamdi2112@gmail.com](mailto:amirhamdi2112@gmail.com)
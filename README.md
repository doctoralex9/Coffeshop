# ☕ Coffee Spot - Modern Café Website

A beautiful, responsive website for Coffee Spot café built with Next.js 16, React, TypeScript, and Tailwind CSS. Features stunning animations, smooth navigation, and a modern glass-morphism design.

![Next.js](https://img.shields.io/badge/Next.js-16.0.7-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8?style=flat-square&logo=tailwind-css)

## ✨ Features

### 🎨 Design & UI
- **Modern Glass-Morphism Navbar** - Transparent navbar with backdrop blur that hides on scroll down
- **Responsive Design** - Fully responsive across all devices (mobile, tablet, desktop)
- **Smooth Animations** - Custom CSS animations and transitions throughout
- **Image Carousels** - Automatic rotating background and product images
- **Professional Color Scheme** - Warm amber and orange tones with clean white accents

### 🚀 Functionality
- **Smart Navigation** - Context-aware scroll-to-section functionality across all pages
- **Menu Showcase** - Dynamic menu categories with hover effects and detailed descriptions
- **About Section** - Transparent overlay design with business information
- **Contact Footer** - Complete contact information with "Back to Top" button
- **Smooth Scrolling** - Seamless navigation between sections

### 📱 Pages
1. **Home** - Hero section with animated background carousel and call-to-action buttons
2. **Menu** - Full menu with categories (Hot Coffees, Cold Refreshments, Breakfast)
3. **About the Place** - Detailed information about Coffee Spot
4. **Contact** - Footer section with hours, location, and contact details

## 🛠️ Tech Stack

- **Framework:** Next.js 16 with Turbopack
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **UI Components:** HeroUI (NextUI)
- **Image Optimization:** Next.js Image component

## 📦 Installation

### Prerequisites
- Node.js 18+ and npm

### Setup

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/coffee-spot.git
cd coffee-spot
```

2. **Install dependencies**
```bash
npm install
```

3. **Run development server**
```bash
npm run dev
```

4. **Open in browser**
```
http://localhost:3000
```

## 🏗️ Build & Deploy

### Production Build
```bash
npm run build
npm start
```

### Development
```bash
npm run dev
```

## 📁 Project Structure

```
cafe/
├── app/
│   ├── components/
│   │   ├── Navbar.tsx              # Responsive navigation bar
│   │   ├── Hero.tsx                # Hero section with carousel
│   │   ├── MenuPreview.tsx         # Menu preview cards
│   │   ├── Footer.tsx              # Footer with contact info
│   │   ├── ImageCarousel.tsx       # Reusable image carousel
│   │   └── BackgroundCarousel.tsx  # Background image carousel
│   ├── menu/
│   │   └── menu.tsx                # Full menu page
│   ├── about_the_place/
│   │   └── page.tsx                # About page
│   ├── photo-feed/
│   │   ├── photos/                 # Image assets
│   │   └── photos.ts               # Image exports
│   ├── globals.css                 # Global styles
│   └── page.tsx                    # Home page
├── public/
│   └── photo-feed/photos/          # Public image assets
└── package.json
```

## 🎯 Key Features Implementation

### Horizontal Programming
The project follows horizontal programming principles with reusable, configurable components:

```typescript
// Example: Reusable navigation function
const navigateToSection = (sectionId: string, pathname: string, router: any) => {
  if (pathname === '/') {
    // Scroll on same page
    element.scrollIntoView({ behavior: 'smooth' });
  } else {
    // Navigate to home page first
    router.push(`/#${sectionId}`);
  }
};
```

### Responsive Navbar
- Auto-hides on scroll down
- Shows on scroll up
- Mobile hamburger menu
- Glass-morphism effect with amber theme

### Dynamic Menu System
```typescript
const menuCategories = [
  {
    title: "Hot Coffees",
    items: [
      {
        name: "Classic Espresso",
        price: "€2.20",
        image: wondersImages[15],
        description: "A rich, aromatic espresso..."
      }
    ]
  }
];
```

## 🎨 Customization

### Colors
The site uses an amber/orange color scheme. To customize:
- Primary: `amber-600` (navbar, buttons)
- Hover: `amber-400` (links, hover states)
- Background: `amber-950/10` (navbar background)

### Images
Add new images to:
1. `app/photo-feed/photos/` (source)
2. `public/photo-feed/photos/` (public access)
3. Update `app/photo-feed/photos.ts`

## 📱 Responsive Breakpoints

- Mobile: `< 768px`
- Tablet: `768px - 1024px`
- Desktop: `> 1024px`

## 🔧 Configuration

### Menu Items
Edit `app/menu/menu.tsx` to add/modify menu items:

```typescript
{
  name: "Your Item",
  price: "$X.XX",
  image: wondersImages[index],
  description: "Optional description"
}
```

### Navigation Links
Edit `app/components/Navbar.tsx` to add/modify navigation:

```typescript
<Link href="/new-page">New Page</Link>
```

## 🌟 Features Highlights

- ✅ **SEO Optimized** - Next.js static generation
- ✅ **Fast Performance** - Turbopack for faster builds
- ✅ **Image Optimization** - Next.js Image component with lazy loading
- ✅ **Smooth Animations** - Custom CSS keyframe animations
- ✅ **Accessibility** - ARIA labels and semantic HTML
- ✅ **Type Safety** - Full TypeScript implementation

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

- **Website:** [Coffee Spot](http://localhost:3000)
- **Email:** info@coffeespot.com
- **Location:** Downtown, 123 Coffee Street

## 🙏 Acknowledgments

- Design inspiration from modern café websites
- Icons by [Lucide Icons](https://lucide.dev/)
- UI Components by [HeroUI](https://www.heroui.com/)

---

**Made with ❤️ and ☕ for Coffee Spot**

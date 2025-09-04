# AI Journey Website

A beautiful, modern website showcasing my journey learning AI and machine learning tools. Built with Next.js, TypeScript, and Tailwind CSS.
<h3>the link : <a href="https://my-ai-journey-abdellah.vercel.app/">my-ai-journey-abdellah.vercel.app</a></h3>

## 🚀 Features

- **Beautiful Animations**: Smooth scroll animations and hover effects using Framer Motion
- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Clean, professional design with white and blue color scheme
- **Interactive Cards**: Tool cards with status indicators and download functionality
- **Individual Tool Pages**: Dedicated pages for each AI tool with detailed information

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

## 📁 Project Structure

```
├── app/
│   ├── globals.css          # Global styles and Tailwind directives
│   ├── layout.tsx           # Root layout component
│   ├── page.tsx             # Home page with hero and tools section
│   ├── numpy/
│   │   └── page.tsx         # NumPy tutorial page
│   ├── pandas/
│   │   └── page.tsx         # Pandas tutorial page
│   └── scikit-learn/
│       └── page.tsx         # Scikit-learn learning page
├── components/
│   └── ToolCard.tsx         # Reusable tool card component
├── assets/                  # Your tutorial files
│   ├── NumPy/
│   │   └── NumPy-brief.ipynb
│   ├── Pandas/
│   │   └── tutorial.ipynb
│   └── Skit-learn/          # Empty (currently learning)
└── public/                  # Static assets
```

## 🎨 Design Features

### Color Scheme
- **Primary**: Blue gradient (#3b82f6 to #1d4ed8)
- **Background**: Clean white (#ffffff)
- **Text**: Dark gray (#1f2937)
- **Accents**: Light blue and gray variations

### Animations
- **Fade-in effects** on page load
- **Slide-up animations** for content sections
- **Hover effects** on cards and buttons
- **Floating background elements** in hero section
- **Smooth scrolling** between sections

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd ai-journey-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎯 Current Tools

### ✅ Completed
- **NumPy**: Fundamental package for scientific computing
- **Pandas**: Data manipulation and analysis library

### 🔄 Currently Learning
- **Scikit-learn**: Machine learning library

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🎨 Customization

### Adding New Tools
1. Add your tutorial file to the `assets/` directory
2. Update the tools array in `app/page.tsx`
3. Create a new page in `app/[tool-name]/page.tsx`
4. Update the ToolCard component if needed

### Styling Changes
- Modify `tailwind.config.js` for theme customization
- Update `app/globals.css` for custom styles
- Adjust component styles in individual files

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**

# AI Resume Analyzer MVP - Design Style Guide

## Design Philosophy

### Visual Language
**Professional Intelligence**: The design embodies the intersection of cutting-edge AI technology and professional human resources expertise. Every element should convey sophistication, trustworthiness, and technological advancement while remaining approachable and user-friendly.

**Data-Driven Aesthetic**: Clean, analytical visual language that reflects the application's purpose of extracting meaningful insights from unstructured data. The design should feel like a premium business intelligence tool.

**Modern Minimalism**: Embrace whitespace, clean lines, and purposeful design elements that guide the user's attention to what matters most - the insights and recommendations.

## Color Palette

### Primary Colors
- **Deep Slate**: `#1e293b` - Primary text, headers, and key UI elements
- **Soft White**: `#fefefe` - Background and content areas
- **Accent Blue**: `#3b82f6` - Interactive elements, progress indicators, and highlights

### Secondary Colors
- **Success Green**: `#10b981` - Positive scores, matched skills, success states
- **Warning Amber**: `#f59e0b` - Moderate scores, attention areas, pending states  
- **Neutral Gray**: `#64748b` - Secondary text, borders, subtle elements

### Data Visualization Palette
- **Primary Data**: `#3b82f6` (Accent Blue) - Main data series and positive metrics
- **Secondary Data**: `#10b981` (Success Green) - Comparative data and success indicators
- **Tertiary Data**: `#f59e0b` (Warning Amber) - Warning states and moderate performance
- **Background Data**: `#e2e8f0` - Grid lines and background elements

## Typography

### Primary Font: Inter
**Usage**: Headers, navigation, and primary content
- **Display**: Inter Bold (700) - Main headings and hero text
- **Heading**: Inter SemiBold (600) - Section headers and titles  
- **Body**: Inter Regular (400) - Primary content and descriptions
- **Caption**: Inter Medium (500) - Labels and metadata

### Secondary Font: JetBrains Mono
**Usage**: Code snippets, technical data, and monospace elements
- **Code**: JetBrains Mono Regular (400) - Technical content and data display

## Visual Effects & Animation

### Core Libraries Integration
- **Anime.js**: Smooth micro-interactions and state transitions
- **ECharts.js**: Interactive data visualizations with hover effects
- **Splitting.js**: Text animation effects for headings
- **Typed.js**: Typewriter effects for dynamic content
- **p5.js**: Background particle effects and creative coding elements

### Animation Principles
- **Subtle Motion**: All animations serve a functional purpose and enhance usability
- **Performance First**: Smooth 60fps animations that don't impact performance
- **Purposeful Timing**: 200-400ms duration for micro-interactions, 600-800ms for page transitions
- **Easing**: Custom cubic-bezier curves for natural, professional motion

### Background Effects
**Subtle Particle System**: Using p5.js to create a gentle, animated background that suggests data flow and AI processing without being distracting. Particles should be minimal, slow-moving, and use the primary color palette.

### Interactive Elements
- **Hover States**: Subtle scale (1.02x) and shadow elevation
- **Button Animations**: Color transitions and gentle glow effects
- **Card Interactions**: Lift effect with increased shadow depth
- **Loading States**: Elegant progress indicators with smooth transitions

## Layout & Grid System

### Grid Structure
- **Desktop**: 12-column grid with 24px gutters
- **Tablet**: 8-column grid with 20px gutters  
- **Mobile**: 4-column grid with 16px gutters

### Spacing Scale
- **Micro**: 4px - Fine adjustments and borders
- **Small**: 8px - Element padding and margins
- **Medium**: 16px - Component spacing
- **Large**: 24px - Section spacing
- **XL**: 48px - Major section breaks
- **XXL**: 96px - Page-level spacing

## Component Design

### Navigation Bar
- **Height**: 64px
- **Background**: Soft White with subtle shadow
- **Typography**: Inter SemiBold (600), 14px
- **Hover Effect**: Underline animation with Accent Blue

### Cards
- **Background**: Soft White
- **Border**: 1px solid Neutral Gray (subtle)
- **Border Radius**: 12px
- **Shadow**: Subtle elevation (0 4px 12px rgba(0,0,0,0.05))
- **Padding**: 24px
- **Hover State**: Increased elevation and subtle scale

### Buttons
- **Primary**: Accent Blue background, white text, 12px border radius
- **Secondary**: Transparent background, Accent Blue border and text
- **Hover**: Gentle glow effect and color transition
- **Padding**: 12px 24px for primary, 10px 22px for secondary

### Form Elements
- **Input Fields**: Clean borders, focused state with Accent Blue
- **File Upload**: Drag-and-drop zone with dashed border and hover states
- **Dropdowns**: Custom styling matching overall aesthetic

## Data Visualization Style

### Chart Design Principles
- **Clean Aesthetics**: Minimal grid lines, clean axes, purposeful use of color
- **Interactive Elements**: Hover states reveal detailed information
- **Responsive Design**: Charts adapt gracefully to different screen sizes
- **Accessibility**: High contrast ratios and clear visual hierarchy

### Specific Chart Types
- **Radar Charts**: For skills comparison with smooth animations
- **Progress Rings**: For overall match scores with gradient fills
- **Bar Charts**: For experience and qualification comparisons
- **Timeline**: For career progression visualization

## Responsive Design

### Breakpoints
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: 1024px - 1440px
- **Large Desktop**: 1440px+

### Mobile Adaptations
- **Navigation**: Hamburger menu with slide-out drawer
- **Cards**: Full-width with adjusted padding
- **Charts**: Simplified versions with touch-friendly interactions
- **Typography**: Slightly larger sizes for better readability

## Accessibility

### Color Contrast
- **Text on Background**: Minimum 4.5:1 ratio
- **Interactive Elements**: Minimum 3:1 ratio for large text
- **Data Visualization**: Alternative patterns for color-blind users

### Interactive Elements
- **Focus States**: Clear visual indicators for keyboard navigation
- **Screen Reader**: Proper ARIA labels and semantic HTML
- **Motion**: Respect prefers-reduced-motion settings

This design system creates a sophisticated, professional application that demonstrates both technical capability and design excellence, perfect for showcasing AI-powered resume analysis to potential users and stakeholders.
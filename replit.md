# Portfolio Website - System Architecture

## Overview

This is a full-stack portfolio website built with React, Node.js, Express, and PostgreSQL. The application showcases a developer's projects, skills, and contact information through a modern, responsive interface. The system follows a monorepo structure with separate client and server directories, utilizing TypeScript throughout for type safety.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Bundler**: Vite for fast development and optimized builds
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state management
- **UI Framework**: Shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Style**: RESTful API design
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured via Neon serverless)
- **Session Management**: Express sessions with PostgreSQL storage

### Build System
- **Development**: TSX for running TypeScript files directly
- **Production Build**: Vite for client, esbuild for server
- **Package Manager**: npm with lockfile v3

## Key Components

### Database Schema
Located in `shared/schema.ts`, defines four main entities:
- **Users**: Authentication and user management
- **Projects**: Portfolio project information with metadata
- **Skills**: Technical skills with categories and proficiency levels
- **Contacts**: Contact form submissions

### API Routes
RESTful endpoints defined in `server/routes.ts`:
- `GET /api/projects` - Retrieve all projects
- `GET /api/projects/featured` - Get featured projects only
- `GET /api/projects/:id` - Get specific project details
- `GET /api/skills` - Retrieve all skills
- `POST /api/contact` - Submit contact form

### Frontend Components
Modular component structure:
- **Layout Components**: Navigation, Hero, Footer
- **Section Components**: About, Projects, Skills, Contact
- **UI Components**: Reusable Shadcn/ui components
- **Modal Components**: Project detail modal

### Storage Layer
Dual storage implementation:
- **Interface**: `IStorage` defines contract for data operations
- **Implementation**: `MemStorage` class provides in-memory storage with seeded data
- **Future**: Designed to easily swap to database storage

## Data Flow

1. **Client Request**: React components use TanStack Query to fetch data
2. **API Layer**: Express routes handle HTTP requests
3. **Storage Layer**: Storage interface abstracts data persistence
4. **Response**: JSON data returned to client and cached by React Query
5. **UI Update**: Components re-render with new data

Contact form submissions follow a similar pattern but include form validation and toast notifications for user feedback.

## External Dependencies

### Core Framework Dependencies
- React ecosystem (React, React DOM, React Query)
- Express.js with TypeScript support
- Drizzle ORM with PostgreSQL dialect

### UI and Styling
- Radix UI primitives for accessible components
- Tailwind CSS for utility-first styling
- Lucide React for consistent iconography

### Development Tools
- Vite with React plugin for fast development
- TypeScript for type safety
- ESLint and Prettier (implied by standard setup)

### Database
- PostgreSQL as primary database
- Neon serverless for managed PostgreSQL hosting
- Connection pooling via Drizzle

## Deployment Strategy

### Development Environment
- **Command**: `npm run dev`
- **Port**: 5000 (configured in Replit)
- **Hot Reload**: Vite HMR for client, TSX watch mode for server

### Production Build
- **Client Build**: Vite bundles React app to `dist/public`
- **Server Build**: esbuild bundles Express server to `dist/index.js`
- **Static Assets**: Client build output served by Express

### Replit Configuration
- **Modules**: Node.js 20, Web, PostgreSQL 16
- **Deployment**: Autoscale deployment target
- **Port Mapping**: Internal 5000 → External 80

### Environment Variables
- `DATABASE_URL`: PostgreSQL connection string
- `NODE_ENV`: Environment mode (development/production)

## Changelog

```
Changelog:
- June 15, 2025. Initial setup
- June 15, 2025. Updated for game client programmer portfolio with dark theme:
  * Changed from full-stack web developer to game client programmer
  * Updated all content to Korean language
  * Implemented complete dark theme styling
  * Updated skills to focus on Unity, Unreal Engine, C#, C++
  * Changed projects to game development focused (3D RPG, FPS, Mobile Puzzle)
  * Removed progress bars from skills section, using badges instead
  * Applied gaming-focused color scheme with cyan accents
- June 15, 2025. Design overhaul based on reference images:
  * Implemented left-right split layout with glowing profile image
  * Added large background text effects ("HOME", "ABOUT", "PROJECTS")
  * Created tabbed project navigation (Unity, Unreal Engine, Mobile, Web)
  * Added pagination dots and enhanced hover effects
  * Removed Contact section per user request
  * Updated navigation to English labels
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
Profile type: Game client programmer with Unity and Unreal Engine experience
UI Theme: Dark theme with gaming aesthetic
Language: Korean content preferred
Skills display: Badge-based instead of progress bars
```
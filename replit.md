# Overview

This is a real-time chat application called "DotWork" built with a React frontend and Express.js backend. The application enables users to create and join chat rooms through URL-based access without requiring user registration. It supports multiple chat types (private, shared, group) and features both Japanese and English language interfaces. The system uses a modern tech stack with TypeScript throughout, Tailwind CSS for styling, and implements real-time messaging through polling.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Routing**: Wouter for client-side routing with pages for home, chat, docs, and about
- **State Management**: TanStack Query (React Query) for server state management and caching
- **UI Framework**: Radix UI primitives with shadcn/ui components for consistent design system
- **Styling**: Tailwind CSS with CSS variables for theming, supporting both light and dark modes
- **Internationalization**: Custom context-based i18n system supporting Japanese and English

## Backend Architecture
- **Framework**: Express.js with TypeScript running on Node.js
- **API Design**: RESTful API with dedicated routes for rooms and messages
- **Data Validation**: Zod schemas for runtime type checking and validation
- **Error Handling**: Centralized error handling middleware with structured error responses
- **Development Tools**: Vite integration for development with hot module replacement

## Data Storage Solutions
- **Primary Database**: PostgreSQL configured through Drizzle ORM
- **ORM**: Drizzle ORM with TypeScript-first schema definitions
- **Migrations**: Drizzle Kit for database schema management and migrations
- **Fallback Storage**: In-memory storage implementation for development/testing
- **Schema**: Separate tables for rooms and messages with foreign key relationships

## Real-time Communication
- **Strategy**: Polling-based updates (3-second intervals) instead of WebSockets
- **Rationale**: Simpler implementation and deployment, sufficient for moderate real-time needs
- **Message Retrieval**: Automatic polling for new messages when in active chat rooms
- **Performance**: Query invalidation and caching through TanStack Query

## Authentication and Authorization
- **Approach**: Anonymous user system with username-based identification
- **Room Access**: URL-based room joining without authentication barriers
- **Security**: Basic input validation and sanitization, no sensitive data storage

# External Dependencies

## Database and ORM
- **@neondatabase/serverless**: Serverless PostgreSQL database connection
- **drizzle-orm**: TypeScript ORM for database operations
- **drizzle-zod**: Integration between Drizzle schemas and Zod validation

## UI and Styling
- **@radix-ui/***: Comprehensive set of unstyled, accessible UI primitives
- **tailwindcss**: Utility-first CSS framework for styling
- **class-variance-authority**: Utility for creating variant-based component APIs
- **clsx**: Utility for conditionally constructing className strings

## State Management and Data Fetching
- **@tanstack/react-query**: Powerful data synchronization for React
- **react-hook-form**: Performant forms with easy validation
- **@hookform/resolvers**: Validation resolvers for react-hook-form

## Development and Build Tools
- **vite**: Fast build tool and development server
- **@vitejs/plugin-react**: React plugin for Vite
- **typescript**: Static type checking
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay
- **tsx**: TypeScript execution for Node.js

## Utilities and Enhancements
- **date-fns**: Modern JavaScript date utility library
- **nanoid**: Small, secure, URL-friendly unique string ID generator
- **wouter**: Minimalist routing for React applications
- **cmdk**: Command palette component for React
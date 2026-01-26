# MerchWay

The premier destination for exclusive merchandise and collectibles, built with **TanStack Start**, **Tailwind CSS v4**, and **Drizzle ORM** with **PostgreSQL**.

## 🚀 Features

- **TanStack Start**: Full-stack React framework with file-based routing and SSR
- **Tailwind CSS v4**: The latest utility-first CSS framework with native CSS variable configuration
- **Drizzle ORM**: Type-safe PostgreSQL ORM with migrations
- **TypeScript**: Full type safety throughout the application
- **Clean Architecture**: Organized project structure ready for expansion

## 📋 Prerequisites

- **Node.js 18+** or **Bun**
- **PostgreSQL** database (local or remote)

## ⚡ Quick Start

### 1. Installation

```bash
# Clone the repository
git clone <repository-url>
cd merch-way

# Install dependencies
npm install
# or
bun install
```

### 2. Database Setup

```bash
# Copy environment file
cp .env.example .env

# Edit .env with your PostgreSQL credentials
# DATABASE_URL=postgresql://username:password@localhost:5432/database_name
```

### 3. Database Migration

```bash
# Generate migration files from schema
npm run db:generate

# Apply migrations to database
npm run db:push

# Optional: Open Drizzle Studio (database GUI)
npm run db:studio
```

### 4. Development

```bash
# Start development server
npm run dev

# Open http://localhost:3000
```

## 📁 Project Structure

```
merch-way/
├── src/
│   ├── db/                    # Database layer
│   │   ├── schema/           # Database schemas
│   │   ├── connection.ts     # Database connection
│   │   └── queries.ts        # Pre-built query functions
│   ├── lib/
│   │   └── utils.ts          # Utility functions
│   ├── routes/               # File-based routing
│   │   ├── __root.tsx       # Root layout
│   │   └── index.tsx        # Home page
│   ├── styles/
│   │   └── app.css          # Tailwind v4 configuration & styles
│   └── components/           # React components
├── drizzle.config.ts         # Drizzle ORM configuration
├── vite.config.ts           # Vite configuration
└── package.json             # Dependencies and scripts
```

## 🗄️ Database Schema

The application manages data using Drizzle ORM.

### Adding New Tables

1. **Create schema file** in `src/db/schema/your-table.ts`
2. **Export from** `src/db/schema/index.ts`
3. **Generate migration**: `npm run db:generate`
4. **Apply to database**: `npm run db:push`

## 🎨 Styling System

Built with **Tailwind CSS v4**.

Configuration is handled directly in `src/styles/app.css` using the `@theme` block, rather than a JavaScript configuration file.

### Custom Theme Example
```css
@theme {
  --color-primary-50: #f9fafb;
  --color-primary-100: #ffffff;
  --font-manrope: "Manrope", sans-serif;
}
```

## 🔧 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run serve` | Preview production build |
| `npm run db:generate` | Generate database migrations |
| `npm run db:push` | Apply schema to database |
| `npm run db:studio` | Open Drizzle Studio |
| `npm run lint` | Run ESLint |
| `npm run format` | Format code with Prettier |

## 🌍 Environment Variables

```env
# Database Configuration
DATABASE_URL=postgresql://username:password@localhost:5432/database_name

# Application
NODE_ENV=development
PORT=3000
```

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.
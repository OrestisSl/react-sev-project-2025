# React SEV Project 2025 🍳

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue?logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.18-blue?logo=tailwind-css)
![Vite](https://img.shields.io/badge/Vite-7.2.4-purple?logo=vite)
![React Router](https://img.shields.io/badge/React_Router_Dom-7.11.0-green?logo=react-router-dom)
![React Hook Form](https://img.shields.io/badge/React_Hook_Form-7.43-blue?logo=react-hook-form)
![Zod](https://img.shields.io/badge/Zod-4.3.4-purple?logo=zod)

A **modern, responsive recipe web application** built with **React**, **TypeScript**, **Tailwind CSS**, and **React Router**. Browse, view, create, and search for recipes with detailed instructions, ingredients, difficulty levels, servings, prep time, and images.

---

## 🚀 Table of Contents

- [Features](#-features)
- [Demo](#-demo)
- [Technologies](#-technologies)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
---

## ✨ Features

- Display recipes in a **responsive grid layout**.
- View **recipe details**: title, ingredients, instructions, difficulty, servings, prep time, and image.
- **Search recipes** by title.
- **Create recipes** with dynamic forms (React Hook Form + Zod validation).
- **Delete recipes** with immediate UI update.
- **Empty state UI** with friendly illustration when no recipes exist.
- **Dynamic difficulty styling** for Easy, Medium, Hard.
- Fully **mobile-responsive**, with modern UI/UX.

---

## 🎬 Demo

Live project deployed on Netlify: [RecipeBook SEV](https://recipebook-sev.netlify.app)

---

## 🛠 Technologies

- **React 19** – Component-based UI library
- **React Context API** – Global state management for recipes
- **TypeScript** – Static typing for better developer experience
- **Tailwind CSS** – Utility-first styling for rapid, responsive design
- **React Router v7** – Routing and navigation
- **React Icons** – Modern icon set
- **Vite** – Fast development and build tool
- **React Hook Form** – Form management
- **Zod** – Schema-based form validation

---

## 📂 Project Structure

```text
react-sev-project-2025/
├─ public/                     # Static assets like favicon, SVGs, etc.
├─ src/
│  ├─ assets/                  # Images, SVGs, icons
│  ├─ components/              # Reusable UI components (RecipeCard, NoRecipesUI, Hero, etc.)
│  ├─ constants/               # Static data (pre-filled recipes, categories)
│  ├─ context/                 # React Contexts (RecipesContext)
│  ├─ layouts/                 # Layout components (MainLayout)
│  ├─ lib/                     # Schemas and validation (Zod schemas)
│  ├─ pages/                   # Route pages (Home, CreateRecipe, ViewRecipe)
│  ├─ routes/                  # React Router configuration
│  ├─ types/                   # TypeScript types
│  ├─ util/                    # Helper functions (e.g., difficultyColor)
│  ├─ App.tsx                   # Root app component
│  ├─ index.css                   # Tailwind imports, global styles, and custom CSS variables (colors, fonts, spacing)
│  └─ main.tsx                  # Entry point (Vite)
├─ package.json
├─ tsconfig.json
├─ tailwind.config.js
└─ vite.config.ts
```

## 🏁 Getting Started

Follow these steps to set up and run the project locally:

### 1. Clone the repository

```bash
git clone https://github.com/OrestisSl/react-sev-project-2025.git
cd react-sev-project-2025
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

### 4. Build for production

```bash
npm run build
```

### 5. Preview the production build locally

```bash
npm run preview
```

### 6. Deployment

The project can be deployed to Netlify, or any static hosting service.

If using Netlify with React Router, include a \_redirects file in the public/ folder to handle client-side routing:

```bash
/* /index.html 200
```

# React ecommerce app

### Packages used
- tailwind
- dasyUI
- react-router
- zustand

### Project layout
```
/src\
├── /components   // Reusable UI components (buttons, cards, modals, etc.)
│ ├── Button.jsx
│ ├── Card.jsx
│ ├── Modal.jsx
│ ├── index.js
│
├── /layouts   // Page layouts (header, sidebar, footer, etc.)
│ ├── MainLayout.jsx
│ ├── AuthLayout.jsx
│
├── /pages   // Individual pages (Home, About, Dashboard, etc.)
│ ├── Home.jsx
│ ├── Dashboard.jsx
│ ├── About.jsx
│
├── /hooks   // Custom hooks (useAuth, useFetch, etc.)
│ ├── useAuth.js
│ ├── useFetch.js
│
├── /store   // Global state management (redux, zustand)
│ ├── AuthState.jsx
│ ├── ThemeState.jsx
│
├── /services   // API services (fetching data, handling requests)
│ ├── authService.js
│ ├── userService.js
│
├── /utils   // Utility functions (helpers, constants, etc.)
│ ├── formatDate.js
│ ├── validateForm.js
│
├── /routes   // App routing configuration (React Router setup)
│ ├── AppRoutes.jsx
│
├── /assets   // Static files (images, fonts, styles)
│ ├── logo.png
│ ├── styles.css
│
├── App.jsx   // Root component
├── index.js
```

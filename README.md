# Next.js Project with Theme Toggle and Multiple Pages

This project is a Next.js application that includes a theme toggle feature and multiple pages for different functionalities.

## Project Structure

- `app/`: Contains the main application pages and layout
  - `layout.tsx`: Main layout component for the application
  - `page.tsx`: Home page component
  - `otp/page.tsx`: One-Time Password (OTP) page
  - `api-usage/page.tsx`: API usage page
  - `new-project/page.tsx`: New project creation page
- `components/`: Reusable React components
  - `Sidebar.tsx`: Sidebar component for navigation
  - `ThemeProvider.tsx`: Provider component for theme context
  - `ThemeToggle.tsx`: Toggle component for switching between light and dark themes

## Features

- **Theme Toggle**: Users can switch between light and dark themes using the ThemeToggle component.
- **Sidebar Navigation**: Easy navigation between different pages of the application.
- **Multiple Pages**: Includes pages for home, OTP, API usage, and creating new projects.

## Getting Started

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

[Add your chosen license here]


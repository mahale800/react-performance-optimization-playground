# React Performance Optimization Playground

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)

A hands-on interactive playground built with **React 18** and **Vite** to demonstrate common performance battles and their solutions. This project walks through 5 days of specific optimization challenges, providing "Before" (unoptimized) and "After" (optimized) comparisons in a modern **Glassmorphism UI**.

## 📸 Screenshots

| Dashboard View | Search Optimization |
|:---:|:---:|
| ![Dashboard Mockup](https://via.placeholder.com/600x300?text=Dashboard+View) | ![Search UI](https://via.placeholder.com/600x300?text=Search+Optimization) |
| *Modern Glassmorphism UI* | *Virtualization & Memoization* |

> *Note: Replace the placeholder URLs above with actual screenshots of your application.*

## 🚀 Tech Stack

-   **Framework:** [React 18](https://reactjs.org/)
-   **Build Tool:** [Vite](https://vitejs.dev/)
-   **Styling:** Modern CSS (Glassmorphism, Flexbox, Grid)
-   **Linting:** ESLint + Prettier

## 📚 Project Overview (Day-by-Day)

Each "Day" module isolates a specific performance concept.

| Module | 🔴 Problem (Before) | 🟢 Solution (After) |
| :--- | :--- | :--- |
| **Day 1: Basics** | Parent updates cause heavy child re-renders. | **`React.memo`** prevents unnecessary re-renders. |
| **Day 2: Computation** | Heavy calculations run on every render. | **`useMemo`** caches results based on dependencies. |
| **Day 3: Lists** | Rendering 1000+ nodes lags the UI. | **Efficient Slicing** (Virtualization concept) limits DOM nodes. |
| **Day 4: Loading** | Huge initial bundle size slows startup. | **`React.lazy` & `Suspense`** for code-splitting. |
| **Day 5: Architecture** | Lifting state too high affects siblings. | **State Colocation** moves state down to where it belongs. |

## 🛠️ How to Run Locally

1.  **Clone the repository**
    ```bash
    git clone https://github.com/your-username/react-performance-optimization-playground.git
    cd react-performance-optimization-playground
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Start the development server**
    ```bash
    npm run dev
    ```

4.  **Open in Browser**
    Navigate to `http://localhost:5173` to experience the playground.

## 📝 Contributing

Contributions are welcome! Please check the [CONTRIBUTING.md](CONTRIBUTING.md) file for guidelines.

1.  Fork the project.
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.

## 👤 Author

**Yash**

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

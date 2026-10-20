# React Performance Optimization Playground

[![React](https://img.shields.io/badge/React-19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

An interactive React lab for comparing common rendering problems with focused optimizations. Each module exposes a deliberately simple **Before** and **After** view so the difference can be observed in the UI, render counters, console, and browser Network panel.

## Modules

| Module | Before | After |
| --- | --- | --- |
| Day 1 | Parent updates re-render child cards | `React.memo` skips unchanged child cards |
| Day 2 | An expensive calculation runs on every render | `useMemo` recalculates only when its input changes |
| Day 3 | Every matching item is rendered | Results are bounded with `slice(0, 20)` |
| Day 4 | A heavy component is imported eagerly | `React.lazy` and `Suspense` load it on demand |
| Day 5 | Toggle state is held by the parent | State is colocated with the toggle |

The Day 3 example demonstrates bounded rendering rather than a full virtualization library. The deliberately expensive loop in Day 2 is a teaching aid, not a production benchmark.

## Run locally

```bash
git clone https://github.com/mahale800/react-performance-optimization-playground.git
cd react-performance-optimization-playground
npm ci
npm run dev
```

Open the local URL printed by Vite. Use the navigation bar to switch modules. For the loading example, open DevTools → Network and select **Load Heavy Component**.

## Quality checks

```bash
npm run lint
npm run build
```

The project currently has no automated test suite; the Before/After modules are the executable demonstrations.

## Project structure

```text
src/
├── App.jsx                 # Module navigation
├── components/             # Before/After demonstrations
├── index.css               # Shared playground styling
└── main.jsx                # React entry point
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for the contribution workflow.

## License

This project is available under the [MIT License](LICENSE).

## Author

Yash Mahale — [GitHub profile](https://github.com/mahale800)


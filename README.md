# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



// In this project the new problem solved by "netlify.toml" file.
 in live hosting redircet route is not work for react app as it is a Single page application.
 Because react doesn't generate new html file for new route, so netlify server doesn't aware about the redirecting changes, and it show 404 not found page. We basically handle routing in react by react-router or other package.There Link, navLink handle our routing. But direct routing from server or window.location can't make the same routing fature like react router dom.
 To handle this SPA redirecting issue in live server, use "netlify.toml" file.[In case of deployed site in netlify].

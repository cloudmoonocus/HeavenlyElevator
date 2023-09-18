const routes = [
  { path: "/", redirect: "/home" },
  { path: "/home", component: "./Home" },
  { path: "/allocation", component: "./Allocation" },
  { path: "/me", component: "./Me" },
  { path: "/login", component: "./Login" },
  { path: "/*", component: "@/components/404.tsx" },
];

export default routes;

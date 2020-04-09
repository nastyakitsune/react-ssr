import Home from "./Home";
import CreateForm from "./CreateForm";

export const pages = () => [
  { path: "/", exact: true, component: Home },
  { path: "/create", exact: true, component: CreateForm },
];

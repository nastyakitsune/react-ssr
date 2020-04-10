import Home from "./Home";
import CreateForm from "./CreateForm";
import FormSettings from "./FormSettings";

export const pages = () => [
  { path: "/", exact: true, component: Home },
  { path: "/create", exact: true, component: CreateForm },
  { path: "/settings", exact: true, component: FormSettings },
];

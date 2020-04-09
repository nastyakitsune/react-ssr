import React, { Fragment } from "react";
import { renderRoutes } from "react-router-config";
import { pages } from "../../containers";

export const Routes = () => <div>{renderRoutes(pages())}</div>;

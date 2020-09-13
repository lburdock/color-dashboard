/**
 * Implements Gatsby's SSR APIs.
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

import React from "react";
import App from "./src/components/layout/app";

export const wrapPageElement = ({ element, props }) => {
  return <App {...props}>{element}</App>;
};

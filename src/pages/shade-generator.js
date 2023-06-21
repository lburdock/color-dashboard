import React from "react";
import Seo from "../components/layout/seo";
import ShadeGenerator from "../page-content/shade-generator";

const IndexPage = () => {
  return (
    <>
      <Seo title="Shade generator" />
      <ShadeGenerator />
    </>
  );
};

export default IndexPage;

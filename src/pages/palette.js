import React from "react";
import Seo from "../components/layout/seo";
import Palette from "../page-content/palette";

const IndexPage = () => {
  return (
    <>
      <Seo title="Palette" />
      <Palette />
    </>
  );
};

export default IndexPage;

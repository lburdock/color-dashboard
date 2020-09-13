import React from "react";
import Seo from "../components/layout/seo";
import Palette from "../components/pages/palette";

const IndexPage = () => {
  return (
    <>
      <Seo title="Palette" />
      <Palette />
    </>
  );
};

export default IndexPage;

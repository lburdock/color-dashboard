import React from "react";
import Seo from "../components/layout/seo";
import AccessibilityChecker from "../components/pages/accessibility";

const AccessibilityPage = () => (
  <>
    <Seo
      title="Accessibility Checker"
      description="Check your foreground and background colors for accessibility. Accessible color combinations will be computed for you if your colors fail."
    />
    <AccessibilityChecker />
  </>
);

export default AccessibilityPage;

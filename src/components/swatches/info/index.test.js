import { render, fireEvent } from "@testing-library/react";
import React from "react";
import { ThemeProvider } from "styled-components";

import InfoSwatch from ".";
// import { RecentColorsProvider } from "../../../state/recent-colors-context";

describe("InfoSwatch", () => {
  it("renders the modal", () => {
    const { getByTestId } = render(
      <ThemeProvider
        theme={{
          colors: { success: "#178273", minGray: "#949494", link: "#3273dc" },
        }}
      >
        <InfoSwatch colorString="#dde1e6" data-testid="swatch">
          <div>Test</div>
        </InfoSwatch>
      </ThemeProvider>
    );
    const modal = getByTestId("swatch");
    expect(modal).toBeInTheDocument();
  });
});

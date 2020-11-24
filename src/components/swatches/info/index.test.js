import { render } from "@testing-library/react";
import React from "react";
import ThemeProvider from "../../../state/theme";
import InfoSwatch from ".";

describe("InfoSwatch", () => {
  it("renders the modal", () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <InfoSwatch colorString="#dde1e6" data-testid="swatch">
          <div>Test</div>
        </InfoSwatch>
      </ThemeProvider>
    );
    const modal = getByTestId("swatch");
    expect(modal).toBeInTheDocument();
  });
});

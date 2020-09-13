import { render } from "@testing-library/react";
import React from "react";
import { Icon, IconWrapper } from ".";

describe("Icon", () => {
  it("renders the icon", () => {
    const { getByTestId } = render(
      <Icon data-testid="icon-test" icon="fa-copy" />
    );
    const icon = getByTestId("icon-test");
    expect(icon).toBeInTheDocument();
  });

  it("adds appropriate classnames", () => {
    const { container } = render(<Icon className="test" icon="fa-copy" />);
    expect(container.firstChild).toHaveClass("far");
    expect(container.firstChild).toHaveClass("fa-copy");
    expect(container.firstChild).toHaveClass("test");
  });

  it("adds the icon type class correctly", () => {
    const { container } = render(<Icon icon="fa-copy" type="solid" />);
    expect(container.firstChild).toHaveClass("fas");
    expect(container.firstChild).toHaveClass("fa-copy");
  });
});

describe("IconWrapper", () => {
  it("renders the icon", () => {
    const { getByTestId } = render(
      <IconWrapper data-testid="icon-wrapper-test">
        <Icon icon="fa-copy" />
      </IconWrapper>
    );
    const icon = getByTestId("icon-wrapper-test");
    expect(icon).toBeInTheDocument();
  });

  it("adds appropriate classnames (small size)", () => {
    const { container } = render(
      <IconWrapper
        className="test"
        data-testid="icon-wrapper-test"
        size="small"
      >
        <Icon icon="fa-copy" />
      </IconWrapper>
    );
    expect(container.firstChild).toHaveClass("icon");
    expect(container.firstChild).toHaveClass("is-small");
    expect(container.firstChild).toHaveClass("test");
  });

  it("adds appropriate classnames (default size)", () => {
    const { container } = render(
      <IconWrapper data-testid="icon-wrapper-test">
        <Icon icon="fa-copy" />
      </IconWrapper>
    );
    expect(container.firstChild).toHaveClass("icon");
    expect(container.firstChild.firstChild).toHaveClass("fa-large");
  });

  it("adds appropriate classnames (medium size)", () => {
    const { container } = render(
      <IconWrapper data-testid="icon-wrapper-test" size="medium">
        <Icon icon="fa-copy" />
      </IconWrapper>
    );
    expect(container.firstChild).toHaveClass("icon");
    expect(container.firstChild).toHaveClass("is-medium");
    expect(container.firstChild.firstChild).toHaveClass("fa-2x");
  });

  it("adds appropriate classnames (large size)", () => {
    const { container } = render(
      <IconWrapper data-testid="icon-wrapper-test" size="large">
        <Icon icon="fa-copy" />
      </IconWrapper>
    );
    expect(container.firstChild).toHaveClass("icon");
    expect(container.firstChild).toHaveClass("is-large");
    expect(container.firstChild.firstChild).toHaveClass("fa-3x");
  });
});

import React from "react";
import { InvisibleButton } from "../../../components/buttons";
import { ExternalLink } from "../../../components/links";
import { Icon, IconWrapper } from "../../../components/icon";
import BasicModal from "../../../components/modals/basic";
import useModalState from "../../../state/modal-hook";
import cn from "../../../utils/cn";
import { ContrastRequirementsGrid } from "./accessibility-grid";

const Heading = ({ children, addSpace }) => (
  <h1 className={cn("is-5 has-text-weight-bold mb-3", addSpace && "mt-3")}>
    {children}
  </h1>
);

/**
 * Modal the explains contrast and accessibility
 */
const InfoModal = () => {
  const { closeModal, openModal, showModal } = useModalState();
  return (
    <>
      <IconWrapper as={InvisibleButton} aria-label="About" onClick={openModal}>
        <Icon aria-hidden="true" icon="fas fa-info-circle" />
      </IconWrapper>

      <BasicModal closeModal={closeModal} showModal={showModal}>
        <Heading>About this page</Heading>
        <p>
          This page calculates the contrast between your color selections to
          determine if they are accessible for your users. If they aren't, it
          suggests similar colors that are.
        </p>
        <Heading addSpace>What is contrast?</Heading>
        <p>
          The contrast between two colors is determined by the difference in
          luminance between them. Contrast is expressed as a ratio. This ratio
          can range from <code>1:1</code> (e.g., white text on a white
          background) to <code>21:1</code> (e.g., black text on a white
          background).
        </p>
        <Heading addSpace>About contrast and accessibility</Heading>
        <p>
          The color contrast between elements on a webpage must meet the minimum
          contrast values (called <strong>Level AA</strong>) to be considered
          accessible. This minimum contrast value is not the same for all
          elements. For example, large text has a lower contrast requirement
          since the size of the text makes it easier to see. These requirement
          are outlined in the{" "}
          <ExternalLink href="https://www.w3.org/TR/WCAG21/">
            WCAG 2.1 guidelines
          </ExternalLink>
          . The guidelines also provide contrast values for an optional enhanced
          accessibility level, called <strong>Level AAA</strong>. The chart
          below shows the minimum contrast needed for different components.
        </p>

        <Heading addSpace>Contrast value requirements</Heading>
        <ContrastRequirementsGrid />
      </BasicModal>
    </>
  );
};

export default InfoModal;

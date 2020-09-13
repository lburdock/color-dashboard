import { ChromePicker } from "react-color";
import styled from "styled-components";

export const ModalCard = styled.div`
  width: auto;
`;

export const ModalFooter = styled.footer`
  justify-content: center;
`;

export const ModalBody = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const StyledChromePicker = styled(ChromePicker)`
  border: 1px solid #ddd;
  box-shadow: none !important;
`;

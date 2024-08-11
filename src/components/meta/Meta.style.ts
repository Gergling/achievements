import styled from "@emotion/styled";
import { getLinearGradientBackgroundProperty } from "../../utils/get-linear-gradient-property";
import { StyledIconContainer } from "../common/icon/Icon.style";

const SIZE = 100;
const BORDER_WIDTH = 5;
const CONTAINER_SIZE = SIZE + (BORDER_WIDTH * 2);

export const MetaStyledIconContainer = styled(StyledIconContainer)`
  width: ${CONTAINER_SIZE}px;
  height: ${CONTAINER_SIZE}px;
`;

export const StyledColourIcon = styled.div<{
  colour: string;
}>`
  ${getLinearGradientBackgroundProperty}
  width: ${SIZE}px;
  height: ${SIZE}px;
  border-radius: 50%;
  border-width: ${BORDER_WIDTH}px;
  border-style: solid;
  border-color: ${({ colour }) => colour};
`;

export const Heading = styled.h1`
  text-align: center;
`;

export const Subheading = styled.h2`
  text-align: center;
`;
import styled from "@emotion/styled";

export const HEIGHT = 100;

export const StyledIconContainer = styled.div`
  width: 100px;
  height: ${HEIGHT}px;
  background-repeat: no-repeat;
  flex-shrink: 0;
  color: ${({ color }) => color};
`;

export const Unknown = styled.div`
  font-size: 90px;
  text-align: center;
  font-weight: bold;
`;

import emotionStyled from "@emotion/styled";

export const HEIGHT = 100;

export const Container = emotionStyled.div`
  width: 100px;
  height: ${HEIGHT}px;
  background-repeat: no-repeat;
  flex-shrink: 0;
  color: ${({ color }) => color};
`;
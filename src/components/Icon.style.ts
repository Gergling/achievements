import emotionStyled from "@emotion/styled";

export const Container = emotionStyled.div`
  width: 100px;
  height: 100px;
  background-repeat: no-repeat;
  flex-shrink: 0;
  color: ${({ color }) => color};
`;
import styled from "@emotion/styled";

export const Container = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const SubGoldContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const SubGoldItem = styled.div`
  min-width: 300px;
  width: 1%;
`;

export const Silver = styled(SubGoldItem)`
  flex-grow: 2;
`;

export const Bronze = styled(SubGoldItem)`
  flex-grow: 1;
`;

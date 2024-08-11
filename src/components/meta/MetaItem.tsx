import { StyledMetaItem } from "./MetaItem.style";

type MetaItemProps = {
  label: string;
  description: string;
  children: React.ReactNode;
};

export const MetaItem = ({ label, description, children }: MetaItemProps) => {
  return (
    <StyledMetaItem>
      <div>{children}</div>
      <div>
        <h3>{label}</h3>
        <p>{description}</p>
      </div>
    </StyledMetaItem>
  );
};
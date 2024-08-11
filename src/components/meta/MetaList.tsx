type MetaListProps = {
  children: React.ReactNode;
}

export const MetaList = ({ children }: MetaListProps) => {
  return (
    <ul>
      {children}
    </ul>
  );
};
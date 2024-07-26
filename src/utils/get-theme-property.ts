export const getThemeProperty = (name: string) => (theme: any) =>
  name.split('.').reduce((o: any, i: string) => (o as any)[i], theme.theme);

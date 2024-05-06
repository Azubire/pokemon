const ThemeProvider = ({
  children,
  theme,
}: {
  children: React.ReactNode;
  theme: string;
}) => {
  return <main className={theme}>{children}</main>;
};

export default ThemeProvider;

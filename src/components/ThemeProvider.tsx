import { TThemeType } from "@/types";

const ThemeProvider = ({
  children,
  theme,
}: {
  children: React.ReactNode;
  theme: TThemeType;
}) => {
  return <main className={theme}>{children}</main>;
};

export default ThemeProvider;

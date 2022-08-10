import "styled-components";
import { lightTheme } from "../styles/themes/light";

type LightThemeType = typeof lightTheme;

declare module "styled-components" {
  export interface DefaultTheme extends LightThemeType {}
}

// import the original module declaration
import "styled-components";

/**
 * Global theme object here, the default theme!
 */
declare module "styled-components" {
  export interface DefaultTheme extends Theme {}

  export interface Theme {
    palette: {
      darkgrey: string;
      lightgrey: string;
      greenHighlight: string;
      pinkHighlight: string;
      purpleAccent: string;
      backgroundGradient: string;
    };
  }
}
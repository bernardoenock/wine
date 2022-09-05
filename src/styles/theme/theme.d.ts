import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    backgroundColors: {
      primaryBackground: string;
      secondaryBackground: string;
      thirdBackground: string;
    };

    textColors: {
      textColor01: string;
      textColor02: string;
      textColor03: string;
      textColor04: string;
      textColor05: string;
      textColor06: string;
      textColor07: string;
      textColor08: string;
      textPrice: string;
      textLargePrice: string;
      textSelect: string;
      whiteBlur: string;
    };

    buttonColor: {
      primaryButton: string;
      textButton: string;
      secondaryButton: string;
      thirdButton: string;
    };

    borderColor: {
      border01: string;
      border02: string;
      border03: string;
      border04: string;
      border05: string;
      border06: string;
    };
  }
}

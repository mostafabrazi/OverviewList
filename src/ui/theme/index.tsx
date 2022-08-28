import * as React from 'react';
import {
  ThemeProvider as ReThemeProvider,
  TextProps,
  BoxProps,
  useTheme as useRTheme,
} from '@shopify/restyle';

type BaseThemeType = typeof BaseTheme & {
  textVariants: {[key: string]: TextProps<typeof BaseTheme>};
  navigation: any;
  buttonVariants: {[key: string]: BoxProps<typeof BaseTheme>};
};

const createTheme = <T extends BaseThemeType>(themeObject: T): T => themeObject;

const BaseTheme = {
  colors: {
    text: '#D8C288',
    primary: '#3C2518',
    secondary: '#D8C288',
    tertiary: '#9D9F9E',

    black: '#151522',
    grey1: '#333333',
    grey2: '#666666',
    grey3: '#C3C3C3',
    grey4: '#E4E4E4',
    white: 'white',
    red: '#EB5757',
  },
  spacing: {
    xs: 4,
    s: 8,
    ms: 10,
    m: 14,
    ml: 20,
    l: 24,
    xl: 40,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
};

export const theme = createTheme({
  ...BaseTheme,
  // TODO : Not sure if this the best way to handel navigation theme
  navigation: {
    dark: false,
    colors: {
      primary: 'rgb(0, 122, 255)',
      background: '#f8f8fa',
      card: '#f8f8fa',
      text: '#0c1245',
      border: 'rgb(199, 199, 204)',
      notification: 'red',
    },
  },
  buttonVariants: {
    defaults: {},
    primary: {
      backgroundColor: 'primary',
    },
    secondary: {
      backgroundColor: 'secondary',
    },
    outline: {
      backgroundColor: 'white',
      borderColor: 'primary',
      borderWidth: 1,
    },
  },
  textVariants: {
    defaults: {
      color: 'text',
    },
    header: {
      fontFamily: 'Inter',
      fontWeight: 'bold',
      fontSize: 22,
      lineHeight: 42.5,
      color: 'black',
    },
    subheader: {
      fontFamily: 'Inter',
      fontWeight: '600',
      fontSize: 28,
      lineHeight: 36,
      color: 'grey1',
    },
    body: {
      fontFamily: 'Inter',
      fontSize: 15,
      lineHeight: 24,
      color: 'grey2',
    },
    button_primary: {
      fontFamily: 'Inter',
      fontSize: 16,
      lineHeight: 22,
      color: 'white',
    },
    button_secondary: {
      fontFamily: 'Inter',
      fontSize: 16,
      lineHeight: 22,
      color: 'white',
    },
    button_outline: {
      fontFamily: 'Inter',
      fontSize: 16,
      lineHeight: 22,
      color: 'text',
    },
    label: {
      fontFamily: 'Inter',
      fontSize: 13,
      lineHeight: 18,
      color: 'grey2',
      paddingVertical: 's',
    },
  },
});

export type Theme = typeof theme;

export const ThemeProvider = ({children}: {children: React.ReactNode}) => (
  <ReThemeProvider theme={theme}>{children}</ReThemeProvider>
);

export const useTheme = () => useRTheme<Theme>();

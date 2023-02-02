export enum ThemeMode {
  'DARK' = 'dark',
  'LIGHT' = 'light',
}

export const Colors = {
  [ThemeMode.LIGHT]: {
    '--app-primary-color': '#ffc400',
    '--app-primary-color-hover': '#ffab00',
    '--app-primary-color-disabled': '#ffe57f',
    '--app-secondary-color': '#3949ab',
    '--app-secondary-color-hover': '#283593',
    '--app-secondary-color-disabled': '#8c9eff',
    '--background-color': '#f9fcff',
    '--text-color': '#444444',
    '--color-danger': '#ea4335',
    '--color-success': '#4bb543',
  },
  [ThemeMode.DARK]: {
    '--app-primary-color': '#ffc400',
    '--app-primary-color-hover': '#ffab00',
    '--app-primary-color-disabled': '#ffe57f',
    '--app-secondary-color': '#3949ab',
    '--app-secondary-color-hover': '#283593',
    '--app-secondary-color-disabled': '#8c9eff',
    '--background-color': '#444444',
    '--text-color': '#f9fcff',
    '--color-danger': '#ea4335',
    '--color-success': '#4bb543',
  },
};

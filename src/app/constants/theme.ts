export enum ThemeMode {
  'DARK' = 'dark',
  'LIGHT' = 'light',
}

export const Colors = {
  [ThemeMode.LIGHT]: {
    '--app-primary-color': '#ffc400',
    '--app-primary-color-hover': '#ffab00',
    '--app-primary-color-disabled': '#ffe57f',
    '--app-secondary-color': '#2f2f2f',
    '--app-secondary-color-hover': '#222222',
    '--app-secondary-color-disabled': '#eeeeee',
    '--background-color': '#f9fcff',
    '--surface-color': '#f9fcff',
    '--surface-hover-color': '#eeeeee',
    '--text-color': '#444444',
    '--color-danger': '#ea4335',
    '--color-success': '#4bb543',
    '--global-shadow-color': '#00000044',
  },
  [ThemeMode.DARK]: {
    '--app-primary-color': '#ffc400',
    '--app-primary-color-hover': '#ffab00',
    '--app-primary-color-disabled': '#ffe57f',
    '--app-secondary-color': '#f9fcff',
    '--app-secondary-color-hover': '#e2e2e2',
    '--app-secondary-color-disabled': '#ffffff',
    '--background-color': '#444444',
    '--surface-color': '#555555',
    '--surface-hover-color': '#5a5a5a',
    '--text-color': '#f9fcff',
    '--color-danger': '#ff9b93',
    '--color-success': '#4bb543',
    '--global-shadow-color': '#00000044',
  },
};

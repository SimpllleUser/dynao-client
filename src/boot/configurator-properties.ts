export enum Colors {
  primary = 'primary',
  secondary = 'secondary',
  accent = 'accent',
  dark = 'dark',
  positive = 'positive',
  negative = 'negative',
  info = 'info',
  warning = 'warning',
}

export const BackgroundColors = {
  ...Colors,
    white: 'grey-1'

}

export interface Option {
  label: string
  value: number | string
}

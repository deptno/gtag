import G from '../gtag'

export function config(config: '[AW_CONVERSION_ID]' | string, params: G.ControlParams): void
export function config(config: '[GA_MEASUREMENT_ID]' | string, params: G.ConfigGaMeasurementIdParams): void
export function config(config: '[AW_CONVERSION_ID]'|'[GA_MEASUREMENT_ID]' | string): void
export function config(config, params?) {
  window.gtag('config', config, params)
}

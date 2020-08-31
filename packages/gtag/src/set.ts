import G from '../gtag'

export function set(config: '[AW_CONVERSION_ID]' | string, params: G.ControlParams): void
export function set(config: '[GA_MEASUREMENT_ID]' | string, params: G.ConfigGaMeasurementIdParams): void
export function set(config: '[AW_CONVERSION_ID]'|'[GA_MEASUREMENT_ID]' | string): void
export function set(config, params?) {
  window.gtag('set', config, params)
}

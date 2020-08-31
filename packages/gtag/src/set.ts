import Gtag from '../gtag'

export function set(config: '[AW_CONVERSION_ID]' | string, params: Gtag.ControlParams): void
export function set(config: '[GA_MEASUREMENT_ID]' | string, params: Gtag.ConfigGaMeasurementIdParams): void
export function set(config: '[AW_CONVERSION_ID]'|'[GA_MEASUREMENT_ID]' | string): void
export function set(config: Gtag.ConfigType, params?: Gtag.ControlParams|Gtag.ConfigGaMeasurementIdParams) {
  window.gtag('set', config, params)
}

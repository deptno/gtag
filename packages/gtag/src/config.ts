import Gtag from '../gtag'

export function config(config: '[AW_CONVERSION_ID]' | string, params: Gtag.ControlParams): void
export function config(config: '[GA_MEASUREMENT_ID]' | string, params: Gtag.ConfigGaMeasurementIdParams): void
export function config(config: Gtag.ConfigType, params: Gtag.ControlParams|Gtag.ConfigGaMeasurementIdParams) {
  window.gtag('config', config, params)
}

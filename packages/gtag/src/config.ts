export function config(config: '[AW_CONVERSION_ID]' | string, params?: ControlParams): void
export function config(config: '[GA_MEASUREMENT_ID]' | string, params?: ConfigGaMeasurementIdParams): void
export function config(config: ConfigType, params?: ControlParams|ConfigGaMeasurementIdParams) {
  window.gtag('config', config, params)
}

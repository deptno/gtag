export function set(config: '[AW_CONVERSION_ID]' | string, params?: ControlParams): void
export function set(config: '[GA_MEASUREMENT_ID]' | string, params?: ConfigGaMeasurementIdParams): void
export function set(config: ConfigType, params?: ControlParams|ConfigGaMeasurementIdParams) {
  window.gtag('set', config, params)
}

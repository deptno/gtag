import * as G from './gtag'

export function set(config: string, params: G.ControlParams): void
export function set(config: string, params: G.ConfigGaMeasurementIdParams): void
export function set(config: string, params: G.ConfigUserIdParams): void
export function set(config: string): void
export function set(config: '[AW_CONVERSION_ID]'|'[GA_MEASUREMENT_ID]' | string, params?) {
  window.gtag('set', config, params)
}

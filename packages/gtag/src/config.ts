import * as G from './gtag'

export function config(config: string, params: G.ControlParams): void
export function config(config: string, params: G.ConfigGaMeasurementIdParams): void
export function config(config: string, params: G.ConfigUserIdParams): void
export function config(config: string): void
export function config(config: '[AW_CONVERSION_ID]'|'[GA_MEASUREMENT_ID]' | string, params?) {
  window.gtag('config', config, params)
}

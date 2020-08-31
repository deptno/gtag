import G from './gtag'

declare global {
  interface Window {
    dataLayer: unknown[]
    gtag: G.GTag
  }
}

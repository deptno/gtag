import {GTag} from './gtag'

declare global {
  interface Window {
    dataLayer: unknown[]
    gtag: GTag
  }
}

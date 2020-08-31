import Gtag from '../gtag'

export const gtag: Gtag.GTag = (command, value, params?) => {
  window.gtag(command, value, params)
}

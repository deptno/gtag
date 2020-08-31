import G from '../gtag'

export const gtag: G.GTag = (command, value, params?) => {
  window.gtag(command, value, params)
}

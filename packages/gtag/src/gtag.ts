import {GTag} from '../gtag'

export const gtag: GTag = (command, value, params?) => {
  window.gtag(command, value, params)
}

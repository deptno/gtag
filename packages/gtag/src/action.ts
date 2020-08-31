import Gtag from '../gtag'

export function action(action: string, params: Gtag.ActionParams): void {
  window.gtag('event', action, params)
}

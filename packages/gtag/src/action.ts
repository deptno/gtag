import G from '../gtag'

export function action(action: string, params: G.ActionParams): void {
  window.gtag('event', action, params)
}

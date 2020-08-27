export function action(action: string, params: ActionParams): void {
  window.gtag('event', action, params)
}
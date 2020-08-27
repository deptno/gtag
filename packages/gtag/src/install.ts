export const install = (id: string) => {
  if (typeof window === 'undefined') {
    return
  }

  const gtag = 'gtag'

  if (document.getElementById(gtag)) {
    return
  }

  const script = document.createElement('script')

  script.id = gtag
  script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`
  script.type = 'text/javascript'
  script.async = true

  document.head.appendChild(script)

  if (!window.dataLayer) {
    window.dataLayer = []
  }
  window.gtag = function () {
    window.dataLayer.push(arguments)
  }

  window.gtag('js', new Date())
  window.gtag('config', id)
}


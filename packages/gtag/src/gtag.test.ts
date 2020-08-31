import {gtag, event, action, config, set, ActionParams} from '..'

gtag('set', 'add_payment_info')

config('[AW_CONVERSION_ID]')
config('[AW_CONVERSION_ID]', {})

event('add_payment_info')
// @ts-expect-error
event('add_payment_info', {app_name: 'k'})
// @ts-expect-error
event('add_to_cart')

event('login', {method: 'k'})
event('login', {})

event('add_payment_info')
// @ts-expect-error
event('page_view', {checkout_option: 'a'})

// @ts-expect-error
event('hello')
// @ts-expect-error
event('a')

action('hello', {event_category: ''})
// @ts-expect-error
action('a')

set('[AW_CONVERSION_ID]')
set('[GA_MEASUREMENT_ID]')
set('[GA_MEASUREMENT_ID]', {page_location: ''})

// fixme: error case
set('[AW_CONVERSION_ID]', 1)
event('login', {value: 1, currency: 'KRW', items: []})

function customAction(actionType: string, params: ActionParams) {
  action('a', params)
  // @ts-expect-error
  action('a', 'string')
  // @ts-expect-error
  action('a', 1)
}

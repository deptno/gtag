import {gtag, event, action, config, set} from '..'

gtag('set', 'add_payment_info')

config('[AW_CONVERSION_ID]')
config('[AW_CONVERSION_ID]', {})

event('add_payment_info')
// @ts-expect-error
event('add_payment_info', {app_name: 'k'})
// @ts-expect-error
event('add_to_cart')

// @ts-expect-error
event('login', {value: 1, currency: 'KRW', items: []})
event('login', {method: 'k'})

event('add_payment_info')
// @ts-expect-error
event('page_view', {checkout_option})

// @ts-expect-error
event('hello')
// @ts-expect-error
event('a')

action('hello', {event_category: ''})
// @ts-expect-error
action('a')

set('[AW_CONVERSION_ID]')
set('[GA_MEASUREMENT_ID]')
// @ts-expect-error
set('[AW_CONVERSION_ID]', 1)
set('[GA_MEASUREMENT_ID]', {page_location: ''})

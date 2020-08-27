import {event} from './event'

event('add_payment_info')
// @ts-expect-error
event('add_payment_info', {app_name: 'k'})
// @ts-expect-error
event('add_to_cart')
event('login', {value: 1, currency: 'KRW', items: []})

event('add_payment_info')
// @ts-expect-error
event('page_view', {checkout_option})

// @ts-expect-error
event('hello')
// @ts-expect-error
event('a')


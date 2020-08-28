# @deptno/gtag
[![npm](https://img.shields.io/npm/dt/@deptno/gtag.svg?style=for-the-badge)](https://www.npmjs.com/package/@deptno/gtag)

> @WIP

typescripted gtag wrapper

## install
```shell script
npm i @deptno/gtag
```

## api
- config  
  `config` makes state and causes breaking type system.(not recommend)
- set  
  `set` makes state and causes breaking type system.(not recommend)
- event  
  `event` support default event types.
- action  
  `action` is user custom `event`

## usage
```tsx
import {config, js, set, event, action} from '@deptno/gtag'

js(new Date())
set('user_ga_id', {
  send_page_view: false
})
config('user_ga_id', {
  send_page_view: false
})
event('add_payment_info')
event('login', {
  value: 1000,
  currency: 'KRW',
  items: []
})
action('user_custom_action_name', {
  event_category: 'user_category'
})
```

## package
- [@deptno/gtag](/packages/gtag)  
  typescripted gtag wrapper
- [@deptno/gtag-react](/packages/gtag-react)  
  gtag component

## license
MIT

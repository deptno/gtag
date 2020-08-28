# @deptno/gtag-teact
[![npm](https://img.shields.io/npm/dt/@deptno/gtag-react.svg?style=for-the-badge)](https://www.npmjs.com/package/@deptno/gtag-react)

> @WIP

gtag component

## install
```shell script
npm i @deptno/gtag-react
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
/* GlobalLayoutComponent */
import {config, set, event, action} from '@deptno/gtag'
import {GTag} from '@deptno/gtag-react'

export const GlobalLayoutComponent = _ => {
  return (
    <>
      <!-- ... -->
      <GTag id={YOUR_GA_ID} />
    </>
  )
}
```

## package
- [@deptno/gtag](packages/gtag) [![npm](https://img.shields.io/npm/dt/@deptno/gtag.svg?style=for-the-badge)](https://www.npmjs.com/package/@deptno/gtag)
  typescripted gtag wrapper
- [@deptno/gtag-react](packages/gtag-gtag) [![npm](https://img.shields.io/npm/dt/@deptno/gtag-react.svg?style=for-the-badge)](https://www.npmjs.com/package/@deptno/gtag-react)
  gtag component

## license
MIT
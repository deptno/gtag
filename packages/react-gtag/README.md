# @deptno/react-gtag

> @WIP

gtag component

## install
```shell script
npm i @deptno/react-gtag
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
- @deptno/gtag  
  typescripted gtag wrapper
- @deptno/react-gtag
  gtag component

## license
MIT
# @deptno/gtag
GTag

## install
```shell script
npm i @deptno/{gtag,gtag-react}
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
  useEffect(() => {
    action('user_custom_action_name', {
      event_category: 'user_category',
    })
    action('user_custom_action_name', {
      event_category: 'user_category',
    })
  }, [])

  return (
    <>
      <!-- ... -->
      <GTag id={YOUR_GA_ID} />
    </>
  )
}


```

## package
- [@deptno/gtag](packages/gtag)  
  typescripted gtag wrapper
- [@deptno/gtag-react](packages/gtag-react)  
  gtag component

## license
MIT

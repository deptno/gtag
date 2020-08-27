import {action} from './action'

const validParams = {
  event_category: ''
}

action('hello', validParams)
// @ts-expect-error
action('a')

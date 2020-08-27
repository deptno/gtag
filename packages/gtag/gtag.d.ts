interface Window {
  dataLayer: unknown[]
  gtag: GTag
}

type GTag = {
  (command: 'config', config: ConfigType, params?: ControlParams)
  (command: 'set', config: ConfigType, params: ControlParams)
  (command: 'set', config: ConfigType)
  (command: 'js', config: Date)
  (command: 'event', name: EventName)
  (command: 'event', name: 'add_payment_info')
  (command: 'event', name: 'add_to_cart', params: AddToCartParams)
  (command: 'event', name: 'add_to_wishlist', params: AddToWishlistParams)
  (command: 'event', name: 'begin_checkout', params: BeginCheckoutParams)
  (command: 'event', name: 'checkout_progress', params: CheckoutProgressParams)
  (command: 'event', name: 'exception', params: ExceptionParams)
  (command: 'event', name: 'generate_lead', params: GenerateLeadParams)
  (command: 'event', name: 'login', params: LoginParams)
  (command: 'event', name: 'page_view')
  (command: 'event', name: 'purchase', params: PurchaseParams)
  (command: 'event', name: 'refund', params: RefundParams)
  (command: 'event', name: 'remove_from_cart', params: RemoveFromCartParams)
  (command: 'event', name: 'screen_view', params: ScreenViewParams)
  (command: 'event', name: 'search', params: SearchParams)
  (command: 'event', name: 'select_content', params: SelectContentParams)
  (command: 'event', name: 'set_checkout_option', params: SetCheckoutOptionParams)
  (command: 'event', name: 'share', params: ShareParams)
  (command: 'event', name: 'sign_up', params: SignUpParams)
  (command: 'event', name: 'timing_complete', params: TimingCompleteParams)
  (command: 'event', name: 'view_item', params: ViewItemParams)
  (command: 'event', name: 'view_item_list', params: ViewItemListParams)
  (command: 'event', name: 'view_promotion', params: ViewPromotionParams)
  (command: 'event', name: 'view_search_results', params: ViewSearchResultsParams)
}

type Command = 'config'|'set'|'event'
type ConfigType = AW_CONVERSION_ID|GA_MEASUREMENT_ID
type AW_CONVERSION_ID = string
type GA_MEASUREMENT_ID = string
type ConfigGaMeasurementIdInput = {
  send_page_view: boolean
}
type SetInput = {
  [key: string]: string|number|boolean
}
type EventName =
  | 'add_payment_info'
  | 'add_to_cart'
  | 'add_to_wishlist'
  | 'begin_checkout'
  | 'checkout_progress'
  | 'exception'
  | 'generate_lead'
  | 'login'
  | 'page_view'
  | 'purchase'
  | 'refund'
  | 'remove_from_cart'
  | 'screen_view'
  | 'search'
  | 'select_content'
  | 'set_checkout_option'
  | 'share'
  | 'sign_up'
  | 'timing_complete'
  | 'view_item'
  | 'view_item_list'
  | 'view_promotion'
  | 'view_search_results'

type AddToCartParams = {value: value,currency: currency,items: items}
type AddToWishlistParams = {value: value,currency: currency,items: items}
type BeginCheckoutParams = {value: value,currency: currency,items: items,coupon: coupon}
type CheckoutProgressParams = {value: value,currency: currency,items: items,coupon: coupon,checkout_step: checkout_step,checkout_option: checkout_option}
type ExceptionParams = {description: description,fatal: fatal}
type GenerateLeadParams = {value: value,currency: currency,transaction_id: transaction_id}
type LoginParams = {method: method}
type PurchaseParams = {transaction_id: transaction_id,value: value,currency: currency,tax: tax,shipping: shipping,items: items,coupon: coupon}
type RefundParams = {transaction_id: transaction_id,value: value,currency: currency,tax: tax,shipping: shipping,items: items}
type RemoveFromCartParams = {value: value,currency: currency,items: items}
type ScreenViewParams = {screen_name: screen_name}
type SearchParams = {search_term: search_term}
type SelectContentParams = {items: items,promotions: promotions,content_type: content_type,content_id: content_id}
type SetCheckoutOptionParams = {checkout_step: checkout_step,checkout_option: checkout_option}
type ShareParams = {method: method,content_type: content_type,content_id: content_id}
type SignUpParams = {method: method}
type TimingCompleteParams = {name: name,value: value}
type ViewItemParams = {items: items}
type ViewItemListParams = {items: items}
type ViewPromotionParams = {promotions: promotions}
type ViewSearchResultsParams = {search_term: search_term}


/**
 * control parameter
 */
type ControlParams = {
  groups: string|string[]
  send_to: string|string[]
  event_callback: () => void
  event_timeout: number
}
/**
 * event parameter
 */
type checkout_option = string
type checkout_step = number
type content_id = string
type content_type = string
type coupon = string
type currency = 'KRW'|'USD'|string // ISO_4217
type description = string
type fatal = boolean
type items = item[]
type item = {
  brand: string
  category: string
  creative_name: string
  creative_slot: string
  id: string
  location_id: string
  name: string
  price: currency
  quantity: number
}
type method = string
type name =	string
type promotions =	promotion[]
type promotion = {
  creative_name: string
  creative_slot: string
  id:	string
  name:	string
}
type screen_name = string
type search_term = string
type shipping =	currency
type tax = currency
type transaction_id =	string
type value = number
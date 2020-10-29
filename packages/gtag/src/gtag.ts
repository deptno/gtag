export const gtag: GTag = (command, value, params?) => {
  window.gtag(command, value, params)
}

export type GTag = {
  (command: Command, config?: ConfigType | EventName | Date, params?: EventParams | ControlParams | ConfigGaMeasurementIdParams | ActionParams): void
}

export type Command = 'event' | 'set' | 'js' | 'config'
export type ConfigType = '[AW_CONVERSION_ID]' | '[GA_MEASUREMENT_ID]' | string
export type ConfigGaMeasurementIdParams = {
  // @default: document.title
  page_title?: string
  // @default: location.href
  page_location?: string
  // @default: location.pathname
  page_path?: string
  // @default: true
  send_page_view?: boolean
}
export type ConfigUserIdParams = {
  user_id: string
}
export type EventName =
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
export type EventParams =
  | AddToCartParams
  | AddToWishlistParams
  | BeginCheckoutParams
  | CheckoutProgressParams
  | ExceptionParams
  | GenerateLeadParams
  | LoginParams
  | PurchaseParams
  | RefundParams
  | RemoveFromCartParams
  | ScreenViewParams
  | SearchParams
  | SelectContentParams
  | SetCheckoutOptionParams
  | ShareParams
  | SignUpParams
  | TimingCompleteParams
  | ViewItemParams
  | ViewItemListParams
  | ViewPromotionParams
  | ViewSearchResultsParams

export type AddToCartParams = { value: value, currency: currency, items: items }
export type AddToWishlistParams = { value: value, currency: currency, items: items }
export type BeginCheckoutParams = { value: value, currency: currency, items: items, coupon: coupon }
export type CheckoutProgressParams = { value: value, currency: currency, items: items, coupon: coupon, checkout_step: checkout_step, checkout_option: checkout_option }
export type ExceptionParams = { description: description, fatal: fatal }
export type GenerateLeadParams = { value: value, currency: currency, transaction_id: transaction_id }
export type LoginParams = { method: method }
export type PurchaseParams = { transaction_id: transaction_id, value: value, currency: currency, tax: tax, shipping: shipping, items: items, coupon: coupon }
export type RefundParams = { transaction_id: transaction_id, value: value, currency: currency, tax: tax, shipping: shipping, items: items }
export type RemoveFromCartParams = { value: value, currency: currency, items: items }
export type ScreenViewParams = { screen_name: screen_name, app_name: string, app_id?: string, app_version?: string, app_installer_id?: string }
export type SearchParams = { search_term: search_term }
export type SelectContentParams = { items: items, promotions: promotions, content_type: content_type, content_id: content_id }
export type SetCheckoutOptionParams = { checkout_step: checkout_step, checkout_option: checkout_option }
export type ShareParams = { method: method, content_type: content_type, content_id: content_id }
export type SignUpParams = { method: method }
export type TimingCompleteParams = { name: name, value: value }
export type ViewItemParams = { items: items }
export type ViewItemListParams = { items: items }
export type ViewPromotionParams = { promotions: promotions }
export type ViewSearchResultsParams = { search_term: search_term }

/**
 * action parameter
 */
export type ActionParams = {
  event_category: string
  event_label?: string
  value?: number
}
/**
 * control parameter
 */
export type ControlParams = {
  groups: string | string[]
  send_to: string | string[]
  event_callback: () => void
  event_timeout: number
}
/**
 * event parameter
 */
export type checkout_option = string
export type checkout_step = number
export type content_id = string
export type content_type = string
export type coupon = string
export type currency = 'KRW' | 'USD' | string // ISO_4217
export type description = string
export type fatal = boolean
export type items = item[]
export type item = {
  brand: string
  category: string
  creative_name: string
  creative_slot: string
  id: string
  location_id: string
  name: string
  price: number
  quantity: number
}
export type method = string
export type name = string
export type promotions = promotion[]
export type promotion = {
  creative_name: string
  creative_slot: string
  id: string
  name: string
}
export type screen_name = string
export type search_term = string
export type shipping = number
export type tax = number
export type transaction_id = string
export type value = number

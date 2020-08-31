export = Gtag;
export as namespace Gtag;

declare namespace Gtag {
  type GTag = {
    (command: Command, config?: ConfigType | EventName | Date, params?: EventParams | ControlParams | ConfigGaMeasurementIdParams | ActionParams): void
  }

  type Command = 'event' | 'set' | 'js' | 'config'
  type ConfigType = '[AW_CONVERSION_ID]' | '[GA_MEASUREMENT_ID]' | string
  type ConfigGaMeasurementIdParams = {
    // @default: document.title
    page_title?: string
    // @default: location.href
    page_location?: string
    // @default: location.pathname
    page_path?: string
    // @default: true
    send_page_view?: boolean
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

  type EventParams =
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


  type AddToCartParams = { value: value, currency: currency, items: items }
  type AddToWishlistParams = { value: value, currency: currency, items: items }
  type BeginCheckoutParams = { value: value, currency: currency, items: items, coupon: coupon }
  type CheckoutProgressParams = { value: value, currency: currency, items: items, coupon: coupon, checkout_step: checkout_step, checkout_option: checkout_option }
  type ExceptionParams = { description: description, fatal: fatal }
  type GenerateLeadParams = { value: value, currency: currency, transaction_id: transaction_id }
  type LoginParams = { method: method }
  type PurchaseParams = { transaction_id: transaction_id, value: value, currency: currency, tax: tax, shipping: shipping, items: items, coupon: coupon }
  type RefundParams = { transaction_id: transaction_id, value: value, currency: currency, tax: tax, shipping: shipping, items: items }
  type RemoveFromCartParams = { value: value, currency: currency, items: items }
  type ScreenViewParams = { screen_name: screen_name, app_name: string, app_id?: string, app_version?: string, app_installer_id?: string }
  type SearchParams = { search_term: search_term }
  type SelectContentParams = { items: items, promotions: promotions, content_type: content_type, content_id: content_id }
  type SetCheckoutOptionParams = { checkout_step: checkout_step, checkout_option: checkout_option }
  type ShareParams = { method: method, content_type: content_type, content_id: content_id }
  type SignUpParams = { method: method }
  type TimingCompleteParams = { name: name, value: value }
  type ViewItemParams = { items: items }
  type ViewItemListParams = { items: items }
  type ViewPromotionParams = { promotions: promotions }
  type ViewSearchResultsParams = { search_term: search_term }

  /**
   * action parameter
   */
  type ActionParams = {
    event_category: string
    event_label?: string
    value?: number
  }
  /**
   * control parameter
   */
  type ControlParams = {
    groups: string | string[]
    send_to: string | string[]
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
  type currency = 'KRW' | 'USD' | string // ISO_4217
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
  type name = string
  type promotions = promotion[]
  type promotion = {
    creative_name: string
    creative_slot: string
    id: string
    name: string
  }
  type screen_name = string
  type search_term = string
  type shipping = currency
  type tax = currency
  type transaction_id = string
  type value = number
}

declare global {
  interface Window {
    dataLayer: unknown[]
    gtag: Gtag.GTag
  }
}

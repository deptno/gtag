import Gtag from '../gtag'

export function event(name: 'add_payment_info'): void
export function event(name: 'add_to_cart', params: Gtag.AddToCartParams): void
export function event(name: 'add_to_wishlist', params: Gtag.AddToWishlistParams): void
export function event(name: 'begin_checkout', params: Gtag.BeginCheckoutParams): void
export function event(name: 'checkout_progress', params: Gtag.CheckoutProgressParams): void
export function event(name: 'exception', params: Gtag.ExceptionParams): void
export function event(name: 'generate_lead', params: Gtag.GenerateLeadParams): void
export function event(name: 'login', params: Gtag.LoginParams): void
export function event(name: 'page_view'): void
export function event(name: 'purchase', params: Gtag.PurchaseParams): void
export function event(name: 'refund', params: Gtag.RefundParams): void
export function event(name: 'remove_from_cart', params: Gtag.RemoveFromCartParams): void
export function event(name: 'screen_view', params: Gtag.ScreenViewParams): void
export function event(name: 'search', params: Gtag.SearchParams): void
export function event(name: 'select_content', params: Gtag.SelectContentParams): void
export function event(name: 'set_checkout_option', params: Gtag.SetCheckoutOptionParams): void
export function event(name: 'share', params: Gtag.ShareParams): void
export function event(name: 'sign_up', params: Gtag.SignUpParams): void
export function event(name: 'timing_complete', params: Gtag.TimingCompleteParams): void
export function event(name: 'view_item', params: Gtag.ViewItemParams): void
export function event(name: 'view_item_list', params: Gtag.ViewItemListParams): void
export function event(name: 'view_promotion', params: Gtag.ViewPromotionParams): void
export function event(name: 'view_search_results', params: Gtag.ViewSearchResultsParams): void
export function event(value, params?): void {
  window.gtag('event', value, params)
}

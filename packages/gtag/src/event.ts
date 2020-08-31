import G from '../gtag'

export function event(name: 'add_payment_info'): void
export function event(name: 'add_to_cart', params: G.AddToCartParams): void
export function event(name: 'add_to_wishlist', params: G.AddToWishlistParams): void
export function event(name: 'begin_checkout', params: G.BeginCheckoutParams): void
export function event(name: 'checkout_progress', params: G.CheckoutProgressParams): void
export function event(name: 'exception', params: G.ExceptionParams): void
export function event(name: 'generate_lead', params: G.GenerateLeadParams): void
export function event(name: 'login', params: G.LoginParams): void
export function event(name: 'page_view'): void
export function event(name: 'purchase', params: G.PurchaseParams): void
export function event(name: 'refund', params: G.RefundParams): void
export function event(name: 'remove_from_cart', params: G.RemoveFromCartParams): void
export function event(name: 'screen_view', params: G.ScreenViewParams): void
export function event(name: 'search', params: G.SearchParams): void
export function event(name: 'select_content', params: G.SelectContentParams): void
export function event(name: 'set_checkout_option', params: G.SetCheckoutOptionParams): void
export function event(name: 'share', params: G.ShareParams): void
export function event(name: 'sign_up', params: G.SignUpParams): void
export function event(name: 'timing_complete', params: G.TimingCompleteParams): void
export function event(name: 'view_item', params: G.ViewItemParams): void
export function event(name: 'view_item_list', params: G.ViewItemListParams): void
export function event(name: 'view_promotion', params: G.ViewPromotionParams): void
export function event(name: 'view_search_results', params: G.ViewSearchResultsParams): void
export function event(name, params?): void {
  window.gtag('event', name, params)
}

export function event(name: 'add_payment_info'): void
export function event(name: 'add_to_cart', params: AddToCartParams): void
export function event(name: 'add_to_wishlist', params: AddToWishlistParams): void
export function event(name: 'begin_checkout', params: BeginCheckoutParams): void
export function event(name: 'checkout_progress', params: CheckoutProgressParams): void
export function event(name: 'exception', params: ExceptionParams): void
export function event(name: 'generate_lead', params: GenerateLeadParams): void
export function event(name: 'login', params: LoginParams): void
export function event(name: 'page_view'): void
export function event(name: 'purchase', params: PurchaseParams): void
export function event(name: 'refund', params: RefundParams): void
export function event(name: 'remove_from_cart', params: RemoveFromCartParams): void
export function event(name: 'screen_view', params: ScreenViewParams): void
export function event(name: 'search', params: SearchParams): void
export function event(name: 'select_content', params: SelectContentParams): void
export function event(name: 'set_checkout_option', params: SetCheckoutOptionParams): void
export function event(name: 'share', params: ShareParams): void
export function event(name: 'sign_up', params: SignUpParams): void
export function event(name: 'timing_complete', params: TimingCompleteParams): void
export function event(name: 'view_item', params: ViewItemParams): void
export function event(name: 'view_item_list', params: ViewItemListParams): void
export function event(name: 'view_promotion', params: ViewPromotionParams): void
export function event(name: 'view_search_results', params: ViewSearchResultsParams): void
export function event(value, params?): void {
  window.gtag('event', value, params)
}

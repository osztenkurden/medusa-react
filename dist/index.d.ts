import * as exposed_medusa_js from 'exposed-medusa-js';
import exposed_medusa_js__default, { Response, AdminPostInvitesPayload, AdminCreateUploadPayload, AdminCreateUserPayload, AdminUpdateUserPayload } from 'exposed-medusa-js';
import * as _tanstack_react_query from '@tanstack/react-query';
import { QueryClientProviderProps, QueryKey, UseQueryOptions, UseMutationOptions } from '@tanstack/react-query';
import React from 'react';
import * as _medusajs_medusa from '@medusajs/medusa';
import { Region, ProductVariant as ProductVariant$1, StoreCartsRes, StorePostCartReq, StorePostCartsCartReq, StoreCompleteCartRes, StorePostCartsCartPaymentSessionUpdateReq, StorePostCartsCartPaymentSessionReq, StorePostCartsCartShippingMethodReq, StoreCollectionsRes, StoreGetCollectionsParams, StoreCollectionsListRes, StoreCustomersRes, StoreGetCustomersCustomerOrdersParams, StoreCustomersListOrdersRes, StorePostCustomersReq, StorePostCustomersCustomerReq, StoreGiftCardsRes, StorePostCartsCartLineItemsReq, StorePostCartsCartLineItemsItemReq, StoreOrderEditsRes, StorePostOrderEditsOrderEditDecline, StoreGetOrdersParams, StoreOrdersRes, StorePostCustomersCustomerOrderClaimReq, StorePostCustomersCustomerAcceptClaimReq, StorePaymentCollectionsRes, StorePostPaymentCollectionsBatchSessionsReq, StorePaymentCollectionSessionsReq, StorePostPaymentCollectionsBatchSessionsAuthorizeReq, StorePaymentCollectionsSessionRes, StoreGetProductCategoriesParams, StoreGetProductCategoriesRes, StoreGetProductCategoriesCategoryParams, StoreGetProductCategoriesCategoryRes, StoreGetProductTagsParams, StoreProductTagsListRes, StoreGetProductTypesParams, StoreProductTypesListRes, StoreGetProductsParams, StoreProductsListRes, StoreProductsRes, StoreRegionsListRes, StoreRegionsRes, StoreReturnReasonsListRes, StoreReturnReasonsRes, StoreReturnsRes, StorePostReturnsReq, StoreGetShippingOptionsParams, StoreShippingOptionsListRes, StoreSwapsRes, StorePostSwapsReq, AdminAuthRes, AdminPostAuthReq, AdminGetBatchParams, AdminBatchJobListRes, AdminBatchJobRes, AdminPostBatchesReq, AdminOrdersRes, AdminPostOrdersOrderClaimsReq, AdminPostOrdersOrderClaimsClaimReq, AdminPostOrdersOrderClaimsClaimFulfillmentsReq, AdminPostOrdersOrderClaimsClaimShipmentsReq, AdminGetCollectionsParams, AdminCollectionsListRes, AdminCollectionsRes, AdminPostCollectionsReq, AdminPostCollectionsCollectionReq, AdminCollectionsDeleteRes, AdminPostProductsToCollectionReq, AdminDeleteProductsFromCollectionRes, AdminDeleteProductsFromCollectionReq, AdminCurrenciesRes, AdminPostCurrenciesCurrencyReq, AdminGetCurrenciesParams, AdminCurrenciesListRes, AdminGetCustomersParams, AdminGetCustomerGroupsGroupParams, AdminCustomerGroupsRes, AdminGetCustomerGroupsParams, AdminCustomerGroupsListRes, AdminCustomersListRes, AdminPostCustomerGroupsReq, AdminPostCustomerGroupsGroupReq, AdminCustomerGroupsDeleteRes, AdminPostCustomerGroupsGroupCustomersBatchReq, AdminDeleteCustomerGroupsGroupCustomerBatchReq, AdminCustomersRes, AdminPostCustomersReq, AdminPostCustomersCustomerReq, AdminGetDiscountsParams, AdminDiscountsListRes, AdminGetDiscountParams, AdminDiscountsRes, AdminGetDiscountsDiscountConditionsConditionParams, AdminDiscountConditionsRes, AdminPostDiscountsDiscountConditionsConditionBatchParams, AdminPostDiscountsDiscountConditionsConditionBatchReq, AdminDeleteDiscountsDiscountConditionsConditionBatchReq, AdminPostDiscountsReq, AdminPostDiscountsDiscountReq, AdminDiscountsDeleteRes, AdminPostDiscountsDiscountDynamicCodesReq, AdminPostDiscountsDiscountConditions, AdminPostDiscountsDiscountConditionsCondition, AdminGetDraftOrdersParams, AdminDraftOrdersListRes, AdminDraftOrdersRes, AdminPostDraftOrdersReq, AdminPostDraftOrdersDraftOrderReq, AdminDraftOrdersDeleteRes, AdminPostDraftOrdersDraftOrderRegisterPaymentRes, AdminPostDraftOrdersDraftOrderLineItemsReq, AdminPostDraftOrdersDraftOrderLineItemsItemReq, AdminGetGiftCardsParams, AdminGiftCardsListRes, AdminGiftCardsRes, AdminPostGiftCardsReq, AdminPostGiftCardsGiftCardReq, AdminGiftCardsDeleteRes, AdminGetInventoryItemsParams, AdminInventoryItemsListWithVariantsAndLocationLevelsRes, AdminGetStockLocationsParams, AdminInventoryItemsRes, AdminGetInventoryItemsItemLocationLevelsParams, AdminInventoryItemsLocationLevelsRes, AdminPostInventoryItemsReq, AdminPostInventoryItemsInventoryItemReq, AdminInventoryItemsDeleteRes, AdminPostInventoryItemsItemLocationLevelsLevelReq, AdminPostInventoryItemsItemLocationLevelsReq, AdminListInvitesRes, AdminPostInvitesInviteAcceptReq, AdminInviteDeleteRes, AdminGetNotesParams, AdminNotesListRes, AdminNotesRes, AdminPostNotesReq, AdminPostNotesNoteReq, AdminNotesDeleteRes, AdminGetNotificationsParams, AdminNotificationsListRes, AdminNotificationsRes, AdminPostNotificationsNotificationResendReq, GetOrderEditsOrderEditParams, AdminOrderEditsRes, GetOrderEditsParams, AdminOrderEditsListRes, AdminPostOrderEditsReq, AdminOrderEditDeleteRes, AdminOrderEditItemChangeDeleteRes, AdminPostOrderEditsEditLineItemsLineItemReq, AdminPostOrderEditsOrderEditReq, AdminPostOrderEditsEditLineItemsReq, AdminGetOrdersParams, AdminOrdersListRes, AdminPostOrdersOrderReq, AdminPostOrdersOrderRefundsReq, AdminPostOrdersOrderFulfillmentsReq, AdminPostOrdersOrderShipmentReq, AdminPostOrdersOrderReturnsReq, AdminPostOrdersOrderShippingMethodsReq, AdminPaymentCollectionsRes, AdminPaymentCollectionDeleteRes, AdminUpdatePaymentCollectionsReq, AdminPaymentRes, AdminRefundRes, AdminPostPaymentRefundsReq, AdminGetPriceListPaginationParams, AdminPriceListsListRes, AdminGetPriceListsPriceListProductsParams, AdminProductsListRes, AdminPriceListRes, AdminPostPriceListsPriceListReq, AdminPostPriceListsPriceListPriceListReq, AdminPriceListDeleteRes, AdminPostPriceListPricesPricesReq, AdminPriceListDeleteBatchRes, AdminDeletePriceListPricesPricesReq, AdminDeletePriceListsPriceListProductsPricesBatchReq, AdminPriceListDeleteProductPricesRes, AdminPriceListDeleteVariantPricesRes, AdminGetProductCategoriesParams, AdminProductCategoriesListRes, AdminGetProductCategoryParams, AdminProductCategoriesCategoryRes, AdminPostProductCategoriesReq, AdminPostProductCategoriesCategoryReq, AdminProductCategoriesCategoryDeleteRes, AdminPostProductCategoriesCategoryProductsBatchReq, AdminDeleteProductCategoriesCategoryProductsBatchReq, AdminGetProductTagsParams, AdminProductTagsListRes, AdminGetProductTypesParams, AdminProductTypesListRes, AdminGetProductsParams, AdminGetProductParams, AdminProductsRes, AdminProductsListTagsRes, AdminPostProductsReq, AdminPostProductsProductReq, AdminProductsDeleteRes, AdminPostProductsProductVariantsReq, AdminPostProductsProductVariantsVariantReq, AdminProductsDeleteVariantRes, AdminPostProductsProductOptionsReq, AdminPostProductsProductOptionsOption, AdminProductsDeleteOptionRes, AdminPublishableApiKeysRes, GetPublishableApiKeysParams, AdminPublishableApiKeysListRes, GetPublishableApiKeySalesChannelsParams, AdminPublishableApiKeysListSalesChannelsRes, AdminPostPublishableApiKeysReq, AdminPostPublishableApiKeysPublishableApiKeyReq, AdminPublishableApiKeyDeleteRes, AdminPostPublishableApiKeySalesChannelsBatchReq, AdminDeletePublishableApiKeySalesChannelsBatchReq, AdminGetRegionsParams, AdminRegionsListRes, AdminRegionsRes, AdminGetRegionsRegionFulfillmentOptionsRes, AdminPostRegionsReq, AdminPostRegionsRegionReq, AdminRegionsDeleteRes, AdminPostRegionsRegionCountriesReq, AdminPostRegionsRegionFulfillmentProvidersReq, AdminPostRegionsRegionPaymentProvidersReq, AdminReservationsRes, AdminPostReservationsReq, AdminPostReservationsReservationReq, AdminReservationsDeleteRes, AdminGetReservationsParams, AdminReservationsListRes, AdminReturnReasonsListRes, AdminReturnReasonsRes, AdminPostReturnReasonsReq, AdminPostReturnReasonsReasonReq, AdminReturnsListRes, AdminReturnsRes, AdminPostReturnsReturnReceiveReq, AdminReturnsCancelRes, AdminSalesChannelsRes, AdminGetSalesChannelsParams, AdminSalesChannelsListRes, AdminPostSalesChannelsReq, AdminPostSalesChannelsSalesChannelReq, AdminSalesChannelsDeleteRes, AdminDeleteSalesChannelsChannelProductsBatchReq, AdminPostSalesChannelsChannelProductsBatchReq, AdminGetShippingOptionsParams, AdminShippingOptionsListRes, AdminShippingOptionsRes, AdminPostShippingOptionsReq, AdminPostShippingOptionsOptionReq, AdminShippingProfilesListRes, AdminShippingProfilesRes, AdminPostShippingProfilesReq, AdminPostShippingProfilesProfileReq, AdminDeleteShippingProfileRes, AdminStockLocationsListRes, AdminStockLocationsRes, AdminPostStockLocationsReq, AdminPostStockLocationsLocationReq, AdminStockLocationsDeleteRes, AdminPaymentProvidersList, AdminTaxProvidersList, AdminExtendedStoresRes, AdminStoresRes, AdminPostStoreReq, AdminGetSwapsParams, AdminSwapsListRes, AdminSwapsRes, AdminPostOrdersOrderSwapsReq, AdminPostOrdersOrderSwapsSwapFulfillmentsReq, AdminPostOrdersOrderSwapsSwapShipmentsReq, AdminGetTaxRatesParams, AdminTaxRatesListRes, AdminTaxRatesRes, AdminPostTaxRatesReq, AdminPostTaxRatesTaxRateReq, AdminTaxRatesDeleteRes, AdminPostTaxRatesTaxRateProductsReq, AdminDeleteTaxRatesTaxRateProductsReq, AdminPostTaxRatesTaxRateProductTypesReq, AdminDeleteTaxRatesTaxRateProductTypesReq, AdminPostTaxRatesTaxRateShippingOptionsReq, AdminDeleteTaxRatesTaxRateShippingOptionsReq, AdminUploadsRes, AdminUploadsDownloadUrlRes, AdminPostUploadsDownloadUrlReq, AdminDeleteUploadsRes, AdminDeleteUploadsReq, AdminGetUsersParams, AdminUsersListRes, AdminUserRes, AdminDeleteUserRes, AdminResetPasswordRequest, AdminResetPasswordTokenRequest, AdminGetVariantsParams, AdminVariantsListRes, AdminGetVariantParams, AdminVariantsRes, AdminGetVariantsVariantInventoryRes } from '@medusajs/medusa';
import * as _medusajs_medusa_dist_types_pricing from '@medusajs/medusa/dist/types/pricing';
import * as _medusajs_types from '@medusajs/types';
import { FindParams } from '@medusajs/medusa/dist/types/common';
import * as _medusajs_medusa_dist_types_store from '@medusajs/medusa/dist/types/store';

/**
 * @packageDocumentation
 *
 * @customNamespace Providers.Medusa
 */

interface MedusaContextState {
    /**
     * The Medusa JS Client instance.
     */
    client: exposed_medusa_js__default;
}
/**
 * This hook gives you access to context of {@link MedusaProvider}. It's useful if you want access to the
 * [Medusa JS Client](https://docs.medusajs.com/js-client/overview).
 *
 * @example
 * import React from "react"
 * import { useMeCustomer, useMedusa } from "medusa-react"
 *
 * const CustomerLogin = () => {
 *   const { client } = useMedusa()
 *   const { refetch: refetchCustomer } = useMeCustomer()
 *   // ...
 *
 *   const handleLogin = (
 *     email: string,
 *     password: string
 *   ) => {
 *     client.auth.authenticate({
 *       email,
 *       password
 *     })
 *     .then(() => {
 *       // customer is logged-in successfully
 *       refetchCustomer()
 *     })
 *     .catch(() => {
 *       // an error occurred.
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * @customNamespace Providers.Medusa
 */
declare const useMedusa: () => MedusaContextState;
interface MedusaProviderProps {
    /**
     * The URL to your Medusa backend.
     */
    baseUrl: string;
    /**
     * An object used to set the Tanstack Query client. The object requires a `client` property,
     * which should be an instance of [QueryClient](https://tanstack.com/query/v4/docs/react/reference/QueryClient).
     */
    queryClientProviderProps: QueryClientProviderProps;
    /**
     * @ignore
     */
    children: React.ReactNode;
    /**
     * API key used for authenticating admin requests. Follow [this guide](https://docs.medusajs.com/api/admin#authentication) to learn how to create an API key for an admin user.
     */
    apiKey?: string;
    /**
     * Publishable API key used for storefront requests. You can create a publishable API key either using the
     * [admin APIs](https://docs.medusajs.com/development/publishable-api-keys/admin/manage-publishable-api-keys) or the
     * [Medusa admin](https://docs.medusajs.com/user-guide/settings/publishable-api-keys#create-publishable-api-key).
     */
    publishableApiKey?: string;
    /**
     * Number of times to retry a request if it fails.
     *
     * @defaultValue 3
     */
    maxRetries?: number;
    /**
     * An object of custom headers to pass with every request. Each key of the object is the name of the header, and its value is the header's value.
     *
     * @defaultValue `{}`
     */
    customHeaders?: Record<string, any>;
}
/**
 * The `MedusaProvider` must be used at the highest possible point in the React component tree. Using any of `medusa-react`'s hooks or providers requires having `MedusaProvider`
 * higher in the component tree.
 *
 * @param {MedusaProviderProps} param0 - Props of the provider.
 *
 * @example
 * ```tsx title="src/App.ts"
 * import { MedusaProvider } from "medusa-react"
 * import Storefront from "./Storefront"
 * import { QueryClient } from "@tanstack/react-query"
 * import React from "react"
 *
 * const queryClient = new QueryClient()
 *
 * const App = () => {
 *   return (
 *     <MedusaProvider
 *       queryClientProviderProps={{ client: queryClient }}
 *       baseUrl="http://localhost:9000"
 *     >
 *       <Storefront />
 *     </MedusaProvider>
 *   )
 * }
 *
 * export default App
 * ```
 *
 * In the example above, you wrap the `Storefront` component with the `MedusaProvider`. `Storefront` is assumed to be the top-level component of your storefront, but you can place `MedusaProvider` at any point in your tree. Only children of `MedusaProvider` can benefit from its hooks.
 *
 * The `Storefront` component and its child components can now use hooks exposed by Medusa React.
 *
 * @customNamespace Providers.Medusa
 */
declare const MedusaProvider: ({ queryClientProviderProps, baseUrl, apiKey, publishableApiKey, customHeaders, maxRetries, children, }: MedusaProviderProps) => React.JSX.Element;

type UseQueryOptionsWrapper<TQueryFn = unknown, E = Error, TQueryKey extends QueryKey = QueryKey> = Omit<UseQueryOptions<TQueryFn, E, TQueryFn, TQueryKey>, "queryKey" | "queryFn" | "select" | "refetchInterval">;
type RegionInfo = Pick<Region, "currency_code" | "tax_code" | "tax_rate">;
type ProductVariant = ConvertDateToString<Omit<ProductVariant$1, "beforeInsert">>;
type ProductVariantInfo = Pick<ProductVariant, "prices">;
type ConvertDateToString<T extends {}> = {
    [P in keyof T]: T[P] extends Date ? Date | string : T[P];
};
type Cart = StoreCartsRes["cart"];
type TQueryKey<TKey, TListQuery = any, TDetailQuery = string> = {
    all: [TKey];
    lists: () => [...TQueryKey<TKey>["all"], "list"];
    list: (query?: TListQuery) => [
        ...ReturnType<TQueryKey<TKey>["lists"]>,
        {
            query: TListQuery | undefined;
        }
    ];
    details: () => [...TQueryKey<TKey>["all"], "detail"];
    detail: (id: TDetailQuery) => [...ReturnType<TQueryKey<TKey>["details"]>, TDetailQuery];
};

/**
 * @packageDocumentation
 *
 * @customNamespace Providers.Session Cart
 */

/**
 * A session cart's item.
 */
interface Item {
    /**
     * The product variant represented by this item in the cart.
     */
    variant: ProductVariant;
    /**
     * The quantity added in the cart.
     */
    quantity: number;
    /**
     * The total amount of the item in the cart.
     */
    readonly total?: number;
}
interface SessionCartState {
    /**
     * The region of the cart.
     */
    region: RegionInfo;
    /**
     * The items in the cart.
     */
    items: Item[];
    /**
     * The total items in the cart.
     */
    totalItems: number;
    /**
     * The total amount of the cart.
     */
    total: number;
}
interface SessionCartContextState extends SessionCartState {
    /**
     * A state function used to set the region.
     *
     * @param region - The new value of the region.
     */
    setRegion: (region: RegionInfo) => void;
    /**
     * This function adds an item to the session cart.
     *
     * @param {Item} item - The item to add.
     */
    addItem: (item: Item) => void;
    /**
     * This function removes an item from the session cart.
     *
     * @param {string} id - The ID of the item.
     */
    removeItem: (id: string) => void;
    /**
     * This function updates an item in the session cart.
     *
     * @param {string} id - The ID of the item.
     * @param {Partial<Item>} item - The item's data to update.
     */
    updateItem: (id: string, item: Partial<Item>) => void;
    /**
     * A state function used to set the items in the cart.
     *
     * @param {Item[]} items - The items to set in the cart.
     */
    setItems: (items: Item[]) => void;
    /**
     * This function updates an item's quantity in the cart.
     *
     * @param {string} id - The ID of the item.
     * @param {number} quantity - The new quantity of the item.
     */
    updateItemQuantity: (id: string, quantity: number) => void;
    /**
     * This function increments the item's quantity in the cart.
     *
     * @param {string} id - The ID of the item.
     */
    incrementItemQuantity: (id: string) => void;
    /**
     * This function decrements the item's quantity in the cart.
     *
     * @param {string} id - The ID of the item.
     */
    decrementItemQuantity: (id: string) => void;
    /**
     * This function retrieves an item's details by its ID.
     *
     * @param {string} id - The ID of the item.
     * @returns {Item | undefined} The item in the cart, if found.
     */
    getItem: (id: string) => Item | undefined;
    /**
     * Removes all items in the cart.
     */
    clearItems: () => void;
}
/**
 * @ignore
 */
declare const generateCartState: (state: SessionCartState, items: Item[]) => {
    items: {
        total: number;
        /**
         * The product variant represented by this item in the cart.
         */
        variant: ProductVariant;
        /**
         * The quantity added in the cart.
         */
        quantity: number;
    }[];
    totalItems: number;
    total: number;
    /**
     * The region of the cart.
     */
    region: RegionInfo;
};
interface SessionCartProviderProps {
    /**
     * @ignore
     */
    children: React.ReactNode;
    /**
     * An optional initial value to be used for the session cart.
     */
    initialState?: SessionCartState;
}
/**
 * Unlike the {@link Providers.Cart.CartProvider | CartProvider}, `SessionProvider` never interacts with the Medusa backend. It can be used to implement the user experience related to managing a cart’s items.
 * Its state variables are JavaScript objects living in the browser, but are in no way communicated with the backend.
 *
 * You can use the `SessionProvider` as a lightweight client-side cart functionality. It’s not stored in any database or on the Medusa backend.
 *
 * To use `SessionProvider`, you first have to insert it somewhere in your component tree below the {@link Providers.Medusa.MedusaProvider | MedusaProvider}. Then, in any of the child components,
 * you can use the {@link useSessionCart} hook to get access to client-side cart item functionalities.
 *
 * @param {SessionCartProviderProps} param0 - Props of the provider.
 *
 * @example
 * ```tsx title="src/App.ts"
 * import { SessionProvider, MedusaProvider } from "medusa-react"
 * import Storefront from "./Storefront"
 * import { QueryClient } from "@tanstack/react-query"
 * import React from "react"
 *
 * const queryClient = new QueryClient()
 *
 * const App = () => {
 *   return (
 *     <MedusaProvider
 *       queryClientProviderProps={{ client: queryClient }}
 *       baseUrl="http://localhost:9000"
 *     >
 *       <SessionProvider>
 *         <Storefront />
 *       </SessionProvider>
 *     </MedusaProvider>
 *   )
 * }
 *
 * export default App
 * ```
 *
 * @customNamespace Providers.Session Cart
 */
declare const SessionCartProvider: ({ initialState, children, }: SessionCartProviderProps) => React.JSX.Element;
/**
 * This hook exposes the context of {@link SessionCartProvider}.
 *
 * @example
 * The following example assumes that you've added `SessionCartProvider` previously in the React components tree:
 *
 * ```tsx title="src/Products.ts"
 * const Products = () => {
 *   const { addItem } = useSessionCart()
 *   // ...
 *
 *   function addToCart(variant: ProductVariant) {
 *     addItem({
 *       variant: variant,
 *       quantity: 1,
 *     })
 *   }
 * }
 * ```
 *
 * @customNamespace Providers.Session Cart
 */
declare const useSessionCart: () => SessionCartContextState;

declare const cartKeys: TQueryKey<"carts", any, string>;
type CartQueryKey = typeof cartKeys;
/**
 * This hook retrieves a Cart's details. This includes recalculating its totals.
 *
 * @example
 * import React from "react"
 * import { useGetCart } from "medusa-react"
 *
 * type Props = {
 *   cartId: string
 * }
 *
 * const Cart = ({ cartId }: Props) => {
 *   const { cart, isLoading } = useGetCart(cartId)
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {cart && cart.items.length === 0 && (
 *         <span>Cart is empty</span>
 *       )}
 *       {cart && cart.items.length > 0 && (
 *         <ul>
 *           {cart.items.map((item) => (
 *             <li key={item.id}>{item.title}</li>
 *           ))}
 *         </ul>
 *       )}
 *     </div>
 *   )
 * }
 *
 * export default Cart
 *
 * @customNamespace Hooks.Store.Carts
 * @category Queries
 */
declare const useGetCart: (id: string, options?: UseQueryOptionsWrapper<Response<StoreCartsRes>, Error, ReturnType<CartQueryKey["detail"]>>) => {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: true;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<StoreCartsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly cart?: Omit<_medusajs_medusa.Cart, "refundable_amount" | "refunded_total"> | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: true;
    readonly status: "success";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<StoreCartsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly cart?: Omit<_medusajs_medusa.Cart, "refundable_amount" | "refunded_total"> | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: true;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<StoreCartsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly cart?: Omit<_medusajs_medusa.Cart, "refundable_amount" | "refunded_total"> | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: true;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "loading";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<StoreCartsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly cart?: Omit<_medusajs_medusa.Cart, "refundable_amount" | "refunded_total"> | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
};

/**
 * The details of the cart to create.
 */
type CreateCartReq = StorePostCartReq | undefined;
/**
 * This hook creates a Cart. Although optional, specifying the cart's region and sales channel can affect the cart's pricing and
 * the products that can be added to the cart respectively.
 *
 * So, make sure to set those early on and change them if necessary, such as when the customer changes their region.
 *
 * If a customer is logged in, make sure to pass its ID or email within the cart's details so that the cart is attached to the customer.
 *
 * @example
 * import React from "react"
 * import { useCreateCart } from "medusa-react"
 *
 * type Props = {
 *   regionId: string
 * }
 *
 * const Cart = ({ regionId }: Props) => {
 *   const createCart = useCreateCart()
 *
 *   const handleCreate = () => {
 *     createCart.mutate({
 *       region_id: regionId
 *       // creates an empty cart
 *     }, {
 *       onSuccess: ({ cart }) => {
 *         console.log(cart.items)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default Cart
 *
 * @customNamespace Hooks.Store.Carts
 * @category Mutations
 */
declare const useCreateCart: (options?: UseMutationOptions<StoreCartsRes, Error, StorePostCartReq | undefined>) => _tanstack_react_query.UseMutationResult<exposed_medusa_js.Response<StoreCartsRes>, Error, StorePostCartReq | undefined, unknown>;
/**
 * This hook updates a Cart's details. If the cart has payment sessions and the region was not changed,
 * the payment sessions are updated. The cart's totals are also recalculated.
 *
 * @example
 * import React from "react"
 * import { useUpdateCart } from "medusa-react"
 *
 * type Props = {
 *   cartId: string
 * }
 *
 * const Cart = ({ cartId }: Props) => {
 *   const updateCart = useUpdateCart(cartId)
 *
 *   const handleUpdate = (
 *     email: string
 *   ) => {
 *     updateCart.mutate({
 *       email
 *     }, {
 *       onSuccess: ({ cart }) => {
 *         console.log(cart.email)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default Cart
 *
 * @customNamespace Hooks.Store.Carts
 * @category Mutations
 */
declare const useUpdateCart: (cartId: string, options?: UseMutationOptions<StoreCartsRes, Error, StorePostCartsCartReq>) => _tanstack_react_query.UseMutationResult<exposed_medusa_js.Response<StoreCartsRes>, Error, StorePostCartsCartReq, unknown>;
/**
 * This hook completes a cart and place an order or create a swap, based on the cart's type. This includes attempting to authorize the cart's payment.
 * If authorizing the payment requires more action, the cart will not be completed and the order will not be placed or the swap will not be created.
 * An idempotency key will be generated if none is provided in the header `Idempotency-Key` and added to
 * the response. If an error occurs during cart completion or the request is interrupted for any reason, the cart completion can be retried by passing the idempotency
 * key in the `Idempotency-Key` header.
 *
 * @example
 * import React from "react"
 * import { useCompleteCart } from "medusa-react"
 *
 * type Props = {
 *   cartId: string
 * }
 *
 * const Cart = ({ cartId }: Props) => {
 *   const completeCart = useCompleteCart(cartId)
 *
 *   const handleComplete = () => {
 *     completeCart.mutate(void 0, {
 *       onSuccess: ({ data, type }) => {
 *         console.log(data.id, type)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default Cart
 *
 * @customNamespace Hooks.Store.Carts
 * @category Mutations
 */
declare const useCompleteCart: (cartId: string, options?: UseMutationOptions<StoreCompleteCartRes, Error>) => _tanstack_react_query.UseMutationResult<exposed_medusa_js.Response<StoreCompleteCartRes>, Error, void, unknown>;
/**
 * This hook creates Payment Sessions for each of the available Payment Providers in the Cart's Region. If there's only one payment session created,
 * it will be selected by default. The creation of the payment session uses the payment provider and may require sending requests to third-party services.
 *
 * @example
 * import React from "react"
 * import { useCreatePaymentSession } from "medusa-react"
 *
 * type Props = {
 *   cartId: string
 * }
 *
 * const Cart = ({ cartId }: Props) => {
 *   const createPaymentSession = useCreatePaymentSession(cartId)
 *
 *   const handleComplete = () => {
 *     createPaymentSession.mutate(void 0, {
 *       onSuccess: ({ cart }) => {
 *         console.log(cart.payment_sessions)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default Cart
 *
 * @customNamespace Hooks.Store.Carts
 * @category Mutations
 */
declare const useCreatePaymentSession: (cartId: string, options?: UseMutationOptions<StoreCartsRes, Error>) => _tanstack_react_query.UseMutationResult<exposed_medusa_js.Response<StoreCartsRes>, Error, void, unknown>;
/**
 * The details of the payment session to update.
 */
type UpdatePaymentSessionReq = StorePostCartsCartPaymentSessionUpdateReq & {
    /**
     * The payment provider's identifier.
     */
    provider_id: string;
};
/**
 * This hook updates a Payment Session with additional data. This can be useful depending on the payment provider used.
 * All payment sessions are updated and cart totals are recalculated afterwards.
 *
 * @example
 * import React from "react"
 * import { useUpdatePaymentSession } from "medusa-react"
 *
 * type Props = {
 *   cartId: string
 * }
 *
 * const Cart = ({ cartId }: Props) => {
 *   const updatePaymentSession = useUpdatePaymentSession(cartId)
 *
 *   const handleUpdate = (
 *     providerId: string,
 *     data: Record<string, unknown>
 *   ) => {
 *     updatePaymentSession.mutate({
 *       provider_id: providerId,
 *       data
 *     }, {
 *       onSuccess: ({ cart }) => {
 *         console.log(cart.payment_session)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default Cart
 *
 * @customNamespace Hooks.Store.Carts
 * @category Mutations
 */
declare const useUpdatePaymentSession: (cartId: string, options?: UseMutationOptions<StoreCartsRes, Error, UpdatePaymentSessionReq>) => _tanstack_react_query.UseMutationResult<exposed_medusa_js.Response<StoreCartsRes>, Error, UpdatePaymentSessionReq, unknown>;
/**
 * The details of the payment session to refresh.
 */
type RefreshPaymentSessionMutationData = {
    /**
     * The payment provider's identifier.
     */
    provider_id: string;
};
/**
 * This hook refreshes a Payment Session to ensure that it is in sync with the Cart. This is usually not necessary, but is provided for edge cases.
 *
 * @example
 * import React from "react"
 * import { useRefreshPaymentSession } from "medusa-react"
 *
 * type Props = {
 *   cartId: string
 * }
 *
 * const Cart = ({ cartId }: Props) => {
 *   const refreshPaymentSession = useRefreshPaymentSession(cartId)
 *
 *   const handleRefresh = (
 *     providerId: string
 *   ) => {
 *     refreshPaymentSession.mutate({
 *       provider_id: providerId,
 *     }, {
 *       onSuccess: ({ cart }) => {
 *         console.log(cart.payment_sessions)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default Cart
 *
 * @customNamespace Hooks.Store.Carts
 * @category Mutations
 */
declare const useRefreshPaymentSession: (cartId: string, options?: UseMutationOptions<StoreCartsRes, Error, RefreshPaymentSessionMutationData>) => _tanstack_react_query.UseMutationResult<exposed_medusa_js.Response<StoreCartsRes>, Error, RefreshPaymentSessionMutationData, unknown>;
/**
 * This hook selects the Payment Session that will be used to complete the cart. This is typically used when the customer chooses their preferred payment method during checkout.
 * The totals of the cart will be recalculated.
 *
 * @example
 * import React from "react"
 * import { useSetPaymentSession } from "medusa-react"
 *
 * type Props = {
 *   cartId: string
 * }
 *
 * const Cart = ({ cartId }: Props) => {
 *   const setPaymentSession = useSetPaymentSession(cartId)
 *
 *   const handleSetPaymentSession = (
 *     providerId: string
 *   ) => {
 *     setPaymentSession.mutate({
 *       provider_id: providerId,
 *     }, {
 *       onSuccess: ({ cart }) => {
 *         console.log(cart.payment_session)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default Cart
 *
 * @customNamespace Hooks.Store.Carts
 * @category Mutations
 */
declare const useSetPaymentSession: (cartId: string, options?: UseMutationOptions<StoreCartsRes, Error, StorePostCartsCartPaymentSessionReq>) => _tanstack_react_query.UseMutationResult<exposed_medusa_js.Response<StoreCartsRes>, Error, StorePostCartsCartPaymentSessionReq, unknown>;
/**
 * This hook adds a shipping method to the cart. The validation of the `data` field is handled by the fulfillment provider of the chosen shipping option.
 *
 * @example
 * import React from "react"
 * import { useAddShippingMethodToCart } from "medusa-react"
 *
 * type Props = {
 *   cartId: string
 * }
 *
 * const Cart = ({ cartId }: Props) => {
 *   const addShippingMethod = useAddShippingMethodToCart(cartId)
 *
 *   const handleAddShippingMethod = (
 *     optionId: string
 *   ) => {
 *     addShippingMethod.mutate({
 *       option_id: optionId,
 *     }, {
 *       onSuccess: ({ cart }) => {
 *         console.log(cart.shipping_methods)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default Cart
 *
 * @customNamespace Hooks.Store.Carts
 * @category Mutations
 */
declare const useAddShippingMethodToCart: (cartId: string, options?: UseMutationOptions<StoreCartsRes, Error, StorePostCartsCartShippingMethodReq>) => _tanstack_react_query.UseMutationResult<exposed_medusa_js.Response<StoreCartsRes>, Error, StorePostCartsCartShippingMethodReq, unknown>;
/**
 * The details of the payment session to delete.
 */
type DeletePaymentSessionMutationData = {
    /**
     * The payment provider's identifier.
     */
    provider_id: string;
};
/**
 * This hook deletes a Payment Session in a Cart. May be useful if a payment has failed. The totals will be recalculated.
 *
 * @example
 * import React from "react"
 * import { useDeletePaymentSession } from "medusa-react"
 *
 * type Props = {
 *   cartId: string
 * }
 *
 * const Cart = ({ cartId }: Props) => {
 *   const deletePaymentSession = useDeletePaymentSession(cartId)
 *
 *   const handleDeletePaymentSession = (
 *     providerId: string
 *   ) => {
 *     deletePaymentSession.mutate({
 *       provider_id: providerId,
 *     }, {
 *       onSuccess: ({ cart }) => {
 *         console.log(cart.payment_sessions)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default Cart
 *
 * @customNamespace Hooks.Store.Carts
 * @category Mutations
 */
declare const useDeletePaymentSession: (cartId: string, options?: UseMutationOptions<StoreCartsRes, Error, DeletePaymentSessionMutationData>) => _tanstack_react_query.UseMutationResult<exposed_medusa_js.Response<StoreCartsRes>, Error, DeletePaymentSessionMutationData, unknown>;
/**
 * This hook allows you to create a cart and set its payment session as a preparation for checkout.
 * It performs the same actions as the {@link useCreateCart} and {@link useCreatePaymentSession} hooks.
 *
 * @example
 * import React from "react"
 * import { useStartCheckout } from "medusa-react"
 *
 * type Props = {
 *   regionId: string
 * }
 *
 * const Checkout = ({ regionId }: Props) => {
 *   const startCheckout = useStartCheckout()
 *
 *   const handleCheckout = () => {
 *     startCheckout.mutate({
 *       region_id: regionId,
 *     }, {
 *       onSuccess: (cart) => {
 *         console.log(cart.payment_sessions)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default Checkout
 *
 * @customNamespace Hooks.Store.Carts
 * @category Mutations
 */
declare const useStartCheckout: (options?: UseMutationOptions<StoreCartsRes["cart"], Error, StorePostCartReq>) => _tanstack_react_query.UseMutationResult<Omit<_medusajs_medusa.Cart, "refundable_amount" | "refunded_total">, Error, StorePostCartReq, unknown>;

declare const collectionKeys: TQueryKey<"collections", any, string>;
type CollectionQueryKey = typeof collectionKeys;
/**
 * This hook retrieves a product collection's details.
 *
 * @example
 * import React from "react"
 * import { useCollection } from "medusa-react"
 *
 * type Props = {
 *   collectionId: string
 * }
 *
 * const ProductCollection = ({ collectionId }: Props) => {
 *   const { collection, isLoading } = useCollection(collectionId)
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {collection && <span>{collection.title}</span>}
 *     </div>
 *   )
 * }
 *
 * export default ProductCollection
 *
 * @customNamespace Hooks.Store.Product Collections
 * @category Queries
 */
declare const useCollection: (id: string, options?: UseQueryOptionsWrapper<Response<StoreCollectionsRes>, Error, ReturnType<CollectionQueryKey["detail"]>>) => {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: true;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<StoreCollectionsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly collection?: _medusajs_medusa.ProductCollection | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: true;
    readonly status: "success";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<StoreCollectionsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly collection?: _medusajs_medusa.ProductCollection | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: true;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<StoreCollectionsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly collection?: _medusajs_medusa.ProductCollection | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: true;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "loading";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<StoreCollectionsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly collection?: _medusajs_medusa.ProductCollection | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
};
/**
 * This hook retrieves a list of product collections. The product collections can be filtered by fields such as `handle` or `created_at` passed in the `query` parameter.
 * The product collections can also be paginated.
 *
 * @example
 * To list product collections:
 *
 * ```tsx
 * import React from "react"
 * import { useCollections } from "medusa-react"
 *
 * const ProductCollections = () => {
 *   const { collections, isLoading } = useCollections()
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {collections && collections.length === 0 && (
 *         <span>No Product Collections</span>
 *       )}
 *       {collections && collections.length > 0 && (
 *         <ul>
 *           {collections.map((collection) => (
 *             <li key={collection.id}>{collection.title}</li>
 *           ))}
 *         </ul>
 *       )}
 *     </div>
 *   )
 * }
 *
 * export default ProductCollections
 * ```
 *
 * By default, only the first `10` records are retrieved. You can control pagination by specifying the `limit` and `offset` properties:
 *
 * ```tsx
 * import React from "react"
 * import { useCollections } from "medusa-react"
 *
 * const ProductCollections = () => {
 *   const {
 *     collections,
 *     limit,
 *     offset,
 *     isLoading
 *   } = useCollections({
 *     limit: 20,
 *     offset: 0
 *   })
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {collections && collections.length === 0 && (
 *         <span>No Product Collections</span>
 *       )}
 *       {collections && collections.length > 0 && (
 *         <ul>
 *           {collections.map((collection) => (
 *             <li key={collection.id}>{collection.title}</li>
 *           ))}
 *         </ul>
 *       )}
 *     </div>
 *   )
 * }
 *
 * export default ProductCollections
 * ```
 *
 * @customNamespace Hooks.Store.Product Collections
 * @category Queries
 */
declare const useCollections: (query?: StoreGetCollectionsParams, options?: UseQueryOptionsWrapper<Response<StoreCollectionsListRes>, Error, ReturnType<CollectionQueryKey["list"]>>) => {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: true;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<StoreCollectionsListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly collections?: _medusajs_medusa.ProductCollection[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: true;
    readonly status: "success";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<StoreCollectionsListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly collections?: _medusajs_medusa.ProductCollection[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: true;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<StoreCollectionsListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly collections?: _medusajs_medusa.ProductCollection[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: true;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "loading";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<StoreCollectionsListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly collections?: _medusajs_medusa.ProductCollection[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
};

declare const customerKeys: {
    orders: (id: string) => readonly ["customers", "detail", string, "orders"];
    all: ["customers"];
    lists: () => ["customers", "list"];
    list: (query?: any) => ["customers", "list", {
        query: any;
    }];
    details: () => ["customers", "detail"];
    detail: (id: string) => ["customers", "detail", string];
};
type CustomerQueryKey = typeof customerKeys;
/**
 * This hook retrieves the logged-in customer's details. It requires [customer authentication](https://docs.medusajs.com/medusa-react/overview#customer-authentication).
 *
 * @example
 * import React from "react"
 * import { useMeCustomer } from "medusa-react"
 *
 * const Customer = () => {
 *   const { customer, isLoading } = useMeCustomer()
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {customer && (
 *         <span>{customer.first_name} {customer.last_name}</span>
 *       )}
 *     </div>
 *   )
 * }
 *
 * export default Customer
 *
 * @customNamespace Hooks.Store.Customers
 * @category Queries
 */
declare const useMeCustomer: (options?: UseQueryOptionsWrapper<Response<StoreCustomersRes>, Error, ReturnType<CustomerQueryKey["detail"]>>) => {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: true;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<StoreCustomersRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly customer?: Omit<_medusajs_medusa.Customer, "password_hash"> | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: true;
    readonly status: "success";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<StoreCustomersRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly customer?: Omit<_medusajs_medusa.Customer, "password_hash"> | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: true;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<StoreCustomersRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly customer?: Omit<_medusajs_medusa.Customer, "password_hash"> | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: true;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "loading";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<StoreCustomersRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly customer?: Omit<_medusajs_medusa.Customer, "password_hash"> | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
};
/**
 * This hook retrieves a list of the logged-in customer's orders. The orders can be filtered by fields such as `status` or `fulfillment_status`. The orders can also be paginated.
 * This hook requires [customer authentication](https://docs.medusajs.com/medusa-react/overview#customer-authentication).
 *
 * @example
 * import React from "react"
 * import { useCustomerOrders } from "medusa-react"
 *
 * const Orders = () => {
 *   // refetch a function that can be used to
 *   // re-retrieve orders after the customer logs in
 *   const { orders, isLoading } = useCustomerOrders()
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading orders...</span>}
 *       {orders?.length && (
 *         <ul>
 *           {orders.map((order) => (
 *             <li key={order.id}>{order.display_id}</li>
 *           ))}
 *         </ul>
 *       )}
 *     </div>
 *   )
 * }
 *
 * export default Orders
 *
 * @customNamespace Hooks.Store.Customers
 * @category Queries
 */
declare const useCustomerOrders: (query?: StoreGetCustomersCustomerOrdersParams, options?: UseQueryOptionsWrapper<Response<StoreCustomersListOrdersRes>, Error, ReturnType<CustomerQueryKey["orders"]>>) => {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: true;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<StoreCustomersListOrdersRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly orders?: _medusajs_medusa.Order[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: true;
    readonly status: "success";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<StoreCustomersListOrdersRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly orders?: _medusajs_medusa.Order[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: true;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<StoreCustomersListOrdersRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly orders?: _medusajs_medusa.Order[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: true;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "loading";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<StoreCustomersListOrdersRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly orders?: _medusajs_medusa.Order[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
};

/**
 * This hook registers a new customer. This will also automatically authenticate the customer and set their login session in the response Cookie header.
 * Subsequent requests sent with other hooks are sent with the Cookie session automatically.
 *
 * @example
 * import React from "react"
 * import { useCreateCustomer } from "medusa-react"
 *
 * const RegisterCustomer = () => {
 *   const createCustomer = useCreateCustomer()
 *   // ...
 *
 *   const handleCreate = (
 *     customerData: {
 *       first_name: string
 *       last_name: string
 *       email: string
 *       password: string
 *     }
 *   ) => {
 *     // ...
 *     createCustomer.mutate(customerData, {
 *       onSuccess: ({ customer }) => {
 *         console.log(customer.id)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default RegisterCustomer
 *
 * @customNamespace Hooks.Store.Customers
 * @category Mutations
 */
declare const useCreateCustomer: (options?: UseMutationOptions<StoreCustomersRes, Error, StorePostCustomersReq>) => _tanstack_react_query.UseMutationResult<exposed_medusa_js.Response<StoreCustomersRes>, Error, StorePostCustomersReq, unknown>;
type UpdateMeReq = StorePostCustomersCustomerReq & {
    /**
     * The customer's ID.
     */
    id: string;
};
/**
 * This hook updates the logged-in customer's details. This hook requires [customer authentication](https://docs.medusajs.com/medusa-react/overview#customer-authentication).
 *
 * @example
 * import React from "react"
 * import { useUpdateMe } from "medusa-react"
 *
 * type Props = {
 *   customerId: string
 * }
 *
 * const Customer = ({ customerId }: Props) => {
 *   const updateCustomer = useUpdateMe()
 *   // ...
 *
 *   const handleUpdate = (
 *     firstName: string
 *   ) => {
 *     // ...
 *     updateCustomer.mutate({
 *       id: customerId,
 *       first_name: firstName,
 *     }, {
 *       onSuccess: ({ customer }) => {
 *         console.log(customer.first_name)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default Customer
 *
 * @customNamespace Hooks.Store.Customers
 * @category Mutations
 */
declare const useUpdateMe: (options?: UseMutationOptions<StoreCustomersRes, Error, UpdateMeReq>) => _tanstack_react_query.UseMutationResult<exposed_medusa_js.Response<StoreCustomersRes>, Error, UpdateMeReq, unknown>;

declare const giftCardKeys: TQueryKey<"gift_cards", any, string>;
type GiftCardQueryKey = typeof giftCardKeys;
/**
 * This hook retrieves a Gift Card's details by its associated unique code.
 *
 * @example
 * import React from "react"
 * import { useGiftCard } from "medusa-react"
 *
 * type Props = {
 *   giftCardCode: string
 * }
 *
 * const GiftCard = ({ giftCardCode }: Props) => {
 *   const { gift_card, isLoading, isError } = useGiftCard(
 *     giftCardCode
 *   )
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {gift_card && <span>{gift_card.value}</span>}
 *       {isError && <span>Gift Card does not exist</span>}
 *     </div>
 *   )
 * }
 *
 * export default GiftCard
 *
 * @customNamespace Hooks.Store.Gift Cards
 * @category Queries
 */
declare const useGiftCard: (id: string, options?: UseQueryOptionsWrapper<Response<StoreGiftCardsRes>, Error, ReturnType<GiftCardQueryKey["detail"]>>) => {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: true;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<StoreGiftCardsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly gift_card?: _medusajs_medusa.GiftCard | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: true;
    readonly status: "success";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<StoreGiftCardsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly gift_card?: _medusajs_medusa.GiftCard | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: true;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<StoreGiftCardsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly gift_card?: _medusajs_medusa.GiftCard | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: true;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "loading";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<StoreGiftCardsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly gift_card?: _medusajs_medusa.GiftCard | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
};

/**
 * This hook generates a Line Item with a given Product Variant and adds it to the Cart.
 *
 * @example
 * import React from "react"
 * import { useCreateLineItem } from "medusa-react"
 *
 * type Props = {
 *   cartId: string
 * }
 *
 * const Cart = ({ cartId }: Props) => {
 *   const createLineItem = useCreateLineItem(cartId)
 *
 *   const handleAddItem = (
 *     variantId: string,
 *     quantity: number
 *   ) => {
 *     createLineItem.mutate({
 *       variant_id: variantId,
 *       quantity,
 *     }, {
 *       onSuccess: ({ cart }) => {
 *         console.log(cart.items)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default Cart
 *
 * @customNamespace Hooks.Store.Line Items
 * @category Mutations
 */
declare const useCreateLineItem: (cartId: string, options?: UseMutationOptions<StoreCartsRes, Error, StorePostCartsCartLineItemsReq>) => _tanstack_react_query.UseMutationResult<exposed_medusa_js.Response<StoreCartsRes>, Error, StorePostCartsCartLineItemsReq, unknown>;
type UpdateLineItemReq = StorePostCartsCartLineItemsItemReq & {
    /**
     * The line item's ID.
     */
    lineId: string;
};
/**
 * This hook updates a line item's data.
 *
 * @example
 * import React from "react"
 * import { useUpdateLineItem } from "medusa-react"
 *
 * type Props = {
 *   cartId: string
 * }
 *
 * const Cart = ({ cartId }: Props) => {
 *   const updateLineItem = useUpdateLineItem(cartId)
 *
 *   const handleUpdateItem = (
 *     lineItemId: string,
 *     quantity: number
 *   ) => {
 *     updateLineItem.mutate({
 *       lineId: lineItemId,
 *       quantity,
 *     }, {
 *       onSuccess: ({ cart }) => {
 *         console.log(cart.items)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default Cart
 *
 * @customNamespace Hooks.Store.Line Items
 * @category Mutations
 */
declare const useUpdateLineItem: (cartId: string, options?: UseMutationOptions<StoreCartsRes, Error, UpdateLineItemReq>) => _tanstack_react_query.UseMutationResult<exposed_medusa_js.Response<StoreCartsRes>, Error, UpdateLineItemReq, unknown>;
/**
 * This hook deletes a line item from a cart. The payment sessions will be updated and the totals will be recalculated.
 *
 * @example
 * import React from "react"
 * import { useDeleteLineItem } from "medusa-react"
 *
 * type Props = {
 *   cartId: string
 * }
 *
 * const Cart = ({ cartId }: Props) => {
 *   const deleteLineItem = useDeleteLineItem(cartId)
 *
 *   const handleDeleteItem = (
 *     lineItemId: string
 *   ) => {
 *     deleteLineItem.mutate({
 *       lineId: lineItemId,
 *     }, {
 *       onSuccess: ({ cart }) => {
 *         console.log(cart.items)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default Cart
 *
 * @customNamespace Hooks.Store.Line Items
 * @category Mutations
 */
declare const useDeleteLineItem: (cartId: string, options?: UseMutationOptions<StoreCartsRes, Error, {
    /**
     * The line item's ID.
     */
    lineId: string;
}>) => _tanstack_react_query.UseMutationResult<exposed_medusa_js.Response<StoreCartsRes>, Error, {
    /**
     * The line item's ID.
     */
    lineId: string;
}, unknown>;

declare const orderEditQueryKeys: TQueryKey<"orderEdit", any, string>;
type OrderQueryKey$1 = typeof orderEditQueryKeys;
/**
 * This hook retrieves an Order Edit's details.
 *
 * @example
 * import React from "react"
 * import { useOrderEdit } from "medusa-react"
 *
 * type Props = {
 *   orderEditId: string
 * }
 *
 * const OrderEdit = ({ orderEditId }: Props) => {
 *   const { order_edit, isLoading } = useOrderEdit(orderEditId)
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {order_edit && (
 *         <ul>
 *           {order_edit.changes.map((change) => (
 *             <li key={change.id}>{change.type}</li>
 *           ))}
 *         </ul>
 *       )}
 *     </div>
 *   )
 * }
 *
 * export default OrderEdit
 *
 * @customNamespace Hooks.Store.Order Edits
 * @category Queries
 */
declare const useOrderEdit: (id: string, options?: UseQueryOptionsWrapper<Response<StoreOrderEditsRes>, Error, ReturnType<OrderQueryKey$1["detail"]>>) => {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: true;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<StoreOrderEditsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly order_edit?: Omit<_medusajs_medusa.OrderEdit, "internal_note" | "created_by" | "confirmed_by" | "canceled_by"> | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: true;
    readonly status: "success";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<StoreOrderEditsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly order_edit?: Omit<_medusajs_medusa.OrderEdit, "internal_note" | "created_by" | "confirmed_by" | "canceled_by"> | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: true;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<StoreOrderEditsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly order_edit?: Omit<_medusajs_medusa.OrderEdit, "internal_note" | "created_by" | "confirmed_by" | "canceled_by"> | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: true;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "loading";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<StoreOrderEditsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly order_edit?: Omit<_medusajs_medusa.OrderEdit, "internal_note" | "created_by" | "confirmed_by" | "canceled_by"> | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
};

/**
 * This hook declines an Order Edit. The changes are not reflected on the original order.
 *
 * @example
 * import React from "react"
 * import { useDeclineOrderEdit } from "medusa-react"
 *
 * type Props = {
 *   orderEditId: string
 * }
 *
 * const OrderEdit = ({ orderEditId }: Props) => {
 *   const declineOrderEdit = useDeclineOrderEdit(orderEditId)
 *   // ...
 *
 *   const handleDeclineOrderEdit = (
 *     declinedReason: string
 *   ) => {
 *     declineOrderEdit.mutate({
 *       declined_reason: declinedReason,
 *     }, {
 *       onSuccess: ({ order_edit }) => {
 *         console.log(order_edit.declined_at)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default OrderEdit
 *
 * @customNamespace Hooks.Store.Order Edits
 * @category Mutations
 */
declare const useDeclineOrderEdit: (id: string, options?: UseMutationOptions<Response<StoreOrderEditsRes>, Error, StorePostOrderEditsOrderEditDecline>) => _tanstack_react_query.UseMutationResult<Response<StoreOrderEditsRes>, Error, StorePostOrderEditsOrderEditDecline, unknown>;
/**
 * This hook completes and confirms an Order Edit and reflect its changes on the original order. Any additional payment required must
 * be authorized first using the {@link Hooks.Store."Payment Collections".useAuthorizePaymentSession | useAuthorizePaymentSession} hook.
 *
 * @example
 * import React from "react"
 * import { useCompleteOrderEdit } from "medusa-react"
 *
 * type Props = {
 *   orderEditId: string
 * }
 *
 * const OrderEdit = ({ orderEditId }: Props) => {
 *   const completeOrderEdit = useCompleteOrderEdit(
 *     orderEditId
 *   )
 *   // ...
 *
 *   const handleCompleteOrderEdit = () => {
 *     completeOrderEdit.mutate(void 0, {
 *       onSuccess: ({ order_edit }) => {
 *         console.log(order_edit.confirmed_at)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default OrderEdit
 *
 * @customNamespace Hooks.Store.Order Edits
 * @category Mutations
 */
declare const useCompleteOrderEdit: (id: string, options?: UseMutationOptions<Response<StoreOrderEditsRes>, Error>) => _tanstack_react_query.UseMutationResult<Response<StoreOrderEditsRes>, Error, void, unknown>;

declare const orderKeys: {
    cart: (cartId: string) => readonly ["orders", "detail", "cart", string];
    all: ["orders"];
    lists: () => ["orders", "list"];
    list: (query?: StoreGetOrdersParams | undefined) => ["orders", "list", {
        query: StoreGetOrdersParams | undefined;
    }];
    details: () => ["orders", "detail"];
    detail: (id: string) => ["orders", "detail", string];
};
type OrderQueryKey = typeof orderKeys;
/**
 * This hook retrieves an Order's details.
 *
 * @example
 * import React from "react"
 * import { useOrder } from "medusa-react"
 *
 * type Props = {
 *   orderId: string
 * }
 *
 * const Order = ({ orderId }: Props) => {
 *   const {
 *     order,
 *     isLoading,
 *   } = useOrder(orderId)
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {order && <span>{order.display_id}</span>}
 *
 *     </div>
 *   )
 * }
 *
 * export default Order
 *
 * @customNamespace Hooks.Store.Orders
 * @category Queries
 */
declare const useOrder: (id: string, options?: UseQueryOptionsWrapper<Response<StoreOrdersRes>, Error, ReturnType<OrderQueryKey["detail"]>>) => {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: true;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<StoreOrdersRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly order?: _medusajs_medusa.Order | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: true;
    readonly status: "success";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<StoreOrdersRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly order?: _medusajs_medusa.Order | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: true;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<StoreOrdersRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly order?: _medusajs_medusa.Order | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: true;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "loading";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<StoreOrdersRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly order?: _medusajs_medusa.Order | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
};
/**
 * This hook retrieves an order's details by the ID of the cart that was used to create the order.
 *
 * @example
 * import React from "react"
 * import { useCartOrder } from "medusa-react"
 *
 * type Props = {
 *   cartId: string
 * }
 *
 * const Order = ({ cartId }: Props) => {
 *   const {
 *     order,
 *     isLoading,
 *   } = useCartOrder(cartId)
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {order && <span>{order.display_id}</span>}
 *
 *     </div>
 *   )
 * }
 *
 * export default Order
 *
 * @customNamespace Hooks.Store.Orders
 * @category Queries
 */
declare const useCartOrder: (cartId: string, options?: UseQueryOptionsWrapper<Response<StoreOrdersRes>, Error, ReturnType<OrderQueryKey["cart"]>>) => {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: true;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<StoreOrdersRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly order?: _medusajs_medusa.Order | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: true;
    readonly status: "success";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<StoreOrdersRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly order?: _medusajs_medusa.Order | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: true;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<StoreOrdersRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly order?: _medusajs_medusa.Order | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: true;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "loading";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<StoreOrdersRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly order?: _medusajs_medusa.Order | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
};
/**
 * This hook looks up an order using filters. If the filters don't narrow down the results to a single order, a `404` response is returned with no orders.
 *
 * @example
 * import React from "react"
 * import { useOrders } from "medusa-react"
 *
 * type Props = {
 *   displayId: number
 *   email: string
 * }
 *
 * const Order = ({
 *   displayId,
 *   email
 * }: Props) => {
 *   const {
 *     order,
 *     isLoading,
 *   } = useOrders({
 *     display_id: displayId,
 *     email,
 *   })
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {order && <span>{order.display_id}</span>}
 *
 *     </div>
 *   )
 * }
 *
 * export default Order
 *
 * @customNamespace Hooks.Store.Orders
 * @category Queries
 */
declare const useOrders: (query: StoreGetOrdersParams, options?: UseQueryOptionsWrapper<Response<StoreOrdersRes>, Error, ReturnType<OrderQueryKey["list"]>>) => {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: true;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<StoreOrdersRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly order?: _medusajs_medusa.Order | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: true;
    readonly status: "success";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<StoreOrdersRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly order?: _medusajs_medusa.Order | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: true;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<StoreOrdersRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly order?: _medusajs_medusa.Order | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: true;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "loading";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<StoreOrdersRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly order?: _medusajs_medusa.Order | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
};

/**
 * This hook allows the logged-in customer to claim ownership of one or more orders. This generates a token that can be used later on to verify the claim
 * using the {@link useGrantOrderAccess} hook. This also emits the event `order-update-token.created`. So, if you have a notification provider installed
 * that handles this event and sends the customer a notification, such as an email, the customer should receive instructions on how to
 * finalize their claim ownership.
 *
 * @example
 * import React from "react"
 * import { useRequestOrderAccess } from "medusa-react"
 *
 * const ClaimOrder = () => {
 *   const claimOrder = useRequestOrderAccess()
 *
 *   const handleClaimOrder = (
 *     orderIds: string[]
 *   ) => {
 *     claimOrder.mutate({
 *       order_ids: orderIds
 *     }, {
 *       onSuccess: () => {
 *         // successful
 *       },
 *       onError: () => {
 *         // an error occurred.
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default ClaimOrder
 *
 * @customNamespace Hooks.Store.Orders
 * @category Mutations
 */
declare const useRequestOrderAccess: (options?: UseMutationOptions<Response<{}>, Error, StorePostCustomersCustomerOrderClaimReq>) => _tanstack_react_query.UseMutationResult<{
    response: exposed_medusa_js.HTTPResponse;
}, Error, StorePostCustomersCustomerOrderClaimReq, unknown>;
/**
 * This hook verifies the claim order token provided to the customer when they request ownership of an order.
 *
 * @example
 * import React from "react"
 * import { useGrantOrderAccess } from "medusa-react"
 *
 * const ClaimOrder = () => {
 *   const confirmOrderRequest = useGrantOrderAccess()
 *
 *   const handleOrderRequestConfirmation = (
 *     token: string
 *   ) => {
 *     confirmOrderRequest.mutate({
 *       token
 *     }, {
 *       onSuccess: () => {
 *         // successful
 *       },
 *       onError: () => {
 *         // an error occurred.
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default ClaimOrder
 *
 * @customNamespace Hooks.Store.Orders
 * @category Mutations
 */
declare const useGrantOrderAccess: (options?: UseMutationOptions<Response<{}>, Error, StorePostCustomersCustomerAcceptClaimReq>) => _tanstack_react_query.UseMutationResult<{
    response: exposed_medusa_js.HTTPResponse;
}, Error, StorePostCustomersCustomerAcceptClaimReq, unknown>;

declare const paymentCollectionQueryKeys: TQueryKey<"paymentCollection", any, string>;
type PaymentCollectionKey = typeof paymentCollectionQueryKeys;
/**
 * This hook retrieves a Payment Collection's details.
 *
 * @example
 * import React from "react"
 * import { usePaymentCollection } from "medusa-react"
 *
 * type Props = {
 *   paymentCollectionId: string
 * }
 *
 * const PaymentCollection = ({
 *   paymentCollectionId
 * }: Props) => {
 *   const {
 *     payment_collection,
 *     isLoading
 *   } = usePaymentCollection(
 *     paymentCollectionId
 *   )
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {payment_collection && (
 *         <span>{payment_collection.status}</span>
 *       )}
 *     </div>
 *   )
 * }
 *
 * export default PaymentCollection
 *
 * @customNamespace Hooks.Store.Payment Collections
 * @category Queries
 */
declare const usePaymentCollection: (id: string, options?: UseQueryOptionsWrapper<Response<StorePaymentCollectionsRes>, Error, ReturnType<PaymentCollectionKey["detail"]>>) => {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: true;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<StorePaymentCollectionsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly payment_collection?: _medusajs_medusa.PaymentCollection | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: true;
    readonly status: "success";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<StorePaymentCollectionsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly payment_collection?: _medusajs_medusa.PaymentCollection | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: true;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<StorePaymentCollectionsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly payment_collection?: _medusajs_medusa.PaymentCollection | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: true;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "loading";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<StorePaymentCollectionsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly payment_collection?: _medusajs_medusa.PaymentCollection | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
};

/**
 * This hook creates, updates, or deletes a list of payment sessions of a Payment Collections. If a payment session is not provided in the `sessions` array, it's deleted.
 *
 * @example
 * To add two new payment sessions:
 *
 * ```tsx
 * import React from "react"
 * import { useManageMultiplePaymentSessions } from "medusa-react"
 *
 * type Props = {
 *   paymentCollectionId: string
 * }
 *
 * const PaymentCollection = ({
 *   paymentCollectionId
 * }: Props) => {
 *   const managePaymentSessions = useManageMultiplePaymentSessions(
 *     paymentCollectionId
 *   )
 *
 *   const handleManagePaymentSessions = () => {
 *     managePaymentSessions.mutate({
 *       // Total amount = 10000
 *       sessions: [
 *         {
 *           provider_id: "stripe",
 *           amount: 5000,
 *         },
 *         {
 *           provider_id: "manual",
 *           amount: 5000,
 *         },
 *       ]
 *     }, {
 *       onSuccess: ({ payment_collection }) => {
 *         console.log(payment_collection.payment_sessions)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default PaymentCollection
 * ```
 *
 * To update a payment session and another one by not including it in the payload:
 *
 * ```tsx
 * import React from "react"
 * import { useManageMultiplePaymentSessions } from "medusa-react"
 *
 * type Props = {
 *   paymentCollectionId: string
 * }
 *
 * const PaymentCollection = ({
 *   paymentCollectionId
 * }: Props) => {
 *   const managePaymentSessions = useManageMultiplePaymentSessions(
 *     paymentCollectionId
 *   )
 *
 *   const handleManagePaymentSessions = () => {
 *     managePaymentSessions.mutate({
 *       // Total amount = 10000
 *       sessions: [
 *         {
 *           provider_id: "stripe",
 *           amount: 10000,
 *           session_id: "ps_123456"
 *         },
 *       ]
 *     }, {
 *       onSuccess: ({ payment_collection }) => {
 *         console.log(payment_collection.payment_sessions)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default PaymentCollection
 * ```
 *
 * @customNamespace Hooks.Store.Payment Collections
 * @category Mutations
 */
declare const useManageMultiplePaymentSessions: (id: string, options?: UseMutationOptions<Response<StorePaymentCollectionsRes>, Error, StorePostPaymentCollectionsBatchSessionsReq>) => _tanstack_react_query.UseMutationResult<Response<StorePaymentCollectionsRes>, Error, StorePostPaymentCollectionsBatchSessionsReq, unknown>;
/**
 * This hook creates a Payment Session for a payment provider in a Payment Collection.
 *
 * @example
 * import React from "react"
 * import { useManagePaymentSession } from "medusa-react"
 *
 * type Props = {
 *   paymentCollectionId: string
 * }
 *
 * const PaymentCollection = ({
 *   paymentCollectionId
 * }: Props) => {
 *   const managePaymentSession = useManagePaymentSession(
 *     paymentCollectionId
 *   )
 *
 *   const handleManagePaymentSession = (
 *     providerId: string
 *   ) => {
 *     managePaymentSession.mutate({
 *       provider_id: providerId
 *     }, {
 *       onSuccess: ({ payment_collection }) => {
 *         console.log(payment_collection.payment_sessions)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default PaymentCollection
 *
 * @customNamespace Hooks.Store.Payment Collections
 * @category Mutations
 */
declare const useManagePaymentSession: (id: string, options?: UseMutationOptions<Response<StorePaymentCollectionsRes>, Error, StorePaymentCollectionSessionsReq>) => _tanstack_react_query.UseMutationResult<Response<StorePaymentCollectionsRes>, Error, StorePaymentCollectionSessionsReq, unknown>;
/**
 * This hook authorizes a Payment Session of a Payment Collection.
 *
 * @typeParamDefinition string - The payment session's ID.
 *
 * @example
 * import React from "react"
 * import { useAuthorizePaymentSession } from "medusa-react"
 *
 * type Props = {
 *   paymentCollectionId: string
 * }
 *
 * const PaymentCollection = ({
 *   paymentCollectionId
 * }: Props) => {
 *   const authorizePaymentSession = useAuthorizePaymentSession(
 *     paymentCollectionId
 *   )
 *   // ...
 *
 *   const handleAuthorizePayment = (paymentSessionId: string) => {
 *     authorizePaymentSession.mutate(paymentSessionId, {
 *       onSuccess: ({ payment_collection }) => {
 *         console.log(payment_collection.payment_sessions)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default PaymentCollection
 *
 * @customNamespace Hooks.Store.Payment Collections
 * @category Mutations
 */
declare const useAuthorizePaymentSession: (id: string, options?: UseMutationOptions<Response<StorePaymentCollectionsRes>, Error, 
/**
 * The payment session's ID.
 */
string>) => _tanstack_react_query.UseMutationResult<Response<StorePaymentCollectionsRes>, Error, string, unknown>;
/**
 * This hook authorize the Payment Sessions of a Payment Collection.
 *
 * @example
 * import React from "react"
 * import { useAuthorizePaymentSessionsBatch } from "medusa-react"
 *
 * type Props = {
 *   paymentCollectionId: string
 * }
 *
 * const PaymentCollection = ({
 *   paymentCollectionId
 * }: Props) => {
 *   const authorizePaymentSessions = useAuthorizePaymentSessionsBatch(
 *     paymentCollectionId
 *   )
 *   // ...
 *
 *   const handleAuthorizePayments = (paymentSessionIds: string[]) => {
 *     authorizePaymentSessions.mutate({
 *       session_ids: paymentSessionIds
 *     }, {
 *       onSuccess: ({ payment_collection }) => {
 *         console.log(payment_collection.payment_sessions)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default PaymentCollection
 *
 * @customNamespace Hooks.Store.Payment Collections
 * @category Mutations
 */
declare const useAuthorizePaymentSessionsBatch: (id: string, options?: UseMutationOptions<Response<StorePaymentCollectionsRes>, Error, StorePostPaymentCollectionsBatchSessionsAuthorizeReq>) => _tanstack_react_query.UseMutationResult<Response<StorePaymentCollectionsRes>, Error, StorePostPaymentCollectionsBatchSessionsAuthorizeReq, unknown>;
/**
 * This hook refreshes a Payment Session's data to ensure that it is in sync with the Payment Collection.
 *
 * @typeParamDefinition string - The payment session's ID.
 *
 * @example
 * import React from "react"
 * import { usePaymentCollectionRefreshPaymentSession } from "medusa-react"
 *
 * type Props = {
 *   paymentCollectionId: string
 * }
 *
 * const PaymentCollection = ({
 *   paymentCollectionId
 * }: Props) => {
 *   const refreshPaymentSession = usePaymentCollectionRefreshPaymentSession(
 *     paymentCollectionId
 *   )
 *   // ...
 *
 *   const handleRefreshPaymentSession = (paymentSessionId: string) => {
 *     refreshPaymentSession.mutate(paymentSessionId, {
 *       onSuccess: ({ payment_session }) => {
 *         console.log(payment_session.status)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default PaymentCollection
 *
 * @customNamespace Hooks.Store.Payment Collections
 * @category Mutations
 */
declare const usePaymentCollectionRefreshPaymentSession: (id: string, options?: UseMutationOptions<Response<StorePaymentCollectionsSessionRes>, Error, 
/**
 * The payment session's ID.
 */
string>) => _tanstack_react_query.UseMutationResult<Response<StorePaymentCollectionsSessionRes>, Error, string, unknown>;

declare const storeProductCategoryKeys: TQueryKey<"product_categories", any, string>;
type ProductCategoryQueryKeys$1 = typeof storeProductCategoryKeys;
/**
 * This hook retrieves a list of product categories. The product categories can be filtered by fields such as `handle` or `q` passed in the `query` parameter.
 * The product categories can also be paginated. This hook can also be used to retrieve a product category by its handle.
 *
 * @example
 * To list product categories:
 *
 * ```tsx
 * import React from "react"
 * import { useProductCategories } from "medusa-react"
 *
 * function Categories() {
 *   const {
 *     product_categories,
 *     isLoading,
 *   } = useProductCategories()
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {product_categories && !product_categories.length && (
 *         <span>No Categories</span>
 *       )}
 *       {product_categories && product_categories.length > 0 && (
 *         <ul>
 *           {product_categories.map(
 *             (category) => (
 *               <li key={category.id}>{category.name}</li>
 *             )
 *           )}
 *         </ul>
 *       )}
 *     </div>
 *   )
 * }
 *
 * export default Categories
 * ```
 *
 * To retrieve a product category by its handle:
 *
 * ```tsx
 * import React from "react"
 * import { useProductCategories } from "medusa-react"
 *
 * function Categories(
 *   handle: string
 * ) {
 *   const {
 *     product_categories,
 *     isLoading,
 *   } = useProductCategories({
 *     handle
 *   })
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {product_categories && !product_categories.length && (
 *         <span>No Categories</span>
 *       )}
 *       {product_categories && product_categories.length > 0 && (
 *         <ul>
 *           {product_categories.map(
 *             (category) => (
 *               <li key={category.id}>{category.name}</li>
 *             )
 *           )}
 *         </ul>
 *       )}
 *     </div>
 *   )
 * }
 *
 * export default Categories
 * ```
 *
 * To specify relations that should be retrieved within the product categories:
 *
 * ```tsx
 * import React from "react"
 * import { useProductCategories } from "medusa-react"
 *
 * function Categories(
 *   handle: string
 * ) {
 *   const {
 *     product_categories,
 *     isLoading,
 *   } = useProductCategories({
 *     handle,
 *     expand: "products"
 *   })
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {product_categories && !product_categories.length && (
 *         <span>No Categories</span>
 *       )}
 *       {product_categories && product_categories.length > 0 && (
 *         <ul>
 *           {product_categories.map(
 *             (category) => (
 *               <li key={category.id}>{category.name}</li>
 *             )
 *           )}
 *         </ul>
 *       )}
 *     </div>
 *   )
 * }
 *
 * export default Categories
 * ```
 *
 * By default, only the first `100` records are retrieved. You can control pagination by specifying the `limit` and `offset` properties:
 *
 * ```tsx
 * import { useProductCategories } from "medusa-react"
 *
 * function Categories(
 *   handle: string
 * ) {
 *   const {
 *     product_categories,
 *     limit,
 *     offset,
 *     isLoading,
 *   } = useProductCategories({
 *     handle,
 *     expand: "products",
 *     limit: 50,
 *     offset: 0
 *   })
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {product_categories && !product_categories.length && (
 *         <span>No Categories</span>
 *       )}
 *       {product_categories && product_categories.length > 0 && (
 *         <ul>
 *           {product_categories.map(
 *             (category) => (
 *               <li key={category.id}>{category.name}</li>
 *             )
 *           )}
 *         </ul>
 *       )}
 *     </div>
 *   )
 * }
 *
 * export default Categories
 * ```
 *
 * @customNamespace Hooks.Store.Product Categories
 * @category Queries
 */
declare const useProductCategories: (query?: StoreGetProductCategoriesParams, options?: UseQueryOptionsWrapper<Response<StoreGetProductCategoriesRes>, Error, ReturnType<ProductCategoryQueryKeys$1["list"]>>) => {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: true;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<StoreGetProductCategoriesRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly product_categories?: _medusajs_medusa.ProductCategory[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: true;
    readonly status: "success";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<StoreGetProductCategoriesRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly product_categories?: _medusajs_medusa.ProductCategory[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: true;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<StoreGetProductCategoriesRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly product_categories?: _medusajs_medusa.ProductCategory[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: true;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "loading";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<StoreGetProductCategoriesRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly product_categories?: _medusajs_medusa.ProductCategory[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
};
/**
 * This hook retrieves a Product Category's details.
 *
 * @example
 * A simple example that retrieves a product category by its ID:
 *
 * ```tsx
 * import React from "react"
 * import { useProductCategory } from "medusa-react"
 *
 * type Props = {
 *   categoryId: string
 * }
 *
 * const Category = ({ categoryId }: Props) => {
 *   const { product_category, isLoading } = useProductCategory(
 *     categoryId
 *   )
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {product_category && <span>{product_category.name}</span>}
 *     </div>
 *   )
 * }
 *
 * export default Category
 * ```
 *
 * To specify relations that should be retrieved:
 *
 * ```tsx
 * import React from "react"
 * import { useProductCategory } from "medusa-react"
 *
 * type Props = {
 *   categoryId: string
 * }
 *
 * const Category = ({ categoryId }: Props) => {
 *   const { product_category, isLoading } = useProductCategory(
 *     categoryId,
 *     {
 *       expand: "products"
 *     }
 *   )
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {product_category && <span>{product_category.name}</span>}
 *     </div>
 *   )
 * }
 *
 * export default Category
 * ```
 *
 * @customNamespace Hooks.Store.Product Categories
 * @category Queries
 */
declare const useProductCategory: (id: string, query?: StoreGetProductCategoriesCategoryParams, options?: UseQueryOptionsWrapper<Response<StoreGetProductCategoriesCategoryRes>, Error, ReturnType<ProductCategoryQueryKeys$1["detail"]>>) => {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: true;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<StoreGetProductCategoriesCategoryRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly product_category?: _medusajs_medusa.ProductCategory | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: true;
    readonly status: "success";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<StoreGetProductCategoriesCategoryRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly product_category?: _medusajs_medusa.ProductCategory | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: true;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<StoreGetProductCategoriesCategoryRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly product_category?: _medusajs_medusa.ProductCategory | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: true;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "loading";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<StoreGetProductCategoriesCategoryRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly product_category?: _medusajs_medusa.ProductCategory | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
};

declare const productTagKeys: TQueryKey<"product_tags", any, string>;
type ProductTypesQueryKeys$2 = typeof productTagKeys;
/**
 * This hook retrieves a list of product tags. The product tags can be filtered by fields such as `id` or `q`
 * passed in the `query` parameter. The product tags can also be sorted or paginated.
 *
 * @example
 * To list product tags:
 *
 * ```tsx
 * import React from "react"
 * import { useProductTags } from "medusa-react"
 *
 * function Tags() {
 *   const {
 *     product_tags,
 *     isLoading,
 *   } = useProductTags()
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {product_tags && !product_tags.length && (
 *         <span>No Product Tags</span>
 *       )}
 *       {product_tags && product_tags.length > 0 && (
 *         <ul>
 *           {product_tags.map(
 *             (tag) => (
 *               <li key={tag.id}>{tag.value}</li>
 *             )
 *           )}
 *         </ul>
 *       )}
 *     </div>
 *   )
 * }
 *
 * export default Tags
 * ```
 *
 * By default, only the first `20` records are retrieved. You can control pagination by specifying the `limit` and `offset` properties:
 *
 * ```tsx
 * import React from "react"
 * import { useProductTags } from "medusa-react"
 *
 * function Tags() {
 *   const {
 *     product_tags,
 *     limit,
 *     offset,
 *     isLoading,
 *   } = useProductTags({
 *     limit: 10,
 *     offset: 0
 *   })
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {product_tags && !product_tags.length && (
 *         <span>No Product Tags</span>
 *       )}
 *       {product_tags && product_tags.length > 0 && (
 *         <ul>
 *           {product_tags.map(
 *             (tag) => (
 *               <li key={tag.id}>{tag.value}</li>
 *             )
 *           )}
 *         </ul>
 *       )}
 *     </div>
 *   )
 * }
 *
 * export default Tags
 * ```
 *
 * @customNamespace Hooks.Store.Product Tags
 * @category Queries
 */
declare const useProductTags: (query?: StoreGetProductTagsParams, options?: UseQueryOptionsWrapper<Response<StoreProductTagsListRes>, Error, ReturnType<ProductTypesQueryKeys$2["list"]>>) => {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: true;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<StoreProductTagsListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly product_tags?: _medusajs_medusa.ProductTag[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: true;
    readonly status: "success";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<StoreProductTagsListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly product_tags?: _medusajs_medusa.ProductTag[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: true;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<StoreProductTagsListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly product_tags?: _medusajs_medusa.ProductTag[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: true;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "loading";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<StoreProductTagsListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly product_tags?: _medusajs_medusa.ProductTag[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
};

declare const productTypeKeys: TQueryKey<"product_types", any, string>;
type ProductTypesQueryKeys$1 = typeof productTypeKeys;
/**
 * This hook retrieves a list of product types. The product types can be filtered by fields such as `value` or `q` passed
 * in the `query` parameter. The product types can also be sorted or paginated.
 *
 * @example
 * To list product types:
 *
 * ```tsx
 * import React from "react"
 * import { useProductTypes } from "medusa-react"
 *
 * function Types() {
 *   const {
 *     product_types,
 *     isLoading,
 *   } = useProductTypes()
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {product_types && !product_types.length && (
 *         <span>No Product Types</span>
 *       )}
 *       {product_types && product_types.length > 0 && (
 *         <ul>
 *           {product_types.map(
 *             (type) => (
 *               <li key={type.id}>{type.value}</li>
 *             )
 *           )}
 *         </ul>
 *       )}
 *     </div>
 *   )
 * }
 *
 * export default Types
 * ```
 *
 * By default, only the first `20` records are retrieved. You can control pagination by specifying the `limit` and `offset` properties:
 *
 * ```tsx
 * import React from "react"
 * import { useProductTypes } from "medusa-react"
 *
 * function Types() {
 *   const {
 *     product_types,
 *     limit,
 *     offset,
 *     isLoading,
 *   } = useProductTypes({
 *     limit: 10,
 *     offset: 0
 *   })
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {product_types && !product_types.length && (
 *         <span>No Product Types</span>
 *       )}
 *       {product_types && product_types.length > 0 && (
 *         <ul>
 *           {product_types.map(
 *             (type) => (
 *               <li key={type.id}>{type.value}</li>
 *             )
 *           )}
 *         </ul>
 *       )}
 *     </div>
 *   )
 * }
 *
 * export default Types
 * ```
 *
 * @customNamespace Hooks.Store.Product Types
 * @category Queries
 */
declare const useProductTypes: (query?: StoreGetProductTypesParams, options?: UseQueryOptionsWrapper<Response<StoreProductTypesListRes>, Error, ReturnType<ProductTypesQueryKeys$1["list"]>>) => {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: true;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<StoreProductTypesListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly product_types?: _medusajs_medusa.ProductType[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: true;
    readonly status: "success";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<StoreProductTypesListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly product_types?: _medusajs_medusa.ProductType[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: true;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<StoreProductTypesListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly product_types?: _medusajs_medusa.ProductType[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: true;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "loading";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<StoreProductTypesListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly product_types?: _medusajs_medusa.ProductType[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
};

declare const productKeys: TQueryKey<"products", StoreGetProductsParams, string>;
type ProductQueryKey = typeof productKeys;
/**
 * This hook retrieves a list of products. The products can be filtered by fields such as `id` or `q` passed in the `query` parameter. The products can also be sorted or paginated.
 * This hook can also be used to retrieve a product by its handle.
 *
 * For accurate and correct pricing of the products based on the customer's context, it's highly recommended to pass fields such as
 * `region_id`, `currency_code`, and `cart_id` when available.
 *
 * Passing `sales_channel_id` ensures retrieving only products available in the specified sales channel.
 * You can alternatively use a publishable API key in the request header instead of passing a `sales_channel_id`.
 *
 * @example
 * To list products:
 *
 * ```tsx
 * import React from "react"
 * import { useProducts } from "medusa-react"
 *
 * const Products = () => {
 *   const { products, isLoading } = useProducts()
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {products && !products.length && <span>No Products</span>}
 *       {products && products.length > 0 && (
 *         <ul>
 *           {products.map((product) => (
 *             <li key={product.id}>{product.title}</li>
 *           ))}
 *         </ul>
 *       )}
 *     </div>
 *   )
 * }
 *
 * export default Products
 * ```
 *
 * To specify relations that should be retrieved within the products:
 *
 * ```tsx
 * import React from "react"
 * import { useProducts } from "medusa-react"
 *
 * const Products = () => {
 *   const { products, isLoading } = useProducts({
 *     expand: "variants"
 *   })
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {products && !products.length && <span>No Products</span>}
 *       {products && products.length > 0 && (
 *         <ul>
 *           {products.map((product) => (
 *             <li key={product.id}>{product.title}</li>
 *           ))}
 *         </ul>
 *       )}
 *     </div>
 *   )
 * }
 *
 * export default Products
 * ```
 *
 * By default, only the first `100` records are retrieved. You can control pagination by specifying the `limit` and `offset` properties:
 *
 * ```tsx
 * import React from "react"
 * import { useProducts } from "medusa-react"
 *
 * const Products = () => {
 *   const {
 *     products,
 *     limit,
 *     offset,
 *     isLoading
 *   } = useProducts({
 *     expand: "variants",
 *     limit: 50,
 *     offset: 0
 *   })
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {products && !products.length && <span>No Products</span>}
 *       {products && products.length > 0 && (
 *         <ul>
 *           {products.map((product) => (
 *             <li key={product.id}>{product.title}</li>
 *           ))}
 *         </ul>
 *       )}
 *     </div>
 *   )
 * }
 *
 * export default Products
 * ```
 *
 * @customNamespace Hooks.Store.Products
 * @category Queries
 */
declare const useProducts: (query?: StoreGetProductsParams, options?: UseQueryOptionsWrapper<Response<StoreProductsListRes>, Error, ReturnType<ProductQueryKey["list"]>>) => {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: true;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<StoreProductsListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly products?: _medusajs_medusa_dist_types_pricing.PricedProduct[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: true;
    readonly status: "success";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<StoreProductsListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly products?: _medusajs_medusa_dist_types_pricing.PricedProduct[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: true;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<StoreProductsListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly products?: _medusajs_medusa_dist_types_pricing.PricedProduct[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: true;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "loading";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<StoreProductsListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly products?: _medusajs_medusa_dist_types_pricing.PricedProduct[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
};
/**
 * This hook retrieves a Product's details. For accurate and correct pricing of the product based on the customer's context, it's highly recommended to pass fields such as
 * `region_id`, `currency_code`, and `cart_id` when available.
 *
 * Passing `sales_channel_id` ensures retrieving only products available in the current sales channel.
 * You can alternatively use a publishable API key in the request header instead of passing a `sales_channel_id`.
 *
 * @example
 * import React from "react"
 * import { useProduct } from "medusa-react"
 *
 * type Props = {
 *   productId: string
 * }
 *
 * const Product = ({ productId }: Props) => {
 *   const { product, isLoading } = useProduct(productId)
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {product && <span>{product.title}</span>}
 *     </div>
 *   )
 * }
 *
 * export default Product
 *
 * @customNamespace Hooks.Store.Products
 * @category Queries
 */
declare const useProduct: (id: string, options?: UseQueryOptionsWrapper<Response<StoreProductsRes>, Error, ReturnType<ProductQueryKey["detail"]>>) => {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: true;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<StoreProductsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly product?: _medusajs_medusa_dist_types_pricing.PricedProduct | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: true;
    readonly status: "success";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<StoreProductsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly product?: _medusajs_medusa_dist_types_pricing.PricedProduct | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: true;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<StoreProductsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly product?: _medusajs_medusa_dist_types_pricing.PricedProduct | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: true;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "loading";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<StoreProductsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly product?: _medusajs_medusa_dist_types_pricing.PricedProduct | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
};

declare const regionsKey: TQueryKey<"regions", any, string>;
type RegionQueryType = typeof regionsKey;
/**
 * This hook retrieves a list of regions. This hook is useful to show the customer all available regions to choose from.
 *
 * @example
 * import React from "react"
 * import { useRegions } from "medusa-react"
 *
 * const Regions = () => {
 *   const { regions, isLoading } = useRegions()
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {regions?.length && (
 *         <ul>
 *           {regions.map((region) => (
 *             <li key={region.id}>
 *               {region.name}
 *             </li>
 *           ))}
 *         </ul>
 *       )}
 *     </div>
 *   )
 * }
 *
 * export default Regions
 *
 * @customNamespace Hooks.Store.Regions
 * @category Queries
 */
declare const useRegions: (options?: UseQueryOptionsWrapper<Response<StoreRegionsListRes>, Error, ReturnType<RegionQueryType["lists"]>>) => {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: true;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<StoreRegionsListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly regions?: _medusajs_medusa.Region[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: true;
    readonly status: "success";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<StoreRegionsListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly regions?: _medusajs_medusa.Region[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: true;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<StoreRegionsListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly regions?: _medusajs_medusa.Region[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: true;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "loading";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<StoreRegionsListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly regions?: _medusajs_medusa.Region[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
};
/**
 * This hook retrieves a Region's details.
 *
 * @example
 * import React from "react"
 * import { useRegion } from "medusa-react"
 *
 * type Props = {
 *   regionId: string
 * }
 *
 * const Region = ({ regionId }: Props) => {
 *   const { region, isLoading } = useRegion(
 *     regionId
 *   )
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {region && <span>{region.name}</span>}
 *     </div>
 *   )
 * }
 *
 * export default Region
 *
 * @customNamespace Hooks.Store.Regions
 * @category Queries
 */
declare const useRegion: (id: string, options?: UseQueryOptionsWrapper<Response<StoreRegionsRes>, Error, ReturnType<RegionQueryType["detail"]>>) => {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: true;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<StoreRegionsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly region?: _medusajs_medusa.Region | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: true;
    readonly status: "success";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<StoreRegionsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly region?: _medusajs_medusa.Region | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: true;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<StoreRegionsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly region?: _medusajs_medusa.Region | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: true;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "loading";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<StoreRegionsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly region?: _medusajs_medusa.Region | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
};

declare const returnReasonsKey: TQueryKey<"return_reasons", any, string>;
type ReturnReasonsQueryKey = typeof returnReasonsKey;
/**
 * This hook retrieves a list of Return Reasons. This is useful when implementing a Create Return flow in the storefront.
 *
 * @example
 * import React from "react"
 * import { useReturnReasons } from "medusa-react"
 *
 * const ReturnReasons = () => {
 *   const {
 *     return_reasons,
 *     isLoading
 *   } = useReturnReasons()
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {return_reasons?.length && (
 *         <ul>
 *           {return_reasons.map((returnReason) => (
 *             <li key={returnReason.id}>
 *               {returnReason.label}
 *             </li>
 *           ))}
 *         </ul>
 *       )}
 *     </div>
 *   )
 * }
 *
 * export default ReturnReasons
 *
 * @customNamespace Hooks.Store.Return Reasons
 * @category Queries
 */
declare const useReturnReasons: (options?: UseQueryOptionsWrapper<Response<StoreReturnReasonsListRes>, Error, ReturnType<ReturnReasonsQueryKey["lists"]>>) => {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: true;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<StoreReturnReasonsListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly return_reasons?: _medusajs_medusa.ReturnReason[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: true;
    readonly status: "success";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<StoreReturnReasonsListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly return_reasons?: _medusajs_medusa.ReturnReason[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: true;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<StoreReturnReasonsListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly return_reasons?: _medusajs_medusa.ReturnReason[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: true;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "loading";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<StoreReturnReasonsListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly return_reasons?: _medusajs_medusa.ReturnReason[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
};
/**
 * This hook retrieves a Return Reason's details.
 *
 * @example
 * import React from "react"
 * import { useReturnReason } from "medusa-react"
 *
 * type Props = {
 *   returnReasonId: string
 * }
 *
 * const ReturnReason = ({ returnReasonId }: Props) => {
 *   const {
 *     return_reason,
 *     isLoading
 *   } = useReturnReason(
 *     returnReasonId
 *   )
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {return_reason && <span>{return_reason.label}</span>}
 *     </div>
 *   )
 * }
 *
 * export default ReturnReason
 *
 * @customNamespace Hooks.Store.Return Reasons
 * @category Queries
 */
declare const useReturnReason: (id: string, options?: UseQueryOptionsWrapper<Response<StoreReturnReasonsRes>, Error, ReturnType<ReturnReasonsQueryKey["detail"]>>) => {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: true;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<StoreReturnReasonsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly return_reason?: _medusajs_medusa.ReturnReason | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: true;
    readonly status: "success";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<StoreReturnReasonsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly return_reason?: _medusajs_medusa.ReturnReason | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: true;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<StoreReturnReasonsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly return_reason?: _medusajs_medusa.ReturnReason | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: true;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "loading";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<StoreReturnReasonsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly return_reason?: _medusajs_medusa.ReturnReason | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
};

/**
 * This hook creates a return for an order. If a return shipping method is specified, the return is automatically fulfilled.
 *
 * @example
 * import React from "react"
 * import { useCreateReturn } from "medusa-react"
 *
 * type CreateReturnData = {
 *   items: {
 *     item_id: string,
 *     quantity: number
 *   }[]
 *   return_shipping: {
 *     option_id: string
 *   }
 * }
 *
 * type Props = {
 *   orderId: string
 * }
 *
 * const CreateReturn = ({ orderId }: Props) => {
 *   const createReturn = useCreateReturn()
 *   // ...
 *
 *   const handleCreate = (data: CreateReturnData) => {
 *     createReturn.mutate({
 *       ...data,
 *       order_id: orderId
 *     }, {
 *       onSuccess: ({ return: returnData }) => {
 *         console.log(returnData.id)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default CreateReturn
 *
 * @customNamespace Hooks.Store.Returns
 * @category Mutations
 */
declare const useCreateReturn: (options?: UseMutationOptions<StoreReturnsRes, Error, StorePostReturnsReq>) => _tanstack_react_query.UseMutationResult<exposed_medusa_js.Response<StoreReturnsRes>, Error, StorePostReturnsReq, unknown>;

declare const shippingOptionKey: {
    cart: (cartId: string) => readonly ["shipping_options", "cart", string];
    all: ["shipping_options"];
    lists: () => ["shipping_options", "list"];
    list: (query?: any) => ["shipping_options", "list", {
        query: any;
    }];
    details: () => ["shipping_options", "detail"];
    detail: (id: string) => ["shipping_options", "detail", string];
};
type ShippingOptionQueryKey = typeof shippingOptionKey;
/**
 * This hook retrieves a list of shipping options. The shipping options can be filtered using the `query` parameter.
 *
 * @example
 * import React from "react"
 * import { useShippingOptions } from "medusa-react"
 *
 * const ShippingOptions = () => {
 *   const {
 *     shipping_options,
 *     isLoading,
 *   } = useShippingOptions()
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {shipping_options?.length &&
 *         shipping_options?.length > 0 && (
 *         <ul>
 *           {shipping_options?.map((shipping_option) => (
 *             <li key={shipping_option.id}>
 *               {shipping_option.id}
 *             </li>
 *           ))}
 *         </ul>
 *       )}
 *     </div>
 *   )
 * }
 *
 * export default ShippingOptions
 *
 * @customNamespace Hooks.Store.Shipping Options
 * @category Queries
 */
declare const useShippingOptions: (query?: StoreGetShippingOptionsParams, options?: UseQueryOptionsWrapper<Response<StoreShippingOptionsListRes>, Error, ReturnType<ShippingOptionQueryKey["list"]>>) => {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: true;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<StoreShippingOptionsListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly shipping_options?: _medusajs_medusa_dist_types_pricing.PricedShippingOption[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: true;
    readonly status: "success";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<StoreShippingOptionsListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly shipping_options?: _medusajs_medusa_dist_types_pricing.PricedShippingOption[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: true;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<StoreShippingOptionsListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly shipping_options?: _medusajs_medusa_dist_types_pricing.PricedShippingOption[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: true;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "loading";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<StoreShippingOptionsListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly shipping_options?: _medusajs_medusa_dist_types_pricing.PricedShippingOption[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
};
/**
 * This hook retrieves a list of shipping options available for a cart.
 *
 * @example
 * import React from "react"
 * import { useCartShippingOptions } from "medusa-react"
 *
 * type Props = {
 *   cartId: string
 * }
 *
 * const ShippingOptions = ({ cartId }: Props) => {
 *   const { shipping_options, isLoading } =
 *     useCartShippingOptions(cartId)
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {shipping_options && !shipping_options.length && (
 *         <span>No shipping options</span>
 *       )}
 *       {shipping_options && (
 *         <ul>
 *           {shipping_options.map(
 *             (shipping_option) => (
 *               <li key={shipping_option.id}>
 *                 {shipping_option.name}
 *               </li>
 *             )
 *           )}
 *         </ul>
 *       )}
 *     </div>
 *   )
 * }
 *
 * export default ShippingOptions
 *
 * @customNamespace Hooks.Store.Shipping Options
 * @category Queries
 */
declare const useCartShippingOptions: (cartId: string, options?: UseQueryOptionsWrapper<Response<StoreShippingOptionsListRes>, Error, ReturnType<ShippingOptionQueryKey["cart"]>>) => {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: true;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<StoreShippingOptionsListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly shipping_options?: _medusajs_medusa_dist_types_pricing.PricedShippingOption[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: true;
    readonly status: "success";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<StoreShippingOptionsListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly shipping_options?: _medusajs_medusa_dist_types_pricing.PricedShippingOption[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: true;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<StoreShippingOptionsListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly shipping_options?: _medusajs_medusa_dist_types_pricing.PricedShippingOption[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: true;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "loading";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<StoreShippingOptionsListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly shipping_options?: _medusajs_medusa_dist_types_pricing.PricedShippingOption[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
};

declare const swapKey: {
    cart: (cartId: string) => readonly ["swaps", "cart", string];
    all: ["swaps"];
    lists: () => ["swaps", "list"];
    list: (query?: any) => ["swaps", "list", {
        query: any;
    }];
    details: () => ["swaps", "detail"];
    detail: (id: string) => ["swaps", "detail", string];
};
type SwapQueryKey = typeof swapKey;
/**
 * This hook retrieves a Swap's details by the ID of its cart.
 *
 * @example
 * import React from "react"
 * import { useCartSwap } from "medusa-react"
 *
 * type Props = {
 *   cartId: string
 * }
 *
 * const Swap = ({ cartId }: Props) => {
 *   const {
 *     swap,
 *     isLoading,
 *   } = useCartSwap(cartId)
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {swap && <span>{swap.id}</span>}
 *
 *     </div>
 *   )
 * }
 *
 * export default Swap
 *
 * @customNamespace Hooks.Store.Swaps
 * @category Queries
 */
declare const useCartSwap: (cartId: string, options?: UseQueryOptionsWrapper<Response<StoreSwapsRes>, Error, ReturnType<SwapQueryKey["cart"]>>) => {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: true;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<StoreSwapsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly swap?: _medusajs_medusa.Swap | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: true;
    readonly status: "success";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<StoreSwapsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly swap?: _medusajs_medusa.Swap | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: true;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<StoreSwapsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly swap?: _medusajs_medusa.Swap | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: true;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "loading";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<StoreSwapsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly swap?: _medusajs_medusa.Swap | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
};

/**
 * This hook creates a Swap for an Order. This will also create a return and associate it with the swap. If a return shipping option is specified, the return will automatically be fulfilled.
 * To complete the swap, you must use the {@link Hooks.Store.Carts.useCompleteCart | useCompleteCart} hook passing it the ID of the swap's cart.
 *
 * An idempotency key will be generated if none is provided in the header `Idempotency-Key` and added to
 * the response. If an error occurs during swap creation or the request is interrupted for any reason, the swap creation can be retried by passing the idempotency
 * key in the `Idempotency-Key` header.
 *
 * @example
 * import React from "react"
 * import { useCreateSwap } from "medusa-react"
 *
 * type Props = {
 *   orderId: string
 * }
 *
 * type CreateData = {
 *   return_items: {
 *     item_id: string
 *     quantity: number
 *   }[]
 *   additional_items: {
 *     variant_id: string
 *     quantity: number
 *   }[]
 *   return_shipping_option: string
 * }
 *
 * const CreateSwap = ({
 *   orderId
 * }: Props) => {
 *   const createSwap = useCreateSwap()
 *   // ...
 *
 *   const handleCreate = (
 *     data: CreateData
 *   ) => {
 *     createSwap.mutate({
 *       ...data,
 *       order_id: orderId
 *     }, {
 *       onSuccess: ({ swap }) => {
 *         console.log(swap.id)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default CreateSwap
 *
 * @customNamespace Hooks.Store.Swaps
 * @category Mutations
 */
declare const useCreateSwap: (options?: UseMutationOptions<StoreSwapsRes, Error, StorePostSwapsReq>) => _tanstack_react_query.UseMutationResult<exposed_medusa_js.Response<StoreSwapsRes>, Error, StorePostSwapsReq, unknown>;

/**
 * @packageDocumentation
 *
 * @customNamespace Providers.Cart
 */

interface CartState {
    /**
     * The currently-used cart.
     */
    cart?: Cart;
}
/**
 * The cart context available if the {@link CartProvider} is used previously in the React components tree.
 */
interface CartContext extends CartState {
    /**
     * A state function used to set the cart object.
     *
     * @param {Cart} cart - The new value of the cart.
     */
    setCart: (cart: Cart) => void;
    /**
     * A mutation used to select a payment processor during checkout.
     * Using it is equivalent to using the {@link useSetPaymentSession} mutation.
     */
    pay: ReturnType<typeof useSetPaymentSession>;
    /**
     * A mutation used to create a cart.
     * Using it is equivalent to using the {@link useCreateCart} mutation.
     */
    createCart: ReturnType<typeof useCreateCart>;
    /**
     * A mutation used to initialize payment sessions during checkout.
     * Using it is equivalent to using the {@link useCreatePaymentSession} mutation.
     */
    startCheckout: ReturnType<typeof useCreatePaymentSession>;
    /**
     * A mutation used to complete the cart and place the order.
     * Using it is equivalent to using the {@link useCompleteCart} mutation.
     */
    completeCheckout: ReturnType<typeof useCompleteCart>;
    /**
     * A mutation used to update a cart’s details such as region, customer email, shipping address, and more.
     * Using it is equivalent to using the {@link useUpdateCart} mutation.
     */
    updateCart: ReturnType<typeof useUpdateCart>;
    /**
     * A mutation used to add a shipping method to the cart during checkout.
     * Using it is equivalent to using the {@link useAddShippingMethodToCart} mutation.
     */
    addShippingMethod: ReturnType<typeof useAddShippingMethodToCart>;
    /**
     * The number of items in the cart.
     */
    totalItems: number;
}
/**
 * This hook exposes the context of {@link CartProvider}.
 *
 * The context provides helper functions and mutations for managing the cart and checkout. You can refer to the following guides for examples on how to use them:
 *
 * - [How to Add Cart Functionality](https://docs.medusajs.com/modules/carts-and-checkout/storefront/implement-cart)
 * - [How to Implement Checkout Flow](https://docs.medusajs.com/modules/carts-and-checkout/storefront/implement-checkout-flow)
 *
 * @example
 * ```tsx title="src/Cart.ts"
 * import * as React from "react"
 *
 * import { useCart } from "medusa-react"
 *
 * const Cart = () => {
 *   const handleClick = () => {
 *     createCart.mutate({}) // create an empty cart
 *   }
 *
 *   const { cart, createCart } = useCart()
 *
 *   return (
 *     <div>
 *       {createCart.isLoading && <div>Loading...</div>}
 *       {!cart?.id && (
 *         <button onClick={handleClick}>
 *           Create cart
 *         </button>
 *       )}
 *       {cart?.id && (
 *         <div>Cart ID: {cart.id}</div>
 *       )}
 *     </div>
 *   )
 * }
 *
 * export default Cart
 * ```
 *
 * In the example above, you retrieve the `createCart` mutation and `cart` state object using the `useCart` hook.
 * If the `cart` is not set, a button is shown. When the button is clicked, the `createCart` mutation is executed, which interacts with the backend and creates a new cart.
 *
 * After the cart is created, the `cart` state variable is set and its ID is shown instead of the button.
 *
 * :::note
 *
 * The example above does not store in the browser the ID of the cart created, so the cart’s data will be gone on refresh.
 * You would have to do that using the browser’s [Local Storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage).
 *
 * :::
 *
 * @customNamespace Providers.Cart
 */
declare const useCart: () => CartContext;
interface CartProps {
    /**
     * @ignore
     */
    children: React.ReactNode;
    /**
     * An optional initial value to be used for the cart.
     */
    initialState?: Cart;
}
/**
 * `CartProvider` makes use of some of the hooks already exposed by `medusa-react` to perform cart operations on the Medusa backend.
 * You can use it to create a cart, start the checkout flow, authorize payment sessions, and so on.
 *
 * It also manages one single global piece of state which represents a cart, exactly like the one created on your Medusa backend.
 *
 * To use `CartProvider`, you first have to insert it somewhere in your component tree below the {@link Providers.Medusa.MedusaProvider | MedusaProvider}. Then, in any of the child components,
 * you can use the {@link useCart} hook exposed by `medusa-react` to get access to cart operations and data.
 *
 * @param {CartProps} param0 - Props of the provider.
 *
 * @example
 * ```tsx title="src/App.ts"
 * import { CartProvider, MedusaProvider } from "medusa-react"
 * import Storefront from "./Storefront"
 * import { QueryClient } from "@tanstack/react-query"
 * import React from "react"
 *
 * const queryClient = new QueryClient()
 *
 * function App() {
 *   return (
 *     <MedusaProvider
 *       queryClientProviderProps={{ client: queryClient }}
 *       baseUrl="http://localhost:9000"
 *     >
 *       <CartProvider>
 *         <Storefront />
 *       </CartProvider>
 *     </MedusaProvider>
 *   )
 * }
 *
 * export default App
 * ```
 *
 * @customNamespace Providers.Cart
 */
declare const CartProvider: ({ children, initialState, }: CartProps) => React.JSX.Element;

declare const adminAuthKeys: TQueryKey<"admin_auth", any, string>;
type AuthQueryKey = typeof adminAuthKeys;
/**
 * This hook is used to get the currently logged in user's details. Can also be used to check if there is an authenticated user.
 *
 * This hook requires {@link Hooks~Admin~Auth~useAdminLogin | user authentication}.
 *
 * @example
 * import React from "react"
 * import { useAdminGetSession } from "medusa-react"
 *
 * const Profile = () => {
 *   const { user, isLoading } = useAdminGetSession()
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {user && <span>{user.email}</span>}
 *     </div>
 *   )
 * }
 *
 * export default Profile
 *
 * @customNamespace Hooks.Admin.Auth
 * @category Queries
 */
declare const useAdminGetSession: (options?: UseQueryOptionsWrapper<Response<AdminAuthRes>, Error, ReturnType<AuthQueryKey["details"]>>) => {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: true;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminAuthRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly user?: Omit<_medusajs_medusa.User, "password_hash"> | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: true;
    readonly status: "success";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminAuthRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly user?: Omit<_medusajs_medusa.User, "password_hash"> | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: true;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminAuthRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly user?: Omit<_medusajs_medusa.User, "password_hash"> | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: true;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "loading";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminAuthRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly user?: Omit<_medusajs_medusa.User, "password_hash"> | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
};

/**
 * This hook is used to log a User in using their credentials. If the user is authenticated successfully,
 * the cookie is automatically attached to subsequent requests sent with other hooks.
 *
 * @example
 * import React from "react"
 * import { useAdminLogin } from "medusa-react"
 *
 * const Login = () => {
 *   const adminLogin = useAdminLogin()
 *   // ...
 *
 *   const handleLogin = () => {
 *     adminLogin.mutate({
 *       email: "user@example.com",
 *       password: "supersecret",
 *     }, {
 *       onSuccess: ({ user }) => {
 *         console.log(user)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default Login
 *
 * @customNamespace Hooks.Admin.Auth
 * @category Mutations
 */
declare const useAdminLogin: (options?: UseMutationOptions<Response<AdminAuthRes>, Error, AdminPostAuthReq>) => _tanstack_react_query.UseMutationResult<Response<AdminAuthRes>, Error, AdminPostAuthReq, unknown>;
/**
 * This hook is used to Log out the user and remove their authentication session. This will only work if you're using Cookie session for authentication. If the API token is still passed in the header,
 * the user is still authorized to perform admin functionalities in other API Routes.
 *
 * This hook requires {@link Hooks.Admin.Auth.useAdminLogin | user authentication}.
 *
 * @example
 * import React from "react"
 * import { useAdminDeleteSession } from "medusa-react"
 *
 * const Logout = () => {
 *   const adminLogout = useAdminDeleteSession()
 *   // ...
 *
 *   const handleLogout = () => {
 *     adminLogout.mutate(undefined, {
 *       onSuccess: () => {
 *         // user logged out.
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default Logout
 *
 * @customNamespace Hooks.Admin.Auth
 * @category Mutations
 */
declare const useAdminDeleteSession: (options?: UseMutationOptions<Response<void>, Error, void>) => _tanstack_react_query.UseMutationResult<Response<void>, Error, void, unknown>;

declare const adminBatchJobsKeys: TQueryKey<"admin_batches", any, string>;
type BatchJobsQueryKey = typeof adminBatchJobsKeys;
/**
 * This hook retrieves a list of Batch Jobs. The batch jobs can be filtered by fields such as `type` or `confirmed_at`. The batch jobs can also be sorted or paginated.
 *
 * @example
 * To list batch jobs:
 *
 * ```ts
 * import React from "react"
 * import { useAdminBatchJobs } from "medusa-react"
 *
 * const BatchJobs = () => {
 *   const {
 *     batch_jobs,
 *     limit,
 *     offset,
 *     count,
 *     isLoading
 *   } = useAdminBatchJobs()
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {batch_jobs?.length && (
 *         <ul>
 *           {batch_jobs.map((batchJob) => (
 *             <li key={batchJob.id}>
 *               {batchJob.id}
 *             </li>
 *           ))}
 *         </ul>
 *       )}
 *     </div>
 *   )
 * }
 *
 * export default BatchJobs
 * ```
 *
 * To specify relations that should be retrieved within the batch jobs:
 *
 * ```ts
 * import React from "react"
 * import { useAdminBatchJobs } from "medusa-react"
 *
 * const BatchJobs = () => {
 *   const {
 *     batch_jobs,
 *     limit,
 *     offset,
 *     count,
 *     isLoading
 *   } = useAdminBatchJobs({
 *     expand: "created_by_user",
 *     limit: 10,
 *     offset: 0
 *   })
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {batch_jobs?.length && (
 *         <ul>
 *           {batch_jobs.map((batchJob) => (
 *             <li key={batchJob.id}>
 *               {batchJob.id}
 *             </li>
 *           ))}
 *         </ul>
 *       )}
 *     </div>
 *   )
 * }
 *
 * export default BatchJobs
 * ```
 *
 * By default, only the first `10` records are retrieved. You can control pagination by specifying the `limit` and `offset` properties:
 *
 * ```ts
 * import React from "react"
 * import { useAdminBatchJobs } from "medusa-react"
 *
 * const BatchJobs = () => {
 *   const {
 *     batch_jobs,
 *     limit,
 *     offset,
 *     count,
 *     isLoading
 *   } = useAdminBatchJobs({
 *     expand: "created_by_user",
 *     limit: 20,
 *     offset: 0
 *   })
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {batch_jobs?.length && (
 *         <ul>
 *           {batch_jobs.map((batchJob) => (
 *             <li key={batchJob.id}>
 *               {batchJob.id}
 *             </li>
 *           ))}
 *         </ul>
 *       )}
 *     </div>
 *   )
 * }
 *
 * export default BatchJobs
 * ```
 *
 * @customNamespace Hooks.Admin.Batch Jobs
 * @category Queries
 */
declare const useAdminBatchJobs: (query?: AdminGetBatchParams, options?: UseQueryOptionsWrapper<Response<AdminBatchJobListRes>, Error, ReturnType<BatchJobsQueryKey["list"]>>) => {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: true;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminBatchJobListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly batch_jobs?: _medusajs_medusa.BatchJob[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: true;
    readonly status: "success";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminBatchJobListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly batch_jobs?: _medusajs_medusa.BatchJob[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: true;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminBatchJobListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly batch_jobs?: _medusajs_medusa.BatchJob[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: true;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "loading";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminBatchJobListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly batch_jobs?: _medusajs_medusa.BatchJob[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
};
/**
 * This hook retrieves the details of a batch job.
 *
 * @example
 * import React from "react"
 * import { useAdminBatchJob } from "medusa-react"
 *
 * type Props = {
 *   batchJobId: string
 * }
 *
 * const BatchJob = ({ batchJobId }: Props) => {
 *   const { batch_job, isLoading } = useAdminBatchJob(batchJobId)
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {batch_job && <span>{batch_job.created_by}</span>}
 *     </div>
 *   )
 * }
 *
 * export default BatchJob
 *
 * @customNamespace Hooks.Admin.Batch Jobs
 * @category Queries
 */
declare const useAdminBatchJob: (id: string, options?: UseQueryOptionsWrapper<Response<AdminBatchJobRes>, Error, ReturnType<BatchJobsQueryKey["detail"]>>) => {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: true;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminBatchJobRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly batch_job?: _medusajs_medusa.BatchJob | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: true;
    readonly status: "success";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminBatchJobRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly batch_job?: _medusajs_medusa.BatchJob | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: true;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminBatchJobRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly batch_job?: _medusajs_medusa.BatchJob | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: true;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "loading";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminBatchJobRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly batch_job?: _medusajs_medusa.BatchJob | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
};

/**
 * This hook creates a Batch Job to be executed asynchronously in the Medusa backend. If `dry_run` is set to `true`, the batch job will not be executed until the it is confirmed,
 * which can be done using the {@link useAdminConfirmBatchJob} hook.
 *
 * @example
 * import React from "react"
 * import { useAdminCreateBatchJob } from "medusa-react"
 *
 * const CreateBatchJob = () => {
 *   const createBatchJob = useAdminCreateBatchJob()
 *   // ...
 *
 *   const handleCreateBatchJob = () => {
 *     createBatchJob.mutate({
 *       type: "publish-products",
 *       context: {},
 *       dry_run: true
 *     }, {
 *       onSuccess: ({ batch_job }) => {
 *         console.log(batch_job)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default CreateBatchJob
 *
 * @customNamespace Hooks.Admin.Batch Jobs
 * @category Mutations
 */
declare const useAdminCreateBatchJob: (options?: UseMutationOptions<Response<AdminBatchJobRes>, Error, AdminPostBatchesReq>) => _tanstack_react_query.UseMutationResult<Response<AdminBatchJobRes>, Error, AdminPostBatchesReq, unknown>;
/**
 * This hook marks a batch job as canceled. When a batch job is canceled, the processing of the batch job doesn’t automatically stop.
 *
 * @example
 * import React from "react"
 * import { useAdminCancelBatchJob } from "medusa-react"
 *
 * type Props = {
 *   batchJobId: string
 * }
 *
 * const BatchJob = ({ batchJobId }: Props) => {
 *   const cancelBatchJob = useAdminCancelBatchJob(batchJobId)
 *   // ...
 *
 *   const handleCancel = () => {
 *     cancelBatchJob.mutate(undefined, {
 *       onSuccess: ({ batch_job }) => {
 *         console.log(batch_job)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default BatchJob
 *
 * @customNamespace Hooks.Admin.Batch Jobs
 * @category Mutations
 */
declare const useAdminCancelBatchJob: (id: string, options?: UseMutationOptions<Response<AdminBatchJobRes>, Error>) => _tanstack_react_query.UseMutationResult<Response<AdminBatchJobRes>, Error, void, unknown>;
/**
 * When a batch job is created, it's not executed automatically if `dry_run` is set to `true`. This hook confirms that the batch job should be executed.
 *
 * @example
 * import React from "react"
 * import { useAdminConfirmBatchJob } from "medusa-react"
 *
 * type Props = {
 *   batchJobId: string
 * }
 *
 * const BatchJob = ({ batchJobId }: Props) => {
 *   const confirmBatchJob = useAdminConfirmBatchJob(batchJobId)
 *   // ...
 *
 *   const handleConfirm = () => {
 *     confirmBatchJob.mutate(undefined, {
 *       onSuccess: ({ batch_job }) => {
 *         console.log(batch_job)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default BatchJob
 */
declare const useAdminConfirmBatchJob: (id: string, options?: UseMutationOptions<Response<AdminBatchJobRes>, Error>) => _tanstack_react_query.UseMutationResult<Response<AdminBatchJobRes>, Error, void, unknown>;

/**
 * This hook creates a claim for an order. If a return shipping method is specified, a return will also be created and associated with the claim. If the claim's type is `refund`,
 * the refund is processed as well.
 *
 * @example
 * import React from "react"
 * import { useAdminCreateClaim } from "medusa-react"
 *
 * type Props = {
 *   orderId: string
 * }
 *
 * const CreateClaim = ({ orderId }: Props) => {
 *   const createClaim = useAdminCreateClaim(orderId)
 *   // ...
 *
 *   const handleCreate = (itemId: string) => {
 *     createClaim.mutate({
 *       type: "refund",
 *       claim_items: [
 *         {
 *           item_id: itemId,
 *           quantity: 1,
 *         },
 *       ],
 *     }, {
 *       onSuccess: ({ order }) => {
 *         console.log(order.claims)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default CreateClaim
 *
 * @customNamespace Hooks.Admin.Claims
 * @category Mutations
 */
declare const useAdminCreateClaim: (orderId: string, options?: UseMutationOptions<Response<AdminOrdersRes>, Error, AdminPostOrdersOrderClaimsReq>) => _tanstack_react_query.UseMutationResult<Response<AdminOrdersRes>, Error, AdminPostOrdersOrderClaimsReq, unknown>;
type AdminUpdateClaimReq = AdminPostOrdersOrderClaimsClaimReq & {
    /**
     * The claim's ID.
     */
    claim_id: string;
};
/**
 * This hook updates a claim's details.
 *
 * @example
 * import React from "react"
 * import { useAdminUpdateClaim } from "medusa-react"
 *
 * type Props = {
 *   orderId: string
 *   claimId: string
 * }
 *
 * const Claim = ({ orderId, claimId }: Props) => {
 *   const updateClaim = useAdminUpdateClaim(orderId)
 *   // ...
 *
 *   const handleUpdate = () => {
 *     updateClaim.mutate({
 *       claim_id: claimId,
 *       no_notification: false
 *     }, {
 *       onSuccess: ({ order }) => {
 *         console.log(order.claims)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default Claim
 *
 * @customNamespace Hooks.Admin.Claims
 * @category Mutations
 */
declare const useAdminUpdateClaim: (orderId: string, options?: UseMutationOptions<Response<AdminOrdersRes>, Error, AdminUpdateClaimReq>) => _tanstack_react_query.UseMutationResult<Response<AdminOrdersRes>, Error, AdminUpdateClaimReq, unknown>;
/**
 * This hook cancels a claim and change its status. A claim can't be canceled if it has a refund, if its fulfillments haven't been canceled,
 * of if its associated return hasn't been canceled.
 *
 * @typeParamDefinition string - The claim's ID.
 *
 * @example
 * import React from "react"
 * import { useAdminCancelClaim } from "medusa-react"
 *
 * type Props = {
 *   orderId: string
 *   claimId: string
 * }
 *
 * const Claim = ({ orderId, claimId }: Props) => {
 *   const cancelClaim = useAdminCancelClaim(orderId)
 *   // ...
 *
 *   const handleCancel = () => {
 *     cancelClaim.mutate(claimId)
 *   }
 *
 *   // ...
 * }
 *
 * export default Claim
 *
 * @customNamespace Hooks.Admin.Claims
 * @category Mutations
 */
declare const useAdminCancelClaim: (orderId: string, options?: UseMutationOptions<Response<AdminOrdersRes>, Error, string>) => _tanstack_react_query.UseMutationResult<Response<AdminOrdersRes>, Error, string, unknown>;
/**
 * The details of the claim's fulfillment.
 */
type AdminFulfillClaimReq = AdminPostOrdersOrderClaimsClaimFulfillmentsReq & {
    /**
     * The claim's ID.
     */
    claim_id: string;
};
/**
 * This hook creates a Fulfillment for a Claim, and change its fulfillment status to `partially_fulfilled` or `fulfilled` depending on whether all the items were fulfilled.
 * It may also change the status to `requires_action` if any actions are required.
 *
 * @example
 * import React from "react"
 * import { useAdminFulfillClaim } from "medusa-react"
 *
 * type Props = {
 *   orderId: string
 *   claimId: string
 * }
 *
 * const Claim = ({ orderId, claimId }: Props) => {
 *   const fulfillClaim = useAdminFulfillClaim(orderId)
 *   // ...
 *
 *   const handleFulfill = () => {
 *     fulfillClaim.mutate({
 *       claim_id: claimId,
 *     }, {
 *       onSuccess: ({ order }) => {
 *         console.log(order.claims)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default Claim
 *
 * @customNamespace Hooks.Admin.Claims
 * @category Mutations
 */
declare const useAdminFulfillClaim: (orderId: string, options?: UseMutationOptions<Response<AdminOrdersRes>, Error, AdminFulfillClaimReq>) => _tanstack_react_query.UseMutationResult<Response<AdminOrdersRes>, Error, AdminFulfillClaimReq, unknown>;
/**
 * The cancelation details.
 */
type AdminCancelClaimFulfillmentReq = {
    /**
     * The claim's ID.
     */
    claim_id: string;
    /**
     * The fulfillment's ID.
     */
    fulfillment_id: string;
};
/**
 * This hook cancels a claim's fulfillment and change its fulfillment status to `canceled`.
 *
 * @example
 * import React from "react"
 * import { useAdminCancelClaimFulfillment } from "medusa-react"
 *
 * type Props = {
 *   orderId: string
 *   claimId: string
 * }
 *
 * const Claim = ({ orderId, claimId }: Props) => {
 *   const cancelFulfillment = useAdminCancelClaimFulfillment(
 *     orderId
 *   )
 *   // ...
 *
 *   const handleCancel = (fulfillmentId: string) => {
 *     cancelFulfillment.mutate({
 *       claim_id: claimId,
 *       fulfillment_id: fulfillmentId,
 *     }, {
 *       onSuccess: ({ order }) => {
 *         console.log(order.claims)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default Claim
 *
 * @customNamespace Hooks.Admin.Claims
 * @category Mutations
 */
declare const useAdminCancelClaimFulfillment: (orderId: string, options?: UseMutationOptions<Response<AdminOrdersRes>, Error, AdminCancelClaimFulfillmentReq>) => _tanstack_react_query.UseMutationResult<Response<AdminOrdersRes>, Error, AdminCancelClaimFulfillmentReq, unknown>;
/**
 * This hook creates a shipment for the claim and mark its fulfillment as shipped. If the shipment is created successfully, this changes the claim's fulfillment status
 * to either `partially_shipped` or `shipped`, depending on whether all the items were shipped.
 *
 * @example
 * import React from "react"
 * import { useAdminCreateClaimShipment } from "medusa-react"
 *
 * type Props = {
 *   orderId: string
 *   claimId: string
 * }
 *
 * const Claim = ({ orderId, claimId }: Props) => {
 *   const createShipment = useAdminCreateClaimShipment(orderId)
 *   // ...
 *
 *   const handleCreateShipment = (fulfillmentId: string) => {
 *     createShipment.mutate({
 *       claim_id: claimId,
 *       fulfillment_id: fulfillmentId,
 *     }, {
 *       onSuccess: ({ order }) => {
 *         console.log(order.claims)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default Claim
 *
 * @customNamespace Hooks.Admin.Claims
 * @category Mutations
 */
declare const useAdminCreateClaimShipment: (orderId: string, options?: UseMutationOptions<Response<AdminOrdersRes>, Error, AdminPostOrdersOrderClaimsClaimShipmentsReq & {
    /**
     * The claim's ID.
     */
    claim_id: string;
}>) => _tanstack_react_query.UseMutationResult<Response<AdminOrdersRes>, Error, AdminPostOrdersOrderClaimsClaimShipmentsReq & {
    /**
     * The claim's ID.
     */
    claim_id: string;
}, unknown>;

declare const adminCollectionKeys: TQueryKey<"admin_collections", any, string>;
type CollectionsQueryKey = typeof adminCollectionKeys;
/**
 * This hook retrieves a list of product collections. The product collections can be filtered by fields such as `handle` or `title`.
 * The collections can also be sorted or paginated.
 *
 * @example
 * To list product collections:
 *
 * ```tsx
 * import React from "react"
 * import { useAdminCollections } from "medusa-react"
 *
 * const Collections = () => {
 *   const { collections, isLoading } = useAdminCollections()
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {collections && !collections.length && <span>
 *         No Product Collections
 *       </span>}
 *       {collections && collections.length > 0 && (
 *         <ul>
 *           {collections.map((collection) => (
 *             <li key={collection.id}>{collection.title}</li>
 *           ))}
 *         </ul>
 *       )}
 *     </div>
 *   )
 * }
 *
 * export default Collections
 * ```
 *
 * By default, only the first `10` records are retrieved. You can control pagination by specifying the `limit` and `offset` properties:
 *
 * ```tsx
 * import React from "react"
 * import { useAdminCollections } from "medusa-react"
 *
 * const Collections = () => {
 *   const { collections, limit, offset, isLoading } = useAdminCollections({
 *     limit: 15,
 *     offset: 0
 *   })
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {collections && !collections.length && <span>
 *         No Product Collections
 *       </span>}
 *       {collections && collections.length > 0 && (
 *         <ul>
 *           {collections.map((collection) => (
 *             <li key={collection.id}>{collection.title}</li>
 *           ))}
 *         </ul>
 *       )}
 *     </div>
 *   )
 * }
 *
 * export default Collections
 * ```
 *
 * @customNamespace Hooks.Admin.Product Collections
 * @category Queries
 */
declare const useAdminCollections: (query?: AdminGetCollectionsParams, options?: UseQueryOptionsWrapper<Response<AdminCollectionsListRes>, Error, ReturnType<CollectionsQueryKey["list"]>>) => {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: true;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminCollectionsListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly collections?: _medusajs_medusa.ProductCollection[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: true;
    readonly status: "success";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminCollectionsListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly collections?: _medusajs_medusa.ProductCollection[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: true;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminCollectionsListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly collections?: _medusajs_medusa.ProductCollection[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: true;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "loading";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminCollectionsListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly collections?: _medusajs_medusa.ProductCollection[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
};
/**
 * This hook retrieves a product collection by its ID. The products associated with it are expanded and returned as well.
 *
 * @example
 * import React from "react"
 * import { useAdminCollection } from "medusa-react"
 *
 * type Props = {
 *   collectionId: string
 * }
 *
 * const Collection = ({ collectionId }: Props) => {
 *   const { collection, isLoading } = useAdminCollection(collectionId)
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {collection && <span>{collection.title}</span>}
 *     </div>
 *   )
 * }
 *
 * export default Collection
 *
 * @customNamespace Hooks.Admin.Product Collections
 * @category Queries
 */
declare const useAdminCollection: (id: string, options?: UseQueryOptionsWrapper<Response<AdminCollectionsRes>, Error, ReturnType<CollectionsQueryKey["detail"]>>) => {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: true;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminCollectionsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly collection?: _medusajs_medusa.ProductCollection | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: true;
    readonly status: "success";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminCollectionsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly collection?: _medusajs_medusa.ProductCollection | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: true;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminCollectionsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly collection?: _medusajs_medusa.ProductCollection | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: true;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "loading";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminCollectionsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly collection?: _medusajs_medusa.ProductCollection | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
};

/**
 * This hook creates a product collection.
 *
 * @example
 * import React from "react"
 * import { useAdminCreateCollection } from "medusa-react"
 *
 * const CreateCollection = () => {
 *   const createCollection = useAdminCreateCollection()
 *   // ...
 *
 *   const handleCreate = (title: string) => {
 *     createCollection.mutate({
 *       title
 *     }, {
 *       onSuccess: ({ collection }) => {
 *         console.log(collection.id)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default CreateCollection
 *
 * @customNamespace Hooks.Admin.Product Collections
 * @category Mutations
 */
declare const useAdminCreateCollection: (options?: UseMutationOptions<Response<AdminCollectionsRes>, Error, AdminPostCollectionsReq>) => _tanstack_react_query.UseMutationResult<Response<AdminCollectionsRes>, Error, AdminPostCollectionsReq, unknown>;
/**
 * This hook updates a product collection's details.
 *
 * @example
 * import React from "react"
 * import { useAdminUpdateCollection } from "medusa-react"
 *
 * type Props = {
 *   collectionId: string
 * }
 *
 * const Collection = ({ collectionId }: Props) => {
 *   const updateCollection = useAdminUpdateCollection(collectionId)
 *   // ...
 *
 *   const handleUpdate = (title: string) => {
 *     updateCollection.mutate({
 *       title
 *     }, {
 *       onSuccess: ({ collection }) => {
 *         console.log(collection.id)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default Collection
 *
 * @customNamespace Hooks.Admin.Product Collections
 * @category Mutations
 */
declare const useAdminUpdateCollection: (id: string, options?: UseMutationOptions<Response<AdminCollectionsRes>, Error, AdminPostCollectionsCollectionReq>) => _tanstack_react_query.UseMutationResult<Response<AdminCollectionsRes>, Error, AdminPostCollectionsCollectionReq, unknown>;
/**
 * This hook deletes a product collection. This does not delete associated products.
 *
 * @example
 * import React from "react"
 * import { useAdminDeleteCollection } from "medusa-react"
 *
 * type Props = {
 *   collectionId: string
 * }
 *
 * const Collection = ({ collectionId }: Props) => {
 *   const deleteCollection = useAdminDeleteCollection(collectionId)
 *   // ...
 *
 *   const handleDelete = (title: string) => {
 *     deleteCollection.mutate(void 0, {
 *       onSuccess: ({ id, object, deleted }) => {
 *         console.log(id)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default Collection
 *
 * @customNamespace Hooks.Admin.Product Collections
 * @category Mutations
 */
declare const useAdminDeleteCollection: (id: string, options?: UseMutationOptions<Response<AdminCollectionsDeleteRes>, Error, void>) => _tanstack_react_query.UseMutationResult<Response<_medusajs_medusa.DeleteResponse>, Error, void, unknown>;
/**
 * This hook adds products to a collection.
 *
 * @example
 * import React from "react"
 * import { useAdminAddProductsToCollection } from "medusa-react"
 *
 * type Props = {
 *   collectionId: string
 * }
 *
 * const Collection = ({ collectionId }: Props) => {
 *   const addProducts = useAdminAddProductsToCollection(collectionId)
 *   // ...
 *
 *   const handleAddProducts = (productIds: string[]) => {
 *     addProducts.mutate({
 *       product_ids: productIds
 *     }, {
 *       onSuccess: ({ collection }) => {
 *         console.log(collection.products)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default Collection
 *
 * @customNamespace Hooks.Admin.Product Collections
 * @category Mutations
 */
declare const useAdminAddProductsToCollection: (id: string, options?: UseMutationOptions<Response<AdminCollectionsRes>, Error, AdminPostProductsToCollectionReq>) => _tanstack_react_query.UseMutationResult<Response<AdminCollectionsRes>, Error, AdminPostProductsToCollectionReq, unknown>;
/**
 * This hook removes a list of products from a collection. This would not delete the product,
 * only the association between the product and the collection.
 *
 * @example
 * import React from "react"
 * import { useAdminRemoveProductsFromCollection } from "medusa-react"
 *
 * type Props = {
 *   collectionId: string
 * }
 *
 * const Collection = ({ collectionId }: Props) => {
 *   const removeProducts = useAdminRemoveProductsFromCollection(collectionId)
 *   // ...
 *
 *   const handleRemoveProducts = (productIds: string[]) => {
 *     removeProducts.mutate({
 *       product_ids: productIds
 *     }, {
 *       onSuccess: ({ id, object, removed_products }) => {
 *         console.log(removed_products)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default Collection
 *
 * @customNamespace Hooks.Admin.Product Collections
 * @category Mutations
 */
declare const useAdminRemoveProductsFromCollection: (id: string, options?: UseMutationOptions<Response<AdminDeleteProductsFromCollectionRes>, Error, AdminDeleteProductsFromCollectionReq>) => _tanstack_react_query.UseMutationResult<Response<AdminDeleteProductsFromCollectionRes>, Error, AdminDeleteProductsFromCollectionReq, unknown>;

/**
 * This hook updates a currency's details.
 *
 * @example
 * import React from "react"
 * import { useAdminUpdateCurrency } from "medusa-react"
 *
 * type Props = {
 *   currencyCode: string
 * }
 *
 * const Currency = ({ currencyCode }: Props) => {
 *   const updateCurrency = useAdminUpdateCurrency(currencyCode)
 *   // ...
 *
 *   const handleUpdate = (includes_tax: boolean) => {
 *     updateCurrency.mutate({
 *       includes_tax,
 *     }, {
 *       onSuccess: ({ currency }) => {
 *         console.log(currency)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default Currency
 *
 * @customNamespace Hooks.Admin.Currencies
 * @category Mutations
 */
declare const useAdminUpdateCurrency: (code: string, options?: UseMutationOptions<Response<AdminCurrenciesRes>, Error, AdminPostCurrenciesCurrencyReq>) => _tanstack_react_query.UseMutationResult<Response<AdminCurrenciesRes>, Error, AdminPostCurrenciesCurrencyReq, unknown>;

declare const adminCurrenciesKeys: TQueryKey<"admin_currencies", any, string>;
type CurrenciesQueryKey = typeof adminCurrenciesKeys;
/**
 * This hook retrieves a list of currencies. The currencies can be filtered by fields such as `code`.
 * The currencies can also be sorted or paginated.
 *
 * @example
 * To list currencies:
 *
 * ```ts
 * import React from "react"
 * import { useAdminCurrencies } from "medusa-react"
 *
 * const Currencies = () => {
 *   const { currencies, isLoading } = useAdminCurrencies()
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {currencies && !currencies.length && (
 *         <span>No Currencies</span>
 *       )}
 *       {currencies && currencies.length > 0 && (
 *         <ul>
 *           {currencies.map((currency) => (
 *             <li key={currency.code}>{currency.name}</li>
 *           ))}
 *         </ul>
 *       )}
 *     </div>
 *   )
 * }
 *
 * export default Currencies
 * ```
 *
 * By default, only the first `20` records are retrieved. You can control pagination by specifying the `limit` and `offset` properties:
 *
 * ```ts
 * import React from "react"
 * import { useAdminCurrencies } from "medusa-react"
 *
 * const Currencies = () => {
 *   const { currencies, limit, offset, isLoading } = useAdminCurrencies({
 *     limit: 10,
 *     offset: 0
 *   })
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {currencies && !currencies.length && (
 *         <span>No Currencies</span>
 *       )}
 *       {currencies && currencies.length > 0 && (
 *         <ul>
 *           {currencies.map((currency) => (
 *             <li key={currency.code}>{currency.name}</li>
 *           ))}
 *         </ul>
 *       )}
 *     </div>
 *   )
 * }
 *
 * export default Currencies
 * ```
 *
 * @customNamespace Hooks.Admin.Currencies
 * @category Queries
 */
declare const useAdminCurrencies: (query?: AdminGetCurrenciesParams, options?: UseQueryOptionsWrapper<Response<AdminCurrenciesListRes>, Error, ReturnType<CurrenciesQueryKey["list"]>>) => {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: true;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminCurrenciesListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly currencies?: _medusajs_medusa.Currency[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: true;
    readonly status: "success";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminCurrenciesListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly currencies?: _medusajs_medusa.Currency[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: true;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminCurrenciesListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly currencies?: _medusajs_medusa.Currency[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: true;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "loading";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminCurrenciesListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly currencies?: _medusajs_medusa.Currency[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
};

type RelatedDomain = "product" | "customer" | "customer_group" | "order" | "discount" | "gift_card" | "price_list";
type RelatedDomains = {
    [key in RelatedDomain]?: boolean;
};
/**
 * This hook sends a `POST` request to a custom API Route.
 *
 * @typeParam TPayload - The type of accepted body parameters which defaults to `Record<string, any>`.
 * @typeParam TResponse - The type of response, which defaults to `any`.
 * @typeParamDefinition TResponse - The response based on the specified type for `TResponse`.
 * @typeParamDefinition TPayload - The payload based on the specified type for `TPayload`.
 *
 * @example
 * import React from "react"
 * import { useAdminCustomPost } from "medusa-react"
 * import Post from "./models/Post"
 *
 * type PostRequest = {
 *   title: string
 * }
 * type PostResponse = {
 *   post: Post
 * }
 *
 * const Custom = () => {
 *   const customPost = useAdminCustomPost
 *   <PostRequest, PostResponse>(
 *     "/blog/posts",
 *     ["posts"]
 *   )
 *
 *   // ...
 *
 *   const handleAction = (title: string) => {
 *     customPost.mutate({
 *       title
 *     }, {
 *       onSuccess: ({ post }) => {
 *         console.log(post)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default Custom
 *
 * @customNamespace Hooks.Admin.Custom
 * @category Mutations
 */
declare const useAdminCustomPost: <TPayload extends Record<string, any>, TResponse>(path: string, queryKey: QueryKey, relatedDomains?: RelatedDomains, options?: UseMutationOptions<Response<TResponse>, Error, TPayload, unknown> | undefined) => _tanstack_react_query.UseMutationResult<Response<TResponse>, Error, TPayload, unknown>;
/**
 * This hook sends a `DELETE` request to a custom API Route.
 *
 * @typeParam TResponse - The response's type which defaults to `any`.
 * @typeParamDefinition TResponse - The response based on the type provided for `TResponse`.
 *
 * @example
 * import React from "react"
 * import { useAdminCustomDelete } from "medusa-react"
 *
 * type Props = {
 *   customId: string
 * }
 *
 * const Custom = ({ customId }: Props) => {
 *   const customDelete = useAdminCustomDelete(
 *     `/blog/posts/${customId}`,
 *     ["posts"]
 *   )
 *
 *   // ...
 *
 *   const handleAction = (title: string) => {
 *     customDelete.mutate(void 0, {
 *       onSuccess: () => {
 *         // Delete action successful
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default Custom
 *
 * @customNamespace Hooks.Admin.Custom
 * @category Mutations
 */
declare const useAdminCustomDelete: <TResponse>(path: string, queryKey: QueryKey, relatedDomains?: RelatedDomains, options?: UseMutationOptions<Response<TResponse>, Error, void, unknown> | undefined) => _tanstack_react_query.UseMutationResult<Response<TResponse>, Error, void, unknown>;

/**
 * This hook sends a `GET` request to a custom API Route.
 *
 * @typeParam TQuery - The type of accepted query parameters which defaults to `Record<string, any>`.
 * @typeParam TResponse - The type of response which defaults to `any`.
 * @typeParamDefinition TQuery - The query parameters based on the type specified for `TQuery`.
 * @typeParamDefinition TResponse - The response based on the type specified for `TResponse`.
 *
 * @example
 * import React from "react"
 * import { useAdminCustomQuery } from "medusa-react"
 * import Post from "./models/Post"
 *
 * type RequestQuery = {
 *   title: string
 * }
 *
 * type ResponseData = {
 *   posts: Post
 * }
 *
 * const Custom = () => {
 *   const { data, isLoading } = useAdminCustomQuery
 *     <RequestQuery, ResponseData>(
 *       "/blog/posts",
 *       ["posts"],
 *       {
 *         title: "My post"
 *       }
 *     )
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {data?.posts && !data.posts.length && (
 *         <span>No Post</span>
 *       )}
 *       {data?.posts && data.posts?.length > 0 && (
 *         <ul>
 *           {data.posts.map((post) => (
 *             <li key={post.id}>{post.title}</li>
 *           ))}
 *         </ul>
 *       )}
 *     </div>
 *   )
 * }
 *
 * export default Custom
 *
 * @customNamespace Hooks.Admin.Custom
 * @category Mutations
 */
declare const useAdminCustomQuery: <TQuery extends Record<string, any>, TResponse = any>(path: string, queryKey: QueryKey, query?: TQuery | undefined, options?: UseQueryOptionsWrapper<Response<TResponse>, Error, (string | QueryKey | TQuery | undefined)[]> | undefined) => {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: true;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<TResponse>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly data: Response<TResponse> | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: true;
    readonly status: "success";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<TResponse>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly data: Response<TResponse> | undefined;
} | {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: true;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<TResponse>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly data: Response<TResponse> | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: true;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "loading";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<TResponse>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly data: Response<TResponse> | undefined;
};

/**
 * @ignore
 */
declare const adminCustomerGroupKeys: {
    detailCustomer(id: string, query?: AdminGetCustomersParams): (string | {
        limit?: number | undefined;
        offset?: number | undefined;
        expand?: string | undefined;
        q?: string | undefined;
        has_account?: boolean | undefined;
        groups?: string[] | undefined;
    })[];
    all: ["admin_customer_groups"];
    lists: () => ["admin_customer_groups", "list"];
    list: (query?: any) => ["admin_customer_groups", "list", {
        query: any;
    }];
    details: () => ["admin_customer_groups", "detail"];
    detail: (id: string) => ["admin_customer_groups", "detail", string];
};
type CustomerGroupQueryKeys = typeof adminCustomerGroupKeys;
/**
 * This hook retrieves a customer group by its ID. You can expand the customer group's relations or
 * select the fields that should be returned.
 *
 * @example
 * import React from "react"
 * import { useAdminCustomerGroup } from "medusa-react"
 *
 * type Props = {
 *   customerGroupId: string
 * }
 *
 * const CustomerGroup = ({ customerGroupId }: Props) => {
 *   const { customer_group, isLoading } = useAdminCustomerGroup(
 *     customerGroupId
 *   )
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {customer_group && <span>{customer_group.name}</span>}
 *     </div>
 *   )
 * }
 *
 * export default CustomerGroup
 *
 * @customNamespace Hooks.Admin.Customer Groups
 * @category Queries
 */
declare const useAdminCustomerGroup: (id: string, query?: AdminGetCustomerGroupsGroupParams, options?: UseQueryOptionsWrapper<Response<AdminCustomerGroupsRes>, Error, ReturnType<CustomerGroupQueryKeys["detail"]>>) => {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: true;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminCustomerGroupsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly customer_group?: _medusajs_medusa.CustomerGroup | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: true;
    readonly status: "success";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminCustomerGroupsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly customer_group?: _medusajs_medusa.CustomerGroup | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: true;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminCustomerGroupsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly customer_group?: _medusajs_medusa.CustomerGroup | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: true;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "loading";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminCustomerGroupsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly customer_group?: _medusajs_medusa.CustomerGroup | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
};
/**
 * This hook retrieves a list of customer groups. The customer groups can be filtered by fields such as `name` or `id`.
 * The customer groups can also be sorted or paginated.
 *
 * @example
 * To list customer groups:
 *
 * ```tsx
 * import React from "react"
 * import { useAdminCustomerGroups } from "medusa-react"
 *
 * const CustomerGroups = () => {
 *   const {
 *     customer_groups,
 *     isLoading,
 *   } = useAdminCustomerGroups()
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {customer_groups && !customer_groups.length && (
 *         <span>No Customer Groups</span>
 *       )}
 *       {customer_groups && customer_groups.length > 0 && (
 *         <ul>
 *           {customer_groups.map(
 *             (customerGroup) => (
 *               <li key={customerGroup.id}>
 *                 {customerGroup.name}
 *               </li>
 *             )
 *           )}
 *         </ul>
 *       )}
 *     </div>
 *   )
 * }
 *
 * export default CustomerGroups
 * ```
 *
 * To specify relations that should be retrieved within the customer groups:
 *
 * ```tsx
 * import React from "react"
 * import { useAdminCustomerGroups } from "medusa-react"
 *
 * const CustomerGroups = () => {
 *   const {
 *     customer_groups,
 *     isLoading,
 *   } = useAdminCustomerGroups({
 *     expand: "customers"
 *   })
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {customer_groups && !customer_groups.length && (
 *         <span>No Customer Groups</span>
 *       )}
 *       {customer_groups && customer_groups.length > 0 && (
 *         <ul>
 *           {customer_groups.map(
 *             (customerGroup) => (
 *               <li key={customerGroup.id}>
 *                 {customerGroup.name}
 *               </li>
 *             )
 *           )}
 *         </ul>
 *       )}
 *     </div>
 *   )
 * }
 *
 * export default CustomerGroups
 * ```
 *
 * By default, only the first `10` records are retrieved. You can control pagination by specifying the `limit` and `offset` properties:
 *
 * ```tsx
 * import React from "react"
 * import { useAdminCustomerGroups } from "medusa-react"
 *
 * const CustomerGroups = () => {
 *   const {
 *     customer_groups,
 *     limit,
 *     offset,
 *     isLoading,
 *   } = useAdminCustomerGroups({
 *     expand: "customers",
 *     limit: 15,
 *     offset: 0
 *   })
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {customer_groups && !customer_groups.length && (
 *         <span>No Customer Groups</span>
 *       )}
 *       {customer_groups && customer_groups.length > 0 && (
 *         <ul>
 *           {customer_groups.map(
 *             (customerGroup) => (
 *               <li key={customerGroup.id}>
 *                 {customerGroup.name}
 *               </li>
 *             )
 *           )}
 *         </ul>
 *       )}
 *     </div>
 *   )
 * }
 *
 * export default CustomerGroups
 * ```
 *
 * @customNamespace Hooks.Admin.Customer Groups
 * @category Queries
 */
declare const useAdminCustomerGroups: (query?: AdminGetCustomerGroupsParams, options?: UseQueryOptionsWrapper<Response<AdminCustomerGroupsListRes>, Error, ReturnType<CustomerGroupQueryKeys["list"]>>) => {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: true;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminCustomerGroupsListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly customer_groups?: _medusajs_medusa.CustomerGroup[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: true;
    readonly status: "success";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminCustomerGroupsListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly customer_groups?: _medusajs_medusa.CustomerGroup[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: true;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminCustomerGroupsListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly customer_groups?: _medusajs_medusa.CustomerGroup[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: true;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "loading";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminCustomerGroupsListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly customer_groups?: _medusajs_medusa.CustomerGroup[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
};
/**
 * This hook retrieves a list of customers in a customer group. The customers can be filtered
 * by the `query` field. The customers can also be paginated.
 *
 * @example
 * import React from "react"
 * import { useAdminCustomerGroupCustomers } from "medusa-react"
 *
 * type Props = {
 *   customerGroupId: string
 * }
 *
 * const CustomerGroup = ({ customerGroupId }: Props) => {
 *   const {
 *     customers,
 *     isLoading,
 *   } = useAdminCustomerGroupCustomers(
 *     customerGroupId
 *   )
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {customers && !customers.length && (
 *         <span>No customers</span>
 *       )}
 *       {customers && customers.length > 0 && (
 *         <ul>
 *           {customers.map((customer) => (
 *             <li key={customer.id}>{customer.first_name}</li>
 *           ))}
 *         </ul>
 *       )}
 *     </div>
 *   )
 * }
 *
 * export default CustomerGroup
 *
 * @customNamespace Hooks.Admin.Customer Groups
 * @category Queries
 */
declare const useAdminCustomerGroupCustomers: (id: string, query?: AdminGetCustomersParams, options?: UseQueryOptionsWrapper<Response<AdminCustomersListRes>, Error, ReturnType<CustomerGroupQueryKeys["detailCustomer"]>>) => {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: true;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminCustomersListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly customers?: _medusajs_medusa.Customer[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: true;
    readonly status: "success";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminCustomersListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly customers?: _medusajs_medusa.Customer[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: true;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminCustomersListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly customers?: _medusajs_medusa.Customer[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: true;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "loading";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminCustomersListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly customers?: _medusajs_medusa.Customer[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
};

/**
 * This hook creates a customer group.
 *
 * @example
 * import React from "react"
 * import { useAdminCreateCustomerGroup } from "medusa-react"
 *
 * const CreateCustomerGroup = () => {
 *   const createCustomerGroup = useAdminCreateCustomerGroup()
 *   // ...
 *
 *   const handleCreate = (name: string) => {
 *     createCustomerGroup.mutate({
 *       name,
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default CreateCustomerGroup
 *
 * @customNamespace Hooks.Admin.Customer Groups
 * @category Mutations
 */
declare const useAdminCreateCustomerGroup: (options?: UseMutationOptions<Response<AdminCustomerGroupsRes>, Error, AdminPostCustomerGroupsReq>) => _tanstack_react_query.UseMutationResult<Response<AdminCustomerGroupsRes>, Error, AdminPostCustomerGroupsReq, unknown>;
/**
 * This hook updates a customer group's details.
 *
 * @example
 * import React from "react"
 * import { useAdminUpdateCustomerGroup } from "medusa-react"
 *
 * type Props = {
 *   customerGroupId: string
 * }
 *
 * const CustomerGroup = ({ customerGroupId }: Props) => {
 *   const updateCustomerGroup = useAdminUpdateCustomerGroup(
 *     customerGroupId
 *   )
 *   // ..
 *
 *   const handleUpdate = (name: string) => {
 *     updateCustomerGroup.mutate({
 *       name,
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default CustomerGroup
 *
 * @customNamespace Hooks.Admin.Customer Groups
 * @category Mutations
 */
declare const useAdminUpdateCustomerGroup: (id: string, options?: UseMutationOptions<Response<AdminCustomerGroupsRes>, Error, AdminPostCustomerGroupsGroupReq>) => _tanstack_react_query.UseMutationResult<Response<AdminCustomerGroupsRes>, Error, AdminPostCustomerGroupsGroupReq, unknown>;
/**
 * This hook deletes a customer group. This doesn't delete the customers associated with the customer group.
 *
 * @example
 * import React from "react"
 * import { useAdminDeleteCustomerGroup } from "medusa-react"
 *
 * type Props = {
 *   customerGroupId: string
 * }
 *
 * const CustomerGroup = ({ customerGroupId }: Props) => {
 *   const deleteCustomerGroup = useAdminDeleteCustomerGroup(
 *     customerGroupId
 *   )
 *   // ...
 *
 *   const handleDeleteCustomerGroup = () => {
 *     deleteCustomerGroup.mutate()
 *   }
 *
 *   // ...
 * }
 *
 * export default CustomerGroup
 *
 * @customNamespace Hooks.Admin.Customer Groups
 * @category Mutations
 */
declare const useAdminDeleteCustomerGroup: (id: string, options?: UseMutationOptions<Response<AdminCustomerGroupsDeleteRes>, Error, void>) => _tanstack_react_query.UseMutationResult<Response<_medusajs_medusa.DeleteResponse>, Error, void, unknown>;
/**
 * The hook adds a list of customers to a customer group.
 *
 * @example
 * import React from "react"
 * import {
 *   useAdminAddCustomersToCustomerGroup,
 * } from "medusa-react"
 *
 * type Props = {
 *   customerGroupId: string
 * }
 *
 * const CustomerGroup = ({ customerGroupId }: Props) => {
 *   const addCustomers = useAdminAddCustomersToCustomerGroup(
 *     customerGroupId
 *   )
 *   // ...
 *
 *   const handleAddCustomers= (customerId: string) => {
 *     addCustomers.mutate({
 *       customer_ids: [
 *         {
 *           id: customerId,
 *         },
 *       ],
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default CustomerGroup
 *
 * @customNamespace Hooks.Admin.Customer Groups
 * @category Mutations
 */
declare const useAdminAddCustomersToCustomerGroup: (id: string, options?: UseMutationOptions<Response<AdminCustomerGroupsRes>, Error, AdminPostCustomerGroupsGroupCustomersBatchReq>) => _tanstack_react_query.UseMutationResult<Response<AdminCustomerGroupsRes>, Error, AdminPostCustomerGroupsGroupCustomersBatchReq, unknown>;
/**
 * This hook removes a list of customers from a customer group. This doesn't delete the customer,
 * only the association between the customer and the customer group.
 *
 * @example
 * import React from "react"
 * import {
 *   useAdminRemoveCustomersFromCustomerGroup,
 * } from "medusa-react"
 *
 * type Props = {
 *   customerGroupId: string
 * }
 *
 * const CustomerGroup = ({ customerGroupId }: Props) => {
 *   const removeCustomers =
 *     useAdminRemoveCustomersFromCustomerGroup(
 *       customerGroupId
 *     )
 *   // ...
 *
 *   const handleRemoveCustomer = (customerId: string) => {
 *     removeCustomers.mutate({
 *       customer_ids: [
 *         {
 *           id: customerId,
 *         },
 *       ],
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default CustomerGroup
 *
 * @customNamespace Hooks.Admin.Customer Groups
 * @category Mutations
 */
declare const useAdminRemoveCustomersFromCustomerGroup: (id: string, options?: UseMutationOptions<Response<AdminCustomerGroupsRes>, Error, AdminDeleteCustomerGroupsGroupCustomerBatchReq>) => _tanstack_react_query.UseMutationResult<Response<AdminCustomerGroupsRes>, Error, AdminDeleteCustomerGroupsGroupCustomerBatchReq, unknown>;

declare const adminCustomerKeys: TQueryKey<"admin_customers", any, string>;
type CustomerQueryKeys = typeof adminCustomerKeys;
/**
 * This hook retrieves a list of Customers. The customers can be filtered by fields such as
 * `q` or `groups`. The customers can also be paginated.
 *
 * @example
 * To list customers:
 *
 * ```tsx
 * import React from "react"
 * import { useAdminCustomers } from "medusa-react"
 *
 * const Customers = () => {
 *   const { customers, isLoading } = useAdminCustomers()
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {customers && !customers.length && (
 *         <span>No customers</span>
 *       )}
 *       {customers && customers.length > 0 && (
 *         <ul>
 *           {customers.map((customer) => (
 *             <li key={customer.id}>{customer.first_name}</li>
 *           ))}
 *         </ul>
 *       )}
 *     </div>
 *   )
 * }
 *
 * export default Customers
 * ```
 *
 * You can specify relations to be retrieved within each customer. In addition, by default, only the first `50` records are retrieved.
 * You can control pagination by specifying the `limit` and `offset` properties:
 *
 * ```tsx
 * import React from "react"
 * import { useAdminCustomers } from "medusa-react"
 *
 * const Customers = () => {
 *   const {
 *     customers,
 *     limit,
 *     offset,
 *     isLoading
 *   } = useAdminCustomers({
 *     expand: "billing_address",
 *     limit: 20,
 *     offset: 0
 *   })
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {customers && !customers.length && (
 *         <span>No customers</span>
 *       )}
 *       {customers && customers.length > 0 && (
 *         <ul>
 *           {customers.map((customer) => (
 *             <li key={customer.id}>{customer.first_name}</li>
 *           ))}
 *         </ul>
 *       )}
 *     </div>
 *   )
 * }
 *
 * export default Customers
 * ```
 *
 * @customNamespace Hooks.Admin.Customers
 * @category Queries
 */
declare const useAdminCustomers: (query?: AdminGetCustomersParams, options?: UseQueryOptionsWrapper<Response<AdminCustomersListRes>, Error, ReturnType<CustomerQueryKeys["list"]>>) => {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: true;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminCustomersListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly customers?: _medusajs_medusa.Customer[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: true;
    readonly status: "success";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminCustomersListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly customers?: _medusajs_medusa.Customer[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: true;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminCustomersListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly customers?: _medusajs_medusa.Customer[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: true;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "loading";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminCustomersListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly customers?: _medusajs_medusa.Customer[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
};
/**
 * This hook retrieves the details of a customer.
 *
 * @example
 * import React from "react"
 * import { useAdminCustomer } from "medusa-react"
 *
 * type Props = {
 *   customerId: string
 * }
 *
 * const Customer = ({ customerId }: Props) => {
 *   const { customer, isLoading } = useAdminCustomer(
 *     customerId
 *   )
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {customer && <span>{customer.first_name}</span>}
 *     </div>
 *   )
 * }
 *
 * export default Customer
 *
 * @customNamespace Hooks.Admin.Customers
 * @category Queries
 */
declare const useAdminCustomer: (id: string, options?: UseQueryOptionsWrapper<Response<AdminCustomersRes>, Error, ReturnType<CustomerQueryKeys["detail"]>>) => {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: true;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminCustomersRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly customer?: _medusajs_medusa.Customer | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: true;
    readonly status: "success";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminCustomersRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly customer?: _medusajs_medusa.Customer | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: true;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminCustomersRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly customer?: _medusajs_medusa.Customer | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: true;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "loading";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminCustomersRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly customer?: _medusajs_medusa.Customer | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
};

/**
 * This hook creates a customer as an admin.
 *
 * @example
 * import React from "react"
 * import { useAdminCreateCustomer } from "medusa-react"
 *
 * type CustomerData = {
 *   first_name: string
 *   last_name: string
 *   email: string
 *   password: string
 * }
 *
 * const CreateCustomer = () => {
 *   const createCustomer = useAdminCreateCustomer()
 *   // ...
 *
 *   const handleCreate = (customerData: CustomerData) => {
 *     createCustomer.mutate(customerData, {
 *       onSuccess: ({ customer }) => {
 *         console.log(customer.id)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default CreateCustomer
 *
 * @customNamespace Hooks.Admin.Customers
 * @category Mutations
 */
declare const useAdminCreateCustomer: (options?: UseMutationOptions<Response<AdminCustomersRes>, Error, AdminPostCustomersReq>) => _tanstack_react_query.UseMutationResult<Response<AdminCustomersRes>, Error, AdminPostCustomersReq, unknown>;
/**
 * This hook updates a customer's details.
 *
 * @example
 * import React from "react"
 * import { useAdminUpdateCustomer } from "medusa-react"
 *
 * type CustomerData = {
 *   first_name: string
 *   last_name: string
 *   email: string
 *   password: string
 * }
 *
 * type Props = {
 *   customerId: string
 * }
 *
 * const Customer = ({ customerId }: Props) => {
 *   const updateCustomer = useAdminUpdateCustomer(customerId)
 *   // ...
 *
 *   const handleUpdate = (customerData: CustomerData) => {
 *     updateCustomer.mutate(customerData)
 *   }
 *
 *   // ...
 * }
 *
 * export default Customer
 *
 * @customNamespace Hooks.Admin.Customers
 * @category Mutations
 */
declare const useAdminUpdateCustomer: (id: string, options?: UseMutationOptions<Response<AdminCustomersRes>, Error, AdminPostCustomersCustomerReq>) => _tanstack_react_query.UseMutationResult<Response<AdminCustomersRes>, Error, AdminPostCustomersCustomerReq, unknown>;

declare const adminDiscountKeys: {
    detailCondition(id: string, query?: any): readonly ["admin_discounts", "detail", string, "condition", any];
    all: ["admin_discounts"];
    lists: () => ["admin_discounts", "list"];
    list: (query?: any) => ["admin_discounts", "list", {
        query: any;
    }];
    details: () => ["admin_discounts", "detail"];
    detail: (id: string) => ["admin_discounts", "detail", string];
};
type DiscountQueryKeys = typeof adminDiscountKeys;
/**
 * This hook retrieves a list of Discounts. The discounts can be filtered by fields such as `rule` or `is_dynamic`.
 * The discounts can also be paginated.
 *
 * @example
 * To list discounts:
 *
 * ```tsx
 * import React from "react"
 * import { useAdminDiscounts } from "medusa-react"
 *
 * const Discounts = () => {
 *   const { discounts, isLoading } = useAdminDiscounts()
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {discounts && !discounts.length && (
 *         <span>No customers</span>
 *       )}
 *       {discounts && discounts.length > 0 && (
 *         <ul>
 *           {discounts.map((discount) => (
 *             <li key={discount.id}>{discount.code}</li>
 *           ))}
 *         </ul>
 *       )}
 *     </div>
 *   )
 * }
 *
 * export default Discounts
 * ```
 *
 * To specify relations that should be retrieved within the discounts:
 *
 * ```tsx
 * import React from "react"
 * import { useAdminDiscounts } from "medusa-react"
 *
 * const Discounts = () => {
 *   const { discounts, isLoading } = useAdminDiscounts({
 *     expand: "rule"
 *   })
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {discounts && !discounts.length && (
 *         <span>No customers</span>
 *       )}
 *       {discounts && discounts.length > 0 && (
 *         <ul>
 *           {discounts.map((discount) => (
 *             <li key={discount.id}>{discount.code}</li>
 *           ))}
 *         </ul>
 *       )}
 *     </div>
 *   )
 * }
 *
 * export default Discounts
 * ```
 *
 * By default, only the first `20` records are retrieved. You can control pagination by specifying the `limit` and `offset` properties:
 *
 * ```tsx
 * import React from "react"
 * import { useAdminDiscounts } from "medusa-react"
 *
 * const Discounts = () => {
 *   const {
 *     discounts,
 *     limit,
 *     offset,
 *     isLoading
 *   } = useAdminDiscounts({
 *     expand: "rule",
 *     limit: 10,
 *     offset: 0
 *   })
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {discounts && !discounts.length && (
 *         <span>No customers</span>
 *       )}
 *       {discounts && discounts.length > 0 && (
 *         <ul>
 *           {discounts.map((discount) => (
 *             <li key={discount.id}>{discount.code}</li>
 *           ))}
 *         </ul>
 *       )}
 *     </div>
 *   )
 * }
 *
 * export default Discounts
 * ```
 *
 * @customNamespace Hooks.Admin.Discounts
 * @category Queries
 */
declare const useAdminDiscounts: (query?: AdminGetDiscountsParams, options?: UseQueryOptionsWrapper<Response<AdminDiscountsListRes>, Error, ReturnType<DiscountQueryKeys["list"]>>) => {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: true;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminDiscountsListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly discounts?: _medusajs_medusa.Discount[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: true;
    readonly status: "success";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminDiscountsListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly discounts?: _medusajs_medusa.Discount[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: true;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminDiscountsListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly discounts?: _medusajs_medusa.Discount[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: true;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "loading";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminDiscountsListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly discounts?: _medusajs_medusa.Discount[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
};
/**
 * This hook retrieves a discount.
 *
 * @example
 * import React from "react"
 * import { useAdminDiscount } from "medusa-react"
 *
 * type Props = {
 *   discountId: string
 * }
 *
 * const Discount = ({ discountId }: Props) => {
 *   const { discount, isLoading } = useAdminDiscount(
 *     discountId
 *   )
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {discount && <span>{discount.code}</span>}
 *     </div>
 *   )
 * }
 *
 * export default Discount
 *
 * @customNamespace Hooks.Admin.Discounts
 * @category Queries
 */
declare const useAdminDiscount: (id: string, query?: AdminGetDiscountParams, options?: UseQueryOptionsWrapper<Response<AdminDiscountsRes>, Error, ReturnType<DiscountQueryKeys["detail"]>>) => {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: true;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminDiscountsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly discount?: _medusajs_medusa.Discount | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: true;
    readonly status: "success";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminDiscountsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly discount?: _medusajs_medusa.Discount | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: true;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminDiscountsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly discount?: _medusajs_medusa.Discount | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: true;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "loading";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminDiscountsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly discount?: _medusajs_medusa.Discount | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
};
/**
 * This hook adds a batch of resources to a discount condition. The type of resource depends on the type of discount condition. For example, if the discount condition's type is `products`,
 * the resources being added should be products.
 *
 * @example
 * import React from "react"
 * import { useAdminGetDiscountByCode } from "medusa-react"
 *
 * type Props = {
 *   discountCode: string
 * }
 *
 * const Discount = ({ discountCode }: Props) => {
 *   const { discount, isLoading } = useAdminGetDiscountByCode(
 *     discountCode
 *   )
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {discount && <span>{discount.code}</span>}
 *     </div>
 *   )
 * }
 *
 * export default Discount
 *
 * @customNamespace Hooks.Admin.Discounts
 * @category Queries
 */
declare const useAdminGetDiscountByCode: (code: string, options?: UseQueryOptionsWrapper<Response<AdminDiscountsRes>, Error, ReturnType<DiscountQueryKeys["detail"]>>) => {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: true;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminDiscountsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly discount?: _medusajs_medusa.Discount | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: true;
    readonly status: "success";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminDiscountsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly discount?: _medusajs_medusa.Discount | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: true;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminDiscountsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly discount?: _medusajs_medusa.Discount | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: true;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "loading";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminDiscountsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly discount?: _medusajs_medusa.Discount | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
};
/**
 * This hook retries a Discount Condition's details.
 *
 * @example
 * import React from "react"
 * import { useAdminGetDiscountCondition } from "medusa-react"
 *
 * type Props = {
 *   discountId: string
 *   discountConditionId: string
 * }
 *
 * const DiscountCondition = ({
 *   discountId,
 *   discountConditionId
 * }: Props) => {
 *   const {
 *     discount_condition,
 *     isLoading
 *   } = useAdminGetDiscountCondition(
 *     discountId,
 *     discountConditionId
 *   )
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {discount_condition && (
 *         <span>{discount_condition.type}</span>
 *       )}
 *     </div>
 *   )
 * }
 *
 * export default DiscountCondition
 *
 * @customNamespace Hooks.Admin.Discounts
 * @category Queries
 */
declare const useAdminGetDiscountCondition: (id: string, conditionId: string, query?: AdminGetDiscountsDiscountConditionsConditionParams, options?: UseQueryOptionsWrapper<Response<AdminDiscountConditionsRes>, Error, ReturnType<DiscountQueryKeys["detailCondition"]>>) => {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: true;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminDiscountConditionsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly discount_condition?: _medusajs_medusa.DiscountCondition | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: true;
    readonly status: "success";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminDiscountConditionsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly discount_condition?: _medusajs_medusa.DiscountCondition | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: true;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminDiscountConditionsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly discount_condition?: _medusajs_medusa.DiscountCondition | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: true;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "loading";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminDiscountConditionsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly discount_condition?: _medusajs_medusa.DiscountCondition | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
};

/**
 * This hook adds a batch of resources to a discount condition. The type of resource depends on the type of discount condition.
 * For example, if the discount condition's type is `products`, the resources being added should be products.
 *
 * @example
 * To add resources to a discount condition:
 *
 * ```tsx
 * import React from "react"
 * import {
 *   useAdminAddDiscountConditionResourceBatch
 * } from "medusa-react"
 *
 * type Props = {
 *   discountId: string
 *   conditionId: string
 * }
 *
 * const DiscountCondition = ({
 *   discountId,
 *   conditionId
 * }: Props) => {
 *   const addConditionResources = useAdminAddDiscountConditionResourceBatch(
 *     discountId,
 *     conditionId
 *   )
 *   // ...
 *
 *   const handleAdd = (itemId: string) => {
 *     addConditionResources.mutate({
 *       resources: [
 *         {
 *           id: itemId
 *         }
 *       ]
 *     }, {
 *       onSuccess: ({ discount }) => {
 *         console.log(discount.id)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default DiscountCondition
 * ```
 *
 * To specify relations to include in the returned discount:
 *
 * ```tsx
 * import React from "react"
 * import {
 *   useAdminAddDiscountConditionResourceBatch
 * } from "medusa-react"
 *
 * type Props = {
 *   discountId: string
 *   conditionId: string
 * }
 *
 * const DiscountCondition = ({
 *   discountId,
 *   conditionId
 * }: Props) => {
 *   const addConditionResources = useAdminAddDiscountConditionResourceBatch(
 *     discountId,
 *     conditionId,
 *     {
 *       expand: "rule"
 *     }
 *   )
 *   // ...
 *
 *   const handleAdd = (itemId: string) => {
 *     addConditionResources.mutate({
 *       resources: [
 *         {
 *           id: itemId
 *         }
 *       ]
 *     }, {
 *       onSuccess: ({ discount }) => {
 *         console.log(discount.id)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default DiscountCondition
 * ```
 *
 * @customNamespace Hooks.Admin.Discounts
 * @category Mutations
 */
declare const useAdminAddDiscountConditionResourceBatch: (discountId: string, conditionId: string, query?: AdminPostDiscountsDiscountConditionsConditionBatchParams, options?: UseMutationOptions<Response<AdminDiscountsRes>, Error, AdminPostDiscountsDiscountConditionsConditionBatchReq>) => _tanstack_react_query.UseMutationResult<Response<AdminDiscountsRes>, Error, AdminPostDiscountsDiscountConditionsConditionBatchReq, unknown>;
/**
 * This hook remove a batch of resources from a discount condition. This will only remove the association between the resource and
 * the discount condition, not the resource itself.
 *
 * @example
 * import React from "react"
 * import {
 *   useAdminDeleteDiscountConditionResourceBatch
 * } from "medusa-react"
 *
 * type Props = {
 *   discountId: string
 *   conditionId: string
 * }
 *
 * const DiscountCondition = ({
 *   discountId,
 *   conditionId
 * }: Props) => {
 *   const deleteConditionResource = useAdminDeleteDiscountConditionResourceBatch(
 *     discountId,
 *     conditionId,
 *   )
 *   // ...
 *
 *   const handleDelete = (itemId: string) => {
 *     deleteConditionResource.mutate({
 *       resources: [
 *         {
 *           id: itemId
 *         }
 *       ]
 *     }, {
 *       onSuccess: ({ discount }) => {
 *         console.log(discount.id)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default DiscountCondition
 *
 * @customNamespace Hooks.Admin.Discounts
 * @category Mutations
 */
declare const useAdminDeleteDiscountConditionResourceBatch: (discountId: string, conditionId: string, options?: UseMutationOptions<Response<AdminDiscountsRes>, Error, AdminDeleteDiscountsDiscountConditionsConditionBatchReq>) => _tanstack_react_query.UseMutationResult<Response<AdminDiscountsRes>, Error, AdminDeleteDiscountsDiscountConditionsConditionBatchReq, unknown>;
/**
 * This hook creates a discount with a given set of rules that defines how the discount is applied.
 *
 * @example
 * import React from "react"
 * import {
 *   useAdminCreateDiscount,
 * } from "medusa-react"
 * import {
 *   AllocationType,
 *   DiscountRuleType,
 * } from "@medusajs/medusa"
 *
 * const CreateDiscount = () => {
 *   const createDiscount = useAdminCreateDiscount()
 *   // ...
 *
 *   const handleCreate = (
 *     currencyCode: string,
 *     regionId: string
 *   ) => {
 *     // ...
 *     createDiscount.mutate({
 *       code: currencyCode,
 *       rule: {
 *         type: DiscountRuleType.FIXED,
 *         value: 10,
 *         allocation: AllocationType.ITEM,
 *       },
 *       regions: [
 *           regionId,
 *       ],
 *       is_dynamic: false,
 *       is_disabled: false,
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default CreateDiscount
 *
 * @customNamespace Hooks.Admin.Discounts
 * @category Mutations
 */
declare const useAdminCreateDiscount: (options?: UseMutationOptions<Response<AdminDiscountsRes>, Error, AdminPostDiscountsReq>) => _tanstack_react_query.UseMutationResult<Response<AdminDiscountsRes>, Error, AdminPostDiscountsReq, unknown>;
/**
 * This hook updates a discount with a given set of rules that define how the discount is applied.
 *
 * @example
 * import React from "react"
 * import { useAdminUpdateDiscount } from "medusa-react"
 *
 * type Props = {
 *   discountId: string
 * }
 *
 * const Discount = ({ discountId }: Props) => {
 *   const updateDiscount = useAdminUpdateDiscount(discountId)
 *   // ...
 *
 *   const handleUpdate = (isDisabled: boolean) => {
 *     updateDiscount.mutate({
 *       is_disabled: isDisabled,
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default Discount
 *
 * @customNamespace Hooks.Admin.Discounts
 * @category Mutations
 */
declare const useAdminUpdateDiscount: (id: string, options?: UseMutationOptions<Response<AdminDiscountsRes>, Error, AdminPostDiscountsDiscountReq>) => _tanstack_react_query.UseMutationResult<Response<AdminDiscountsRes>, Error, AdminPostDiscountsDiscountReq, unknown>;
/**
 * This hook deletes a discount. Deleting the discount will make it unavailable for customers to use.
 *
 * @example
 * import React from "react"
 * import { useAdminDeleteDiscount } from "medusa-react"
 *
 * const Discount = () => {
 *   const deleteDiscount = useAdminDeleteDiscount(discount_id)
 *   // ...
 *
 *   const handleDelete = () => {
 *     deleteDiscount.mutate()
 *   }
 *
 *   // ...
 * }
 *
 * export default Discount
 *
 * @customNamespace Hooks.Admin.Discounts
 * @category Mutations
 */
declare const useAdminDeleteDiscount: (id: string, options?: UseMutationOptions<Response<AdminDiscountsDeleteRes>, Error, void>) => _tanstack_react_query.UseMutationResult<Response<_medusajs_medusa.DeleteResponse>, Error, void, unknown>;
/**
 * This hook adds a Region to the list of Regions a Discount can be used in.
 *
 * @typeParamDefinition string - The ID of the region to add.
 *
 * @example
 * import React from "react"
 * import { useAdminDiscountAddRegion } from "medusa-react"
 *
 * type Props = {
 *   discountId: string
 * }
 *
 * const Discount = ({ discountId }: Props) => {
 *   const addRegion = useAdminDiscountAddRegion(discountId)
 *   // ...
 *
 *   const handleAdd = (regionId: string) => {
 *     addRegion.mutate(regionId, {
 *       onSuccess: ({ discount }) => {
 *         console.log(discount.regions)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default Discount
 *
 * @customNamespace Hooks.Admin.Discounts
 * @category Mutations
 */
declare const useAdminDiscountAddRegion: (id: string, options?: UseMutationOptions<Response<AdminDiscountsRes>, Error, string>) => _tanstack_react_query.UseMutationResult<Response<AdminDiscountsRes>, Error, string, unknown>;
/**
 * This hook removes a Region from the list of Regions that a Discount can be used in.
 * This does not delete a region, only the association between it and the discount.
 *
 * @typeParamDefinition string - The ID of the region to remove.
 *
 * @example
 * import React from "react"
 * import { useAdminDiscountRemoveRegion } from "medusa-react"
 *
 * type Props = {
 *   discountId: string
 * }
 *
 * const Discount = ({ discountId }: Props) => {
 *   const deleteRegion = useAdminDiscountRemoveRegion(discountId)
 *   // ...
 *
 *   const handleDelete = (regionId: string) => {
 *     deleteRegion.mutate(regionId, {
 *       onSuccess: ({ discount }) => {
 *         console.log(discount.regions)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default Discount
 *
 * @customNamespace Hooks.Admin.Discounts
 * @category Mutations
 */
declare const useAdminDiscountRemoveRegion: (id: string, options?: UseMutationOptions<Response<AdminDiscountsRes>, Error, string>) => _tanstack_react_query.UseMutationResult<Response<AdminDiscountsRes>, Error, string, unknown>;
/**
 * This hook creates a dynamic unique code that can map to a parent discount. This is useful if you want to
 * automatically generate codes with the same rules and conditions.
 *
 * @example
 * import React from "react"
 * import { useAdminCreateDynamicDiscountCode } from "medusa-react"
 *
 * type Props = {
 *   discountId: string
 * }
 *
 * const Discount = ({ discountId }: Props) => {
 *   const createDynamicDiscount = useAdminCreateDynamicDiscountCode(discountId)
 *   // ...
 *
 *   const handleCreate = (
 *     code: string,
 *     usageLimit: number
 *   ) => {
 *     createDynamicDiscount.mutate({
 *       code,
 *       usage_limit: usageLimit
 *     }, {
 *       onSuccess: ({ discount }) => {
 *         console.log(discount.is_dynamic)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default Discount
 *
 * @customNamespace Hooks.Admin.Discounts
 * @category Mutations
 */
declare const useAdminCreateDynamicDiscountCode: (id: string, options?: UseMutationOptions<Response<AdminDiscountsRes>, Error, AdminPostDiscountsDiscountDynamicCodesReq>) => _tanstack_react_query.UseMutationResult<Response<AdminDiscountsRes>, Error, AdminPostDiscountsDiscountDynamicCodesReq, unknown>;
/**
 * This hook deletes a dynamic code from a discount.
 *
 * @typeParamDefinition string - The code of the dynamic discount to delete.
 *
 * @example
 * import React from "react"
 * import { useAdminDeleteDynamicDiscountCode } from "medusa-react"
 *
 * type Props = {
 *   discountId: string
 * }
 *
 * const Discount = ({ discountId }: Props) => {
 *   const deleteDynamicDiscount = useAdminDeleteDynamicDiscountCode(discountId)
 *   // ...
 *
 *   const handleDelete = (code: string) => {
 *     deleteDynamicDiscount.mutate(code, {
 *       onSuccess: ({ discount }) => {
 *         console.log(discount.is_dynamic)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default Discount
 *
 * @customNamespace Hooks.Admin.Discounts
 * @category Mutations
 */
declare const useAdminDeleteDynamicDiscountCode: (id: string, options?: UseMutationOptions<Response<AdminDiscountsRes>, Error, string>) => _tanstack_react_query.UseMutationResult<Response<AdminDiscountsRes>, Error, string, unknown>;
/**
 * This hook creates a discount condition. Only one of `products`, `product_types`, `product_collections`, `product_tags`, and `customer_groups`
 * should be provided in the `payload` parameter, based on the type of discount condition. For example, if the discount condition's type is `products`,
 * the `products` field should be provided in the `payload` parameter.
 *
 * @example
 * import React from "react"
 * import { DiscountConditionOperator } from "@medusajs/medusa"
 * import { useAdminDiscountCreateCondition } from "medusa-react"
 *
 * type Props = {
 *   discountId: string
 * }
 *
 * const Discount = ({ discountId }: Props) => {
 *   const createCondition = useAdminDiscountCreateCondition(discountId)
 *   // ...
 *
 *   const handleCreateCondition = (
 *     operator: DiscountConditionOperator,
 *     products: string[]
 *   ) => {
 *     createCondition.mutate({
 *       operator,
 *       products
 *     }, {
 *       onSuccess: ({ discount }) => {
 *         console.log(discount.id)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default Discount
 *
 * @customNamespace Hooks.Admin.Discounts
 * @category Mutations
 */
declare const useAdminDiscountCreateCondition: (discountId: string, options?: UseMutationOptions<Response<AdminDiscountsRes>, Error, AdminPostDiscountsDiscountConditions>) => _tanstack_react_query.UseMutationResult<Response<AdminDiscountsRes>, Error, AdminPostDiscountsDiscountConditions, unknown>;
/**
 * Update a discount condition. Only one of `products`, `product_types`, `product_collections`, `product_tags`, and `customer_groups`
 * should be provided in the `payload` parameter, based on the type of discount condition. For example, if the discount condition's
 * type is `products`, the `products` field should be provided in the `payload` parameter.
 *
 * @example
 * import React from "react"
 * import { useAdminDiscountUpdateCondition } from "medusa-react"
 *
 * type Props = {
 *   discountId: string
 *   conditionId: string
 * }
 *
 * const DiscountCondition = ({
 *   discountId,
 *   conditionId
 * }: Props) => {
 *   const update = useAdminDiscountUpdateCondition(
 *     discountId,
 *     conditionId
 *   )
 *   // ...
 *
 *   const handleUpdate = (
 *     products: string[]
 *   ) => {
 *     update.mutate({
 *       products
 *     }, {
 *       onSuccess: ({ discount }) => {
 *         console.log(discount.id)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default DiscountCondition
 *
 * @customNamespace Hooks.Admin.Discounts
 * @category Mutations
 */
declare const useAdminDiscountUpdateCondition: (discountId: string, conditionId: string, options?: UseMutationOptions<Response<AdminDiscountsRes>, Error, AdminPostDiscountsDiscountConditionsCondition>) => _tanstack_react_query.UseMutationResult<Response<AdminDiscountsRes>, Error, AdminPostDiscountsDiscountConditionsCondition, unknown>;
/**
 * This hook deletes a discount condition. This doesn't delete resources associated to the discount condition.
 *
 * @typeParamDefinition string - The ID of the condition to delete.
 *
 * @example
 * import React from "react"
 * import { useAdminDiscountRemoveCondition } from "medusa-react"
 *
 * type Props = {
 *   discountId: string
 * }
 *
 * const Discount = ({ discountId }: Props) => {
 *   const deleteCondition = useAdminDiscountRemoveCondition(
 *     discountId
 *   )
 *   // ...
 *
 *   const handleDelete = (
 *     conditionId: string
 *   ) => {
 *     deleteCondition.mutate(conditionId, {
 *       onSuccess: ({ id, object, deleted }) => {
 *         console.log(deleted)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default Discount
 *
 * @customNamespace Hooks.Admin.Discounts
 * @category Mutations
 */
declare const useAdminDiscountRemoveCondition: (discountId: string, options?: UseMutationOptions<Response<AdminDiscountsDeleteRes>, Error, string>) => _tanstack_react_query.UseMutationResult<Response<_medusajs_medusa.DeleteResponse>, Error, string, unknown>;

declare const adminDraftOrderKeys: TQueryKey<"admin_draft_orders", any, string>;
type DraftOrderQueryKeys = typeof adminDraftOrderKeys;
/**
 * This hook retrieves an list of Draft Orders. The draft orders can be filtered by parameters such as `query`. The draft orders can also paginated.
 *
 * @example
 * To list draft orders:
 *
 * ```tsx
 * import React from "react"
 * import { useAdminDraftOrders } from "medusa-react"
 *
 * const DraftOrders = () => {
 *   const { draft_orders, isLoading } = useAdminDraftOrders()
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {draft_orders && !draft_orders.length && (
 *         <span>No Draft Orders</span>
 *       )}
 *       {draft_orders && draft_orders.length > 0 && (
 *         <ul>
 *           {draft_orders.map((order) => (
 *             <li key={order.id}>{order.display_id}</li>
 *           ))}
 *         </ul>
 *       )}
 *     </div>
 *   )
 * }
 *
 * export default DraftOrders
 * ```
 *
 * By default, only the first `50` records are retrieved. You can control pagination by specifying the `limit` and `offset` properties:
 *
 * ```tsx
 * import React from "react"
 * import { useAdminDraftOrders } from "medusa-react"
 *
 * const DraftOrders = () => {
 *   const {
 *     draft_orders,
 *     limit,
 *     offset,
 *     isLoading
 *   } = useAdminDraftOrders({
 *     limit: 20,
 *     offset: 0
 *   })
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {draft_orders && !draft_orders.length && (
 *         <span>No Draft Orders</span>
 *       )}
 *       {draft_orders && draft_orders.length > 0 && (
 *         <ul>
 *           {draft_orders.map((order) => (
 *             <li key={order.id}>{order.display_id}</li>
 *           ))}
 *         </ul>
 *       )}
 *     </div>
 *   )
 * }
 *
 * export default DraftOrders
 * ```
 *
 * @customNamespace Hooks.Admin.Draft Orders
 * @category Queries
 */
declare const useAdminDraftOrders: (query?: AdminGetDraftOrdersParams, options?: UseQueryOptionsWrapper<Response<AdminDraftOrdersListRes>, Error, ReturnType<DraftOrderQueryKeys["list"]>>) => {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: true;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminDraftOrdersListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly draft_orders?: _medusajs_medusa.DraftOrder[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: true;
    readonly status: "success";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminDraftOrdersListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly draft_orders?: _medusajs_medusa.DraftOrder[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: true;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminDraftOrdersListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly draft_orders?: _medusajs_medusa.DraftOrder[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: true;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "loading";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminDraftOrdersListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly draft_orders?: _medusajs_medusa.DraftOrder[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
};
/**
 * This hook retrieves a Draft Order's details.
 *
 * @example
 * import React from "react"
 * import { useAdminDraftOrder } from "medusa-react"
 *
 * type Props = {
 *   draftOrderId: string
 * }
 *
 * const DraftOrder = ({ draftOrderId }: Props) => {
 *   const {
 *     draft_order,
 *     isLoading,
 *   } = useAdminDraftOrder(draftOrderId)
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {draft_order && <span>{draft_order.display_id}</span>}
 *
 *     </div>
 *   )
 * }
 *
 * export default DraftOrder
 *
 * @customNamespace Hooks.Admin.Draft Orders
 * @category Queries
 */
declare const useAdminDraftOrder: (id: string, options?: UseQueryOptionsWrapper<Response<AdminDraftOrdersRes>, Error, ReturnType<DraftOrderQueryKeys["detail"]>>) => {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: true;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminDraftOrdersRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly draft_order?: _medusajs_medusa.DraftOrder | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: true;
    readonly status: "success";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminDraftOrdersRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly draft_order?: _medusajs_medusa.DraftOrder | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: true;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminDraftOrdersRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly draft_order?: _medusajs_medusa.DraftOrder | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: true;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "loading";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminDraftOrdersRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly draft_order?: _medusajs_medusa.DraftOrder | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
};

/**
 * This hook creates a Draft Order. A draft order is not transformed into an order until payment is captured.
 *
 * @example
 * import React from "react"
 * import { useAdminCreateDraftOrder } from "medusa-react"
 *
 * type DraftOrderData = {
 *   email: string
 *   region_id: string
 *   items: {
 *     quantity: number,
 *     variant_id: string
 *   }[]
 *   shipping_methods: {
 *     option_id: string
 *     price: number
 *   }[]
 * }
 *
 * const CreateDraftOrder = () => {
 *   const createDraftOrder = useAdminCreateDraftOrder()
 *   // ...
 *
 *   const handleCreate = (data: DraftOrderData) => {
 *     createDraftOrder.mutate(data, {
 *       onSuccess: ({ draft_order }) => {
 *         console.log(draft_order.id)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default CreateDraftOrder
 *
 * @customNamespace Hooks.Admin.Draft Orders
 * @category Mutations
 */
declare const useAdminCreateDraftOrder: (options?: UseMutationOptions<Response<AdminDraftOrdersRes>, Error, AdminPostDraftOrdersReq>) => _tanstack_react_query.UseMutationResult<Response<AdminDraftOrdersRes>, Error, AdminPostDraftOrdersReq, unknown>;
/**
 * This hook updates a Draft Order's details.
 *
 * @example
 * import React from "react"
 * import { useAdminUpdateDraftOrder } from "medusa-react"
 *
 * type Props = {
 *   draftOrderId: string
 * }
 *
 * const DraftOrder = ({ draftOrderId }: Props) => {
 *   const updateDraftOrder = useAdminUpdateDraftOrder(
 *     draftOrderId
 *   )
 *   // ...
 *
 *   const handleUpdate = (email: string) => {
 *     updateDraftOrder.mutate({
 *       email,
 *     }, {
 *       onSuccess: ({ draft_order }) => {
 *         console.log(draft_order.id)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default DraftOrder
 *
 * @customNamespace Hooks.Admin.Draft Orders
 * @category Mutations
 */
declare const useAdminUpdateDraftOrder: (id: string, options?: UseMutationOptions<Response<AdminDraftOrdersRes>, Error, AdminPostDraftOrdersDraftOrderReq>) => _tanstack_react_query.UseMutationResult<Response<AdminDraftOrdersRes>, Error, AdminPostDraftOrdersDraftOrderReq, unknown>;
/**
 * This hook deletes a Draft Order.
 *
 * @example
 * import React from "react"
 * import { useAdminDeleteDraftOrder } from "medusa-react"
 *
 * type Props = {
 *   draftOrderId: string
 * }
 *
 * const DraftOrder = ({ draftOrderId }: Props) => {
 *   const deleteDraftOrder = useAdminDeleteDraftOrder(
 *     draftOrderId
 *   )
 *   // ...
 *
 *   const handleDelete = () => {
 *     deleteDraftOrder.mutate(void 0, {
 *       onSuccess: ({ id, object, deleted }) => {
 *         console.log(id)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default DraftOrder
 *
 * @customNamespace Hooks.Admin.Draft Orders
 * @category Mutations
 */
declare const useAdminDeleteDraftOrder: (id: string, options?: UseMutationOptions<Response<AdminDraftOrdersDeleteRes>, Error, void>) => _tanstack_react_query.UseMutationResult<Response<_medusajs_medusa.DeleteResponse>, Error, void, unknown>;
/**
 * This hook capture the draft order's payment. This will also set the draft order's status to `completed` and create an order from the draft order. The payment is captured through Medusa's system payment,
 * which is manual payment that isn't integrated with any third-party payment provider. It is assumed that the payment capturing is handled manually by the admin.
 *
 * @example
 * import React from "react"
 * import { useAdminDraftOrderRegisterPayment } from "medusa-react"
 *
 * type Props = {
 *   draftOrderId: string
 * }
 *
 * const DraftOrder = ({ draftOrderId }: Props) => {
 *   const registerPayment = useAdminDraftOrderRegisterPayment(
 *     draftOrderId
 *   )
 *   // ...
 *
 *   const handlePayment = () => {
 *     registerPayment.mutate(void 0, {
 *       onSuccess: ({ order }) => {
 *         console.log(order.id)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default DraftOrder
 *
 * @customNamespace Hooks.Admin.Draft Orders
 * @category Mutations
 */
declare const useAdminDraftOrderRegisterPayment: (id: string, options?: UseMutationOptions<Response<AdminPostDraftOrdersDraftOrderRegisterPaymentRes>, Error, void>) => _tanstack_react_query.UseMutationResult<Response<AdminPostDraftOrdersDraftOrderRegisterPaymentRes>, Error, void, unknown>;
/**
 * This hook creates a Line Item in the Draft Order.
 *
 * @example
 * import React from "react"
 * import { useAdminDraftOrderAddLineItem } from "medusa-react"
 *
 * type Props = {
 *   draftOrderId: string
 * }
 *
 * const DraftOrder = ({ draftOrderId }: Props) => {
 *   const addLineItem = useAdminDraftOrderAddLineItem(
 *     draftOrderId
 *   )
 *   // ...
 *
 *   const handleAdd = (quantity: number) => {
 *     addLineItem.mutate({
 *       quantity,
 *     }, {
 *       onSuccess: ({ draft_order }) => {
 *         console.log(draft_order.cart)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default DraftOrder
 *
 * @customNamespace Hooks.Admin.Draft Orders
 * @category Mutations
 */
declare const useAdminDraftOrderAddLineItem: (id: string, options?: UseMutationOptions<Response<AdminDraftOrdersRes>, Error, AdminPostDraftOrdersDraftOrderLineItemsReq>) => _tanstack_react_query.UseMutationResult<Response<AdminDraftOrdersRes>, Error, AdminPostDraftOrdersDraftOrderLineItemsReq, unknown>;
/**
 * This hook deletes a Line Item from a Draft Order.
 *
 * @typeParamDefinition string - The ID of the line item to remove.
 *
 * @example
 * import React from "react"
 * import { useAdminDraftOrderRemoveLineItem } from "medusa-react"
 *
 * type Props = {
 *   draftOrderId: string
 * }
 *
 * const DraftOrder = ({ draftOrderId }: Props) => {
 *   const deleteLineItem = useAdminDraftOrderRemoveLineItem(
 *     draftOrderId
 *   )
 *   // ...
 *
 *   const handleDelete = (itemId: string) => {
 *     deleteLineItem.mutate(itemId, {
 *       onSuccess: ({ draft_order }) => {
 *         console.log(draft_order.cart)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default DraftOrder
 *
 * @customNamespace Hooks.Admin.Draft Orders
 * @category Mutations
 */
declare const useAdminDraftOrderRemoveLineItem: (id: string, options?: UseMutationOptions<Response<AdminDraftOrdersRes>, Error, string>) => _tanstack_react_query.UseMutationResult<Response<AdminDraftOrdersRes>, Error, string, unknown>;
/**
 * The details to update of the line item.
 */
type AdminDraftOrderUpdateLineItemReq = AdminPostDraftOrdersDraftOrderLineItemsItemReq & {
    /**
     * The line item's ID to update.
     */
    item_id: string;
};
/**
 * This hook updates a Line Item in a Draft Order.
 *
 * @example
 * import React from "react"
 * import { useAdminDraftOrderUpdateLineItem } from "medusa-react"
 *
 * type Props = {
 *   draftOrderId: string
 * }
 *
 * const DraftOrder = ({ draftOrderId }: Props) => {
 *   const updateLineItem = useAdminDraftOrderUpdateLineItem(
 *     draftOrderId
 *   )
 *   // ...
 *
 *   const handleUpdate = (
 *     itemId: string,
 *     quantity: number
 *   ) => {
 *     updateLineItem.mutate({
 *       item_id: itemId,
 *       quantity,
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default DraftOrder
 *
 * @customNamespace Hooks.Admin.Draft Orders
 * @category Mutations
 */
declare const useAdminDraftOrderUpdateLineItem: (id: string, options?: UseMutationOptions<Response<AdminDraftOrdersRes>, Error, AdminDraftOrderUpdateLineItemReq>) => _tanstack_react_query.UseMutationResult<Response<AdminDraftOrdersRes>, Error, AdminDraftOrderUpdateLineItemReq, unknown>;

declare const adminGiftCardKeys: TQueryKey<"admin_gift_cards", any, string>;
type GiftCardQueryKeys = typeof adminGiftCardKeys;
/**
 * This hook retrieves a list of gift cards. The gift cards can be filtered by fields such as `q` passed in the `query`
 * parameter. The gift cards can also paginated.
 *
 * @example
 * To list gift cards:
 *
 * ```tsx
 * import React from "react"
 * import { useAdminGiftCards } from "medusa-react"
 *
 * const CustomGiftCards = () => {
 *   const { gift_cards, isLoading } = useAdminGiftCards()
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {gift_cards && !gift_cards.length && (
 *         <span>No custom gift cards...</span>
 *       )}
 *       {gift_cards && gift_cards.length > 0 && (
 *         <ul>
 *           {gift_cards.map((giftCard) => (
 *             <li key={giftCard.id}>{giftCard.code}</li>
 *           ))}
 *         </ul>
 *       )}
 *     </div>
 *   )
 * }
 *
 * export default CustomGiftCards
 * ```
 *
 * By default, only the first `50` records are retrieved. You can control pagination by specifying the `limit` and `offset` properties:
 *
 * ```tsx
 * import React from "react"
 * import { useAdminGiftCards } from "medusa-react"
 *
 * const CustomGiftCards = () => {
 *   const {
 *     gift_cards,
 *     limit,
 *     offset,
 *     isLoading
 *   } = useAdminGiftCards({
 *     limit: 20,
 *     offset: 0
 *   })
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {gift_cards && !gift_cards.length && (
 *         <span>No custom gift cards...</span>
 *       )}
 *       {gift_cards && gift_cards.length > 0 && (
 *         <ul>
 *           {gift_cards.map((giftCard) => (
 *             <li key={giftCard.id}>{giftCard.code}</li>
 *           ))}
 *         </ul>
 *       )}
 *     </div>
 *   )
 * }
 *
 * export default CustomGiftCards
 * ```
 *
 * @customNamespace Hooks.Admin.Gift Cards
 * @category Queries
 */
declare const useAdminGiftCards: (query?: AdminGetGiftCardsParams, options?: UseQueryOptionsWrapper<Response<AdminGiftCardsListRes>, Error, ReturnType<GiftCardQueryKeys["list"]>>) => {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: true;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminGiftCardsListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly gift_cards?: _medusajs_medusa.GiftCard[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: true;
    readonly status: "success";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminGiftCardsListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly gift_cards?: _medusajs_medusa.GiftCard[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: true;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminGiftCardsListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly gift_cards?: _medusajs_medusa.GiftCard[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: true;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "loading";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminGiftCardsListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly gift_cards?: _medusajs_medusa.GiftCard[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
};
/**
 * This hook retrieves a gift card's details.
 *
 * @example
 * import React from "react"
 * import { useAdminGiftCard } from "medusa-react"
 *
 * type Props = {
 *   giftCardId: string
 * }
 *
 * const CustomGiftCard = ({ giftCardId }: Props) => {
 *   const { gift_card, isLoading } = useAdminGiftCard(giftCardId)
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {gift_card && <span>{gift_card.code}</span>}
 *     </div>
 *   )
 * }
 *
 * export default CustomGiftCard
 *
 * @customNamespace Hooks.Admin.Gift Cards
 * @category Queries
 */
declare const useAdminGiftCard: (id: string, options?: UseQueryOptionsWrapper<Response<AdminGiftCardsRes>, Error, ReturnType<GiftCardQueryKeys["detail"]>>) => {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: true;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminGiftCardsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly gift_card?: _medusajs_medusa.GiftCard | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: true;
    readonly status: "success";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminGiftCardsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly gift_card?: _medusajs_medusa.GiftCard | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: true;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminGiftCardsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly gift_card?: _medusajs_medusa.GiftCard | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: true;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "loading";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminGiftCardsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly gift_card?: _medusajs_medusa.GiftCard | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
};

/**
 * This hook creates a gift card that can redeemed by its unique code. The Gift Card is only valid within one region.
 *
 * @example
 * import React from "react"
 * import { useAdminCreateGiftCard } from "medusa-react"
 *
 * const CreateCustomGiftCards = () => {
 *   const createGiftCard = useAdminCreateGiftCard()
 *   // ...
 *
 *   const handleCreate = (
 *     regionId: string,
 *     value: number
 *   ) => {
 *     createGiftCard.mutate({
 *       region_id: regionId,
 *       value,
 *     }, {
 *       onSuccess: ({ gift_card }) => {
 *         console.log(gift_card.id)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default CreateCustomGiftCards
 *
 * @customNamespace Hooks.Admin.Gift Cards
 * @category Mutations
 */
declare const useAdminCreateGiftCard: (options?: UseMutationOptions<Response<AdminGiftCardsRes>, Error, AdminPostGiftCardsReq>) => _tanstack_react_query.UseMutationResult<Response<AdminGiftCardsRes>, Error, AdminPostGiftCardsReq, unknown>;
/**
 * This hook updates a gift card's details.
 *
 * @example
 * import React from "react"
 * import { useAdminUpdateGiftCard } from "medusa-react"
 *
 * type Props = {
 *   customGiftCardId: string
 * }
 *
 * const CustomGiftCard = ({ customGiftCardId }: Props) => {
 *   const updateGiftCard = useAdminUpdateGiftCard(
 *     customGiftCardId
 *   )
 *   // ...
 *
 *   const handleUpdate = (regionId: string) => {
 *     updateGiftCard.mutate({
 *       region_id: regionId,
 *     }, {
 *       onSuccess: ({ gift_card }) => {
 *         console.log(gift_card.id)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default CustomGiftCard
 *
 * @customNamespace Hooks.Admin.Gift Cards
 * @category Mutations
 */
declare const useAdminUpdateGiftCard: (id: string, options?: UseMutationOptions<Response<AdminGiftCardsRes>, Error, AdminPostGiftCardsGiftCardReq>) => _tanstack_react_query.UseMutationResult<Response<AdminGiftCardsRes>, Error, AdminPostGiftCardsGiftCardReq, unknown>;
/**
 * This hook deletes a gift card. Once deleted, it can't be used by customers.
 *
 * @example
 * import React from "react"
 * import { useAdminDeleteGiftCard } from "medusa-react"
 *
 * type Props = {
 *   customGiftCardId: string
 * }
 *
 * const CustomGiftCard = ({ customGiftCardId }: Props) => {
 *   const deleteGiftCard = useAdminDeleteGiftCard(
 *     customGiftCardId
 *   )
 *   // ...
 *
 *   const handleDelete = () => {
 *     deleteGiftCard.mutate(void 0, {
 *       onSuccess: ({ id, object, deleted}) => {
 *         console.log(id)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default CustomGiftCard
 *
 * @customNamespace Hooks.Admin.Gift Cards
 * @category Mutations
 */
declare const useAdminDeleteGiftCard: (id: string, options?: UseMutationOptions<Response<AdminGiftCardsDeleteRes>, Error, void>) => _tanstack_react_query.UseMutationResult<Response<_medusajs_medusa.DeleteResponse>, Error, void, unknown>;

declare const adminInventoryItemsKeys: TQueryKey<"admin_inventory_items", any, string>;
type InventoryItemsQueryKeys = typeof adminInventoryItemsKeys;
/**
 * This hook retrieves a list of inventory items. The inventory items can be filtered by fields such as `q` or `location_id` passed in the `query` parameter.
 * The inventory items can also be paginated.
 *
 * @example
 * To list inventory items:
 *
 * ```tsx
 * import React from "react"
 * import { useAdminInventoryItems } from "medusa-react"
 *
 * function InventoryItems() {
 *   const {
 *     inventory_items,
 *     isLoading
 *   } = useAdminInventoryItems()
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {inventory_items && !inventory_items.length && (
 *         <span>No Items</span>
 *       )}
 *       {inventory_items && inventory_items.length > 0 && (
 *         <ul>
 *           {inventory_items.map(
 *             (item) => (
 *               <li key={item.id}>{item.id}</li>
 *             )
 *           )}
 *         </ul>
 *       )}
 *     </div>
 *   )
 * }
 *
 * export default InventoryItems
 * ```
 *
 * By default, only the first `20` records are retrieved. You can control pagination by specifying the `limit` and `offset` properties:
 *
 * ```tsx
 * import React from "react"
 * import { useAdminInventoryItems } from "medusa-react"
 *
 * function InventoryItems() {
 *   const {
 *     inventory_items,
 *     limit,
 *     offset,
 *     isLoading
 *   } = useAdminInventoryItems({
 *     limit: 10,
 *     offset: 0
 *   })
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {inventory_items && !inventory_items.length && (
 *         <span>No Items</span>
 *       )}
 *       {inventory_items && inventory_items.length > 0 && (
 *         <ul>
 *           {inventory_items.map(
 *             (item) => (
 *               <li key={item.id}>{item.id}</li>
 *             )
 *           )}
 *         </ul>
 *       )}
 *     </div>
 *   )
 * }
 *
 * export default InventoryItems
 * ```
 *
 * @customNamespace Hooks.Admin.Inventory Items
 * @category Queries
 */
declare const useAdminInventoryItems: (query?: AdminGetInventoryItemsParams, options?: UseQueryOptionsWrapper<Response<AdminInventoryItemsListWithVariantsAndLocationLevelsRes>, Error, ReturnType<InventoryItemsQueryKeys["list"]>>) => {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: true;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminInventoryItemsListWithVariantsAndLocationLevelsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly inventory_items?: _medusajs_medusa.DecoratedInventoryItemDTO[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: true;
    readonly status: "success";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminInventoryItemsListWithVariantsAndLocationLevelsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly inventory_items?: _medusajs_medusa.DecoratedInventoryItemDTO[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: true;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminInventoryItemsListWithVariantsAndLocationLevelsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly inventory_items?: _medusajs_medusa.DecoratedInventoryItemDTO[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: true;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "loading";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminInventoryItemsListWithVariantsAndLocationLevelsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly inventory_items?: _medusajs_medusa.DecoratedInventoryItemDTO[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
};
/**
 * This hook retrieves an Inventory Item's details.
 *
 * @example
 * import React from "react"
 * import { useAdminInventoryItem } from "medusa-react"
 *
 * type Props = {
 *   inventoryItemId: string
 * }
 *
 * const InventoryItem = ({ inventoryItemId }: Props) => {
 *   const {
 *     inventory_item,
 *     isLoading
 *   } = useAdminInventoryItem(inventoryItemId)
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {inventory_item && (
 *         <span>{inventory_item.sku}</span>
 *       )}
 *     </div>
 *   )
 * }
 *
 * export default InventoryItem
 *
 * @customNamespace Hooks.Admin.Inventory Items
 * @category Queries
 */
declare const useAdminInventoryItem: (inventoryItemId: string, query?: AdminGetStockLocationsParams, options?: UseQueryOptionsWrapper<Response<AdminInventoryItemsRes>, Error, ReturnType<InventoryItemsQueryKeys["detail"]>>) => {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: true;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminInventoryItemsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly inventory_item?: _medusajs_types.InventoryItemDTO | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: true;
    readonly status: "success";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminInventoryItemsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly inventory_item?: _medusajs_types.InventoryItemDTO | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: true;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminInventoryItemsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly inventory_item?: _medusajs_types.InventoryItemDTO | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: true;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "loading";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminInventoryItemsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly inventory_item?: _medusajs_types.InventoryItemDTO | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
};
/**
 * This hook retrieves a list of inventory levels of an inventory item. The inventory levels can be filtered by fields
 * such as `location_id` passed in the `query` parameter.
 *
 * @example
 * import React from "react"
 * import {
 *   useAdminInventoryItemLocationLevels,
 * } from "medusa-react"
 *
 * type Props = {
 *   inventoryItemId: string
 * }
 *
 * const InventoryItem = ({ inventoryItemId }: Props) => {
 *   const {
 *     inventory_item,
 *     isLoading,
 *   } = useAdminInventoryItemLocationLevels(inventoryItemId)
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {inventory_item && (
 *         <ul>
 *           {inventory_item.location_levels.map((level) => (
 *             <span key={level.id}>{level.stocked_quantity}</span>
 *           ))}
 *         </ul>
 *       )}
 *     </div>
 *   )
 * }
 *
 * export default InventoryItem
 *
 * @customNamespace Hooks.Admin.Inventory Items
 * @category Queries
 */
declare const useAdminInventoryItemLocationLevels: (inventoryItemId: string, query?: AdminGetInventoryItemsItemLocationLevelsParams, options?: UseQueryOptionsWrapper<Response<AdminInventoryItemsLocationLevelsRes>, Error, ReturnType<InventoryItemsQueryKeys["detail"]>>) => {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: true;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminInventoryItemsLocationLevelsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly inventory_item?: {
        id: any;
        location_levels: _medusajs_types.InventoryLevelDTO[];
    } | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: true;
    readonly status: "success";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminInventoryItemsLocationLevelsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly inventory_item?: {
        id: any;
        location_levels: _medusajs_types.InventoryLevelDTO[];
    } | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: true;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminInventoryItemsLocationLevelsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly inventory_item?: {
        id: any;
        location_levels: _medusajs_types.InventoryLevelDTO[];
    } | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: true;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "loading";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminInventoryItemsLocationLevelsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly inventory_item?: {
        id: any;
        location_levels: _medusajs_types.InventoryLevelDTO[];
    } | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
};

/**
 * This hook creates an Inventory Item for a product variant.
 *
 * @example
 * import React from "react"
 * import { useAdminCreateInventoryItem } from "medusa-react"
 *
 * const CreateInventoryItem = () => {
 *   const createInventoryItem = useAdminCreateInventoryItem()
 *   // ...
 *
 *   const handleCreate = (variantId: string) => {
 *     createInventoryItem.mutate({
 *       variant_id: variantId,
 *     }, {
 *       onSuccess: ({ inventory_item }) => {
 *         console.log(inventory_item.id)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default CreateInventoryItem
 *
 * @customNamespace Hooks.Admin.Inventory Items
 * @category Mutations
 */
declare const useAdminCreateInventoryItem: (options?: UseMutationOptions<Response<AdminInventoryItemsRes>, Error, AdminPostInventoryItemsReq>) => _tanstack_react_query.UseMutationResult<Response<AdminInventoryItemsRes>, Error, AdminPostInventoryItemsReq, unknown>;
/**
 * This hook updates an Inventory Item's details.
 *
 * @example
 * import React from "react"
 * import { useAdminUpdateInventoryItem } from "medusa-react"
 *
 * type Props = {
 *   inventoryItemId: string
 * }
 *
 * const InventoryItem = ({ inventoryItemId }: Props) => {
 *   const updateInventoryItem = useAdminUpdateInventoryItem(
 *     inventoryItemId
 *   )
 *   // ...
 *
 *   const handleUpdate = (origin_country: string) => {
 *     updateInventoryItem.mutate({
 *       origin_country,
 *     }, {
 *       onSuccess: ({ inventory_item }) => {
 *         console.log(inventory_item.origin_country)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default InventoryItem
 *
 * @customNamespace Hooks.Admin.Inventory Items
 * @category Mutations
 */
declare const useAdminUpdateInventoryItem: (inventoryItemId: string, options?: UseMutationOptions<Response<AdminInventoryItemsRes>, Error, AdminPostInventoryItemsInventoryItemReq>) => _tanstack_react_query.UseMutationResult<Response<AdminInventoryItemsRes>, Error, AdminPostInventoryItemsInventoryItemReq, unknown>;
/**
 * This hook deletes an Inventory Item. This does not delete the associated product variant.
 *
 * @example
 * import React from "react"
 * import { useAdminDeleteInventoryItem } from "medusa-react"
 *
 * type Props = {
 *   inventoryItemId: string
 * }
 *
 * const InventoryItem = ({ inventoryItemId }: Props) => {
 *   const deleteInventoryItem = useAdminDeleteInventoryItem(
 *     inventoryItemId
 *   )
 *   // ...
 *
 *   const handleDelete = () => {
 *     deleteInventoryItem.mutate()
 *   }
 *
 *   // ...
 * }
 *
 * export default InventoryItem
 *
 * @customNamespace Hooks.Admin.Inventory Items
 * @category Mutations
 */
declare const useAdminDeleteInventoryItem: (inventoryItemId: string, options?: UseMutationOptions<Response<AdminInventoryItemsDeleteRes>, Error, void>) => _tanstack_react_query.UseMutationResult<Response<_medusajs_medusa.DeleteResponse>, Error, void, unknown>;
type AdminUpdateLocationLevelReq = AdminPostInventoryItemsItemLocationLevelsLevelReq & {
    /**
     * The ID of the location level to update.
     */
    stockLocationId: string;
};
/**
 * This hook updates a location level's details for a given inventory item.
 *
 * @example
 * import React from "react"
 * import { useAdminUpdateLocationLevel } from "medusa-react"
 *
 * type Props = {
 *   inventoryItemId: string
 * }
 *
 * const InventoryItem = ({ inventoryItemId }: Props) => {
 *   const updateLocationLevel = useAdminUpdateLocationLevel(
 *     inventoryItemId
 *   )
 *   // ...
 *
 *   const handleUpdate = (
 *     stockLocationId: string,
 *     stockedQuantity: number
 *   ) => {
 *     updateLocationLevel.mutate({
 *       stockLocationId,
 *       stocked_quantity: stockedQuantity,
 *     }, {
 *       onSuccess: ({ inventory_item }) => {
 *         console.log(inventory_item.id)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default InventoryItem
 *
 * @customNamespace Hooks.Admin.Inventory Items
 * @category Mutations
 */
declare const useAdminUpdateLocationLevel: (inventoryItemId: string, options?: UseMutationOptions<Response<AdminInventoryItemsRes>, Error, AdminUpdateLocationLevelReq>) => _tanstack_react_query.UseMutationResult<Response<AdminInventoryItemsRes>, Error, AdminUpdateLocationLevelReq, unknown>;
/**
 * This hook deletes a location level of an Inventory Item.
 *
 * @typeParamDefinition string - The ID of the location level to delete.
 *
 * @example
 * import React from "react"
 * import { useAdminDeleteLocationLevel } from "medusa-react"
 *
 * type Props = {
 *   inventoryItemId: string
 * }
 *
 * const InventoryItem = ({ inventoryItemId }: Props) => {
 *   const deleteLocationLevel = useAdminDeleteLocationLevel(
 *     inventoryItemId
 *   )
 *   // ...
 *
 *   const handleDelete = (
 *     locationId: string
 *   ) => {
 *     deleteLocationLevel.mutate(locationId)
 *   }
 *
 *   // ...
 * }
 *
 * export default InventoryItem
 *
 * @customNamespace Hooks.Admin.Inventory Items
 * @category Mutations
 */
declare const useAdminDeleteLocationLevel: (inventoryItemId: string, options?: UseMutationOptions<Response<AdminInventoryItemsRes>, Error, string>) => _tanstack_react_query.UseMutationResult<Response<AdminInventoryItemsRes>, Error, string, unknown>;
/**
 * This hook creates a Location Level for a given Inventory Item.
 *
 * @example
 * import React from "react"
 * import { useAdminCreateLocationLevel } from "medusa-react"
 *
 * type Props = {
 *   inventoryItemId: string
 * }
 *
 * const InventoryItem = ({ inventoryItemId }: Props) => {
 *   const createLocationLevel = useAdminCreateLocationLevel(
 *     inventoryItemId
 *   )
 *   // ...
 *
 *   const handleCreateLocationLevel = (
 *     locationId: string,
 *     stockedQuantity: number
 *   ) => {
 *     createLocationLevel.mutate({
 *       location_id: locationId,
 *       stocked_quantity: stockedQuantity,
 *     }, {
 *       onSuccess: ({ inventory_item }) => {
 *         console.log(inventory_item.id)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default InventoryItem
 *
 * @customNamespace Hooks.Admin.Inventory Items
 * @category Mutations
 */
declare const useAdminCreateLocationLevel: (inventoryItemId: string, options?: UseMutationOptions<Response<AdminInventoryItemsRes>, Error, AdminPostInventoryItemsItemLocationLevelsReq>) => _tanstack_react_query.UseMutationResult<Response<AdminInventoryItemsRes>, Error, AdminPostInventoryItemsItemLocationLevelsReq, unknown>;

declare const adminInviteKeys: TQueryKey<"admin_invites", any, string>;
type InviteQueryKeys = typeof adminInviteKeys;
/**
 * This hook retrieves a list of invites.
 *
 * @example
 * import React from "react"
 * import { useAdminInvites } from "medusa-react"
 *
 * const Invites = () => {
 *   const { invites, isLoading } = useAdminInvites()
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {invites && !invites.length && (
 *         <span>No Invites</span>)
 *       }
 *       {invites && invites.length > 0 && (
 *         <ul>
 *           {invites.map((invite) => (
 *             <li key={invite.id}>{invite.user_email}</li>
 *           ))}
 *         </ul>
 *       )}
 *     </div>
 *   )
 * }
 *
 * export default Invites
 *
 * @customNamespace Hooks.Admin.Invites
 * @category Queries
 */
declare const useAdminInvites: (options?: UseQueryOptionsWrapper<Response<AdminListInvitesRes>, Error, ReturnType<InviteQueryKeys["lists"]>>) => {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: true;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminListInvitesRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly invites?: _medusajs_medusa.Invite[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: true;
    readonly status: "success";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminListInvitesRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly invites?: _medusajs_medusa.Invite[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: true;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminListInvitesRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly invites?: _medusajs_medusa.Invite[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: true;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "loading";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminListInvitesRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly invites?: _medusajs_medusa.Invite[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
};

/**
 * This hook accepts an Invite. This will also delete the invite and create a new user that can log in and perform admin functionalities.
 * The user will have the email associated with the invite, and the password provided in the mutation function's parameter.
 *
 * @example
 * import React from "react"
 * import { useAdminAcceptInvite } from "medusa-react"
 *
 * const AcceptInvite = () => {
 *   const acceptInvite = useAdminAcceptInvite()
 *   // ...
 *
 *   const handleAccept = (
 *     token: string,
 *     firstName: string,
 *     lastName: string,
 *     password: string
 *   ) => {
 *     acceptInvite.mutate({
 *       token,
 *       user: {
 *         first_name: firstName,
 *         last_name: lastName,
 *         password,
 *       },
 *     }, {
 *       onSuccess: () => {
 *         // invite accepted successfully.
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default AcceptInvite
 *
 * @customNamespace Hooks.Admin.Invites
 * @category Mutations
 */
declare const useAdminAcceptInvite: (options?: UseMutationOptions<Response<void>, Error, AdminPostInvitesInviteAcceptReq>) => _tanstack_react_query.UseMutationResult<Response<void>, Error, AdminPostInvitesInviteAcceptReq, unknown>;
/**
 * This hook resends an invite. This renews the expiry date by seven days and generates a new token for the invite. It also triggers the `invite.created` event,
 * so if you have a Notification Provider installed that handles this event, a notification should be sent to the email associated with the
 * invite to allow them to accept the invite.
 *
 * @example
 * import React from "react"
 * import { useAdminResendInvite } from "medusa-react"
 *
 * type Props = {
 *   inviteId: string
 * }
 *
 * const ResendInvite = ({ inviteId }: Props) => {
 *   const resendInvite = useAdminResendInvite(inviteId)
 *   // ...
 *
 *   const handleResend = () => {
 *     resendInvite.mutate(void 0, {
 *       onSuccess: () => {
 *         // invite resent successfully
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default ResendInvite
 *
 * @customNamespace Hooks.Admin.Invites
 * @category Mutations
 */
declare const useAdminResendInvite: (id: string, options?: UseMutationOptions) => _tanstack_react_query.UseMutationResult<any, unknown, void, unknown>;
declare const useAdminCreateInvite: (options?: UseMutationOptions<Response<void>, Error, AdminPostInvitesPayload>) => _tanstack_react_query.UseMutationResult<Response<void>, Error, AdminPostInvitesPayload, unknown>;
/**
 * This hook deletes an invite. Only invites that weren't accepted can be deleted.
 *
 * @example
 * import React from "react"
 * import { useAdminDeleteInvite } from "medusa-react"
 *
 * type Props = {
 *   inviteId: string
 * }
 *
 * const DeleteInvite = ({ inviteId }: Props) => {
 *   const deleteInvite = useAdminDeleteInvite(inviteId)
 *   // ...
 *
 *   const handleDelete = () => {
 *     deleteInvite.mutate(void 0, {
 *       onSuccess: ({ id, object, deleted }) => {
 *         console.log(id)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default Invite
 *
 * @customNamespace Hooks.Admin.Invites
 * @category Mutations
 */
declare const useAdminDeleteInvite: (id: string, options?: UseMutationOptions<Response<AdminInviteDeleteRes>, Error, void>) => _tanstack_react_query.UseMutationResult<Response<_medusajs_medusa.DeleteResponse>, Error, void, unknown>;

declare const adminNoteKeys: TQueryKey<"admin_notes", any, string>;
type NoteQueryKeys = typeof adminNoteKeys;
/**
 * This hook retrieves a list of notes. The notes can be filtered by fields such as `resource_id` passed in
 * the `query` parameter. The notes can also be paginated.
 *
 * @example
 * To list notes:
 *
 * ```tsx
 * import React from "react"
 * import { useAdminNotes } from "medusa-react"
 *
 * const Notes = () => {
 *   const { notes, isLoading } = useAdminNotes()
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {notes && !notes.length && <span>No Notes</span>}
 *       {notes && notes.length > 0 && (
 *         <ul>
 *           {notes.map((note) => (
 *             <li key={note.id}>{note.resource_type}</li>
 *           ))}
 *         </ul>
 *       )}
 *     </div>
 *   )
 * }
 *
 * export default Notes
 * ```
 *
 * By default, only the first `50` records are retrieved. You can control pagination by specifying the `limit` and `offset` properties:
 *
 * ```tsx
 * import React from "react"
 * import { useAdminNotes } from "medusa-react"
 *
 * const Notes = () => {
 *   const {
 *     notes,
 *     limit,
 *     offset,
 *     isLoading
 *   } = useAdminNotes({
 *     limit: 40,
 *     offset: 0
 *   })
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {notes && !notes.length && <span>No Notes</span>}
 *       {notes && notes.length > 0 && (
 *         <ul>
 *           {notes.map((note) => (
 *             <li key={note.id}>{note.resource_type}</li>
 *           ))}
 *         </ul>
 *       )}
 *     </div>
 *   )
 * }
 *
 * export default Notes
 * ```
 *
 * @customNamespace Hooks.Admin.Notes
 * @category Queries
 */
declare const useAdminNotes: (query?: AdminGetNotesParams, options?: UseQueryOptionsWrapper<Response<AdminNotesListRes>, Error, ReturnType<NoteQueryKeys["list"]>>) => {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: true;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminNotesListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly notes?: _medusajs_medusa.Note[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: true;
    readonly status: "success";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminNotesListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly notes?: _medusajs_medusa.Note[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: true;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminNotesListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly notes?: _medusajs_medusa.Note[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: true;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "loading";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminNotesListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly notes?: _medusajs_medusa.Note[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
};
/**
 * This hook retrieves a note's details.
 *
 * @example
 * import React from "react"
 * import { useAdminNote } from "medusa-react"
 *
 * type Props = {
 *   noteId: string
 * }
 *
 * const Note = ({ noteId }: Props) => {
 *   const { note, isLoading } = useAdminNote(noteId)
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {note && <span>{note.resource_type}</span>}
 *     </div>
 *   )
 * }
 *
 * export default Note
 *
 * @customNamespace Hooks.Admin.Notes
 * @category Queries
 */
declare const useAdminNote: (id: string, options?: UseQueryOptionsWrapper<Response<AdminNotesRes>, Error, ReturnType<NoteQueryKeys["detail"]>>) => {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: true;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminNotesRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly note?: _medusajs_medusa.Note | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: true;
    readonly status: "success";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminNotesRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly note?: _medusajs_medusa.Note | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: true;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminNotesRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly note?: _medusajs_medusa.Note | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: true;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "loading";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminNotesRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly note?: _medusajs_medusa.Note | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
};

/**
 * This hook creates a Note which can be associated with any resource.
 *
 * @example
 * import React from "react"
 * import { useAdminCreateNote } from "medusa-react"
 *
 * const CreateNote = () => {
 *   const createNote = useAdminCreateNote()
 *   // ...
 *
 *   const handleCreate = () => {
 *     createNote.mutate({
 *       resource_id: "order_123",
 *       resource_type: "order",
 *       value: "We delivered this order"
 *     }, {
 *       onSuccess: ({ note }) => {
 *         console.log(note.id)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default CreateNote
 *
 * @customNamespace Hooks.Admin.Notes
 * @category Mutations
 */
declare const useAdminCreateNote: (options?: UseMutationOptions<Response<AdminNotesRes>, Error, AdminPostNotesReq>) => _tanstack_react_query.UseMutationResult<Response<AdminNotesRes>, Error, AdminPostNotesReq, unknown>;
/**
 * This hook updates a Note's details.
 *
 * @example
 * import React from "react"
 * import { useAdminUpdateNote } from "medusa-react"
 *
 * type Props = {
 *   noteId: string
 * }
 *
 * const Note = ({ noteId }: Props) => {
 *   const updateNote = useAdminUpdateNote(noteId)
 *   // ...
 *
 *   const handleUpdate = (
 *     value: string
 *   ) => {
 *     updateNote.mutate({
 *       value
 *     }, {
 *       onSuccess: ({ note }) => {
 *         console.log(note.value)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default Note
 *
 * @customNamespace Hooks.Admin.Notes
 * @category Mutations
 */
declare const useAdminUpdateNote: (id: string, options?: UseMutationOptions<Response<AdminNotesRes>, Error, AdminPostNotesNoteReq>) => _tanstack_react_query.UseMutationResult<Response<AdminNotesRes>, Error, AdminPostNotesNoteReq, unknown>;
/**
 * This hook deletes a Note.
 *
 * @example
 * import React from "react"
 * import { useAdminDeleteNote } from "medusa-react"
 *
 * type Props = {
 *   noteId: string
 * }
 *
 * const Note = ({ noteId }: Props) => {
 *   const deleteNote = useAdminDeleteNote(noteId)
 *   // ...
 *
 *   const handleDelete = () => {
 *     deleteNote.mutate()
 *   }
 *
 *   // ...
 * }
 *
 * export default Note
 *
 * @customNamespace Hooks.Admin.Notes
 * @category Mutations
 */
declare const useAdminDeleteNote: (id: string, options?: UseMutationOptions<Response<AdminNotesDeleteRes>, Error, void>) => _tanstack_react_query.UseMutationResult<Response<_medusajs_medusa.DeleteResponse>, Error, void, unknown>;

declare const adminNotificationKeys: TQueryKey<"admin_notifications", any, string>;
type NotificationQueryKeys = typeof adminNotificationKeys;
/**
 * This hook retrieves a list of notifications. The notifications can be filtered by fields such as `event_name` or `resource_type` passed in the `query` parameter.
 * The notifications can also be paginated.
 *
 * @example
 * To list notifications:
 *
 * ```tsx
 * import React from "react"
 * import { useAdminNotifications } from "medusa-react"
 *
 * const Notifications = () => {
 *   const { notifications, isLoading } = useAdminNotifications()
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {notifications && !notifications.length && (
 *         <span>No Notifications</span>
 *       )}
 *       {notifications && notifications.length > 0 && (
 *         <ul>
 *           {notifications.map((notification) => (
 *             <li key={notification.id}>{notification.to}</li>
 *           ))}
 *         </ul>
 *       )}
 *     </div>
 *   )
 * }
 *
 * export default Notifications
 * ```
 *
 * To specify relations that should be retrieved within the notifications:
 *
 * ```tsx
 * import React from "react"
 * import { useAdminNotifications } from "medusa-react"
 *
 * const Notifications = () => {
 *   const { notifications, isLoading } = useAdminNotifications({
 *     expand: "provider"
 *   })
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {notifications && !notifications.length && (
 *         <span>No Notifications</span>
 *       )}
 *       {notifications && notifications.length > 0 && (
 *         <ul>
 *           {notifications.map((notification) => (
 *             <li key={notification.id}>{notification.to}</li>
 *           ))}
 *         </ul>
 *       )}
 *     </div>
 *   )
 * }
 *
 * export default Notifications
 * ```
 *
 * By default, only the first `50` records are retrieved. You can control pagination by specifying the `limit` and `offset` properties:
 *
 * ```tsx
 * import React from "react"
 * import { useAdminNotifications } from "medusa-react"
 *
 * const Notifications = () => {
 *   const {
 *     notifications,
 *     limit,
 *     offset,
 *     isLoading
 *   } = useAdminNotifications({
 *     expand: "provider",
 *     limit: 20,
 *     offset: 0
 *   })
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {notifications && !notifications.length && (
 *         <span>No Notifications</span>
 *       )}
 *       {notifications && notifications.length > 0 && (
 *         <ul>
 *           {notifications.map((notification) => (
 *             <li key={notification.id}>{notification.to}</li>
 *           ))}
 *         </ul>
 *       )}
 *     </div>
 *   )
 * }
 *
 * export default Notifications
 * ```
 *
 * @customNamespace Hooks.Admin.Notifications
 * @category Queries
 */
declare const useAdminNotifications: (query?: AdminGetNotificationsParams, options?: UseQueryOptionsWrapper<Response<AdminNotificationsListRes>, Error, ReturnType<NotificationQueryKeys["list"]>>) => {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: true;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminNotificationsListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly notifications?: _medusajs_medusa.Notification[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: true;
    readonly status: "success";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminNotificationsListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly notifications?: _medusajs_medusa.Notification[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: true;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminNotificationsListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly notifications?: _medusajs_medusa.Notification[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: true;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "loading";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminNotificationsListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly notifications?: _medusajs_medusa.Notification[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
};

/**
 * This hook resends a previously sent notifications, with the same data but optionally to a different address.
 *
 * @example
 * import React from "react"
 * import { useAdminResendNotification } from "medusa-react"
 *
 * type Props = {
 *   notificationId: string
 * }
 *
 * const Notification = ({ notificationId }: Props) => {
 *   const resendNotification = useAdminResendNotification(
 *     notificationId
 *   )
 *   // ...
 *
 *   const handleResend = () => {
 *     resendNotification.mutate({}, {
 *       onSuccess: ({ notification }) => {
 *         console.log(notification.id)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default Notification
 *
 * @customNamespace Hooks.Admin.Notifications
 * @category Mutations
 */
declare const useAdminResendNotification: (id: string, options?: UseMutationOptions<Response<AdminNotificationsRes>, Error, AdminPostNotificationsNotificationResendReq>) => _tanstack_react_query.UseMutationResult<Response<AdminNotificationsRes>, Error, AdminPostNotificationsNotificationResendReq, unknown>;

declare const adminOrderEditsKeys: TQueryKey<"admin_order_edits", any, string>;
type OrderEditQueryKeys = typeof adminOrderEditsKeys;
/**
 * This hook retrieves an order edit's details.
 *
 * @example
 * A simple example that retrieves an order edit by its ID:
 *
 * ```tsx
 * import React from "react"
 * import { useAdminOrderEdit } from "medusa-react"
 *
 * type Props = {
 *   orderEditId: string
 * }
 *
 * const OrderEdit = ({ orderEditId }: Props) => {
 *   const {
 *     order_edit,
 *     isLoading,
 *   } = useAdminOrderEdit(orderEditId)
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {order_edit && <span>{order_edit.status}</span>}
 *     </div>
 *   )
 * }
 *
 * export default OrderEdit
 * ```
 *
 * To specify relations that should be retrieved:
 *
 * ```tsx
 * import React from "react"
 * import { useAdminOrderEdit } from "medusa-react"
 *
 * type Props = {
 *   orderEditId: string
 * }
 *
 * const OrderEdit = ({ orderEditId }: Props) => {
 *   const {
 *     order_edit,
 *     isLoading,
 *   } = useAdminOrderEdit(
 *     orderEditId,
 *     {
 *       expand: "order"
 *     }
 *   )
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {order_edit && <span>{order_edit.status}</span>}
 *     </div>
 *   )
 * }
 *
 * export default OrderEdit
 * ```
 *
 * @customNamespace Hooks.Admin.Order Edits
 * @category Queries
 */
declare const useAdminOrderEdit: (id: string, query?: GetOrderEditsOrderEditParams, options?: UseQueryOptionsWrapper<Response<AdminOrderEditsRes>, Error, ReturnType<OrderEditQueryKeys["detail"]>>) => {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: true;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminOrderEditsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly order_edit?: _medusajs_medusa.OrderEdit | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: true;
    readonly status: "success";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminOrderEditsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly order_edit?: _medusajs_medusa.OrderEdit | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: true;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminOrderEditsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly order_edit?: _medusajs_medusa.OrderEdit | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: true;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "loading";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminOrderEditsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly order_edit?: _medusajs_medusa.OrderEdit | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
};
/**
 * This hook retrieves a list of order edits. The order edits can be filtered by fields such as `q` or `order_id` passed to the `query` parameter.
 * The order edits can also be paginated.
 *
 * @example
 * To list order edits:
 *
 * ```tsx
 * import React from "react"
 * import { useAdminOrderEdits } from "medusa-react"
 *
 * const OrderEdits = () => {
 *   const { order_edits, isLoading } = useAdminOrderEdits()
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {order_edits && !order_edits.length && (
 *         <span>No Order Edits</span>
 *       )}
 *       {order_edits && order_edits.length > 0 && (
 *         <ul>
 *           {order_edits.map((orderEdit) => (
 *             <li key={orderEdit.id}>
 *               {orderEdit.status}
 *             </li>
 *           ))}
 *         </ul>
 *       )}
 *     </div>
 *   )
 * }
 *
 * export default OrderEdits
 * ```
 *
 * To specify relations that should be retrieved within the order edits:
 *
 * ```tsx
 * import React from "react"
 * import { useAdminOrderEdits } from "medusa-react"
 *
 * const OrderEdits = () => {
 *   const { order_edits, isLoading } = useAdminOrderEdits({
 *     expand: "order"
 *   })
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {order_edits && !order_edits.length && (
 *         <span>No Order Edits</span>
 *       )}
 *       {order_edits && order_edits.length > 0 && (
 *         <ul>
 *           {order_edits.map((orderEdit) => (
 *             <li key={orderEdit.id}>
 *               {orderEdit.status}
 *             </li>
 *           ))}
 *         </ul>
 *       )}
 *     </div>
 *   )
 * }
 *
 * export default OrderEdits
 * ```
 *
 * By default, only the first `50` records are retrieved. You can control pagination by specifying the `limit` and `offset` properties:
 *
 * ```tsx
 * import React from "react"
 * import { useAdminOrderEdits } from "medusa-react"
 *
 * const OrderEdits = () => {
 *   const {
 *     order_edits,
 *     limit,
 *     offset,
 *     isLoading
 *   } = useAdminOrderEdits({
 *     expand: "order",
 *     limit: 20,
 *     offset: 0
 *   })
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {order_edits && !order_edits.length && (
 *         <span>No Order Edits</span>
 *       )}
 *       {order_edits && order_edits.length > 0 && (
 *         <ul>
 *           {order_edits.map((orderEdit) => (
 *             <li key={orderEdit.id}>
 *               {orderEdit.status}
 *             </li>
 *           ))}
 *         </ul>
 *       )}
 *     </div>
 *   )
 * }
 *
 * export default OrderEdits
 * ```
 *
 * @customNamespace Hooks.Admin.Order Edits
 * @category Queries
 */
declare const useAdminOrderEdits: (query?: GetOrderEditsParams, options?: UseQueryOptionsWrapper<Response<AdminOrderEditsListRes>, Error, ReturnType<OrderEditQueryKeys["list"]>>) => {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: true;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminOrderEditsListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly order_edits?: _medusajs_medusa.OrderEdit[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: true;
    readonly status: "success";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminOrderEditsListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly order_edits?: _medusajs_medusa.OrderEdit[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: true;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminOrderEditsListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly order_edits?: _medusajs_medusa.OrderEdit[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: true;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "loading";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminOrderEditsListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly order_edits?: _medusajs_medusa.OrderEdit[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
};

/**
 * This hook creates an order edit.
 *
 * @example
 * import React from "react"
 * import { useAdminCreateOrderEdit } from "medusa-react"
 *
 * const CreateOrderEdit = () => {
 *   const createOrderEdit = useAdminCreateOrderEdit()
 *
 *   const handleCreateOrderEdit = (orderId: string) => {
 *     createOrderEdit.mutate({
 *       order_id: orderId,
 *     }, {
 *       onSuccess: ({ order_edit }) => {
 *         console.log(order_edit.id)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default CreateOrderEdit
 *
 * @customNamespace Hooks.Admin.Order Edits
 * @category Mutations
 */
declare const useAdminCreateOrderEdit: (options?: UseMutationOptions<Response<AdminOrderEditsRes>, Error, AdminPostOrderEditsReq>) => _tanstack_react_query.UseMutationResult<Response<AdminOrderEditsRes>, Error, AdminPostOrderEditsReq, unknown>;
/**
 * This hook deletes an order edit. Only order edits that have the status `created` can be deleted.
 *
 * @example
 * import React from "react"
 * import { useAdminDeleteOrderEdit } from "medusa-react"
 *
 * type Props = {
 *   orderEditId: string
 * }
 *
 * const OrderEdit = ({ orderEditId }: Props) => {
 *   const deleteOrderEdit = useAdminDeleteOrderEdit(
 *     orderEditId
 *   )
 *
 *   const handleDelete = () => {
 *     deleteOrderEdit.mutate(void 0, {
 *       onSuccess: ({ id, object, deleted }) => {
 *         console.log(id)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default OrderEdit
 *
 * @customNamespace Hooks.Admin.Order Edits
 * @category Mutations
 */
declare const useAdminDeleteOrderEdit: (id: string, options?: UseMutationOptions<Response<AdminOrderEditDeleteRes>, Error, void>) => _tanstack_react_query.UseMutationResult<Response<_medusajs_medusa.DeleteResponse>, Error, void, unknown>;
/**
 * This hook deletes a line item change that indicates the addition, deletion, or update of a line item in the original order.
 *
 * @example
 * import React from "react"
 * import { useAdminDeleteOrderEditItemChange } from "medusa-react"
 *
 * type Props = {
 *   orderEditId: string
 *   itemChangeId: string
 * }
 *
 * const OrderEditItemChange = ({
 *   orderEditId,
 *   itemChangeId
 * }: Props) => {
 *   const deleteItemChange = useAdminDeleteOrderEditItemChange(
 *     orderEditId,
 *     itemChangeId
 *   )
 *
 *   const handleDeleteItemChange = () => {
 *     deleteItemChange.mutate(void 0, {
 *       onSuccess: ({ id, object, deleted }) => {
 *         console.log(id)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default OrderEditItemChange
 *
 * @customNamespace Hooks.Admin.Order Edits
 * @category Mutations
 */
declare const useAdminDeleteOrderEditItemChange: (orderEditId: string, itemChangeId: string, options?: UseMutationOptions<Response<AdminOrderEditItemChangeDeleteRes>, Error, void>) => _tanstack_react_query.UseMutationResult<Response<AdminOrderEditItemChangeDeleteRes>, Error, void, unknown>;
/**
 * This hook creates or updates a line item change in the order edit that indicates addition, deletion, or update of a line item
 * into an original order. Line item changes are only reflected on the original order after the order edit is confirmed.
 *
 * @example
 * import React from "react"
 * import { useAdminOrderEditUpdateLineItem } from "medusa-react"
 *
 * type Props = {
 *   orderEditId: string
 *   itemId: string
 * }
 *
 * const OrderEditItemChange = ({
 *   orderEditId,
 *   itemId
 * }: Props) => {
 *   const updateLineItem = useAdminOrderEditUpdateLineItem(
 *     orderEditId,
 *     itemId
 *   )
 *
 *   const handleUpdateLineItem = (quantity: number) => {
 *     updateLineItem.mutate({
 *       quantity,
 *     }, {
 *       onSuccess: ({ order_edit }) => {
 *         console.log(order_edit.items)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default OrderEditItemChange
 *
 * @customNamespace Hooks.Admin.Order Edits
 * @category Mutations
 */
declare const useAdminOrderEditUpdateLineItem: (orderEditId: string, itemId: string, options?: UseMutationOptions<Response<AdminOrderEditsRes>, Error, AdminPostOrderEditsEditLineItemsLineItemReq>) => _tanstack_react_query.UseMutationResult<Response<AdminOrderEditsRes>, Error, AdminPostOrderEditsEditLineItemsLineItemReq, unknown>;
/**
 * This hook creates a line item change in the order edit that indicates deleting an item in the original order.
 * The item in the original order will not be deleted until the order edit is confirmed.
 *
 * @example
 * import React from "react"
 * import { useAdminOrderEditDeleteLineItem } from "medusa-react"
 *
 * type Props = {
 *   orderEditId: string
 *   itemId: string
 * }
 *
 * const OrderEditLineItem = ({
 *   orderEditId,
 *   itemId
 * }: Props) => {
 *   const removeLineItem = useAdminOrderEditDeleteLineItem(
 *     orderEditId,
 *     itemId
 *   )
 *
 *   const handleRemoveLineItem = () => {
 *     removeLineItem.mutate(void 0, {
 *       onSuccess: ({ order_edit }) => {
 *         console.log(order_edit.changes)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default OrderEditLineItem
 *
 * @customNamespace Hooks.Admin.Order Edits
 * @category Mutations
 */
declare const useAdminOrderEditDeleteLineItem: (orderEditId: string, itemId: string, options?: UseMutationOptions<Response<AdminOrderEditsRes>, Error>) => _tanstack_react_query.UseMutationResult<Response<AdminOrderEditsRes>, Error, void, unknown>;
/**
 * This hook updates an Order Edit's details.
 *
 * @example
 * import React from "react"
 * import { useAdminUpdateOrderEdit } from "medusa-react"
 *
 * type Props = {
 *   orderEditId: string
 * }
 *
 * const OrderEdit = ({ orderEditId }: Props) => {
 *   const updateOrderEdit = useAdminUpdateOrderEdit(
 *     orderEditId,
 *   )
 *
 *   const handleUpdate = (
 *     internalNote: string
 *   ) => {
 *     updateOrderEdit.mutate({
 *       internal_note: internalNote
 *     }, {
 *       onSuccess: ({ order_edit }) => {
 *         console.log(order_edit.internal_note)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default OrderEdit
 *
 * @customNamespace Hooks.Admin.Order Edits
 * @category Mutations
 */
declare const useAdminUpdateOrderEdit: (id: string, options?: UseMutationOptions<Response<AdminOrderEditsRes>, Error, AdminPostOrderEditsOrderEditReq>) => _tanstack_react_query.UseMutationResult<Response<AdminOrderEditsRes>, Error, AdminPostOrderEditsOrderEditReq, unknown>;
/**
 * This hook creates a line item change in the order edit that indicates adding an item in the original order.
 * The item will not be added to the original order until the order edit is confirmed.
 *
 * @example
 * import React from "react"
 * import { useAdminOrderEditAddLineItem } from "medusa-react"
 *
 * type Props = {
 *   orderEditId: string
 * }
 *
 * const OrderEdit = ({ orderEditId }: Props) => {
 *   const addLineItem = useAdminOrderEditAddLineItem(
 *     orderEditId
 *   )
 *
 *   const handleAddLineItem =
 *     (quantity: number, variantId: string) => {
 *       addLineItem.mutate({
 *         quantity,
 *         variant_id: variantId,
 *       }, {
 *         onSuccess: ({ order_edit }) => {
 *           console.log(order_edit.changes)
 *         }
 *       })
 *     }
 *
 *   // ...
 * }
 *
 * export default OrderEdit
 *
 * @customNamespace Hooks.Admin.Order Edits
 * @category Mutations
 */
declare const useAdminOrderEditAddLineItem: (id: string, options?: UseMutationOptions<Response<AdminOrderEditsRes>, Error, AdminPostOrderEditsEditLineItemsReq>) => _tanstack_react_query.UseMutationResult<Response<AdminOrderEditsRes>, Error, AdminPostOrderEditsEditLineItemsReq, unknown>;
/**
 * This hook requests customer confirmation of an order edit. This would emit the event `order-edit.requested` which Notification Providers listen to and send
 * a notification to the customer about the order edit.
 *
 * @example
 * import React from "react"
 * import {
 *   useAdminRequestOrderEditConfirmation,
 * } from "medusa-react"
 *
 * type Props = {
 *   orderEditId: string
 * }
 *
 * const OrderEdit = ({ orderEditId }: Props) => {
 *   const requestOrderConfirmation =
 *     useAdminRequestOrderEditConfirmation(
 *       orderEditId
 *     )
 *
 *   const handleRequestConfirmation = () => {
 *     requestOrderConfirmation.mutate(void 0, {
 *       onSuccess: ({ order_edit }) => {
 *         console.log(
 *           order_edit.requested_at,
 *           order_edit.requested_by
 *         )
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default OrderEdit
 *
 * @customNamespace Hooks.Admin.Order Edits
 * @category Mutations
 */
declare const useAdminRequestOrderEditConfirmation: (id: string, options?: UseMutationOptions<Response<AdminOrderEditsRes>, Error>) => _tanstack_react_query.UseMutationResult<Response<AdminOrderEditsRes>, Error, void, unknown>;
/**
 * This hook cancels an order edit.
 *
 * @example
 * import React from "react"
 * import {
 *   useAdminCancelOrderEdit,
 * } from "medusa-react"
 *
 * type Props = {
 *   orderEditId: string
 * }
 *
 * const OrderEdit = ({ orderEditId }: Props) => {
 *   const cancelOrderEdit =
 *     useAdminCancelOrderEdit(
 *       orderEditId
 *     )
 *
 *   const handleCancel = () => {
 *     cancelOrderEdit.mutate(void 0, {
 *       onSuccess: ({ order_edit }) => {
 *         console.log(
 *           order_edit.id
 *         )
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default OrderEdit
 *
 * @customNamespace Hooks.Admin.Order Edits
 * @category Mutations
 */
declare const useAdminCancelOrderEdit: (id: string, options?: UseMutationOptions<Response<AdminOrderEditsRes>, Error>) => _tanstack_react_query.UseMutationResult<Response<AdminOrderEditsRes>, Error, void, unknown>;
/**
 * This hook confirms an order edit. This will reflect the changes in the order edit on the associated order.
 *
 * @example
 * import React from "react"
 * import { useAdminConfirmOrderEdit } from "medusa-react"
 *
 * type Props = {
 *   orderEditId: string
 * }
 *
 * const OrderEdit = ({ orderEditId }: Props) => {
 *   const confirmOrderEdit = useAdminConfirmOrderEdit(
 *     orderEditId
 *   )
 *
 *   const handleConfirmOrderEdit = () => {
 *     confirmOrderEdit.mutate(void 0, {
 *       onSuccess: ({ order_edit }) => {
 *         console.log(
 *           order_edit.confirmed_at,
 *           order_edit.confirmed_by
 *         )
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default OrderEdit
 *
 * @customNamespace Hooks.Admin.Order Edits
 * @category Mutations
 */
declare const useAdminConfirmOrderEdit: (id: string, options?: UseMutationOptions<Response<AdminOrderEditsRes>, Error>) => _tanstack_react_query.UseMutationResult<Response<AdminOrderEditsRes>, Error, void, unknown>;

declare const adminOrderKeys: {
    detailOrder(id: string, query?: FindParams): (string | {
        expand?: string | undefined;
        fields?: string | undefined;
    })[];
    all: ["admin_orders"];
    lists: () => ["admin_orders", "list"];
    list: (query?: any) => ["admin_orders", "list", {
        query: any;
    }];
    details: () => ["admin_orders", "detail"];
    detail: (id: string) => ["admin_orders", "detail", string];
};
type OrderQueryKeys = typeof adminOrderKeys;
/**
 * This hook retrieves a list of orders. The orders can be filtered by fields such as `status` or `display_id` passed
 * in the `query` parameter. The order can also be paginated.
 *
 * @example
 * To list orders:
 *
 * ```tsx
 * import React from "react"
 * import { useAdminOrders } from "medusa-react"
 *
 * const Orders = () => {
 *   const { orders, isLoading } = useAdminOrders()
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {orders && !orders.length && <span>No Orders</span>}
 *       {orders && orders.length > 0 && (
 *         <ul>
 *           {orders.map((order) => (
 *             <li key={order.id}>{order.display_id}</li>
 *           ))}
 *         </ul>
 *       )}
 *     </div>
 *   )
 * }
 *
 * export default Orders
 * ```
 *
 * You can use the `query` parameter to pass filters and specify relations that should be retrieved within the orders. In addition,
 * By default, only the first `50` records are retrieved. You can control pagination by specifying the `limit` and `offset` properties:
 *
 * ```tsx
 * import React from "react"
 * import { useAdminOrders } from "medusa-react"
 *
 * const Orders = () => {
 *   const {
 *     orders,
 *     limit,
 *     offset,
 *     isLoading
 *   } = useAdminOrders({
 *     expand: "customers",
 *     limit: 20,
 *     offset: 0
 *   })
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {orders && !orders.length && <span>No Orders</span>}
 *       {orders && orders.length > 0 && (
 *         <ul>
 *           {orders.map((order) => (
 *             <li key={order.id}>{order.display_id}</li>
 *           ))}
 *         </ul>
 *       )}
 *     </div>
 *   )
 * }
 *
 * export default Orders
 * ```
 *
 * @customNamespace Hooks.Admin.Orders
 * @category Queries
 */
declare const useAdminOrders: (query?: AdminGetOrdersParams, options?: UseQueryOptionsWrapper<Response<AdminOrdersListRes>, Error, ReturnType<OrderQueryKeys["list"]>>) => {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: true;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminOrdersListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly orders?: _medusajs_medusa.Order[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: true;
    readonly status: "success";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminOrdersListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly orders?: _medusajs_medusa.Order[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: true;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminOrdersListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly orders?: _medusajs_medusa.Order[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: true;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "loading";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminOrdersListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly orders?: _medusajs_medusa.Order[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
};
/**
 * This hook retrieve an order's details.
 *
 * @example
 * A simple example that retrieves an order by its ID:
 *
 * ```tsx
 * import React from "react"
 * import { useAdminOrder } from "medusa-react"
 *
 * type Props = {
 *   orderId: string
 * }
 *
 * const Order = ({ orderId }: Props) => {
 *   const {
 *     order,
 *     isLoading,
 *   } = useAdminOrder(orderId)
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {order && <span>{order.display_id}</span>}
 *
 *     </div>
 *   )
 * }
 *
 * export default Order
 * ```
 *
 * To specify relations that should be retrieved:
 *
 * ```tsx
 * import React from "react"
 * import { useAdminOrder } from "medusa-react"
 *
 * const Order = (
 *   orderId: string
 * ) => {
 *   const {
 *     order,
 *     isLoading,
 *   } = useAdminOrder(orderId, {
 *     expand: "customer"
 *   })
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {order && <span>{order.display_id}</span>}
 *
 *     </div>
 *   )
 * }
 *
 * export default Order
 * ```
 *
 * @customNamespace Hooks.Admin.Orders
 * @category Queries
 */
declare const useAdminOrder: (id: string, query?: FindParams, options?: UseQueryOptionsWrapper<Response<AdminOrdersRes>, Error, ReturnType<OrderQueryKeys["detailOrder"]>>) => {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: true;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminOrdersRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly order?: _medusajs_medusa.Order | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: true;
    readonly status: "success";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminOrdersRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly order?: _medusajs_medusa.Order | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: true;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminOrdersRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly order?: _medusajs_medusa.Order | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: true;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "loading";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminOrdersRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly order?: _medusajs_medusa.Order | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
};

/**
 * This hook updates an order's details.
 *
 * @example
 * import React from "react"
 * import { useAdminUpdateOrder } from "medusa-react"
 *
 * type Props = {
 *   orderId: string
 * }
 *
 * const Order = ({ orderId }: Props) => {
 *   const updateOrder = useAdminUpdateOrder(
 *     orderId
 *   )
 *
 *   const handleUpdate = (
 *     email: string
 *   ) => {
 *     updateOrder.mutate({
 *       email,
 *     }, {
 *       onSuccess: ({ order }) => {
 *         console.log(order.email)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default Order
 *
 * @customNamespace Hooks.Admin.Orders
 * @category Mutations
 */
declare const useAdminUpdateOrder: (id: string, options?: UseMutationOptions<Response<AdminOrdersRes>, Error, AdminPostOrdersOrderReq>) => _tanstack_react_query.UseMutationResult<Response<AdminOrdersRes>, Error, AdminPostOrdersOrderReq, unknown>;
/**
 * This hook cancels an order and change its status. This will also cancel any associated fulfillments and payments,
 * and it may fail if the payment or fulfillment Provider is unable to cancel the payment/fulfillment.
 *
 * @example
 * import React from "react"
 * import { useAdminCancelOrder } from "medusa-react"
 *
 * type Props = {
 *   orderId: string
 * }
 *
 * const Order = ({ orderId }: Props) => {
 *   const cancelOrder = useAdminCancelOrder(
 *     orderId
 *   )
 *   // ...
 *
 *   const handleCancel = () => {
 *     cancelOrder.mutate(void 0, {
 *       onSuccess: ({ order }) => {
 *         console.log(order.status)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default Order
 *
 * @customNamespace Hooks.Admin.Orders
 * @category Mutations
 */
declare const useAdminCancelOrder: (id: string, options?: UseMutationOptions<Response<AdminOrdersRes>, Error, void>) => _tanstack_react_query.UseMutationResult<Response<AdminOrdersRes>, Error, void, unknown>;
/**
 * This hook completes an order and change its status. A canceled order can't be completed.
 *
 * @example
 * import React from "react"
 * import { useAdminCompleteOrder } from "medusa-react"
 *
 * type Props = {
 *   orderId: string
 * }
 *
 * const Order = ({ orderId }: Props) => {
 *   const completeOrder = useAdminCompleteOrder(
 *     orderId
 *   )
 *   // ...
 *
 *   const handleComplete = () => {
 *     completeOrder.mutate(void 0, {
 *       onSuccess: ({ order }) => {
 *         console.log(order.status)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default Order
 *
 * @customNamespace Hooks.Admin.Orders
 * @category Mutations
 */
declare const useAdminCompleteOrder: (id: string, options?: UseMutationOptions<Response<AdminOrdersRes>, Error, void>) => _tanstack_react_query.UseMutationResult<Response<AdminOrdersRes>, Error, void, unknown>;
/**
 * This hook captures all the payments associated with an order. The payment of canceled orders can't be captured.
 *
 * @example
 * import React from "react"
 * import { useAdminCapturePayment } from "medusa-react"
 *
 * type Props = {
 *   orderId: string
 * }
 *
 * const Order = ({ orderId }: Props) => {
 *   const capturePayment = useAdminCapturePayment(
 *     orderId
 *   )
 *   // ...
 *
 *   const handleCapture = () => {
 *     capturePayment.mutate(void 0, {
 *       onSuccess: ({ order }) => {
 *         console.log(order.status)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default Order
 *
 * @customNamespace Hooks.Admin.Orders
 * @category Mutations
 */
declare const useAdminCapturePayment: (id: string, options?: UseMutationOptions<Response<AdminOrdersRes>, Error, void>) => _tanstack_react_query.UseMutationResult<Response<AdminOrdersRes>, Error, void, unknown>;
/**
 * This hook refunds an amount for an order. The amount must be less than or equal the `refundable_amount` of the order.
 *
 * @example
 * import React from "react"
 * import { useAdminRefundPayment } from "medusa-react"
 *
 * type Props = {
 *   orderId: string
 * }
 *
 * const Order = ({ orderId }: Props) => {
 *   const refundPayment = useAdminRefundPayment(
 *     orderId
 *   )
 *   // ...
 *
 *   const handleRefund = (
 *     amount: number,
 *     reason: string
 *   ) => {
 *     refundPayment.mutate({
 *       amount,
 *       reason,
 *     }, {
 *       onSuccess: ({ order }) => {
 *         console.log(order.refunds)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default Order
 *
 * @customNamespace Hooks.Admin.Orders
 * @category Mutations
 */
declare const useAdminRefundPayment: (id: string, options?: UseMutationOptions<Response<AdminOrdersRes>, Error, AdminPostOrdersOrderRefundsReq>) => _tanstack_react_query.UseMutationResult<Response<AdminOrdersRes>, Error, AdminPostOrdersOrderRefundsReq, unknown>;
/**
 * This hook creates a Fulfillment of an Order using the fulfillment provider, and change the order's
 * fulfillment status to either `partially_fulfilled` or `fulfilled`, depending on
 * whether all the items were fulfilled.
 *
 * @example
 * import React from "react"
 * import { useAdminCreateFulfillment } from "medusa-react"
 *
 * type Props = {
 *   orderId: string
 * }
 *
 * const Order = ({ orderId }: Props) => {
 *   const createFulfillment = useAdminCreateFulfillment(
 *     orderId
 *   )
 *   // ...
 *
 *   const handleCreateFulfillment = (
 *     itemId: string,
 *     quantity: number
 *   ) => {
 *     createFulfillment.mutate({
 *       items: [
 *         {
 *           item_id: itemId,
 *           quantity,
 *         },
 *       ],
 *     }, {
 *       onSuccess: ({ order }) => {
 *         console.log(order.fulfillments)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default Order
 *
 * @customNamespace Hooks.Admin.Orders
 * @category Mutations
 */
declare const useAdminCreateFulfillment: (orderId: string, options?: UseMutationOptions<Response<AdminOrdersRes>, Error, AdminPostOrdersOrderFulfillmentsReq>) => _tanstack_react_query.UseMutationResult<Response<AdminOrdersRes>, Error, AdminPostOrdersOrderFulfillmentsReq, unknown>;
/**
 * This hook cancels an order's fulfillment and change its fulfillment status to `canceled`.
 *
 * @typeParamDefinition string - The fulfillment's ID.
 *
 * @example
 * import React from "react"
 * import { useAdminCancelFulfillment } from "medusa-react"
 *
 * type Props = {
 *   orderId: string
 * }
 *
 * const Order = ({ orderId }: Props) => {
 *   const cancelFulfillment = useAdminCancelFulfillment(
 *     orderId
 *   )
 *   // ...
 *
 *   const handleCancel = (
 *     fulfillmentId: string
 *   ) => {
 *     cancelFulfillment.mutate(fulfillmentId, {
 *       onSuccess: ({ order }) => {
 *         console.log(order.fulfillments)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default Order
 *
 * @customNamespace Hooks.Admin.Orders
 * @category Mutations
 */
declare const useAdminCancelFulfillment: (orderId: string, options?: UseMutationOptions<Response<AdminOrdersRes>, Error, string>) => _tanstack_react_query.UseMutationResult<Response<AdminOrdersRes>, Error, string, unknown>;
/**
 * This hook creates a shipment and mark a fulfillment as shipped. This changes the order's fulfillment status to either
 * `partially_shipped` or `shipped`, depending on whether all the items were shipped.
 *
 * @example
 * import React from "react"
 * import { useAdminCreateShipment } from "medusa-react"
 *
 * type Props = {
 *   orderId: string
 * }
 *
 * const Order = ({ orderId }: Props) => {
 *   const createShipment = useAdminCreateShipment(
 *     orderId
 *   )
 *   // ...
 *
 *   const handleCreate = (
 *     fulfillmentId: string
 *   ) => {
 *     createShipment.mutate({
 *       fulfillment_id: fulfillmentId,
 *     }, {
 *       onSuccess: ({ order }) => {
 *         console.log(order.fulfillment_status)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default Order
 *
 * @customNamespace Hooks.Admin.Orders
 * @category Mutations
 */
declare const useAdminCreateShipment: (orderId: string, options?: UseMutationOptions<Response<AdminOrdersRes>, Error, AdminPostOrdersOrderShipmentReq>) => _tanstack_react_query.UseMutationResult<Response<AdminOrdersRes>, Error, AdminPostOrdersOrderShipmentReq, unknown>;
/**
 * This hook requests and create a return for items in an order. If the return shipping method is specified, it will be automatically fulfilled.
 *
 * @example
 * import React from "react"
 * import { useAdminRequestReturn } from "medusa-react"
 *
 * type Props = {
 *   orderId: string
 * }
 *
 * const Order = ({ orderId }: Props) => {
 *   const requestReturn = useAdminRequestReturn(
 *     orderId
 *   )
 *   // ...
 *
 *   const handleRequestingReturn = (
 *     itemId: string,
 *     quantity: number
 *   ) => {
 *     requestReturn.mutate({
 *       items: [
 *         {
 *           item_id: itemId,
 *           quantity
 *         }
 *       ]
 *     }, {
 *       onSuccess: ({ order }) => {
 *         console.log(order.returns)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default Order
 *
 * @customNamespace Hooks.Admin.Orders
 * @category Mutations
 */
declare const useAdminRequestReturn: (orderId: string, options?: UseMutationOptions<Response<AdminOrdersRes>, Error, AdminPostOrdersOrderReturnsReq>) => _tanstack_react_query.UseMutationResult<Response<AdminOrdersRes>, Error, AdminPostOrdersOrderReturnsReq, unknown>;
/**
 * This hook adds a shipping method to an order. If another shipping method exists with the same shipping profile, the previous shipping method will be replaced.
 *
 * @example
 * import React from "react"
 * import { useAdminAddShippingMethod } from "medusa-react"
 *
 * type Props = {
 *   orderId: string
 * }
 *
 * const Order = ({ orderId }: Props) => {
 *   const addShippingMethod = useAdminAddShippingMethod(
 *     orderId
 *   )
 *   // ...
 *
 *   const handleAddShippingMethod = (
 *     optionId: string,
 *     price: number
 *   ) => {
 *     addShippingMethod.mutate({
 *       option_id: optionId,
 *       price
 *     }, {
 *       onSuccess: ({ order }) => {
 *         console.log(order.shipping_methods)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default Order
 *
 * @customNamespace Hooks.Admin.Orders
 * @category Mutations
 */
declare const useAdminAddShippingMethod: (orderId: string, options?: UseMutationOptions<Response<AdminOrdersRes>, Error, AdminPostOrdersOrderShippingMethodsReq>) => _tanstack_react_query.UseMutationResult<Response<AdminOrdersRes>, Error, AdminPostOrdersOrderShippingMethodsReq, unknown>;
/**
 * The hook archives an order and change its status.
 *
 * @example
 * import React from "react"
 * import { useAdminArchiveOrder } from "medusa-react"
 *
 * type Props = {
 *   orderId: string
 * }
 *
 * const Order = ({ orderId }: Props) => {
 *   const archiveOrder = useAdminArchiveOrder(
 *     orderId
 *   )
 *   // ...
 *
 *   const handleArchivingOrder = () => {
 *     archiveOrder.mutate(void 0, {
 *       onSuccess: ({ order }) => {
 *         console.log(order.status)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default Order
 *
 * @customNamespace Hooks.Admin.Orders
 * @category Mutations
 */
declare const useAdminArchiveOrder: (id: string, options?: UseMutationOptions<Response<AdminOrdersRes>, Error, void>) => _tanstack_react_query.UseMutationResult<Response<AdminOrdersRes>, Error, void, unknown>;

declare const adminPaymentCollectionQueryKeys: TQueryKey<"paymentCollection", any, string>;
type AdminPaymentCollectionKey = typeof adminPaymentCollectionQueryKeys;
/**
 * This hook retrieves a Payment Collection's details.
 *
 * @example
 * import React from "react"
 * import { useAdminPaymentCollection } from "medusa-react"
 *
 * type Props = {
 *   paymentCollectionId: string
 * }
 *
 * const PaymentCollection = ({ paymentCollectionId }: Props) => {
 *   const {
 *     payment_collection,
 *     isLoading,
 *   } = useAdminPaymentCollection(paymentCollectionId)
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {payment_collection && (
 *         <span>{payment_collection.status}</span>
 *       )}
 *
 *     </div>
 *   )
 * }
 *
 * export default PaymentCollection
 *
 * @customNamespace Hooks.Admin.Payment Collections
 * @category Queries
 */
declare const useAdminPaymentCollection: (id: string, options?: UseQueryOptionsWrapper<Response<AdminPaymentCollectionsRes>, Error, ReturnType<AdminPaymentCollectionKey["detail"]>>) => {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: true;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminPaymentCollectionsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly payment_collection?: _medusajs_medusa.PaymentCollection | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: true;
    readonly status: "success";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminPaymentCollectionsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly payment_collection?: _medusajs_medusa.PaymentCollection | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: true;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminPaymentCollectionsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly payment_collection?: _medusajs_medusa.PaymentCollection | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: true;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "loading";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminPaymentCollectionsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly payment_collection?: _medusajs_medusa.PaymentCollection | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
};

/**
 * This hook deletes a payment collection. Only payment collections with the statuses `canceled` or `not_paid` can be deleted.
 *
 * @example
 * import React from "react"
 * import { useAdminDeletePaymentCollection } from "medusa-react"
 *
 * type Props = {
 *   paymentCollectionId: string
 * }
 *
 * const PaymentCollection = ({ paymentCollectionId }: Props) => {
 *   const deleteCollection = useAdminDeletePaymentCollection(
 *     paymentCollectionId
 *   )
 *   // ...
 *
 *   const handleDelete = () => {
 *     deleteCollection.mutate(void 0, {
 *       onSuccess: ({ id, object, deleted }) => {
 *         console.log(id)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default PaymentCollection
 *
 * @customNamespace Hooks.Admin.Payment Collections
 * @category Mutations
 */
declare const useAdminDeletePaymentCollection: (id: string, options?: UseMutationOptions<Response<AdminPaymentCollectionDeleteRes>, Error, void>) => _tanstack_react_query.UseMutationResult<Response<AdminPaymentCollectionDeleteRes>, Error, void, unknown>;
/**
 * This hook updates a payment collection's details.
 *
 * @example
 * import React from "react"
 * import { useAdminUpdatePaymentCollection } from "medusa-react"
 *
 * type Props = {
 *   paymentCollectionId: string
 * }
 *
 * const PaymentCollection = ({ paymentCollectionId }: Props) => {
 *   const updateCollection = useAdminUpdatePaymentCollection(
 *     paymentCollectionId
 *   )
 *   // ...
 *
 *   const handleUpdate = (
 *     description: string
 *   ) => {
 *     updateCollection.mutate({
 *       description
 *     }, {
 *       onSuccess: ({ payment_collection }) => {
 *         console.log(payment_collection.description)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default PaymentCollection
 *
 * @customNamespace Hooks.Admin.Payment Collections
 * @category Mutations
 */
declare const useAdminUpdatePaymentCollection: (id: string, options?: UseMutationOptions<Response<AdminPaymentCollectionsRes>, Error, AdminUpdatePaymentCollectionsReq>) => _tanstack_react_query.UseMutationResult<Response<AdminPaymentCollectionsRes>, Error, AdminUpdatePaymentCollectionsReq, unknown>;
/**
 * This hook sets the status of a payment collection as `authorized`. This will also change the `authorized_amount` of the payment collection.
 *
 * @example
 * import React from "react"
 * import { useAdminMarkPaymentCollectionAsAuthorized } from "medusa-react"
 *
 * type Props = {
 *   paymentCollectionId: string
 * }
 *
 * const PaymentCollection = ({ paymentCollectionId }: Props) => {
 *   const markAsAuthorized = useAdminMarkPaymentCollectionAsAuthorized(
 *     paymentCollectionId
 *   )
 *   // ...
 *
 *   const handleAuthorization = () => {
 *     markAsAuthorized.mutate(void 0, {
 *       onSuccess: ({ payment_collection }) => {
 *         console.log(payment_collection.status)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default PaymentCollection
 *
 * @customNamespace Hooks.Admin.Payment Collections
 * @category Mutations
 */
declare const useAdminMarkPaymentCollectionAsAuthorized: (id: string, options?: UseMutationOptions<Response<AdminPaymentCollectionsRes>, Error, void>) => _tanstack_react_query.UseMutationResult<Response<AdminPaymentCollectionsRes>, Error, void, unknown>;

declare const adminPaymentQueryKeys: TQueryKey<"payment", any, string>;
type AdminPaymentKey = typeof adminPaymentQueryKeys;
/**
 * This hook retrieves a payment's details.
 *
 * @example
 * import React from "react"
 * import { useAdminPayment } from "medusa-react"
 *
 * type Props = {
 *   paymentId: string
 * }
 *
 * const Payment = ({ paymentId }: Props) => {
 *   const {
 *     payment,
 *     isLoading,
 *   } = useAdminPayment(paymentId)
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {payment && <span>{payment.amount}</span>}
 *
 *     </div>
 *   )
 * }
 *
 * export default Payment
 *
 * @customNamespace Hooks.Admin.Payments
 * @category Queries
 */
declare const useAdminPayment: (id: string, options?: UseQueryOptionsWrapper<Response<AdminPaymentRes>, Error, ReturnType<AdminPaymentKey["detail"]>>) => {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: true;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminPaymentRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly payment?: _medusajs_medusa.Payment | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: true;
    readonly status: "success";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminPaymentRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly payment?: _medusajs_medusa.Payment | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: true;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminPaymentRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly payment?: _medusajs_medusa.Payment | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: true;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "loading";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminPaymentRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly payment?: _medusajs_medusa.Payment | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
};

/**
 * This hook captures a payment.
 *
 * @example
 * import React from "react"
 * import { useAdminPaymentsCapturePayment } from "medusa-react"
 *
 * type Props = {
 *   paymentId: string
 * }
 *
 * const Payment = ({ paymentId }: Props) => {
 *   const capture = useAdminPaymentsCapturePayment(
 *     paymentId
 *   )
 *   // ...
 *
 *   const handleCapture = () => {
 *     capture.mutate(void 0, {
 *       onSuccess: ({ payment }) => {
 *         console.log(payment.amount)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default Payment
 *
 * @customNamespace Hooks.Admin.Payments
 * @category Mutations
 */
declare const useAdminPaymentsCapturePayment: (id: string, options?: UseMutationOptions<Response<AdminPaymentRes>, Error, void>) => _tanstack_react_query.UseMutationResult<Response<AdminPaymentRes>, Error, void, unknown>;
/**
 * This hook refunds a payment. The payment must be captured first.
 *
 * @example
 * import React from "react"
 * import { RefundReason } from "@medusajs/medusa"
 * import { useAdminPaymentsRefundPayment } from "medusa-react"
 *
 * type Props = {
 *   paymentId: string
 * }
 *
 * const Payment = ({ paymentId }: Props) => {
 *   const refund = useAdminPaymentsRefundPayment(
 *     paymentId
 *   )
 *   // ...
 *
 *   const handleRefund = (
 *     amount: number,
 *     reason: RefundReason,
 *     note: string
 *   ) => {
 *     refund.mutate({
 *       amount,
 *       reason,
 *       note
 *     }, {
 *       onSuccess: ({ refund }) => {
 *         console.log(refund.amount)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default Payment
 *
 * @customNamespace Hooks.Admin.Payments
 * @category Mutations
 */
declare const useAdminPaymentsRefundPayment: (id: string, options?: UseMutationOptions<Response<AdminRefundRes>, Error, AdminPostPaymentRefundsReq>) => _tanstack_react_query.UseMutationResult<Response<AdminRefundRes>, Error, AdminPostPaymentRefundsReq, unknown>;

declare const adminPriceListKeys: {
    detailProducts(id: string, query?: any): readonly ["admin_price_lists", "detail", string, "products", any];
    all: ["admin_price_lists"];
    lists: () => ["admin_price_lists", "list"];
    list: (query?: any) => ["admin_price_lists", "list", {
        query: any;
    }];
    details: () => ["admin_price_lists", "detail"];
    detail: (id: string) => ["admin_price_lists", "detail", string];
};
type PriceListQueryKeys = typeof adminPriceListKeys;
/**
 * This hook retrieves a list of price lists. The price lists can be filtered by fields such as `q` or `status` passed
 * in the `query` parameter. The price lists can also be sorted or paginated.
 *
 * @example
 * To list price lists:
 *
 * ```tsx
 * import React from "react"
 * import { useAdminPriceLists } from "medusa-react"
 *
 * const PriceLists = () => {
 *   const { price_lists, isLoading } = useAdminPriceLists()
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {price_lists && !price_lists.length && (
 *         <span>No Price Lists</span>
 *       )}
 *       {price_lists && price_lists.length > 0 && (
 *         <ul>
 *           {price_lists.map((price_list) => (
 *             <li key={price_list.id}>{price_list.name}</li>
 *           ))}
 *         </ul>
 *       )}
 *     </div>
 *   )
 * }
 *
 * export default PriceLists
 * ```
 *
 * To specify relations that should be retrieved within the price lists:
 *
 * ```tsx
 * import React from "react"
 * import { useAdminPriceLists } from "medusa-react"
 *
 * const PriceLists = () => {
 *   const { price_lists, isLoading } = useAdminPriceLists({
 *     expand: "prices"
 *   })
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {price_lists && !price_lists.length && (
 *         <span>No Price Lists</span>
 *       )}
 *       {price_lists && price_lists.length > 0 && (
 *         <ul>
 *           {price_lists.map((price_list) => (
 *             <li key={price_list.id}>{price_list.name}</li>
 *           ))}
 *         </ul>
 *       )}
 *     </div>
 *   )
 * }
 *
 * export default PriceLists
 * ```
 *
 * By default, only the first `10` records are retrieved. You can control pagination by specifying the `limit` and `offset` properties:
 *
 * ```tsx
 * import React from "react"
 * import { useAdminPriceLists } from "medusa-react"
 *
 * const PriceLists = () => {
 *   const {
 *     price_lists,
 *     limit,
 *     offset,
 *     isLoading
 *   } = useAdminPriceLists({
 *     expand: "prices",
 *     limit: 20,
 *     offset: 0
 *   })
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {price_lists && !price_lists.length && (
 *         <span>No Price Lists</span>
 *       )}
 *       {price_lists && price_lists.length > 0 && (
 *         <ul>
 *           {price_lists.map((price_list) => (
 *             <li key={price_list.id}>{price_list.name}</li>
 *           ))}
 *         </ul>
 *       )}
 *     </div>
 *   )
 * }
 *
 * export default PriceLists
 * ```
 *
 * @customNamespace Hooks.Admin.Price Lists
 * @category Queries
 */
declare const useAdminPriceLists: (query?: AdminGetPriceListPaginationParams, options?: UseQueryOptionsWrapper<Response<AdminPriceListsListRes>, Error, ReturnType<PriceListQueryKeys["list"]>>) => {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: true;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminPriceListsListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly price_lists?: _medusajs_medusa.PriceList[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: true;
    readonly status: "success";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminPriceListsListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly price_lists?: _medusajs_medusa.PriceList[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: true;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminPriceListsListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly price_lists?: _medusajs_medusa.PriceList[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: true;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "loading";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminPriceListsListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly price_lists?: _medusajs_medusa.PriceList[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
};
/**
 * This hook retrieves a price list's products. The products can be filtered by fields such as `q` or `status`
 * passed in the `query` parameter. The products can also be sorted or paginated.
 *
 * @example
 * To list products in a price list:
 *
 * ```tsx
 * import React from "react"
 * import { useAdminPriceListProducts } from "medusa-react"
 *
 * type Props = {
 *   priceListId: string
 * }
 *
 * const PriceListProducts = ({
 *   priceListId
 * }: Props) => {
 *   const { products, isLoading } = useAdminPriceListProducts(
 *     priceListId
 *   )
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {products && !products.length && (
 *         <span>No Price Lists</span>
 *       )}
 *       {products && products.length > 0 && (
 *         <ul>
 *           {products.map((product) => (
 *             <li key={product.id}>{product.title}</li>
 *           ))}
 *         </ul>
 *       )}
 *     </div>
 *   )
 * }
 *
 * export default PriceListProducts
 * ```
 *
 * To specify relations that should be retrieved within the products:
 *
 * ```tsx
 * import React from "react"
 * import { useAdminPriceListProducts } from "medusa-react"
 *
 * type Props = {
 *   priceListId: string
 * }
 *
 * const PriceListProducts = ({
 *   priceListId
 * }: Props) => {
 *   const { products, isLoading } = useAdminPriceListProducts(
 *     priceListId,
 *     {
 *       expand: "variants"
 *     }
 *   )
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {products && !products.length && (
 *         <span>No Price Lists</span>
 *       )}
 *       {products && products.length > 0 && (
 *         <ul>
 *           {products.map((product) => (
 *             <li key={product.id}>{product.title}</li>
 *           ))}
 *         </ul>
 *       )}
 *     </div>
 *   )
 * }
 *
 * export default PriceListProducts
 * ```
 *
 * By default, only the first `50` records are retrieved. You can control pagination by specifying the `limit` and `offset` properties:
 *
 * ```tsx
 * import React from "react"
 * import { useAdminPriceListProducts } from "medusa-react"
 *
 * type Props = {
 *   priceListId: string
 * }
 *
 * const PriceListProducts = ({
 *   priceListId
 * }: Props) => {
 *   const {
 *     products,
 *     limit,
 *     offset,
 *     isLoading
 *   } = useAdminPriceListProducts(
 *     priceListId,
 *     {
 *       expand: "variants",
 *       limit: 20,
 *       offset: 0
 *     }
 *   )
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {products && !products.length && (
 *         <span>No Price Lists</span>
 *       )}
 *       {products && products.length > 0 && (
 *         <ul>
 *           {products.map((product) => (
 *             <li key={product.id}>{product.title}</li>
 *           ))}
 *         </ul>
 *       )}
 *     </div>
 *   )
 * }
 *
 * export default PriceListProducts
 * ```
 *
 * @customNamespace Hooks.Admin.Price Lists
 * @category Queries
 */
declare const useAdminPriceListProducts: (id: string, query?: AdminGetPriceListsPriceListProductsParams, options?: UseQueryOptionsWrapper<Response<AdminProductsListRes>, Error, ReturnType<PriceListQueryKeys["detailProducts"]>>) => {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: true;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminProductsListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly products?: (_medusajs_medusa.Product | _medusajs_medusa_dist_types_pricing.PricedProduct)[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: true;
    readonly status: "success";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminProductsListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly products?: (_medusajs_medusa.Product | _medusajs_medusa_dist_types_pricing.PricedProduct)[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: true;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminProductsListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly products?: (_medusajs_medusa.Product | _medusajs_medusa_dist_types_pricing.PricedProduct)[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: true;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "loading";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminProductsListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly products?: (_medusajs_medusa.Product | _medusajs_medusa_dist_types_pricing.PricedProduct)[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
};
/**
 * This hook retrieves a price list's details.
 *
 * @example
 * import React from "react"
 * import { useAdminPriceList } from "medusa-react"
 *
 * type Props = {
 *   priceListId: string
 * }
 *
 * const PriceList = ({
 *   priceListId
 * }: Props) => {
 *   const {
 *     price_list,
 *     isLoading,
 *   } = useAdminPriceList(priceListId)
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {price_list && <span>{price_list.name}</span>}
 *     </div>
 *   )
 * }
 *
 * export default PriceList
 *
 * @customNamespace Hooks.Admin.Price Lists
 * @category Queries
 */
declare const useAdminPriceList: (id: string, options?: UseQueryOptionsWrapper<Response<AdminPriceListRes>, Error, ReturnType<PriceListQueryKeys["detail"]>>) => {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: true;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminPriceListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly price_list?: _medusajs_medusa.PriceList | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: true;
    readonly status: "success";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminPriceListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly price_list?: _medusajs_medusa.PriceList | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: true;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminPriceListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly price_list?: _medusajs_medusa.PriceList | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: true;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "loading";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminPriceListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly price_list?: _medusajs_medusa.PriceList | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
};

/**
 * This hook creates a price list.
 *
 * @example
 * import React from "react"
 * import {
 *   PriceListStatus,
 *   PriceListType,
 * } from "@medusajs/medusa"
 * import { useAdminCreatePriceList } from "medusa-react"
 *
 * type CreateData = {
 *   name: string
 *   description: string
 *   type: PriceListType
 *   status: PriceListStatus
 *   prices: {
 *     amount: number
 *     variant_id: string
 *     currency_code: string
 *     max_quantity: number
 *   }[]
 * }
 *
 * const CreatePriceList = () => {
 *   const createPriceList = useAdminCreatePriceList()
 *   // ...
 *
 *   const handleCreate = (
 *     data: CreateData
 *   ) => {
 *     createPriceList.mutate(data, {
 *       onSuccess: ({ price_list }) => {
 *         console.log(price_list.id)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default CreatePriceList
 *
 * @customNamespace Hooks.Admin.Price Lists
 * @category Mutations
 */
declare const useAdminCreatePriceList: (options?: UseMutationOptions<Response<AdminPriceListRes>, Error, AdminPostPriceListsPriceListReq>) => _tanstack_react_query.UseMutationResult<Response<AdminPriceListRes>, Error, AdminPostPriceListsPriceListReq, unknown>;
/**
 * This hook updates a price list's details.
 *
 * @example
 * import React from "react"
 * import { useAdminUpdatePriceList } from "medusa-react"
 *
 * type Props = {
 *   priceListId: string
 * }
 *
 * const PriceList = ({
 *   priceListId
 * }: Props) => {
 *   const updatePriceList = useAdminUpdatePriceList(priceListId)
 *   // ...
 *
 *   const handleUpdate = (
 *     endsAt: Date
 *   ) => {
 *     updatePriceList.mutate({
 *       ends_at: endsAt,
 *     }, {
 *       onSuccess: ({ price_list }) => {
 *         console.log(price_list.ends_at)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default PriceList
 *
 * @customNamespace Hooks.Admin.Price Lists
 * @category Mutations
 */
declare const useAdminUpdatePriceList: (id: string, options?: UseMutationOptions<Response<AdminPriceListRes>, Error, AdminPostPriceListsPriceListPriceListReq>) => _tanstack_react_query.UseMutationResult<Response<AdminPriceListRes>, Error, AdminPostPriceListsPriceListPriceListReq, unknown>;
/**
 * This hook deletes a price list and its associated prices.
 *
 * @example
 * import React from "react"
 * import { useAdminDeletePriceList } from "medusa-react"
 *
 * type Props = {
 *   priceListId: string
 * }
 *
 * const PriceList = ({
 *   priceListId
 * }: Props) => {
 *   const deletePriceList = useAdminDeletePriceList(priceListId)
 *   // ...
 *
 *   const handleDelete = () => {
 *     deletePriceList.mutate(void 0, {
 *       onSuccess: ({ id, object, deleted }) => {
 *         console.log(id)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default PriceList
 *
 * @customNamespace Hooks.Admin.Price Lists
 * @category Mutations
 */
declare const useAdminDeletePriceList: (id: string, options?: UseMutationOptions<Response<AdminPriceListDeleteRes>, Error, void>) => _tanstack_react_query.UseMutationResult<Response<_medusajs_medusa.DeleteResponse>, Error, void, unknown>;
/**
 * This hook adds or updates a list of prices in a price list.
 *
 * @example
 * import React from "react"
 * import { useAdminCreatePriceListPrices } from "medusa-react"
 *
 * type PriceData = {
 *   amount: number
 *   variant_id: string
 *   currency_code: string
 * }
 *
 * type Props = {
 *   priceListId: string
 * }
 *
 * const PriceList = ({
 *   priceListId
 * }: Props) => {
 *   const addPrices = useAdminCreatePriceListPrices(priceListId)
 *   // ...
 *
 *   const handleAddPrices = (prices: PriceData[]) => {
 *     addPrices.mutate({
 *       prices
 *     }, {
 *       onSuccess: ({ price_list }) => {
 *         console.log(price_list.prices)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default PriceList
 *
 * @customNamespace Hooks.Admin.Price Lists
 * @category Mutations
 */
declare const useAdminCreatePriceListPrices: (id: string, options?: UseMutationOptions<Response<AdminPriceListRes>, Error, AdminPostPriceListPricesPricesReq>) => _tanstack_react_query.UseMutationResult<Response<AdminPriceListRes>, Error, AdminPostPriceListPricesPricesReq, unknown>;
/**
 * This hook deletes a list of prices in a price list.
 *
 * @example
 * import React from "react"
 * import { useAdminDeletePriceListPrices } from "medusa-react"
 *
 * type Props = {
 *   priceListId: string
 * }
 *
 * const PriceList = ({
 *   priceListId
 * }: Props) => {
 *   const deletePrices = useAdminDeletePriceListPrices(priceListId)
 *   // ...
 *
 *   const handleDeletePrices = (priceIds: string[]) => {
 *     deletePrices.mutate({
 *       price_ids: priceIds
 *     }, {
 *       onSuccess: ({ ids, deleted, object }) => {
 *         console.log(ids)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default PriceList
 *
 * @customNamespace Hooks.Admin.Price Lists
 * @category Mutations
 */
declare const useAdminDeletePriceListPrices: (id: string, options?: UseMutationOptions<Response<AdminPriceListDeleteBatchRes>, Error, AdminDeletePriceListPricesPricesReq>) => _tanstack_react_query.UseMutationResult<Response<AdminPriceListDeleteBatchRes>, Error, AdminDeletePriceListPricesPricesReq, unknown>;
/**
 * This hook deletes all the prices associated with multiple products in a price list.
 *
 * @example
 * import React from "react"
 * import { useAdminDeletePriceListProductsPrices } from "medusa-react"
 *
 * type Props = {
 *   priceListId: string
 * }
 *
 * const PriceList = ({
 *   priceListId
 * }: Props) => {
 *   const deleteProductsPrices = useAdminDeletePriceListProductsPrices(
 *     priceListId
 *   )
 *   // ...
 *
 *   const handleDeleteProductsPrices = (productIds: string[]) => {
 *     deleteProductsPrices.mutate({
 *       product_ids: productIds
 *     }, {
 *       onSuccess: ({ ids, deleted, object }) => {
 *         console.log(ids)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default PriceList
 *
 * @customNamespace Hooks.Admin.Price Lists
 * @category Mutations
 */
declare const useAdminDeletePriceListProductsPrices: (id: string, options?: UseMutationOptions<Response<AdminPriceListDeleteBatchRes>, Error, AdminDeletePriceListsPriceListProductsPricesBatchReq>) => _tanstack_react_query.UseMutationResult<Response<AdminPriceListDeleteBatchRes>, Error, AdminDeletePriceListsPriceListProductsPricesBatchReq, unknown>;
/**
 * This hook deletes all the prices related to a specific product in a price list.
 *
 * @example
 * import React from "react"
 * import {
 *   useAdminDeletePriceListProductPrices
 * } from "medusa-react"
 *
 * type Props = {
 *   priceListId: string
 *   productId: string
 * }
 *
 * const PriceListProduct = ({
 *   priceListId,
 *   productId
 * }: Props) => {
 *   const deleteProductPrices = useAdminDeletePriceListProductPrices(
 *     priceListId,
 *     productId
 *   )
 *   // ...
 *
 *   const handleDeleteProductPrices = () => {
 *     deleteProductPrices.mutate(void 0, {
 *       onSuccess: ({ ids, deleted, object }) => {
 *         console.log(ids)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default PriceListProduct
 *
 * @customNamespace Hooks.Admin.Price Lists
 * @category Mutations
 */
declare const useAdminDeletePriceListProductPrices: (id: string, productId: string, options?: UseMutationOptions<Response<AdminPriceListDeleteProductPricesRes>, Error>) => _tanstack_react_query.UseMutationResult<Response<AdminPriceListDeleteBatchRes>, Error, void, unknown>;
/**
 * This hook deletes all the prices related to a specific product variant in a price list.
 *
 * @example
 * import React from "react"
 * import {
 *   useAdminDeletePriceListVariantPrices
 * } from "medusa-react"
 *
 * type Props = {
 *   priceListId: string
 *   variantId: string
 * }
 *
 * const PriceListVariant = ({
 *   priceListId,
 *   variantId
 * }: Props) => {
 *   const deleteVariantPrices = useAdminDeletePriceListVariantPrices(
 *     priceListId,
 *     variantId
 *   )
 *   // ...
 *
 *   const handleDeleteVariantPrices = () => {
 *     deleteVariantPrices.mutate(void 0, {
 *       onSuccess: ({ ids, deleted, object }) => {
 *         console.log(ids)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default PriceListVariant
 *
 * @customNamespace Hooks.Admin.Price Lists
 * @category Mutations
 */
declare const useAdminDeletePriceListVariantPrices: (id: string, variantId: string, options?: UseMutationOptions<Response<AdminPriceListDeleteVariantPricesRes>, Error>) => _tanstack_react_query.UseMutationResult<Response<AdminPriceListDeleteBatchRes>, Error, void, unknown>;

declare const adminProductCategoryKeys: TQueryKey<"product_categories", any, string>;
type ProductCategoryQueryKeys = typeof adminProductCategoryKeys;
/**
 * This hook
 *
 * @example
 * To list product categories:
 *
 * ```tsx
 * import React from "react"
 * import { useAdminProductCategories } from "medusa-react"
 *
 * function Categories() {
 *   const {
 *     product_categories,
 *     isLoading
 *   } = useAdminProductCategories()
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {product_categories && !product_categories.length && (
 *         <span>No Categories</span>
 *       )}
 *       {product_categories && product_categories.length > 0 && (
 *         <ul>
 *           {product_categories.map(
 *             (category) => (
 *               <li key={category.id}>{category.name}</li>
 *             )
 *           )}
 *         </ul>
 *       )}
 *     </div>
 *   )
 * }
 *
 * export default Categories
 * ```
 *
 * To specify relations that should be retrieved within the product category:
 *
 * ```tsx
 * import React from "react"
 * import { useAdminProductCategories } from "medusa-react"
 *
 * function Categories() {
 *   const {
 *     product_categories,
 *     isLoading
 *   } = useAdminProductCategories({
 *     expand: "category_children"
 *   })
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {product_categories && !product_categories.length && (
 *         <span>No Categories</span>
 *       )}
 *       {product_categories && product_categories.length > 0 && (
 *         <ul>
 *           {product_categories.map(
 *             (category) => (
 *               <li key={category.id}>{category.name}</li>
 *             )
 *           )}
 *         </ul>
 *       )}
 *     </div>
 *   )
 * }
 *
 * export default Categories
 * ```
 *
 * By default, only the first `100` records are retrieved. You can control pagination by specifying the `limit` and `offset` properties:
 *
 * ```tsx
 * import React from "react"
 * import { useAdminProductCategories } from "medusa-react"
 *
 * function Categories() {
 *   const {
 *     product_categories,
 *     limit,
 *     offset,
 *     isLoading
 *   } = useAdminProductCategories({
 *     expand: "category_children",
 *     limit: 20,
 *     offset: 0
 *   })
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {product_categories && !product_categories.length && (
 *         <span>No Categories</span>
 *       )}
 *       {product_categories && product_categories.length > 0 && (
 *         <ul>
 *           {product_categories.map(
 *             (category) => (
 *               <li key={category.id}>{category.name}</li>
 *             )
 *           )}
 *         </ul>
 *       )}
 *     </div>
 *   )
 * }
 *
 * export default Categories
 * ```
 *
 * @customNamespace Hooks.Admin.Product Categories
 * @category Queries
 */
declare const useAdminProductCategories: (query?: AdminGetProductCategoriesParams, options?: UseQueryOptionsWrapper<Response<AdminProductCategoriesListRes>, Error, ReturnType<ProductCategoryQueryKeys["list"]>>) => {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: true;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminProductCategoriesListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly product_categories?: _medusajs_medusa.ProductCategory[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: true;
    readonly status: "success";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminProductCategoriesListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly product_categories?: _medusajs_medusa.ProductCategory[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: true;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminProductCategoriesListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly product_categories?: _medusajs_medusa.ProductCategory[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: true;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "loading";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminProductCategoriesListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly product_categories?: _medusajs_medusa.ProductCategory[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
};
/**
 * This hook retrieves a product category's details.
 *
 * @example
 * A simple example that retrieves an order by its ID:
 *
 * ```tsx
 * import React from "react"
 * import { useAdminProductCategory } from "medusa-react"
 *
 * type Props = {
 *   productCategoryId: string
 * }
 *
 * const Category = ({
 *   productCategoryId
 * }: Props) => {
 *   const {
 *     product_category,
 *     isLoading,
 *   } = useAdminProductCategory(productCategoryId)
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {product_category && (
 *         <span>{product_category.name}</span>
 *       )}
 *
 *     </div>
 *   )
 * }
 *
 * export default Category
 * ```
 *
 * To specify relations that should be retrieved:
 *
 * ```tsx
 * import React from "react"
 * import { useAdminProductCategory } from "medusa-react"
 *
 * type Props = {
 *   productCategoryId: string
 * }
 *
 * const Category = ({
 *   productCategoryId
 * }: Props) => {
 *   const {
 *     product_category,
 *     isLoading,
 *   } = useAdminProductCategory(productCategoryId, {
 *     expand: "category_children"
 *   })
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {product_category && (
 *         <span>{product_category.name}</span>
 *       )}
 *
 *     </div>
 *   )
 * }
 *
 * export default Category
 * ```
 *
 * @customNamespace Hooks.Admin.Product Categories
 * @category Queries
 */
declare const useAdminProductCategory: (id: string, query?: AdminGetProductCategoryParams, options?: UseQueryOptionsWrapper<Response<AdminProductCategoriesCategoryRes>, Error, ReturnType<ProductCategoryQueryKeys["detail"]>>) => {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: true;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminProductCategoriesCategoryRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly product_category?: _medusajs_medusa.ProductCategory | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: true;
    readonly status: "success";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminProductCategoriesCategoryRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly product_category?: _medusajs_medusa.ProductCategory | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: true;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminProductCategoriesCategoryRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly product_category?: _medusajs_medusa.ProductCategory | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: true;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "loading";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminProductCategoriesCategoryRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly product_category?: _medusajs_medusa.ProductCategory | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
};

/**
 * This hook creates a product category.
 *
 * @example
 * import React from "react"
 * import { useAdminCreateProductCategory } from "medusa-react"
 *
 * const CreateCategory = () => {
 *   const createCategory = useAdminCreateProductCategory()
 *   // ...
 *
 *   const handleCreate = (
 *     name: string
 *   ) => {
 *     createCategory.mutate({
 *       name,
 *     }, {
 *       onSuccess: ({ product_category }) => {
 *         console.log(product_category.id)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default CreateCategory
 *
 * @customNamespace Hooks.Admin.Product Categories
 * @category Mutations
 */
declare const useAdminCreateProductCategory: (options?: UseMutationOptions<Response<AdminProductCategoriesCategoryRes>, Error, AdminPostProductCategoriesReq>) => _tanstack_react_query.UseMutationResult<Response<AdminProductCategoriesCategoryRes>, Error, AdminPostProductCategoriesReq, unknown>;
/**
 * This hook updates a product category.
 *
 * @example
 * import React from "react"
 * import { useAdminUpdateProductCategory } from "medusa-react"
 *
 * type Props = {
 *   productCategoryId: string
 * }
 *
 * const Category = ({
 *   productCategoryId
 * }: Props) => {
 *   const updateCategory = useAdminUpdateProductCategory(
 *     productCategoryId
 *   )
 *   // ...
 *
 *   const handleUpdate = (
 *     name: string
 *   ) => {
 *     updateCategory.mutate({
 *       name,
 *     }, {
 *       onSuccess: ({ product_category }) => {
 *         console.log(product_category.id)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default Category
 *
 * @customNamespace Hooks.Admin.Product Categories
 * @category Mutations
 */
declare const useAdminUpdateProductCategory: (id: string, options?: UseMutationOptions<Response<AdminProductCategoriesCategoryRes>, Error, AdminPostProductCategoriesCategoryReq>) => _tanstack_react_query.UseMutationResult<Response<AdminProductCategoriesCategoryRes>, Error, AdminPostProductCategoriesCategoryReq, unknown>;
/**
 * This hook deletes a product category. This does not delete associated products.
 *
 * @example
 * import React from "react"
 * import { useAdminDeleteProductCategory } from "medusa-react"
 *
 * type Props = {
 *   productCategoryId: string
 * }
 *
 * const Category = ({
 *   productCategoryId
 * }: Props) => {
 *   const deleteCategory = useAdminDeleteProductCategory(
 *     productCategoryId
 *   )
 *   // ...
 *
 *   const handleDelete = () => {
 *     deleteCategory.mutate(void 0, {
 *       onSuccess: ({ id, object, deleted }) => {
 *         console.log(id)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default Category
 *
 * @customNamespace Hooks.Admin.Product Categories
 * @category Mutations
 */
declare const useAdminDeleteProductCategory: (id: string, options?: UseMutationOptions<Response<AdminProductCategoriesCategoryDeleteRes>, Error, void>) => _tanstack_react_query.UseMutationResult<Response<_medusajs_medusa.DeleteResponse>, Error, void, unknown>;
/**
 * This hook adds a list of products to a product category.
 *
 * @example
 * import React from "react"
 * import { useAdminAddProductsToCategory } from "medusa-react"
 *
 * type ProductsData = {
 *   id: string
 * }
 *
 * type Props = {
 *   productCategoryId: string
 * }
 *
 * const Category = ({
 *   productCategoryId
 * }: Props) => {
 *   const addProducts = useAdminAddProductsToCategory(
 *     productCategoryId
 *   )
 *   // ...
 *
 *   const handleAddProducts = (
 *     productIds: ProductsData[]
 *   ) => {
 *     addProducts.mutate({
 *       product_ids: productIds
 *     }, {
 *       onSuccess: ({ product_category }) => {
 *         console.log(product_category.products)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default Category
 *
 * @customNamespace Hooks.Admin.Product Categories
 * @category Mutations
 */
declare const useAdminAddProductsToCategory: (id: string, options?: UseMutationOptions<Response<AdminProductCategoriesCategoryRes>, Error, AdminPostProductCategoriesCategoryProductsBatchReq>) => _tanstack_react_query.UseMutationResult<Response<AdminProductCategoriesCategoryRes>, Error, AdminPostProductCategoriesCategoryProductsBatchReq, unknown>;
/**
 * This hook removes a list of products from a product category.
 *
 * @example
 * import React from "react"
 * import { useAdminDeleteProductsFromCategory } from "medusa-react"
 *
 * type ProductsData = {
 *   id: string
 * }
 *
 * type Props = {
 *   productCategoryId: string
 * }
 *
 * const Category = ({
 *   productCategoryId
 * }: Props) => {
 *   const deleteProducts = useAdminDeleteProductsFromCategory(
 *     productCategoryId
 *   )
 *   // ...
 *
 *   const handleDeleteProducts = (
 *     productIds: ProductsData[]
 *   ) => {
 *     deleteProducts.mutate({
 *       product_ids: productIds
 *     }, {
 *       onSuccess: ({ product_category }) => {
 *         console.log(product_category.products)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default Category
 *
 * @customNamespace Hooks.Admin.Product Categories
 * @category Mutations
 */
declare const useAdminDeleteProductsFromCategory: (id: string, options?: UseMutationOptions<Response<AdminProductCategoriesCategoryRes>, Error, AdminDeleteProductCategoriesCategoryProductsBatchReq>) => _tanstack_react_query.UseMutationResult<Response<AdminProductCategoriesCategoryRes>, Error, AdminDeleteProductCategoriesCategoryProductsBatchReq, unknown>;

declare const adminProductTagKeys: TQueryKey<"admin_product_tags", any, string>;
type ProductQueryKeys$1 = typeof adminProductTagKeys;
/**
 * This hook retrieves a list of product tags. The product tags can be filtered by fields such as `q` or `value` passed
 * in the `query` parameter. The product tags can also be sorted or paginated.
 *
 * @example
 * To list product tags:
 *
 * ```tsx
 * import React from "react"
 * import { useAdminProductTags } from "medusa-react"
 *
 * function ProductTags() {
 *   const {
 *     product_tags,
 *     isLoading
 *   } = useAdminProductTags()
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {product_tags && !product_tags.length && (
 *         <span>No Product Tags</span>
 *       )}
 *       {product_tags && product_tags.length > 0 && (
 *         <ul>
 *           {product_tags.map(
 *             (tag) => (
 *               <li key={tag.id}>{tag.value}</li>
 *             )
 *           )}
 *         </ul>
 *       )}
 *     </div>
 *   )
 * }
 *
 * export default ProductTags
 * ```
 *
 * By default, only the first `10` records are retrieved. You can control pagination by specifying the `limit` and `offset` properties:
 *
 * ```tsx
 * import React from "react"
 * import { useAdminProductTags } from "medusa-react"
 *
 * function ProductTags() {
 *   const {
 *     product_tags,
 *     limit,
 *     offset,
 *     isLoading
 *   } = useAdminProductTags({
 *     limit: 20,
 *     offset: 0
 *   })
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {product_tags && !product_tags.length && (
 *         <span>No Product Tags</span>
 *       )}
 *       {product_tags && product_tags.length > 0 && (
 *         <ul>
 *           {product_tags.map(
 *             (tag) => (
 *               <li key={tag.id}>{tag.value}</li>
 *             )
 *           )}
 *         </ul>
 *       )}
 *     </div>
 *   )
 * }
 *
 * export default ProductTags
 * ```
 *
 * @customNamespace Hooks.Admin.Product Tags
 * @category Queries
 */
declare const useAdminProductTags: (query?: AdminGetProductTagsParams, options?: UseQueryOptionsWrapper<Response<AdminProductTagsListRes>, Error, ReturnType<ProductQueryKeys$1["list"]>>) => {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: true;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminProductTagsListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly product_tags?: _medusajs_medusa.ProductTag[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: true;
    readonly status: "success";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminProductTagsListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly product_tags?: _medusajs_medusa.ProductTag[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: true;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminProductTagsListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly product_tags?: _medusajs_medusa.ProductTag[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: true;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "loading";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminProductTagsListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly product_tags?: _medusajs_medusa.ProductTag[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
};

declare const adminProductTypeKeys: TQueryKey<"admin_product_types", any, string>;
type ProductTypesQueryKeys = typeof adminProductTypeKeys;
/**
 * This hook retrieves a list of product types. The product types can be filtered by fields such as `q` or `value` passed in the `query` parameter.
 * The product types can also be sorted or paginated.
 *
 * @example
 * To list product types:
 *
 * ```tsx
 * import React from "react"
 * import { useAdminProductTypes } from "medusa-react"
 *
 * function ProductTypes() {
 *   const {
 *     product_types,
 *     isLoading
 *   } = useAdminProductTypes()
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {product_types && !product_types.length && (
 *         <span>No Product Tags</span>
 *       )}
 *       {product_types && product_types.length > 0 && (
 *         <ul>
 *           {product_types.map(
 *             (type) => (
 *               <li key={type.id}>{type.value}</li>
 *             )
 *           )}
 *         </ul>
 *       )}
 *     </div>
 *   )
 * }
 *
 * export default ProductTypes
 * ```
 *
 * By default, only the first `20` records are retrieved. You can control pagination by specifying the `limit` and `offset` properties:
 *
 * ```tsx
 * import React from "react"
 * import { useAdminProductTypes } from "medusa-react"
 *
 * function ProductTypes() {
 *   const {
 *     product_types,
 *     limit,
 *     offset,
 *     isLoading
 *   } = useAdminProductTypes({
 *     limit: 10,
 *     offset: 0
 *   })
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {product_types && !product_types.length && (
 *         <span>No Product Tags</span>
 *       )}
 *       {product_types && product_types.length > 0 && (
 *         <ul>
 *           {product_types.map(
 *             (type) => (
 *               <li key={type.id}>{type.value}</li>
 *             )
 *           )}
 *         </ul>
 *       )}
 *     </div>
 *   )
 * }
 *
 * export default ProductTypes
 * ```
 *
 * @customNamespace Hooks.Admin.Product Types
 * @category Queries
 */
declare const useAdminProductTypes: (query?: AdminGetProductTypesParams, options?: UseQueryOptionsWrapper<Response<AdminProductTypesListRes>, Error, ReturnType<ProductTypesQueryKeys["list"]>>) => {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: true;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminProductTypesListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly product_types?: _medusajs_medusa.ProductType[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: true;
    readonly status: "success";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminProductTypesListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly product_types?: _medusajs_medusa.ProductType[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: true;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminProductTypesListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly product_types?: _medusajs_medusa.ProductType[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: true;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "loading";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminProductTypesListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly product_types?: _medusajs_medusa.ProductType[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
};

declare const adminProductKeys: TQueryKey<"admin_products", any, string>;
type ProductQueryKeys = typeof adminProductKeys;
/**
 * This hook retrieves a list of products. The products can be filtered by fields such as `q` or `status` passed in
 * the `query` parameter. The products can also be sorted or paginated.
 *
 * @example
 * To list products:
 *
 * ```tsx
 * import React from "react"
 * import { useAdminProducts } from "medusa-react"
 *
 * const Products = () => {
 *   const { products, isLoading } = useAdminProducts()
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {products && !products.length && <span>No Products</span>}
 *       {products && products.length > 0 && (
 *         <ul>
 *           {products.map((product) => (
 *             <li key={product.id}>{product.title}</li>
 *           ))}
 *         </ul>
 *       )}
 *     </div>
 *   )
 * }
 *
 * export default Products
 * ```
 *
 * To specify relations that should be retrieved within the products:
 *
 * ```tsx
 * import React from "react"
 * import { useAdminProducts } from "medusa-react"
 *
 * const Products = () => {
 *   const { products, isLoading } = useAdminProducts({
 *     expand: "images"
 *   })
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {products && !products.length && <span>No Products</span>}
 *       {products && products.length > 0 && (
 *         <ul>
 *           {products.map((product) => (
 *             <li key={product.id}>{product.title}</li>
 *           ))}
 *         </ul>
 *       )}
 *     </div>
 *   )
 * }
 *
 * export default Products
 * ```
 *
 * By default, only the first `50` records are retrieved. You can control pagination by specifying the `limit` and `offset` properties:
 *
 * ```tsx
 * import React from "react"
 * import { useAdminProducts } from "medusa-react"
 *
 * const Products = () => {
 *   const {
 *     products,
 *     limit,
 *     offset,
 *     isLoading
 *   } = useAdminProducts({
 *     expand: "images",
 *     limit: 20,
 *     offset: 0
 *   })
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {products && !products.length && <span>No Products</span>}
 *       {products && products.length > 0 && (
 *         <ul>
 *           {products.map((product) => (
 *             <li key={product.id}>{product.title}</li>
 *           ))}
 *         </ul>
 *       )}
 *     </div>
 *   )
 * }
 *
 * export default Products
 * ```
 *
 * @customNamespace Hooks.Admin.Products
 * @category Queries
 */
declare const useAdminProducts: (query?: AdminGetProductsParams, options?: UseQueryOptionsWrapper<Response<AdminProductsListRes>, Error, ReturnType<ProductQueryKeys["list"]>>) => {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: true;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminProductsListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly products?: (_medusajs_medusa.Product | _medusajs_medusa_dist_types_pricing.PricedProduct)[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: true;
    readonly status: "success";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminProductsListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly products?: (_medusajs_medusa.Product | _medusajs_medusa_dist_types_pricing.PricedProduct)[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: true;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminProductsListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly products?: (_medusajs_medusa.Product | _medusajs_medusa_dist_types_pricing.PricedProduct)[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: true;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "loading";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminProductsListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly products?: (_medusajs_medusa.Product | _medusajs_medusa_dist_types_pricing.PricedProduct)[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
};
/**
 * This hook retrieves a product's details.
 *
 * @example
 * import React from "react"
 * import { useAdminProduct } from "medusa-react"
 *
 * type Props = {
 *   productId: string
 * }
 *
 * const Product = ({ productId }: Props) => {
 *   const {
 *     product,
 *     isLoading,
 *   } = useAdminProduct(productId)
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {product && <span>{product.title}</span>}
 *
 *     </div>
 *   )
 * }
 *
 * export default Product
 *
 * @customNamespace Hooks.Admin.Products
 * @category Queries
 */
declare const useAdminProduct: (id: string, query?: AdminGetProductParams, options?: UseQueryOptionsWrapper<Response<AdminProductsRes>, Error, ReturnType<ProductQueryKeys["detail"]>>) => {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: true;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminProductsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly product?: _medusajs_medusa.Product | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: true;
    readonly status: "success";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminProductsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly product?: _medusajs_medusa.Product | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: true;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminProductsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly product?: _medusajs_medusa.Product | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: true;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "loading";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminProductsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly product?: _medusajs_medusa.Product | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
};
/**
 * This hook retrieves a list of Product Tags with how many times each is used in products.
 *
 * @example
 * import React from "react"
 * import { useAdminProductTagUsage } from "medusa-react"
 *
 * const ProductTags = (productId: string) => {
 *   const { tags, isLoading } = useAdminProductTagUsage()
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {tags && !tags.length && <span>No Product Tags</span>}
 *       {tags && tags.length > 0 && (
 *         <ul>
 *           {tags.map((tag) => (
 *             <li key={tag.id}>{tag.value} - {tag.usage_count}</li>
 *           ))}
 *         </ul>
 *       )}
 *     </div>
 *   )
 * }
 *
 * export default ProductTags
 *
 * @customNamespace Hooks.Admin.Products
 * @category Queries
 */
declare const useAdminProductTagUsage: (options?: UseQueryOptionsWrapper<Response<AdminProductsListTagsRes>, Error, ReturnType<ProductQueryKeys["detail"]>>) => {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: true;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminProductsListTagsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly tags?: (Pick<_medusajs_medusa.ProductTag, "value" | "id"> & {
        usage_count: number;
    })[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: true;
    readonly status: "success";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminProductsListTagsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly tags?: (Pick<_medusajs_medusa.ProductTag, "value" | "id"> & {
        usage_count: number;
    })[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: true;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminProductsListTagsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly tags?: (Pick<_medusajs_medusa.ProductTag, "value" | "id"> & {
        usage_count: number;
    })[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: true;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "loading";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminProductsListTagsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly tags?: (Pick<_medusajs_medusa.ProductTag, "value" | "id"> & {
        usage_count: number;
    })[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
};

/**
 * This hook creates a new Product. This hook can also be used to create a gift card if the `is_giftcard` field is set to `true`.
 *
 * @example
 * import React from "react"
 * import { useAdminCreateProduct } from "medusa-react"
 *
 * type CreateProductData = {
 *   title: string
 *   is_giftcard: boolean
 *   discountable: boolean
 *   options: {
 *     title: string
 *   }[]
 *   variants: {
 *     title: string
 *     prices: {
 *       amount: number
 *       currency_code :string
 *     }[]
 *     options: {
 *       value: string
 *     }[]
 *   }[],
 *   collection_id: string
 *   categories: {
 *     id: string
 *   }[]
 *   type: {
 *     value: string
 *   }
 *   tags: {
 *     value: string
 *   }[]
 * }
 *
 * const CreateProduct = () => {
 *   const createProduct = useAdminCreateProduct()
 *   // ...
 *
 *   const handleCreate = (productData: CreateProductData) => {
 *     createProduct.mutate(productData, {
 *       onSuccess: ({ product }) => {
 *         console.log(product.id)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default CreateProduct
 *
 * @customNamespace Hooks.Admin.Products
 * @category Mutations
 */
declare const useAdminCreateProduct: (options?: UseMutationOptions<Response<AdminProductsRes>, Error, AdminPostProductsReq>) => _tanstack_react_query.UseMutationResult<Response<AdminProductsRes>, Error, AdminPostProductsReq, unknown>;
/**
 * This hook updates a Product's details.
 *
 * @example
 * import React from "react"
 * import { useAdminUpdateProduct } from "medusa-react"
 *
 * type Props = {
 *   productId: string
 * }
 *
 * const Product = ({ productId }: Props) => {
 *   const updateProduct = useAdminUpdateProduct(
 *     productId
 *   )
 *   // ...
 *
 *   const handleUpdate = (
 *     title: string
 *   ) => {
 *     updateProduct.mutate({
 *       title,
 *     }, {
 *       onSuccess: ({ product }) => {
 *         console.log(product.id)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default Product
 *
 * @customNamespace Hooks.Admin.Products
 * @category Mutations
 */
declare const useAdminUpdateProduct: (id: string, options?: UseMutationOptions<Response<AdminProductsRes>, Error, AdminPostProductsProductReq>) => _tanstack_react_query.UseMutationResult<Response<AdminProductsRes>, Error, AdminPostProductsProductReq, unknown>;
/**
 * This hook deletes a product and its associated product variants and options.
 *
 * @example
 * import React from "react"
 * import { useAdminDeleteProduct } from "medusa-react"
 *
 * type Props = {
 *   productId: string
 * }
 *
 * const Product = ({ productId }: Props) => {
 *   const deleteProduct = useAdminDeleteProduct(
 *     productId
 *   )
 *   // ...
 *
 *   const handleDelete = () => {
 *     deleteProduct.mutate(void 0, {
 *       onSuccess: ({ id, object, deleted}) => {
 *         console.log(id)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default Product
 *
 * @customNamespace Hooks.Admin.Products
 * @category Mutations
 */
declare const useAdminDeleteProduct: (id: string, options?: UseMutationOptions<Response<AdminProductsDeleteRes>, Error, void>) => _tanstack_react_query.UseMutationResult<Response<AdminProductsDeleteRes>, Error, void, unknown>;
/**
 * This hook creates a product variant associated with a product. Each product variant must have a unique combination of product option values.
 *
 * @example
 * import React from "react"
 * import { useAdminCreateVariant } from "medusa-react"
 *
 * type CreateVariantData = {
 *   title: string
 *   prices: {
 *     amount: number
 *     currency_code: string
 *   }[]
 *   options: {
 *     option_id: string
 *     value: string
 *   }[]
 * }
 *
 * type Props = {
 *   productId: string
 * }
 *
 * const CreateProductVariant = ({ productId }: Props) => {
 *   const createVariant = useAdminCreateVariant(
 *     productId
 *   )
 *   // ...
 *
 *   const handleCreate = (
 *     variantData: CreateVariantData
 *   ) => {
 *     createVariant.mutate(variantData, {
 *       onSuccess: ({ product }) => {
 *         console.log(product.variants)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default CreateProductVariant
 *
 * @customNamespace Hooks.Admin.Products
 * @category Mutations
 */
declare const useAdminCreateVariant: (productId: string, options?: UseMutationOptions<Response<AdminProductsRes>, Error, AdminPostProductsProductVariantsReq>) => _tanstack_react_query.UseMutationResult<Response<AdminProductsRes>, Error, AdminPostProductsProductVariantsReq, unknown>;
type AdminUpdateVariantReq = AdminPostProductsProductVariantsVariantReq & {
    /**
     * The product variant's ID.
     */
    variant_id: string;
};
/**
 * This hook updates a product variant's details.
 *
 * @example
 * import React from "react"
 * import { useAdminUpdateVariant } from "medusa-react"
 *
 * type Props = {
 *   productId: string
 *   variantId: string
 * }
 *
 * const ProductVariant = ({
 *   productId,
 *   variantId
 * }: Props) => {
 *   const updateVariant = useAdminUpdateVariant(
 *     productId
 *   )
 *   // ...
 *
 *   const handleUpdate = (title: string) => {
 *     updateVariant.mutate({
 *       variant_id: variantId,
 *       title,
 *     }, {
 *       onSuccess: ({ product }) => {
 *         console.log(product.variants)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default ProductVariant
 *
 * @customNamespace Hooks.Admin.Products
 * @category Mutations
 */
declare const useAdminUpdateVariant: (productId: string, options?: UseMutationOptions<Response<AdminProductsRes>, Error, AdminUpdateVariantReq>) => _tanstack_react_query.UseMutationResult<Response<AdminProductsRes>, Error, AdminUpdateVariantReq, unknown>;
/**
 * This hook deletes a product variant.
 *
 * @typeParamDefinition string - The ID of the product variant to delete.
 *
 * @example
 * import React from "react"
 * import { useAdminDeleteVariant } from "medusa-react"
 *
 * type Props = {
 *   productId: string
 *   variantId: string
 * }
 *
 * const ProductVariant = ({
 *   productId,
 *   variantId
 * }: Props) => {
 *   const deleteVariant = useAdminDeleteVariant(
 *     productId
 *   )
 *   // ...
 *
 *   const handleDelete = () => {
 *     deleteVariant.mutate(variantId, {
 *       onSuccess: ({ variant_id, object, deleted, product }) => {
 *         console.log(product.variants)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default ProductVariant
 *
 * @customNamespace Hooks.Admin.Products
 * @category Mutations
 */
declare const useAdminDeleteVariant: (productId: string, options?: UseMutationOptions<Response<AdminProductsDeleteVariantRes>, Error, string>) => _tanstack_react_query.UseMutationResult<Response<AdminProductsDeleteVariantRes>, Error, string, unknown>;
/**
 * This hook adds a product option to a product.
 *
 * @example
 * import React from "react"
 * import { useAdminCreateProductOption } from "medusa-react"
 *
 * type Props = {
 *   productId: string
 * }
 *
 * const CreateProductOption = ({ productId }: Props) => {
 *   const createOption = useAdminCreateProductOption(
 *     productId
 *   )
 *   // ...
 *
 *   const handleCreate = (
 *     title: string
 *   ) => {
 *     createOption.mutate({
 *       title
 *     }, {
 *       onSuccess: ({ product }) => {
 *         console.log(product.options)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default CreateProductOption
 *
 * @customNamespace Hooks.Admin.Products
 * @category Mutations
 */
declare const useAdminCreateProductOption: (productId: string, options?: UseMutationOptions<Response<AdminProductsRes>, Error, AdminPostProductsProductOptionsReq>) => _tanstack_react_query.UseMutationResult<Response<AdminProductsRes>, Error, AdminPostProductsProductOptionsReq, unknown>;
type AdminUpdateProductOptionReq = AdminPostProductsProductOptionsOption & {
    /**
     * The ID of the product option to update.
     */
    option_id: string;
};
/**
 * This hook updates a product option's details.
 *
 * @example
 * import React from "react"
 * import { useAdminUpdateProductOption } from "medusa-react"
 *
 * type Props = {
 *   productId: string
 *   optionId: string
 * }
 *
 * const ProductOption = ({
 *   productId,
 *   optionId
 * }: Props) => {
 *   const updateOption = useAdminUpdateProductOption(
 *     productId
 *   )
 *   // ...
 *
 *   const handleUpdate = (
 *     title: string
 *   ) => {
 *     updateOption.mutate({
 *       option_id: optionId,
 *       title,
 *     }, {
 *       onSuccess: ({ product }) => {
 *         console.log(product.options)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default ProductOption
 *
 * @customNamespace Hooks.Admin.Products
 * @category Mutations
 */
declare const useAdminUpdateProductOption: (productId: string, options?: UseMutationOptions<Response<AdminProductsRes>, Error, AdminUpdateProductOptionReq>) => _tanstack_react_query.UseMutationResult<Response<AdminProductsRes>, Error, AdminUpdateProductOptionReq, unknown>;
/**
 * This hook deletes a product option. If there are product variants that use this product option,
 * they must be deleted before deleting the product option.
 *
 * @typeParamDefinition string - The ID of the product option to delete.
 *
 * @example
 * import React from "react"
 * import { useAdminDeleteProductOption } from "medusa-react"
 *
 * type Props = {
 *   productId: string
 *   optionId: string
 * }
 *
 * const ProductOption = ({
 *   productId,
 *   optionId
 * }: Props) => {
 *   const deleteOption = useAdminDeleteProductOption(
 *     productId
 *   )
 *   // ...
 *
 *   const handleDelete = () => {
 *     deleteOption.mutate(optionId, {
 *       onSuccess: ({ option_id, object, deleted, product }) => {
 *         console.log(product.options)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default ProductOption
 *
 * @customNamespace Hooks.Admin.Products
 * @category Mutations
 */
declare const useAdminDeleteProductOption: (productId: string, options?: UseMutationOptions<Response<AdminProductsDeleteOptionRes>, Error, string>) => _tanstack_react_query.UseMutationResult<Response<AdminProductsDeleteOptionRes>, Error, string, unknown>;

declare const adminPublishableApiKeysKeys: {
    detailSalesChannels(id: string, query?: any): readonly ["admin_publishable_api_keys", "detail", string, "sales_channels", any];
    all: ["admin_publishable_api_keys"];
    lists: () => ["admin_publishable_api_keys", "list"];
    list: (query?: any) => ["admin_publishable_api_keys", "list", {
        query: any;
    }];
    details: () => ["admin_publishable_api_keys", "detail"];
    detail: (id: string) => ["admin_publishable_api_keys", "detail", string];
};
type PublishableApiKeyQueryKeys = typeof adminPublishableApiKeysKeys;
/**
 * This hook retrieves a publishable API key's details.
 *
 * @example
 * import React from "react"
 * import {
 *   useAdminPublishableApiKey,
 * } from "medusa-react"
 *
 * type Props = {
 *   publishableApiKeyId: string
 * }
 *
 * const PublishableApiKey = ({
 *   publishableApiKeyId
 * }: Props) => {
 *   const { publishable_api_key, isLoading } =
 *     useAdminPublishableApiKey(
 *       publishableApiKeyId
 *     )
 *
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {publishable_api_key && <span>{publishable_api_key.title}</span>}
 *     </div>
 *   )
 * }
 *
 * export default PublishableApiKey
 *
 * @customNamespace Hooks.Admin.Publishable API Keys
 * @category Queries
 */
declare const useAdminPublishableApiKey: (id: string, options?: UseQueryOptionsWrapper<Response<AdminPublishableApiKeysRes>, Error, ReturnType<PublishableApiKeyQueryKeys["detail"]>>) => {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: true;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminPublishableApiKeysRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly publishable_api_key?: _medusajs_medusa.PublishableApiKey | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: true;
    readonly status: "success";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminPublishableApiKeysRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly publishable_api_key?: _medusajs_medusa.PublishableApiKey | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: true;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminPublishableApiKeysRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly publishable_api_key?: _medusajs_medusa.PublishableApiKey | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: true;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "loading";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminPublishableApiKeysRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly publishable_api_key?: _medusajs_medusa.PublishableApiKey | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
};
/**
 * This hook retrieves a list of publishable API keys. The publishable API keys can be filtered by fields such as `q` passed in `query`.
 * The publishable API keys can also be paginated.
 *
 * @example
 * To list publishable API keys:
 *
 * ```tsx
 * import React from "react"
 * import { PublishableApiKey } from "@medusajs/medusa"
 * import { useAdminPublishableApiKeys } from "medusa-react"
 *
 * const PublishableApiKeys = () => {
 *   const { publishable_api_keys, isLoading } =
 *     useAdminPublishableApiKeys()
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {publishable_api_keys && !publishable_api_keys.length && (
 *         <span>No Publishable API Keys</span>
 *       )}
 *       {publishable_api_keys &&
 *         publishable_api_keys.length > 0 && (
 *         <ul>
 *           {publishable_api_keys.map(
 *             (publishableApiKey: PublishableApiKey) => (
 *               <li key={publishableApiKey.id}>
 *                 {publishableApiKey.title}
 *               </li>
 *             )
 *           )}
 *         </ul>
 *       )}
 *     </div>
 *   )
 * }
 *
 * export default PublishableApiKeys
 * ```
 *
 * By default, only the first `20` records are retrieved. You can control pagination by specifying the `limit` and `offset` properties:
 *
 * ```tsx
 * import React from "react"
 * import { PublishableApiKey } from "@medusajs/medusa"
 * import { useAdminPublishableApiKeys } from "medusa-react"
 *
 * const PublishableApiKeys = () => {
 *   const {
 *     publishable_api_keys,
 *     limit,
 *     offset,
 *     isLoading
 *   } =
 *     useAdminPublishableApiKeys({
 *       limit: 50,
 *       offset: 0
 *     })
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {publishable_api_keys && !publishable_api_keys.length && (
 *         <span>No Publishable API Keys</span>
 *       )}
 *       {publishable_api_keys &&
 *         publishable_api_keys.length > 0 && (
 *         <ul>
 *           {publishable_api_keys.map(
 *             (publishableApiKey: PublishableApiKey) => (
 *               <li key={publishableApiKey.id}>
 *                 {publishableApiKey.title}
 *               </li>
 *             )
 *           )}
 *         </ul>
 *       )}
 *     </div>
 *   )
 * }
 *
 * export default PublishableApiKeys
 * ```
 *
 * @customNamespace Hooks.Admin.Publishable API Keys
 * @category Queries
 */
declare const useAdminPublishableApiKeys: (query?: GetPublishableApiKeysParams, options?: UseQueryOptionsWrapper<Response<AdminPublishableApiKeysListRes>, Error, ReturnType<PublishableApiKeyQueryKeys["list"]>>) => {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: true;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminPublishableApiKeysListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly publishable_api_keys?: _medusajs_medusa.PublishableApiKey[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: true;
    readonly status: "success";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminPublishableApiKeysListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly publishable_api_keys?: _medusajs_medusa.PublishableApiKey[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: true;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminPublishableApiKeysListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly publishable_api_keys?: _medusajs_medusa.PublishableApiKey[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: true;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "loading";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminPublishableApiKeysListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly publishable_api_keys?: _medusajs_medusa.PublishableApiKey[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
};
/**
 * This hook lists the sales channels associated with a publishable API key. The sales channels can be
 * filtered by fields such as `q` passed in the `query` parameter.
 *
 * @example
 * import React from "react"
 * import {
 *   useAdminPublishableApiKeySalesChannels,
 * } from "medusa-react"
 *
 * type Props = {
 *   publishableApiKeyId: string
 * }
 *
 * const SalesChannels = ({
 *   publishableApiKeyId
 * }: Props) => {
 *   const { sales_channels, isLoading } =
 *     useAdminPublishableApiKeySalesChannels(
 *       publishableApiKeyId
 *     )
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {sales_channels && !sales_channels.length && (
 *         <span>No Sales Channels</span>
 *       )}
 *       {sales_channels && sales_channels.length > 0 && (
 *         <ul>
 *           {sales_channels.map((salesChannel) => (
 *             <li key={salesChannel.id}>{salesChannel.name}</li>
 *           ))}
 *         </ul>
 *       )}
 *     </div>
 *   )
 * }
 *
 * export default SalesChannels
 *
 * @customNamespace Hooks.Admin.Publishable API Keys
 * @category Queries
 */
declare const useAdminPublishableApiKeySalesChannels: (id: string, query?: GetPublishableApiKeySalesChannelsParams, options?: UseQueryOptionsWrapper<Response<AdminPublishableApiKeysListSalesChannelsRes>, Error, ReturnType<PublishableApiKeyQueryKeys["detailSalesChannels"]>>) => {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: true;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminPublishableApiKeysListSalesChannelsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly sales_channels?: _medusajs_medusa.SalesChannel[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: true;
    readonly status: "success";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminPublishableApiKeysListSalesChannelsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly sales_channels?: _medusajs_medusa.SalesChannel[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: true;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminPublishableApiKeysListSalesChannelsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly sales_channels?: _medusajs_medusa.SalesChannel[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: true;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "loading";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminPublishableApiKeysListSalesChannelsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly sales_channels?: _medusajs_medusa.SalesChannel[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
};

/**
 * This hook creates a publishable API key.
 *
 * @example
 * import React from "react"
 * import { useAdminCreatePublishableApiKey } from "medusa-react"
 *
 * const CreatePublishableApiKey = () => {
 *   const createKey = useAdminCreatePublishableApiKey()
 *   // ...
 *
 *   const handleCreate = (title: string) => {
 *     createKey.mutate({
 *       title,
 *     }, {
 *       onSuccess: ({ publishable_api_key }) => {
 *         console.log(publishable_api_key.id)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default CreatePublishableApiKey
 *
 * @customNamespace Hooks.Admin.Publishable API Keys
 * @category Mutations
 */
declare const useAdminCreatePublishableApiKey: (options?: UseMutationOptions<Response<AdminPublishableApiKeysRes>, Error, AdminPostPublishableApiKeysReq>) => _tanstack_react_query.UseMutationResult<Response<AdminPublishableApiKeysRes>, Error, AdminPostPublishableApiKeysReq, unknown>;
/**
 * This hook updates a publishable API key's details.
 *
 * @example
 * import React from "react"
 * import { useAdminUpdatePublishableApiKey } from "medusa-react"
 *
 * type Props = {
 *   publishableApiKeyId: string
 * }
 *
 * const PublishableApiKey = ({
 *   publishableApiKeyId
 * }: Props) => {
 *   const updateKey = useAdminUpdatePublishableApiKey(
 *     publishableApiKeyId
 *   )
 *   // ...
 *
 *   const handleUpdate = (title: string) => {
 *     updateKey.mutate({
 *       title,
 *     }, {
 *       onSuccess: ({ publishable_api_key }) => {
 *         console.log(publishable_api_key.id)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default PublishableApiKey
 *
 * @customNamespace Hooks.Admin.Publishable API Keys
 * @category Mutations
 */
declare const useAdminUpdatePublishableApiKey: (id: string, options?: UseMutationOptions<Response<AdminPublishableApiKeysRes>, Error, AdminPostPublishableApiKeysPublishableApiKeyReq>) => _tanstack_react_query.UseMutationResult<Response<AdminPublishableApiKeysRes>, Error, AdminPostPublishableApiKeysPublishableApiKeyReq, unknown>;
/**
 * This hook deletes a publishable API key. Associated resources, such as sales channels, are not deleted.
 *
 * @example
 * import React from "react"
 * import { useAdminDeletePublishableApiKey } from "medusa-react"
 *
 * type Props = {
 *   publishableApiKeyId: string
 * }
 *
 * const PublishableApiKey = ({
 *   publishableApiKeyId
 * }: Props) => {
 *   const deleteKey = useAdminDeletePublishableApiKey(
 *     publishableApiKeyId
 *   )
 *   // ...
 *
 *   const handleDelete = () => {
 *     deleteKey.mutate(void 0, {
 *       onSuccess: ({ id, object, deleted }) => {
 *         console.log(id)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default PublishableApiKey
 *
 * @customNamespace Hooks.Admin.Publishable API Keys
 * @category Mutations
 */
declare const useAdminDeletePublishableApiKey: (id: string, options?: UseMutationOptions<Response<AdminPublishableApiKeyDeleteRes>, Error, void>) => _tanstack_react_query.UseMutationResult<Response<_medusajs_medusa.DeleteResponse>, Error, void, unknown>;
/**
 * This hook revokes a publishable API key. Revoking the publishable API Key can't be undone, and the key can't be used in future requests.
 *
 * @example
 * import React from "react"
 * import { useAdminRevokePublishableApiKey } from "medusa-react"
 *
 * type Props = {
 *   publishableApiKeyId: string
 * }
 *
 * const PublishableApiKey = ({
 *   publishableApiKeyId
 * }: Props) => {
 *   const revokeKey = useAdminRevokePublishableApiKey(
 *     publishableApiKeyId
 *   )
 *   // ...
 *
 *   const handleRevoke = () => {
 *     revokeKey.mutate(void 0, {
 *       onSuccess: ({ publishable_api_key }) => {
 *         console.log(publishable_api_key.revoked_at)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default PublishableApiKey
 *
 * @customNamespace Hooks.Admin.Publishable API Keys
 * @category Mutations
 */
declare const useAdminRevokePublishableApiKey: (id: string, options?: UseMutationOptions<Response<AdminPublishableApiKeysRes>, Error>) => _tanstack_react_query.UseMutationResult<Response<AdminPublishableApiKeysRes>, Error, void, unknown>;
/**
 * This hook adds a list of sales channels to a publishable API key.
 *
 * @example
 * import React from "react"
 * import {
 *   useAdminAddPublishableKeySalesChannelsBatch,
 * } from "medusa-react"
 *
 * type Props = {
 *   publishableApiKeyId: string
 * }
 *
 * const PublishableApiKey = ({
 *   publishableApiKeyId
 * }: Props) => {
 *   const addSalesChannels =
 *     useAdminAddPublishableKeySalesChannelsBatch(
 *       publishableApiKeyId
 *     )
 *   // ...
 *
 *   const handleAdd = (salesChannelId: string) => {
 *     addSalesChannels.mutate({
 *       sales_channel_ids: [
 *         {
 *           id: salesChannelId,
 *         },
 *       ],
 *     }, {
 *       onSuccess: ({ publishable_api_key }) => {
 *         console.log(publishable_api_key.id)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default PublishableApiKey
 *
 * @customNamespace Hooks.Admin.Publishable API Keys
 * @category Mutations
 */
declare const useAdminAddPublishableKeySalesChannelsBatch: (id: string, options?: UseMutationOptions<Response<AdminPublishableApiKeysRes>, Error, AdminPostPublishableApiKeySalesChannelsBatchReq>) => _tanstack_react_query.UseMutationResult<Response<AdminPublishableApiKeysRes>, Error, AdminPostPublishableApiKeySalesChannelsBatchReq, unknown>;
/**
 * This hook removes a list of sales channels from a publishable API key. This doesn't delete the sales channels and only
 * removes the association between them and the publishable API key.
 *
 * @example
 * import React from "react"
 * import {
 *   useAdminRemovePublishableKeySalesChannelsBatch,
 * } from "medusa-react"
 *
 * type Props = {
 *   publishableApiKeyId: string
 * }
 *
 * const PublishableApiKey = ({
 *   publishableApiKeyId
 * }: Props) => {
 *   const deleteSalesChannels =
 *     useAdminRemovePublishableKeySalesChannelsBatch(
 *       publishableApiKeyId
 *     )
 *   // ...
 *
 *   const handleDelete = (salesChannelId: string) => {
 *     deleteSalesChannels.mutate({
 *       sales_channel_ids: [
 *         {
 *           id: salesChannelId,
 *         },
 *       ],
 *     }, {
 *       onSuccess: ({ publishable_api_key }) => {
 *         console.log(publishable_api_key.id)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default PublishableApiKey
 *
 * @customNamespace Hooks.Admin.Publishable API Keys
 * @category Mutations
 */
declare const useAdminRemovePublishableKeySalesChannelsBatch: (id: string, options?: UseMutationOptions<Response<AdminPublishableApiKeysRes>, Error, AdminDeletePublishableApiKeySalesChannelsBatchReq>) => _tanstack_react_query.UseMutationResult<Response<AdminPublishableApiKeysRes>, Error, AdminDeletePublishableApiKeySalesChannelsBatchReq, unknown>;

declare const adminRegionKeys: TQueryKey<"admin_regions", any, string>;
type RegionQueryKeys = typeof adminRegionKeys;
/**
 * This hook retrieves a list of Regions. The regions can be filtered by fields such as `created_at` passed in the `query` parameter.
 * The regions can also be paginated.
 *
 * @example
 * To list regions:
 *
 * ```tsx
 * import React from "react"
 * import { useAdminRegions } from "medusa-react"
 *
 * const Regions = () => {
 *   const { regions, isLoading } = useAdminRegions()
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {regions && !regions.length && <span>No Regions</span>}
 *       {regions && regions.length > 0 && (
 *         <ul>
 *           {regions.map((region) => (
 *             <li key={region.id}>{region.name}</li>
 *           ))}
 *         </ul>
 *       )}
 *     </div>
 *   )
 * }
 *
 * export default Regions
 * ```
 *
 * By default, only the first `50` records are retrieved. You can control pagination by specifying the `limit` and `offset` properties:
 *
 * ```tsx
 * import React from "react"
 * import { useAdminRegions } from "medusa-react"
 *
 * const Regions = () => {
 *   const {
 *     regions,
 *     limit,
 *     offset,
 *     isLoading
 *   } = useAdminRegions({
 *     limit: 20,
 *     offset: 0
 *   })
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {regions && !regions.length && <span>No Regions</span>}
 *       {regions && regions.length > 0 && (
 *         <ul>
 *           {regions.map((region) => (
 *             <li key={region.id}>{region.name}</li>
 *           ))}
 *         </ul>
 *       )}
 *     </div>
 *   )
 * }
 *
 * export default Regions
 * ```
 *
 * @customNamespace Hooks.Admin.Regions
 * @category Queries
 */
declare const useAdminRegions: (query?: AdminGetRegionsParams, options?: UseQueryOptionsWrapper<Response<AdminRegionsListRes>, Error, ReturnType<RegionQueryKeys["list"]>>) => {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: true;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminRegionsListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly regions?: _medusajs_medusa.Region[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: true;
    readonly status: "success";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminRegionsListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly regions?: _medusajs_medusa.Region[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: true;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminRegionsListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly regions?: _medusajs_medusa.Region[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: true;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "loading";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminRegionsListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly regions?: _medusajs_medusa.Region[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
};
/**
 * This hook retrieves a region's details.
 *
 * @example
 * import React from "react"
 * import { useAdminRegion } from "medusa-react"
 *
 * type Props = {
 *   regionId: string
 * }
 *
 * const Region = ({
 *   regionId
 * }: Props) => {
 *   const { region, isLoading } = useAdminRegion(
 *     regionId
 *   )
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {region && <span>{region.name}</span>}
 *     </div>
 *   )
 * }
 *
 * export default Region
 *
 * @customNamespace Hooks.Admin.Regions
 * @category Queries
 */
declare const useAdminRegion: (id: string, options?: UseQueryOptionsWrapper<Response<AdminRegionsRes>, Error, ReturnType<RegionQueryKeys["detail"]>>) => {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: true;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminRegionsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly region?: _medusajs_medusa.Region | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: true;
    readonly status: "success";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminRegionsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly region?: _medusajs_medusa.Region | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: true;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminRegionsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly region?: _medusajs_medusa.Region | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: true;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "loading";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminRegionsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly region?: _medusajs_medusa.Region | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
};
/**
 * This hook retrieves a list of fulfillment options available in a region.
 *
 * @example
 * import React from "react"
 * import {
 *   useAdminRegionFulfillmentOptions
 * } from "medusa-react"
 *
 * type Props = {
 *   regionId: string
 * }
 *
 * const Region = ({
 *   regionId
 * }: Props) => {
 *   const {
 *     fulfillment_options,
 *     isLoading
 *   } = useAdminRegionFulfillmentOptions(
 *     regionId
 *   )
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {fulfillment_options && !fulfillment_options.length && (
 *         <span>No Regions</span>
 *       )}
 *       {fulfillment_options &&
 *         fulfillment_options.length > 0 && (
 *         <ul>
 *           {fulfillment_options.map((option) => (
 *             <li key={option.provider_id}>
 *               {option.provider_id}
 *             </li>
 *           ))}
 *         </ul>
 *           )}
 *     </div>
 *   )
 * }
 *
 * export default Region
 *
 * @customNamespace Hooks.Admin.Regions
 * @category Queries
 */
declare const useAdminRegionFulfillmentOptions: (regionId: string, options?: UseQueryOptionsWrapper<Response<AdminGetRegionsRegionFulfillmentOptionsRes>, Error, ReturnType<RegionQueryKeys["detail"]>>) => {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: true;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminGetRegionsRegionFulfillmentOptionsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly fulfillment_options?: _medusajs_medusa.FulfillmentOption[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: true;
    readonly status: "success";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminGetRegionsRegionFulfillmentOptionsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly fulfillment_options?: _medusajs_medusa.FulfillmentOption[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: true;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminGetRegionsRegionFulfillmentOptionsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly fulfillment_options?: _medusajs_medusa.FulfillmentOption[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: true;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "loading";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminGetRegionsRegionFulfillmentOptionsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly fulfillment_options?: _medusajs_medusa.FulfillmentOption[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
};

/**
 * This hook creates a region.
 *
 * @example
 * import React from "react"
 * import { useAdminCreateRegion } from "medusa-react"
 *
 * type CreateData = {
 *   name: string
 *   currency_code: string
 *   tax_rate: number
 *   payment_providers: string[]
 *   fulfillment_providers: string[]
 *   countries: string[]
 * }
 *
 * const CreateRegion = () => {
 *   const createRegion = useAdminCreateRegion()
 *   // ...
 *
 *   const handleCreate = (regionData: CreateData) => {
 *     createRegion.mutate(regionData, {
 *       onSuccess: ({ region }) => {
 *         console.log(region.id)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default CreateRegion
 *
 * @customNamespace Hooks.Admin.Regions
 * @category Mutations
 */
declare const useAdminCreateRegion: (options?: UseMutationOptions<Response<AdminRegionsRes>, Error, AdminPostRegionsReq>) => _tanstack_react_query.UseMutationResult<Response<AdminRegionsRes>, Error, AdminPostRegionsReq, unknown>;
/**
 * This hook updates a region's details.
 *
 * @example
 * import React from "react"
 * import { useAdminUpdateRegion } from "medusa-react"
 *
 * type Props = {
 *   regionId: string
 * }
 *
 * const Region = ({
 *   regionId
 * }: Props) => {
 *   const updateRegion = useAdminUpdateRegion(regionId)
 *   // ...
 *
 *   const handleUpdate = (
 *     countries: string[]
 *   ) => {
 *     updateRegion.mutate({
 *       countries,
 *     }, {
 *       onSuccess: ({ region }) => {
 *         console.log(region.id)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default Region
 *
 * @customNamespace Hooks.Admin.Regions
 * @category Mutations
 */
declare const useAdminUpdateRegion: (id: string, options?: UseMutationOptions<Response<AdminRegionsRes>, Error, AdminPostRegionsRegionReq>) => _tanstack_react_query.UseMutationResult<Response<AdminRegionsRes>, Error, AdminPostRegionsRegionReq, unknown>;
/**
 * This hook deletes a region. Associated resources, such as providers or currencies are not deleted. Associated tax rates are deleted.
 *
 * @example
 * import React from "react"
 * import { useAdminDeleteRegion } from "medusa-react"
 *
 * type Props = {
 *   regionId: string
 * }
 *
 * const Region = ({
 *   regionId
 * }: Props) => {
 *   const deleteRegion = useAdminDeleteRegion(regionId)
 *   // ...
 *
 *   const handleDelete = () => {
 *     deleteRegion.mutate(void 0, {
 *       onSuccess: ({ id, object, deleted }) => {
 *         console.log(id)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default Region
 *
 * @customNamespace Hooks.Admin.Regions
 * @category Mutations
 */
declare const useAdminDeleteRegion: (id: string, options?: UseMutationOptions<Response<AdminRegionsDeleteRes>, Error, void>) => _tanstack_react_query.UseMutationResult<Response<_medusajs_medusa.DeleteResponse>, Error, void, unknown>;
/**
 * This hook adds a country to the list of countries in a region.
 *
 * @example
 * import React from "react"
 * import { useAdminRegionAddCountry } from "medusa-react"
 *
 * type Props = {
 *   regionId: string
 * }
 *
 * const Region = ({
 *   regionId
 * }: Props) => {
 *   const addCountry = useAdminRegionAddCountry(regionId)
 *   // ...
 *
 *   const handleAddCountry = (
 *     countryCode: string
 *   ) => {
 *     addCountry.mutate({
 *       country_code: countryCode
 *     }, {
 *       onSuccess: ({ region }) => {
 *         console.log(region.countries)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default Region
 *
 * @customNamespace Hooks.Admin.Regions
 * @category Mutations
 */
declare const useAdminRegionAddCountry: (id: string, options?: UseMutationOptions<Response<AdminRegionsRes>, Error, AdminPostRegionsRegionCountriesReq>) => _tanstack_react_query.UseMutationResult<Response<AdminRegionsRes>, Error, AdminPostRegionsRegionCountriesReq, unknown>;
/**
 * This hook deletes a country from the list of countries in a region. The country will still be available in the system, and it can be used in other regions.
 *
 * @typeParamDefinition string - The code of the country to delete from the region.
 *
 * @example
 * import React from "react"
 * import { useAdminRegionRemoveCountry } from "medusa-react"
 *
 * type Props = {
 *   regionId: string
 * }
 *
 * const Region = ({
 *   regionId
 * }: Props) => {
 *   const removeCountry = useAdminRegionRemoveCountry(regionId)
 *   // ...
 *
 *   const handleRemoveCountry = (
 *     countryCode: string
 *   ) => {
 *     removeCountry.mutate(countryCode, {
 *       onSuccess: ({ region }) => {
 *         console.log(region.countries)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default Region
 *
 * @customNamespace Hooks.Admin.Regions
 * @category Mutations
 */
declare const useAdminRegionRemoveCountry: (id: string, options?: UseMutationOptions<Response<AdminRegionsRes>, Error, string>) => _tanstack_react_query.UseMutationResult<Response<AdminRegionsRes>, Error, string, unknown>;
/**
 * This hook adds a fulfillment provider to the list of fulfullment providers in a region.
 *
 * @example
 * import React from "react"
 * import {
 *   useAdminRegionAddFulfillmentProvider
 * } from "medusa-react"
 *
 * type Props = {
 *   regionId: string
 * }
 *
 * const Region = ({
 *   regionId
 * }: Props) => {
 *   const addFulfillmentProvider =
 *     useAdminRegionAddFulfillmentProvider(regionId)
 *   // ...
 *
 *   const handleAddFulfillmentProvider = (
 *     providerId: string
 *   ) => {
 *     addFulfillmentProvider.mutate({
 *       provider_id: providerId
 *     }, {
 *       onSuccess: ({ region }) => {
 *         console.log(region.fulfillment_providers)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default Region
 *
 * @customNamespace Hooks.Admin.Regions
 * @category Mutations
 */
declare const useAdminRegionAddFulfillmentProvider: (id: string, options?: UseMutationOptions<Response<AdminRegionsRes>, Error, AdminPostRegionsRegionFulfillmentProvidersReq>) => _tanstack_react_query.UseMutationResult<Response<AdminRegionsRes>, Error, AdminPostRegionsRegionFulfillmentProvidersReq, unknown>;
/**
 * This hook deletes a fulfillment provider from a region. The fulfillment provider will still be available for usage in other regions.
 *
 * @typeParamDefinition string - The fulfillment provider's ID to delete from the region.
 *
 * @example
 * import React from "react"
 * import {
 *   useAdminRegionDeleteFulfillmentProvider
 * } from "medusa-react"
 *
 * type Props = {
 *   regionId: string
 * }
 *
 * const Region = ({
 *   regionId
 * }: Props) => {
 *   const removeFulfillmentProvider =
 *     useAdminRegionDeleteFulfillmentProvider(regionId)
 *   // ...
 *
 *   const handleRemoveFulfillmentProvider = (
 *     providerId: string
 *   ) => {
 *     removeFulfillmentProvider.mutate(providerId, {
 *       onSuccess: ({ region }) => {
 *         console.log(region.fulfillment_providers)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default Region
 *
 * @customNamespace Hooks.Admin.Regions
 * @category Mutations
 */
declare const useAdminRegionDeleteFulfillmentProvider: (id: string, options?: UseMutationOptions<Response<AdminRegionsRes>, Error, string>) => _tanstack_react_query.UseMutationResult<Response<AdminRegionsRes>, Error, string, unknown>;
/**
 * This hook adds a payment provider to the list of payment providers in a region.
 *
 * @example
 * import React from "react"
 * import {
 *   useAdminRegionAddPaymentProvider
 * } from "medusa-react"
 *
 * type Props = {
 *   regionId: string
 * }
 *
 * const Region = ({
 *   regionId
 * }: Props) => {
 *   const addPaymentProvider =
 *     useAdminRegionAddPaymentProvider(regionId)
 *   // ...
 *
 *   const handleAddPaymentProvider = (
 *     providerId: string
 *   ) => {
 *     addPaymentProvider.mutate({
 *       provider_id: providerId
 *     }, {
 *       onSuccess: ({ region }) => {
 *         console.log(region.payment_providers)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default Region
 *
 * @customNamespace Hooks.Admin.Regions
 * @category Mutations
 */
declare const useAdminRegionAddPaymentProvider: (id: string, options?: UseMutationOptions<Response<AdminRegionsRes>, Error, AdminPostRegionsRegionPaymentProvidersReq>) => _tanstack_react_query.UseMutationResult<Response<AdminRegionsRes>, Error, AdminPostRegionsRegionPaymentProvidersReq, unknown>;
/**
 * This hook deletes a payment provider from a region. The payment provider will still be available for usage in other regions.
 *
 * @typeParamDefinition string - The ID of the payment provider to delete from the region.
 *
 * @example
 * import React from "react"
 * import {
 *   useAdminRegionDeletePaymentProvider
 * } from "medusa-react"
 *
 * type Props = {
 *   regionId: string
 * }
 *
 * const Region = ({
 *   regionId
 * }: Props) => {
 *   const removePaymentProvider =
 *     useAdminRegionDeletePaymentProvider(regionId)
 *   // ...
 *
 *   const handleRemovePaymentProvider = (
 *     providerId: string
 *   ) => {
 *     removePaymentProvider.mutate(providerId, {
 *       onSuccess: ({ region }) => {
 *         console.log(region.payment_providers)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default Region
 *
 * @customNamespace Hooks.Admin.Regions
 * @category Mutations
 */
declare const useAdminRegionDeletePaymentProvider: (id: string, options?: UseMutationOptions<Response<AdminRegionsRes>, Error, string>) => _tanstack_react_query.UseMutationResult<Response<AdminRegionsRes>, Error, string, unknown>;

/**
 * This hook creates a reservation which can be associated with any resource, such as an order's line item.
 *
 * @example
 * import React from "react"
 * import { useAdminCreateReservation } from "medusa-react"
 *
 * const CreateReservation = () => {
 *   const createReservation = useAdminCreateReservation()
 *   // ...
 *
 *   const handleCreate = (
 *     locationId: string,
 *     inventoryItemId: string,
 *     quantity: number
 *   ) => {
 *     createReservation.mutate({
 *       location_id: locationId,
 *       inventory_item_id: inventoryItemId,
 *       quantity,
 *     }, {
 *       onSuccess: ({ reservation }) => {
 *         console.log(reservation.id)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default CreateReservation
 *
 * @customNamespace Hooks.Admin.Reservations
 * @category Mutations
 */
declare const useAdminCreateReservation: (options?: UseMutationOptions<Response<AdminReservationsRes>, Error, AdminPostReservationsReq>) => _tanstack_react_query.UseMutationResult<Response<AdminReservationsRes>, Error, AdminPostReservationsReq, unknown>;
/**
 * This hook updates a reservation's details.
 *
 * @example
 * import React from "react"
 * import { useAdminUpdateReservation } from "medusa-react"
 *
 * type Props = {
 *   reservationId: string
 * }
 *
 * const Reservation = ({ reservationId }: Props) => {
 *   const updateReservation = useAdminUpdateReservation(
 *     reservationId
 *   )
 *   // ...
 *
 *   const handleUpdate = (
 *     quantity: number
 *   ) => {
 *     updateReservation.mutate({
 *       quantity,
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default Reservation
 *
 * @customNamespace Hooks.Admin.Reservations
 * @category Mutations
 */
declare const useAdminUpdateReservation: (id: string, options?: UseMutationOptions<Response<AdminReservationsRes>, Error, AdminPostReservationsReservationReq>) => _tanstack_react_query.UseMutationResult<Response<AdminReservationsRes>, Error, AdminPostReservationsReservationReq, unknown>;
/**
 * This hook deletes a reservation. Associated resources, such as the line item, will not be deleted.
 *
 * @example
 * import React from "react"
 * import { useAdminDeleteReservation } from "medusa-react"
 *
 * type Props = {
 *   reservationId: string
 * }
 *
 * const Reservation = ({ reservationId }: Props) => {
 *   const deleteReservation = useAdminDeleteReservation(
 *     reservationId
 *   )
 *   // ...
 *
 *   const handleDelete = () => {
 *     deleteReservation.mutate(void 0, {
 *       onSuccess: ({ id, object, deleted }) => {
 *         console.log(id)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default Reservation
 *
 * @customNamespace Hooks.Admin.Reservations
 * @category Mutations
 */
declare const useAdminDeleteReservation: (id: string, options?: UseMutationOptions<Response<AdminReservationsDeleteRes>, Error, void>) => _tanstack_react_query.UseMutationResult<Response<_medusajs_medusa.DeleteResponse>, Error, void, unknown>;

declare const adminReservationsKeys: TQueryKey<"admin_reservations", any, string>;
type ReservationsQueryKeys = typeof adminReservationsKeys;
/**
 * This hook retrieves a list of reservations. The reservations can be filtered by fields such as `location_id` or `quantity`
 * passed in the `query` parameter. The reservations can also be paginated.
 *
 * @example
 * To list reservations:
 *
 * ```tsx
 * import React from "react"
 * import { useAdminReservations } from "medusa-react"
 *
 * const Reservations = () => {
 *   const { reservations, isLoading } = useAdminReservations()
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {reservations && !reservations.length && (
 *         <span>No Reservations</span>
 *       )}
 *       {reservations && reservations.length > 0 && (
 *         <ul>
 *           {reservations.map((reservation) => (
 *             <li key={reservation.id}>{reservation.quantity}</li>
 *           ))}
 *         </ul>
 *       )}
 *     </div>
 *   )
 * }
 *
 * export default Reservations
 * ```
 *
 * To specify relations that should be retrieved within the reservations:
 *
 * ```tsx
 * import React from "react"
 * import { useAdminReservations } from "medusa-react"
 *
 * const Reservations = () => {
 *   const {
 *     reservations,
 *     isLoading
 *   } = useAdminReservations({
 *     expand: "location"
 *   })
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {reservations && !reservations.length && (
 *         <span>No Reservations</span>
 *       )}
 *       {reservations && reservations.length > 0 && (
 *         <ul>
 *           {reservations.map((reservation) => (
 *             <li key={reservation.id}>{reservation.quantity}</li>
 *           ))}
 *         </ul>
 *       )}
 *     </div>
 *   )
 * }
 *
 * export default Reservations
 * ```
 *
 * By default, only the first `20` records are retrieved. You can control pagination by specifying the `limit` and `offset` properties:
 *
 * ```tsx
 * import React from "react"
 * import { useAdminReservations } from "medusa-react"
 *
 * const Reservations = () => {
 *   const {
 *     reservations,
 *     limit,
 *     offset,
 *     isLoading
 *   } = useAdminReservations({
 *     expand: "location",
 *     limit: 10,
 *     offset: 0
 *   })
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {reservations && !reservations.length && (
 *         <span>No Reservations</span>
 *       )}
 *       {reservations && reservations.length > 0 && (
 *         <ul>
 *           {reservations.map((reservation) => (
 *             <li key={reservation.id}>{reservation.quantity}</li>
 *           ))}
 *         </ul>
 *       )}
 *     </div>
 *   )
 * }
 *
 * export default Reservations
 * ```
 *
 * @customNamespace Hooks.Admin.Reservations
 * @category Queries
 */
declare const useAdminReservations: (query?: AdminGetReservationsParams, options?: UseQueryOptionsWrapper<Response<AdminReservationsListRes>, Error, ReturnType<ReservationsQueryKeys["list"]>>) => {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: true;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminReservationsListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly reservations?: _medusajs_types.ReservationItemDTO[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: true;
    readonly status: "success";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminReservationsListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly reservations?: _medusajs_types.ReservationItemDTO[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: true;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminReservationsListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly reservations?: _medusajs_types.ReservationItemDTO[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: true;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "loading";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminReservationsListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly reservations?: _medusajs_types.ReservationItemDTO[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
};
/**
 * This hook retrieves a reservation's details.
 *
 * @example
 * import React from "react"
 * import { useAdminReservation } from "medusa-react"
 *
 * type Props = {
 *   reservationId: string
 * }
 *
 * const Reservation = ({ reservationId }: Props) => {
 *   const { reservation, isLoading } = useAdminReservation(
 *     reservationId
 *   )
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {reservation && (
 *         <span>{reservation.inventory_item_id}</span>
 *       )}
 *     </div>
 *   )
 * }
 *
 * export default Reservation
 *
 * @customNamespace Hooks.Admin.Reservations
 * @category Queries
 */
declare const useAdminReservation: (id: string, options?: UseQueryOptionsWrapper<Response<AdminReservationsRes>, Error, ReturnType<ReservationsQueryKeys["detail"]>>) => {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: true;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminReservationsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly reservation?: _medusajs_types.ReservationItemDTO | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: true;
    readonly status: "success";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminReservationsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly reservation?: _medusajs_types.ReservationItemDTO | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: true;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminReservationsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly reservation?: _medusajs_types.ReservationItemDTO | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: true;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "loading";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminReservationsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly reservation?: _medusajs_types.ReservationItemDTO | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
};

declare const adminReturnReasonKeys: TQueryKey<"admin_return_reasons", any, string>;
type ReturnReasonQueryKeys = typeof adminReturnReasonKeys;
/**
 * This hook retrieves a list of return reasons.
 *
 * @example
 * import React from "react"
 * import { useAdminReturnReasons } from "medusa-react"
 *
 * const ReturnReasons = () => {
 *   const { return_reasons, isLoading } = useAdminReturnReasons()
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {return_reasons && !return_reasons.length && (
 *         <span>No Return Reasons</span>
 *       )}
 *       {return_reasons && return_reasons.length > 0 && (
 *         <ul>
 *           {return_reasons.map((reason) => (
 *             <li key={reason.id}>
 *               {reason.label}: {reason.value}
 *             </li>
 *           ))}
 *         </ul>
 *       )}
 *     </div>
 *   )
 * }
 *
 * export default ReturnReasons
 *
 * @customNamespace Hooks.Admin.Return Reasons
 * @category Queries
 */
declare const useAdminReturnReasons: (options?: UseQueryOptionsWrapper<Response<AdminReturnReasonsListRes>, Error, ReturnType<ReturnReasonQueryKeys["lists"]>>) => {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: true;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminReturnReasonsListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly return_reasons?: _medusajs_medusa.ReturnReason[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: true;
    readonly status: "success";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminReturnReasonsListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly return_reasons?: _medusajs_medusa.ReturnReason[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: true;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminReturnReasonsListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly return_reasons?: _medusajs_medusa.ReturnReason[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: true;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "loading";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminReturnReasonsListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly return_reasons?: _medusajs_medusa.ReturnReason[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
};
/**
 * This hook retrieves a return reason's details.
 *
 * @example
 * import React from "react"
 * import { useAdminReturnReason } from "medusa-react"
 *
 * type Props = {
 *   returnReasonId: string
 * }
 *
 * const ReturnReason = ({ returnReasonId }: Props) => {
 *   const { return_reason, isLoading } = useAdminReturnReason(
 *     returnReasonId
 *   )
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {return_reason && <span>{return_reason.label}</span>}
 *     </div>
 *   )
 * }
 *
 * export default ReturnReason
 *
 * @customNamespace Hooks.Admin.Return Reasons
 * @category Queries
 */
declare const useAdminReturnReason: (id: string, options?: UseQueryOptionsWrapper<Response<AdminReturnReasonsRes>, Error, ReturnType<ReturnReasonQueryKeys["detail"]>>) => {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: true;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminReturnReasonsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly return_reason?: _medusajs_medusa.ReturnReason | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: true;
    readonly status: "success";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminReturnReasonsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly return_reason?: _medusajs_medusa.ReturnReason | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: true;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminReturnReasonsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly return_reason?: _medusajs_medusa.ReturnReason | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: true;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "loading";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminReturnReasonsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly return_reason?: _medusajs_medusa.ReturnReason | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
};

/**
 * This hook creates a return reason.
 *
 * @example
 * import React from "react"
 * import { useAdminCreateReturnReason } from "medusa-react"
 *
 * const CreateReturnReason = () => {
 *   const createReturnReason = useAdminCreateReturnReason()
 *   // ...
 *
 *   const handleCreate = (
 *     label: string,
 *     value: string
 *   ) => {
 *     createReturnReason.mutate({
 *       label,
 *       value,
 *     }, {
 *       onSuccess: ({ return_reason }) => {
 *         console.log(return_reason.id)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default CreateReturnReason
 *
 * @customNamespace Hooks.Admin.Return Reasons
 * @category Mutations
 */
declare const useAdminCreateReturnReason: (options?: UseMutationOptions<Response<AdminReturnReasonsRes>, Error, AdminPostReturnReasonsReq>) => _tanstack_react_query.UseMutationResult<Response<AdminReturnReasonsRes>, Error, AdminPostReturnReasonsReq, unknown>;
/**
 * This hook updates a return reason's details.
 *
 * @example
 * import React from "react"
 * import { useAdminUpdateReturnReason } from "medusa-react"
 *
 * type Props = {
 *   returnReasonId: string
 * }
 *
 * const ReturnReason = ({ returnReasonId }: Props) => {
 *   const updateReturnReason = useAdminUpdateReturnReason(
 *     returnReasonId
 *   )
 *   // ...
 *
 *   const handleUpdate = (
 *     label: string
 *   ) => {
 *     updateReturnReason.mutate({
 *       label,
 *     }, {
 *       onSuccess: ({ return_reason }) => {
 *         console.log(return_reason.label)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default ReturnReason
 *
 * @customNamespace Hooks.Admin.Return Reasons
 * @category Mutations
 */
declare const useAdminUpdateReturnReason: (id: string, options?: UseMutationOptions<Response<AdminReturnReasonsRes>, Error, AdminPostReturnReasonsReasonReq>) => _tanstack_react_query.UseMutationResult<Response<AdminReturnReasonsRes>, Error, AdminPostReturnReasonsReasonReq, unknown>;
/**
 * This hook deletes a return reason.
 *
 * @example
 * import React from "react"
 * import { useAdminDeleteReturnReason } from "medusa-react"
 *
 * type Props = {
 *   returnReasonId: string
 * }
 *
 * const ReturnReason = ({ returnReasonId }: Props) => {
 *   const deleteReturnReason = useAdminDeleteReturnReason(
 *     returnReasonId
 *   )
 *   // ...
 *
 *   const handleDelete = () => {
 *     deleteReturnReason.mutate(void 0, {
 *       onSuccess: ({ id, object, deleted }) => {
 *         console.log(id)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default ReturnReason
 *
 * @customNamespace Hooks.Admin.Return Reasons
 * @category Mutations
 */
declare const useAdminDeleteReturnReason: (id: string, options?: UseMutationOptions) => _tanstack_react_query.UseMutationResult<Response<_medusajs_medusa.DeleteResponse>, unknown, void, unknown>;

declare const adminReturnKeys: TQueryKey<"admin_returns", any, string>;
type ReturnQueryKeys = typeof adminReturnKeys;
/**
 * This hook retrieves a list of Returns. The returns can be paginated.
 *
 * @example
 * import React from "react"
 * import { useAdminReturns } from "medusa-react"
 *
 * const Returns = () => {
 *   const { returns, isLoading } = useAdminReturns()
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {returns && !returns.length && (
 *         <span>No Returns</span>
 *       )}
 *       {returns && returns.length > 0 && (
 *         <ul>
 *           {returns.map((returnData) => (
 *             <li key={returnData.id}>
 *               {returnData.status}
 *             </li>
 *           ))}
 *         </ul>
 *       )}
 *     </div>
 *   )
 * }
 *
 * export default Returns
 *
 * @customNamespace Hooks.Admin.Returns
 * @category Queries
 */
declare const useAdminReturns: (options?: UseQueryOptionsWrapper<Response<AdminReturnsListRes>, Error, ReturnType<ReturnQueryKeys["lists"]>>) => {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: true;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminReturnsListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly returns?: _medusajs_medusa.Return[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: true;
    readonly status: "success";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminReturnsListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly returns?: _medusajs_medusa.Return[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: true;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminReturnsListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly returns?: _medusajs_medusa.Return[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: true;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "loading";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminReturnsListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly returns?: _medusajs_medusa.Return[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
};

/**
 * This hook marks a return as received. This also updates the status of associated order, claim, or swap accordingly.
 *
 * @example
 * import React from "react"
 * import { useAdminReceiveReturn } from "medusa-react"
 *
 * type ReceiveReturnData = {
 *   items: {
 *     item_id: string
 *     quantity: number
 *   }[]
 * }
 *
 * type Props = {
 *   returnId: string
 * }
 *
 * const Return = ({ returnId }: Props) => {
 *   const receiveReturn = useAdminReceiveReturn(
 *     returnId
 *   )
 *   // ...
 *
 *   const handleReceive = (data: ReceiveReturnData) => {
 *     receiveReturn.mutate(data, {
 *       onSuccess: ({ return: dataReturn }) => {
 *         console.log(dataReturn.status)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default Return
 *
 * @customNamespace Hooks.Admin.Returns
 * @category Mutations
 */
declare const useAdminReceiveReturn: (id: string, options?: UseMutationOptions<Response<AdminReturnsRes>, Error, AdminPostReturnsReturnReceiveReq>) => _tanstack_react_query.UseMutationResult<Response<AdminReturnsRes>, Error, AdminPostReturnsReturnReceiveReq, unknown>;
/**
 * This hook registers a return as canceled. The return can be associated with an order, claim, or swap.
 *
 * @example
 * import React from "react"
 * import { useAdminCancelReturn } from "medusa-react"
 *
 * type Props = {
 *   returnId: string
 * }
 *
 * const Return = ({ returnId }: Props) => {
 *   const cancelReturn = useAdminCancelReturn(
 *     returnId
 *   )
 *   // ...
 *
 *   const handleCancel = () => {
 *     cancelReturn.mutate(void 0, {
 *       onSuccess: ({ order }) => {
 *         console.log(order.returns)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default Return
 *
 * @customNamespace Hooks.Admin.Returns
 * @category Mutations
 */
declare const useAdminCancelReturn: (id: string, options?: UseMutationOptions<Response<AdminReturnsCancelRes>, Error, void>) => _tanstack_react_query.UseMutationResult<Response<AdminReturnsCancelRes>, Error, void, unknown>;

declare const adminSalesChannelsKeys: TQueryKey<"admin_sales_channels", any, string>;
type SalesChannelsQueryKeys = typeof adminSalesChannelsKeys;
/**
 * This hook retrieves a sales channel's details.
 *
 * @example
 * import React from "react"
 * import { useAdminSalesChannel } from "medusa-react"
 *
 * type Props = {
 *   salesChannelId: string
 * }
 *
 * const SalesChannel = ({ salesChannelId }: Props) => {
 *   const {
 *     sales_channel,
 *     isLoading,
 *   } = useAdminSalesChannel(salesChannelId)
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {sales_channel && <span>{sales_channel.name}</span>}
 *     </div>
 *   )
 * }
 *
 * export default SalesChannel
 *
 * @customNamespace Hooks.Admin.Sales Channels
 * @category Queries
 */
declare const useAdminSalesChannel: (id: string, options?: UseQueryOptionsWrapper<Response<AdminSalesChannelsRes>, Error, ReturnType<SalesChannelsQueryKeys["detail"]>>) => {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: true;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminSalesChannelsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly sales_channel?: _medusajs_medusa.SalesChannel | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: true;
    readonly status: "success";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminSalesChannelsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly sales_channel?: _medusajs_medusa.SalesChannel | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: true;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminSalesChannelsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly sales_channel?: _medusajs_medusa.SalesChannel | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: true;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "loading";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminSalesChannelsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly sales_channel?: _medusajs_medusa.SalesChannel | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
};
/**
 * This hook retrieves a list of sales channels. The sales channels can be filtered by fields such as `q` or `name`
 * passed in the `query` parameter. The sales channels can also be sorted or paginated.
 *
 * @example
 * To list sales channels:
 *
 * ```tsx
 * import React from "react"
 * import { useAdminSalesChannels } from "medusa-react"
 *
 * const SalesChannels = () => {
 *   const { sales_channels, isLoading } = useAdminSalesChannels()
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {sales_channels && !sales_channels.length && (
 *         <span>No Sales Channels</span>
 *       )}
 *       {sales_channels && sales_channels.length > 0 && (
 *         <ul>
 *           {sales_channels.map((salesChannel) => (
 *             <li key={salesChannel.id}>{salesChannel.name}</li>
 *           ))}
 *         </ul>
 *       )}
 *     </div>
 *   )
 * }
 *
 * export default SalesChannels
 * ```
 *
 * To specify relations that should be retrieved within the sales channels:
 *
 * ```tsx
 * import React from "react"
 * import { useAdminSalesChannels } from "medusa-react"
 *
 * const SalesChannels = () => {
 *   const {
 *     sales_channels,
 *     isLoading
 *   } = useAdminSalesChannels({
 *     expand: "locations"
 *   })
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {sales_channels && !sales_channels.length && (
 *         <span>No Sales Channels</span>
 *       )}
 *       {sales_channels && sales_channels.length > 0 && (
 *         <ul>
 *           {sales_channels.map((salesChannel) => (
 *             <li key={salesChannel.id}>{salesChannel.name}</li>
 *           ))}
 *         </ul>
 *       )}
 *     </div>
 *   )
 * }
 *
 * export default SalesChannels
 * ```
 *
 * By default, only the first `20` records are retrieved. You can control pagination by specifying the `limit` and `offset` properties:
 *
 * ```tsx
 * import React from "react"
 * import { useAdminSalesChannels } from "medusa-react"
 *
 * const SalesChannels = () => {
 *   const {
 *     sales_channels,
 *     limit,
 *     offset,
 *     isLoading
 *   } = useAdminSalesChannels({
 *     expand: "locations",
 *     limit: 10,
 *     offset: 0
 *   })
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {sales_channels && !sales_channels.length && (
 *         <span>No Sales Channels</span>
 *       )}
 *       {sales_channels && sales_channels.length > 0 && (
 *         <ul>
 *           {sales_channels.map((salesChannel) => (
 *             <li key={salesChannel.id}>{salesChannel.name}</li>
 *           ))}
 *         </ul>
 *       )}
 *     </div>
 *   )
 * }
 *
 * export default SalesChannels
 * ```
 *
 * @customNamespace Hooks.Admin.Sales Channels
 * @category Queries
 */
declare const useAdminSalesChannels: (query?: AdminGetSalesChannelsParams, options?: UseQueryOptionsWrapper<Response<AdminSalesChannelsListRes>, Error, ReturnType<SalesChannelsQueryKeys["list"]>>) => {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: true;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminSalesChannelsListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly sales_channels?: _medusajs_medusa.SalesChannel[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: true;
    readonly status: "success";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminSalesChannelsListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly sales_channels?: _medusajs_medusa.SalesChannel[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: true;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminSalesChannelsListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly sales_channels?: _medusajs_medusa.SalesChannel[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: true;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "loading";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminSalesChannelsListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly sales_channels?: _medusajs_medusa.SalesChannel[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
};

/**
 * This hook creates a sales channel.
 *
 * @example
 * import React from "react"
 * import { useAdminCreateSalesChannel } from "medusa-react"
 *
 * const CreateSalesChannel = () => {
 *   const createSalesChannel = useAdminCreateSalesChannel()
 *   // ...
 *
 *   const handleCreate = (name: string, description: string) => {
 *     createSalesChannel.mutate({
 *       name,
 *       description,
 *     }, {
 *       onSuccess: ({ sales_channel }) => {
 *         console.log(sales_channel.id)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default CreateSalesChannel
 *
 * @customNamespace Hooks.Admin.Sales Channels
 * @category Mutations
 */
declare const useAdminCreateSalesChannel: (options?: UseMutationOptions<Response<AdminSalesChannelsRes>, Error, AdminPostSalesChannelsReq>) => _tanstack_react_query.UseMutationResult<Response<AdminSalesChannelsRes>, Error, AdminPostSalesChannelsReq, unknown>;
/**
 * This hook updates a sales channel's details.
 *
 * @example
 * import React from "react"
 * import { useAdminUpdateSalesChannel } from "medusa-react"
 *
 * type Props = {
 *   salesChannelId: string
 * }
 *
 * const SalesChannel = ({ salesChannelId }: Props) => {
 *   const updateSalesChannel = useAdminUpdateSalesChannel(
 *     salesChannelId
 *   )
 *   // ...
 *
 *   const handleUpdate = (
 *     is_disabled: boolean
 *   ) => {
 *     updateSalesChannel.mutate({
 *       is_disabled,
 *     }, {
 *       onSuccess: ({ sales_channel }) => {
 *         console.log(sales_channel.is_disabled)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default SalesChannel
 *
 * @customNamespace Hooks.Admin.Sales Channels
 * @category Mutations
 */
declare const useAdminUpdateSalesChannel: (id: string, options?: UseMutationOptions<Response<AdminSalesChannelsRes>, Error, AdminPostSalesChannelsSalesChannelReq>) => _tanstack_react_query.UseMutationResult<Response<AdminSalesChannelsRes>, Error, AdminPostSalesChannelsSalesChannelReq, unknown>;
/**
 * This hook deletes a sales channel. Associated products, stock locations, and other resources are not deleted.
 *
 * @example
 * import React from "react"
 * import { useAdminDeleteSalesChannel } from "medusa-react"
 *
 * type Props = {
 *   salesChannelId: string
 * }
 *
 * const SalesChannel = ({ salesChannelId }: Props) => {
 *   const deleteSalesChannel = useAdminDeleteSalesChannel(
 *     salesChannelId
 *   )
 *   // ...
 *
 *   const handleDelete = () => {
 *     deleteSalesChannel.mutate(void 0, {
 *       onSuccess: ({ id, object, deleted }) => {
 *         console.log(id)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default SalesChannel
 *
 * @customNamespace Hooks.Admin.Sales Channels
 * @category Mutations
 */
declare const useAdminDeleteSalesChannel: (id: string, options?: UseMutationOptions<Response<AdminSalesChannelsDeleteRes>, Error, void>) => _tanstack_react_query.UseMutationResult<Response<_medusajs_medusa.DeleteResponse>, Error, void, unknown>;
/**
 * This hook removes a list of products from a sales channel. This doesn't delete the product. It only removes the
 * association between the product and the sales channel.
 *
 * @example
 * import React from "react"
 * import {
 *   useAdminDeleteProductsFromSalesChannel,
 * } from "medusa-react"
 *
 * type Props = {
 *   salesChannelId: string
 * }
 *
 * const SalesChannel = ({ salesChannelId }: Props) => {
 *   const deleteProducts = useAdminDeleteProductsFromSalesChannel(
 *     salesChannelId
 *   )
 *   // ...
 *
 *   const handleDeleteProducts = (productId: string) => {
 *     deleteProducts.mutate({
 *       product_ids: [
 *         {
 *           id: productId,
 *         },
 *       ],
 *     }, {
 *       onSuccess: ({ sales_channel }) => {
 *         console.log(sales_channel.id)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default SalesChannel
 *
 * @customNamespace Hooks.Admin.Sales Channels
 * @category Mutations
 */
declare const useAdminDeleteProductsFromSalesChannel: (id: string, options?: UseMutationOptions<Response<AdminSalesChannelsRes>, Error, AdminDeleteSalesChannelsChannelProductsBatchReq>) => _tanstack_react_query.UseMutationResult<Response<AdminSalesChannelsRes>, Error, AdminDeleteSalesChannelsChannelProductsBatchReq, unknown>;
/**
 * This hook adds a list of products to a sales channel.
 *
 * @example
 * import React from "react"
 * import { useAdminAddProductsToSalesChannel } from "medusa-react"
 *
 * type Props = {
 *   salesChannelId: string
 * }
 *
 * const SalesChannel = ({ salesChannelId }: Props) => {
 *   const addProducts = useAdminAddProductsToSalesChannel(
 *     salesChannelId
 *   )
 *   // ...
 *
 *   const handleAddProducts = (productId: string) => {
 *     addProducts.mutate({
 *       product_ids: [
 *         {
 *           id: productId,
 *         },
 *       ],
 *     }, {
 *       onSuccess: ({ sales_channel }) => {
 *         console.log(sales_channel.id)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default SalesChannel
 *
 * @customNamespace Hooks.Admin.Sales Channels
 * @category Mutations
 */
declare const useAdminAddProductsToSalesChannel: (id: string, options?: UseMutationOptions<Response<AdminSalesChannelsRes>, Error, AdminPostSalesChannelsChannelProductsBatchReq>) => _tanstack_react_query.UseMutationResult<Response<AdminSalesChannelsRes>, Error, AdminPostSalesChannelsChannelProductsBatchReq, unknown>;
/**
 * This hook associates a stock location with a sales channel. It requires the
 * [@medusajs/stock-location](https://docs.medusajs.com/modules/multiwarehouse/install-modules#stock-location-module) module to be installed in
 * your Medusa backend.
 *
 * @example
 * import React from "react"
 * import {
 *   useAdminAddLocationToSalesChannel
 * } from "medusa-react"
 *
 * type Props = {
 *   salesChannelId: string
 * }
 *
 * const SalesChannel = ({ salesChannelId }: Props) => {
 *   const addLocation = useAdminAddLocationToSalesChannel()
 *   // ...
 *
 *   const handleAddLocation = (locationId: string) => {
 *     addLocation.mutate({
 *       sales_channel_id: salesChannelId,
 *       location_id: locationId
 *     }, {
 *       onSuccess: ({ sales_channel }) => {
 *         console.log(sales_channel.locations)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default SalesChannel
 *
 * @customNamespace Hooks.Admin.Sales Channels
 * @category Mutations
 */
declare const useAdminAddLocationToSalesChannel: (options?: UseMutationOptions<Response<AdminSalesChannelsRes>, Error, {
    /**
     * The sales channel's ID.
     */
    sales_channel_id: string;
    /**
     * The location's ID.
     */
    location_id: string;
}>) => _tanstack_react_query.UseMutationResult<Response<AdminSalesChannelsRes>, Error, {
    /**
     * The sales channel's ID.
     */
    sales_channel_id: string;
    /**
     * The location's ID.
     */
    location_id: string;
}, unknown>;
/**
 * This hook removes a stock location from a sales channel. This only removes the association between the stock
 * location and the sales channel. It does not delete the stock location. This hook requires the
 * [@medusajs/stock-location](https://docs.medusajs.com/modules/multiwarehouse/install-modules#stock-location-module) module to be installed in
 * your Medusa backend.
 *
 * @example
 * import React from "react"
 * import {
 *   useAdminRemoveLocationFromSalesChannel
 * } from "medusa-react"
 *
 * type Props = {
 *   salesChannelId: string
 * }
 *
 * const SalesChannel = ({ salesChannelId }: Props) => {
 *   const removeLocation = useAdminRemoveLocationFromSalesChannel()
 *   // ...
 *
 *   const handleRemoveLocation = (locationId: string) => {
 *     removeLocation.mutate({
 *       sales_channel_id: salesChannelId,
 *       location_id: locationId
 *     }, {
 *       onSuccess: ({ sales_channel }) => {
 *         console.log(sales_channel.locations)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default SalesChannel
 *
 * @customNamespace Hooks.Admin.Sales Channels
 * @category Mutations
 */
declare const useAdminRemoveLocationFromSalesChannel: (options?: UseMutationOptions<Response<AdminSalesChannelsRes>, Error, {
    /**
     * The sales channel's ID.
     */
    sales_channel_id: string;
    /**
     * The location's ID.
     */
    location_id: string;
}>) => _tanstack_react_query.UseMutationResult<Response<AdminSalesChannelsRes>, Error, {
    /**
     * The sales channel's ID.
     */
    sales_channel_id: string;
    /**
     * The location's ID.
     */
    location_id: string;
}, unknown>;

declare const adminShippingOptionKeys: TQueryKey<"admin_shipping_options", any, string>;
type ShippingOptionQueryKeys = typeof adminShippingOptionKeys;
/**
 * This hook retrieves a list of shipping options. The shipping options can be filtered by fields such as `region_id`
 * or `is_return` passed in the `query` parameter.
 *
 * @example
 * import React from "react"
 * import { useAdminShippingOptions } from "medusa-react"
 *
 * const ShippingOptions = () => {
 *   const {
 *     shipping_options,
 *     isLoading
 *   } = useAdminShippingOptions()
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {shipping_options && !shipping_options.length && (
 *         <span>No Shipping Options</span>
 *       )}
 *       {shipping_options && shipping_options.length > 0 && (
 *         <ul>
 *           {shipping_options.map((option) => (
 *             <li key={option.id}>{option.name}</li>
 *           ))}
 *         </ul>
 *       )}
 *     </div>
 *   )
 * }
 *
 * export default ShippingOptions
 *
 * @customNamespace Hooks.Admin.Shipping Options
 * @category Queries
 */
declare const useAdminShippingOptions: (query?: AdminGetShippingOptionsParams, options?: UseQueryOptionsWrapper<Response<AdminShippingOptionsListRes>, Error, ReturnType<ShippingOptionQueryKeys["list"]>>) => {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: true;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminShippingOptionsListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly shipping_options?: _medusajs_medusa.ShippingOption[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: true;
    readonly status: "success";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminShippingOptionsListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly shipping_options?: _medusajs_medusa.ShippingOption[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: true;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminShippingOptionsListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly shipping_options?: _medusajs_medusa.ShippingOption[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: true;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "loading";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminShippingOptionsListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly shipping_options?: _medusajs_medusa.ShippingOption[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
};
/**
 * This hook retrieves a shipping option's details.
 *
 * @example
 * import React from "react"
 * import { useAdminShippingOption } from "medusa-react"
 *
 * type Props = {
 *   shippingOptionId: string
 * }
 *
 * const ShippingOption = ({ shippingOptionId }: Props) => {
 *   const {
 *     shipping_option,
 *     isLoading
 *   } = useAdminShippingOption(
 *     shippingOptionId
 *   )
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {shipping_option && <span>{shipping_option.name}</span>}
 *     </div>
 *   )
 * }
 *
 * export default ShippingOption
 *
 * @customNamespace Hooks.Admin.Shipping Options
 * @category Queries
 */
declare const useAdminShippingOption: (id: string, options?: UseQueryOptionsWrapper<Response<AdminShippingOptionsRes>, Error, ReturnType<ShippingOptionQueryKeys["detail"]>>) => {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: true;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminShippingOptionsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly shipping_option?: _medusajs_medusa.ShippingOption | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: true;
    readonly status: "success";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminShippingOptionsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly shipping_option?: _medusajs_medusa.ShippingOption | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: true;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminShippingOptionsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly shipping_option?: _medusajs_medusa.ShippingOption | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: true;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "loading";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminShippingOptionsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly shipping_option?: _medusajs_medusa.ShippingOption | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
};

/**
 * This hook creates a shipping option.
 *
 * @example
 * import React from "react"
 * import { useAdminCreateShippingOption } from "medusa-react"
 *
 * type CreateShippingOption = {
 *   name: string
 *   provider_id: string
 *   data: Record<string, unknown>
 *   price_type: string
 *   amount: number
 * }
 *
 * type Props = {
 *   regionId: string
 * }
 *
 * const Region = ({ regionId }: Props) => {
 *   const createShippingOption = useAdminCreateShippingOption()
 *   // ...
 *
 *   const handleCreate = (
 *     data: CreateShippingOption
 *   ) => {
 *     createShippingOption.mutate({
 *       ...data,
 *       region_id: regionId
 *     }, {
 *       onSuccess: ({ shipping_option }) => {
 *         console.log(shipping_option.id)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default Region
 *
 * @customNamespace Hooks.Admin.Shipping Options
 * @category Mutations
 */
declare const useAdminCreateShippingOption: (options?: UseMutationOptions<Response<AdminShippingOptionsRes>, Error, AdminPostShippingOptionsReq>) => _tanstack_react_query.UseMutationResult<Response<AdminShippingOptionsRes>, Error, AdminPostShippingOptionsReq, unknown>;
/**
 * This hook updates a shipping option's details.
 *
 * @example
 * import React from "react"
 * import { useAdminUpdateShippingOption } from "medusa-react"
 *
 * type Props = {
 *   shippingOptionId: string
 * }
 *
 * const ShippingOption = ({ shippingOptionId }: Props) => {
 *   const updateShippingOption = useAdminUpdateShippingOption(
 *     shippingOptionId
 *   )
 *   // ...
 *
 *   const handleUpdate = (
 *     name: string,
 *     requirements: {
 *       id: string,
 *       type: string,
 *       amount: number
 *     }[]
 *   ) => {
 *     updateShippingOption.mutate({
 *       name,
 *       requirements
 *     }, {
 *       onSuccess: ({ shipping_option }) => {
 *         console.log(shipping_option.requirements)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default ShippingOption
 *
 * @customNamespace Hooks.Admin.Shipping Options
 * @category Mutations
 */
declare const useAdminUpdateShippingOption: (id: string, options?: UseMutationOptions<Response<AdminShippingOptionsRes>, Error, AdminPostShippingOptionsOptionReq>) => _tanstack_react_query.UseMutationResult<Response<AdminShippingOptionsRes>, Error, AdminPostShippingOptionsOptionReq, unknown>;
/**
 * This hook deletes a shipping option. Once deleted, it can't be used when creating orders or returns.
 *
 * @example
 * import React from "react"
 * import { useAdminDeleteShippingOption } from "medusa-react"
 *
 * type Props = {
 *   shippingOptionId: string
 * }
 *
 * const ShippingOption = ({ shippingOptionId }: Props) => {
 *   const deleteShippingOption = useAdminDeleteShippingOption(
 *     shippingOptionId
 *   )
 *   // ...
 *
 *   const handleDelete = () => {
 *     deleteShippingOption.mutate(void 0, {
 *       onSuccess: ({ id, object, deleted }) => {
 *         console.log(id)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default ShippingOption
 *
 * @customNamespace Hooks.Admin.Shipping Options
 * @category Mutations
 */
declare const useAdminDeleteShippingOption: (id: string, options?: UseMutationOptions) => _tanstack_react_query.UseMutationResult<Response<_medusajs_medusa.DeleteResponse>, unknown, void, unknown>;

declare const adminShippingProfileKeys: TQueryKey<"admin_shippingProfiles", any, string>;
type ShippingProfileQueryKeys = typeof adminShippingProfileKeys;
/**
 * This hook retrieves a list of shipping profiles.
 *
 * @example
 * import React from "react"
 * import { useAdminShippingProfiles } from "medusa-react"
 *
 * const ShippingProfiles = () => {
 *   const {
 *     shipping_profiles,
 *     isLoading
 *   } = useAdminShippingProfiles()
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {shipping_profiles && !shipping_profiles.length && (
 *         <span>No Shipping Profiles</span>
 *       )}
 *       {shipping_profiles && shipping_profiles.length > 0 && (
 *         <ul>
 *           {shipping_profiles.map((profile) => (
 *             <li key={profile.id}>{profile.name}</li>
 *           ))}
 *         </ul>
 *       )}
 *     </div>
 *   )
 * }
 *
 * export default ShippingProfiles
 *
 * @customNamespace Hooks.Admin.Shipping Profiles
 * @category Queries
 */
declare const useAdminShippingProfiles: (options?: UseQueryOptionsWrapper<Response<AdminShippingProfilesListRes>, Error, ReturnType<ShippingProfileQueryKeys["lists"]>>) => {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: true;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminShippingProfilesListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly shipping_profiles?: _medusajs_medusa.ShippingProfile[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: true;
    readonly status: "success";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminShippingProfilesListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly shipping_profiles?: _medusajs_medusa.ShippingProfile[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: true;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminShippingProfilesListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly shipping_profiles?: _medusajs_medusa.ShippingProfile[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: true;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "loading";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminShippingProfilesListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly shipping_profiles?: _medusajs_medusa.ShippingProfile[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
};
/**
 * This hook retrieves a shipping profile's details.
 *
 * @example
 * import React from "react"
 * import { useAdminShippingProfile } from "medusa-react"
 *
 * type Props = {
 *   shippingProfileId: string
 * }
 *
 * const ShippingProfile = ({ shippingProfileId }: Props) => {
 *   const {
 *     shipping_profile,
 *     isLoading
 *   } = useAdminShippingProfile(
 *     shippingProfileId
 *   )
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {shipping_profile && (
 *         <span>{shipping_profile.name}</span>
 *       )}
 *     </div>
 *   )
 * }
 *
 * export default ShippingProfile
 *
 * @customNamespace Hooks.Admin.Shipping Profiles
 * @category Queries
 */
declare const useAdminShippingProfile: (id: string, options?: UseQueryOptionsWrapper<Response<AdminShippingProfilesRes>, Error, ReturnType<ShippingProfileQueryKeys["detail"]>>) => {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: true;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminShippingProfilesRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly shipping_profile?: _medusajs_medusa.ShippingProfile | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: true;
    readonly status: "success";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminShippingProfilesRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly shipping_profile?: _medusajs_medusa.ShippingProfile | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: true;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminShippingProfilesRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly shipping_profile?: _medusajs_medusa.ShippingProfile | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: true;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "loading";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminShippingProfilesRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly shipping_profile?: _medusajs_medusa.ShippingProfile | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
};

/**
 * This hook creates a shipping profile.
 *
 * @example
 * import React from "react"
 * import { ShippingProfileType } from "@medusajs/medusa"
 * import { useAdminCreateShippingProfile } from "medusa-react"
 *
 * const CreateShippingProfile = () => {
 *   const createShippingProfile = useAdminCreateShippingProfile()
 *   // ...
 *
 *   const handleCreate = (
 *     name: string,
 *     type: ShippingProfileType
 *   ) => {
 *     createShippingProfile.mutate({
 *       name,
 *       type
 *     }, {
 *       onSuccess: ({ shipping_profile }) => {
 *         console.log(shipping_profile.id)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default CreateShippingProfile
 *
 * @customNamespace Hooks.Admin.Shipping Profiles
 * @category Mutations
 */
declare const useAdminCreateShippingProfile: (options?: UseMutationOptions<Response<AdminShippingProfilesRes>, Error, AdminPostShippingProfilesReq>) => _tanstack_react_query.UseMutationResult<Response<AdminShippingProfilesRes>, Error, AdminPostShippingProfilesReq, unknown>;
/**
 * This hook updates a shipping profile's details.
 *
 * @example
 * import React from "react"
 * import { ShippingProfileType } from "@medusajs/medusa"
 * import { useAdminUpdateShippingProfile } from "medusa-react"
 *
 * type Props = {
 *   shippingProfileId: string
 * }
 *
 * const ShippingProfile = ({ shippingProfileId }: Props) => {
 *   const updateShippingProfile = useAdminUpdateShippingProfile(
 *     shippingProfileId
 *   )
 *   // ...
 *
 *   const handleUpdate = (
 *     name: string,
 *     type: ShippingProfileType
 *   ) => {
 *     updateShippingProfile.mutate({
 *       name,
 *       type
 *     }, {
 *       onSuccess: ({ shipping_profile }) => {
 *         console.log(shipping_profile.name)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default ShippingProfile
 *
 * @customNamespace Hooks.Admin.Shipping Profiles
 * @category Mutations
 */
declare const useAdminUpdateShippingProfile: (id: string, options?: UseMutationOptions<Response<AdminShippingProfilesRes>, Error, AdminPostShippingProfilesProfileReq>) => _tanstack_react_query.UseMutationResult<Response<AdminShippingProfilesRes>, Error, AdminPostShippingProfilesProfileReq, unknown>;
/**
 * This hook deletes a shipping profile. Associated shipping options are deleted as well.
 *
 * @example
 * import React from "react"
 * import { useAdminDeleteShippingProfile } from "medusa-react"
 *
 * type Props = {
 *   shippingProfileId: string
 * }
 *
 * const ShippingProfile = ({ shippingProfileId }: Props) => {
 *   const deleteShippingProfile = useAdminDeleteShippingProfile(
 *     shippingProfileId
 *   )
 *   // ...
 *
 *   const handleDelete = () => {
 *     deleteShippingProfile.mutate(void 0, {
 *       onSuccess: ({ id, object, deleted }) => {
 *         console.log(id)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default ShippingProfile
 *
 * @customNamespace Hooks.Admin.Shipping Profiles
 * @category Mutations
 */
declare const useAdminDeleteShippingProfile: (id: string, options?: UseMutationOptions<Response<AdminDeleteShippingProfileRes>, Error, void>) => _tanstack_react_query.UseMutationResult<Response<_medusajs_medusa.DeleteResponse>, Error, void, unknown>;

declare const adminStockLocationsKeys: TQueryKey<"admin_stock_locations", any, string>;
type StockLocationsQueryKeys = typeof adminStockLocationsKeys;
/**
 * This hook retrieves a list of stock locations. The stock locations can be filtered by fields such as `name` or `created_at` passed in the `query` parameter.
 * The stock locations can also be sorted or paginated.
 *
 * @example
 * To list stock locations:
 *
 * ```tsx
 * import React from "react"
 * import { useAdminStockLocations } from "medusa-react"
 *
 * function StockLocations() {
 *   const {
 *     stock_locations,
 *     isLoading
 *   } = useAdminStockLocations()
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {stock_locations && !stock_locations.length && (
 *         <span>No Locations</span>
 *       )}
 *       {stock_locations && stock_locations.length > 0 && (
 *         <ul>
 *           {stock_locations.map(
 *             (location) => (
 *               <li key={location.id}>{location.name}</li>
 *             )
 *           )}
 *         </ul>
 *       )}
 *     </div>
 *   )
 * }
 *
 * export default StockLocations
 * ```
 *
 * To specify relations that should be retrieved within the stock locations:
 *
 * ```tsx
 * import React from "react"
 * import { useAdminStockLocations } from "medusa-react"
 *
 * function StockLocations() {
 *   const {
 *     stock_locations,
 *     isLoading
 *   } = useAdminStockLocations({
 *     expand: "address"
 *   })
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {stock_locations && !stock_locations.length && (
 *         <span>No Locations</span>
 *       )}
 *       {stock_locations && stock_locations.length > 0 && (
 *         <ul>
 *           {stock_locations.map(
 *             (location) => (
 *               <li key={location.id}>{location.name}</li>
 *             )
 *           )}
 *         </ul>
 *       )}
 *     </div>
 *   )
 * }
 *
 * export default StockLocations
 * ```
 *
 * By default, only the first `20` records are retrieved. You can control pagination by specifying the `limit` and `offset` properties:
 *
 * ```tsx
 * import React from "react"
 * import { useAdminStockLocations } from "medusa-react"
 *
 * function StockLocations() {
 *   const {
 *     stock_locations,
 *     limit,
 *     offset,
 *     isLoading
 *   } = useAdminStockLocations({
 *     expand: "address",
 *     limit: 10,
 *     offset: 0
 *   })
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {stock_locations && !stock_locations.length && (
 *         <span>No Locations</span>
 *       )}
 *       {stock_locations && stock_locations.length > 0 && (
 *         <ul>
 *           {stock_locations.map(
 *             (location) => (
 *               <li key={location.id}>{location.name}</li>
 *             )
 *           )}
 *         </ul>
 *       )}
 *     </div>
 *   )
 * }
 *
 * export default StockLocations
 * ```
 *
 * @customNamespace Hooks.Admin.Stock Locations
 * @category Queries
 */
declare const useAdminStockLocations: (query?: AdminGetStockLocationsParams, options?: UseQueryOptionsWrapper<Response<AdminStockLocationsListRes>, Error, ReturnType<StockLocationsQueryKeys["list"]>>) => {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: true;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminStockLocationsListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly stock_locations?: _medusajs_types.StockLocationExpandedDTO[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: true;
    readonly status: "success";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminStockLocationsListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly stock_locations?: _medusajs_types.StockLocationExpandedDTO[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: true;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminStockLocationsListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly stock_locations?: _medusajs_types.StockLocationExpandedDTO[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: true;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "loading";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminStockLocationsListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly stock_locations?: _medusajs_types.StockLocationExpandedDTO[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
};
/**
 * This hook retrieves a stock location's details.
 *
 * @example
 * import React from "react"
 * import { useAdminStockLocation } from "medusa-react"
 *
 * type Props = {
 *   stockLocationId: string
 * }
 *
 * const StockLocation = ({ stockLocationId }: Props) => {
 *   const {
 *     stock_location,
 *     isLoading
 *   } = useAdminStockLocation(stockLocationId)
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {stock_location && (
 *         <span>{stock_location.name}</span>
 *       )}
 *     </div>
 *   )
 * }
 *
 * export default StockLocation
 *
 * @customNamespace Hooks.Admin.Stock Locations
 * @category Queries
 */
declare const useAdminStockLocation: (id: string, options?: UseQueryOptionsWrapper<Response<AdminStockLocationsRes>, Error, ReturnType<StockLocationsQueryKeys["detail"]>>) => {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: true;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminStockLocationsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly stock_location?: _medusajs_types.StockLocationExpandedDTO | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: true;
    readonly status: "success";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminStockLocationsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly stock_location?: _medusajs_types.StockLocationExpandedDTO | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: true;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminStockLocationsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly stock_location?: _medusajs_types.StockLocationExpandedDTO | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: true;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "loading";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminStockLocationsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly stock_location?: _medusajs_types.StockLocationExpandedDTO | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
};

/**
 * This hook creates a stock location.
 *
 * @example
 * import React from "react"
 * import { useAdminCreateStockLocation } from "medusa-react"
 *
 * const CreateStockLocation = () => {
 *   const createStockLocation = useAdminCreateStockLocation()
 *   // ...
 *
 *   const handleCreate = (name: string) => {
 *     createStockLocation.mutate({
 *       name,
 *     }, {
 *       onSuccess: ({ stock_location }) => {
 *         console.log(stock_location.id)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default CreateStockLocation
 *
 * @customNamespace Hooks.Admin.Stock Locations
 * @category Mutations
 */
declare const useAdminCreateStockLocation: (options?: UseMutationOptions<Response<AdminStockLocationsRes>, Error, AdminPostStockLocationsReq>) => _tanstack_react_query.UseMutationResult<Response<AdminStockLocationsRes>, Error, AdminPostStockLocationsReq, unknown>;
/**
 * This hook updates a stock location's details.
 *
 * @example
 * import React from "react"
 * import { useAdminUpdateStockLocation } from "medusa-react"
 *
 * type Props = {
 *   stockLocationId: string
 * }
 *
 * const StockLocation = ({ stockLocationId }: Props) => {
 *   const updateLocation = useAdminUpdateStockLocation(
 *     stockLocationId
 *   )
 *   // ...
 *
 *   const handleUpdate = (
 *     name: string
 *   ) => {
 *     updateLocation.mutate({
 *       name
 *     }, {
 *       onSuccess: ({ stock_location }) => {
 *         console.log(stock_location.name)
 *       }
 *     })
 *   }
 * }
 *
 * export default StockLocation
 *
 * @customNamespace Hooks.Admin.Stock Locations
 * @category Mutations
 */
declare const useAdminUpdateStockLocation: (id: string, options?: UseMutationOptions<Response<AdminStockLocationsRes>, Error, AdminPostStockLocationsLocationReq>) => _tanstack_react_query.UseMutationResult<Response<AdminStockLocationsRes>, Error, AdminPostStockLocationsLocationReq, unknown>;
/**
 * This hook deletes a stock location.
 *
 * @example
 * import React from "react"
 * import { useAdminDeleteStockLocation } from "medusa-react"
 *
 * type Props = {
 *   stockLocationId: string
 * }
 *
 * const StockLocation = ({ stockLocationId }: Props) => {
 *   const deleteLocation = useAdminDeleteStockLocation(
 *     stockLocationId
 *   )
 *   // ...
 *
 *   const handleDelete = () => {
 *     deleteLocation.mutate(void 0, {
 *       onSuccess: ({ id, object, deleted }) => {
 *         console.log(id)
 *       }
 *     })
 *   }
 * }
 *
 * export default StockLocation
 *
 * @customNamespace Hooks.Admin.Stock Locations
 * @category Mutations
 */
declare const useAdminDeleteStockLocation: (id: string, options?: UseMutationOptions<Response<AdminStockLocationsDeleteRes>, Error, void>) => _tanstack_react_query.UseMutationResult<Response<_medusajs_types.DeleteResponse>, Error, void, unknown>;

declare const adminStoreKeys: TQueryKey<"admin_store", any, string>;
type StoreQueryKeys = typeof adminStoreKeys;
/**
 * This hook retrieves a list of available payment providers in a store.
 *
 * @example
 * import React from "react"
 * import { useAdminStorePaymentProviders } from "medusa-react"
 *
 * const PaymentProviders = () => {
 *   const {
 *     payment_providers,
 *     isLoading
 *   } = useAdminStorePaymentProviders()
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {payment_providers && !payment_providers.length && (
 *         <span>No Payment Providers</span>
 *       )}
 *       {payment_providers &&
 *         payment_providers.length > 0 &&(
 *           <ul>
 *             {payment_providers.map((provider) => (
 *               <li key={provider.id}>{provider.id}</li>
 *             ))}
 *           </ul>
 *       )}
 *     </div>
 *   )
 * }
 *
 * export default PaymentProviders
 *
 * @customNamespace Hooks.Admin.Stores
 * @category Queries
 */
declare const useAdminStorePaymentProviders: (options?: UseQueryOptionsWrapper<Response<AdminPaymentProvidersList>, Error, ReturnType<StoreQueryKeys["detail"]>>) => {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: true;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminPaymentProvidersList>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly payment_providers?: _medusajs_medusa.PaymentProvider[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: true;
    readonly status: "success";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminPaymentProvidersList>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly payment_providers?: _medusajs_medusa.PaymentProvider[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: true;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminPaymentProvidersList>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly payment_providers?: _medusajs_medusa.PaymentProvider[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: true;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "loading";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminPaymentProvidersList>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly payment_providers?: _medusajs_medusa.PaymentProvider[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
};
/**
 * This hook retrieves a list of available tax providers in a store.
 *
 * @example
 * import React from "react"
 * import { useAdminStoreTaxProviders } from "medusa-react"
 *
 * const TaxProviders = () => {
 *   const {
 *     tax_providers,
 *     isLoading
 *   } = useAdminStoreTaxProviders()
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {tax_providers && !tax_providers.length && (
 *         <span>No Tax Providers</span>
 *       )}
 *       {tax_providers &&
 *         tax_providers.length > 0 &&(
 *           <ul>
 *             {tax_providers.map((provider) => (
 *               <li key={provider.id}>{provider.id}</li>
 *             ))}
 *           </ul>
 *       )}
 *     </div>
 *   )
 * }
 *
 * export default TaxProviders
 *
 * @customNamespace Hooks.Admin.Stores
 * @category Queries
 */
declare const useAdminStoreTaxProviders: (options?: UseQueryOptionsWrapper<Response<AdminTaxProvidersList>, Error, ReturnType<StoreQueryKeys["detail"]>>) => {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: true;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminTaxProvidersList>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly tax_providers?: _medusajs_medusa.TaxProvider[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: true;
    readonly status: "success";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminTaxProvidersList>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly tax_providers?: _medusajs_medusa.TaxProvider[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: true;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminTaxProvidersList>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly tax_providers?: _medusajs_medusa.TaxProvider[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: true;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "loading";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminTaxProvidersList>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly tax_providers?: _medusajs_medusa.TaxProvider[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
};
/**
 * This hook retrieves the store's details.
 *
 * @example
 * import React from "react"
 * import { useAdminStore } from "medusa-react"
 *
 * const Store = () => {
 *   const {
 *     store,
 *     isLoading
 *   } = useAdminStore()
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {store && <span>{store.name}</span>}
 *     </div>
 *   )
 * }
 *
 * export default Store
 *
 * @customNamespace Hooks.Admin.Stores
 * @category Queries
 */
declare const useAdminStore: (options?: UseQueryOptionsWrapper<Response<AdminExtendedStoresRes>, Error, ReturnType<StoreQueryKeys["details"]>>) => {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: true;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminExtendedStoresRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly store?: _medusajs_medusa_dist_types_store.ExtendedStoreDTO | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: true;
    readonly status: "success";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminExtendedStoresRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly store?: _medusajs_medusa_dist_types_store.ExtendedStoreDTO | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: true;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminExtendedStoresRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly store?: _medusajs_medusa_dist_types_store.ExtendedStoreDTO | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: true;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "loading";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminExtendedStoresRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly store?: _medusajs_medusa_dist_types_store.ExtendedStoreDTO | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
};

/**
 * This hook updates the store's details.
 *
 * @example
 * import React from "react"
 * import { useAdminUpdateStore } from "medusa-react"
 *
 * function Store() {
 *   const updateStore = useAdminUpdateStore()
 *   // ...
 *
 *   const handleUpdate = (
 *     name: string
 *   ) => {
 *     updateStore.mutate({
 *       name
 *     }, {
 *       onSuccess: ({ store }) => {
 *         console.log(store.name)
 *       }
 *     })
 *   }
 * }
 *
 * export default Store
 *
 * @customNamespace Hooks.Admin.Stores
 * @category Mutations
 */
declare const useAdminUpdateStore: (options?: UseMutationOptions<Response<AdminStoresRes>, Error, AdminPostStoreReq>) => _tanstack_react_query.UseMutationResult<Response<AdminStoresRes>, Error, AdminPostStoreReq, unknown>;
/**
 * This hook adds a currency code to the available currencies in a store. This doesn't create new currencies, as currencies are defined within the Medusa backend.
 * To create a currency, you can [create a migration](https://docs.medusajs.com/development/entities/migrations/create) that inserts the currency into the database.
 *
 * @typeParamDefinition string - The code of the currency to add to the store.
 *
 * @example
 * import React from "react"
 * import { useAdminAddStoreCurrency } from "medusa-react"
 *
 * const Store = () => {
 *   const addCurrency = useAdminAddStoreCurrency()
 *   // ...
 *
 *   const handleAdd = (code: string) => {
 *     addCurrency.mutate(code, {
 *       onSuccess: ({ store }) => {
 *         console.log(store.currencies)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default Store
 *
 * @customNamespace Hooks.Admin.Stores
 * @category Mutations
 */
declare const useAdminAddStoreCurrency: (options?: UseMutationOptions<Response<AdminStoresRes>, Error, string>) => _tanstack_react_query.UseMutationResult<Response<AdminStoresRes>, Error, string, unknown>;
/**
 * This hook deletes a currency code from the available currencies in a store. This doesn't completely
 * delete the currency and it can be added again later to the store.
 *
 * @typeParamDefinition string - The code of the currency to remove from the store.
 *
 * @example
 * import React from "react"
 * import { useAdminDeleteStoreCurrency } from "medusa-react"
 *
 * const Store = () => {
 *   const deleteCurrency = useAdminDeleteStoreCurrency()
 *   // ...
 *
 *   const handleAdd = (code: string) => {
 *     deleteCurrency.mutate(code, {
 *       onSuccess: ({ store }) => {
 *         console.log(store.currencies)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default Store
 *
 * @customNamespace Hooks.Admin.Stores
 * @category Mutations
 */
declare const useAdminDeleteStoreCurrency: (options?: UseMutationOptions<Response<AdminStoresRes>, Error, string>) => _tanstack_react_query.UseMutationResult<Response<AdminStoresRes>, Error, string, unknown>;

declare const adminSwapKeys: TQueryKey<"admin_swaps", any, string>;
type SwapsQueryKey = typeof adminSwapKeys;
/**
 * This hook retrieves a list of swaps. The swaps can be paginated.
 *
 * @example
 * To list swaps:
 *
 * ```tsx
 * import React from "react"
 * import { useAdminSwaps } from "medusa-react"
 *
 * const Swaps = () => {
 *   const { swaps, isLoading } = useAdminSwaps()
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {swaps && !swaps.length && <span>No Swaps</span>}
 *       {swaps && swaps.length > 0 && (
 *         <ul>
 *           {swaps.map((swap) => (
 *             <li key={swap.id}>{swap.payment_status}</li>
 *           ))}
 *         </ul>
 *       )}
 *     </div>
 *   )
 * }
 *
 * export default Swaps
 * ```
 *
 * By default, only the first `50` records are retrieved. You can control pagination by specifying the `limit` and `offset` properties:
 *
 * ```tsx
 * import React from "react"
 * import { useAdminSwaps } from "medusa-react"
 *
 * const Swaps = () => {
 *   const {
 *     swaps,
 *     limit,
 *     offset,
 *     isLoading
 *   } = useAdminSwaps({
 *     limit: 10,
 *     offset: 0
 *   })
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {swaps && !swaps.length && <span>No Swaps</span>}
 *       {swaps && swaps.length > 0 && (
 *         <ul>
 *           {swaps.map((swap) => (
 *             <li key={swap.id}>{swap.payment_status}</li>
 *           ))}
 *         </ul>
 *       )}
 *     </div>
 *   )
 * }
 *
 * export default Swaps
 * ```
 *
 * @customNamespace Hooks.Admin.Swaps
 * @category Queries
 */
declare const useAdminSwaps: (query?: AdminGetSwapsParams, options?: UseQueryOptionsWrapper<Response<AdminSwapsListRes>, Error, ReturnType<SwapsQueryKey["list"]>>) => {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: true;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminSwapsListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly swaps?: _medusajs_medusa.Swap[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: true;
    readonly status: "success";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminSwapsListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly swaps?: _medusajs_medusa.Swap[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: true;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminSwapsListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly swaps?: _medusajs_medusa.Swap[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: true;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "loading";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminSwapsListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly swaps?: _medusajs_medusa.Swap[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
};
/**
 * This hook retrieves a swap's details.
 *
 * @example
 * import React from "react"
 * import { useAdminSwap } from "medusa-react"
 *
 * type Props = {
 *   swapId: string
 * }
 *
 * const Swap = ({ swapId }: Props) => {
 *   const { swap, isLoading } = useAdminSwap(swapId)
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {swap && <span>{swap.id}</span>}
 *     </div>
 *   )
 * }
 *
 * export default Swap
 *
 * @customNamespace Hooks.Admin.Swaps
 * @category Queries
 */
declare const useAdminSwap: (id: string, options?: UseQueryOptionsWrapper<Response<AdminSwapsRes>, Error, ReturnType<SwapsQueryKey["detail"]>>) => {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: true;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminSwapsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly swap?: _medusajs_medusa.Swap | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: true;
    readonly status: "success";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminSwapsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly swap?: _medusajs_medusa.Swap | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: true;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminSwapsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly swap?: _medusajs_medusa.Swap | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: true;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "loading";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminSwapsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly swap?: _medusajs_medusa.Swap | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
};

/**
 * This hook creates a swap for an order. This includes creating a return that is associated with the swap.
 *
 * @example
 * import React from "react"
 * import { useAdminCreateSwap } from "medusa-react"
 *
 * type Props = {
 *   orderId: string
 * }
 *
 * const CreateSwap = ({ orderId }: Props) => {
 *   const createSwap = useAdminCreateSwap(orderId)
 *   // ...
 *
 *   const handleCreate = (
 *     returnItems: {
 *       item_id: string,
 *       quantity: number
 *     }[]
 *   ) => {
 *     createSwap.mutate({
 *       return_items: returnItems
 *     }, {
 *       onSuccess: ({ order }) => {
 *         console.log(order.swaps)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default CreateSwap
 *
 * @customNamespace Hooks.Admin.Swaps
 * @category Mutations
 */
declare const useAdminCreateSwap: (orderId: string, options?: UseMutationOptions<Response<AdminOrdersRes>, Error, AdminPostOrdersOrderSwapsReq>) => _tanstack_react_query.UseMutationResult<Response<AdminOrdersRes>, Error, AdminPostOrdersOrderSwapsReq, unknown>;
/**
 * This hook cancels a swap and change its status.
 *
 * @typeParamDefinition string - The swap's ID.
 *
 * @example
 * import React from "react"
 * import { useAdminCancelSwap } from "medusa-react"
 *
 * type Props = {
 *   orderId: string,
 *   swapId: string
 * }
 *
 * const Swap = ({
 *   orderId,
 *   swapId
 * }: Props) => {
 *   const cancelSwap = useAdminCancelSwap(
 *     orderId
 *   )
 *   // ...
 *
 *   const handleCancel = () => {
 *     cancelSwap.mutate(swapId, {
 *       onSuccess: ({ order }) => {
 *         console.log(order.swaps)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default Swap
 *
 * @customNamespace Hooks.Admin.Swaps
 * @category Mutations
 */
declare const useAdminCancelSwap: (orderId: string, options?: UseMutationOptions<Response<AdminOrdersRes>, Error, string>) => _tanstack_react_query.UseMutationResult<Response<AdminOrdersRes>, Error, string, unknown>;
type AdminFulfillSwapReq = AdminPostOrdersOrderSwapsSwapFulfillmentsReq & {
    /**
     * The swap's ID.
     */
    swap_id: string;
};
/**
 * This hook creates a Fulfillment for a Swap and change its fulfillment status to `fulfilled`. If it requires any additional actions,
 * its fulfillment status may change to `requires_action`.
 *
 * @example
 * import React from "react"
 * import { useAdminFulfillSwap } from "medusa-react"
 *
 * type Props = {
 *   orderId: string,
 *   swapId: string
 * }
 *
 * const Swap = ({
 *   orderId,
 *   swapId
 * }: Props) => {
 *   const fulfillSwap = useAdminFulfillSwap(
 *     orderId
 *   )
 *   // ...
 *
 *   const handleFulfill = () => {
 *     fulfillSwap.mutate({
 *       swap_id: swapId,
 *     }, {
 *       onSuccess: ({ order }) => {
 *         console.log(order.swaps)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default Swap
 *
 * @customNamespace Hooks.Admin.Swaps
 * @category Mutations
 */
declare const useAdminFulfillSwap: (orderId: string, options?: UseMutationOptions<Response<AdminOrdersRes>, Error, AdminFulfillSwapReq>) => _tanstack_react_query.UseMutationResult<Response<AdminOrdersRes>, Error, AdminFulfillSwapReq, unknown>;
type AdminCreateSwapShipmentReq = AdminPostOrdersOrderSwapsSwapShipmentsReq & {
    /**
     * The swap's ID.
     */
    swap_id: string;
};
/**
 * This hook creates a shipment for a swap and mark its fulfillment as shipped. This changes the swap's fulfillment status
 * to either `shipped` or `partially_shipped`, depending on whether all the items were shipped.
 *
 * @example
 * import React from "react"
 * import { useAdminCreateSwapShipment } from "medusa-react"
 *
 * type Props = {
 *   orderId: string,
 *   swapId: string
 * }
 *
 * const Swap = ({
 *   orderId,
 *   swapId
 * }: Props) => {
 *   const createShipment = useAdminCreateSwapShipment(
 *     orderId
 *   )
 *   // ...
 *
 *   const handleCreateShipment = (
 *     fulfillmentId: string
 *   ) => {
 *     createShipment.mutate({
 *       swap_id: swapId,
 *       fulfillment_id: fulfillmentId,
 *     }, {
 *       onSuccess: ({ order }) => {
 *         console.log(order.swaps)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default Swap
 *
 * @customNamespace Hooks.Admin.Swaps
 * @category Mutations
 */
declare const useAdminCreateSwapShipment: (orderId: string, options?: UseMutationOptions<Response<AdminOrdersRes>, Error, AdminCreateSwapShipmentReq>) => _tanstack_react_query.UseMutationResult<Response<AdminOrdersRes>, Error, AdminCreateSwapShipmentReq, unknown>;
/**
 * This hook process a swap's payment either by refunding or issuing a payment. This depends on the `difference_due`
 * of the swap. If `difference_due` is negative, the amount is refunded. If `difference_due` is positive, the amount is captured.
 *
 * @typeParamDefinition string - The swap's ID.
 *
 * @example
 * import React from "react"
 * import { useAdminProcessSwapPayment } from "medusa-react"
 *
 * type Props = {
 *   orderId: string,
 *   swapId: string
 * }
 *
 * const Swap = ({
 *   orderId,
 *   swapId
 * }: Props) => {
 *   const processPayment = useAdminProcessSwapPayment(
 *     orderId
 *   )
 *   // ...
 *
 *   const handleProcessPayment = () => {
 *     processPayment.mutate(swapId, {
 *       onSuccess: ({ order }) => {
 *         console.log(order.swaps)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default Swap
 *
 * @customNamespace Hooks.Admin.Swaps
 * @category Mutations
 */
declare const useAdminProcessSwapPayment: (orderId: string, options?: UseMutationOptions<Response<AdminOrdersRes>, Error, string>) => _tanstack_react_query.UseMutationResult<Response<AdminOrdersRes>, Error, string, unknown>;
/**
 * The details of the swap's fulfillment to cancel.
 */
type AdminCancelSwapFulfillmentReq = {
    /**
     * The swap's ID.
     */
    swap_id: string;
    /**
     * The fulfillment's ID.
     */
    fulfillment_id: string;
};
/**
 * This hook cancels a swap's fulfillment and change its fulfillment status to `canceled`.
 *
 * @example
 * import React from "react"
 * import { useAdminCancelSwapFulfillment } from "medusa-react"
 *
 * type Props = {
 *   orderId: string,
 *   swapId: string
 * }
 *
 * const Swap = ({
 *   orderId,
 *   swapId
 * }: Props) => {
 *   const cancelFulfillment = useAdminCancelSwapFulfillment(
 *     orderId
 *   )
 *   // ...
 *
 *   const handleCancelFulfillment = (
 *     fulfillmentId: string
 *   ) => {
 *     cancelFulfillment.mutate({
 *       swap_id: swapId,
 *       fulfillment_id: fulfillmentId,
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default Swap
 *
 * @customNamespace Hooks.Admin.Swaps
 * @category Mutations
 */
declare const useAdminCancelSwapFulfillment: (orderId: string, options?: UseMutationOptions<Response<AdminOrdersRes>, Error, {
    swap_id: string;
    fulfillment_id: string;
}>) => _tanstack_react_query.UseMutationResult<Response<AdminOrdersRes>, Error, {
    swap_id: string;
    fulfillment_id: string;
}, unknown>;

declare const adminTaxRateKeys: TQueryKey<"admin_tax_rates", any, string>;
type TaxRateQueryKeys = typeof adminTaxRateKeys;
/**
 * This hook retrieves a list of tax rates. The tax rates can be filtered by fields such as `name` or `rate`
 * passed in the `query` parameter. The tax rates can also be paginated.
 *
 * @example
 * To list tax rates:
 *
 * ```tsx
 * import React from "react"
 * import { useAdminTaxRates } from "medusa-react"
 *
 * const TaxRates = () => {
 *   const {
 *     tax_rates,
 *     isLoading
 *   } = useAdminTaxRates()
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {tax_rates && !tax_rates.length && (
 *         <span>No Tax Rates</span>
 *       )}
 *       {tax_rates && tax_rates.length > 0 && (
 *         <ul>
 *           {tax_rates.map((tax_rate) => (
 *             <li key={tax_rate.id}>{tax_rate.code}</li>
 *           ))}
 *         </ul>
 *       )}
 *     </div>
 *   )
 * }
 *
 * export default TaxRates
 * ```
 *
 * To specify relations that should be retrieved within the tax rates:
 *
 * ```tsx
 * import React from "react"
 * import { useAdminTaxRates } from "medusa-react"
 *
 * const TaxRates = () => {
 *   const {
 *     tax_rates,
 *     isLoading
 *   } = useAdminTaxRates({
 *     expand: ["shipping_options"]
 *   })
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {tax_rates && !tax_rates.length && (
 *         <span>No Tax Rates</span>
 *       )}
 *       {tax_rates && tax_rates.length > 0 && (
 *         <ul>
 *           {tax_rates.map((tax_rate) => (
 *             <li key={tax_rate.id}>{tax_rate.code}</li>
 *           ))}
 *         </ul>
 *       )}
 *     </div>
 *   )
 * }
 *
 * export default TaxRates
 * ```
 *
 * By default, only the first `50` records are retrieved. You can control pagination by specifying the `limit` and `offset` properties:
 *
 * ```tsx
 * import React from "react"
 * import { useAdminTaxRates } from "medusa-react"
 *
 * const TaxRates = () => {
 *   const {
 *     tax_rates,
 *     limit,
 *     offset,
 *     isLoading
 *   } = useAdminTaxRates({
 *     expand: ["shipping_options"],
 *     limit: 10,
 *     offset: 0
 *   })
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {tax_rates && !tax_rates.length && (
 *         <span>No Tax Rates</span>
 *       )}
 *       {tax_rates && tax_rates.length > 0 && (
 *         <ul>
 *           {tax_rates.map((tax_rate) => (
 *             <li key={tax_rate.id}>{tax_rate.code}</li>
 *           ))}
 *         </ul>
 *       )}
 *     </div>
 *   )
 * }
 *
 * export default TaxRates
 * ```
 *
 * @customNamespace Hooks.Admin.Tax Rates
 * @category Queries
 */
declare const useAdminTaxRates: (query?: AdminGetTaxRatesParams, options?: UseQueryOptionsWrapper<Response<AdminTaxRatesListRes>, Error, ReturnType<TaxRateQueryKeys["list"]>>) => {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: true;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminTaxRatesListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly tax_rates?: _medusajs_medusa.TaxRate[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: true;
    readonly status: "success";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminTaxRatesListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly tax_rates?: _medusajs_medusa.TaxRate[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: true;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminTaxRatesListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly tax_rates?: _medusajs_medusa.TaxRate[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: true;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "loading";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminTaxRatesListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly tax_rates?: _medusajs_medusa.TaxRate[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
};
/**
 * This hook retrieves a tax rate's details.
 *
 * @example
 * A simple example that retrieves a tax rate by its ID:
 *
 * ```tsx
 * import React from "react"
 * import { useAdminTaxRate } from "medusa-react"
 *
 * type Props = {
 *   taxRateId: string
 * }
 *
 * const TaxRate = ({ taxRateId }: Props) => {
 *   const { tax_rate, isLoading } = useAdminTaxRate(taxRateId)
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {tax_rate && <span>{tax_rate.code}</span>}
 *     </div>
 *   )
 * }
 *
 * export default TaxRate
 * ```
 *
 * To specify relations that should be retrieved:
 *
 * ```tsx
 * import React from "react"
 * import { useAdminTaxRate } from "medusa-react"
 *
 * const TaxRate = (taxRateId: string) => {
 *   const { tax_rate, isLoading } = useAdminTaxRate(taxRateId, {
 *     expand: ["shipping_options"]
 *   })
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {tax_rate && <span>{tax_rate.code}</span>}
 *     </div>
 *   )
 * }
 *
 * export default TaxRate
 * ```
 *
 * @customNamespace Hooks.Admin.Tax Rates
 * @category Queries
 */
declare const useAdminTaxRate: (id: string, query?: AdminGetTaxRatesParams, options?: UseQueryOptionsWrapper<Response<AdminTaxRatesRes>, Error, ReturnType<TaxRateQueryKeys["detail"]>>) => {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: true;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminTaxRatesRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly tax_rate?: _medusajs_medusa.TaxRate | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: true;
    readonly status: "success";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminTaxRatesRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly tax_rate?: _medusajs_medusa.TaxRate | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: true;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminTaxRatesRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly tax_rate?: _medusajs_medusa.TaxRate | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: true;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "loading";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminTaxRatesRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly tax_rate?: _medusajs_medusa.TaxRate | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
};

/**
 * This hook creates a tax rate.
 *
 * @example
 * import React from "react"
 * import { useAdminCreateTaxRate } from "medusa-react"
 *
 * type Props = {
 *   regionId: string
 * }
 *
 * const CreateTaxRate = ({ regionId }: Props) => {
 *   const createTaxRate = useAdminCreateTaxRate()
 *   // ...
 *
 *   const handleCreate = (
 *     code: string,
 *     name: string,
 *     rate: number
 *   ) => {
 *     createTaxRate.mutate({
 *       code,
 *       name,
 *       region_id: regionId,
 *       rate,
 *     }, {
 *       onSuccess: ({ tax_rate }) => {
 *         console.log(tax_rate.id)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default CreateTaxRate
 *
 * @customNamespace Hooks.Admin.Tax Rates
 * @category Mutations
 */
declare const useAdminCreateTaxRate: (options?: UseMutationOptions<Response<AdminTaxRatesRes>, Error, AdminPostTaxRatesReq>) => _tanstack_react_query.UseMutationResult<Response<AdminTaxRatesRes>, Error, AdminPostTaxRatesReq, unknown>;
/**
 * This hook updates a tax rate's details.
 *
 * @example
 * import React from "react"
 * import { useAdminUpdateTaxRate } from "medusa-react"
 *
 * type Props = {
 *   taxRateId: string
 * }
 *
 * const TaxRate = ({ taxRateId }: Props) => {
 *   const updateTaxRate = useAdminUpdateTaxRate(taxRateId)
 *   // ...
 *
 *   const handleUpdate = (
 *     name: string
 *   ) => {
 *     updateTaxRate.mutate({
 *       name
 *     }, {
 *       onSuccess: ({ tax_rate }) => {
 *         console.log(tax_rate.name)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default TaxRate
 *
 * @customNamespace Hooks.Admin.Tax Rates
 * @category Mutations
 */
declare const useAdminUpdateTaxRate: (id: string, options?: UseMutationOptions<Response<AdminTaxRatesRes>, Error, AdminPostTaxRatesTaxRateReq>) => _tanstack_react_query.UseMutationResult<Response<AdminTaxRatesRes>, Error, AdminPostTaxRatesTaxRateReq, unknown>;
/**
 * This hook deletes a tax rate. Resources associated with the tax rate, such as products or product types, are not deleted.
 *
 * @example
 * import React from "react"
 * import { useAdminDeleteTaxRate } from "medusa-react"
 *
 * type Props = {
 *   taxRateId: string
 * }
 *
 * const TaxRate = ({ taxRateId }: Props) => {
 *   const deleteTaxRate = useAdminDeleteTaxRate(taxRateId)
 *   // ...
 *
 *   const handleDelete = () => {
 *     deleteTaxRate.mutate(void 0, {
 *       onSuccess: ({ id, object, deleted }) => {
 *         console.log(id)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default TaxRate
 *
 * @customNamespace Hooks.Admin.Tax Rates
 * @category Mutations
 */
declare const useAdminDeleteTaxRate: (id: string, options?: UseMutationOptions<Response<AdminTaxRatesDeleteRes>, Error, void>) => _tanstack_react_query.UseMutationResult<Response<_medusajs_medusa.DeleteResponse>, Error, void, unknown>;
/**
 * This hook adds products to a tax rate.
 *
 * @example
 * import React from "react"
 * import { useAdminCreateProductTaxRates } from "medusa-react"
 *
 * type Props = {
 *   taxRateId: string
 * }
 *
 * const TaxRate = ({ taxRateId }: Props) => {
 *   const addProduct = useAdminCreateProductTaxRates(taxRateId)
 *   // ...
 *
 *   const handleAddProduct = (productIds: string[]) => {
 *     addProduct.mutate({
 *       products: productIds,
 *     }, {
 *       onSuccess: ({ tax_rate }) => {
 *         console.log(tax_rate.products)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default TaxRate
 *
 * @customNamespace Hooks.Admin.Tax Rates
 * @category Mutations
 */
declare const useAdminCreateProductTaxRates: (id: string, options?: UseMutationOptions<Response<AdminTaxRatesRes>, Error, AdminPostTaxRatesTaxRateProductsReq>) => _tanstack_react_query.UseMutationResult<Response<AdminTaxRatesRes>, Error, AdminPostTaxRatesTaxRateProductsReq, unknown>;
/**
 * This hook removes products from a tax rate. This only removes the association between the products and the tax rate. It does not delete the products.
 *
 * @example
 * import React from "react"
 * import { useAdminDeleteProductTaxRates } from "medusa-react"
 *
 * type Props = {
 *   taxRateId: string
 * }
 *
 * const TaxRate = ({ taxRateId }: Props) => {
 *   const removeProduct = useAdminDeleteProductTaxRates(taxRateId)
 *   // ...
 *
 *   const handleRemoveProduct = (productIds: string[]) => {
 *     removeProduct.mutate({
 *       products: productIds,
 *     }, {
 *       onSuccess: ({ tax_rate }) => {
 *         console.log(tax_rate.products)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default TaxRate
 *
 * @customNamespace Hooks.Admin.Tax Rates
 * @category Mutations
 */
declare const useAdminDeleteProductTaxRates: (id: string, options?: UseMutationOptions<Response<AdminTaxRatesRes>, Error, AdminDeleteTaxRatesTaxRateProductsReq>) => _tanstack_react_query.UseMutationResult<Response<AdminTaxRatesRes>, Error, AdminDeleteTaxRatesTaxRateProductsReq, unknown>;
/**
 * This hook adds product types to a tax rate.
 *
 * @example
 * import React from "react"
 * import {
 *   useAdminCreateProductTypeTaxRates,
 * } from "medusa-react"
 *
 * type Props = {
 *   taxRateId: string
 * }
 *
 * const TaxRate = ({ taxRateId }: Props) => {
 *   const addProductTypes = useAdminCreateProductTypeTaxRates(
 *     taxRateId
 *   )
 *   // ...
 *
 *   const handleAddProductTypes = (productTypeIds: string[]) => {
 *     addProductTypes.mutate({
 *       product_types: productTypeIds,
 *     }, {
 *       onSuccess: ({ tax_rate }) => {
 *         console.log(tax_rate.product_types)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default TaxRate
 *
 * @customNamespace Hooks.Admin.Tax Rates
 * @category Mutations
 */
declare const useAdminCreateProductTypeTaxRates: (id: string, options?: UseMutationOptions<Response<AdminTaxRatesRes>, Error, AdminPostTaxRatesTaxRateProductTypesReq>) => _tanstack_react_query.UseMutationResult<Response<AdminTaxRatesRes>, Error, AdminPostTaxRatesTaxRateProductTypesReq, unknown>;
/**
 * This hook removes product types from a tax rate. This only removes the association between the
 * product types and the tax rate. It does not delete the product types.
 *
 * @example
 * import React from "react"
 * import {
 *   useAdminDeleteProductTypeTaxRates,
 * } from "medusa-react"
 *
 * type Props = {
 *   taxRateId: string
 * }
 *
 * const TaxRate = ({ taxRateId }: Props) => {
 *   const removeProductTypes = useAdminDeleteProductTypeTaxRates(
 *     taxRateId
 *   )
 *   // ...
 *
 *   const handleRemoveProductTypes = (
 *     productTypeIds: string[]
 *   ) => {
 *     removeProductTypes.mutate({
 *       product_types: productTypeIds,
 *     }, {
 *       onSuccess: ({ tax_rate }) => {
 *         console.log(tax_rate.product_types)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default TaxRate
 *
 * @customNamespace Hooks.Admin.Tax Rates
 * @category Mutations
 */
declare const useAdminDeleteProductTypeTaxRates: (id: string, options?: UseMutationOptions<Response<AdminTaxRatesRes>, Error, AdminDeleteTaxRatesTaxRateProductTypesReq>) => _tanstack_react_query.UseMutationResult<Response<AdminTaxRatesRes>, Error, AdminDeleteTaxRatesTaxRateProductTypesReq, unknown>;
/**
 * This hook adds shipping options to a tax rate.
 *
 * @example
 * import React from "react"
 * import { useAdminCreateShippingTaxRates } from "medusa-react"
 *
 * type Props = {
 *   taxRateId: string
 * }
 *
 * const TaxRate = ({ taxRateId }: Props) => {
 *   const addShippingOption = useAdminCreateShippingTaxRates(
 *     taxRateId
 *   )
 *   // ...
 *
 *   const handleAddShippingOptions = (
 *     shippingOptionIds: string[]
 *   ) => {
 *     addShippingOption.mutate({
 *       shipping_options: shippingOptionIds,
 *     }, {
 *       onSuccess: ({ tax_rate }) => {
 *         console.log(tax_rate.shipping_options)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default TaxRate
 *
 * @customNamespace Hooks.Admin.Tax Rates
 * @category Mutations
 */
declare const useAdminCreateShippingTaxRates: (id: string, options?: UseMutationOptions<Response<AdminTaxRatesRes>, Error, AdminPostTaxRatesTaxRateShippingOptionsReq>) => _tanstack_react_query.UseMutationResult<Response<AdminTaxRatesRes>, Error, AdminPostTaxRatesTaxRateShippingOptionsReq, unknown>;
/**
 * This hook removes shipping options from a tax rate. This only removes the association between
 * the shipping options and the tax rate. It does not delete the shipping options.
 *
 * @example
 * import React from "react"
 * import { useAdminDeleteShippingTaxRates } from "medusa-react"
 *
 * type Props = {
 *   taxRateId: string
 * }
 *
 * const TaxRate = ({ taxRateId }: Props) => {
 *   const removeShippingOptions = useAdminDeleteShippingTaxRates(
 *     taxRateId
 *   )
 *   // ...
 *
 *   const handleRemoveShippingOptions = (
 *     shippingOptionIds: string[]
 *   ) => {
 *     removeShippingOptions.mutate({
 *       shipping_options: shippingOptionIds,
 *     }, {
 *       onSuccess: ({ tax_rate }) => {
 *         console.log(tax_rate.shipping_options)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default TaxRate
 *
 * @customNamespace Hooks.Admin.Tax Rates
 * @category Mutations
 */
declare const useAdminDeleteShippingTaxRates: (id: string, options?: UseMutationOptions<Response<AdminTaxRatesRes>, Error, AdminDeleteTaxRatesTaxRateShippingOptionsReq>) => _tanstack_react_query.UseMutationResult<Response<AdminTaxRatesRes>, Error, AdminDeleteTaxRatesTaxRateShippingOptionsReq, unknown>;

/**
 * This hook uploads a file to a public bucket or storage. The file upload is handled by the file service installed on the Medusa backend.
 *
 * @example
 * import React from "react"
 * import { useAdminUploadFile } from "medusa-react"
 *
 * const UploadFile = () => {
 *   const uploadFile = useAdminUploadFile()
 *   // ...
 *
 *   const handleFileUpload = (file: File) => {
 *     uploadFile.mutate(file, {
 *       onSuccess: ({ uploads }) => {
 *         console.log(uploads[0].key)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default UploadFile
 *
 * @customNamespace Hooks.Admin.Uploads
 * @category Mutations
 */
declare const useAdminUploadFile: (options?: UseMutationOptions<Response<AdminUploadsRes>, Error, AdminCreateUploadPayload>) => _tanstack_react_query.UseMutationResult<Response<AdminUploadsRes>, Error, AdminCreateUploadPayload, unknown>;
/**
 * This hook uploads a file to an ACL or a non-public bucket. The file upload is handled by the file service installed on the Medusa backend.
 *
 * @example
 * import React from "react"
 * import { useAdminUploadProtectedFile } from "medusa-react"
 *
 * const UploadFile = () => {
 *   const uploadFile = useAdminUploadProtectedFile()
 *   // ...
 *
 *   const handleFileUpload = (file: File) => {
 *     uploadFile.mutate(file, {
 *       onSuccess: ({ uploads }) => {
 *         console.log(uploads[0].key)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default UploadFile
 *
 * @customNamespace Hooks.Admin.Uploads
 * @category Mutations
 */
declare const useAdminUploadProtectedFile: (options?: UseMutationOptions<Response<AdminUploadsRes>, Error, AdminCreateUploadPayload>) => _tanstack_react_query.UseMutationResult<Response<AdminUploadsRes>, Error, AdminCreateUploadPayload, unknown>;
/**
 * This hook creates and retrieve a presigned or public download URL for a file. The URL creation is handled by the file service installed on the Medusa backend.
 *
 * @example
 * import React from "react"
 * import { useAdminCreatePresignedDownloadUrl } from "medusa-react"
 *
 * const Image = () => {
 *   const createPresignedUrl = useAdminCreatePresignedDownloadUrl()
 *   // ...
 *
 *   const handlePresignedUrl = (fileKey: string) => {
 *     createPresignedUrl.mutate({
 *       file_key: fileKey
 *     }, {
 *       onSuccess: ({ download_url }) => {
 *         console.log(download_url)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default Image
 *
 * @customNamespace Hooks.Admin.Uploads
 * @category Mutations
 */
declare const useAdminCreatePresignedDownloadUrl: (options?: UseMutationOptions<Response<AdminUploadsDownloadUrlRes>, Error, AdminPostUploadsDownloadUrlReq>) => _tanstack_react_query.UseMutationResult<Response<AdminUploadsDownloadUrlRes>, Error, AdminPostUploadsDownloadUrlReq, unknown>;
/**
 * This hook deletes an uploaded file from storage. The file is deleted using the installed file service on the Medusa backend.
 *
 * @example
 * import React from "react"
 * import { useAdminDeleteFile } from "medusa-react"
 *
 * const Image = () => {
 *   const deleteFile = useAdminDeleteFile()
 *   // ...
 *
 *   const handleDeleteFile = (fileKey: string) => {
 *     deleteFile.mutate({
 *       file_key: fileKey
 *     }, {
 *       onSuccess: ({ id, object, deleted }) => {
 *         console.log(id)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default Image
 *
 * @customNamespace Hooks.Admin.Uploads
 * @category Mutations
 */
declare const useAdminDeleteFile: (options?: UseMutationOptions<Response<AdminDeleteUploadsRes>, Error, AdminDeleteUploadsReq>) => _tanstack_react_query.UseMutationResult<Response<_medusajs_medusa.DeleteResponse>, Error, AdminDeleteUploadsReq, unknown>;

declare const adminUserKeys: TQueryKey<"admin_users", any, string>;
type UserQueryKeys = typeof adminUserKeys;
/**
 * This hook retrieves all admin users.
 *
 * @example
 * To list users:
 *
 * ```tsx
 * import React from "react"
 * import { useAdminUsers } from "medusa-react"
 *
 * const Users = () => {
 *   const { users, isLoading } = useAdminUsers()
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {users && !users.length && <span>No Users</span>}
 *       {users && users.length > 0 && (
 *         <ul>
 *           {users.map((user) => (
 *             <li key={user.id}>{user.email}</li>
 *           ))}
 *         </ul>
 *       )}
 *     </div>
 *   )
 * }
 *
 * export default Users
 * ```
 *
 * By default, only the first `20` records are retrieved. You can control pagination by specifying the `limit` and `offset` properties:
 *
 * ```tsx
 * import React from "react"
 * import { useAdminUsers } from "medusa-react"
 *
 * const Users = () => {
 *   const {
 *     users,
 *     limit,
 *     offset,
 *     isLoading
 *   } = useAdminUsers({
 *     limit: 20,
 *     offset: 0
 *   })
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {users && !users.length && <span>No Users</span>}
 *       {users && users.length > 0 && (
 *         <ul>
 *           {users.map((user) => (
 *             <li key={user.id}>{user.email}</li>
 *           ))}
 *         </ul>
 *       )}
 *     </div>
 *   )
 * }
 *
 * export default Users
 * ```
 *
 * @customNamespace Hooks.Admin.Users
 * @category Queries
 */
declare const useAdminUsers: (query?: AdminGetUsersParams, options?: UseQueryOptionsWrapper<Response<AdminUsersListRes>, Error, ReturnType<UserQueryKeys["list"]>>) => {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: true;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminUsersListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly users?: Omit<_medusajs_medusa.User, "password_hash">[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: true;
    readonly status: "success";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminUsersListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly users?: Omit<_medusajs_medusa.User, "password_hash">[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: true;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminUsersListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly users?: Omit<_medusajs_medusa.User, "password_hash">[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: true;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "loading";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminUsersListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly users?: Omit<_medusajs_medusa.User, "password_hash">[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
};
/**
 * This hook retrieves an admin user's details.
 *
 * @example
 * import React from "react"
 * import { useAdminUser } from "medusa-react"
 *
 * type Props = {
 *   userId: string
 * }
 *
 * const User = ({ userId }: Props) => {
 *   const { user, isLoading } = useAdminUser(
 *     userId
 *   )
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {user && <span>{user.first_name} {user.last_name}</span>}
 *     </div>
 *   )
 * }
 *
 * export default User
 *
 * @customNamespace Hooks.Admin.Users
 * @category Queries
 */
declare const useAdminUser: (id: string, options?: UseQueryOptionsWrapper<Response<AdminUserRes>, Error, ReturnType<UserQueryKeys["detail"]>>) => {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: true;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminUserRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly user?: Omit<_medusajs_medusa.User, "password_hash"> | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: true;
    readonly status: "success";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminUserRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly user?: Omit<_medusajs_medusa.User, "password_hash"> | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: true;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminUserRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly user?: Omit<_medusajs_medusa.User, "password_hash"> | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: true;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "loading";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminUserRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly user?: Omit<_medusajs_medusa.User, "password_hash"> | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
};

/**
 * This hook creates an admin user. The user has the same privileges as all admin users, and will be able to
 * authenticate and perform admin functionalities right after creation.
 *
 * @example
 * import React from "react"
 * import { useAdminCreateUser } from "medusa-react"
 *
 * const CreateUser = () => {
 *   const createUser = useAdminCreateUser()
 *   // ...
 *
 *   const handleCreateUser = () => {
 *     createUser.mutate({
 *       email: "user@example.com",
 *       password: "supersecret",
 *     }, {
 *       onSuccess: ({ user }) => {
 *         console.log(user.id)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default CreateUser
 *
 * @customNamespace Hooks.Admin.Users
 * @category Mutations
 */
declare const useAdminCreateUser: (options?: UseMutationOptions<Response<AdminUserRes>, Error, AdminCreateUserPayload>) => _tanstack_react_query.UseMutationResult<Response<AdminUserRes>, Error, AdminCreateUserPayload, unknown>;
/**
 * This hook updates an admin user's details.
 *
 * @example
 * import React from "react"
 * import { useAdminUpdateUser } from "medusa-react"
 *
 * type Props = {
 *   userId: string
 * }
 *
 * const User = ({ userId }: Props) => {
 *   const updateUser = useAdminUpdateUser(userId)
 *   // ...
 *
 *   const handleUpdateUser = (
 *     firstName: string
 *   ) => {
 *     updateUser.mutate({
 *       first_name: firstName,
 *     }, {
 *       onSuccess: ({ user }) => {
 *         console.log(user.first_name)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default User
 *
 * @customNamespace Hooks.Admin.Users
 * @category Mutations
 */
declare const useAdminUpdateUser: (id: string, options?: UseMutationOptions<Response<AdminUserRes>, Error, AdminUpdateUserPayload>) => _tanstack_react_query.UseMutationResult<Response<AdminUserRes>, Error, AdminUpdateUserPayload, unknown>;
/**
 * This hook deletes a user. Once deleted, the user will not be able to authenticate or perform admin functionalities.
 *
 * @example
 * import React from "react"
 * import { useAdminDeleteUser } from "medusa-react"
 *
 * type Props = {
 *   userId: string
 * }
 *
 * const User = ({ userId }: Props) => {
 *   const deleteUser = useAdminDeleteUser(userId)
 *   // ...
 *
 *   const handleDeleteUser = () => {
 *     deleteUser.mutate(void 0, {
 *       onSuccess: ({ id, object, deleted }) => {
 *         console.log(id)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default User
 *
 * @customNamespace Hooks.Admin.Users
 * @category Mutations
 */
declare const useAdminDeleteUser: (id: string, options?: UseMutationOptions<Response<AdminDeleteUserRes>, Error, void>) => _tanstack_react_query.UseMutationResult<Response<_medusajs_medusa.DeleteResponse>, Error, void, unknown>;
/**
 * This hook resets the password of an admin user using their reset password token. You must generate a reset password token first
 * for the user using the {@link useAdminSendResetPasswordToken} hook, then use that token to reset the password in this hook.
 *
 * @example
 * import React from "react"
 * import { useAdminResetPassword } from "medusa-react"
 *
 * const ResetPassword = () => {
 *   const resetPassword = useAdminResetPassword()
 *   // ...
 *
 *   const handleResetPassword = (
 *     token: string,
 *     password: string
 *   ) => {
 *     resetPassword.mutate({
 *       token,
 *       password,
 *     }, {
 *       onSuccess: ({ user }) => {
 *         console.log(user.id)
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default ResetPassword
 *
 * @customNamespace Hooks.Admin.Users
 * @category Mutations
 */
declare const useAdminResetPassword: (options?: UseMutationOptions<Response<AdminUserRes>, Error, AdminResetPasswordRequest>) => _tanstack_react_query.UseMutationResult<Response<AdminUserRes>, Error, AdminResetPasswordRequest, unknown>;
/**
 * This hook generates a password token for an admin user with a given email. This also triggers the `user.password_reset` event. So, if you have a Notification Service installed
 * that can handle this event, a notification, such as an email, will be sent to the user. The token is triggered as part of the `user.password_reset` event's payload.
 * That token must be used later to reset the password using the {@link useAdminResetPassword} hook.
 *
 * @example
 * import React from "react"
 * import { useAdminSendResetPasswordToken } from "medusa-react"
 *
 * const Login = () => {
 *   const requestPasswordReset = useAdminSendResetPasswordToken()
 *   // ...
 *
 *   const handleResetPassword = (
 *     email: string
 *   ) => {
 *     requestPasswordReset.mutate({
 *       email
 *     }, {
 *       onSuccess: () => {
 *         // successful
 *       }
 *     })
 *   }
 *
 *   // ...
 * }
 *
 * export default Login
 *
 * @customNamespace Hooks.Admin.Users
 * @category Mutations
 */
declare const useAdminSendResetPasswordToken: (options?: UseMutationOptions<Response<void>, Error, AdminResetPasswordTokenRequest>) => _tanstack_react_query.UseMutationResult<Response<void>, Error, AdminResetPasswordTokenRequest, unknown>;

declare const adminVariantKeys: TQueryKey<"admin_variants", any, string>;
type VariantQueryKeys = typeof adminVariantKeys;
/**
 * This hook retrieves a list of product variants. The product variant can be filtered by fields such as `id` or `title`
 * passed in the `query` parameter. The product variant can also be paginated.
 *
 * @example
 * To list product variants:
 *
 * ```tsx
 * import React from "react"
 * import { useAdminVariants } from "medusa-react"
 *
 * const Variants = () => {
 *   const { variants, isLoading } = useAdminVariants()
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {variants && !variants.length && (
 *         <span>No Variants</span>
 *       )}
 *       {variants && variants.length > 0 && (
 *         <ul>
 *           {variants.map((variant) => (
 *             <li key={variant.id}>{variant.title}</li>
 *           ))}
 *         </ul>
 *       )}
 *     </div>
 *   )
 * }
 *
 * export default Variants
 * ```
 *
 * To specify relations that should be retrieved within the product variants:
 *
 * ```tsx
 * import React from "react"
 * import { useAdminVariants } from "medusa-react"
 *
 * const Variants = () => {
 *   const { variants, isLoading } = useAdminVariants({
 *     expand: "options"
 *   })
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {variants && !variants.length && (
 *         <span>No Variants</span>
 *       )}
 *       {variants && variants.length > 0 && (
 *         <ul>
 *           {variants.map((variant) => (
 *             <li key={variant.id}>{variant.title}</li>
 *           ))}
 *         </ul>
 *       )}
 *     </div>
 *   )
 * }
 *
 * export default Variants
 * ```
 *
 * By default, only the first `100` records are retrieved. You can control pagination by specifying the `limit` and `offset` properties:
 *
 * ```tsx
 * import React from "react"
 * import { useAdminVariants } from "medusa-react"
 *
 * const Variants = () => {
 *   const {
 *     variants,
 *     limit,
 *     offset,
 *     isLoading
 *   } = useAdminVariants({
 *     expand: "options",
 *     limit: 50,
 *     offset: 0
 *   })
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {variants && !variants.length && (
 *         <span>No Variants</span>
 *       )}
 *       {variants && variants.length > 0 && (
 *         <ul>
 *           {variants.map((variant) => (
 *             <li key={variant.id}>{variant.title}</li>
 *           ))}
 *         </ul>
 *       )}
 *     </div>
 *   )
 * }
 *
 * export default Variants
 * ```
 *
 * @customNamespace Hooks.Admin.Product Variants
 * @category Queries
 */
declare const useAdminVariants: (query?: AdminGetVariantsParams, options?: UseQueryOptionsWrapper<Response<AdminVariantsListRes>, Error, ReturnType<VariantQueryKeys["list"]>>) => {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: true;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminVariantsListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly variants?: _medusajs_medusa_dist_types_pricing.PricedVariant[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: true;
    readonly status: "success";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminVariantsListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly variants?: _medusajs_medusa_dist_types_pricing.PricedVariant[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: true;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminVariantsListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly variants?: _medusajs_medusa_dist_types_pricing.PricedVariant[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: true;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "loading";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminVariantsListRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly limit?: number | undefined;
    readonly offset?: number | undefined;
    readonly count?: number | undefined;
    readonly variants?: _medusajs_medusa_dist_types_pricing.PricedVariant[] | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
};
/**
 * This hook retrieves a product variant's details.
 *
 * @example
 * A simple example that retrieves a product variant by its ID:
 *
 * ```tsx
 * import React from "react"
 * import { useAdminVariant } from "medusa-react"
 *
 * type Props = {
 *   variantId: string
 * }
 *
 * const Variant = ({ variantId }: Props) => {
 *   const { variant, isLoading } = useAdminVariant(
 *     variantId
 *   )
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {variant && <span>{variant.title}</span>}
 *     </div>
 *   )
 * }
 *
 * export default Variant
 * ```
 *
 * To specify relations that should be retrieved:
 *
 * ```tsx
 * import React from "react"
 * import { useAdminVariant } from "medusa-react"
 *
 * type Props = {
 *   variantId: string
 * }
 *
 * const Variant = ({ variantId }: Props) => {
 *   const { variant, isLoading } = useAdminVariant(
 *     variantId, {
 *       expand: "options"
 *     }
 *   )
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {variant && <span>{variant.title}</span>}
 *     </div>
 *   )
 * }
 *
 * export default Variant
 * ```
 *
 * @customNamespace Hooks.Admin.Product Variants
 * @category Queries
 */
declare const useAdminVariant: (id: string, query?: AdminGetVariantParams, options?: UseQueryOptionsWrapper<Response<AdminVariantsRes>, Error, ReturnType<VariantQueryKeys["detail"]>>) => {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: true;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminVariantsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly variant?: _medusajs_medusa_dist_types_pricing.PricedVariant | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: true;
    readonly status: "success";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminVariantsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly variant?: _medusajs_medusa_dist_types_pricing.PricedVariant | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: true;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminVariantsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly variant?: _medusajs_medusa_dist_types_pricing.PricedVariant | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: true;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "loading";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminVariantsRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly variant?: _medusajs_medusa_dist_types_pricing.PricedVariant | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
};
/**
 * This hook retrieves the available inventory of a product variant.
 *
 * @example
 * import React from "react"
 * import { useAdminVariantsInventory } from "medusa-react"
 *
 * type Props = {
 *   variantId: string
 * }
 *
 * const VariantInventory = ({ variantId }: Props) => {
 *   const { variant, isLoading } = useAdminVariantsInventory(
 *     variantId
 *   )
 *
 *   return (
 *     <div>
 *       {isLoading && <span>Loading...</span>}
 *       {variant && variant.inventory.length === 0 && (
 *         <span>Variant doesn't have inventory details</span>
 *       )}
 *       {variant && variant.inventory.length > 0 && (
 *         <ul>
 *           {variant.inventory.map((inventory) => (
 *             <li key={inventory.id}>{inventory.title}</li>
 *           ))}
 *         </ul>
 *       )}
 *     </div>
 *   )
 * }
 *
 * export default VariantInventory
 *
 * @customNamespace Hooks.Admin.Product Variants
 * @category Queries
 */
declare const useAdminVariantsInventory: (id: string, options?: UseQueryOptionsWrapper<Response<AdminGetVariantsVariantInventoryRes>, Error, ReturnType<VariantQueryKeys["detail"]>>) => {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: true;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminGetVariantsVariantInventoryRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly variant?: _medusajs_medusa.VariantInventory | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: false;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: true;
    readonly status: "success";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminGetVariantsVariantInventoryRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly variant?: _medusajs_medusa.VariantInventory | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: Error;
    readonly isError: true;
    readonly isLoading: false;
    readonly isLoadingError: true;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "error";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminGetVariantsVariantInventoryRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly variant?: _medusajs_medusa.VariantInventory | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
} | {
    readonly error: null;
    readonly isError: false;
    readonly isLoading: true;
    readonly isLoadingError: false;
    readonly isRefetchError: false;
    readonly isSuccess: false;
    readonly status: "loading";
    readonly dataUpdatedAt: number;
    readonly errorUpdatedAt: number;
    readonly failureCount: number;
    readonly failureReason: Error | null;
    readonly errorUpdateCount: number;
    readonly isFetched: boolean;
    readonly isFetchedAfterMount: boolean;
    readonly isFetching: boolean;
    readonly isInitialLoading: boolean;
    readonly isPaused: boolean;
    readonly isPlaceholderData: boolean;
    readonly isPreviousData: boolean;
    readonly isRefetching: boolean;
    readonly isStale: boolean;
    readonly refetch: <TPageData>(options?: (_tanstack_react_query.RefetchOptions & _tanstack_react_query.RefetchQueryFilters<TPageData>) | undefined) => Promise<_tanstack_react_query.QueryObserverResult<Response<AdminGetVariantsVariantInventoryRes>, Error>>;
    readonly remove: () => void;
    readonly fetchStatus: _tanstack_react_query.FetchStatus;
    readonly variant?: _medusajs_medusa.VariantInventory | undefined;
    readonly response?: exposed_medusa_js.HTTPResponse | undefined;
};

/**
 * @packageDocumentation
 *
 * `medusa-react` exposes a set of utility functions that are mainly used to retrieve or format the price of a product variant.
 *
 * @customNamespace Utilities
 */

/**
 * @interface
 *
 * Options to format a variant's price.
 */
type FormatVariantPriceParams = {
    /**
     * A variant's details.
     */
    variant: ProductVariantInfo;
    /**
     * A region's details.
     */
    region: RegionInfo;
    /**
     * Whether the computed price should include taxes or not.
     *
     * @defaultValue true
     */
    includeTaxes?: boolean;
    /**
     * The minimum number of fraction digits to use when formatting the price. This is passed as an option to `Intl.NumberFormat` in the underlying layer.
     * You can learn more about this method’s options in
     * [MDN’s documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#parameters).
     */
    minimumFractionDigits?: number;
    /**
     * The maximum number of fraction digits to use when formatting the price. This is passed as an option to `Intl.NumberFormat` which is used within the utility method.
     * You can learn more about this method’s options in
     * [MDN’s documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#parameters).
     */
    maximumFractionDigits?: number;
    /**
     * A BCP 47 language tag. The default value is `en-US`. This is passed as a first parameter to `Intl.NumberFormat` which is used within the utility method.
     * You can learn more about this method’s parameters in
     * [MDN’s documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#parameters).
     */
    locale?: string;
};
/**
 * This utility function can be used to compute the price of a variant for a region and retrieve the formatted amount. For example, `$20.00`.
 *
 * @param {FormatVariantPriceParams} param0 - Options to format the variant's price.
 * @returns {string} The formatted price.
 *
 * @example
 * ```tsx title="src/Products.ts"
 * import React from "react"
 * import { formatVariantPrice } from "medusa-react"
 * import { Product, ProductVariant } from "@medusajs/medusa"
 *
 * const Products = () => {
 *   // ...
 *   return (
 *     <ul>
 *       {products?.map((product: Product) => (
 *         <li key={product.id}>
 *           {product.title}
 *           <ul>
 *             {product.variants.map((variant: ProductVariant) => (
 *               <li key={variant.id}>
 *                 {formatVariantPrice({
 *                   variant,
 *                   region, // should be retrieved earlier
 *                 })}
 *               </li>
 *             ))}
 *           </ul>
 *         </li>
 *       ))}
 *     </ul>
 *   )
 * }
 * ```
 *
 * @customNamespace Utilities
 */
declare const formatVariantPrice: ({ variant, region, includeTaxes, ...rest }: FormatVariantPriceParams) => string;
/**
 * @interface
 *
 * Options to format a variant's price.
 */
type ComputeVariantPriceParams = {
    /**
     * A variant's details.
     */
    variant: ProductVariantInfo;
    /**
     * A region's details.
     */
    region: RegionInfo;
    /**
     * Whether the computed price should include taxes or not.
     *
     * @defaultValue true
     */
    includeTaxes?: boolean;
};
/**
 * This utility function can be used to compute the price of a variant for a region and retrieve the amount without formatting.
 * For example, `20`. This method is used by {@link formatVariantPrice} before applying the price formatting.
 *
 * @param {ComputeVariantPriceParams} param0 - Options to compute the variant's price.
 * @returns The computed price of the variant.
 *
 * @example
 * ```tsx title="src/Products.ts"
 * import React from "react"
 * import { computeVariantPrice } from "medusa-react"
 * import { Product, ProductVariant } from "@medusajs/medusa"
 *
 * const Products = () => {
 *   // ...
 *   return (
 *     <ul>
 *       {products?.map((product: Product) => (
 *         <li key={product.id}>
 *           {product.title}
 *           <ul>
 *             {product.variants.map((variant: ProductVariant) => (
 *               <li key={variant.id}>
 *                 {computeVariantPrice({
 *                   variant,
 *                   region, // should be retrieved earlier
 *                 })}
 *               </li>
 *             ))}
 *           </ul>
 *         </li>
 *       ))}
 *     </ul>
 *   )
 * }
 * ```
 *
 * @customNamespace Utilities
 */
declare const computeVariantPrice: ({ variant, region, includeTaxes, }: ComputeVariantPriceParams) => number;
/**
 * This utility function is used to retrieve a variant's price in a region. It doesn't take into account taxes or any options, so you typically wouldn't need this function on its own.
 * It's used by the {@link computeVariantPrice} function to retrieve the variant's price in a region before computing the correct price for the options provided.
 *
 * @param {ProductVariantInfo} variant - The variant's details.
 * @param {RegionInfo} region - The region's details.
 * @returns {number} The variant's price in a region.
 *
 * @example
 * ```tsx title="src/Products.ts"
 * import React from "react"
 * import { getVariantPrice } from "medusa-react"
 * import { Product, ProductVariant } from "@medusajs/medusa"
 *
 * const Products = () => {
 *   // ...
 *   return (
 *     <ul>
 *       {products?.map((product: Product) => (
 *         <li key={product.id}>
 *           {product.title}
 *           <ul>
 *             {product.variants.map((variant: ProductVariant) => (
 *               <li key={variant.id}>
 *                 {getVariantPrice(
 *                   variant,
 *                   region, // should be retrieved earlier
 *                 )}
 *               </li>
 *             ))}
 *           </ul>
 *         </li>
 *       ))}
 *     </ul>
 *   )
 * }
 * ```
 *
 * @customNamespace Utilities
 */
declare const getVariantPrice: (variant: ProductVariantInfo, region: RegionInfo) => number;
/**
 * Options to compute an amount.
 */
type ComputeAmountParams = {
    /**
     * The original amount used for computation.
     */
    amount: number;
    /**
     * The region's details.
     */
    region: RegionInfo;
    /**
     * Whether the computed price should include taxes or not.
     *
     * @defaultValue true
     */
    includeTaxes?: boolean;
};
/**
 * This utility function can be used to compute the price of an amount for a region and retrieve the amount without formatting. For example, `20`.
 * This function is used by {@link formatAmount} before applying the price formatting.
 *
 * The main difference between this utility function and {@link computeVariantPrice} is that you don’t need to pass a complete variant object. This can be used with any number.
 *
 * @param {ComputeAmountParams} params0 - The options to compute the amount.
 * @returns {number} The computed amount.
 *
 * @example
 * ```tsx title="src/MyComponent.ts"
 * import React from "react"
 * import { computeAmount } from "medusa-react"
 *
 * const MyComponent = () => {
 *   // ...
 *   return (
 *     <div>
 *       {computeAmount({
 *         amount,
 *         region, // should be retrieved earlier
 *       })}
 *     </div>
 *   )
 * }
 * ```
 *
 * @customNamespace Utilities
 */
declare const computeAmount: ({ amount, region, includeTaxes, }: ComputeAmountParams) => number;
/**
 * Options to format an amount.
 */
type FormatAmountParams = {
    /**
     * The original amount used for computation.
     */
    amount: number;
    /**
     * The region's details.
     */
    region: RegionInfo;
    /**
     * Whether the computed price should include taxes or not.
     *
     * @defaultValue true
     */
    includeTaxes?: boolean;
    /**
     * The minimum number of fraction digits to use when formatting the price. This is passed as an option to `Intl.NumberFormat` in the underlying layer.
     * You can learn more about this method’s options in
     * [MDN’s documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#parameters).
     */
    minimumFractionDigits?: number;
    /**
     * The maximum number of fraction digits to use when formatting the price. This is passed as an option to `Intl.NumberFormat` which is used within the utility method.
     * You can learn more about this method’s options in
     * [MDN’s documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#parameters).
     */
    maximumFractionDigits?: number;
    /**
     * A BCP 47 language tag. The default value is `en-US`. This is passed as a first parameter to `Intl.NumberFormat` which is used within the utility method.
     * You can learn more about this method’s parameters in
     * [MDN’s documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#parameters).
     */
    locale?: string;
};
/**
 * This utility function can be used to compute the price of an amount for a region and retrieve the formatted amount. For example, `$20.00`.
 *
 * The main difference between this utility function and {@link formatVariantPrice} is that you don’t need to pass a complete variant object. This can be used with any number.
 *
 * @param {FormatAmountParams} param0 - Options to format the amount.
 * @returns {string} The formatted price.
 *
 * @example
 * import React from "react"
 * import { formatVariantPrice } from "medusa-react"
 * import { Product, ProductVariant } from "@medusajs/medusa"
 *
 * const Products = () => {
 *   // ...
 *   return (
 *     <ul>
 *       {products?.map((product: Product) => (
 *         <li key={product.id}>
 *           {product.title}
 *           <ul>
 *             {product.variants.map((variant: ProductVariant) => (
 *               <li key={variant.id}>
 *                 {formatVariantPrice({
 *                   variant,
 *                   region, // should be retrieved earlier
 *                 })}
 *               </li>
 *             ))}
 *           </ul>
 *         </li>
 *       ))}
 *     </ul>
 *   )
 * }
 *
 * @customNamespace Utilities
 */
declare const formatAmount: ({ amount, region, includeTaxes, ...rest }: FormatAmountParams) => string;

export { AdminCancelClaimFulfillmentReq, AdminCancelSwapFulfillmentReq, AdminCreateSwapShipmentReq, AdminDraftOrderUpdateLineItemReq, AdminFulfillClaimReq, AdminFulfillSwapReq, AdminUpdateClaimReq, AdminUpdateLocationLevelReq, AdminUpdateProductOptionReq, AdminUpdateVariantReq, CartContext, CartProps, CartProvider, ComputeAmountParams, ComputeVariantPriceParams, CreateCartReq, DeletePaymentSessionMutationData, FormatAmountParams, FormatVariantPriceParams, Item, MedusaContextState, MedusaProvider, MedusaProviderProps, ProductVariantInfo, RefreshPaymentSessionMutationData, RegionInfo, SessionCartContextState, SessionCartProvider, SessionCartProviderProps, SessionCartState, UpdateLineItemReq, UpdateMeReq, UpdatePaymentSessionReq, adminAuthKeys, adminBatchJobsKeys, adminCollectionKeys, adminCurrenciesKeys, adminCustomerGroupKeys, adminCustomerKeys, adminDiscountKeys, adminDraftOrderKeys, adminGiftCardKeys, adminInventoryItemsKeys, adminInviteKeys, adminNoteKeys, adminNotificationKeys, adminOrderEditsKeys, adminOrderKeys, adminPaymentCollectionQueryKeys, adminPaymentQueryKeys, adminPriceListKeys, adminProductCategoryKeys, adminProductKeys, adminProductTagKeys, adminProductTypeKeys, adminPublishableApiKeysKeys, adminRegionKeys, adminReservationsKeys, adminReturnKeys, adminReturnReasonKeys, adminSalesChannelsKeys, adminShippingOptionKeys, adminShippingProfileKeys, adminStockLocationsKeys, adminStoreKeys, adminSwapKeys, adminTaxRateKeys, adminUserKeys, adminVariantKeys, cartKeys, collectionKeys, computeAmount, computeVariantPrice, customerKeys, formatAmount, formatVariantPrice, generateCartState, getVariantPrice, giftCardKeys, orderEditQueryKeys, orderKeys, paymentCollectionQueryKeys, productKeys, productTagKeys, productTypeKeys, storeProductCategoryKeys, useAddShippingMethodToCart, useAdminAcceptInvite, useAdminAddCustomersToCustomerGroup, useAdminAddDiscountConditionResourceBatch, useAdminAddLocationToSalesChannel, useAdminAddProductsToCategory, useAdminAddProductsToCollection, useAdminAddProductsToSalesChannel, useAdminAddPublishableKeySalesChannelsBatch, useAdminAddShippingMethod, useAdminAddStoreCurrency, useAdminArchiveOrder, useAdminBatchJob, useAdminBatchJobs, useAdminCancelBatchJob, useAdminCancelClaim, useAdminCancelClaimFulfillment, useAdminCancelFulfillment, useAdminCancelOrder, useAdminCancelOrderEdit, useAdminCancelReturn, useAdminCancelSwap, useAdminCancelSwapFulfillment, useAdminCapturePayment, useAdminCollection, useAdminCollections, useAdminCompleteOrder, useAdminConfirmBatchJob, useAdminConfirmOrderEdit, useAdminCreateBatchJob, useAdminCreateClaim, useAdminCreateClaimShipment, useAdminCreateCollection, useAdminCreateCustomer, useAdminCreateCustomerGroup, useAdminCreateDiscount, useAdminCreateDraftOrder, useAdminCreateDynamicDiscountCode, useAdminCreateFulfillment, useAdminCreateGiftCard, useAdminCreateInventoryItem, useAdminCreateInvite, useAdminCreateLocationLevel, useAdminCreateNote, useAdminCreateOrderEdit, useAdminCreatePresignedDownloadUrl, useAdminCreatePriceList, useAdminCreatePriceListPrices, useAdminCreateProduct, useAdminCreateProductCategory, useAdminCreateProductOption, useAdminCreateProductTaxRates, useAdminCreateProductTypeTaxRates, useAdminCreatePublishableApiKey, useAdminCreateRegion, useAdminCreateReservation, useAdminCreateReturnReason, useAdminCreateSalesChannel, useAdminCreateShipment, useAdminCreateShippingOption, useAdminCreateShippingProfile, useAdminCreateShippingTaxRates, useAdminCreateStockLocation, useAdminCreateSwap, useAdminCreateSwapShipment, useAdminCreateTaxRate, useAdminCreateUser, useAdminCreateVariant, useAdminCurrencies, useAdminCustomDelete, useAdminCustomPost, useAdminCustomQuery, useAdminCustomer, useAdminCustomerGroup, useAdminCustomerGroupCustomers, useAdminCustomerGroups, useAdminCustomers, useAdminDeleteCollection, useAdminDeleteCustomerGroup, useAdminDeleteDiscount, useAdminDeleteDiscountConditionResourceBatch, useAdminDeleteDraftOrder, useAdminDeleteDynamicDiscountCode, useAdminDeleteFile, useAdminDeleteGiftCard, useAdminDeleteInventoryItem, useAdminDeleteInvite, useAdminDeleteLocationLevel, useAdminDeleteNote, useAdminDeleteOrderEdit, useAdminDeleteOrderEditItemChange, useAdminDeletePaymentCollection, useAdminDeletePriceList, useAdminDeletePriceListPrices, useAdminDeletePriceListProductPrices, useAdminDeletePriceListProductsPrices, useAdminDeletePriceListVariantPrices, useAdminDeleteProduct, useAdminDeleteProductCategory, useAdminDeleteProductOption, useAdminDeleteProductTaxRates, useAdminDeleteProductTypeTaxRates, useAdminDeleteProductsFromCategory, useAdminDeleteProductsFromSalesChannel, useAdminDeletePublishableApiKey, useAdminDeleteRegion, useAdminDeleteReservation, useAdminDeleteReturnReason, useAdminDeleteSalesChannel, useAdminDeleteSession, useAdminDeleteShippingOption, useAdminDeleteShippingProfile, useAdminDeleteShippingTaxRates, useAdminDeleteStockLocation, useAdminDeleteStoreCurrency, useAdminDeleteTaxRate, useAdminDeleteUser, useAdminDeleteVariant, useAdminDiscount, useAdminDiscountAddRegion, useAdminDiscountCreateCondition, useAdminDiscountRemoveCondition, useAdminDiscountRemoveRegion, useAdminDiscountUpdateCondition, useAdminDiscounts, useAdminDraftOrder, useAdminDraftOrderAddLineItem, useAdminDraftOrderRegisterPayment, useAdminDraftOrderRemoveLineItem, useAdminDraftOrderUpdateLineItem, useAdminDraftOrders, useAdminFulfillClaim, useAdminFulfillSwap, useAdminGetDiscountByCode, useAdminGetDiscountCondition, useAdminGetSession, useAdminGiftCard, useAdminGiftCards, useAdminInventoryItem, useAdminInventoryItemLocationLevels, useAdminInventoryItems, useAdminInvites, useAdminLogin, useAdminMarkPaymentCollectionAsAuthorized, useAdminNote, useAdminNotes, useAdminNotifications, useAdminOrder, useAdminOrderEdit, useAdminOrderEditAddLineItem, useAdminOrderEditDeleteLineItem, useAdminOrderEditUpdateLineItem, useAdminOrderEdits, useAdminOrders, useAdminPayment, useAdminPaymentCollection, useAdminPaymentsCapturePayment, useAdminPaymentsRefundPayment, useAdminPriceList, useAdminPriceListProducts, useAdminPriceLists, useAdminProcessSwapPayment, useAdminProduct, useAdminProductCategories, useAdminProductCategory, useAdminProductTagUsage, useAdminProductTags, useAdminProductTypes, useAdminProducts, useAdminPublishableApiKey, useAdminPublishableApiKeySalesChannels, useAdminPublishableApiKeys, useAdminReceiveReturn, useAdminRefundPayment, useAdminRegion, useAdminRegionAddCountry, useAdminRegionAddFulfillmentProvider, useAdminRegionAddPaymentProvider, useAdminRegionDeleteFulfillmentProvider, useAdminRegionDeletePaymentProvider, useAdminRegionFulfillmentOptions, useAdminRegionRemoveCountry, useAdminRegions, useAdminRemoveCustomersFromCustomerGroup, useAdminRemoveLocationFromSalesChannel, useAdminRemoveProductsFromCollection, useAdminRemovePublishableKeySalesChannelsBatch, useAdminRequestOrderEditConfirmation, useAdminRequestReturn, useAdminResendInvite, useAdminResendNotification, useAdminReservation, useAdminReservations, useAdminResetPassword, useAdminReturnReason, useAdminReturnReasons, useAdminReturns, useAdminRevokePublishableApiKey, useAdminSalesChannel, useAdminSalesChannels, useAdminSendResetPasswordToken, useAdminShippingOption, useAdminShippingOptions, useAdminShippingProfile, useAdminShippingProfiles, useAdminStockLocation, useAdminStockLocations, useAdminStore, useAdminStorePaymentProviders, useAdminStoreTaxProviders, useAdminSwap, useAdminSwaps, useAdminTaxRate, useAdminTaxRates, useAdminUpdateClaim, useAdminUpdateCollection, useAdminUpdateCurrency, useAdminUpdateCustomer, useAdminUpdateCustomerGroup, useAdminUpdateDiscount, useAdminUpdateDraftOrder, useAdminUpdateGiftCard, useAdminUpdateInventoryItem, useAdminUpdateLocationLevel, useAdminUpdateNote, useAdminUpdateOrder, useAdminUpdateOrderEdit, useAdminUpdatePaymentCollection, useAdminUpdatePriceList, useAdminUpdateProduct, useAdminUpdateProductCategory, useAdminUpdateProductOption, useAdminUpdatePublishableApiKey, useAdminUpdateRegion, useAdminUpdateReservation, useAdminUpdateReturnReason, useAdminUpdateSalesChannel, useAdminUpdateShippingOption, useAdminUpdateShippingProfile, useAdminUpdateStockLocation, useAdminUpdateStore, useAdminUpdateTaxRate, useAdminUpdateUser, useAdminUpdateVariant, useAdminUploadFile, useAdminUploadProtectedFile, useAdminUser, useAdminUsers, useAdminVariant, useAdminVariants, useAdminVariantsInventory, useAuthorizePaymentSession, useAuthorizePaymentSessionsBatch, useCart, useCartOrder, useCartShippingOptions, useCartSwap, useCollection, useCollections, useCompleteCart, useCompleteOrderEdit, useCreateCart, useCreateCustomer, useCreateLineItem, useCreatePaymentSession, useCreateReturn, useCreateSwap, useCustomerOrders, useDeclineOrderEdit, useDeleteLineItem, useDeletePaymentSession, useGetCart, useGiftCard, useGrantOrderAccess, useManageMultiplePaymentSessions, useManagePaymentSession, useMeCustomer, useMedusa, useOrder, useOrderEdit, useOrders, usePaymentCollection, usePaymentCollectionRefreshPaymentSession, useProduct, useProductCategories, useProductCategory, useProductTags, useProductTypes, useProducts, useRefreshPaymentSession, useRegion, useRegions, useRequestOrderAccess, useReturnReason, useReturnReasons, useSessionCart, useSetPaymentSession, useShippingOptions, useStartCheckout, useUpdateCart, useUpdateLineItem, useUpdateMe, useUpdatePaymentSession };

/**
 * Square Connect API
 * Client library for accessing the Square Connect APIs
 *
 * The version of the OpenAPI document: 2.0
 * Contact: developers@squareup.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { CancelSubscriptionResponse } from '../models';
import { CreateSubscriptionRequest } from '../models';
import { CreateSubscriptionResponse } from '../models';
import { ListSubscriptionEventsResponse } from '../models';
import { RetrieveSubscriptionResponse } from '../models';
import { SearchSubscriptionsRequest } from '../models';
import { SearchSubscriptionsResponse } from '../models';
import { UpdateSubscriptionRequest } from '../models';
import { UpdateSubscriptionResponse } from '../models';
/**
 * SubscriptionsApi - axios parameter creator
 * @export
 */
export declare const SubscriptionsApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     * Sets the `canceled_date` field to the end of the active billing period. After this date, the status changes from ACTIVE to CANCELED.
     * @summary CancelSubscription
     * @param {string} subscriptionId The ID of the subscription to cancel.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    cancelSubscription: (subscriptionId: string, options?: any) => Promise<RequestArgs>;
    /**
     * Creates a subscription for a customer to a subscription plan.  If you provide a card on file in the request, Square charges the card for  the subscription. Otherwise, Square bills an invoice to the customer\'s email  address. The subscription starts immediately, unless the request includes  the optional `start_date`. Each individual subscription is associated with a particular location.
     * @summary CreateSubscription
     * @param {CreateSubscriptionRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createSubscription: (body: CreateSubscriptionRequest, options?: any) => Promise<RequestArgs>;
    /**
     * Lists all events for a specific subscription. In the current implementation, only `START_SUBSCRIPTION` and `STOP_SUBSCRIPTION` (when the subscription was canceled) events are returned.
     * @summary ListSubscriptionEvents
     * @param {string} subscriptionId The ID of the subscription to retrieve the events for.
     * @param {string} [cursor] A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of results for the original query.  For more information, see [Pagination](https://developer.squareup.com/docs/docs/working-with-apis/pagination).
     * @param {number} [limit] The upper limit on the number of subscription events to return  in the response.   Default: &#x60;200&#x60;
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listSubscriptionEvents: (subscriptionId: string, cursor?: string, limit?: number, options?: any) => Promise<RequestArgs>;
    /**
     * Retrieves a subscription.
     * @summary RetrieveSubscription
     * @param {string} subscriptionId The ID of the subscription to retrieve.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    retrieveSubscription: (subscriptionId: string, options?: any) => Promise<RequestArgs>;
    /**
     * Searches for subscriptions.  Results are ordered chronologically by subscription creation date. If the request specifies more than one location ID,  the endpoint orders the result  by location ID, and then by creation date within each location. If no locations are given in the query, all locations are searched.  You can also optionally specify `customer_ids` to search by customer.  If left unset, all customers  associated with the specified locations are returned.  If the request specifies customer IDs, the endpoint orders results  first by location, within location by customer ID, and within  customer by subscription creation date.  For more information, see  [Retrieve subscriptions](/docs/subscriptions-api/overview#retrieve-subscriptions).
     * @summary SearchSubscriptions
     * @param {SearchSubscriptionsRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchSubscriptions: (body: SearchSubscriptionsRequest, options?: any) => Promise<RequestArgs>;
    /**
     * Updates a subscription. You can set, modify, and clear the  `subscription` field values.
     * @summary UpdateSubscription
     * @param {string} subscriptionId The ID for the subscription to update.
     * @param {UpdateSubscriptionRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateSubscription: (subscriptionId: string, body: UpdateSubscriptionRequest, options?: any) => Promise<RequestArgs>;
};
/**
 * SubscriptionsApi - functional programming interface
 * @export
 */
export declare const SubscriptionsApiFp: (configuration?: Configuration) => {
    /**
     * Sets the `canceled_date` field to the end of the active billing period. After this date, the status changes from ACTIVE to CANCELED.
     * @summary CancelSubscription
     * @param {string} subscriptionId The ID of the subscription to cancel.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    cancelSubscription(subscriptionId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CancelSubscriptionResponse>>;
    /**
     * Creates a subscription for a customer to a subscription plan.  If you provide a card on file in the request, Square charges the card for  the subscription. Otherwise, Square bills an invoice to the customer\'s email  address. The subscription starts immediately, unless the request includes  the optional `start_date`. Each individual subscription is associated with a particular location.
     * @summary CreateSubscription
     * @param {CreateSubscriptionRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createSubscription(body: CreateSubscriptionRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CreateSubscriptionResponse>>;
    /**
     * Lists all events for a specific subscription. In the current implementation, only `START_SUBSCRIPTION` and `STOP_SUBSCRIPTION` (when the subscription was canceled) events are returned.
     * @summary ListSubscriptionEvents
     * @param {string} subscriptionId The ID of the subscription to retrieve the events for.
     * @param {string} [cursor] A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of results for the original query.  For more information, see [Pagination](https://developer.squareup.com/docs/docs/working-with-apis/pagination).
     * @param {number} [limit] The upper limit on the number of subscription events to return  in the response.   Default: &#x60;200&#x60;
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listSubscriptionEvents(subscriptionId: string, cursor?: string, limit?: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ListSubscriptionEventsResponse>>;
    /**
     * Retrieves a subscription.
     * @summary RetrieveSubscription
     * @param {string} subscriptionId The ID of the subscription to retrieve.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    retrieveSubscription(subscriptionId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RetrieveSubscriptionResponse>>;
    /**
     * Searches for subscriptions.  Results are ordered chronologically by subscription creation date. If the request specifies more than one location ID,  the endpoint orders the result  by location ID, and then by creation date within each location. If no locations are given in the query, all locations are searched.  You can also optionally specify `customer_ids` to search by customer.  If left unset, all customers  associated with the specified locations are returned.  If the request specifies customer IDs, the endpoint orders results  first by location, within location by customer ID, and within  customer by subscription creation date.  For more information, see  [Retrieve subscriptions](/docs/subscriptions-api/overview#retrieve-subscriptions).
     * @summary SearchSubscriptions
     * @param {SearchSubscriptionsRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchSubscriptions(body: SearchSubscriptionsRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SearchSubscriptionsResponse>>;
    /**
     * Updates a subscription. You can set, modify, and clear the  `subscription` field values.
     * @summary UpdateSubscription
     * @param {string} subscriptionId The ID for the subscription to update.
     * @param {UpdateSubscriptionRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateSubscription(subscriptionId: string, body: UpdateSubscriptionRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UpdateSubscriptionResponse>>;
};
/**
 * SubscriptionsApi - factory interface
 * @export
 */
export declare const SubscriptionsApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     * Sets the `canceled_date` field to the end of the active billing period. After this date, the status changes from ACTIVE to CANCELED.
     * @summary CancelSubscription
     * @param {string} subscriptionId The ID of the subscription to cancel.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    cancelSubscription(subscriptionId: string, options?: any): AxiosPromise<CancelSubscriptionResponse>;
    /**
     * Creates a subscription for a customer to a subscription plan.  If you provide a card on file in the request, Square charges the card for  the subscription. Otherwise, Square bills an invoice to the customer\'s email  address. The subscription starts immediately, unless the request includes  the optional `start_date`. Each individual subscription is associated with a particular location.
     * @summary CreateSubscription
     * @param {CreateSubscriptionRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createSubscription(body: CreateSubscriptionRequest, options?: any): AxiosPromise<CreateSubscriptionResponse>;
    /**
     * Lists all events for a specific subscription. In the current implementation, only `START_SUBSCRIPTION` and `STOP_SUBSCRIPTION` (when the subscription was canceled) events are returned.
     * @summary ListSubscriptionEvents
     * @param {string} subscriptionId The ID of the subscription to retrieve the events for.
     * @param {string} [cursor] A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of results for the original query.  For more information, see [Pagination](https://developer.squareup.com/docs/docs/working-with-apis/pagination).
     * @param {number} [limit] The upper limit on the number of subscription events to return  in the response.   Default: &#x60;200&#x60;
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listSubscriptionEvents(subscriptionId: string, cursor?: string, limit?: number, options?: any): AxiosPromise<ListSubscriptionEventsResponse>;
    /**
     * Retrieves a subscription.
     * @summary RetrieveSubscription
     * @param {string} subscriptionId The ID of the subscription to retrieve.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    retrieveSubscription(subscriptionId: string, options?: any): AxiosPromise<RetrieveSubscriptionResponse>;
    /**
     * Searches for subscriptions.  Results are ordered chronologically by subscription creation date. If the request specifies more than one location ID,  the endpoint orders the result  by location ID, and then by creation date within each location. If no locations are given in the query, all locations are searched.  You can also optionally specify `customer_ids` to search by customer.  If left unset, all customers  associated with the specified locations are returned.  If the request specifies customer IDs, the endpoint orders results  first by location, within location by customer ID, and within  customer by subscription creation date.  For more information, see  [Retrieve subscriptions](/docs/subscriptions-api/overview#retrieve-subscriptions).
     * @summary SearchSubscriptions
     * @param {SearchSubscriptionsRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchSubscriptions(body: SearchSubscriptionsRequest, options?: any): AxiosPromise<SearchSubscriptionsResponse>;
    /**
     * Updates a subscription. You can set, modify, and clear the  `subscription` field values.
     * @summary UpdateSubscription
     * @param {string} subscriptionId The ID for the subscription to update.
     * @param {UpdateSubscriptionRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateSubscription(subscriptionId: string, body: UpdateSubscriptionRequest, options?: any): AxiosPromise<UpdateSubscriptionResponse>;
};
/**
 * SubscriptionsApi - object-oriented interface
 * @export
 * @class SubscriptionsApi
 * @extends {BaseAPI}
 */
export declare class SubscriptionsApi extends BaseAPI {
    /**
     * Sets the `canceled_date` field to the end of the active billing period. After this date, the status changes from ACTIVE to CANCELED.
     * @summary CancelSubscription
     * @param {string} subscriptionId The ID of the subscription to cancel.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SubscriptionsApi
     */
    cancelSubscription(subscriptionId: string, options?: any): Promise<import("axios").AxiosResponse<CancelSubscriptionResponse>>;
    /**
     * Creates a subscription for a customer to a subscription plan.  If you provide a card on file in the request, Square charges the card for  the subscription. Otherwise, Square bills an invoice to the customer\'s email  address. The subscription starts immediately, unless the request includes  the optional `start_date`. Each individual subscription is associated with a particular location.
     * @summary CreateSubscription
     * @param {CreateSubscriptionRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SubscriptionsApi
     */
    createSubscription(body: CreateSubscriptionRequest, options?: any): Promise<import("axios").AxiosResponse<CreateSubscriptionResponse>>;
    /**
     * Lists all events for a specific subscription. In the current implementation, only `START_SUBSCRIPTION` and `STOP_SUBSCRIPTION` (when the subscription was canceled) events are returned.
     * @summary ListSubscriptionEvents
     * @param {string} subscriptionId The ID of the subscription to retrieve the events for.
     * @param {string} [cursor] A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of results for the original query.  For more information, see [Pagination](https://developer.squareup.com/docs/docs/working-with-apis/pagination).
     * @param {number} [limit] The upper limit on the number of subscription events to return  in the response.   Default: &#x60;200&#x60;
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SubscriptionsApi
     */
    listSubscriptionEvents(subscriptionId: string, cursor?: string, limit?: number, options?: any): Promise<import("axios").AxiosResponse<ListSubscriptionEventsResponse>>;
    /**
     * Retrieves a subscription.
     * @summary RetrieveSubscription
     * @param {string} subscriptionId The ID of the subscription to retrieve.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SubscriptionsApi
     */
    retrieveSubscription(subscriptionId: string, options?: any): Promise<import("axios").AxiosResponse<RetrieveSubscriptionResponse>>;
    /**
     * Searches for subscriptions.  Results are ordered chronologically by subscription creation date. If the request specifies more than one location ID,  the endpoint orders the result  by location ID, and then by creation date within each location. If no locations are given in the query, all locations are searched.  You can also optionally specify `customer_ids` to search by customer.  If left unset, all customers  associated with the specified locations are returned.  If the request specifies customer IDs, the endpoint orders results  first by location, within location by customer ID, and within  customer by subscription creation date.  For more information, see  [Retrieve subscriptions](/docs/subscriptions-api/overview#retrieve-subscriptions).
     * @summary SearchSubscriptions
     * @param {SearchSubscriptionsRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SubscriptionsApi
     */
    searchSubscriptions(body: SearchSubscriptionsRequest, options?: any): Promise<import("axios").AxiosResponse<SearchSubscriptionsResponse>>;
    /**
     * Updates a subscription. You can set, modify, and clear the  `subscription` field values.
     * @summary UpdateSubscription
     * @param {string} subscriptionId The ID for the subscription to update.
     * @param {UpdateSubscriptionRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SubscriptionsApi
     */
    updateSubscription(subscriptionId: string, body: UpdateSubscriptionRequest, options?: any): Promise<import("axios").AxiosResponse<UpdateSubscriptionResponse>>;
}

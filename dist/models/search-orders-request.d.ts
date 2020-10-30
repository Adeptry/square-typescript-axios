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
import { SearchOrdersQuery } from './search-orders-query';
/**
 * The request does not have any required fields. When given no query criteria, SearchOrders will return all results for all of the merchant’s locations. When fetching additional pages using a `cursor`, the `query` must be equal to the `query` used to fetch the first page of results.
 * @export
 * @class SearchOrdersRequest
 */
export declare class SearchOrdersRequest {
    /**
     * The location IDs for the orders to query. All locations must belong to the same merchant.  Min: 1 location IDs.  Max: 10 location IDs.
     * @type {Array<string>}
     * @memberof SearchOrdersRequest
     */
    location_ids?: Array<string>;
    /**
     * A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of results for your original query. See [Pagination](https://developer.squareup.com/docs/basics/api101/pagination) for more information.
     * @type {string}
     * @memberof SearchOrdersRequest
     */
    cursor?: string;
    /**
     *
     * @type {SearchOrdersQuery}
     * @memberof SearchOrdersRequest
     */
    query?: SearchOrdersQuery;
    /**
     * Maximum number of results to be returned in a single page. It is possible to receive fewer results than the specified limit on a given page.  Default: `500`
     * @type {number}
     * @memberof SearchOrdersRequest
     */
    limit?: number;
    /**
     * Boolean that controls the format of the search results. If `true`, SearchOrders will return ``OrderEntry`` objects. If `false`, SearchOrders will return complete Order objects.  Default: `false`.
     * @type {boolean}
     * @memberof SearchOrdersRequest
     */
    return_entries?: boolean;
}

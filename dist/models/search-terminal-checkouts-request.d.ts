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
import { TerminalCheckoutQuery } from './terminal-checkout-query';
/**
 *
 * @export
 * @interface SearchTerminalCheckoutsRequest
 */
export interface SearchTerminalCheckoutsRequest {
    /**
     *
     * @type {TerminalCheckoutQuery}
     * @memberof SearchTerminalCheckoutsRequest
     */
    query?: TerminalCheckoutQuery;
    /**
     * A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of results for the original query. See [Pagination](https://developer.squareup.com/docs/basics/api101/pagination) for more information.
     * @type {string}
     * @memberof SearchTerminalCheckoutsRequest
     */
    cursor?: string;
    /**
     * Limit the number of results returned for a single request.
     * @type {number}
     * @memberof SearchTerminalCheckoutsRequest
     */
    limit?: number;
}
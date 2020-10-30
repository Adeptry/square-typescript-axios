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
import { SearchSubscriptionsFilter } from './search-subscriptions-filter';
/**
 * Represents a query (including filtering criteria) used to search for subscriptions.
 * @export
 * @class SearchSubscriptionsQuery
 */
export declare class SearchSubscriptionsQuery {
    /**
     *
     * @type {SearchSubscriptionsFilter}
     * @memberof SearchSubscriptionsQuery
     */
    filter?: SearchSubscriptionsFilter;
}
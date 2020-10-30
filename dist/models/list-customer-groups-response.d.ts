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
import { CustomerGroup } from './customer-group';
/**
 * Defines the fields that are included in the response body of a request to the [ListCustomerGroups](#endpoint-listcustomergroups) endpoint.  One of `errors` or `groups` is present in a given response (never both).
 * @export
 * @class ListCustomerGroupsResponse
 */
export declare class ListCustomerGroupsResponse {
    /**
     * Any errors that occurred during the request.
     * @type {Array<Error>}
     * @memberof ListCustomerGroupsResponse
     */
    errors?: Array<Error>;
    /**
     * A list of customer groups belonging to the current merchant.
     * @type {Array<CustomerGroup>}
     * @memberof ListCustomerGroupsResponse
     */
    groups?: Array<CustomerGroup>;
    /**
     * A pagination cursor to retrieve the next set of results for your original query to the endpoint. This value is present only if the request succeeded and additional results are available.  See the [Pagination guide](https://developer.squareup.com/docs/working-with-apis/pagination) for more information.
     * @type {string}
     * @memberof ListCustomerGroupsResponse
     */
    cursor?: string;
}
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
/**
 * Describes a `ListInvoice` request.
 * @export
 * @class ListInvoicesRequest
 */
export declare class ListInvoicesRequest {
    /**
     * The ID of the location for which to list invoices.
     * @type {string}
     * @memberof ListInvoicesRequest
     */
    location_id: string;
    /**
     * A pagination cursor returned by a previous call to this endpoint.  Provide this cursor to retrieve the next set of results for your original query.  For more information, see [Pagination](https://developer.squareup.com/docs/docs/working-with-apis/pagination).
     * @type {string}
     * @memberof ListInvoicesRequest
     */
    cursor?: string;
    /**
     * The maximum number of invoices to return (200 is the maximum `limit`).  If not provided, the server  uses a default limit of 100 invoices.
     * @type {number}
     * @memberof ListInvoicesRequest
     */
    limit?: number;
}

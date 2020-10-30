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
 * Retrieves a list of payments taken by the account making the request.  The maximum results per page is 100.
 * @export
 * @class ListPaymentsRequest
 */
export declare class ListPaymentsRequest {
    /**
     * The timestamp for the beginning of the reporting period, in RFC 3339 format. Inclusive. Default: The current time minus one year.
     * @type {string}
     * @memberof ListPaymentsRequest
     */
    begin_time?: string;
    /**
     * The timestamp for the end of the reporting period, in RFC 3339 format.  Default: The current time.
     * @type {string}
     * @memberof ListPaymentsRequest
     */
    end_time?: string;
    /**
     * The order in which results are listed: - `ASC` - Oldest to newest. - `DESC` - Newest to oldest (default).
     * @type {string}
     * @memberof ListPaymentsRequest
     */
    sort_order?: string;
    /**
     * A pagination cursor returned by a previous call to this endpoint. Provide this cursor to retrieve the next set of results for the original query.  For more information, see [Pagination](https://developer.squareup.com/docs/basics/api101/pagination).
     * @type {string}
     * @memberof ListPaymentsRequest
     */
    cursor?: string;
    /**
     * Limit results to the location supplied. By default, results are returned for the default (main) location associated with the seller.
     * @type {string}
     * @memberof ListPaymentsRequest
     */
    location_id?: string;
    /**
     * The exact amount in the `total_money` for a payment.
     * @type {number}
     * @memberof ListPaymentsRequest
     */
    total?: number;
    /**
     * The last four digits of a payment card.
     * @type {string}
     * @memberof ListPaymentsRequest
     */
    last_4?: string;
    /**
     * The brand of the payment card (for example, VISA).
     * @type {string}
     * @memberof ListPaymentsRequest
     */
    card_brand?: string;
    /**
     * The maximum number of results to be returned in a single page. It is possible to receive fewer results than the specified limit on a given page.  The default value of 100 is also the maximum allowed value. If the provided value is  greater than 100, it is ignored and the default value is used instead.  Default: `100`
     * @type {number}
     * @memberof ListPaymentsRequest
     */
    limit?: number;
}
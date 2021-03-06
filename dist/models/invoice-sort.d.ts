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
 * Identifies the  sort field and sort order.
 * @export
 * @class InvoiceSort
 */
export declare class InvoiceSort {
    /**
     * The field to sort on. See [InvoiceSortField](#type-invoicesortfield) for possible values
     * @type {string}
     * @memberof InvoiceSort
     */
    field: string;
    /**
     * The order to use for sorting the results. See [SortOrder](#type-sortorder) for possible values
     * @type {string}
     * @memberof InvoiceSort
     */
    order?: string;
}

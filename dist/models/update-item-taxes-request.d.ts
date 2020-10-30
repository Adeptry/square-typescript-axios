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
 *
 * @export
 * @class UpdateItemTaxesRequest
 */
export declare class UpdateItemTaxesRequest {
    /**
     * IDs for the CatalogItems associated with the CatalogTax objects being updated.
     * @type {Array<string>}
     * @memberof UpdateItemTaxesRequest
     */
    item_ids: Array<string>;
    /**
     * IDs of the CatalogTax objects to enable.
     * @type {Array<string>}
     * @memberof UpdateItemTaxesRequest
     */
    taxes_to_enable?: Array<string>;
    /**
     * IDs of the CatalogTax objects to disable.
     * @type {Array<string>}
     * @memberof UpdateItemTaxesRequest
     */
    taxes_to_disable?: Array<string>;
}

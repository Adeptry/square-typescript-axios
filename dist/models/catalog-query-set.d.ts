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
 * The query filter to return the search result(s) by exact match of the specified `attribute_name` and any of the `attribute_values`.
 * @export
 * @class CatalogQuerySet
 */
export declare class CatalogQuerySet {
    /**
     * The name of the attribute to be searched. Matching of the attribute name is exact.
     * @type {string}
     * @memberof CatalogQuerySet
     */
    attribute_name: string;
    /**
     * The desired values of the search attribute. Matching of the attribute values is exact and case insensitive. A maximum of 250 values may be searched in a request.
     * @type {Array<string>}
     * @memberof CatalogQuerySet
     */
    attribute_values: Array<string>;
}

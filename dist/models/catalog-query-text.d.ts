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
 * The query filter to return the search result whose searchable attribute values contain all of the specified keywords or tokens, independent of the token order or case.
 * @export
 * @class CatalogQueryText
 */
export declare class CatalogQueryText {
    /**
     * A list of 1, 2, or 3 search keywords. Keywords with fewer than 3 characters are ignored.
     * @type {Array<string>}
     * @memberof CatalogQueryText
     */
    keywords: Array<string>;
}

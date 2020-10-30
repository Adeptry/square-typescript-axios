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
import { InventoryChange } from './inventory-change';
/**
 *
 * @export
 * @class RetrieveInventoryChangesResponse
 */
export declare class RetrieveInventoryChangesResponse {
    /**
     * Any errors that occurred during the request.
     * @type {Array<Error>}
     * @memberof RetrieveInventoryChangesResponse
     */
    errors?: Array<Error>;
    /**
     * The set of inventory changes for the requested object and locations.
     * @type {Array<InventoryChange>}
     * @memberof RetrieveInventoryChangesResponse
     */
    changes?: Array<InventoryChange>;
    /**
     * The pagination cursor to be used in a subsequent request. If unset, this is the final response.  See the [Pagination](https://developer.squareup.com/docs/working-with-apis/pagination) guide for more information.
     * @type {string}
     * @memberof RetrieveInventoryChangesResponse
     */
    cursor?: string;
}

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
import { CatalogObject } from './catalog-object';
/**
 *
 * @export
 * @class BatchRetrieveCatalogObjectsResponse
 */
export declare class BatchRetrieveCatalogObjectsResponse {
    /**
     * Any errors that occurred during the request.
     * @type {Array<Error>}
     * @memberof BatchRetrieveCatalogObjectsResponse
     */
    errors?: Array<Error>;
    /**
     * A list of `CatalogObject`s returned.
     * @type {Array<CatalogObject>}
     * @memberof BatchRetrieveCatalogObjectsResponse
     */
    objects?: Array<CatalogObject>;
    /**
     * A list of `CatalogObject`s referenced by the object in the `objects` field.
     * @type {Array<CatalogObject>}
     * @memberof BatchRetrieveCatalogObjectsResponse
     */
    related_objects?: Array<CatalogObject>;
}
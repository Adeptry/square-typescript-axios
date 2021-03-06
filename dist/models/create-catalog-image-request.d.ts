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
 * @class CreateCatalogImageRequest
 */
export declare class CreateCatalogImageRequest {
    /**
     * A unique string that identifies this CreateCatalogImage request. Keys can be any valid string but must be unique for every CreateCatalogImage request.  See [Idempotency keys](https://developer.squareup.com/docs/basics/api101/idempotency) for more information.
     * @type {string}
     * @memberof CreateCatalogImageRequest
     */
    idempotency_key: string;
    /**
     * Unique ID of the `CatalogObject` to attach to this `CatalogImage`. Leave this field empty to create unattached images, for example if you are building an integration where these images can be attached to catalog items at a later time.
     * @type {string}
     * @memberof CreateCatalogImageRequest
     */
    object_id?: string;
    /**
     *
     * @type {CatalogObject}
     * @memberof CreateCatalogImageRequest
     */
    image?: CatalogObject;
}

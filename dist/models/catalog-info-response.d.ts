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
import { CatalogInfoResponseLimits } from './catalog-info-response-limits';
import { StandardUnitDescriptionGroup } from './standard-unit-description-group';
/**
 *
 * @export
 * @class CatalogInfoResponse
 */
export declare class CatalogInfoResponse {
    /**
     * Any errors that occurred during the request.
     * @type {Array<Error>}
     * @memberof CatalogInfoResponse
     */
    errors?: Array<Error>;
    /**
     *
     * @type {CatalogInfoResponseLimits}
     * @memberof CatalogInfoResponse
     */
    limits?: CatalogInfoResponseLimits;
    /**
     *
     * @type {StandardUnitDescriptionGroup}
     * @memberof CatalogInfoResponse
     */
    standard_unit_description_group?: StandardUnitDescriptionGroup;
}

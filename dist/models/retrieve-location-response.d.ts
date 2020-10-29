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
import { Location } from './location';
/**
 * Defines the fields that the [RetrieveLocation](#endpoint-retrievelocation) endpoint returns in a response.
 * @export
 * @interface RetrieveLocationResponse
 */
export interface RetrieveLocationResponse {
    /**
     * Information on errors encountered during the request.
     * @type {Array<Error>}
     * @memberof RetrieveLocationResponse
     */
    errors?: Array<Error>;
    /**
     *
     * @type {Location}
     * @memberof RetrieveLocationResponse
     */
    location?: Location;
}
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
import { BreakType } from './break-type';
/**
 * The response to the request to create a `BreakType`. Contains the created `BreakType` object. May contain a set of `Error` objects if the request resulted in errors.
 * @export
 * @interface CreateBreakTypeResponse
 */
export interface CreateBreakTypeResponse {
    /**
     *
     * @type {BreakType}
     * @memberof CreateBreakTypeResponse
     */
    break_type?: BreakType;
    /**
     * Any errors that occurred during the request.
     * @type {Array<Error>}
     * @memberof CreateBreakTypeResponse
     */
    errors?: Array<Error>;
}
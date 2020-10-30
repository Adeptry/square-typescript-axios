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
import { DeviceCode } from './device-code';
/**
 *
 * @export
 * @class CreateDeviceCodeResponse
 */
export declare class CreateDeviceCodeResponse {
    /**
     * Any errors that occurred during the request.
     * @type {Array<Error>}
     * @memberof CreateDeviceCodeResponse
     */
    errors?: Array<Error>;
    /**
     *
     * @type {DeviceCode}
     * @memberof CreateDeviceCodeResponse
     */
    device_code?: DeviceCode;
}
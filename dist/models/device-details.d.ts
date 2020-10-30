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
 * Details about the device that took the payment.
 * @export
 * @class DeviceDetails
 */
export declare class DeviceDetails {
    /**
     * Square-issued ID of the device.
     * @type {string}
     * @memberof DeviceDetails
     */
    device_id?: string;
    /**
     * Square-issued installation ID for the device.
     * @type {string}
     * @memberof DeviceDetails
     */
    device_installation_id?: string;
    /**
     * The name of the device set by the merchant.
     * @type {string}
     * @memberof DeviceDetails
     */
    device_name?: string;
}

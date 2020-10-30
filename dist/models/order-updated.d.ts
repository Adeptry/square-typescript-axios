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
 *
 * @export
 * @class OrderUpdated
 */
export declare class OrderUpdated {
    /**
     * The order\'s unique ID.
     * @type {string}
     * @memberof OrderUpdated
     */
    order_id?: string;
    /**
     * Version number which is incremented each time an update is committed to the order. Orders that were not created through the API will not include a version and thus cannot be updated.  [Read more about working with versions](https://developer.squareup.com/docs/docs/orders-api/manage-orders#update-orders)
     * @type {number}
     * @memberof OrderUpdated
     */
    version?: number;
    /**
     * The ID of the merchant location this order is associated with.
     * @type {string}
     * @memberof OrderUpdated
     */
    location_id?: string;
    /**
     * The state of the order. See [OrderState](#type-orderstate) for possible values
     * @type {string}
     * @memberof OrderUpdated
     */
    state?: string;
    /**
     * Timestamp for when the order was created in RFC 3339 format.
     * @type {string}
     * @memberof OrderUpdated
     */
    created_at?: string;
    /**
     * Timestamp for when the order was last updated in RFC 3339 format.
     * @type {string}
     * @memberof OrderUpdated
     */
    updated_at?: string;
}

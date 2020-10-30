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
import { OrderFulfillmentPickupDetailsCurbsidePickupDetails } from './order-fulfillment-pickup-details-curbside-pickup-details';
import { OrderFulfillmentRecipient } from './order-fulfillment-recipient';
/**
 * Contains details necessary to fulfill a pickup order.
 * @export
 * @class OrderFulfillmentPickupDetails
 */
export declare class OrderFulfillmentPickupDetails {
    /**
     *
     * @type {OrderFulfillmentRecipient}
     * @memberof OrderFulfillmentPickupDetails
     */
    recipient?: OrderFulfillmentRecipient;
    /**
     * The [timestamp](#workingwithdates) indicating when this fulfillment will expire if it is not accepted. Must be in RFC 3339 format e.g., \"2016-09-04T23:59:33.123Z\". Expiration time can only be set up to 7 days in the future. If `expires_at` is not set, this pickup fulfillment will be automatically accepted when placed.
     * @type {string}
     * @memberof OrderFulfillmentPickupDetails
     */
    expires_at?: string;
    /**
     * The duration of time after which an open and accepted pickup fulfillment will automatically move to the `COMPLETED` state. Must be in RFC3339 duration format e.g., \"P1W3D\".  If not set, this pickup fulfillment will remain accepted until it is canceled or completed.
     * @type {string}
     * @memberof OrderFulfillmentPickupDetails
     */
    auto_complete_duration?: string;
    /**
     * The schedule type of the pickup fulfillment. Defaults to `SCHEDULED`. See [OrderFulfillmentPickupDetailsScheduleType](#type-orderfulfillmentpickupdetailsscheduletype) for possible values
     * @type {string}
     * @memberof OrderFulfillmentPickupDetails
     */
    schedule_type?: string;
    /**
     * The [timestamp](#workingwithdates) that represents the start of the pickup window. Must be in RFC3339 timestamp format, e.g., \"2016-09-04T23:59:33.123Z\". For fulfillments with the schedule type `ASAP`, this is automatically set to the current time plus the expected duration to prepare the fulfillment.
     * @type {string}
     * @memberof OrderFulfillmentPickupDetails
     */
    pickup_at?: string;
    /**
     * The window of time in which the order should be picked up after the `pickup_at` timestamp. Must be in RFC3339 duration format, e.g., \"P1W3D\". Can be used as an informational guideline for merchants.
     * @type {string}
     * @memberof OrderFulfillmentPickupDetails
     */
    pickup_window_duration?: string;
    /**
     * The duration of time it takes to prepare this fulfillment. Must be in RFC3339 duration format, e.g., \"P1W3D\".
     * @type {string}
     * @memberof OrderFulfillmentPickupDetails
     */
    prep_time_duration?: string;
    /**
     * A note meant to provide additional instructions about the pickup fulfillment displayed in the Square Point of Sale and set by the API.
     * @type {string}
     * @memberof OrderFulfillmentPickupDetails
     */
    note?: string;
    /**
     * The [timestamp](#workingwithdates) indicating when the fulfillment was placed. Must be in RFC3339 timestamp format, e.g., \"2016-09-04T23:59:33.123Z\".
     * @type {string}
     * @memberof OrderFulfillmentPickupDetails
     */
    placed_at?: string;
    /**
     * The [timestamp](#workingwithdates) indicating when the fulfillment was accepted. In RFC3339 timestamp format, e.g., \"2016-09-04T23:59:33.123Z\".
     * @type {string}
     * @memberof OrderFulfillmentPickupDetails
     */
    accepted_at?: string;
    /**
     * The [timestamp](#workingwithdates) indicating when the fulfillment was rejected. In RFC3339 timestamp format, e.g., \"2016-09-04T23:59:33.123Z\".
     * @type {string}
     * @memberof OrderFulfillmentPickupDetails
     */
    rejected_at?: string;
    /**
     * The [timestamp](#workingwithdates) indicating when the fulfillment is marked as ready for pickup. In RFC3339 timestamp format, e.g., \"2016-09-04T23:59:33.123Z\".
     * @type {string}
     * @memberof OrderFulfillmentPickupDetails
     */
    ready_at?: string;
    /**
     * The [timestamp](#workingwithdates) indicating when the fulfillment expired. In RFC3339 timestamp format, e.g., \"2016-09-04T23:59:33.123Z\".
     * @type {string}
     * @memberof OrderFulfillmentPickupDetails
     */
    expired_at?: string;
    /**
     * The [timestamp](#workingwithdates) indicating when the fulfillment was picked up by the recipient. In RFC3339 timestamp format, e.g., \"2016-09-04T23:59:33.123Z\".
     * @type {string}
     * @memberof OrderFulfillmentPickupDetails
     */
    picked_up_at?: string;
    /**
     * The [timestamp](#workingwithdates) in RFC3339 timestamp format, e.g., \"2016-09-04T23:59:33.123Z\", indicating when the fulfillment was canceled.
     * @type {string}
     * @memberof OrderFulfillmentPickupDetails
     */
    canceled_at?: string;
    /**
     * A description of why the pickup was canceled. Max length: 100 characters.
     * @type {string}
     * @memberof OrderFulfillmentPickupDetails
     */
    cancel_reason?: string;
    /**
     * If true, indicates this pickup order is for curbside pickup, not in-store pickup.
     * @type {boolean}
     * @memberof OrderFulfillmentPickupDetails
     */
    is_curbside_pickup?: boolean;
    /**
     *
     * @type {OrderFulfillmentPickupDetailsCurbsidePickupDetails}
     * @memberof OrderFulfillmentPickupDetails
     */
    curbside_pickup_details?: OrderFulfillmentPickupDetailsCurbsidePickupDetails;
}

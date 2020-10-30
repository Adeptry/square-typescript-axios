/* tslint:disable */
/* eslint-disable */
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


import { OrderFulfillmentRecipient } from './order-fulfillment-recipient';

import { Field, ObjectType } from '@nestjs/graphql';

/**
 * Contains details necessary to fulfill a shipment order.
 * @export
 * @class OrderFulfillmentShipmentDetails
 */
@ObjectType()
export class OrderFulfillmentShipmentDetails {
    /**
     * 
     * @type {OrderFulfillmentRecipient}
     * @memberof OrderFulfillmentShipmentDetails
     */
    @Field(() => OrderFulfillmentRecipient) 
    recipient?: OrderFulfillmentRecipient;
    /**
     * The shipping carrier being used to ship this fulfillment e.g. UPS, FedEx, USPS, etc.
     * @type {string}
     * @memberof OrderFulfillmentShipmentDetails
     */
    @Field() 
    carrier?: string;
    /**
     * A note with additional information for the shipping carrier.
     * @type {string}
     * @memberof OrderFulfillmentShipmentDetails
     */
    @Field() 
    shipping_note?: string;
    /**
     * A description of the type of shipping product purchased from the carrier. e.g. First Class, Priority, Express
     * @type {string}
     * @memberof OrderFulfillmentShipmentDetails
     */
    @Field() 
    shipping_type?: string;
    /**
     * The reference number provided by the carrier to track the shipment\'s progress.
     * @type {string}
     * @memberof OrderFulfillmentShipmentDetails
     */
    @Field() 
    tracking_number?: string;
    /**
     * A link to the tracking webpage on the carrier\'s website.
     * @type {string}
     * @memberof OrderFulfillmentShipmentDetails
     */
    @Field() 
    tracking_url?: string;
    /**
     * The [timestamp](#workingwithdates) indicating when the shipment was requested. Must be in RFC 3339 timestamp format, e.g., \"2016-09-04T23:59:33.123Z\".
     * @type {string}
     * @memberof OrderFulfillmentShipmentDetails
     */
    @Field() 
    placed_at?: string;
    /**
     * The [timestamp](#workingwithdates) indicating when this fulfillment was moved to the `RESERVED` state. Indicates that preparation of this shipment has begun. Must be in RFC 3339 timestamp format, e.g., \"2016-09-04T23:59:33.123Z\".
     * @type {string}
     * @memberof OrderFulfillmentShipmentDetails
     */
    @Field() 
    in_progress_at?: string;
    /**
     * The [timestamp](#workingwithdates) indicating when this fulfillment was moved to the `PREPARED` state. Indicates that the fulfillment is packaged. Must be in RFC 3339 timestamp format, e.g., \"2016-09-04T23:59:33.123Z\".
     * @type {string}
     * @memberof OrderFulfillmentShipmentDetails
     */
    @Field() 
    packaged_at?: string;
    /**
     * The [timestamp](#workingwithdates) indicating when the shipment is expected to be delivered to the shipping carrier. Must be in RFC 3339 timestamp format, e.g., \"2016-09-04T23:59:33.123Z\".
     * @type {string}
     * @memberof OrderFulfillmentShipmentDetails
     */
    @Field() 
    expected_shipped_at?: string;
    /**
     * The [timestamp](#workingwithdates) indicating when this fulfillment was moved to the `COMPLETED`state. Indicates that the fulfillment has been given to the shipping carrier. Must be in RFC 3339 timestamp format, e.g., \"2016-09-04T23:59:33.123Z\".
     * @type {string}
     * @memberof OrderFulfillmentShipmentDetails
     */
    @Field() 
    shipped_at?: string;
    /**
     * The [timestamp](#workingwithdates) indicating the shipment was canceled. Must be in RFC 3339 timestamp format, e.g., \"2016-09-04T23:59:33.123Z\".
     * @type {string}
     * @memberof OrderFulfillmentShipmentDetails
     */
    @Field() 
    canceled_at?: string;
    /**
     * A description of why the shipment was canceled.
     * @type {string}
     * @memberof OrderFulfillmentShipmentDetails
     */
    @Field() 
    cancel_reason?: string;
    /**
     * The [timestamp](#workingwithdates) indicating when the shipment failed to be completed. Must be in RFC 3339 timestamp format, e.g., \"2016-09-04T23:59:33.123Z\".
     * @type {string}
     * @memberof OrderFulfillmentShipmentDetails
     */
    @Field() 
    failed_at?: string;
    /**
     * A description of why the shipment failed to be completed.
     * @type {string}
     * @memberof OrderFulfillmentShipmentDetails
     */
    @Field() 
    failure_reason?: string;
}


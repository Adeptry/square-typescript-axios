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


import { DeviceCheckoutOptions } from './device-checkout-options';
import { Money } from './money';

import { Field, ObjectType } from '@nestjs/graphql';

/**
 * 
 * @export
 * @class TerminalCheckout
 */
@ObjectType()
export class TerminalCheckout {
    /**
     * A unique ID for this `TerminalCheckout`
     * @type {string}
     * @memberof TerminalCheckout
     */
    @Field() 
    id?: string;
    /**
     * 
     * @type {Money}
     * @memberof TerminalCheckout
     */
    @Field(() => Money) 
    amount_money: Money;
    /**
     * An optional user-defined reference ID which can be used to associate this `TerminalCheckout` to another entity in an external system. For example, an order ID generated by a third-party shopping cart. Will also be associated with any payments used to complete the checkout.
     * @type {string}
     * @memberof TerminalCheckout
     */
    @Field() 
    reference_id?: string;
    /**
     * An optional note to associate with the checkout, as well any payments used to complete the checkout.
     * @type {string}
     * @memberof TerminalCheckout
     */
    @Field() 
    note?: string;
    /**
     * 
     * @type {DeviceCheckoutOptions}
     * @memberof TerminalCheckout
     */
    @Field(() => DeviceCheckoutOptions) 
    device_options: DeviceCheckoutOptions;
    /**
     * The duration as an RFC 3339 duration, after which the checkout will be automatically canceled. TerminalCheckouts that are `PENDING` will be automatically `CANCELED` and have a cancellation reason of `TIMED\\_OUT`.  Default: 5 minutes from creation  Maximum: 5 minutes
     * @type {string}
     * @memberof TerminalCheckout
     */
    @Field() 
    deadline_duration?: string;
    /**
     * The status of the `TerminalCheckout`. Options: `PENDING`, `IN\\_PROGRESS`, `CANCEL\\_REQUESTED`, `CANCELED`, `COMPLETED`
     * @type {string}
     * @memberof TerminalCheckout
     */
    @Field() 
    status?: string;
    /**
     * Present if the status is `CANCELED`. See [ActionCancelReason](#type-actioncancelreason) for possible values
     * @type {string}
     * @memberof TerminalCheckout
     */
    @Field() 
    cancel_reason?: string;
    /**
     * A list of ids for payments created by this `TerminalCheckout`.
     * @type {Array<string>}
     * @memberof TerminalCheckout
     */
    @Field() 
    payment_ids?: Array<string>;
    /**
     * The time when the `TerminalCheckout` was created as an RFC 3339 timestamp.
     * @type {string}
     * @memberof TerminalCheckout
     */
    @Field() 
    created_at?: string;
    /**
     * The time when the `TerminalCheckout` was last updated as an RFC 3339 timestamp.
     * @type {string}
     * @memberof TerminalCheckout
     */
    @Field() 
    updated_at?: string;
}


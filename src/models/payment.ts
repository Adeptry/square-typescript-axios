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


import { Address } from './address';
import { CardPaymentDetails } from './card-payment-details';
import { Money } from './money';
import { ProcessingFee } from './processing-fee';

import { Field, ObjectType } from '@nestjs/graphql';
import GraphQLJSON from 'graphql-type-json';

/**
 * Represents a payment processed by the Square API.
 * @export
 * @class Payment
 */
@ObjectType()
export class Payment {
    /**
     * Unique ID for the payment.
     * @type {string}
     * @memberof Payment
     */
    
    @Field({ nullable: true })
    id?: string;
    /**
     * Timestamp of when the payment was created, in RFC 3339 format.
     * @type {string}
     * @memberof Payment
     */
    
    @Field({ nullable: true })
    created_at?: string;
    /**
     * Timestamp of when the payment was last updated, in RFC 3339 format.
     * @type {string}
     * @memberof Payment
     */
    
    @Field({ nullable: true })
    updated_at?: string;
    /**
     * 
     * @type {Money}
     * @memberof Payment
     */
    
    @Field(() => Money, { nullable: true })
    amount_money?: Money;
    /**
     * 
     * @type {Money}
     * @memberof Payment
     */
    
    @Field(() => Money, { nullable: true })
    tip_money?: Money;
    /**
     * 
     * @type {Money}
     * @memberof Payment
     */
    
    @Field(() => Money, { nullable: true })
    total_money?: Money;
    /**
     * 
     * @type {Money}
     * @memberof Payment
     */
    
    @Field(() => Money, { nullable: true })
    app_fee_money?: Money;
    /**
     * Processing fees and fee adjustments assessed by Square on this payment.
     * @type {Array<ProcessingFee>}
     * @memberof Payment
     */
    
    @Field(() => [ProcessingFee], { nullable: true })
    processing_fee?: Array<ProcessingFee>;
    /**
     * 
     * @type {Money}
     * @memberof Payment
     */
    
    @Field(() => Money, { nullable: true })
    refunded_money?: Money;
    /**
     * Indicates whether the payment is `APPROVED`, `COMPLETED`, `CANCELED`, or `FAILED`.
     * @type {string}
     * @memberof Payment
     */
    
    @Field({ nullable: true })
    status?: string;
    /**
     * The duration of time after the payment\'s creation when Square automatically applies the `delay_action` to the payment. This automatic `delay_action` applies only to payments that don\'t reach a terminal state (COMPLETED, CANCELED, or FAILED) before the `delay_duration` time period.  This field is specified as a time duration, in RFC 3339 format.  Notes: This feature is only supported for card payments.  Default:  - Card Present payments: \"PT36H\" (36 hours) from the creation time. - Card Not Present payments: \"P7D\" (7 days) from the creation time.
     * @type {string}
     * @memberof Payment
     */
    
    @Field({ nullable: true })
    delay_duration?: string;
    /**
     * The action to be applied to the payment when the `delay_duration` has elapsed. This field is read only.  Current values include: `CANCEL`
     * @type {string}
     * @memberof Payment
     */
    
    @Field({ nullable: true })
    delay_action?: string;
    /**
     * Read only timestamp of when the `delay_action` will automatically be applied, in RFC 3339 format.  Note that this field is calculated by summing the payment\'s `delay_duration` and `created_at` fields. The `created_at` field is generated by Square and may not exactly match the time on your local machine.
     * @type {string}
     * @memberof Payment
     */
    
    @Field({ nullable: true })
    delayed_until?: string;
    /**
     * The source type for this payment  Current values include: `CARD`.
     * @type {string}
     * @memberof Payment
     */
    
    @Field({ nullable: true })
    source_type?: string;
    /**
     * 
     * @type {CardPaymentDetails}
     * @memberof Payment
     */
    
    @Field(() => CardPaymentDetails, { nullable: true })
    card_details?: CardPaymentDetails;
    /**
     * ID of the location associated with the payment.
     * @type {string}
     * @memberof Payment
     */
    
    @Field({ nullable: true })
    location_id?: string;
    /**
     * ID of the order associated with this payment.
     * @type {string}
     * @memberof Payment
     */
    
    @Field({ nullable: true })
    order_id?: string;
    /**
     * An optional ID that associates this payment with an entity in another system.
     * @type {string}
     * @memberof Payment
     */
    
    @Field({ nullable: true })
    reference_id?: string;
    /**
     * The `Customer` ID of the customer associated with the payment.
     * @type {string}
     * @memberof Payment
     */
    
    @Field({ nullable: true })
    customer_id?: string;
    /**
     * An optional ID of the employee associated with taking this payment.
     * @type {string}
     * @memberof Payment
     */
    
    @Field({ nullable: true })
    employee_id?: string;
    /**
     * List of `refund_id`s identifying refunds for this payment.
     * @type {Array<string>}
     * @memberof Payment
     */
    
    @Field(() => GraphQLJSON, { nullable: true })
    refund_ids?: Array<string>;
    /**
     * The buyer\'s e-mail address
     * @type {string}
     * @memberof Payment
     */
    
    @Field({ nullable: true })
    buyer_email_address?: string;
    /**
     * 
     * @type {Address}
     * @memberof Payment
     */
    
    @Field(() => Address, { nullable: true })
    billing_address?: Address;
    /**
     * 
     * @type {Address}
     * @memberof Payment
     */
    
    @Field(() => Address, { nullable: true })
    shipping_address?: Address;
    /**
     * An optional note to include when creating a payment
     * @type {string}
     * @memberof Payment
     */
    
    @Field({ nullable: true })
    note?: string;
    /**
     * Additional payment information that gets added on the customer\'s card statement as part of the statement description.  Note that the `statement_description_identifier` may get truncated on the statement description to fit the required information including the Square identifier (SQ *) and name of the merchant taking the payment.
     * @type {string}
     * @memberof Payment
     */
    
    @Field({ nullable: true })
    statement_description_identifier?: string;
    /**
     * The payment\'s receipt number. The field will be missing if a payment is CANCELED
     * @type {string}
     * @memberof Payment
     */
    
    @Field({ nullable: true })
    receipt_number?: string;
    /**
     * The URL for the payment\'s receipt. The field will only be populated for COMPLETED payments.
     * @type {string}
     * @memberof Payment
     */
    
    @Field({ nullable: true })
    receipt_url?: string;
}



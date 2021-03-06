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
import { V1Money } from './v1-money';
import { V1OrderHistoryEntry } from './v1-order-history-entry';
import { V1Tender } from './v1-tender';

import { Field, ObjectType } from '@nestjs/graphql';
import GraphQLJSON from 'graphql-type-json';

/**
 * V1Order
 * @export
 * @class V1Order
 */
@ObjectType()
export class V1Order {
    /**
     * Any errors that occurred during the request.
     * @type {Array<Error>}
     * @memberof V1Order
     */
    
    @Field(() => GraphQLJSON, { nullable: true })
    errors?: Array<Error>;
    /**
     * The order\'s unique identifier.
     * @type {string}
     * @memberof V1Order
     */
    
    @Field({ nullable: true })
    id?: string;
    /**
     * The email address of the order\'s buyer.
     * @type {string}
     * @memberof V1Order
     */
    
    @Field({ nullable: true })
    buyer_email?: string;
    /**
     * The name of the order\'s buyer.
     * @type {string}
     * @memberof V1Order
     */
    
    @Field({ nullable: true })
    recipient_name?: string;
    /**
     * The phone number to use for the order\'s delivery.
     * @type {string}
     * @memberof V1Order
     */
    
    @Field({ nullable: true })
    recipient_phone_number?: string;
    /**
     * Whether the tax is an ADDITIVE tax or an INCLUSIVE tax. See [V1OrderState](#type-v1orderstate) for possible values
     * @type {string}
     * @memberof V1Order
     */
    
    @Field({ nullable: true })
    state?: string;
    /**
     * 
     * @type {Address}
     * @memberof V1Order
     */
    
    @Field(() => Address, { nullable: true })
    shipping_address?: Address;
    /**
     * 
     * @type {V1Money}
     * @memberof V1Order
     */
    
    @Field(() => V1Money, { nullable: true })
    subtotal_money?: V1Money;
    /**
     * 
     * @type {V1Money}
     * @memberof V1Order
     */
    
    @Field(() => V1Money, { nullable: true })
    total_shipping_money?: V1Money;
    /**
     * 
     * @type {V1Money}
     * @memberof V1Order
     */
    
    @Field(() => V1Money, { nullable: true })
    total_tax_money?: V1Money;
    /**
     * 
     * @type {V1Money}
     * @memberof V1Order
     */
    
    @Field(() => V1Money, { nullable: true })
    total_price_money?: V1Money;
    /**
     * 
     * @type {V1Money}
     * @memberof V1Order
     */
    
    @Field(() => V1Money, { nullable: true })
    total_discount_money?: V1Money;
    /**
     * The time when the order was created, in ISO 8601 format.
     * @type {string}
     * @memberof V1Order
     */
    
    @Field({ nullable: true })
    created_at?: string;
    /**
     * The time when the order was last modified, in ISO 8601 format.
     * @type {string}
     * @memberof V1Order
     */
    
    @Field({ nullable: true })
    updated_at?: string;
    /**
     * The time when the order expires if no action is taken, in ISO 8601 format.
     * @type {string}
     * @memberof V1Order
     */
    
    @Field({ nullable: true })
    expires_at?: string;
    /**
     * The unique identifier of the payment associated with the order.
     * @type {string}
     * @memberof V1Order
     */
    
    @Field({ nullable: true })
    payment_id?: string;
    /**
     * A note provided by the buyer when the order was created, if any.
     * @type {string}
     * @memberof V1Order
     */
    
    @Field({ nullable: true })
    buyer_note?: string;
    /**
     * A note provided by the merchant when the order\'s state was set to COMPLETED, if any
     * @type {string}
     * @memberof V1Order
     */
    
    @Field({ nullable: true })
    completed_note?: string;
    /**
     * A note provided by the merchant when the order\'s state was set to REFUNDED, if any.
     * @type {string}
     * @memberof V1Order
     */
    
    @Field({ nullable: true })
    refunded_note?: string;
    /**
     * A note provided by the merchant when the order\'s state was set to CANCELED, if any.
     * @type {string}
     * @memberof V1Order
     */
    
    @Field({ nullable: true })
    canceled_note?: string;
    /**
     * 
     * @type {V1Tender}
     * @memberof V1Order
     */
    
    @Field(() => V1Tender, { nullable: true })
    tender?: V1Tender;
    /**
     * The history of actions associated with the order.
     * @type {Array<V1OrderHistoryEntry>}
     * @memberof V1Order
     */
    
    @Field(() => [V1OrderHistoryEntry], { nullable: true })
    order_history?: Array<V1OrderHistoryEntry>;
    /**
     * The promo code provided by the buyer, if any.
     * @type {string}
     * @memberof V1Order
     */
    
    @Field({ nullable: true })
    promo_code?: string;
    /**
     * For Bitcoin transactions, the address that the buyer sent Bitcoin to.
     * @type {string}
     * @memberof V1Order
     */
    
    @Field({ nullable: true })
    btc_receive_address?: string;
    /**
     * For Bitcoin transactions, the price of the buyer\'s order in satoshi (100 million satoshi equals 1 BTC).
     * @type {number}
     * @memberof V1Order
     */
    
    @Field({ nullable: true })
    btc_price_satoshi?: number;
}



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


import { Money } from './money';

import { Field, ObjectType } from '@nestjs/graphql';
import GraphQLJSON from 'graphql-type-json';

/**
 * Represents a customer subscription to a subscription plan. For an overview of the `Subscription` type, see  [Subscription object](/docs/subscriptions-api/overview#subscription-object-overview).
 * @export
 * @class Subscription
 */
@ObjectType()
export class Subscription {
    /**
     * The Square-assigned ID of the subscription.
     * @type {string}
     * @memberof Subscription
     */
    
    @Field({ nullable: true })
    id?: string;
    /**
     * The ID of the location associated with the subscription.
     * @type {string}
     * @memberof Subscription
     */
    
    @Field({ nullable: true })
    location_id?: string;
    /**
     * The ID of the associated `subscription plan`.
     * @type {string}
     * @memberof Subscription
     */
    
    @Field({ nullable: true })
    plan_id?: string;
    /**
     * The ID of the associated `customer` profile.
     * @type {string}
     * @memberof Subscription
     */
    
    @Field({ nullable: true })
    customer_id?: string;
    /**
     * The start date of the subscription, in YYYY-MM-DD format (for example, 2013-01-15).
     * @type {string}
     * @memberof Subscription
     */
    
    @Field({ nullable: true })
    start_date?: string;
    /**
     * The subscription cancellation date, in YYYY-MM-DD format (for example, 2013-01-15). On this date, the subscription status changes  to `CANCELED` and the subscription billing stops.  If you don\'t set this field, the subscription plan dictates if and  when subscription ends.   You cannot update this field, you can only clear it.
     * @type {string}
     * @memberof Subscription
     */
    
    @Field({ nullable: true })
    canceled_date?: string;
    /**
     * The current status of the subscription. See [SubscriptionStatus](#type-subscriptionstatus) for possible values
     * @type {string}
     * @memberof Subscription
     */
    
    @Field({ nullable: true })
    status?: string;
    /**
     * The tax amount applied when billing the subscription. The percentage is expressed in decimal form, using a `\'.\'` as the decimal separator and without a `\'%\'` sign. For example, a value of `7.5` corresponds to 7.5%.
     * @type {string}
     * @memberof Subscription
     */
    
    @Field({ nullable: true })
    tax_percentage?: string;
    /**
     * The IDs of the `invoices` created for the  subscription, listed in order when the invoices were created  (oldest invoices appear first).
     * @type {Array<string>}
     * @memberof Subscription
     */
    
    @Field(() => GraphQLJSON, { nullable: true })
    invoice_ids?: Array<string>;
    /**
     * 
     * @type {Money}
     * @memberof Subscription
     */
    
    @Field(() => Money, { nullable: true })
    price_override_money?: Money;
    /**
     * The version of the object. When updating an object, the version supplied must match the version in the database, otherwise the write will be rejected as conflicting.
     * @type {number}
     * @memberof Subscription
     */
    
    @Field({ nullable: true })
    version?: number;
    /**
     * The timestamp when the subscription was created, in RFC 3339 format.
     * @type {string}
     * @memberof Subscription
     */
    
    @Field({ nullable: true })
    created_at?: string;
    /**
     * The ID of the `customer](#type-customer) [card` that is charged for the subscription.
     * @type {string}
     * @memberof Subscription
     */
    
    @Field({ nullable: true })
    card_id?: string;
    /**
     * The date up to which the customer is invoiced for the subscription, in YYYY-MM-DD format (for example, 2013-01-15).  After the invoice is paid for a given billing period, this date will be the last day of the billing period. For example, suppose for the month of May a customer gets an invoice (or charged the card) on May 1. For the monthly billing scenario, this date is then set to May 31.
     * @type {string}
     * @memberof Subscription
     */
    
    @Field({ nullable: true })
    paid_until_date?: string;
    /**
     * Timezone that will be used in date calculations for the subscription. Defaults to the timezone of the location based on `location_id`. Format: the IANA Timezone Database identifier for the location timezone (for example, `America/Los_Angeles`).
     * @type {string}
     * @memberof Subscription
     */
    
    @Field({ nullable: true })
    timezone?: string;
}



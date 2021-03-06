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
import { OrderFulfillment } from './order-fulfillment';
import { OrderLineItem } from './order-line-item';
import { OrderLineItemDiscount } from './order-line-item-discount';
import { OrderLineItemTax } from './order-line-item-tax';
import { OrderMoneyAmounts } from './order-money-amounts';
import { OrderPricingOptions } from './order-pricing-options';
import { OrderReturn } from './order-return';
import { OrderReward } from './order-reward';
import { OrderRoundingAdjustment } from './order-rounding-adjustment';
import { OrderServiceCharge } from './order-service-charge';
import { OrderSource } from './order-source';
import { Refund } from './refund';
import { Tender } from './tender';

import { Field, ObjectType } from '@nestjs/graphql';
import GraphQLJSON from 'graphql-type-json';

/**
 * Contains all information related to a single order to process with Square, including line items that specify the products to purchase. Order objects also include information on any associated tenders, refunds, and returns.  All Connect V2 Transactions have all been converted to Orders including all associated itemization data.
 * @export
 * @class Order
 */
@ObjectType()
export class Order {
    /**
     * The order\'s unique ID.
     * @type {string}
     * @memberof Order
     */
    
    @Field({ nullable: true })
    id?: string;
    /**
     * The ID of the merchant location this order is associated with.
     * @type {string}
     * @memberof Order
     */
    
    @Field({ nullable: false })
    location_id: string;
    /**
     * A client specified identifier to associate an entity in another system with this order.
     * @type {string}
     * @memberof Order
     */
    
    @Field({ nullable: true })
    reference_id?: string;
    /**
     * 
     * @type {OrderSource}
     * @memberof Order
     */
    
    @Field(() => OrderSource, { nullable: true })
    source?: OrderSource;
    /**
     * The `Customer` ID of the customer associated with the order.
     * @type {string}
     * @memberof Order
     */
    
    @Field({ nullable: true })
    customer_id?: string;
    /**
     * The line items included in the order.
     * @type {Array<OrderLineItem>}
     * @memberof Order
     */
    
    @Field(() => [OrderLineItem], { nullable: true })
    line_items?: Array<OrderLineItem>;
    /**
     * The list of all taxes associated with the order.  Taxes can be scoped to either `ORDER` or `LINE_ITEM`. For taxes with `LINE_ITEM` scope, an `OrderLineItemAppliedTax` must be added to each line item that the tax applies to. For taxes with `ORDER` scope, the server will generate an `OrderLineItemAppliedTax` for every line item.  On reads, each tax in the list will include the total amount of that tax applied to the order.  __IMPORTANT__: If `LINE_ITEM` scope is set on any taxes in this field, usage of the deprecated `line_items.taxes` field will result in an error. Please use `line_items.applied_taxes` instead.
     * @type {Array<OrderLineItemTax>}
     * @memberof Order
     */
    
    @Field(() => [OrderLineItemTax], { nullable: true })
    taxes?: Array<OrderLineItemTax>;
    /**
     * The list of all discounts associated with the order.  Discounts can be scoped to either `ORDER` or `LINE_ITEM`. For discounts scoped to `LINE_ITEM`, an `OrderLineItemAppliedDiscount` must be added to each line item that the discount applies to. For discounts with `ORDER` scope, the server will generate an `OrderLineItemAppliedDiscount` for every line item.  __IMPORTANT__: If `LINE_ITEM` scope is set on any discounts in this field, usage of the deprecated `line_items.discounts` field will result in an error. Please use `line_items.applied_discounts` instead.
     * @type {Array<OrderLineItemDiscount>}
     * @memberof Order
     */
    
    @Field(() => [OrderLineItemDiscount], { nullable: true })
    discounts?: Array<OrderLineItemDiscount>;
    /**
     * A list of service charges applied to the order.
     * @type {Array<OrderServiceCharge>}
     * @memberof Order
     */
    
    @Field(() => [OrderServiceCharge], { nullable: true })
    service_charges?: Array<OrderServiceCharge>;
    /**
     * Details on order fulfillment.  Orders can only be created with at most one fulfillment. However, orders returned by the API may contain multiple fulfillments.
     * @type {Array<OrderFulfillment>}
     * @memberof Order
     */
    
    @Field(() => [OrderFulfillment], { nullable: true })
    fulfillments?: Array<OrderFulfillment>;
    /**
     * Collection of items from sale Orders being returned in this one. Normally part of an Itemized Return or Exchange.  There will be exactly one `Return` object per sale Order being referenced.
     * @type {Array<OrderReturn>}
     * @memberof Order
     */
    
    @Field(() => [OrderReturn], { nullable: true })
    returns?: Array<OrderReturn>;
    /**
     * 
     * @type {OrderMoneyAmounts}
     * @memberof Order
     */
    
    @Field(() => OrderMoneyAmounts, { nullable: true })
    return_amounts?: OrderMoneyAmounts;
    /**
     * 
     * @type {OrderMoneyAmounts}
     * @memberof Order
     */
    
    @Field(() => OrderMoneyAmounts, { nullable: true })
    net_amounts?: OrderMoneyAmounts;
    /**
     * 
     * @type {OrderRoundingAdjustment}
     * @memberof Order
     */
    
    @Field(() => OrderRoundingAdjustment, { nullable: true })
    rounding_adjustment?: OrderRoundingAdjustment;
    /**
     * The Tenders which were used to pay for the Order.
     * @type {Array<Tender>}
     * @memberof Order
     */
    
    @Field(() => [Tender], { nullable: true })
    tenders?: Array<Tender>;
    /**
     * The Refunds that are part of this Order.
     * @type {Array<Refund>}
     * @memberof Order
     */
    
    @Field(() => [Refund], { nullable: true })
    refunds?: Array<Refund>;
    /**
     * Application-defined data attached to this order. Metadata fields are intended to store descriptive references or associations with an entity in another system or store brief information about the object. Square does not process this field; it only stores and returns it in relevant API calls. Do not use metadata to store any sensitive information (personally identifiable information, card details, etc.).  Keys written by applications must be 60 characters or less and must be in the character set `[a-zA-Z0-9_-]`. Entries may also include metadata generated by Square. These keys are prefixed with a namespace, separated from the key with a \':\' character.  Values have a max length of 255 characters.  An application may have up to 10 entries per metadata field.  Entries written by applications are private and can only be read or modified by the same application.  See [Metadata](https://developer.squareup.com/docs/build-basics/metadata) for more information.
     * @type {{ [key: string]: string; }}
     * @memberof Order
     */
    
    @Field(() => GraphQLJSON, { nullable: true })
    metadata?: { [key: string]: string; };
    /**
     * Timestamp for when the order was created. In RFC 3339 format, e.g., \"2016-09-04T23:59:33.123Z\".
     * @type {string}
     * @memberof Order
     */
    
    @Field({ nullable: true })
    created_at?: string;
    /**
     * Timestamp for when the order was last updated. In RFC 3339 format, e.g., \"2016-09-04T23:59:33.123Z\".
     * @type {string}
     * @memberof Order
     */
    
    @Field({ nullable: true })
    updated_at?: string;
    /**
     * Timestamp for when the order reached a terminal [state](#property-state). In RFC 3339 format, e.g., \"2016-09-04T23:59:33.123Z\".
     * @type {string}
     * @memberof Order
     */
    
    @Field({ nullable: true })
    closed_at?: string;
    /**
     * The current state of the order. `OPEN`,`COMPLETED`,`CANCELED` See [OrderState](#type-orderstate) for possible values
     * @type {string}
     * @memberof Order
     */
    
    @Field({ nullable: true })
    state?: string;
    /**
     * Version number which is incremented each time an update is committed to the order. Orders that were not created through the API will not include a version and thus cannot be updated.  [Read more about working with versions](https://developer.squareup.com/docs/orders-api/manage-orders#update-orders).
     * @type {number}
     * @memberof Order
     */
    
    @Field({ nullable: true })
    version?: number;
    /**
     * 
     * @type {Money}
     * @memberof Order
     */
    
    @Field(() => Money, { nullable: true })
    total_money?: Money;
    /**
     * 
     * @type {Money}
     * @memberof Order
     */
    
    @Field(() => Money, { nullable: true })
    total_tax_money?: Money;
    /**
     * 
     * @type {Money}
     * @memberof Order
     */
    
    @Field(() => Money, { nullable: true })
    total_discount_money?: Money;
    /**
     * 
     * @type {Money}
     * @memberof Order
     */
    
    @Field(() => Money, { nullable: true })
    total_tip_money?: Money;
    /**
     * 
     * @type {Money}
     * @memberof Order
     */
    
    @Field(() => Money, { nullable: true })
    total_service_charge_money?: Money;
    /**
     * 
     * @type {OrderPricingOptions}
     * @memberof Order
     */
    
    @Field(() => OrderPricingOptions, { nullable: true })
    pricing_options?: OrderPricingOptions;
    /**
     * A set-like list of rewards that have been added to the order.
     * @type {Array<OrderReward>}
     * @memberof Order
     */
    
    @Field(() => [OrderReward], { nullable: true })
    rewards?: Array<OrderReward>;
}



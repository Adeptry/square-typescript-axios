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


import { V1Money } from './v1-money';

import { Field, ObjectType } from '@nestjs/graphql';
import GraphQLJSON from 'graphql-type-json';

/**
 * A tender represents a discrete monetary exchange. Square represents this exchange as a money object with a specific currency and amount, where the amount is given in the smallest denomination of the given currency.  Square POS can accept more than one form of tender for a single payment (such as by splitting a bill between a credit card and a gift card). The `tender` field of the Payment object lists all forms of tender used for the payment.  Split tender payments behave slightly differently from single tender payments:  The receipt_url for a split tender corresponds only to the first tender listed in the tender field. To get the receipt URLs for the remaining tenders, use the receipt_url fields of the corresponding Tender objects.  *A note on gift cards**: when a customer purchases a Square gift card from a merchant, the merchant receives the full amount of the gift card in the associated payment.  When that gift card is used as a tender, the balance of the gift card is reduced and the merchant receives no funds. A `Tender` object with a type of `SQUARE_GIFT_CARD` indicates a gift card was used for some or all of the associated payment.
 * @export
 * @class V1Tender
 */
@ObjectType()
export class V1Tender {
    /**
     * The tender\'s unique ID.
     * @type {string}
     * @memberof V1Tender
     */
    
    @Field({ nullable: true })
    id?: string;
    /**
     * The type of tender. See [V1TenderType](#type-v1tendertype) for possible values
     * @type {string}
     * @memberof V1Tender
     */
    
    @Field({ nullable: true })
    type?: string;
    /**
     * A human-readable description of the tender.
     * @type {string}
     * @memberof V1Tender
     */
    
    @Field({ nullable: true })
    name?: string;
    /**
     * The ID of the employee that processed the tender.
     * @type {string}
     * @memberof V1Tender
     */
    
    @Field({ nullable: true })
    employee_id?: string;
    /**
     * The URL of the receipt for the tender.
     * @type {string}
     * @memberof V1Tender
     */
    
    @Field({ nullable: true })
    receipt_url?: string;
    /**
     * The brand of credit card provided. See [V1TenderCardBrand](#type-v1tendercardbrand) for possible values
     * @type {string}
     * @memberof V1Tender
     */
    
    @Field({ nullable: true })
    card_brand?: string;
    /**
     * The last four digits of the provided credit card\'s account number.
     * @type {string}
     * @memberof V1Tender
     */
    
    @Field({ nullable: true })
    pan_suffix?: string;
    /**
     * The tender\'s unique ID. See [V1TenderEntryMethod](#type-v1tenderentrymethod) for possible values
     * @type {string}
     * @memberof V1Tender
     */
    
    @Field({ nullable: true })
    entry_method?: string;
    /**
     * Notes entered by the merchant about the tender at the time of payment, if any. Typically only present for tender with the type: OTHER.
     * @type {string}
     * @memberof V1Tender
     */
    
    @Field({ nullable: true })
    payment_note?: string;
    /**
     * 
     * @type {V1Money}
     * @memberof V1Tender
     */
    
    @Field(() => V1Money, { nullable: true })
    total_money?: V1Money;
    /**
     * 
     * @type {V1Money}
     * @memberof V1Tender
     */
    
    @Field(() => V1Money, { nullable: true })
    tendered_money?: V1Money;
    /**
     * The time when the tender was created, in ISO 8601 format.
     * @type {string}
     * @memberof V1Tender
     */
    
    @Field({ nullable: true })
    tendered_at?: string;
    /**
     * The time when the tender was settled, in ISO 8601 format.
     * @type {string}
     * @memberof V1Tender
     */
    
    @Field({ nullable: true })
    settled_at?: string;
    /**
     * 
     * @type {V1Money}
     * @memberof V1Tender
     */
    
    @Field(() => V1Money, { nullable: true })
    change_back_money?: V1Money;
    /**
     * 
     * @type {V1Money}
     * @memberof V1Tender
     */
    
    @Field(() => V1Money, { nullable: true })
    refunded_money?: V1Money;
    /**
     * Indicates whether or not the tender is associated with an exchange. If is_exchange is true, the tender represents the value of goods returned in an exchange not the actual money paid. The exchange value reduces the tender amounts needed to pay for items purchased in the exchange.
     * @type {boolean}
     * @memberof V1Tender
     */
    
    @Field({ nullable: true })
    is_exchange?: boolean;
}



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


import { Card } from './card';

import { Field, ObjectType } from '@nestjs/graphql';
import GraphQLJSON from 'graphql-type-json';

/**
 * Represents additional details of a tender with `type` `CARD` or `SQUARE_GIFT_CARD`
 * @export
 * @class TenderCardDetails
 */
@ObjectType()
export class TenderCardDetails {
    /**
     * The credit card payment\'s current state (such as `AUTHORIZED` or `CAPTURED`). See `TenderCardDetailsStatus` for possible values. See [TenderCardDetailsStatus](#type-tendercarddetailsstatus) for possible values
     * @type {string}
     * @memberof TenderCardDetails
     */
    
    @Field({ nullable: true })
    status?: string;
    /**
     * 
     * @type {Card}
     * @memberof TenderCardDetails
     */
    
    @Field(() => Card, { nullable: true })
    card?: Card;
    /**
     * The method used to enter the card\'s details for the transaction. See [TenderCardDetailsEntryMethod](#type-tendercarddetailsentrymethod) for possible values
     * @type {string}
     * @memberof TenderCardDetails
     */
    
    @Field({ nullable: true })
    entry_method?: string;
}



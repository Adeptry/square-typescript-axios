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



import { Field, ObjectType } from '@nestjs/graphql';
import GraphQLJSON from 'graphql-type-json';

/**
 * A request to redeem a loyalty reward.
 * @export
 * @class RedeemLoyaltyRewardRequest
 */
@ObjectType()
export class RedeemLoyaltyRewardRequest {
    /**
     * A unique string that identifies this `RedeemLoyaltyReward` request.  Keys can be any valid string, but must be unique for every request.
     * @type {string}
     * @memberof RedeemLoyaltyRewardRequest
     */
    
    @Field({ nullable: false })
    idempotency_key: string;
    /**
     * The ID of the `location` where the reward is redeemed.
     * @type {string}
     * @memberof RedeemLoyaltyRewardRequest
     */
    
    @Field({ nullable: false })
    location_id: string;
}



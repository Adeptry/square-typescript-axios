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


import { LoyaltyReward } from './loyalty-reward';

import { Field, ObjectType } from '@nestjs/graphql';

/**
 * A request to create a loyalty reward.
 * @export
 * @class CreateLoyaltyRewardRequest
 */
@ObjectType()
export class CreateLoyaltyRewardRequest {
    /**
     * 
     * @type {LoyaltyReward}
     * @memberof CreateLoyaltyRewardRequest
     */
    @Field(() => LoyaltyReward) 
    reward: LoyaltyReward;
    /**
     * A unique string that identifies this `CreateLoyaltyReward` request.  Keys can be any valid string, but must be unique for every request.
     * @type {string}
     * @memberof CreateLoyaltyRewardRequest
     */
    @Field() 
    idempotency_key: string;
}


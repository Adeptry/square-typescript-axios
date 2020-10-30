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
 * Provides metadata when the event `type` is `DELETE_REWARD`.
 * @export
 * @class LoyaltyEventDeleteReward
 */
@ObjectType()
export class LoyaltyEventDeleteReward {
    /**
     * The ID of the `loyalty program`.
     * @type {string}
     * @memberof LoyaltyEventDeleteReward
     */
    
    @Field({ nullable: false })
    loyalty_program_id: string;
    /**
     * The ID of the deleted `loyalty reward`. This field is returned only if the event source is `LOYALTY_API`.
     * @type {string}
     * @memberof LoyaltyEventDeleteReward
     */
    
    @Field({ nullable: true })
    reward_id?: string;
    /**
     * The number of points returned to the loyalty account.
     * @type {number}
     * @memberof LoyaltyEventDeleteReward
     */
    
    @Field({ nullable: false })
    points: number;
}



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


import { TimeRange } from './time-range';

import { Field, ObjectType } from '@nestjs/graphql';
import GraphQLJSON from 'graphql-type-json';

/**
 * Filter events by date time range.
 * @export
 * @class LoyaltyEventDateTimeFilter
 */
@ObjectType()
export class LoyaltyEventDateTimeFilter {
    /**
     * 
     * @type {TimeRange}
     * @memberof LoyaltyEventDateTimeFilter
     */
    
    @Field(() => TimeRange, { nullable: false })
    created_at: TimeRange;
}



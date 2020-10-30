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


import { LoyaltyEventDateTimeFilter } from './loyalty-event-date-time-filter';
import { LoyaltyEventLocationFilter } from './loyalty-event-location-filter';
import { LoyaltyEventLoyaltyAccountFilter } from './loyalty-event-loyalty-account-filter';
import { LoyaltyEventOrderFilter } from './loyalty-event-order-filter';
import { LoyaltyEventTypeFilter } from './loyalty-event-type-filter';

import { Field, ObjectType } from '@nestjs/graphql';
import GraphQLJSON from 'graphql-type-json';

/**
 * The filtering criteria. If the request specifies multiple filters,  the endpoint uses a logical AND to evaluate them.
 * @export
 * @class LoyaltyEventFilter
 */
@ObjectType()
export class LoyaltyEventFilter {
    /**
     * 
     * @type {LoyaltyEventLoyaltyAccountFilter}
     * @memberof LoyaltyEventFilter
     */
    
    @Field(() => LoyaltyEventLoyaltyAccountFilter, { nullable: true })
    loyalty_account_filter?: LoyaltyEventLoyaltyAccountFilter;
    /**
     * 
     * @type {LoyaltyEventTypeFilter}
     * @memberof LoyaltyEventFilter
     */
    
    @Field(() => LoyaltyEventTypeFilter, { nullable: true })
    type_filter?: LoyaltyEventTypeFilter;
    /**
     * 
     * @type {LoyaltyEventDateTimeFilter}
     * @memberof LoyaltyEventFilter
     */
    
    @Field(() => LoyaltyEventDateTimeFilter, { nullable: true })
    date_time_filter?: LoyaltyEventDateTimeFilter;
    /**
     * 
     * @type {LoyaltyEventLocationFilter}
     * @memberof LoyaltyEventFilter
     */
    
    @Field(() => LoyaltyEventLocationFilter, { nullable: true })
    location_filter?: LoyaltyEventLocationFilter;
    /**
     * 
     * @type {LoyaltyEventOrderFilter}
     * @memberof LoyaltyEventFilter
     */
    
    @Field(() => LoyaltyEventOrderFilter, { nullable: true })
    order_filter?: LoyaltyEventOrderFilter;
}



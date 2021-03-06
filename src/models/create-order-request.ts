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


import { Order } from './order';

import { Field, ObjectType } from '@nestjs/graphql';
import GraphQLJSON from 'graphql-type-json';

/**
 * 
 * @export
 * @class CreateOrderRequest
 */
@ObjectType()
export class CreateOrderRequest {
    /**
     * 
     * @type {Order}
     * @memberof CreateOrderRequest
     */
    
    @Field(() => Order, { nullable: true })
    order?: Order;
    /**
     * The ID of the business location to associate the order with.
     * @type {string}
     * @memberof CreateOrderRequest
     */
    
    @Field({ nullable: true })
    location_id?: string;
    /**
     * A value you specify that uniquely identifies this order among orders you\'ve created.  If you\'re unsure whether a particular order was created successfully, you can reattempt it with the same idempotency key without worrying about creating duplicate orders.  See [Idempotency](https://developer.squareup.com/docs/basics/api101/idempotency) for more information.
     * @type {string}
     * @memberof CreateOrderRequest
     */
    
    @Field({ nullable: true })
    idempotency_key?: string;
}



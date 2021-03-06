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


import { OrderFulfillmentUpdated } from './order-fulfillment-updated';

import { Field, ObjectType } from '@nestjs/graphql';
import GraphQLJSON from 'graphql-type-json';

/**
 * 
 * @export
 * @class OrderFulfillmentUpdatedObject
 */
@ObjectType()
export class OrderFulfillmentUpdatedObject {
    /**
     * 
     * @type {OrderFulfillmentUpdated}
     * @memberof OrderFulfillmentUpdatedObject
     */
    
    @Field(() => OrderFulfillmentUpdated, { nullable: true })
    order_fulfillment_updated?: OrderFulfillmentUpdated;
}



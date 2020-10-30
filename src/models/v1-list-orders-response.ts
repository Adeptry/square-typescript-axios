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


import { V1Order } from './v1-order';

import { Field, ObjectType } from '@nestjs/graphql';

/**
 * 
 * @export
 * @class V1ListOrdersResponse
 */
@ObjectType()
export class V1ListOrdersResponse {
    /**
     * 
     * @type {Array<V1Order>}
     * @memberof V1ListOrdersResponse
     */
    @Field(() => [V1Order]) 
    items?: Array<V1Order>;
}


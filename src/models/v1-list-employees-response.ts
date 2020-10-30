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


import { V1Employee } from './v1-employee';

import { Field, ObjectType } from '@nestjs/graphql';

/**
 * 
 * @export
 * @class V1ListEmployeesResponse
 */
@ObjectType()
export class V1ListEmployeesResponse {
    /**
     * 
     * @type {Array<V1Employee>}
     * @memberof V1ListEmployeesResponse
     */
    @Field(() => [V1Employee]) 
    items?: Array<V1Employee>;
}


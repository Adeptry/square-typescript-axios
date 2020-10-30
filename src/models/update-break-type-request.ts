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


import { BreakType } from './break-type';

import { Field, ObjectType } from '@nestjs/graphql';
import GraphQLJSON from 'graphql-type-json';

/**
 * A request to update a `BreakType`
 * @export
 * @class UpdateBreakTypeRequest
 */
@ObjectType()
export class UpdateBreakTypeRequest {
    /**
     * 
     * @type {BreakType}
     * @memberof UpdateBreakTypeRequest
     */
    
    @Field(() => BreakType, { nullable: false })
    break_type: BreakType;
}



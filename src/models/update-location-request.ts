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


import { Location } from './location';

import { Field, ObjectType } from '@nestjs/graphql';
import GraphQLJSON from 'graphql-type-json';

/**
 * Request object for the [UpdateLocation](#endpoint-updatelocation) endpoint.
 * @export
 * @class UpdateLocationRequest
 */
@ObjectType()
export class UpdateLocationRequest {
    /**
     * 
     * @type {Location}
     * @memberof UpdateLocationRequest
     */
    
    @Field(() => Location, { nullable: true })
    location?: Location;
}



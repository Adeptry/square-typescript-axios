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
 * 
 * @export
 * @class RetrieveInventoryCountRequest
 */
@ObjectType()
export class RetrieveInventoryCountRequest {
    /**
     * The `Location` IDs to look up as a comma-separated list. An empty list queries all locations.
     * @type {string}
     * @memberof RetrieveInventoryCountRequest
     */
    
    @Field({ nullable: true })
    location_ids?: string;
    /**
     * A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of results for the original query.  See the [Pagination](https://developer.squareup.com/docs/docs/working-with-apis/pagination) guide for more information.
     * @type {string}
     * @memberof RetrieveInventoryCountRequest
     */
    
    @Field({ nullable: true })
    cursor?: string;
}



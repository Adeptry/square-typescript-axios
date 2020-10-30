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

/**
 * A request for a filtered set of `BreakType` objects
 * @export
 * @class ListBreakTypesRequest
 */
@ObjectType()
export class ListBreakTypesRequest {
    /**
     * Filter Break Types returned to only those that are associated with the specified location.
     * @type {string}
     * @memberof ListBreakTypesRequest
     */
    @Field() 
    location_id?: string;
    /**
     * Maximum number of Break Types to return per page. Can range between 1 and 200. The default is the maximum at 200.
     * @type {number}
     * @memberof ListBreakTypesRequest
     */
    @Field() 
    limit?: number;
    /**
     * Pointer to the next page of Break Type results to fetch.
     * @type {string}
     * @memberof ListBreakTypesRequest
     */
    @Field() 
    cursor?: string;
}


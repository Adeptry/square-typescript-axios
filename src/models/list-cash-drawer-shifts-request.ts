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
 * @class ListCashDrawerShiftsRequest
 */
@ObjectType()
export class ListCashDrawerShiftsRequest {
    /**
     * The ID of the location to query for a list of cash drawer shifts.
     * @type {string}
     * @memberof ListCashDrawerShiftsRequest
     */
    
    @Field({ nullable: false })
    location_id: string;
    /**
     * The order in which cash drawer shifts are listed in the response, based on their opened_at field. Default value: ASC See [SortOrder](#type-sortorder) for possible values
     * @type {string}
     * @memberof ListCashDrawerShiftsRequest
     */
    
    @Field({ nullable: true })
    sort_order?: string;
    /**
     * The inclusive start time of the query on opened_at, in ISO 8601 format.
     * @type {string}
     * @memberof ListCashDrawerShiftsRequest
     */
    
    @Field({ nullable: true })
    begin_time?: string;
    /**
     * The exclusive end date of the query on opened_at, in ISO 8601 format.
     * @type {string}
     * @memberof ListCashDrawerShiftsRequest
     */
    
    @Field({ nullable: true })
    end_time?: string;
    /**
     * Number of cash drawer shift events in a page of results (200 by default, 1000 max).
     * @type {number}
     * @memberof ListCashDrawerShiftsRequest
     */
    
    @Field({ nullable: true })
    limit?: number;
    /**
     * Opaque cursor for fetching the next page of results.
     * @type {string}
     * @memberof ListCashDrawerShiftsRequest
     */
    
    @Field({ nullable: true })
    cursor?: string;
}



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
 * Represents a period of time during which a business location is open.
 * @export
 * @class BusinessHoursPeriod
 */
@ObjectType()
export class BusinessHoursPeriod {
    /**
     * The day of week for this time period. See [DayOfWeek](#type-dayofweek) for possible values
     * @type {string}
     * @memberof BusinessHoursPeriod
     */
    @Field() 
    day_of_week?: string;
    /**
     * The start time of a business hours period, specified in local time using partial-time RFC 3339 format.
     * @type {string}
     * @memberof BusinessHoursPeriod
     */
    @Field() 
    start_local_time?: string;
    /**
     * The end time of a business hours period, specified in local time using partial-time RFC 3339 format.
     * @type {string}
     * @memberof BusinessHoursPeriod
     */
    @Field() 
    end_local_time?: string;
}


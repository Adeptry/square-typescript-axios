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


import { Money } from './money';

import { Field, ObjectType } from '@nestjs/graphql';

/**
 * 
 * @export
 * @class CashDrawerShiftEvent
 */
@ObjectType()
export class CashDrawerShiftEvent {
    /**
     * The unique ID of the event.
     * @type {string}
     * @memberof CashDrawerShiftEvent
     */
    @Field() 
    id?: string;
    /**
     * The ID of the employee that created the event.
     * @type {string}
     * @memberof CashDrawerShiftEvent
     */
    @Field() 
    employee_id?: string;
    /**
     * The type of cash drawer shift event. See [CashDrawerEventType](#type-cashdrawereventtype) for possible values
     * @type {string}
     * @memberof CashDrawerShiftEvent
     */
    @Field() 
    event_type?: string;
    /**
     * 
     * @type {Money}
     * @memberof CashDrawerShiftEvent
     */
    @Field(() => Money) 
    event_money?: Money;
    /**
     * The event time in ISO 8601 format.
     * @type {string}
     * @memberof CashDrawerShiftEvent
     */
    @Field() 
    created_at?: string;
    /**
     * An optional description of the event, entered by the employee that created the event.
     * @type {string}
     * @memberof CashDrawerShiftEvent
     */
    @Field() 
    description?: string;
}


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


import { V1Money } from './v1-money';

import { Field, ObjectType } from '@nestjs/graphql';

/**
 * V1CreateRefundRequest
 * @export
 * @class V1CreateRefundRequest
 */
@ObjectType()
export class V1CreateRefundRequest {
    /**
     * The ID of the payment to refund. If you are creating a `PARTIAL` refund for a split tender payment, instead provide the id of the particular tender you want to refund.
     * @type {string}
     * @memberof V1CreateRefundRequest
     */
    @Field() 
    payment_id: string;
    /**
     * TThe type of refund (FULL or PARTIAL). See [V1CreateRefundRequestType](#type-v1createrefundrequesttype) for possible values
     * @type {string}
     * @memberof V1CreateRefundRequest
     */
    @Field() 
    type: string;
    /**
     * The reason for the refund.
     * @type {string}
     * @memberof V1CreateRefundRequest
     */
    @Field() 
    reason: string;
    /**
     * 
     * @type {V1Money}
     * @memberof V1CreateRefundRequest
     */
    @Field(() => V1Money) 
    refunded_money?: V1Money;
    /**
     * An optional key to ensure idempotence if you issue the same PARTIAL refund request more than once.
     * @type {string}
     * @memberof V1CreateRefundRequest
     */
    @Field() 
    request_idempotence_key?: string;
}


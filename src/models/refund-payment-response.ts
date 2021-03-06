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


import { PaymentRefund } from './payment-refund';

import { Field, ObjectType } from '@nestjs/graphql';
import GraphQLJSON from 'graphql-type-json';

/**
 * Defines the fields that are included in the response body of a request to the [RefundPayment](#endpoint-refunds-refundpayment) endpoint.  Note: if there are errors processing the request, the refund field may not be present, or it may be present in a FAILED state.
 * @export
 * @class RefundPaymentResponse
 */
@ObjectType()
export class RefundPaymentResponse {
    /**
     * Information on errors encountered during the request.
     * @type {Array<Error>}
     * @memberof RefundPaymentResponse
     */
    
    @Field(() => GraphQLJSON, { nullable: true })
    errors?: Array<Error>;
    /**
     * 
     * @type {PaymentRefund}
     * @memberof RefundPaymentResponse
     */
    
    @Field(() => PaymentRefund, { nullable: true })
    refund?: PaymentRefund;
}



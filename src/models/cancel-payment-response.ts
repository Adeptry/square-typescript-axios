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


import { Payment } from './payment';

import { Field, ObjectType } from '@nestjs/graphql';
import GraphQLJSON from 'graphql-type-json';

/**
 * The return value from the [CancelPayment](#endpoint-payments-cancelpayment) endpoint.
 * @export
 * @class CancelPaymentResponse
 */
@ObjectType()
export class CancelPaymentResponse {
    /**
     * Information about errors encountered during the request.
     * @type {Array<Error>}
     * @memberof CancelPaymentResponse
     */
    
    @Field(() => GraphQLJSON, { nullable: true })
    errors?: Array<Error>;
    /**
     * 
     * @type {Payment}
     * @memberof CancelPaymentResponse
     */
    
    @Field(() => Payment, { nullable: true })
    payment?: Payment;
}



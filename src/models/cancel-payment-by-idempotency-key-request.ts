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
 * Specifies the idempotency key of a payment to cancel.
 * @export
 * @class CancelPaymentByIdempotencyKeyRequest
 */
@ObjectType()
export class CancelPaymentByIdempotencyKeyRequest {
    /**
     * The `idempotency_key` identifying the payment to be canceled.
     * @type {string}
     * @memberof CancelPaymentByIdempotencyKeyRequest
     */
    
    @Field({ nullable: false })
    idempotency_key: string;
}



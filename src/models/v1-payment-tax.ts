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
 * V1PaymentTax
 * @export
 * @class V1PaymentTax
 */
@ObjectType()
export class V1PaymentTax {
    /**
     * Any errors that occurred during the request.
     * @type {Array<Error>}
     * @memberof V1PaymentTax
     */
    @Field() 
    errors?: Array<Error>;
    /**
     * The merchant-defined name of the tax.
     * @type {string}
     * @memberof V1PaymentTax
     */
    @Field() 
    name?: string;
    /**
     * 
     * @type {V1Money}
     * @memberof V1PaymentTax
     */
    @Field(() => V1Money) 
    applied_money?: V1Money;
    /**
     * The rate of the tax, as a string representation of a decimal number. A value of 0.07 corresponds to a rate of 7%.
     * @type {string}
     * @memberof V1PaymentTax
     */
    @Field() 
    rate?: string;
    /**
     * Whether the tax is an ADDITIVE tax or an INCLUSIVE tax. See [V1PaymentTaxInclusionType](#type-v1paymenttaxinclusiontype) for possible values
     * @type {string}
     * @memberof V1PaymentTax
     */
    @Field() 
    inclusion_type?: string;
    /**
     * The ID of the tax, if available. Taxes applied in older versions of Square Register might not have an ID.
     * @type {string}
     * @memberof V1PaymentTax
     */
    @Field() 
    fee_id?: string;
}


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
import GraphQLJSON from 'graphql-type-json';

/**
 * V1PaymentModifier
 * @export
 * @class V1PaymentModifier
 */
@ObjectType()
export class V1PaymentModifier {
    /**
     * The modifier option\'s name.
     * @type {string}
     * @memberof V1PaymentModifier
     */
    
    @Field({ nullable: true })
    name?: string;
    /**
     * 
     * @type {V1Money}
     * @memberof V1PaymentModifier
     */
    
    @Field(() => V1Money, { nullable: true })
    applied_money?: V1Money;
    /**
     * TThe ID of the applied modifier option, if available. Modifier options applied in older versions of Square Register might not have an ID.
     * @type {string}
     * @memberof V1PaymentModifier
     */
    
    @Field({ nullable: true })
    modifier_option_id?: string;
}



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
 * V1Fee
 * @export
 * @class V1Fee
 */
@ObjectType()
export class V1Fee {
    /**
     * The fee\'s unique ID.
     * @type {string}
     * @memberof V1Fee
     */
    
    @Field({ nullable: true })
    id?: string;
    /**
     * The fee\'s name.
     * @type {string}
     * @memberof V1Fee
     */
    
    @Field({ nullable: true })
    name?: string;
    /**
     * The rate of the fee, as a string representation of a decimal number. A value of 0.07 corresponds to a rate of 7%.
     * @type {string}
     * @memberof V1Fee
     */
    
    @Field({ nullable: true })
    rate?: string;
    /**
     * Forthcoming See [V1FeeCalculationPhase](#type-v1feecalculationphase) for possible values
     * @type {string}
     * @memberof V1Fee
     */
    
    @Field({ nullable: true })
    calculation_phase?: string;
    /**
     * The type of adjustment the fee applies to a payment. Currently, this value is TAX for all fees. See [V1FeeAdjustmentType](#type-v1feeadjustmenttype) for possible values
     * @type {string}
     * @memberof V1Fee
     */
    
    @Field({ nullable: true })
    adjustment_type?: string;
    /**
     * If true, the fee applies to custom amounts entered into Square Point of Sale that are not associated with a particular item.
     * @type {boolean}
     * @memberof V1Fee
     */
    
    @Field({ nullable: true })
    applies_to_custom_amounts?: boolean;
    /**
     * If true, the fee is applied to all appropriate items. If false, the fee is not applied at all.
     * @type {boolean}
     * @memberof V1Fee
     */
    
    @Field({ nullable: true })
    enabled?: boolean;
    /**
     * Whether the fee is ADDITIVE or INCLUSIVE. See [V1FeeInclusionType](#type-v1feeinclusiontype) for possible values
     * @type {string}
     * @memberof V1Fee
     */
    
    @Field({ nullable: true })
    inclusion_type?: string;
    /**
     * In countries with multiple classifications for sales taxes, indicates which classification the fee falls under. Currently relevant only to Canadian merchants. See [V1FeeType](#type-v1feetype) for possible values
     * @type {string}
     * @memberof V1Fee
     */
    
    @Field({ nullable: true })
    type?: string;
    /**
     * The ID of the CatalogObject in the Connect v2 API. Objects that are shared across multiple locations share the same v2 ID.
     * @type {string}
     * @memberof V1Fee
     */
    
    @Field({ nullable: true })
    v2_id?: string;
}



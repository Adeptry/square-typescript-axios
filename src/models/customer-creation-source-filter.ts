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
 * Creation source filter.  If one or more creation sources are set, customer profiles are included in, or excluded from, the result if they match at least one of the filter criteria.
 * @export
 * @class CustomerCreationSourceFilter
 */
@ObjectType()
export class CustomerCreationSourceFilter {
    /**
     * The list of creation sources used as filtering criteria. See [CustomerCreationSource](#type-customercreationsource) for possible values
     * @type {Array<string>}
     * @memberof CustomerCreationSourceFilter
     */
    
    @Field(() => GraphQLJSON, { nullable: true })
    values?: Array<string>;
    /**
     * Indicates whether a customer profile matching the filter criteria should be included in the result or excluded from the result.  Default: `INCLUDE`. See [CustomerInclusionExclusion](#type-customerinclusionexclusion) for possible values
     * @type {string}
     * @memberof CustomerCreationSourceFilter
     */
    
    @Field({ nullable: true })
    rule?: string;
}



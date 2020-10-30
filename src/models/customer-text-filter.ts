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
 * A filter to select customers based on exact or fuzzy matching of customer attributes against a specified query. Depending on customer attributes,  the filter can be case sensitive. This filter can be either exact or fuzzy. It cannot be both.
 * @export
 * @class CustomerTextFilter
 */
@ObjectType()
export class CustomerTextFilter {
    /**
     * Use the exact filter to select customers whose attributes match exactly the specified query.
     * @type {string}
     * @memberof CustomerTextFilter
     */
    
    @Field({ nullable: true })
    exact?: string;
    /**
     * Use the fuzzy filter to select customers whose attributes match the specified query  in a fuzzy manner. When the fuzzy option is used, search queries are tokenized, and then  each query token must be matched somewhere in the searched attribute. For single token queries,  this is effectively the same behavior as a partial match operation.
     * @type {string}
     * @memberof CustomerTextFilter
     */
    
    @Field({ nullable: true })
    fuzzy?: string;
}



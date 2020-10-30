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
 * The range of a number value between the specified lower and upper bounds.
 * @export
 * @class Range
 */
@ObjectType()
export class Range {
    /**
     * The lower bound of the number range.
     * @type {string}
     * @memberof Range
     */
    
    @Field({ nullable: true })
    min?: string;
    /**
     * The upper bound of the number range.
     * @type {string}
     * @memberof Range
     */
    
    @Field({ nullable: true })
    max?: string;
}



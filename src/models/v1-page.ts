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


import { V1PageCell } from './v1-page-cell';

import { Field, ObjectType } from '@nestjs/graphql';
import GraphQLJSON from 'graphql-type-json';

/**
 * V1Page
 * @export
 * @class V1Page
 */
@ObjectType()
export class V1Page {
    /**
     * The page\'s unique identifier.
     * @type {string}
     * @memberof V1Page
     */
    
    @Field({ nullable: true })
    id?: string;
    /**
     * The page\'s name, if any.
     * @type {string}
     * @memberof V1Page
     */
    
    @Field({ nullable: true })
    name?: string;
    /**
     * The page\'s position in the merchant\'s list of pages. Always an integer between 0 and 6, inclusive.
     * @type {number}
     * @memberof V1Page
     */
    
    @Field({ nullable: true })
    page_index?: number;
    /**
     * The cells included on the page.
     * @type {Array<V1PageCell>}
     * @memberof V1Page
     */
    
    @Field(() => [V1PageCell], { nullable: true })
    cells?: Array<V1PageCell>;
}



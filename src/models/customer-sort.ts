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
 * Specifies how searched customers profiles are sorted, including the sort key and sort order.
 * @export
 * @class CustomerSort
 */
@ObjectType()
export class CustomerSort {
    /**
     *  Use one or more customer attributes as the sort key to sort searched customer profiles.  For example, use creation date (`created_at`) of customers or default attributes as the sort key.   Default: `DEFAULT`. See [CustomerSortField](#type-customersortfield) for possible values
     * @type {string}
     * @memberof CustomerSort
     */
    
    @Field({ nullable: true })
    field?: string;
    /**
     * Indicates the order in which results should be sorted based on the sort field value. Strings use standard alphabetic comparison to determine order. Strings representing numbers are sorted as strings.  Default: `ASC`. See [SortOrder](#type-sortorder) for possible values
     * @type {string}
     * @memberof CustomerSort
     */
    
    @Field({ nullable: true })
    order?: string;
}



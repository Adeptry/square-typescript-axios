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
 * The query expression to specify the key to sort search results.
 * @export
 * @class CatalogQuerySortedAttribute
 */
@ObjectType()
export class CatalogQuerySortedAttribute {
    /**
     * The attribute whose value is used as the sort key.
     * @type {string}
     * @memberof CatalogQuerySortedAttribute
     */
    
    @Field({ nullable: false })
    attribute_name: string;
    /**
     * The first attribute value to be returned by the query. Ascending sorts will return only objects with this value or greater, while descending sorts will return only objects with this value or less. If unset, start at the beginning (for ascending sorts) or end (for descending sorts).
     * @type {string}
     * @memberof CatalogQuerySortedAttribute
     */
    
    @Field({ nullable: true })
    initial_attribute_value?: string;
    /**
     * The desired sort order, `\"ASC\"` (ascending) or `\"DESC\"` (descending). See [SortOrder](#type-sortorder) for possible values
     * @type {string}
     * @memberof CatalogQuerySortedAttribute
     */
    
    @Field({ nullable: true })
    sort_order?: string;
}



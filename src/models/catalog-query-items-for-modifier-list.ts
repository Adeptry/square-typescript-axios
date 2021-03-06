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
 * The query filter to return the items containing the specified modifier list IDs.
 * @export
 * @class CatalogQueryItemsForModifierList
 */
@ObjectType()
export class CatalogQueryItemsForModifierList {
    /**
     * A set of `CatalogModifierList` IDs to be used to find associated `CatalogItem`s.
     * @type {Array<string>}
     * @memberof CatalogQueryItemsForModifierList
     */
    
    @Field(() => GraphQLJSON, { nullable: false })
    modifier_list_ids: Array<string>;
}



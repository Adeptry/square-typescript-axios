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
 * The query filter to return the item variations containing the specified item option value IDs.
 * @export
 * @class CatalogQueryItemVariationsForItemOptionValues
 */
@ObjectType()
export class CatalogQueryItemVariationsForItemOptionValues {
    /**
     * A set of `CatalogItemOptionValue` IDs to be used to find associated `CatalogItemVariation`s. All ItemVariations that contain all of the given Item Option Values (in any order) will be returned.
     * @type {Array<string>}
     * @memberof CatalogQueryItemVariationsForItemOptionValues
     */
    
    @Field(() => GraphQLJSON, { nullable: true })
    item_option_value_ids?: Array<string>;
}



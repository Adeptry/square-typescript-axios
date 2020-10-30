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


import { CatalogObject } from './catalog-object';

import { Field, ObjectType } from '@nestjs/graphql';
import GraphQLJSON from 'graphql-type-json';

/**
 * A batch of catalog objects.
 * @export
 * @class CatalogObjectBatch
 */
@ObjectType()
export class CatalogObjectBatch {
    /**
     * A list of CatalogObjects belonging to this batch.
     * @type {Array<CatalogObject>}
     * @memberof CatalogObjectBatch
     */
    
    @Field(() => [CatalogObject], { nullable: false })
    objects: Array<CatalogObject>;
}



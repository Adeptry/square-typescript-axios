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
 * 
 * @export
 * @class DeleteCatalogObjectResponse
 */
@ObjectType()
export class DeleteCatalogObjectResponse {
    /**
     * Any errors that occurred during the request.
     * @type {Array<Error>}
     * @memberof DeleteCatalogObjectResponse
     */
    
    @Field(() => GraphQLJSON, { nullable: true })
    errors?: Array<Error>;
    /**
     * The IDs of all catalog objects deleted by this request. Multiple IDs may be returned when associated objects are also deleted, for example a catalog item variation will be deleted (and its ID included in this field) when its parent catalog item is deleted.
     * @type {Array<string>}
     * @memberof DeleteCatalogObjectResponse
     */
    
    @Field(() => GraphQLJSON, { nullable: true })
    deleted_object_ids?: Array<string>;
    /**
     * The database [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates) of this deletion in RFC 3339 format, e.g., `2016-09-04T23:59:33.123Z`.
     * @type {string}
     * @memberof DeleteCatalogObjectResponse
     */
    
    @Field({ nullable: true })
    deleted_at?: string;
}



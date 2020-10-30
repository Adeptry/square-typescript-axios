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
 * @class BatchDeleteCatalogObjectsResponse
 */
@ObjectType()
export class BatchDeleteCatalogObjectsResponse {
    /**
     * Any errors that occurred during the request.
     * @type {Array<Error>}
     * @memberof BatchDeleteCatalogObjectsResponse
     */
    
    @Field(() => GraphQLJSON, { nullable: true })
    errors?: Array<Error>;
    /**
     * The IDs of all CatalogObjects deleted by this request.
     * @type {Array<string>}
     * @memberof BatchDeleteCatalogObjectsResponse
     */
    
    @Field(() => GraphQLJSON, { nullable: true })
    deleted_object_ids?: Array<string>;
    /**
     * The database [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates) of this deletion in RFC 3339 format, e.g., \"2016-09-04T23:59:33.123Z\".
     * @type {string}
     * @memberof BatchDeleteCatalogObjectsResponse
     */
    
    @Field({ nullable: true })
    deleted_at?: string;
}



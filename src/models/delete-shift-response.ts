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
 * The response to a request to delete a `Shift`. May contain a set of  `Error` objects if the request resulted in errors.
 * @export
 * @class DeleteShiftResponse
 */
@ObjectType()
export class DeleteShiftResponse {
    /**
     * Any errors that occurred during the request.
     * @type {Array<Error>}
     * @memberof DeleteShiftResponse
     */
    
    @Field(() => GraphQLJSON, { nullable: true })
    errors?: Array<Error>;
}



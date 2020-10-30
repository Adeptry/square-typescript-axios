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


import { LoyaltyProgram } from './loyalty-program';

import { Field, ObjectType } from '@nestjs/graphql';

/**
 * A response that contains all loyalty programs.
 * @export
 * @class ListLoyaltyProgramsResponse
 */
@ObjectType()
export class ListLoyaltyProgramsResponse {
    /**
     * Any errors that occurred during the request.
     * @type {Array<Error>}
     * @memberof ListLoyaltyProgramsResponse
     */
    @Field() 
    errors?: Array<Error>;
    /**
     * A list of `LoyaltyProgram` for the merchant.
     * @type {Array<LoyaltyProgram>}
     * @memberof ListLoyaltyProgramsResponse
     */
    @Field(() => [LoyaltyProgram]) 
    programs?: Array<LoyaltyProgram>;
}


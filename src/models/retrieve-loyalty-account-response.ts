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


import { LoyaltyAccount } from './loyalty-account';

import { Field, ObjectType } from '@nestjs/graphql';

/**
 * A response that includes the loyalty account.
 * @export
 * @class RetrieveLoyaltyAccountResponse
 */
@ObjectType()
export class RetrieveLoyaltyAccountResponse {
    /**
     * Any errors that occurred during the request.
     * @type {Array<Error>}
     * @memberof RetrieveLoyaltyAccountResponse
     */
    @Field() 
    errors?: Array<Error>;
    /**
     * 
     * @type {LoyaltyAccount}
     * @memberof RetrieveLoyaltyAccountResponse
     */
    @Field(() => LoyaltyAccount) 
    loyalty_account?: LoyaltyAccount;
}


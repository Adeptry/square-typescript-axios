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


import { Dispute } from './dispute';

import { Field, ObjectType } from '@nestjs/graphql';
import GraphQLJSON from 'graphql-type-json';

/**
 * Defines fields in a RetrieveDispute response.
 * @export
 * @class RetrieveDisputeResponse
 */
@ObjectType()
export class RetrieveDisputeResponse {
    /**
     * Information on errors encountered during the request.
     * @type {Array<Error>}
     * @memberof RetrieveDisputeResponse
     */
    
    @Field(() => GraphQLJSON, { nullable: true })
    errors?: Array<Error>;
    /**
     * 
     * @type {Dispute}
     * @memberof RetrieveDisputeResponse
     */
    
    @Field(() => Dispute, { nullable: true })
    dispute?: Dispute;
}



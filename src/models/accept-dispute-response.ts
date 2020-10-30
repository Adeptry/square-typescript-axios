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
 * Defines fields in a AcceptDispute response.
 * @export
 * @class AcceptDisputeResponse
 */
@ObjectType()
export class AcceptDisputeResponse {
    /**
     * Information on errors encountered during the request.
     * @type {Array<Error>}
     * @memberof AcceptDisputeResponse
     */
    
    @Field(() => GraphQLJSON, { nullable: true })
    errors?: Array<Error>;
    /**
     * 
     * @type {Dispute}
     * @memberof AcceptDisputeResponse
     */
    
    @Field(() => Dispute, { nullable: true })
    dispute?: Dispute;
}



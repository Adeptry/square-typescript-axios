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


import { DisputeEvidence } from './dispute-evidence';

import { Field, ObjectType } from '@nestjs/graphql';
import GraphQLJSON from 'graphql-type-json';

/**
 * Defines fields in a RetrieveDisputeEvidence response.
 * @export
 * @class RetrieveDisputeEvidenceResponse
 */
@ObjectType()
export class RetrieveDisputeEvidenceResponse {
    /**
     * Any errors that occurred during the request.
     * @type {Array<Error>}
     * @memberof RetrieveDisputeEvidenceResponse
     */
    
    @Field(() => GraphQLJSON, { nullable: true })
    errors?: Array<Error>;
    /**
     * 
     * @type {DisputeEvidence}
     * @memberof RetrieveDisputeEvidenceResponse
     */
    
    @Field(() => DisputeEvidence, { nullable: true })
    evidence?: DisputeEvidence;
}



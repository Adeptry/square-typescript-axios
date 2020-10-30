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
 * @class DisputeEvidence
 */
@ObjectType()
export class DisputeEvidence {
    /**
     * The Square-generated ID of the evidence.
     * @type {string}
     * @memberof DisputeEvidence
     */
    
    @Field({ nullable: true })
    evidence_id?: string;
    /**
     * The ID of the dispute the evidence is associated with.
     * @type {string}
     * @memberof DisputeEvidence
     */
    
    @Field({ nullable: true })
    dispute_id?: string;
    /**
     * The time when the next action is due, in RFC 3339 format.
     * @type {string}
     * @memberof DisputeEvidence
     */
    
    @Field({ nullable: true })
    uploaded_at?: string;
    /**
     * The type of the evidence. See [DisputeEvidenceType](#type-disputeevidencetype) for possible values
     * @type {string}
     * @memberof DisputeEvidence
     */
    
    @Field({ nullable: true })
    evidence_type?: string;
}



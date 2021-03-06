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
 * V1OrderHistoryEntry
 * @export
 * @class V1OrderHistoryEntry
 */
@ObjectType()
export class V1OrderHistoryEntry {
    /**
     * The type of action performed on the order. See [V1OrderHistoryEntryAction](#type-v1orderhistoryentryaction) for possible values
     * @type {string}
     * @memberof V1OrderHistoryEntry
     */
    
    @Field({ nullable: true })
    action?: string;
    /**
     * The time when the action was performed, in ISO 8601 format.
     * @type {string}
     * @memberof V1OrderHistoryEntry
     */
    
    @Field({ nullable: true })
    created_at?: string;
}



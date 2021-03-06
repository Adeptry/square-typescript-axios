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


import { TerminalRefundQuery } from './terminal-refund-query';

import { Field, ObjectType } from '@nestjs/graphql';
import GraphQLJSON from 'graphql-type-json';

/**
 * 
 * @export
 * @class SearchTerminalRefundsRequest
 */
@ObjectType()
export class SearchTerminalRefundsRequest {
    /**
     * 
     * @type {TerminalRefundQuery}
     * @memberof SearchTerminalRefundsRequest
     */
    
    @Field(() => TerminalRefundQuery, { nullable: true })
    query?: TerminalRefundQuery;
    /**
     * A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of results for the original query.
     * @type {string}
     * @memberof SearchTerminalRefundsRequest
     */
    
    @Field({ nullable: true })
    cursor?: string;
    /**
     * Limit the number of results returned for a single request.
     * @type {number}
     * @memberof SearchTerminalRefundsRequest
     */
    
    @Field({ nullable: true })
    limit?: number;
}



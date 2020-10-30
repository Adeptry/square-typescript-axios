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
 * Defines parameters in a  [ListSubscriptionEvents](#endpoint-subscriptions-listsubscriptionevents) endpoint request.
 * @export
 * @class ListSubscriptionEventsRequest
 */
@ObjectType()
export class ListSubscriptionEventsRequest {
    /**
     * A pagination cursor returned by a previous call to this endpoint. Provide this to retrieve the next set of results for the original query.  For more information, see [Pagination](https://developer.squareup.com/docs/docs/working-with-apis/pagination).
     * @type {string}
     * @memberof ListSubscriptionEventsRequest
     */
    
    @Field({ nullable: true })
    cursor?: string;
    /**
     * The upper limit on the number of subscription events to return  in the response.   Default: `200`
     * @type {number}
     * @memberof ListSubscriptionEventsRequest
     */
    
    @Field({ nullable: true })
    limit?: number;
}



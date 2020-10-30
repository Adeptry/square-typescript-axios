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


import { SubscriptionEvent } from './subscription-event';

import { Field, ObjectType } from '@nestjs/graphql';

/**
 * Defines the fields that are included in the response from the [ListSubscriptionEvents](#endpoint-subscriptions-listsubscriptionevents) endpoint.
 * @export
 * @class ListSubscriptionEventsResponse
 */
@ObjectType()
export class ListSubscriptionEventsResponse {
    /**
     * Information about errors encountered during the request.
     * @type {Array<Error>}
     * @memberof ListSubscriptionEventsResponse
     */
    @Field() 
    errors?: Array<Error>;
    /**
     * The `SubscriptionEvents` retrieved.
     * @type {Array<SubscriptionEvent>}
     * @memberof ListSubscriptionEventsResponse
     */
    @Field(() => [SubscriptionEvent]) 
    subscription_events?: Array<SubscriptionEvent>;
    /**
     * When a response is truncated, it includes a cursor that you can  use in a subsequent request to fetch the next set of events.  If empty, this is the final response.  For more information, see [Pagination](https://developer.squareup.com/docs/docs/working-with-apis/pagination).
     * @type {string}
     * @memberof ListSubscriptionEventsResponse
     */
    @Field() 
    cursor?: string;
}


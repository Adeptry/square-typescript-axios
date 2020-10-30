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


import { Subscription } from './subscription';

import { Field, ObjectType } from '@nestjs/graphql';
import GraphQLJSON from 'graphql-type-json';

/**
 * Defines the fields that are included in the response from the [CreateSubscription](#endpoint-subscriptions-createsubscription) endpoint.
 * @export
 * @class CreateSubscriptionResponse
 */
@ObjectType()
export class CreateSubscriptionResponse {
    /**
     * Information about errors encountered during the request.
     * @type {Array<Error>}
     * @memberof CreateSubscriptionResponse
     */
    
    @Field(() => GraphQLJSON, { nullable: true })
    errors?: Array<Error>;
    /**
     * 
     * @type {Subscription}
     * @memberof CreateSubscriptionResponse
     */
    
    @Field(() => Subscription, { nullable: true })
    subscription?: Subscription;
}



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
 * Defines parameters in a [UpdateSubscription](#endpoint-subscriptions-updatesubscription) endpoint  request.
 * @export
 * @class UpdateSubscriptionRequest
 */
@ObjectType()
export class UpdateSubscriptionRequest {
    /**
     * 
     * @type {Subscription}
     * @memberof UpdateSubscriptionRequest
     */
    
    @Field(() => Subscription, { nullable: true })
    subscription?: Subscription;
}



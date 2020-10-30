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
 * @class RenewTokenResponse
 */
@ObjectType()
export class RenewTokenResponse {
    /**
     * The renewed access token. This value might be different from the `access_token` you provided in your request. You provide this token in a header with every request to Connect API endpoints. See [Request and response headers](https://developer.squareup.com/docs/api/connect/v2/#requestandresponseheaders) for the format of this header.
     * @type {string}
     * @memberof RenewTokenResponse
     */
    
    @Field({ nullable: true })
    access_token?: string;
    /**
     * This value is always _bearer_.
     * @type {string}
     * @memberof RenewTokenResponse
     */
    
    @Field({ nullable: true })
    token_type?: string;
    /**
     * The date when access_token expires, in [ISO 8601](http://www.iso.org/iso/home/standards/iso8601.htm) format.
     * @type {string}
     * @memberof RenewTokenResponse
     */
    
    @Field({ nullable: true })
    expires_at?: string;
    /**
     * The ID of the authorizing merchant\'s business.
     * @type {string}
     * @memberof RenewTokenResponse
     */
    
    @Field({ nullable: true })
    merchant_id?: string;
    /**
     * __LEGACY FIELD__. The ID of the merchant subscription associated with the authorization. Only present if the merchant signed up for a subscription during authorization..
     * @type {string}
     * @memberof RenewTokenResponse
     */
    
    @Field({ nullable: true })
    subscription_id?: string;
    /**
     * __LEGACY FIELD__. The ID of the subscription plan the merchant signed up for. Only present if the merchant signed up for a subscription during authorization.
     * @type {string}
     * @memberof RenewTokenResponse
     */
    
    @Field({ nullable: true })
    plan_id?: string;
}



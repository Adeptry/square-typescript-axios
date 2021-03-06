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


import { Address } from './address';
import { Card } from './card';
import { CustomerGroupInfo } from './customer-group-info';
import { CustomerPreferences } from './customer-preferences';

import { Field, ObjectType } from '@nestjs/graphql';
import GraphQLJSON from 'graphql-type-json';

/**
 * Represents a Square customer profile, which can have one or more cards on file associated with it.
 * @export
 * @class Customer
 */
@ObjectType()
export class Customer {
    /**
     * A unique Square-assigned ID for the customer profile.
     * @type {string}
     * @memberof Customer
     */
    
    @Field({ nullable: true })
    id?: string;
    /**
     * The timestamp when the customer profile was created, in RFC 3339 format.
     * @type {string}
     * @memberof Customer
     */
    
    @Field({ nullable: true })
    created_at?: string;
    /**
     * The timestamp when the customer profile was last updated, in RFC 3339 format.
     * @type {string}
     * @memberof Customer
     */
    
    @Field({ nullable: true })
    updated_at?: string;
    /**
     * Payment details of cards stored on file for the customer profile.
     * @type {Array<Card>}
     * @memberof Customer
     */
    
    @Field(() => [Card], { nullable: true })
    cards?: Array<Card>;
    /**
     * The given (i.e., first) name associated with the customer profile.
     * @type {string}
     * @memberof Customer
     */
    
    @Field({ nullable: true })
    given_name?: string;
    /**
     * The family (i.e., last) name associated with the customer profile.
     * @type {string}
     * @memberof Customer
     */
    
    @Field({ nullable: true })
    family_name?: string;
    /**
     * A nickname for the customer profile.
     * @type {string}
     * @memberof Customer
     */
    
    @Field({ nullable: true })
    nickname?: string;
    /**
     * A business name associated with the customer profile.
     * @type {string}
     * @memberof Customer
     */
    
    @Field({ nullable: true })
    company_name?: string;
    /**
     * The email address associated with the customer profile.
     * @type {string}
     * @memberof Customer
     */
    
    @Field({ nullable: true })
    email_address?: string;
    /**
     * 
     * @type {Address}
     * @memberof Customer
     */
    
    @Field(() => Address, { nullable: true })
    address?: Address;
    /**
     * The 11-digit phone number associated with the customer profile.
     * @type {string}
     * @memberof Customer
     */
    
    @Field({ nullable: true })
    phone_number?: string;
    /**
     * The birthday associated with the customer profile, in RFC 3339 format. Year is optional, timezone and times are not allowed. For example: `0000-09-01T00:00:00-00:00` indicates a birthday on September 1st. `1998-09-01T00:00:00-00:00` indications a birthday on September 1st __1998__.
     * @type {string}
     * @memberof Customer
     */
    
    @Field({ nullable: true })
    birthday?: string;
    /**
     * An optional, second ID used to associate the customer profile with an entity in another system.
     * @type {string}
     * @memberof Customer
     */
    
    @Field({ nullable: true })
    reference_id?: string;
    /**
     * A custom note associated with the customer profile.
     * @type {string}
     * @memberof Customer
     */
    
    @Field({ nullable: true })
    note?: string;
    /**
     * 
     * @type {CustomerPreferences}
     * @memberof Customer
     */
    
    @Field(() => CustomerPreferences, { nullable: true })
    preferences?: CustomerPreferences;
    /**
     * The customer groups and segments the customer belongs to. This deprecated field has been replaced with  the dedicated `group_ids` for customer groups and the dedicated `segment_ids` field for customer segments. You can retrieve information about a given customer group and segment respectively using the Customer Groups API and Customer Segments API.
     * @type {Array<CustomerGroupInfo>}
     * @memberof Customer
     */
    
    @Field(() => [CustomerGroupInfo], { nullable: true })
    groups?: Array<CustomerGroupInfo>;
    /**
     * A creation source represents the method used to create the customer profile. See [CustomerCreationSource](#type-customercreationsource) for possible values
     * @type {string}
     * @memberof Customer
     */
    
    @Field({ nullable: true })
    creation_source?: string;
    /**
     * The IDs of customer groups the customer belongs to.
     * @type {Array<string>}
     * @memberof Customer
     */
    
    @Field(() => GraphQLJSON, { nullable: true })
    group_ids?: Array<string>;
    /**
     * The IDs of segments the customer belongs to.
     * @type {Array<string>}
     * @memberof Customer
     */
    
    @Field(() => GraphQLJSON, { nullable: true })
    segment_ids?: Array<string>;
}



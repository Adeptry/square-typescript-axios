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
 * V1BankAccount
 * @export
 * @class V1BankAccount
 */
@ObjectType()
export class V1BankAccount {
    /**
     * The bank account\'s Square-issued ID.
     * @type {string}
     * @memberof V1BankAccount
     */
    
    @Field({ nullable: true })
    id?: string;
    /**
     * The Square-issued ID of the merchant associated with the bank account.
     * @type {string}
     * @memberof V1BankAccount
     */
    
    @Field({ nullable: true })
    merchant_id?: string;
    /**
     * The name of the bank that manages the account.
     * @type {string}
     * @memberof V1BankAccount
     */
    
    @Field({ nullable: true })
    bank_name?: string;
    /**
     * The name associated with the bank account.
     * @type {string}
     * @memberof V1BankAccount
     */
    
    @Field({ nullable: true })
    name?: string;
    /**
     * The bank account\'s routing number.
     * @type {string}
     * @memberof V1BankAccount
     */
    
    @Field({ nullable: true })
    routing_number?: string;
    /**
     * The last few digits of the bank account number.
     * @type {string}
     * @memberof V1BankAccount
     */
    
    @Field({ nullable: true })
    account_number_suffix?: string;
    /**
     * The currency code of the currency associated with the bank account, in ISO 4217 format. For example, the currency code for US dollars is USD.
     * @type {string}
     * @memberof V1BankAccount
     */
    
    @Field({ nullable: true })
    currency_code?: string;
    /**
     * The bank account\'s type (for example, savings or checking). See [V1BankAccountType](#type-v1bankaccounttype) for possible values
     * @type {string}
     * @memberof V1BankAccount
     */
    
    @Field({ nullable: true })
    type?: string;
}



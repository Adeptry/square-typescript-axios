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

/**
 * Represents a Square seller.
 * @export
 * @class Merchant
 */
@ObjectType()
export class Merchant {
    /**
     * The Square-issued ID of the merchant.
     * @type {string}
     * @memberof Merchant
     */
    @Field() 
    id?: string;
    /**
     * The business name of the merchant.
     * @type {string}
     * @memberof Merchant
     */
    @Field() 
    business_name?: string;
    /**
     * The country code associated with the merchant account, in ISO 3166 format. See [Country](#type-country) for possible values
     * @type {string}
     * @memberof Merchant
     */
    @Field() 
    country: string;
    /**
     * The language code associated with the merchant account, in BCP 47 format.
     * @type {string}
     * @memberof Merchant
     */
    @Field() 
    language_code?: string;
    /**
     * The currency associated with the merchant account, in ISO 4217 format. See [Currency](#type-currency) for possible values
     * @type {string}
     * @memberof Merchant
     */
    @Field() 
    currency?: string;
    /**
     * The merchant status, active or inactive. See [MerchantStatus](#type-merchantstatus) for possible values
     * @type {string}
     * @memberof Merchant
     */
    @Field() 
    status?: string;
    /**
     * The ID of the main `Location` for this merchant.
     * @type {string}
     * @memberof Merchant
     */
    @Field() 
    main_location_id?: string;
}


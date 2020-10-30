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
 * An employee object that is used by the external API.
 * @export
 * @class Employee
 */
@ObjectType()
export class Employee {
    /**
     * UUID for this object.
     * @type {string}
     * @memberof Employee
     */
    @Field() 
    id?: string;
    /**
     * The employee\'s first name.
     * @type {string}
     * @memberof Employee
     */
    @Field() 
    first_name?: string;
    /**
     * The employee\'s last name.
     * @type {string}
     * @memberof Employee
     */
    @Field() 
    last_name?: string;
    /**
     * The employee\'s email address
     * @type {string}
     * @memberof Employee
     */
    @Field() 
    email?: string;
    /**
     * The employee\'s phone number in E.164 format, i.e. \"+12125554250\"
     * @type {string}
     * @memberof Employee
     */
    @Field() 
    phone_number?: string;
    /**
     * A list of location IDs where this employee has access to.
     * @type {Array<string>}
     * @memberof Employee
     */
    @Field() 
    location_ids?: Array<string>;
    /**
     * Specifies the status of the employees being fetched. See [EmployeeStatus](#type-employeestatus) for possible values
     * @type {string}
     * @memberof Employee
     */
    @Field() 
    status?: string;
    /**
     * Whether this employee is the owner of the merchant. Each merchant has one owner employee, and that employee has full authority over the account.
     * @type {boolean}
     * @memberof Employee
     */
    @Field() 
    is_owner?: boolean;
    /**
     * A read-only timestamp in RFC 3339 format.
     * @type {string}
     * @memberof Employee
     */
    @Field() 
    created_at?: string;
    /**
     * A read-only timestamp in RFC 3339 format.
     * @type {string}
     * @memberof Employee
     */
    @Field() 
    updated_at?: string;
}


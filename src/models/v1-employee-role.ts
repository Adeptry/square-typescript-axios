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
 * V1EmployeeRole
 * @export
 * @class V1EmployeeRole
 */
@ObjectType()
export class V1EmployeeRole {
    /**
     * The role\'s unique ID, Can only be set by Square.
     * @type {string}
     * @memberof V1EmployeeRole
     */
    
    @Field({ nullable: true })
    id?: string;
    /**
     * The role\'s merchant-defined name.
     * @type {string}
     * @memberof V1EmployeeRole
     */
    
    @Field({ nullable: false })
    name: string;
    /**
     * The role\'s permissions. See [V1EmployeeRolePermissions](#type-v1employeerolepermissions) for possible values
     * @type {Array<string>}
     * @memberof V1EmployeeRole
     */
    
    @Field(() => GraphQLJSON, { nullable: false })
    permissions: Array<string>;
    /**
     * If true, employees with this role have all permissions, regardless of the values indicated in permissions.
     * @type {boolean}
     * @memberof V1EmployeeRole
     */
    
    @Field({ nullable: true })
    is_owner?: boolean;
    /**
     * The time when the employee entity was created, in ISO 8601 format. Is set by Square when the Role is created.
     * @type {string}
     * @memberof V1EmployeeRole
     */
    
    @Field({ nullable: true })
    created_at?: string;
    /**
     * The time when the employee entity was most recently updated, in ISO 8601 format. Is set by Square when the Role updated.
     * @type {string}
     * @memberof V1EmployeeRole
     */
    
    @Field({ nullable: true })
    updated_at?: string;
}



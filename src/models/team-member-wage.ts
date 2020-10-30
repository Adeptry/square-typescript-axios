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


import { Money } from './money';

import { Field, ObjectType } from '@nestjs/graphql';
import GraphQLJSON from 'graphql-type-json';

/**
 * The hourly wage rate that a team member will earn on a `Shift` for doing the job specified by the `title` property of this object.
 * @export
 * @class TeamMemberWage
 */
@ObjectType()
export class TeamMemberWage {
    /**
     * UUID for this object.
     * @type {string}
     * @memberof TeamMemberWage
     */
    
    @Field({ nullable: true })
    id?: string;
    /**
     * The `Team Member` that this wage is assigned to.
     * @type {string}
     * @memberof TeamMemberWage
     */
    
    @Field({ nullable: true })
    team_member_id?: string;
    /**
     * The job title that this wage relates to.
     * @type {string}
     * @memberof TeamMemberWage
     */
    
    @Field({ nullable: true })
    title?: string;
    /**
     * 
     * @type {Money}
     * @memberof TeamMemberWage
     */
    
    @Field(() => Money, { nullable: true })
    hourly_rate?: Money;
}



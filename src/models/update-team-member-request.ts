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


import { TeamMember } from './team-member';

import { Field, ObjectType } from '@nestjs/graphql';
import GraphQLJSON from 'graphql-type-json';

/**
 * Represents an update request for a `TeamMember` object.
 * @export
 * @class UpdateTeamMemberRequest
 */
@ObjectType()
export class UpdateTeamMemberRequest {
    /**
     * 
     * @type {TeamMember}
     * @memberof UpdateTeamMemberRequest
     */
    
    @Field(() => TeamMember, { nullable: true })
    team_member?: TeamMember;
}



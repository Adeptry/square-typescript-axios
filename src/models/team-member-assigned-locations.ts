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
 * An object that represents a team member\'s assignment to locations.
 * @export
 * @class TeamMemberAssignedLocations
 */
@ObjectType()
export class TeamMemberAssignedLocations {
    /**
     * The current assignment type of the team member. See [TeamMemberAssignedLocationsAssignmentType](#type-teammemberassignedlocationsassignmenttype) for possible values
     * @type {string}
     * @memberof TeamMemberAssignedLocations
     */
    
    @Field({ nullable: true })
    assignment_type?: string;
    /**
     * The locations that the team member is assigned to.
     * @type {Array<string>}
     * @memberof TeamMemberAssignedLocations
     */
    
    @Field(() => GraphQLJSON, { nullable: true })
    location_ids?: Array<string>;
}



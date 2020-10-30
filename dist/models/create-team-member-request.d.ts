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
/**
 * Represents a create request for a `TeamMember` object.
 * @export
 * @class CreateTeamMemberRequest
 */
export declare class CreateTeamMemberRequest {
    /**
     * A unique string that identifies this CreateTeamMember request. Keys can be any valid string but must be unique for every request. See [Idempotency keys](https://developer.squareup.com/docs/basics/api101/idempotency) for more information. <br> <b>Min Length 1    Max Length 45</b>
     * @type {string}
     * @memberof CreateTeamMemberRequest
     */
    idempotency_key?: string;
    /**
     *
     * @type {TeamMember}
     * @memberof CreateTeamMemberRequest
     */
    team_member?: TeamMember;
}
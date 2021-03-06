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
import { TeamMemberWage } from './team-member-wage';
/**
 * The response to a request for a set of `TeamMemberWage` objects. Contains a set of `TeamMemberWage`.
 * @export
 * @class ListTeamMemberWagesResponse
 */
export declare class ListTeamMemberWagesResponse {
    /**
     * A page of Team Member Wage results.
     * @type {Array<TeamMemberWage>}
     * @memberof ListTeamMemberWagesResponse
     */
    team_member_wages?: Array<TeamMemberWage>;
    /**
     * Value supplied in the subsequent request to fetch the next next page of Team Member Wage results.
     * @type {string}
     * @memberof ListTeamMemberWagesResponse
     */
    cursor?: string;
    /**
     * Any errors that occurred during the request.
     * @type {Array<Error>}
     * @memberof ListTeamMemberWagesResponse
     */
    errors?: Array<Error>;
}

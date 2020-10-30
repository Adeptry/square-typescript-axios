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
/**
 * Represents a reward that may be applied to an order if the necessary reward tier criteria are met. Rewards are created through the Loyalty API.
 * @export
 * @class OrderReward
 */
export declare class OrderReward {
    /**
     * The identifier of the reward.
     * @type {string}
     * @memberof OrderReward
     */
    id: string;
    /**
     * The identifier of the reward tier corresponding to this reward.
     * @type {string}
     * @memberof OrderReward
     */
    reward_tier_id: string;
}

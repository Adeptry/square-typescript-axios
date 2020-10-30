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
/**
 * Describes a phase in a subscription plan. For more information, see [Set Up and Manage a Subscription Plan](/docs/subscriptions-api/setup-plan).
 * @export
 * @class SubscriptionPhase
 */
export declare class SubscriptionPhase {
    /**
     * The Square-assigned ID of the subscription phase. This field cannot be changed after a `SubscriptionPhase` is created.
     * @type {string}
     * @memberof SubscriptionPhase
     */
    uid?: string;
    /**
     * The billing cadence of the phase. For example, weekly or monthly. This field cannot be changed after a `SubscriptionPhase` is created. See [SubscriptionCadence](#type-subscriptioncadence) for possible values
     * @type {string}
     * @memberof SubscriptionPhase
     */
    cadence: string;
    /**
     * The number of `cadence`s the phase lasts. If not set, the phase never ends. Only the last phase can be indefinite. This field cannot be changed after a `SubscriptionPhase` is created.
     * @type {number}
     * @memberof SubscriptionPhase
     */
    periods?: number;
    /**
     *
     * @type {Money}
     * @memberof SubscriptionPhase
     */
    recurring_price_money: Money;
    /**
     * The position this phase appears in the sequence of phases defined for the plan, indexed from 0. This field cannot be changed after a `SubscriptionPhase` is created.
     * @type {number}
     * @memberof SubscriptionPhase
     */
    ordinal?: number;
}

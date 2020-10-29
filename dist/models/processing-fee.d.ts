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
 * Represents Square processing fee.
 * @export
 * @interface ProcessingFee
 */
export interface ProcessingFee {
    /**
     * Timestamp of when the fee takes effect, in RFC 3339 format.
     * @type {string}
     * @memberof ProcessingFee
     */
    effective_at?: string;
    /**
     * The type of fee assessed or adjusted. Can be one of: `INITIAL`, `ADJUSTMENT`.
     * @type {string}
     * @memberof ProcessingFee
     */
    type?: string;
    /**
     *
     * @type {Money}
     * @memberof ProcessingFee
     */
    amount_money?: Money;
}
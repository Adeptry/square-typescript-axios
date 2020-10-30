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
import { V1Money } from './v1-money';
import { V1PaymentSurcharge } from './v1-payment-surcharge';
import { V1PaymentTax } from './v1-payment-tax';
/**
 * V1Refund
 * @export
 * @class V1Refund
 */
export declare class V1Refund {
    /**
     * The type of refund See [V1RefundType](#type-v1refundtype) for possible values
     * @type {string}
     * @memberof V1Refund
     */
    type?: string;
    /**
     * The merchant-specified reason for the refund.
     * @type {string}
     * @memberof V1Refund
     */
    reason?: string;
    /**
     *
     * @type {V1Money}
     * @memberof V1Refund
     */
    refunded_money?: V1Money;
    /**
     *
     * @type {V1Money}
     * @memberof V1Refund
     */
    refunded_processing_fee_money?: V1Money;
    /**
     *
     * @type {V1Money}
     * @memberof V1Refund
     */
    refunded_tax_money?: V1Money;
    /**
     *
     * @type {V1Money}
     * @memberof V1Refund
     */
    refunded_additive_tax_money?: V1Money;
    /**
     * All of the additive taxes associated with the refund.
     * @type {Array<V1PaymentTax>}
     * @memberof V1Refund
     */
    refunded_additive_tax?: Array<V1PaymentTax>;
    /**
     *
     * @type {V1Money}
     * @memberof V1Refund
     */
    refunded_inclusive_tax_money?: V1Money;
    /**
     * All of the inclusive taxes associated with the refund.
     * @type {Array<V1PaymentTax>}
     * @memberof V1Refund
     */
    refunded_inclusive_tax?: Array<V1PaymentTax>;
    /**
     *
     * @type {V1Money}
     * @memberof V1Refund
     */
    refunded_tip_money?: V1Money;
    /**
     *
     * @type {V1Money}
     * @memberof V1Refund
     */
    refunded_discount_money?: V1Money;
    /**
     *
     * @type {V1Money}
     * @memberof V1Refund
     */
    refunded_surcharge_money?: V1Money;
    /**
     * A list of all surcharges associated with the refund.
     * @type {Array<V1PaymentSurcharge>}
     * @memberof V1Refund
     */
    refunded_surcharges?: Array<V1PaymentSurcharge>;
    /**
     * The time when the merchant initiated the refund for Square to process, in ISO 8601 format.
     * @type {string}
     * @memberof V1Refund
     */
    created_at?: string;
    /**
     * The time when Square processed the refund on behalf of the merchant, in ISO 8601 format.
     * @type {string}
     * @memberof V1Refund
     */
    processed_at?: string;
    /**
     * A Square-issued ID associated with the refund. For single-tender refunds, payment_id is the ID of the original payment ID. For split-tender refunds, payment_id is the ID of the original tender. For exchange-based refunds (is_exchange == true), payment_id is the ID of the original payment ID even if the payment includes other tenders.
     * @type {string}
     * @memberof V1Refund
     */
    payment_id?: string;
    /**
     *
     * @type {string}
     * @memberof V1Refund
     */
    merchant_id?: string;
    /**
     * Indicates whether or not the refund is associated with an exchange. If is_exchange is true, the refund reflects the value of goods returned in the exchange not the total money refunded.
     * @type {boolean}
     * @memberof V1Refund
     */
    is_exchange?: boolean;
}
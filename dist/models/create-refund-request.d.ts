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
 * Defines the body parameters that can be included in a request to the [CreateRefund](#endpoint-createrefund) endpoint.  Deprecated - recommend using [RefundPayment](#endpoint-refunds-refundpayment)
 * @export
 * @class CreateRefundRequest
 */
export declare class CreateRefundRequest {
    /**
     * A value you specify that uniquely identifies this refund among refunds you\'ve created for the tender.  If you\'re unsure whether a particular refund succeeded, you can reattempt it with the same idempotency key without worrying about duplicating the refund.  See [Idempotency keys](#idempotencykeys) for more information.
     * @type {string}
     * @memberof CreateRefundRequest
     */
    idempotency_key: string;
    /**
     * The ID of the tender to refund.  A ``Transaction`` has one or more `tenders` (i.e., methods of payment) associated with it, and you refund each tender separately with the Connect API.
     * @type {string}
     * @memberof CreateRefundRequest
     */
    tender_id: string;
    /**
     * A description of the reason for the refund.  Default value: `Refund via API`
     * @type {string}
     * @memberof CreateRefundRequest
     */
    reason?: string;
    /**
     *
     * @type {Money}
     * @memberof CreateRefundRequest
     */
    amount_money: Money;
}

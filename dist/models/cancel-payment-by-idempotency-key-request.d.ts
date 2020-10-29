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
 * Specifies the idempotency key of a payment to cancel.
 * @export
 * @interface CancelPaymentByIdempotencyKeyRequest
 */
export interface CancelPaymentByIdempotencyKeyRequest {
    /**
     * The `idempotency_key` identifying the payment to be canceled.
     * @type {string}
     * @memberof CancelPaymentByIdempotencyKeyRequest
     */
    idempotency_key: string;
}
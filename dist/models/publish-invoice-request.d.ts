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
 * Describes a `PublishInvoice` request.
 * @export
 * @class PublishInvoiceRequest
 */
export declare class PublishInvoiceRequest {
    /**
     * The version of the `Invoice` to publish. This must match the current version of the invoice, otherwise the request is rejected.
     * @type {number}
     * @memberof PublishInvoiceRequest
     */
    version: number;
    /**
     * A unique string that identifies the `PublishInvoice` request. If you do not  provide `idempotency_key` (or provide an empty string as the value), the endpoint  treats each request as independent.  For more information, see [Idempotency](https://developer.squareup.com/docs/docs/working-with-apis/idempotency).
     * @type {string}
     * @memberof PublishInvoiceRequest
     */
    idempotency_key?: string;
}

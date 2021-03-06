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
import { Payment } from './payment';
/**
 * The return value from a [CompletePayment](#endpoint-payments-completepayment) call.
 * @export
 * @class CompletePaymentResponse
 */
export declare class CompletePaymentResponse {
    /**
     * Information about errors encountered during the request.
     * @type {Array<Error>}
     * @memberof CompletePaymentResponse
     */
    errors?: Array<Error>;
    /**
     *
     * @type {Payment}
     * @memberof CompletePaymentResponse
     */
    payment?: Payment;
}

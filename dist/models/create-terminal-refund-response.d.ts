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
import { TerminalRefund } from './terminal-refund';
/**
 *
 * @export
 * @class CreateTerminalRefundResponse
 */
export declare class CreateTerminalRefundResponse {
    /**
     * Information on errors encountered during the request.
     * @type {Array<Error>}
     * @memberof CreateTerminalRefundResponse
     */
    errors?: Array<Error>;
    /**
     *
     * @type {TerminalRefund}
     * @memberof CreateTerminalRefundResponse
     */
    refund?: TerminalRefund;
}

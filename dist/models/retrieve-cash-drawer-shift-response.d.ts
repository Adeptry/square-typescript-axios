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
import { CashDrawerShift } from './cash-drawer-shift';
/**
 *
 * @export
 * @class RetrieveCashDrawerShiftResponse
 */
export declare class RetrieveCashDrawerShiftResponse {
    /**
     *
     * @type {CashDrawerShift}
     * @memberof RetrieveCashDrawerShiftResponse
     */
    cash_drawer_shift?: CashDrawerShift;
    /**
     * Any errors that occurred during the request.
     * @type {Array<Error>}
     * @memberof RetrieveCashDrawerShiftResponse
     */
    errors?: Array<Error>;
}

"use strict";
// tslint:disable
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaxCalculationPhase = void 0;
/**
 * When to calculate the taxes due on a cart.
 * @export
 * @enum {string}
 */
var TaxCalculationPhase;
(function (TaxCalculationPhase) {
    TaxCalculationPhase["SUBTOTALPHASE"] = "TAX_SUBTOTAL_PHASE";
    TaxCalculationPhase["TOTALPHASE"] = "TAX_TOTAL_PHASE";
})(TaxCalculationPhase = exports.TaxCalculationPhase || (exports.TaxCalculationPhase = {}));
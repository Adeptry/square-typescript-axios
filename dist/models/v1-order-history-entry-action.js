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
exports.V1OrderHistoryEntryAction = void 0;
/**
 *
 * @export
 * @enum {string}
 */
var V1OrderHistoryEntryAction;
(function (V1OrderHistoryEntryAction) {
    V1OrderHistoryEntryAction["ORDERPLACED"] = "ORDER_PLACED";
    V1OrderHistoryEntryAction["DECLINED"] = "DECLINED";
    V1OrderHistoryEntryAction["PAYMENTRECEIVED"] = "PAYMENT_RECEIVED";
    V1OrderHistoryEntryAction["CANCELED"] = "CANCELED";
    V1OrderHistoryEntryAction["COMPLETED"] = "COMPLETED";
    V1OrderHistoryEntryAction["REFUNDED"] = "REFUNDED";
    V1OrderHistoryEntryAction["EXPIRED"] = "EXPIRED";
})(V1OrderHistoryEntryAction = exports.V1OrderHistoryEntryAction || (exports.V1OrderHistoryEntryAction = {}));
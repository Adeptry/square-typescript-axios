"use strict";
/* tslint:disable */
/* eslint-disable */
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
exports.TransactionProduct = void 0;
/**
 * Indicates the Square product used to process a transaction.
 * @export
 * @enum {string}
 */
var TransactionProduct;
(function (TransactionProduct) {
    TransactionProduct["REGISTER"] = "REGISTER";
    TransactionProduct["EXTERNALAPI"] = "EXTERNAL_API";
    TransactionProduct["BILLING"] = "BILLING";
    TransactionProduct["APPOINTMENTS"] = "APPOINTMENTS";
    TransactionProduct["INVOICES"] = "INVOICES";
    TransactionProduct["ONLINESTORE"] = "ONLINE_STORE";
    TransactionProduct["PAYROLL"] = "PAYROLL";
    TransactionProduct["OTHER"] = "OTHER";
})(TransactionProduct = exports.TransactionProduct || (exports.TransactionProduct = {}));

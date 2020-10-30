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
exports.BankAccountStatus = void 0;
/**
 * Indicates the current verification status of a `BankAccount` object.
 * @export
 * @enum {string}
 */
var BankAccountStatus;
(function (BankAccountStatus) {
    BankAccountStatus["VERIFICATIONINPROGRESS"] = "VERIFICATION_IN_PROGRESS";
    BankAccountStatus["VERIFIED"] = "VERIFIED";
    BankAccountStatus["DISABLED"] = "DISABLED";
})(BankAccountStatus = exports.BankAccountStatus || (exports.BankAccountStatus = {}));
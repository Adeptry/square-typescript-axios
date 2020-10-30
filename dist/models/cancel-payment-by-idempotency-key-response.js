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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CancelPaymentByIdempotencyKeyResponse = void 0;
var graphql_1 = require("@nestjs/graphql");
/**
 * The return value from the [CancelPaymentByIdempotencyKey](#endpoint-payments-cancelpaymentbyidempotencykey) endpoint. On success, `errors` is empty.
 * @export
 * @class CancelPaymentByIdempotencyKeyResponse
 */
var CancelPaymentByIdempotencyKeyResponse = /** @class */ (function () {
    function CancelPaymentByIdempotencyKeyResponse() {
    }
    CancelPaymentByIdempotencyKeyResponse = __decorate([
        graphql_1.ObjectType()
    ], CancelPaymentByIdempotencyKeyResponse);
    return CancelPaymentByIdempotencyKeyResponse;
}());
exports.CancelPaymentByIdempotencyKeyResponse = CancelPaymentByIdempotencyKeyResponse;

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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1PaymentTax = void 0;
var v1_money_1 = require("./v1-money");
var graphql_1 = require("@nestjs/graphql");
var graphql_type_json_1 = __importDefault(require("graphql-type-json"));
/**
 * V1PaymentTax
 * @export
 * @class V1PaymentTax
 */
var V1PaymentTax = /** @class */ (function () {
    function V1PaymentTax() {
    }
    __decorate([
        graphql_1.Field(function () { return graphql_type_json_1.default; }, { nullable: true }),
        __metadata("design:type", Array)
    ], V1PaymentTax.prototype, "errors", void 0);
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], V1PaymentTax.prototype, "name", void 0);
    __decorate([
        graphql_1.Field(function () { return v1_money_1.V1Money; }, { nullable: true }),
        __metadata("design:type", v1_money_1.V1Money)
    ], V1PaymentTax.prototype, "applied_money", void 0);
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], V1PaymentTax.prototype, "rate", void 0);
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], V1PaymentTax.prototype, "inclusion_type", void 0);
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], V1PaymentTax.prototype, "fee_id", void 0);
    V1PaymentTax = __decorate([
        graphql_1.ObjectType()
    ], V1PaymentTax);
    return V1PaymentTax;
}());
exports.V1PaymentTax = V1PaymentTax;

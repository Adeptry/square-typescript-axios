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
Object.defineProperty(exports, "__esModule", { value: true });
exports.V1Order = void 0;
var address_1 = require("./address");
var v1_money_1 = require("./v1-money");
var v1_order_history_entry_1 = require("./v1-order-history-entry");
var v1_tender_1 = require("./v1-tender");
var graphql_1 = require("@nestjs/graphql");
/**
 * V1Order
 * @export
 * @class V1Order
 */
var V1Order = /** @class */ (function () {
    function V1Order() {
    }
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], V1Order.prototype, "id", void 0);
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], V1Order.prototype, "buyer_email", void 0);
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], V1Order.prototype, "recipient_name", void 0);
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], V1Order.prototype, "recipient_phone_number", void 0);
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], V1Order.prototype, "state", void 0);
    __decorate([
        graphql_1.Field(function () { return address_1.Address; }, { nullable: true }),
        __metadata("design:type", address_1.Address)
    ], V1Order.prototype, "shipping_address", void 0);
    __decorate([
        graphql_1.Field(function () { return v1_money_1.V1Money; }, { nullable: true }),
        __metadata("design:type", v1_money_1.V1Money)
    ], V1Order.prototype, "subtotal_money", void 0);
    __decorate([
        graphql_1.Field(function () { return v1_money_1.V1Money; }, { nullable: true }),
        __metadata("design:type", v1_money_1.V1Money)
    ], V1Order.prototype, "total_shipping_money", void 0);
    __decorate([
        graphql_1.Field(function () { return v1_money_1.V1Money; }, { nullable: true }),
        __metadata("design:type", v1_money_1.V1Money)
    ], V1Order.prototype, "total_tax_money", void 0);
    __decorate([
        graphql_1.Field(function () { return v1_money_1.V1Money; }, { nullable: true }),
        __metadata("design:type", v1_money_1.V1Money)
    ], V1Order.prototype, "total_price_money", void 0);
    __decorate([
        graphql_1.Field(function () { return v1_money_1.V1Money; }, { nullable: true }),
        __metadata("design:type", v1_money_1.V1Money)
    ], V1Order.prototype, "total_discount_money", void 0);
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], V1Order.prototype, "created_at", void 0);
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], V1Order.prototype, "updated_at", void 0);
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], V1Order.prototype, "expires_at", void 0);
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], V1Order.prototype, "payment_id", void 0);
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], V1Order.prototype, "buyer_note", void 0);
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], V1Order.prototype, "completed_note", void 0);
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], V1Order.prototype, "refunded_note", void 0);
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], V1Order.prototype, "canceled_note", void 0);
    __decorate([
        graphql_1.Field(function () { return v1_tender_1.V1Tender; }, { nullable: true }),
        __metadata("design:type", v1_tender_1.V1Tender)
    ], V1Order.prototype, "tender", void 0);
    __decorate([
        graphql_1.Field(function () { return [v1_order_history_entry_1.V1OrderHistoryEntry]; }, { nullable: true }),
        __metadata("design:type", Array)
    ], V1Order.prototype, "order_history", void 0);
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], V1Order.prototype, "promo_code", void 0);
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], V1Order.prototype, "btc_receive_address", void 0);
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", Number)
    ], V1Order.prototype, "btc_price_satoshi", void 0);
    V1Order = __decorate([
        graphql_1.ObjectType()
    ], V1Order);
    return V1Order;
}());
exports.V1Order = V1Order;

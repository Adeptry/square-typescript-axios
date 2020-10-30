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
exports.OrderLineItemDiscount = void 0;
var money_1 = require("./money");
var graphql_1 = require("@nestjs/graphql");
/**
 * Represents a discount that applies to one or more line items in an order.  Fixed-amount, order-scoped discounts are distributed across all non-zero line item totals. The amount distributed to each line item is relative to the amount contributed by the item to the order subtotal.
 * @export
 * @class OrderLineItemDiscount
 */
var OrderLineItemDiscount = /** @class */ (function () {
    function OrderLineItemDiscount() {
    }
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], OrderLineItemDiscount.prototype, "uid", void 0);
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], OrderLineItemDiscount.prototype, "catalog_object_id", void 0);
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], OrderLineItemDiscount.prototype, "name", void 0);
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], OrderLineItemDiscount.prototype, "type", void 0);
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], OrderLineItemDiscount.prototype, "percentage", void 0);
    __decorate([
        graphql_1.Field(function () { return money_1.Money; }, { nullable: true }),
        __metadata("design:type", money_1.Money)
    ], OrderLineItemDiscount.prototype, "amount_money", void 0);
    __decorate([
        graphql_1.Field(function () { return money_1.Money; }, { nullable: true }),
        __metadata("design:type", money_1.Money)
    ], OrderLineItemDiscount.prototype, "applied_money", void 0);
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], OrderLineItemDiscount.prototype, "scope", void 0);
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], OrderLineItemDiscount.prototype, "pricing_rule_id", void 0);
    OrderLineItemDiscount = __decorate([
        graphql_1.ObjectType()
    ], OrderLineItemDiscount);
    return OrderLineItemDiscount;
}());
exports.OrderLineItemDiscount = OrderLineItemDiscount;

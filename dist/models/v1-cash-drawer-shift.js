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
exports.V1CashDrawerShift = void 0;
var device_1 = require("./device");
var v1_cash_drawer_event_1 = require("./v1-cash-drawer-event");
var v1_money_1 = require("./v1-money");
var graphql_1 = require("@nestjs/graphql");
var graphql_type_json_1 = __importDefault(require("graphql-type-json"));
/**
 * Contains details for a single cash drawer shift.
 * @export
 * @class V1CashDrawerShift
 */
var V1CashDrawerShift = /** @class */ (function () {
    function V1CashDrawerShift() {
    }
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], V1CashDrawerShift.prototype, "id", void 0);
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], V1CashDrawerShift.prototype, "event_type", void 0);
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], V1CashDrawerShift.prototype, "opened_at", void 0);
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], V1CashDrawerShift.prototype, "ended_at", void 0);
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], V1CashDrawerShift.prototype, "closed_at", void 0);
    __decorate([
        graphql_1.Field(function () { return graphql_type_json_1.default; }, { nullable: true }),
        __metadata("design:type", Array)
    ], V1CashDrawerShift.prototype, "employee_ids", void 0);
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], V1CashDrawerShift.prototype, "opening_employee_id", void 0);
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], V1CashDrawerShift.prototype, "ending_employee_id", void 0);
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], V1CashDrawerShift.prototype, "closing_employee_id", void 0);
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], V1CashDrawerShift.prototype, "description", void 0);
    __decorate([
        graphql_1.Field(function () { return v1_money_1.V1Money; }, { nullable: true }),
        __metadata("design:type", v1_money_1.V1Money)
    ], V1CashDrawerShift.prototype, "starting_cash_money", void 0);
    __decorate([
        graphql_1.Field(function () { return v1_money_1.V1Money; }, { nullable: true }),
        __metadata("design:type", v1_money_1.V1Money)
    ], V1CashDrawerShift.prototype, "cash_payment_money", void 0);
    __decorate([
        graphql_1.Field(function () { return v1_money_1.V1Money; }, { nullable: true }),
        __metadata("design:type", v1_money_1.V1Money)
    ], V1CashDrawerShift.prototype, "cash_refunds_money", void 0);
    __decorate([
        graphql_1.Field(function () { return v1_money_1.V1Money; }, { nullable: true }),
        __metadata("design:type", v1_money_1.V1Money)
    ], V1CashDrawerShift.prototype, "cash_paid_in_money", void 0);
    __decorate([
        graphql_1.Field(function () { return v1_money_1.V1Money; }, { nullable: true }),
        __metadata("design:type", v1_money_1.V1Money)
    ], V1CashDrawerShift.prototype, "cash_paid_out_money", void 0);
    __decorate([
        graphql_1.Field(function () { return v1_money_1.V1Money; }, { nullable: true }),
        __metadata("design:type", v1_money_1.V1Money)
    ], V1CashDrawerShift.prototype, "expected_cash_money", void 0);
    __decorate([
        graphql_1.Field(function () { return v1_money_1.V1Money; }, { nullable: true }),
        __metadata("design:type", v1_money_1.V1Money)
    ], V1CashDrawerShift.prototype, "closed_cash_money", void 0);
    __decorate([
        graphql_1.Field(function () { return device_1.Device; }, { nullable: true }),
        __metadata("design:type", device_1.Device)
    ], V1CashDrawerShift.prototype, "device", void 0);
    __decorate([
        graphql_1.Field(function () { return [v1_cash_drawer_event_1.V1CashDrawerEvent]; }, { nullable: true }),
        __metadata("design:type", Array)
    ], V1CashDrawerShift.prototype, "events", void 0);
    V1CashDrawerShift = __decorate([
        graphql_1.ObjectType()
    ], V1CashDrawerShift);
    return V1CashDrawerShift;
}());
exports.V1CashDrawerShift = V1CashDrawerShift;

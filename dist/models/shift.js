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
exports.Shift = void 0;
var break_1 = require("./break");
var shift_wage_1 = require("./shift-wage");
var graphql_1 = require("@nestjs/graphql");
/**
 * A record of the hourly rate, start, and end times for a single work shift for an employee. May include a record of the start and end times for breaks taken during the shift.
 * @export
 * @class Shift
 */
var Shift = /** @class */ (function () {
    function Shift() {
    }
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], Shift.prototype, "id", void 0);
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], Shift.prototype, "employee_id", void 0);
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], Shift.prototype, "location_id", void 0);
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], Shift.prototype, "timezone", void 0);
    __decorate([
        graphql_1.Field({ nullable: false }),
        __metadata("design:type", String)
    ], Shift.prototype, "start_at", void 0);
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], Shift.prototype, "end_at", void 0);
    __decorate([
        graphql_1.Field(function () { return shift_wage_1.ShiftWage; }, { nullable: true }),
        __metadata("design:type", shift_wage_1.ShiftWage)
    ], Shift.prototype, "wage", void 0);
    __decorate([
        graphql_1.Field(function () { return [break_1.Break]; }, { nullable: true }),
        __metadata("design:type", Array)
    ], Shift.prototype, "breaks", void 0);
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], Shift.prototype, "status", void 0);
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", Number)
    ], Shift.prototype, "version", void 0);
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], Shift.prototype, "created_at", void 0);
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], Shift.prototype, "updated_at", void 0);
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], Shift.prototype, "team_member_id", void 0);
    Shift = __decorate([
        graphql_1.ObjectType()
    ], Shift);
    return Shift;
}());
exports.Shift = Shift;

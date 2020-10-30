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
exports.WageSetting = void 0;
var job_assignment_1 = require("./job-assignment");
var graphql_1 = require("@nestjs/graphql");
/**
 * An object representing a team member\'s wage information.
 * @export
 * @class WageSetting
 */
var WageSetting = /** @class */ (function () {
    function WageSetting() {
    }
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], WageSetting.prototype, "team_member_id", void 0);
    __decorate([
        graphql_1.Field(function () { return [job_assignment_1.JobAssignment]; }, { nullable: true }),
        __metadata("design:type", Array)
    ], WageSetting.prototype, "job_assignments", void 0);
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", Boolean)
    ], WageSetting.prototype, "is_overtime_exempt", void 0);
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", Number)
    ], WageSetting.prototype, "version", void 0);
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], WageSetting.prototype, "created_at", void 0);
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], WageSetting.prototype, "updated_at", void 0);
    WageSetting = __decorate([
        graphql_1.ObjectType()
    ], WageSetting);
    return WageSetting;
}());
exports.WageSetting = WageSetting;
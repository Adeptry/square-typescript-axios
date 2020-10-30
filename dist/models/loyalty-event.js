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
exports.LoyaltyEvent = void 0;
var loyalty_event_accumulate_points_1 = require("./loyalty-event-accumulate-points");
var loyalty_event_adjust_points_1 = require("./loyalty-event-adjust-points");
var loyalty_event_create_reward_1 = require("./loyalty-event-create-reward");
var loyalty_event_delete_reward_1 = require("./loyalty-event-delete-reward");
var loyalty_event_expire_points_1 = require("./loyalty-event-expire-points");
var loyalty_event_other_1 = require("./loyalty-event-other");
var loyalty_event_redeem_reward_1 = require("./loyalty-event-redeem-reward");
var graphql_1 = require("@nestjs/graphql");
/**
 * Provides information about a loyalty event.  For more information, see [Loyalty events](/docs/loyalty-api/overview/#loyalty-events).
 * @export
 * @class LoyaltyEvent
 */
var LoyaltyEvent = /** @class */ (function () {
    function LoyaltyEvent() {
    }
    __decorate([
        graphql_1.Field({ nullable: false }),
        __metadata("design:type", String)
    ], LoyaltyEvent.prototype, "id", void 0);
    __decorate([
        graphql_1.Field({ nullable: false }),
        __metadata("design:type", String)
    ], LoyaltyEvent.prototype, "type", void 0);
    __decorate([
        graphql_1.Field({ nullable: false }),
        __metadata("design:type", String)
    ], LoyaltyEvent.prototype, "created_at", void 0);
    __decorate([
        graphql_1.Field(function () { return loyalty_event_accumulate_points_1.LoyaltyEventAccumulatePoints; }, { nullable: true }),
        __metadata("design:type", loyalty_event_accumulate_points_1.LoyaltyEventAccumulatePoints)
    ], LoyaltyEvent.prototype, "accumulate_points", void 0);
    __decorate([
        graphql_1.Field(function () { return loyalty_event_create_reward_1.LoyaltyEventCreateReward; }, { nullable: true }),
        __metadata("design:type", loyalty_event_create_reward_1.LoyaltyEventCreateReward)
    ], LoyaltyEvent.prototype, "create_reward", void 0);
    __decorate([
        graphql_1.Field(function () { return loyalty_event_redeem_reward_1.LoyaltyEventRedeemReward; }, { nullable: true }),
        __metadata("design:type", loyalty_event_redeem_reward_1.LoyaltyEventRedeemReward)
    ], LoyaltyEvent.prototype, "redeem_reward", void 0);
    __decorate([
        graphql_1.Field(function () { return loyalty_event_delete_reward_1.LoyaltyEventDeleteReward; }, { nullable: true }),
        __metadata("design:type", loyalty_event_delete_reward_1.LoyaltyEventDeleteReward)
    ], LoyaltyEvent.prototype, "delete_reward", void 0);
    __decorate([
        graphql_1.Field(function () { return loyalty_event_adjust_points_1.LoyaltyEventAdjustPoints; }, { nullable: true }),
        __metadata("design:type", loyalty_event_adjust_points_1.LoyaltyEventAdjustPoints)
    ], LoyaltyEvent.prototype, "adjust_points", void 0);
    __decorate([
        graphql_1.Field({ nullable: false }),
        __metadata("design:type", String)
    ], LoyaltyEvent.prototype, "loyalty_account_id", void 0);
    __decorate([
        graphql_1.Field({ nullable: true }),
        __metadata("design:type", String)
    ], LoyaltyEvent.prototype, "location_id", void 0);
    __decorate([
        graphql_1.Field({ nullable: false }),
        __metadata("design:type", String)
    ], LoyaltyEvent.prototype, "source", void 0);
    __decorate([
        graphql_1.Field(function () { return loyalty_event_expire_points_1.LoyaltyEventExpirePoints; }, { nullable: true }),
        __metadata("design:type", loyalty_event_expire_points_1.LoyaltyEventExpirePoints)
    ], LoyaltyEvent.prototype, "expire_points", void 0);
    __decorate([
        graphql_1.Field(function () { return loyalty_event_other_1.LoyaltyEventOther; }, { nullable: true }),
        __metadata("design:type", loyalty_event_other_1.LoyaltyEventOther)
    ], LoyaltyEvent.prototype, "other_event", void 0);
    LoyaltyEvent = __decorate([
        graphql_1.ObjectType()
    ], LoyaltyEvent);
    return LoyaltyEvent;
}());
exports.LoyaltyEvent = LoyaltyEvent;

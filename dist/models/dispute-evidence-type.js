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
exports.DisputeEvidenceType = void 0;
/**
 * Type of the dispute evidence.
 * @export
 * @enum {string}
 */
var DisputeEvidenceType;
(function (DisputeEvidenceType) {
    DisputeEvidenceType["GENERICEVIDENCE"] = "GENERIC_EVIDENCE";
    DisputeEvidenceType["ONLINEORAPPACCESSLOG"] = "ONLINE_OR_APP_ACCESS_LOG";
    DisputeEvidenceType["AUTHORIZATIONDOCUMENTATION"] = "AUTHORIZATION_DOCUMENTATION";
    DisputeEvidenceType["CANCELLATIONORREFUNDDOCUMENTATION"] = "CANCELLATION_OR_REFUND_DOCUMENTATION";
    DisputeEvidenceType["CARDHOLDERCOMMUNICATION"] = "CARDHOLDER_COMMUNICATION";
    DisputeEvidenceType["CARDHOLDERINFORMATION"] = "CARDHOLDER_INFORMATION";
    DisputeEvidenceType["PURCHASEACKNOWLEDGEMENT"] = "PURCHASE_ACKNOWLEDGEMENT";
    DisputeEvidenceType["DUPLICATECHARGEDOCUMENTATION"] = "DUPLICATE_CHARGE_DOCUMENTATION";
    DisputeEvidenceType["PRODUCTORSERVICEDESCRIPTION"] = "PRODUCT_OR_SERVICE_DESCRIPTION";
    DisputeEvidenceType["RECEIPT"] = "RECEIPT";
    DisputeEvidenceType["SERVICERECEIVEDDOCUMENTATION"] = "SERVICE_RECEIVED_DOCUMENTATION";
    DisputeEvidenceType["PROOFOFDELIVERYDOCUMENTATION"] = "PROOF_OF_DELIVERY_DOCUMENTATION";
    DisputeEvidenceType["RELATEDTRANSACTIONDOCUMENTATION"] = "RELATED_TRANSACTION_DOCUMENTATION";
    DisputeEvidenceType["REBUTTALEXPLANATION"] = "REBUTTAL_EXPLANATION";
    DisputeEvidenceType["TRACKINGNUMBER"] = "TRACKING_NUMBER";
})(DisputeEvidenceType = exports.DisputeEvidenceType || (exports.DisputeEvidenceType = {}));

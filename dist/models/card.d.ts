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
import { Address } from './address';
/**
 * Represents the payment details of a card to be used for payments. These details are determined by the `card_nonce` generated by `SqPaymentForm`.
 * @export
 * @class Card
 */
export declare class Card {
    /**
     * Unique ID for this card. Generated by Square.
     * @type {string}
     * @memberof Card
     */
    id?: string;
    /**
     * The card\'s brand. See [CardBrand](#type-cardbrand) for possible values
     * @type {string}
     * @memberof Card
     */
    card_brand?: string;
    /**
     * The last 4 digits of the card number.
     * @type {string}
     * @memberof Card
     */
    last_4?: string;
    /**
     * The expiration month of the associated card as an integer between 1 and 12.
     * @type {number}
     * @memberof Card
     */
    exp_month?: number;
    /**
     * The four-digit year of the card\'s expiration date.
     * @type {number}
     * @memberof Card
     */
    exp_year?: number;
    /**
     * The name of the cardholder.
     * @type {string}
     * @memberof Card
     */
    cardholder_name?: string;
    /**
     *
     * @type {Address}
     * @memberof Card
     */
    billing_address?: Address;
    /**
     * __Not currently set.__ Intended as a Square-assigned identifier, based on the card number, to identify the card across multiple locations within a single application.
     * @type {string}
     * @memberof Card
     */
    fingerprint?: string;
    /**
     * The type of the card. The Card object includes this field only in response to Payments API calls. See [CardType](#type-cardtype) for possible values
     * @type {string}
     * @memberof Card
     */
    card_type?: string;
    /**
     * Indicates whether the Card is prepaid or not. The Card object includes this field only in response to Payments API calls. See [CardPrepaidType](#type-cardprepaidtype) for possible values
     * @type {string}
     * @memberof Card
     */
    prepaid_type?: string;
    /**
     * The first six digits of the card number, known as the Bank Identification Number (BIN). Only the Payments API returns this field.
     * @type {string}
     * @memberof Card
     */
    bin?: string;
}

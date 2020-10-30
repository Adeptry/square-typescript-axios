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
import { Money } from './money';
/**
 * A modifier applicable to items at the time of sale.
 * @export
 * @class CatalogModifier
 */
export declare class CatalogModifier {
    /**
     * The modifier name.  This is a searchable attribute for use in applicable query filters, and its value length is of Unicode code points.
     * @type {string}
     * @memberof CatalogModifier
     */
    name?: string;
    /**
     *
     * @type {Money}
     * @memberof CatalogModifier
     */
    price_money?: Money;
    /**
     * Determines where this `CatalogModifier` appears in the `CatalogModifierList`.
     * @type {number}
     * @memberof CatalogModifier
     */
    ordinal?: number;
    /**
     * The ID of the `CatalogModifierList` associated with this modifier.
     * @type {string}
     * @memberof CatalogModifier
     */
    modifier_list_id?: string;
}

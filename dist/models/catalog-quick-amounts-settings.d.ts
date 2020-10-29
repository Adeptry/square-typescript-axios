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
import { CatalogQuickAmount } from './catalog-quick-amount';
/**
 * A parent Catalog Object model represents a set of Quick Amounts and the settings control the amounts.
 * @export
 * @interface CatalogQuickAmountsSettings
 */
export interface CatalogQuickAmountsSettings {
    /**
     * Represents the option seller currently uses on Quick Amounts. See [CatalogQuickAmountsSettingsOption](#type-catalogquickamountssettingsoption) for possible values
     * @type {string}
     * @memberof CatalogQuickAmountsSettings
     */
    option: string;
    /**
     * Represents location\'s eligibility for auto amounts The boolean should be consistent with whether there are AUTO amounts in the `amounts`.
     * @type {boolean}
     * @memberof CatalogQuickAmountsSettings
     */
    eligible_for_auto_amounts?: boolean;
    /**
     * Represents a set of Quick Amounts at this location.
     * @type {Array<CatalogQuickAmount>}
     * @memberof CatalogQuickAmountsSettings
     */
    amounts?: Array<CatalogQuickAmount>;
}
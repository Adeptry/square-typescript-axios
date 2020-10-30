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
 * Represents an applied portion of a tax to a line item in an order.  Order-scoped taxes automatically include the applied taxes in each line item. Line item taxes must be referenced from any applicable line items. The corresponding applied money is automatically computed, based on the set of participating line items.
 * @export
 * @class OrderLineItemAppliedTax
 */
export declare class OrderLineItemAppliedTax {
    /**
     * Unique ID that identifies the applied tax only within this order.
     * @type {string}
     * @memberof OrderLineItemAppliedTax
     */
    uid?: string;
    /**
     * The `uid` of the tax for which this applied tax represents.  Must reference a tax present in the `order.taxes` field.  This field is immutable. To change which taxes apply to a line item, delete and add new `OrderLineItemAppliedTax`s.
     * @type {string}
     * @memberof OrderLineItemAppliedTax
     */
    tax_uid: string;
    /**
     *
     * @type {Money}
     * @memberof OrderLineItemAppliedTax
     */
    applied_money?: Money;
}
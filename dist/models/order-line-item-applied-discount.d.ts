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
 * Represents an applied portion of a discount to a line item in an order.  Order scoped discounts will automatically have applied discounts present for each line item. Line item scoped discounts must have applied discounts added manually for any applicable line items. The corresponding applied money will automatically be computed based on participating line items.
 * @export
 * @class OrderLineItemAppliedDiscount
 */
export declare class OrderLineItemAppliedDiscount {
    /**
     * Unique ID that identifies the applied discount only within this order.
     * @type {string}
     * @memberof OrderLineItemAppliedDiscount
     */
    uid?: string;
    /**
     * The `uid` of the discount the applied discount represents. Must reference a discount present in the `order.discounts` field.  This field is immutable. To change which discounts apply to a line item, you must delete the discount and re-add it as a new `OrderLineItemAppliedDiscount`.
     * @type {string}
     * @memberof OrderLineItemAppliedDiscount
     */
    discount_uid: string;
    /**
     *
     * @type {Money}
     * @memberof OrderLineItemAppliedDiscount
     */
    applied_money?: Money;
}

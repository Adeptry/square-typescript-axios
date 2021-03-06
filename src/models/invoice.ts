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


import { InvoicePaymentRequest } from './invoice-payment-request';
import { InvoiceRecipient } from './invoice-recipient';
import { Money } from './money';

import { Field, ObjectType } from '@nestjs/graphql';
import GraphQLJSON from 'graphql-type-json';

/**
 * Stores information about an invoice. You use the Invoices API to create and process invoices. For more information, see [Manage Invoices Using the Invoices API](/docs/invoices-api/overview).
 * @export
 * @class Invoice
 */
@ObjectType()
export class Invoice {
    /**
     * The Square-assigned ID of the invoice.
     * @type {string}
     * @memberof Invoice
     */
    
    @Field({ nullable: true })
    id?: string;
    /**
     * The Square-assigned version number, which is incremented each time an update is committed to the invoice.
     * @type {number}
     * @memberof Invoice
     */
    
    @Field({ nullable: true })
    version?: number;
    /**
     * The ID of the location that this invoice is associated with. This field is required when creating an invoice.
     * @type {string}
     * @memberof Invoice
     */
    
    @Field({ nullable: true })
    location_id?: string;
    /**
     * The ID of the `order` for which the invoice is created.  This order must be in the `OPEN` state and must belong to the `location_id` specified for this invoice. This field is required when creating an invoice.
     * @type {string}
     * @memberof Invoice
     */
    
    @Field({ nullable: true })
    order_id?: string;
    /**
     * 
     * @type {InvoiceRecipient}
     * @memberof Invoice
     */
    
    @Field(() => InvoiceRecipient, { nullable: true })
    primary_recipient?: InvoiceRecipient;
    /**
     * An array of `InvoicePaymentRequest` objects. Each object defines a payment request in an invoice payment schedule. It provides information such as when and how Square processes payments. You must specify at least one payment request. For invoices  with multiple payment requests, you can specify a maximum of 12 `INSTALLMENT` request types. All of the payment requests must specify the same `request_method`.  This field is required when creating an invoice.
     * @type {Array<InvoicePaymentRequest>}
     * @memberof Invoice
     */
    
    @Field(() => [InvoicePaymentRequest], { nullable: true })
    payment_requests?: Array<InvoicePaymentRequest>;
    /**
     * A user-friendly invoice number. The value is unique within a location. If not provided when creating an invoice, Square assigns a value. It increments from 1 and padded with zeros making it 7 characters long for example, 0000001, 0000002.
     * @type {string}
     * @memberof Invoice
     */
    
    @Field({ nullable: true })
    invoice_number?: string;
    /**
     * The title of the invoice.
     * @type {string}
     * @memberof Invoice
     */
    
    @Field({ nullable: true })
    title?: string;
    /**
     * The description of the invoice. This is visible the customer receiving the invoice.
     * @type {string}
     * @memberof Invoice
     */
    
    @Field({ nullable: true })
    description?: string;
    /**
     * The timestamp when the invoice is scheduled for processing, in RFC 3339 format. At the specified time, depending on the `request_method`, Square sends the invoice to the customer\'s email address or charge the customer\'s card on file.  If the field is not set, Square processes the invoice immediately after publication.
     * @type {string}
     * @memberof Invoice
     */
    
    @Field({ nullable: true })
    scheduled_at?: string;
    /**
     * The URL of the Square-hosted invoice page. After you publish the invoice using the `PublishInvoice` endpoint, Square hosts the invoice page and returns the page URL in the response.
     * @type {string}
     * @memberof Invoice
     */
    
    @Field({ nullable: true })
    public_url?: string;
    /**
     * 
     * @type {Money}
     * @memberof Invoice
     */
    
    @Field(() => Money, { nullable: true })
    next_payment_amount_money?: Money;
    /**
     * The status of the invoice. See [InvoiceStatus](#type-invoicestatus) for possible values
     * @type {string}
     * @memberof Invoice
     */
    
    @Field({ nullable: true })
    status?: string;
    /**
     * The time zone of the date values (for example, `due_date`) specified in the invoice.
     * @type {string}
     * @memberof Invoice
     */
    
    @Field({ nullable: true })
    timezone?: string;
    /**
     * The timestamp when the invoice was created, in RFC 3339 format.
     * @type {string}
     * @memberof Invoice
     */
    
    @Field({ nullable: true })
    created_at?: string;
    /**
     * The timestamp when the invoice was last updated, in RFC 3339 format.
     * @type {string}
     * @memberof Invoice
     */
    
    @Field({ nullable: true })
    updated_at?: string;
}



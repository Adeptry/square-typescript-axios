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
import { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { GetBankAccountByV1IdResponse } from '../models';
import { GetBankAccountResponse } from '../models';
import { ListBankAccountsResponse } from '../models';
/**
 * BankAccountsApi - axios parameter creator
 * @export
 */
export declare const BankAccountsApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     * Returns details of a [BankAccount](#type-bankaccount)  linked to a Square account.
     * @summary GetBankAccount
     * @param {string} bankAccountId Square-issued ID of the desired &#x60;BankAccount&#x60;.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getBankAccount: (bankAccountId: string, options?: any) => Promise<RequestArgs>;
    /**
     * Returns details of a [BankAccount](#type-bankaccount) identified by V1 bank account ID.
     * @summary GetBankAccountByV1Id
     * @param {string} v1BankAccountId Connect V1 ID of the desired &#x60;BankAccount&#x60;. For more information, see  [Retrieve a bank account by using an ID issued by V1 Bank Accounts API](https://developer.squareup.com/docs/docs/bank-accounts-api#retrieve-a-bank-account-by-using-an-id-issued-by-v1-bank-accounts-api).
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getBankAccountByV1Id: (v1BankAccountId: string, options?: any) => Promise<RequestArgs>;
    /**
     * Returns a list of [BankAccount](#type-bankaccount) objects linked to a Square account.
     * @summary ListBankAccounts
     * @param {string} [cursor] The pagination cursor returned by a previous call to this endpoint. Use it in the next &#x60;ListBankAccounts&#x60; request to retrieve the next set  of results.  See the [Pagination](https://developer.squareup.com/docs/docs/working-with-apis/pagination) guide for more information.
     * @param {number} [limit] Upper limit on the number of bank accounts to return in the response.  Currently, 1000 is the largest supported limit. You can specify a limit  of up to 1000 bank accounts. This is also the default limit.
     * @param {string} [locationId] Location ID. You can specify this optional filter  to retrieve only the linked bank accounts belonging to a specific location.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listBankAccounts: (cursor?: string, limit?: number, locationId?: string, options?: any) => Promise<RequestArgs>;
};
/**
 * BankAccountsApi - functional programming interface
 * @export
 */
export declare const BankAccountsApiFp: (configuration?: Configuration) => {
    /**
     * Returns details of a [BankAccount](#type-bankaccount)  linked to a Square account.
     * @summary GetBankAccount
     * @param {string} bankAccountId Square-issued ID of the desired &#x60;BankAccount&#x60;.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getBankAccount(bankAccountId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetBankAccountResponse>>;
    /**
     * Returns details of a [BankAccount](#type-bankaccount) identified by V1 bank account ID.
     * @summary GetBankAccountByV1Id
     * @param {string} v1BankAccountId Connect V1 ID of the desired &#x60;BankAccount&#x60;. For more information, see  [Retrieve a bank account by using an ID issued by V1 Bank Accounts API](https://developer.squareup.com/docs/docs/bank-accounts-api#retrieve-a-bank-account-by-using-an-id-issued-by-v1-bank-accounts-api).
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getBankAccountByV1Id(v1BankAccountId: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetBankAccountByV1IdResponse>>;
    /**
     * Returns a list of [BankAccount](#type-bankaccount) objects linked to a Square account.
     * @summary ListBankAccounts
     * @param {string} [cursor] The pagination cursor returned by a previous call to this endpoint. Use it in the next &#x60;ListBankAccounts&#x60; request to retrieve the next set  of results.  See the [Pagination](https://developer.squareup.com/docs/docs/working-with-apis/pagination) guide for more information.
     * @param {number} [limit] Upper limit on the number of bank accounts to return in the response.  Currently, 1000 is the largest supported limit. You can specify a limit  of up to 1000 bank accounts. This is also the default limit.
     * @param {string} [locationId] Location ID. You can specify this optional filter  to retrieve only the linked bank accounts belonging to a specific location.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listBankAccounts(cursor?: string, limit?: number, locationId?: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ListBankAccountsResponse>>;
};
/**
 * BankAccountsApi - factory interface
 * @export
 */
export declare const BankAccountsApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     * Returns details of a [BankAccount](#type-bankaccount)  linked to a Square account.
     * @summary GetBankAccount
     * @param {string} bankAccountId Square-issued ID of the desired &#x60;BankAccount&#x60;.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getBankAccount(bankAccountId: string, options?: any): AxiosPromise<GetBankAccountResponse>;
    /**
     * Returns details of a [BankAccount](#type-bankaccount) identified by V1 bank account ID.
     * @summary GetBankAccountByV1Id
     * @param {string} v1BankAccountId Connect V1 ID of the desired &#x60;BankAccount&#x60;. For more information, see  [Retrieve a bank account by using an ID issued by V1 Bank Accounts API](https://developer.squareup.com/docs/docs/bank-accounts-api#retrieve-a-bank-account-by-using-an-id-issued-by-v1-bank-accounts-api).
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getBankAccountByV1Id(v1BankAccountId: string, options?: any): AxiosPromise<GetBankAccountByV1IdResponse>;
    /**
     * Returns a list of [BankAccount](#type-bankaccount) objects linked to a Square account.
     * @summary ListBankAccounts
     * @param {string} [cursor] The pagination cursor returned by a previous call to this endpoint. Use it in the next &#x60;ListBankAccounts&#x60; request to retrieve the next set  of results.  See the [Pagination](https://developer.squareup.com/docs/docs/working-with-apis/pagination) guide for more information.
     * @param {number} [limit] Upper limit on the number of bank accounts to return in the response.  Currently, 1000 is the largest supported limit. You can specify a limit  of up to 1000 bank accounts. This is also the default limit.
     * @param {string} [locationId] Location ID. You can specify this optional filter  to retrieve only the linked bank accounts belonging to a specific location.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listBankAccounts(cursor?: string, limit?: number, locationId?: string, options?: any): AxiosPromise<ListBankAccountsResponse>;
};
/**
 * BankAccountsApi - object-oriented interface
 * @export
 * @class BankAccountsApi
 * @extends {BaseAPI}
 */
export declare class BankAccountsApi extends BaseAPI {
    /**
     * Returns details of a [BankAccount](#type-bankaccount)  linked to a Square account.
     * @summary GetBankAccount
     * @param {string} bankAccountId Square-issued ID of the desired &#x60;BankAccount&#x60;.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BankAccountsApi
     */
    getBankAccount(bankAccountId: string, options?: any): Promise<import("axios").AxiosResponse<GetBankAccountResponse>>;
    /**
     * Returns details of a [BankAccount](#type-bankaccount) identified by V1 bank account ID.
     * @summary GetBankAccountByV1Id
     * @param {string} v1BankAccountId Connect V1 ID of the desired &#x60;BankAccount&#x60;. For more information, see  [Retrieve a bank account by using an ID issued by V1 Bank Accounts API](https://developer.squareup.com/docs/docs/bank-accounts-api#retrieve-a-bank-account-by-using-an-id-issued-by-v1-bank-accounts-api).
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BankAccountsApi
     */
    getBankAccountByV1Id(v1BankAccountId: string, options?: any): Promise<import("axios").AxiosResponse<GetBankAccountByV1IdResponse>>;
    /**
     * Returns a list of [BankAccount](#type-bankaccount) objects linked to a Square account.
     * @summary ListBankAccounts
     * @param {string} [cursor] The pagination cursor returned by a previous call to this endpoint. Use it in the next &#x60;ListBankAccounts&#x60; request to retrieve the next set  of results.  See the [Pagination](https://developer.squareup.com/docs/docs/working-with-apis/pagination) guide for more information.
     * @param {number} [limit] Upper limit on the number of bank accounts to return in the response.  Currently, 1000 is the largest supported limit. You can specify a limit  of up to 1000 bank accounts. This is also the default limit.
     * @param {string} [locationId] Location ID. You can specify this optional filter  to retrieve only the linked bank accounts belonging to a specific location.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BankAccountsApi
     */
    listBankAccounts(cursor?: string, limit?: number, locationId?: string, options?: any): Promise<import("axios").AxiosResponse<ListBankAccountsResponse>>;
}

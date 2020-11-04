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


import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { CreateCheckoutRequest } from '../models';
// @ts-ignore
import { CreateCheckoutResponse } from '../models';
/**
 * CheckoutApi - axios parameter creator
 * @export
 */
export const CheckoutApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Links a `checkoutId` to a `checkout_page_url` that customers will be directed to in order to provide their payment information using a payment processing workflow hosted on connect.squareup.com.
         * @summary CreateCheckout
         * @param {string} locationId The ID of the business location to associate the checkout with.
         * @param {CreateCheckoutRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createCheckout: async (locationId: string, body: CreateCheckoutRequest, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'locationId' is not null or undefined
            if (locationId === null || locationId === undefined) {
                throw new RequiredError('locationId','Required parameter locationId was null or undefined when calling createCheckout.');
            }
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling createCheckout.');
            }
            const localVarPath = `/v2/locations/{location_id}/checkouts`
                .replace(`{${"location_id"}}`, encodeURIComponent(String(locationId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://connect.squareupsandbox.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication oauth2 required
            // oauth required
            if (configuration && configuration.accessToken) {
                const localVarAccessTokenValue = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken("oauth2", ["PAYMENTS_WRITE", "ORDERS_WRITE"])
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            const queryParameters = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                queryParameters.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                queryParameters.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") && configuration.isJsonMime(localVarRequestOptions.headers['Content-Type']);
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * CheckoutApi - functional programming interface
 * @export
 */
export const CheckoutApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Links a `checkoutId` to a `checkout_page_url` that customers will be directed to in order to provide their payment information using a payment processing workflow hosted on connect.squareup.com.
         * @summary CreateCheckout
         * @param {string} locationId The ID of the business location to associate the checkout with.
         * @param {CreateCheckoutRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createCheckout(locationId: string, body: CreateCheckoutRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CreateCheckoutResponse>> {
            const localVarAxiosArgs = await CheckoutApiAxiosParamCreator(configuration).createCheckout(locationId, body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * CheckoutApi - factory interface
 * @export
 */
export const CheckoutApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Links a `checkoutId` to a `checkout_page_url` that customers will be directed to in order to provide their payment information using a payment processing workflow hosted on connect.squareup.com.
         * @summary CreateCheckout
         * @param {string} locationId The ID of the business location to associate the checkout with.
         * @param {CreateCheckoutRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createCheckout(locationId: string, body: CreateCheckoutRequest, options?: any): AxiosPromise<CreateCheckoutResponse> {
            return CheckoutApiFp(configuration).createCheckout(locationId, body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * CheckoutApi - object-oriented interface
 * @export
 * @class CheckoutApi
 * @extends {BaseAPI}
 */
export class CheckoutApi extends BaseAPI {
    /**
     * Links a `checkoutId` to a `checkout_page_url` that customers will be directed to in order to provide their payment information using a payment processing workflow hosted on connect.squareup.com.
     * @summary CreateCheckout
     * @param {string} locationId The ID of the business location to associate the checkout with.
     * @param {CreateCheckoutRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CheckoutApi
     */
    public createCheckout(locationId: string, body: CreateCheckoutRequest, options?: any) {
        return CheckoutApiFp(this.configuration).createCheckout(locationId, body, options).then((request) => request(this.axios, this.basePath));
    }
}

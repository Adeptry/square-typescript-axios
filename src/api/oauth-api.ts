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
import { ObtainTokenRequest } from '../models';
// @ts-ignore
import { ObtainTokenResponse } from '../models';
// @ts-ignore
import { RenewTokenRequest } from '../models';
// @ts-ignore
import { RenewTokenResponse } from '../models';
// @ts-ignore
import { RevokeTokenRequest } from '../models';
// @ts-ignore
import { RevokeTokenResponse } from '../models';
/**
 * OAuthApi - axios parameter creator
 * @export
 */
export const OAuthApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Returns an OAuth access token.  The endpoint supports distinct methods of obtaining OAuth access tokens. Applications specify a method by adding the `grant_type` parameter in the request and also provide relevant information. For more information, see [OAuth access token management](/authz/oauth/how-it-works#oauth-access-token-management).  __Note:__ Regardless of the method application specified, the endpoint always returns two items; an OAuth access token and a refresh token in the response.  __OAuth tokens should only live on secure servers. Application clients should never interact directly with OAuth tokens__.
         * @summary ObtainToken
         * @param {ObtainTokenRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        obtainToken: async (body: ObtainTokenRequest, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling obtainToken.');
            }
            const localVarPath = `/oauth2/token`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
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
        /**
         * `RenewToken` is deprecated. For information about refreshing OAuth access tokens, see [Renew OAuth Token](https://developer.squareup.com/docs/oauth-api/cookbook/renew-oauth-tokens).   Renews an OAuth access token before it expires.  OAuth access tokens besides your application\'s personal access token expire after __30 days__. You can also renew expired tokens within __15 days__ of their expiration. You cannot renew an access token that has been expired for more than 15 days. Instead, the associated user must re-complete the OAuth flow from the beginning.  __Important:__ The `Authorization` header for this endpoint must have the following format:  ``` Authorization: Client APPLICATION_SECRET ```  Replace `APPLICATION_SECRET` with the application secret on the Credentials page in the [application dashboard](https://connect.squareup.com/apps).
         * @summary RenewToken
         * @param {string} clientId Your application ID, available from the [application dashboard](https://connect.squareup.com/apps).
         * @param {RenewTokenRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        renewToken: async (clientId: string, body: RenewTokenRequest, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'clientId' is not null or undefined
            if (clientId === null || clientId === undefined) {
                throw new RequiredError('clientId','Required parameter clientId was null or undefined when calling renewToken.');
            }
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling renewToken.');
            }
            const localVarPath = `/oauth2/clients/{client_id}/access-token/renew`
                .replace(`{${"client_id"}}`, encodeURIComponent(String(clientId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication oauth2ClientSecret required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("Authorization")
                    : await configuration.apiKey;
                localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
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
        /**
         * Revokes an access token generated with the OAuth flow.  If an account has more than one OAuth access token for your application, this endpoint revokes all of them, regardless of which token you specify. When an OAuth access token is revoked, all of the active subscriptions associated with that OAuth token are canceled immediately.  __Important:__ The `Authorization` header for this endpoint must have the following format:  ``` Authorization: Client APPLICATION_SECRET ```  Replace `APPLICATION_SECRET` with the application secret on the Credentials page in the [application dashboard](https://connect.squareup.com/apps).
         * @summary RevokeToken
         * @param {RevokeTokenRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        revokeToken: async (body: RevokeTokenRequest, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling revokeToken.');
            }
            const localVarPath = `/oauth2/revoke`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication oauth2ClientSecret required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("Authorization")
                    : await configuration.apiKey;
                localVarHeaderParameter["Authorization"] = localVarApiKeyValue;
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
 * OAuthApi - functional programming interface
 * @export
 */
export const OAuthApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Returns an OAuth access token.  The endpoint supports distinct methods of obtaining OAuth access tokens. Applications specify a method by adding the `grant_type` parameter in the request and also provide relevant information. For more information, see [OAuth access token management](/authz/oauth/how-it-works#oauth-access-token-management).  __Note:__ Regardless of the method application specified, the endpoint always returns two items; an OAuth access token and a refresh token in the response.  __OAuth tokens should only live on secure servers. Application clients should never interact directly with OAuth tokens__.
         * @summary ObtainToken
         * @param {ObtainTokenRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async obtainToken(body: ObtainTokenRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ObtainTokenResponse>> {
            const localVarAxiosArgs = await OAuthApiAxiosParamCreator(configuration).obtainToken(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * `RenewToken` is deprecated. For information about refreshing OAuth access tokens, see [Renew OAuth Token](https://developer.squareup.com/docs/oauth-api/cookbook/renew-oauth-tokens).   Renews an OAuth access token before it expires.  OAuth access tokens besides your application\'s personal access token expire after __30 days__. You can also renew expired tokens within __15 days__ of their expiration. You cannot renew an access token that has been expired for more than 15 days. Instead, the associated user must re-complete the OAuth flow from the beginning.  __Important:__ The `Authorization` header for this endpoint must have the following format:  ``` Authorization: Client APPLICATION_SECRET ```  Replace `APPLICATION_SECRET` with the application secret on the Credentials page in the [application dashboard](https://connect.squareup.com/apps).
         * @summary RenewToken
         * @param {string} clientId Your application ID, available from the [application dashboard](https://connect.squareup.com/apps).
         * @param {RenewTokenRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async renewToken(clientId: string, body: RenewTokenRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RenewTokenResponse>> {
            const localVarAxiosArgs = await OAuthApiAxiosParamCreator(configuration).renewToken(clientId, body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Revokes an access token generated with the OAuth flow.  If an account has more than one OAuth access token for your application, this endpoint revokes all of them, regardless of which token you specify. When an OAuth access token is revoked, all of the active subscriptions associated with that OAuth token are canceled immediately.  __Important:__ The `Authorization` header for this endpoint must have the following format:  ``` Authorization: Client APPLICATION_SECRET ```  Replace `APPLICATION_SECRET` with the application secret on the Credentials page in the [application dashboard](https://connect.squareup.com/apps).
         * @summary RevokeToken
         * @param {RevokeTokenRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async revokeToken(body: RevokeTokenRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RevokeTokenResponse>> {
            const localVarAxiosArgs = await OAuthApiAxiosParamCreator(configuration).revokeToken(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * OAuthApi - factory interface
 * @export
 */
export const OAuthApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Returns an OAuth access token.  The endpoint supports distinct methods of obtaining OAuth access tokens. Applications specify a method by adding the `grant_type` parameter in the request and also provide relevant information. For more information, see [OAuth access token management](/authz/oauth/how-it-works#oauth-access-token-management).  __Note:__ Regardless of the method application specified, the endpoint always returns two items; an OAuth access token and a refresh token in the response.  __OAuth tokens should only live on secure servers. Application clients should never interact directly with OAuth tokens__.
         * @summary ObtainToken
         * @param {ObtainTokenRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        obtainToken(body: ObtainTokenRequest, options?: any): AxiosPromise<ObtainTokenResponse> {
            return OAuthApiFp(configuration).obtainToken(body, options).then((request) => request(axios, basePath));
        },
        /**
         * `RenewToken` is deprecated. For information about refreshing OAuth access tokens, see [Renew OAuth Token](https://developer.squareup.com/docs/oauth-api/cookbook/renew-oauth-tokens).   Renews an OAuth access token before it expires.  OAuth access tokens besides your application\'s personal access token expire after __30 days__. You can also renew expired tokens within __15 days__ of their expiration. You cannot renew an access token that has been expired for more than 15 days. Instead, the associated user must re-complete the OAuth flow from the beginning.  __Important:__ The `Authorization` header for this endpoint must have the following format:  ``` Authorization: Client APPLICATION_SECRET ```  Replace `APPLICATION_SECRET` with the application secret on the Credentials page in the [application dashboard](https://connect.squareup.com/apps).
         * @summary RenewToken
         * @param {string} clientId Your application ID, available from the [application dashboard](https://connect.squareup.com/apps).
         * @param {RenewTokenRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        renewToken(clientId: string, body: RenewTokenRequest, options?: any): AxiosPromise<RenewTokenResponse> {
            return OAuthApiFp(configuration).renewToken(clientId, body, options).then((request) => request(axios, basePath));
        },
        /**
         * Revokes an access token generated with the OAuth flow.  If an account has more than one OAuth access token for your application, this endpoint revokes all of them, regardless of which token you specify. When an OAuth access token is revoked, all of the active subscriptions associated with that OAuth token are canceled immediately.  __Important:__ The `Authorization` header for this endpoint must have the following format:  ``` Authorization: Client APPLICATION_SECRET ```  Replace `APPLICATION_SECRET` with the application secret on the Credentials page in the [application dashboard](https://connect.squareup.com/apps).
         * @summary RevokeToken
         * @param {RevokeTokenRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        revokeToken(body: RevokeTokenRequest, options?: any): AxiosPromise<RevokeTokenResponse> {
            return OAuthApiFp(configuration).revokeToken(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * OAuthApi - object-oriented interface
 * @export
 * @class OAuthApi
 * @extends {BaseAPI}
 */
export class OAuthApi extends BaseAPI {
    /**
     * Returns an OAuth access token.  The endpoint supports distinct methods of obtaining OAuth access tokens. Applications specify a method by adding the `grant_type` parameter in the request and also provide relevant information. For more information, see [OAuth access token management](/authz/oauth/how-it-works#oauth-access-token-management).  __Note:__ Regardless of the method application specified, the endpoint always returns two items; an OAuth access token and a refresh token in the response.  __OAuth tokens should only live on secure servers. Application clients should never interact directly with OAuth tokens__.
     * @summary ObtainToken
     * @param {ObtainTokenRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OAuthApi
     */
    public obtainToken(body: ObtainTokenRequest, options?: any) {
        return OAuthApiFp(this.configuration).obtainToken(body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * `RenewToken` is deprecated. For information about refreshing OAuth access tokens, see [Renew OAuth Token](https://developer.squareup.com/docs/oauth-api/cookbook/renew-oauth-tokens).   Renews an OAuth access token before it expires.  OAuth access tokens besides your application\'s personal access token expire after __30 days__. You can also renew expired tokens within __15 days__ of their expiration. You cannot renew an access token that has been expired for more than 15 days. Instead, the associated user must re-complete the OAuth flow from the beginning.  __Important:__ The `Authorization` header for this endpoint must have the following format:  ``` Authorization: Client APPLICATION_SECRET ```  Replace `APPLICATION_SECRET` with the application secret on the Credentials page in the [application dashboard](https://connect.squareup.com/apps).
     * @summary RenewToken
     * @param {string} clientId Your application ID, available from the [application dashboard](https://connect.squareup.com/apps).
     * @param {RenewTokenRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OAuthApi
     */
    public renewToken(clientId: string, body: RenewTokenRequest, options?: any) {
        return OAuthApiFp(this.configuration).renewToken(clientId, body, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Revokes an access token generated with the OAuth flow.  If an account has more than one OAuth access token for your application, this endpoint revokes all of them, regardless of which token you specify. When an OAuth access token is revoked, all of the active subscriptions associated with that OAuth token are canceled immediately.  __Important:__ The `Authorization` header for this endpoint must have the following format:  ``` Authorization: Client APPLICATION_SECRET ```  Replace `APPLICATION_SECRET` with the application secret on the Credentials page in the [application dashboard](https://connect.squareup.com/apps).
     * @summary RevokeToken
     * @param {RevokeTokenRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OAuthApi
     */
    public revokeToken(body: RevokeTokenRequest, options?: any) {
        return OAuthApiFp(this.configuration).revokeToken(body, options).then((request) => request(this.axios, this.basePath));
    }
}
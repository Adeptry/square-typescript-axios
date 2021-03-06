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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplePayApi = exports.ApplePayApiFactory = exports.ApplePayApiFp = exports.ApplePayApiAxiosParamCreator = void 0;
var axios_1 = __importDefault(require("axios"));
// Some imports not used depending on template conditions
// @ts-ignore
var base_1 = require("../base");
/**
 * ApplePayApi - axios parameter creator
 * @export
 */
exports.ApplePayApiAxiosParamCreator = function (configuration) {
    var _this = this;
    return {
        /**
         * Activates a domain for use with Web Apple Pay and Square. A validation will be performed on this domain by Apple to ensure is it properly set up as an Apple Pay enabled domain.  This endpoint provides an easy way for platform developers to bulk activate Web Apple Pay with Square for merchants using their platform.  To learn more about Apple Pay on Web see the Apple Pay section in the [Square Payment Form Walkthrough](/docs/payment-form/payment-form-walkthrough).
         * @summary RegisterDomain
         * @param {RegisterDomainRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        registerDomain: function (body, options) {
            if (options === void 0) { options = {}; }
            return __awaiter(_this, void 0, void 0, function () {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, localVarAccessTokenValue, _a, queryParameters, key, key, headersFromBaseOptions, needsSerialization;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            // verify required parameter 'body' is not null or undefined
                            if (body === null || body === undefined) {
                                throw new base_1.RequiredError('body', 'Required parameter body was null or undefined when calling registerDomain.');
                            }
                            localVarPath = "/v2/apple-pay/domains";
                            localVarUrlObj = new URL(localVarPath, 'https://connect.squareupsandbox.com');
                            if (configuration) {
                                baseOptions = configuration.baseOptions;
                            }
                            localVarRequestOptions = __assign(__assign({ method: 'POST' }, baseOptions), options);
                            localVarHeaderParameter = {};
                            localVarQueryParameter = {};
                            if (!(configuration && configuration.accessToken)) return [3 /*break*/, 5];
                            if (!(typeof configuration.accessToken === 'function')) return [3 /*break*/, 2];
                            return [4 /*yield*/, configuration.accessToken("oauth2", [])];
                        case 1:
                            _a = _b.sent();
                            return [3 /*break*/, 4];
                        case 2: return [4 /*yield*/, configuration.accessToken];
                        case 3:
                            _a = _b.sent();
                            _b.label = 4;
                        case 4:
                            localVarAccessTokenValue = _a;
                            localVarHeaderParameter["Authorization"] = "Bearer " + localVarAccessTokenValue;
                            _b.label = 5;
                        case 5:
                            localVarHeaderParameter['Content-Type'] = 'application/json';
                            queryParameters = new URLSearchParams(localVarUrlObj.search);
                            for (key in localVarQueryParameter) {
                                queryParameters.set(key, localVarQueryParameter[key]);
                            }
                            for (key in options.query) {
                                queryParameters.set(key, options.query[key]);
                            }
                            localVarUrlObj.search = (new URLSearchParams(queryParameters)).toString();
                            headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                            localVarRequestOptions.headers = __assign(__assign(__assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
                            needsSerialization = (typeof body !== "string") && configuration.isJsonMime(localVarRequestOptions.headers['Content-Type']);
                            localVarRequestOptions.data = needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");
                            return [2 /*return*/, {
                                    url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                                    options: localVarRequestOptions,
                                }];
                    }
                });
            });
        },
    };
};
/**
 * ApplePayApi - functional programming interface
 * @export
 */
exports.ApplePayApiFp = function (configuration) {
    return {
        /**
         * Activates a domain for use with Web Apple Pay and Square. A validation will be performed on this domain by Apple to ensure is it properly set up as an Apple Pay enabled domain.  This endpoint provides an easy way for platform developers to bulk activate Web Apple Pay with Square for merchants using their platform.  To learn more about Apple Pay on Web see the Apple Pay section in the [Square Payment Form Walkthrough](/docs/payment-form/payment-form-walkthrough).
         * @summary RegisterDomain
         * @param {RegisterDomainRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        registerDomain: function (body, options) {
            return __awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, exports.ApplePayApiAxiosParamCreator(configuration).registerDomain(body, options)];
                        case 1:
                            localVarAxiosArgs = _a.sent();
                            return [2 /*return*/, function (axios, basePath) {
                                    if (axios === void 0) { axios = axios_1.default; }
                                    if (basePath === void 0) { basePath = base_1.BASE_PATH; }
                                    var axiosRequestArgs = __assign(__assign({}, localVarAxiosArgs.options), { url: basePath + localVarAxiosArgs.url });
                                    return axios.request(axiosRequestArgs);
                                }];
                    }
                });
            });
        },
    };
};
/**
 * ApplePayApi - factory interface
 * @export
 */
exports.ApplePayApiFactory = function (configuration, basePath, axios) {
    return {
        /**
         * Activates a domain for use with Web Apple Pay and Square. A validation will be performed on this domain by Apple to ensure is it properly set up as an Apple Pay enabled domain.  This endpoint provides an easy way for platform developers to bulk activate Web Apple Pay with Square for merchants using their platform.  To learn more about Apple Pay on Web see the Apple Pay section in the [Square Payment Form Walkthrough](/docs/payment-form/payment-form-walkthrough).
         * @summary RegisterDomain
         * @param {RegisterDomainRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        registerDomain: function (body, options) {
            return exports.ApplePayApiFp(configuration).registerDomain(body, options).then(function (request) { return request(axios, basePath); });
        },
    };
};
/**
 * ApplePayApi - object-oriented interface
 * @export
 * @class ApplePayApi
 * @extends {BaseAPI}
 */
var ApplePayApi = /** @class */ (function (_super) {
    __extends(ApplePayApi, _super);
    function ApplePayApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Activates a domain for use with Web Apple Pay and Square. A validation will be performed on this domain by Apple to ensure is it properly set up as an Apple Pay enabled domain.  This endpoint provides an easy way for platform developers to bulk activate Web Apple Pay with Square for merchants using their platform.  To learn more about Apple Pay on Web see the Apple Pay section in the [Square Payment Form Walkthrough](/docs/payment-form/payment-form-walkthrough).
     * @summary RegisterDomain
     * @param {RegisterDomainRequest} body An object containing the fields to POST for the request.  See the corresponding object definition for field details.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ApplePayApi
     */
    ApplePayApi.prototype.registerDomain = function (body, options) {
        var _this = this;
        return exports.ApplePayApiFp(this.configuration).registerDomain(body, options).then(function (request) { return request(_this.axios, _this.basePath); });
    };
    return ApplePayApi;
}(base_1.BaseAPI));
exports.ApplePayApi = ApplePayApi;

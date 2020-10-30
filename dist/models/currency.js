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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Currency = void 0;
/**
 * Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://wikipedia.org/wiki/ISO_4217).
 * @export
 * @enum {string}
 */
var Currency;
(function (Currency) {
    Currency["UNKNOWNCURRENCY"] = "UNKNOWN_CURRENCY";
    Currency["AED"] = "AED";
    Currency["AFN"] = "AFN";
    Currency["ALL"] = "ALL";
    Currency["AMD"] = "AMD";
    Currency["ANG"] = "ANG";
    Currency["AOA"] = "AOA";
    Currency["ARS"] = "ARS";
    Currency["AUD"] = "AUD";
    Currency["AWG"] = "AWG";
    Currency["AZN"] = "AZN";
    Currency["BAM"] = "BAM";
    Currency["BBD"] = "BBD";
    Currency["BDT"] = "BDT";
    Currency["BGN"] = "BGN";
    Currency["BHD"] = "BHD";
    Currency["BIF"] = "BIF";
    Currency["BMD"] = "BMD";
    Currency["BND"] = "BND";
    Currency["BOB"] = "BOB";
    Currency["BOV"] = "BOV";
    Currency["BRL"] = "BRL";
    Currency["BSD"] = "BSD";
    Currency["BTN"] = "BTN";
    Currency["BWP"] = "BWP";
    Currency["BYR"] = "BYR";
    Currency["BZD"] = "BZD";
    Currency["CAD"] = "CAD";
    Currency["CDF"] = "CDF";
    Currency["CHE"] = "CHE";
    Currency["CHF"] = "CHF";
    Currency["CHW"] = "CHW";
    Currency["CLF"] = "CLF";
    Currency["CLP"] = "CLP";
    Currency["CNY"] = "CNY";
    Currency["COP"] = "COP";
    Currency["COU"] = "COU";
    Currency["CRC"] = "CRC";
    Currency["CUC"] = "CUC";
    Currency["CUP"] = "CUP";
    Currency["CVE"] = "CVE";
    Currency["CZK"] = "CZK";
    Currency["DJF"] = "DJF";
    Currency["DKK"] = "DKK";
    Currency["DOP"] = "DOP";
    Currency["DZD"] = "DZD";
    Currency["EGP"] = "EGP";
    Currency["ERN"] = "ERN";
    Currency["ETB"] = "ETB";
    Currency["EUR"] = "EUR";
    Currency["FJD"] = "FJD";
    Currency["FKP"] = "FKP";
    Currency["GBP"] = "GBP";
    Currency["GEL"] = "GEL";
    Currency["GHS"] = "GHS";
    Currency["GIP"] = "GIP";
    Currency["GMD"] = "GMD";
    Currency["GNF"] = "GNF";
    Currency["GTQ"] = "GTQ";
    Currency["GYD"] = "GYD";
    Currency["HKD"] = "HKD";
    Currency["HNL"] = "HNL";
    Currency["HRK"] = "HRK";
    Currency["HTG"] = "HTG";
    Currency["HUF"] = "HUF";
    Currency["IDR"] = "IDR";
    Currency["ILS"] = "ILS";
    Currency["INR"] = "INR";
    Currency["IQD"] = "IQD";
    Currency["IRR"] = "IRR";
    Currency["ISK"] = "ISK";
    Currency["JMD"] = "JMD";
    Currency["JOD"] = "JOD";
    Currency["JPY"] = "JPY";
    Currency["KES"] = "KES";
    Currency["KGS"] = "KGS";
    Currency["KHR"] = "KHR";
    Currency["KMF"] = "KMF";
    Currency["KPW"] = "KPW";
    Currency["KRW"] = "KRW";
    Currency["KWD"] = "KWD";
    Currency["KYD"] = "KYD";
    Currency["KZT"] = "KZT";
    Currency["LAK"] = "LAK";
    Currency["LBP"] = "LBP";
    Currency["LKR"] = "LKR";
    Currency["LRD"] = "LRD";
    Currency["LSL"] = "LSL";
    Currency["LTL"] = "LTL";
    Currency["LVL"] = "LVL";
    Currency["LYD"] = "LYD";
    Currency["MAD"] = "MAD";
    Currency["MDL"] = "MDL";
    Currency["MGA"] = "MGA";
    Currency["MKD"] = "MKD";
    Currency["MMK"] = "MMK";
    Currency["MNT"] = "MNT";
    Currency["MOP"] = "MOP";
    Currency["MRO"] = "MRO";
    Currency["MUR"] = "MUR";
    Currency["MVR"] = "MVR";
    Currency["MWK"] = "MWK";
    Currency["MXN"] = "MXN";
    Currency["MXV"] = "MXV";
    Currency["MYR"] = "MYR";
    Currency["MZN"] = "MZN";
    Currency["NAD"] = "NAD";
    Currency["NGN"] = "NGN";
    Currency["NIO"] = "NIO";
    Currency["NOK"] = "NOK";
    Currency["NPR"] = "NPR";
    Currency["NZD"] = "NZD";
    Currency["OMR"] = "OMR";
    Currency["PAB"] = "PAB";
    Currency["PEN"] = "PEN";
    Currency["PGK"] = "PGK";
    Currency["PHP"] = "PHP";
    Currency["PKR"] = "PKR";
    Currency["PLN"] = "PLN";
    Currency["PYG"] = "PYG";
    Currency["QAR"] = "QAR";
    Currency["RON"] = "RON";
    Currency["RSD"] = "RSD";
    Currency["RUB"] = "RUB";
    Currency["RWF"] = "RWF";
    Currency["SAR"] = "SAR";
    Currency["SBD"] = "SBD";
    Currency["SCR"] = "SCR";
    Currency["SDG"] = "SDG";
    Currency["SEK"] = "SEK";
    Currency["SGD"] = "SGD";
    Currency["SHP"] = "SHP";
    Currency["SLL"] = "SLL";
    Currency["SOS"] = "SOS";
    Currency["SRD"] = "SRD";
    Currency["SSP"] = "SSP";
    Currency["STD"] = "STD";
    Currency["SVC"] = "SVC";
    Currency["SYP"] = "SYP";
    Currency["SZL"] = "SZL";
    Currency["THB"] = "THB";
    Currency["TJS"] = "TJS";
    Currency["TMT"] = "TMT";
    Currency["TND"] = "TND";
    Currency["TOP"] = "TOP";
    Currency["TRY"] = "TRY";
    Currency["TTD"] = "TTD";
    Currency["TWD"] = "TWD";
    Currency["TZS"] = "TZS";
    Currency["UAH"] = "UAH";
    Currency["UGX"] = "UGX";
    Currency["USD"] = "USD";
    Currency["USN"] = "USN";
    Currency["USS"] = "USS";
    Currency["UYI"] = "UYI";
    Currency["UYU"] = "UYU";
    Currency["UZS"] = "UZS";
    Currency["VEF"] = "VEF";
    Currency["VND"] = "VND";
    Currency["VUV"] = "VUV";
    Currency["WST"] = "WST";
    Currency["XAF"] = "XAF";
    Currency["XAG"] = "XAG";
    Currency["XAU"] = "XAU";
    Currency["XBA"] = "XBA";
    Currency["XBB"] = "XBB";
    Currency["XBC"] = "XBC";
    Currency["XBD"] = "XBD";
    Currency["XCD"] = "XCD";
    Currency["XDR"] = "XDR";
    Currency["XOF"] = "XOF";
    Currency["XPD"] = "XPD";
    Currency["XPF"] = "XPF";
    Currency["XPT"] = "XPT";
    Currency["XTS"] = "XTS";
    Currency["XXX"] = "XXX";
    Currency["YER"] = "YER";
    Currency["ZAR"] = "ZAR";
    Currency["ZMK"] = "ZMK";
    Currency["ZMW"] = "ZMW";
    Currency["BTC"] = "BTC";
})(Currency = exports.Currency || (exports.Currency = {}));
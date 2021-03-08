/// <reference path="./custom.d.ts" />
// tslint:disable
/**
 * ABCProduct
 * ABCProduct 在庫IDの検索API
 *
 * OpenAPI spec version: 0.1.9
 * 
 *
 * NOTE: This file is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the file manually.
 */

import * as url from "url";
import * as portableFetch from "portable-fetch";
import { Configuration } from "./configuration";

const BASE_PATH = "/".replace(/\/+$/, "");

/**
 *
 * @export
 */
export const COLLECTION_FORMATS = {
    csv: ",",
    ssv: " ",
    tsv: "\t",
    pipes: "|",
};

/**
 *
 * @export
 * @interface FetchAPI
 */
export interface FetchAPI {
    (url: string, init?: any): Promise<Response>;
}

/**
 *
 * @export
 * @interface FetchArgs
 */
export interface FetchArgs {
    url: string;
    options: any;
}

/**
 *
 * @export
 * @class BaseAPI
 */
export class BaseAPI {
    protected configuration: Configuration;

    constructor(configuration?: Configuration, protected basePath: string = BASE_PATH, protected fetch: FetchAPI = portableFetch) {
        if (configuration) {
            this.configuration = configuration;
            this.basePath = configuration.basePath || this.basePath;
        }
    }
};

/**
 *
 * @export
 * @class RequiredError
 * @extends {Error}
 */
export class RequiredError extends Error {
    name: "RequiredError"
    constructor(public field: string, msg?: string) {
        super(msg);
    }
}

/**
 * 
 * @export
 * @interface InlineResponse200
 */
export interface InlineResponse200 {
    /**
     * 
     * @type {number}
     * @memberof InlineResponse200
     */
    id?: number;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse200
     */
    itemId?: number;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse200
     */
    itemName?: string;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse200
     */
    warehouseId?: number;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse200
     */
    warehouseName?: string;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse200
     */
    counts?: number;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse200
     */
    price?: number;
}
/**
 * 
 * @export
 * @interface InlineResponse2001
 */
export interface InlineResponse2001 {
    /**
     * 
     * @type {number}
     * @memberof InlineResponse2001
     */
    deleteCount?: number;
}
/**
 * StockApi - fetch parameter creator
 * @export
 */
export const StockApiFetchParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 在庫詳細の取得
         * @summary 在庫詳細
         * @param {number} id 在庫ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        stockDeleteIdGet(id: number, options: any = {}): FetchArgs {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling stockDeleteIdGet.');
            }
            const localVarPath = `/stock/delete/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            const localVarUrlObj = url.parse(localVarPath, true) as any;
            const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 在庫詳細の取得
         * @summary 在庫詳細
         * @param {number} id 在庫ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        stockDetailIdGet(id: number, options: any = {}): FetchArgs {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling stockDetailIdGet.');
            }
            const localVarPath = `/stock/detail/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            const localVarUrlObj = url.parse(localVarPath, true) as any;
            const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 商品数の検索結果
         * @summary 商品数の検索
         * @param {number} counts 商品数
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        stockSearchCountsCountsGet(counts: number, options: any = {}): FetchArgs {
            // verify required parameter 'counts' is not null or undefined
            if (counts === null || counts === undefined) {
                throw new RequiredError('counts','Required parameter counts was null or undefined when calling stockSearchCountsCountsGet.');
            }
            const localVarPath = `/stock/search/counts/{counts}`
                .replace(`{${"counts"}}`, encodeURIComponent(String(counts)));
            const localVarUrlObj = url.parse(localVarPath, true) as any;
            const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 在庫IDの検索結果
         * @summary 在庫ID検索
         * @param {number} id 在庫ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        stockSearchIdIdGet(id: number, options: any = {}): FetchArgs {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling stockSearchIdIdGet.');
            }
            const localVarPath = `/stock/search/id/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            const localVarUrlObj = url.parse(localVarPath, true) as any;
            const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 商品名の検索結果
         * @summary 商品名の検索
         * @param {string} itemName 商品名
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        stockSearchItemNameItemNameGet(itemName: string, options: any = {}): FetchArgs {
            // verify required parameter 'itemName' is not null or undefined
            if (itemName === null || itemName === undefined) {
                throw new RequiredError('itemName','Required parameter itemName was null or undefined when calling stockSearchItemNameItemNameGet.');
            }
            const localVarPath = `/stock/search/itemName/{itemName}`
                .replace(`{${"itemName"}}`, encodeURIComponent(String(itemName)));
            const localVarUrlObj = url.parse(localVarPath, true) as any;
            const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 単価の検索結果
         * @summary 単価の検索
         * @param {number} price 単価
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        stockSearchPricePriceGet(price: number, options: any = {}): FetchArgs {
            // verify required parameter 'price' is not null or undefined
            if (price === null || price === undefined) {
                throw new RequiredError('price','Required parameter price was null or undefined when calling stockSearchPricePriceGet.');
            }
            const localVarPath = `/stock/search/price/{price}`
                .replace(`{${"price"}}`, encodeURIComponent(String(price)));
            const localVarUrlObj = url.parse(localVarPath, true) as any;
            const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 倉庫名の検索結果
         * @summary 倉庫名の検索
         * @param {string} warehouseName 倉庫名
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        stockSearchWarehouseNameWarehouseNameGet(warehouseName: string, options: any = {}): FetchArgs {
            // verify required parameter 'warehouseName' is not null or undefined
            if (warehouseName === null || warehouseName === undefined) {
                throw new RequiredError('warehouseName','Required parameter warehouseName was null or undefined when calling stockSearchWarehouseNameWarehouseNameGet.');
            }
            const localVarPath = `/stock/search/warehouseName/{warehouseName}`
                .replace(`{${"warehouseName"}}`, encodeURIComponent(String(warehouseName)));
            const localVarUrlObj = url.parse(localVarPath, true) as any;
            const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * StockApi - functional programming interface
 * @export
 */
export const StockApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 在庫詳細の取得
         * @summary 在庫詳細
         * @param {number} id 在庫ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        stockDeleteIdGet(id: number, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse2001> {
            const localVarFetchArgs = StockApiFetchParamCreator(configuration).stockDeleteIdGet(id, options);
            return (fetch: FetchAPI = portableFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
        /**
         * 在庫詳細の取得
         * @summary 在庫詳細
         * @param {number} id 在庫ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        stockDetailIdGet(id: number, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse200> {
            const localVarFetchArgs = StockApiFetchParamCreator(configuration).stockDetailIdGet(id, options);
            return (fetch: FetchAPI = portableFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
        /**
         * 商品数の検索結果
         * @summary 商品数の検索
         * @param {number} counts 商品数
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        stockSearchCountsCountsGet(counts: number, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse200> {
            const localVarFetchArgs = StockApiFetchParamCreator(configuration).stockSearchCountsCountsGet(counts, options);
            return (fetch: FetchAPI = portableFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
        /**
         * 在庫IDの検索結果
         * @summary 在庫ID検索
         * @param {number} id 在庫ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        stockSearchIdIdGet(id: number, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse200> {
            const localVarFetchArgs = StockApiFetchParamCreator(configuration).stockSearchIdIdGet(id, options);
            return (fetch: FetchAPI = portableFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
        /**
         * 商品名の検索結果
         * @summary 商品名の検索
         * @param {string} itemName 商品名
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        stockSearchItemNameItemNameGet(itemName: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse200> {
            const localVarFetchArgs = StockApiFetchParamCreator(configuration).stockSearchItemNameItemNameGet(itemName, options);
            return (fetch: FetchAPI = portableFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
        /**
         * 単価の検索結果
         * @summary 単価の検索
         * @param {number} price 単価
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        stockSearchPricePriceGet(price: number, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse200> {
            const localVarFetchArgs = StockApiFetchParamCreator(configuration).stockSearchPricePriceGet(price, options);
            return (fetch: FetchAPI = portableFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
        /**
         * 倉庫名の検索結果
         * @summary 倉庫名の検索
         * @param {string} warehouseName 倉庫名
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        stockSearchWarehouseNameWarehouseNameGet(warehouseName: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<InlineResponse200> {
            const localVarFetchArgs = StockApiFetchParamCreator(configuration).stockSearchWarehouseNameWarehouseNameGet(warehouseName, options);
            return (fetch: FetchAPI = portableFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
    }
};

/**
 * StockApi - factory interface
 * @export
 */
export const StockApiFactory = function (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) {
    return {
        /**
         * 在庫詳細の取得
         * @summary 在庫詳細
         * @param {number} id 在庫ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        stockDeleteIdGet(id: number, options?: any) {
            return StockApiFp(configuration).stockDeleteIdGet(id, options)(fetch, basePath);
        },
        /**
         * 在庫詳細の取得
         * @summary 在庫詳細
         * @param {number} id 在庫ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        stockDetailIdGet(id: number, options?: any) {
            return StockApiFp(configuration).stockDetailIdGet(id, options)(fetch, basePath);
        },
        /**
         * 商品数の検索結果
         * @summary 商品数の検索
         * @param {number} counts 商品数
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        stockSearchCountsCountsGet(counts: number, options?: any) {
            return StockApiFp(configuration).stockSearchCountsCountsGet(counts, options)(fetch, basePath);
        },
        /**
         * 在庫IDの検索結果
         * @summary 在庫ID検索
         * @param {number} id 在庫ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        stockSearchIdIdGet(id: number, options?: any) {
            return StockApiFp(configuration).stockSearchIdIdGet(id, options)(fetch, basePath);
        },
        /**
         * 商品名の検索結果
         * @summary 商品名の検索
         * @param {string} itemName 商品名
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        stockSearchItemNameItemNameGet(itemName: string, options?: any) {
            return StockApiFp(configuration).stockSearchItemNameItemNameGet(itemName, options)(fetch, basePath);
        },
        /**
         * 単価の検索結果
         * @summary 単価の検索
         * @param {number} price 単価
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        stockSearchPricePriceGet(price: number, options?: any) {
            return StockApiFp(configuration).stockSearchPricePriceGet(price, options)(fetch, basePath);
        },
        /**
         * 倉庫名の検索結果
         * @summary 倉庫名の検索
         * @param {string} warehouseName 倉庫名
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        stockSearchWarehouseNameWarehouseNameGet(warehouseName: string, options?: any) {
            return StockApiFp(configuration).stockSearchWarehouseNameWarehouseNameGet(warehouseName, options)(fetch, basePath);
        },
    };
};

/**
 * StockApi - object-oriented interface
 * @export
 * @class StockApi
 * @extends {BaseAPI}
 */
export class StockApi extends BaseAPI {
    /**
     * 在庫詳細の取得
     * @summary 在庫詳細
     * @param {number} id 在庫ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StockApi
     */
    public stockDeleteIdGet(id: number, options?: any) {
        return StockApiFp(this.configuration).stockDeleteIdGet(id, options)(this.fetch, this.basePath);
    }

    /**
     * 在庫詳細の取得
     * @summary 在庫詳細
     * @param {number} id 在庫ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StockApi
     */
    public stockDetailIdGet(id: number, options?: any) {
        return StockApiFp(this.configuration).stockDetailIdGet(id, options)(this.fetch, this.basePath);
    }

    /**
     * 商品数の検索結果
     * @summary 商品数の検索
     * @param {number} counts 商品数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StockApi
     */
    public stockSearchCountsCountsGet(counts: number, options?: any) {
        return StockApiFp(this.configuration).stockSearchCountsCountsGet(counts, options)(this.fetch, this.basePath);
    }

    /**
     * 在庫IDの検索結果
     * @summary 在庫ID検索
     * @param {number} id 在庫ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StockApi
     */
    public stockSearchIdIdGet(id: number, options?: any) {
        return StockApiFp(this.configuration).stockSearchIdIdGet(id, options)(this.fetch, this.basePath);
    }

    /**
     * 商品名の検索結果
     * @summary 商品名の検索
     * @param {string} itemName 商品名
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StockApi
     */
    public stockSearchItemNameItemNameGet(itemName: string, options?: any) {
        return StockApiFp(this.configuration).stockSearchItemNameItemNameGet(itemName, options)(this.fetch, this.basePath);
    }

    /**
     * 単価の検索結果
     * @summary 単価の検索
     * @param {number} price 単価
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StockApi
     */
    public stockSearchPricePriceGet(price: number, options?: any) {
        return StockApiFp(this.configuration).stockSearchPricePriceGet(price, options)(this.fetch, this.basePath);
    }

    /**
     * 倉庫名の検索結果
     * @summary 倉庫名の検索
     * @param {string} warehouseName 倉庫名
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StockApi
     */
    public stockSearchWarehouseNameWarehouseNameGet(warehouseName: string, options?: any) {
        return StockApiFp(this.configuration).stockSearchWarehouseNameWarehouseNameGet(warehouseName, options)(this.fetch, this.basePath);
    }

}


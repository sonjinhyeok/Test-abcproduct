'use strict';


/**
 * 在庫詳細
 * 在庫詳細の取得
 *
 * id Long 在庫ID
 * returns inline_response_200_1
 **/
exports.stockDeleteIdDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "deleteCount" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * 在庫詳細
 * 在庫詳細の取得
 *
 * id Long 在庫ID
 * returns inline_response_200
 **/
exports.stockDetailIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "itemId" : 6,
  "itemName" : "",
  "warehouseId" : 1,
  "counts" : 5,
  "price" : 5,
  "id" : 0,
  "warehouseName" : ""
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * 商品数の検索
 * 商品数の検索結果
 *
 * counts Long 商品数
 * returns inline_response_200
 **/
exports.stockSearchCountsCountsGET = function(counts) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "itemId" : 6,
  "itemName" : "",
  "warehouseId" : 1,
  "counts" : 5,
  "price" : 5,
  "id" : 0,
  "warehouseName" : ""
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * 在庫ID検索
 * 在庫IDの検索結果
 *
 * id Long 在庫ID
 * returns inline_response_200
 **/
exports.stockSearchIdIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "itemId" : 6,
  "itemName" : "",
  "warehouseId" : 1,
  "counts" : 5,
  "price" : 5,
  "id" : 0,
  "warehouseName" : ""
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * 商品名の検索
 * 商品名の検索結果
 *
 * itemName byte[] 商品名
 * returns inline_response_200
 **/
exports.stockSearchItemNameItemNameGET = function(itemName) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "itemId" : 6,
  "itemName" : "",
  "warehouseId" : 1,
  "counts" : 5,
  "price" : 5,
  "id" : 0,
  "warehouseName" : ""
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * 単価の検索
 * 単価の検索結果
 *
 * price Long 単価
 * returns inline_response_200
 **/
exports.stockSearchPricePriceGET = function(price) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "itemId" : 6,
  "itemName" : "",
  "warehouseId" : 1,
  "counts" : 5,
  "price" : 5,
  "id" : 0,
  "warehouseName" : ""
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * 倉庫名の検索
 * 倉庫名の検索結果
 *
 * warehouseName byte[] 倉庫名
 * returns inline_response_200
 **/
exports.stockSearchWarehouseNameWarehouseNameGET = function(warehouseName) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "itemId" : 6,
  "itemName" : "",
  "warehouseId" : 1,
  "counts" : 5,
  "price" : 5,
  "id" : 0,
  "warehouseName" : ""
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


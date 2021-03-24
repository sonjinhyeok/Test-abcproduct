'use strict';

var utils = require('../utils/writer.js');
var Stock = require('../service/StockService');

module.exports.stockDeleteIdGET = function stockDeleteIdGET (req, res, next, id) {
  Stock.stockDeleteIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.stockDetailIdGET = function stockDetailIdGET (req, res, next, id) {
  Stock.stockDetailIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.stockSearchCountsCountsGET = function stockSearchCountsCountsGET (req, res, next, counts) {
  Stock.stockSearchCountsCountsGET(counts)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.stockSearchIdIdGET = function stockSearchIdIdGET (req, res, next, id) {
  Stock.stockSearchIdIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.stockSearchItemNameItemNameGET = function stockSearchItemNameItemNameGET (req, res, next, itemName) {
  Stock.stockSearchItemNameItemNameGET(itemName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.stockSearchPricePriceGET = function stockSearchPricePriceGET (req, res, next, price) {
  Stock.stockSearchPricePriceGET(price)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.stockSearchWarehouseNameWarehouseNameGET = function stockSearchWarehouseNameWarehouseNameGET (req, res, next, warehouseName) {
  Stock.stockSearchWarehouseNameWarehouseNameGET(warehouseName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

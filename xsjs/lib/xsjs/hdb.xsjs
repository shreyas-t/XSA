"use strict";

var conn = $.hdb.getConnection();
var query =  'SELECT FROM PURCHASEORDER_ITEMVIEW { PURCHASEORDERID as "PurchaseOrderId", PRODUCT as "ProductID", GROSSAMOUNT as "Amount" }';
var rs = conn.executeQuery(query);
$.response.setBody(JSON.stringify(rs));
$.response.contentType = "application/json";
$.response.status = $.net.http.OK;
import{c as o}from"./index-e664e6dc.js";function t(n){return o.get("/backend/addons/TuanGou/goods/index",n)}function a(n){return o.post("/backend/addons/TuanGou/goods/create",n)}function u(n){return o.get(`/backend/addons/TuanGou/goods/${n}`,{})}function s(n,e){return o.put(`/backend/addons/TuanGou/goods/${n}`,e)}function r(n){return o.destroy(`/backend/addons/TuanGou/goods/${n}`)}function c(n){return o.get("/backend/addons/TuanGou/orders/index",n)}function i(n){return o.get("/backend/addons/TuanGou/refunds/index",n)}function f(n,e){return o.get(`/backend/addons/TuanGou/refunds/${n}/handler`,e)}function g(n,e){return o.get(`/backend/addons/TuanGou/goods/${n}/items`,e)}function b(n,e){return o.get(`/backend/addons/TuanGou/goods/${n}/item/${e}`,{})}function k(n){return o.get("/backend/addons/TuanGou/goods/item/complete",n)}export{u as a,f as b,k as c,r as d,b as e,t as l,c as o,i as r,a as s,g as t,s as u};

import{c as r}from"./index-e664e6dc.js";function n(e){return r.get("/backend/api/v1/member",e)}function s(e){return r.get("/backend/api/v1/member/create",e)}function c(e){return r.post("/backend/api/v1/member",e)}function i(e){return r.get(`/backend/api/v1/member/${e}`,{})}function u(e,t){return r.put(`/backend/api/v1/member/${e}`,t)}function d(e){return r.destroy(`/backend/api/v2/member/${e}`)}function m(e){return r.put("/backend/api/v1/member/field/multi",e)}function o(e){return r.post("/backend/api/v1/member/message/multi",e)}function b(e,t){return r.post(`/backend/api/v1/member/${e}/message`,t)}function p(e){return r.post("/backend/api/v1/member/import",e)}function g(e){return r.get(`/backend/api/v1/member/${e}/detail`,{})}function f(e,t){return r.get(`/backend/api/v1/member/${e}/detail/userOrders`,t)}function k(e){return r.get("/backend/api/v2/member/courses",e)}function v(e){return r.get("/backend/api/v2/member/course/progress",e)}function l(e){return r.get("/backend/api/v2/member/videos",e)}function $(e,t){return r.get(`/backend/api/v1/member/${e}/detail/userInvite`,t)}function R(e,t){return r.get(`/backend/api/v1/member/${e}/detail/credit1Records`,t)}function h(e){return r.get("/backend/addons/multi_level_share/member/balanceRecords",e)}function I(e){return r.get("/backend/addons/TemplateOne/member/credit2Records",e)}function O(e){return r.post("/backend/api/v1/member/credit1/change",e)}function y(e){return r.post("/backend/addons/TemplateOne/member/recharge",e)}function M(e,t){return r.put(`/backend/api/v1/member/${e}/tags`,t)}function x(e){return r.get("/backend/api/v1/member/tag/index",e)}function S(e){return r.post("/backend/api/v1/member/tag/create",e)}function V(e){return r.get(`/backend/api/v1/member/tag/${e}`,{})}function C(e,t){return r.put(`/backend/api/v1/member/tag/${e}`,t)}function D(e){return r.destroy(`/backend/api/v1/member/tag/${e}`)}function T(e,t){return r.put(`/backend/api/v1/member/${e}/remark`,t)}export{C as A,y as I,b as a,c as b,i as c,d,m as e,p as f,O as g,f as h,v as i,k as j,l as k,n as l,$ as m,R as n,h as o,I as p,g as q,T as r,o as s,M as t,u,s as v,x as w,D as x,S as y,V as z};

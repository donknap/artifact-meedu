import{q as t}from"./index-0a2a6377.js";function i(e){return t.get("/api/v2/courses",e)}function r(e){return t.get(`/api/v2/course/${e}`,{})}function s(e){return t.get(`/api/v2/course/${e}/comments`,{})}function c(e){return t.get(`/api/v2/course/${e}/like`,{})}function u(e,o){return t.post(`/api/v2/course/${e}/comment`,o)}function a(e){return t.get(`/api/v2/video/${e}`,{})}function m(e){return t.get(`/api/v2/video/${e}/comments`,{})}function v(e,o){return t.post(`/api/v2/video/${e}/comment`,o)}function p(e,o){return t.get(`/api/v2/video/${e}/playinfo`,o)}function f(e,o){return t.post(`/api/v2/video/${e}/record`,o)}function d(){return t.get("/api/v2/course_categories",{})}export{s as a,c as b,d as c,r as d,v as e,f,m as g,i as l,p,u as s,a as v};

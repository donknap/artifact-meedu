import{q as e}from"./index-0a2a6377.js";function s(t){return e.get("/addons/zhibo/api/v1/courses",t)}function a(t){return e.get(`/addons/zhibo/api/v1/course/${t}`,{})}function i(t,n){return e.get(`/addons/zhibo/api/v1/course/${t}/comments`,n)}function r(t,n){return e.post(`/addons/zhibo/api/v1/course/${t}/comment`,n)}function u(t){return e.get(`/addons/zhibo/api/v1/course/${t}/play`,{})}function c(t){return e.get("/addons/zhibo/api/v1/member/courses",t)}function d(t){return e.get("/addons/templateOne/api/v1/like/status",t)}function p(t){return e.get("/addons/templateOne/api/v1/like/hit",t)}export{d as a,p as b,i as c,a as d,s as l,u as p,r as s,c as u};

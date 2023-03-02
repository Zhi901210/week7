import{_ as g,o as l,c as d,d as t,F as p,f as _,g as v,t as a,a as C,h as $,v as m}from"./index-ffdd9d06.js";const{VITE_APP_URL:c,VITE_APP_PATH:r}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"qqq-api",BASE_URL:"/week7/",MODE:"production",DEV:!1,PROD:!0},b={data(){return{products:[],productId:"",cart:{},loadingItem:""}},methods:{getCarts(){this.$http.get(`${c}/v2/api/${r}/cart`).then(e=>{this.cart=e.data.data}).catch(e=>{console.log(e)})},updataCartItem(e){const o={product_id:e.product.id,qty:e.qty};this.loadingItem=e.id,this.$http.put(`${c}/v2/api/${r}/cart/${e.id}`,{data:o}).then(i=>{this.getCarts(),this.loadingItem=""}).catch(i=>{console.log(i)})},deleteItem(e){this.loadingItem=e.id,this.$http.delete(`${c}/v2/api/${r}/cart/${e.id}`).then(o=>{this.getCarts(),this.loadingItem=""}).catch(o=>{console.log(o)})},deleteCarts(){this.$http.delete(`${c}/v2/api/${r}/carts`).then(e=>{this.getCarts()}).catch(e=>{console.log(e)})}},mounted(){this.getCarts()}},I=t("h1",null,"這是購物車頁面",-1),f={class:"container"},x={class:"text-end"},y={class:"table align-middle"},P=t("thead",null,[t("tr",null,[t("th"),t("th",null,"品名"),t("th",{style:{width:"150px"}},"數量/單位"),t("th",null,"單價")])],-1),V=["onClick"],k=t("i",{class:"fas fa-spinner fa-pulse"},null,-1),E={class:"input-group input-group-sm"},q={class:"input-group mb-3"},A=["onUpdate:modelValue","onChange"],T=["value"],D={class:"input-group-text",id:"basic-addon2"},U={class:"text-end"},w=t("td",{colspan:"3",class:"text-end"},"總計",-1),B={class:"text-end"};function L(e,o,i,R,u,h){return l(),d(p,null,[I,t("div",f,[t("div",x,[t("button",{class:"btn btn-outline-danger",type:"button",onClick:o[0]||(o[0]=s=>h.deleteCarts())},"清空購物車")]),t("table",y,[P,t("tbody",null,[u.cart.carts?(l(!0),d(p,{key:0},_(u.cart.carts,s=>(l(),d("tr",{key:s.id},[t("td",null,[t("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:n=>h.deleteItem(s)},[k,C(" x ")],8,V)]),t("td",null,a(s.product.title),1),t("td",null,[t("div",E,[t("div",q,[$(t("select",{name:"",id:"",class:"form-control","onUpdate:modelValue":n=>s.qty=n,onChange:n=>h.updataCartItem(s)},[(l(),d(p,null,_(50,n=>t("option",{value:n,key:`${n}123456`},a(n),9,T)),64))],40,A),[[m,s.qty]]),t("span",D,a(s.product.unit),1)])])]),t("td",U,a(s.total),1)]))),128)):v("",!0)]),t("tfoot",null,[t("tr",null,[w,t("td",B,a(u.cart.total),1)])])])])],64)}const S=g(b,[["render",L]]);export{S as default};

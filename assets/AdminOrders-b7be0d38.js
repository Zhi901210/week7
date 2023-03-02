import{M as $,P as V}from"./PaginationComponents-79135301.js";import{_ as b,o as s,c as d,d as t,m as f,t as l,g as w,F as u,f as p,h as v,k as M,r as _,b as h}from"./index-ffdd9d06.js";const{VITE_APP_URL:k,VITE_APP_PATH:y}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"qqq-api",BASE_URL:"/week7/",MODE:"production",DEV:!1,PROD:!0},x={props:["delorderproduct"],data(){return{delOrderModal:""}},methods:{getOrders(){this.$http.get(`${k}/v2/api/${y}/admin/orders`).then(e=>{this.orders=e.data.orders}).catch(e=>{console.log(e)})},delproduct(){this.$http.delete(`${k}/v2/api/${y}/admin/order/${this.delorderproduct.id}`).then(e=>{this.delOrderModal.hide(),this.getOrders()}).catch(e=>{console.log(e)})}},mounted(){this.delOrderModal=new $(this.$refs.delOrderModal)}},C={id:"delOrderModal",ref:"delOrderModal",class:"modal fade",tabindex:"-1","aria-labelledby":"delOrderModal","aria-hidden":"true"},T={class:"modal-dialog"},I={class:"modal-content border-0"},L=f('<div class="modal-header bg-danger text-white"><h5 id="delProductModalLabel" class="modal-title"><span>刪除訂單</span></h5><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body"> 是否刪除 <strong class="text-danger"></strong> 訂單(刪除後將無法恢復)。 </div>',2),R={class:"modal-footer"},U=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function D(e,r,m,O,o,c){return s(),d("div",C,[t("div",T,[t("div",I,[L,t("div",R,[U,t("button",{type:"button",class:"btn btn-danger",onClick:r[0]||(r[0]=a=>c.delproduct())}," 確認刪除 ")])])])],512)}const q=b(x,[["render",D]]),{VITE_APP_URL:g,VITE_APP_PATH:P}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"qqq-api",BASE_URL:"/week7/",MODE:"production",DEV:!1,PROD:!0},H={props:["lookorders","copyOrders"],data(){return{lookOrderModal:"",newlookorders:[],newCopyOrders:[]}},methods:{getOrders(){this.$http.get(`${g}/v2/api/${P}/admin/orders`).then(e=>{this.orders=e.data.orders}).catch(e=>{console.log(e)})},upOrders(){this.$http.put(`${g}/v2/api/${P}/admin/order/${this.newCopyOrders.id}`,{data:this.newCopyOrders}).then(e=>{this.lookOrderModal.hide(),this.getOrders()}).catch(e=>{console.log(e)})}},watch:{lookorders:function(e){this.newlookorders=e},copyOrders:function(e){this.newCopyOrders=e}},mounted(){this.lookOrderModal=new $(this.$refs.lookOrderModal)}},S={class:"modal fade",id:"lookOrderModal",tabindex:"-1",role:"dialog","aria-labelledby":"lookOrderModal","aria-hidden":"true",ref:"lookOrderModal"},B={class:"modal-dialog modal-xl",role:"document"},N={class:"modal-content border-0"},F=t("div",{class:"modal-header bg-dark text-white"},[t("h5",{class:"modal-title",id:"exampleModalLabel"},[t("span",null,"訂單細節")]),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),j={class:"modal-body"},z={class:"row"},G={class:"col-md-4"},J=t("h3",null,"用戶資料",-1),K={class:"table"},Q={key:0},W=t("th",{style:{width:"100px"}},"姓名",-1),X=t("th",null,"Email",-1),Y=t("th",null,"電話",-1),Z=t("th",null,"地址",-1),tt={class:"col-md-8"},et=t("h3",null,"訂單細節",-1),ot={class:"table"},st=t("th",{style:{width:"100px"}},"訂單編號",-1),dt=t("th",null,"付款狀態",-1),lt={key:0,class:"text-success"},rt={key:1,class:"text-muted"},nt=t("th",null,"總金額",-1),at=t("h3",null,"選購商品",-1),it={class:"table"},ct=t("thead",null,[t("tr")],-1),_t={class:"text-end"},ht={class:"d-flex justify-content-end"},ut={class:"form-check"},pt={class:"form-check-label",for:"flexCheckDefault"},bt={key:0},mt={key:1},Ot={class:"modal-footer"},kt=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function yt(e,r,m,O,o,c){return s(),d("div",S,[t("div",B,[t("div",N,[F,t("div",j,[t("div",z,[t("div",G,[J,t("table",K,[o.newlookorders?(s(),d("tbody",Q,[t("tr",null,[W,t("td",null,l(o.newlookorders.name),1)]),t("tr",null,[X,t("td",null,l(o.newlookorders.email),1)]),t("tr",null,[Y,t("td",null,l(o.newlookorders.tel),1)]),t("tr",null,[Z,t("td",null,l(o.newlookorders.address),1)])])):w("",!0)])]),t("div",tt,[et,t("table",ot,[t("tbody",null,[t("tr",null,[st,t("td",null,l(o.newCopyOrders.id),1)]),t("tr",null,[dt,t("td",null,[o.newCopyOrders.is_paid?(s(),d("strong",lt,"已付款")):(s(),d("span",rt,"尚未付款"))])]),t("tr",null,[nt,t("td",null,l(o.newCopyOrders.total),1)])])]),at,t("table",it,[ct,t("tbody",null,[(s(!0),d(u,null,p(o.newCopyOrders.products,a=>(s(),d("tr",{key:a.id},[t("th",null,l(a.product.title),1),t("td",null,l(a.qty)+" / "+l(a.product.unit),1),t("td",_t,l(a.final_total),1)]))),128))])]),t("div",ht,[t("div",ut,[v(t("input",{class:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault","onUpdate:modelValue":r[0]||(r[0]=a=>o.newCopyOrders.is_paid=a)},null,512),[[M,o.newCopyOrders.is_paid]]),t("label",pt,[o.newCopyOrders.is_paid?(s(),d("span",bt,"已付款")):(s(),d("span",mt,"未付款"))])])])])])]),t("div",Ot,[kt,t("button",{type:"button",class:"btn btn-primary",onClick:r[1]||(r[1]=a=>c.upOrders())}," 修改付款狀態 ")])])])],512)}const gt=b(H,[["render",yt]]),{VITE_APP_URL:Pt,VITE_APP_PATH:$t}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"qqq-api",BASE_URL:"/week7/",MODE:"production",DEV:!1,PROD:!0},ft={data(){return{usedata:{username:" ",password:""},orders:[],lookorders:[],currentPage:1,pagination:{}}},components:{delOrderModal:q,lookOrderModal:gt,Pagination:V},methods:{getOrders(e=1){this.$http.get(`${Pt}/v2/api/${$t}/admin/orders?page=${e}`).then(r=>{this.orders=r.data.orders,this.pagination=r.data.pagination}).catch(r=>{console.log(r)})},delOrder(e){this.copyOrders={...e}},upOrder(e){this.lookorders={...e.user},this.copyOrders={...e}}},mounted(){this.getOrders()}},wt={class:"container"},vt=f('<h1>這是後台訂單頁面</h1><table class="table mt-4"><thead><tr><th width="180">Email</th><th width="150">購買款項</th><th width="100">應付金額</th><th width="100">是否付款</th><th width="120">編輯</th></tr></thead></table>',2),Mt={width:"260"},Et={key:0},At={width:"250"},Vt={class:"list-unstyled"},xt={class:"text-right",width:"120"},Ct={width:"150"},Tt={class:"form-check form-switch"},It=["id","onUpdate:modelValue"],Lt=["for"],Rt={key:0},Ut={key:1},Dt={width:"150"},qt={class:"btn-group"},Ht=["onClick"],St=["onClick"];function Bt(e,r,m,O,o,c){const a=_("Pagination"),E=_("delOrderModal"),A=_("lookOrderModal");return s(),d("div",wt,[vt,t("tbody",null,[(s(!0),d(u,null,p(o.orders,n=>(s(),d("tr",{key:n.id},[t("td",Mt,[n.user?(s(),d("span",Et,l(n.user.email),1)):w("",!0)]),t("td",At,[t("ul",Vt,[(s(!0),d(u,null,p(n.products,i=>(s(),d("li",{key:i.id},l(i.product.title)+" 數量："+l(i.qty)+" "+l(i.product.unit),1))),128))])]),t("td",xt,l(n.total),1),t("td",Ct,[t("div",Tt,[v(t("input",{class:"form-check-input",type:"checkbox",id:`paidSwitch${n.id}`,"onUpdate:modelValue":i=>n.is_paid=i},null,8,It),[[M,n.is_paid]]),t("label",{class:"form-check-label",for:`paidSwitch${n.id}`},[n.is_paid?(s(),d("span",Rt,"已付款")):(s(),d("span",Ut,"未付款"))],8,Lt)])]),t("td",Dt,[t("div",qt,[t("button",{class:"btn btn-outline-primary btn-sm",type:"button","data-bs-toggle":"modal","data-bs-target":"#lookOrderModal",onClick:i=>c.upOrder(n)}," 檢視 ",8,Ht),t("button",{class:"btn btn-outline-danger btn-sm",type:"button","data-bs-toggle":"modal","data-bs-target":"#delOrderModal",onClick:i=>c.delOrder(n)}," 刪除 ",8,St)])])]))),128))]),h(a,{pages:o.pagination,onEmitPages:c.getOrders},null,8,["pages","onEmitPages"]),h(E,{ref:"delOrderModal",delorderproduct:e.copyOrders},null,8,["delorderproduct"]),h(A,{ref:"lookOrderModal",lookorders:o.lookorders,copyOrders:e.copyOrders},null,8,["lookorders","copyOrders"])])}const jt=b(ft,[["render",Bt]]);export{jt as default};

(window.webpackJsonpfrontend=window.webpackJsonpfrontend||[]).push([[0],{111:function(e,t,a){},157:function(e,t,a){e.exports=a(293)},292:function(e,t,a){},293:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(58),l=a.n(c),o=a(5),i=a(8),s=a(127),m=a.n(s),u=a(128),d=a.n(u),p=a(129),E=a(124),b=a(10),f=a.n(b),h=a(30);function y(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function v(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?y(a,!0).forEach(function(t){Object(h.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):y(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var g={summary:{credit:0,debit:0}};function O(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function N(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?O(a,!0).forEach(function(t){Object(h.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):O(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var j={list:[],item:{}};function w(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function C(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?w(a,!0).forEach(function(t){Object(h.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):w(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}function D(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function k(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?D(a,!0).forEach(function(t){Object(h.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):D(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var T="_mymoneyuser",_={user:JSON.parse(localStorage.getItem(T)),validToken:!1},I=Object(o.c)({dashboard:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"BILLING_SUMMARY_FETCH":return v({},e,{summary:t.payload.data});default:return e}},billingCycle:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"BILLING_LIST_FETCH":return N({},e,{list:t.payload.data});case"EDIT_ITEM":return N({},e,{item:t.payload,updateFlag:!0});case"CLEAR_ITEM":return N({},e,{item:null});case"CLEAR_UPDATE":return N({},e,{updateFlag:!1});default:return e}},form:E.a,billingCycleForm:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CLEAR_ITEM":return C({},e,{data:null});default:return e}},toastr:b.reducer,auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOKEN_VALIDATED":return t.payload?k({},e,{validToken:!0}):(localStorage.removeItem(T),k({},e,{validToken:!1,user:null}));case"USER_FETCHED":return localStorage.setItem(T,JSON.stringify(t.payload)),k({},e,{user:t.payload,validToken:!0});default:return e}}}),P=a(12),S=a(13),A=a(16),L=a(14),F=a(15),R=a(23),x=a.n(R),M=a(122),U=a(123),G={API_URL:"https://gregoridev-mymoneyapp-back.herokuapp.com/api",OAPI_URL:"https://gregoridev-mymoneyapp-back.herokuapp.com/oapi"};function V(e){return B(e,"".concat(G.OAPI_URL,"/login"))}function z(e){return B(e,"".concat(G.OAPI_URL,"/signup"))}function B(e,t){return function(a){x.a.post(t,e).then(function(e){a([{type:"USER_FETCHED",payload:e.data}])}).catch(function(e){e.response.data.errors.forEach(function(e){return b.toastr.error("Erro",e)})})}}function H(){return{type:"TOKEN_VALIDATED",payload:!1}}function $(e){return function(t){e?x.a.post("".concat(G.OAPI_URL,"/validateToken"),{token:e}).then(function(e){t({type:"TOKEN_VALIDATED",payload:e.data.valid})}).catch(function(e){t({type:"TOKEN_VALIDATED",payload:!1})}):t({type:"TOKEN_VALIDATED",payload:!1})}}a(252);var J=function(e){return r.a.createElement(f.a,{timeOut:5e3,newestOnTop:!1,preventDuplicates:!0,position:"top-right",transitionIn:"fadeIn",transitionOut:"fadeOut",progressBar:!0})},K=function(e){return e.hide?null:r.a.createElement("div",{className:"form-group"},r.a.createElement("input",Object.assign({},e.input,{className:"form-control",placeholder:e.placeholder,type:e.type})),r.a.createElement("small",{className:"form-text text-muted"},e.hint))},X=(a(111),function(e){function t(e){var a;return Object(P.a)(this,t),(a=Object(A.a)(this,Object(L.a)(t).call(this,e))).state={loginMode:!0},a}return Object(F.a)(t,e),Object(S.a)(t,[{key:"changeMode",value:function(){this.setState({loginMode:!this.state.loginMode})}},{key:"onSubmit",value:function(e){var t=this.props,a=t.login,n=t.signup;this.state.loginMode?a(e):n(e)}},{key:"render",value:function(){var e=this,t=this.state.loginMode,a=this.props.handleSubmit;return r.a.createElement("div",{className:"login"},r.a.createElement("div",{className:"col-3"}),r.a.createElement("div",{className:"col-6"},r.a.createElement("h1",{className:"card-title"},"My Money App"),r.a.createElement("div",{className:"card card-nav-tabs mt-5"},r.a.createElement("h4",{className:"card-header card-header-info"},t?"Login":"Cadastro"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:a(function(t){return e.onSubmit(t)})},r.a.createElement(M.a,{component:K,type:"input",name:"name",placeholder:"Nome",hide:t}),r.a.createElement(M.a,{component:K,type:"email",name:"email",required:!0,placeholder:"E-mail"}),r.a.createElement(M.a,{component:K,type:"password",name:"password",required:!0,placeholder:"Senha"}),r.a.createElement(M.a,{component:K,type:"password",name:"confirm_password",placeholder:"Confirmar Senha",hide:t}),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},t?"Entrar":"Registrar")))),r.a.createElement("a",{onClick:function(){return e.changeMode()},href:"\\#"},t?"Novo usu\xe1rio? Registre-se!":"J\xe1 \xe9 cadastrado? Entrar aqui!")),r.a.createElement("div",{className:"col-3"},r.a.createElement(J,null)))}}]),t}(r.a.Component));X=Object(U.a)({form:"LoginForm"})(X);var q=Object(i.connect)(null,function(e){return Object(o.b)({login:V,signup:z},e)})(X),Y=a(132),Q=function(e){var t=Object(n.useState)(""),a=Object(Y.a)(t,2),c=a[0],l=a[1];return window.addEventListener("popstate",function(t){var a=t.target.window.location.href;(a=a.replace("http://localhost:3000/",""))===e.path?l(c=!0):l(c=!1)}),r.a.createElement("li",{className:"nav-item ".concat(c?"active":"")},r.a.createElement("a",{className:"nav-link",href:e.path},r.a.createElement("i",{className:"material-icons"},e.icon),r.a.createElement("p",null,e.label)))},W=function(e){return r.a.createElement("div",{className:"sidebar-wrapper"},r.a.createElement("ul",{className:"nav"},r.a.createElement(Q,{path:"#/dashboard",label:"Dashboard",icon:"dashboard"}),r.a.createElement(Q,{path:"#/billing-cycle",label:"Ciclos de Pagamento",icon:"account_balance_wallet"})))},Z=function(e){return r.a.createElement("div",{className:"sidebar","data-color":"purple","data-background-color":"white","data-image":"../assets/img/sidebar-1.jpg"},r.a.createElement("div",{className:"logo"},r.a.createElement("a",{href:"\\#",className:"simple-text logo-mini"},r.a.createElement("i",{className:"fa fa-money fa-5x","aria-hidden":"true"}),r.a.createElement("br",null),r.a.createElement("b",null,"My Money App"))),r.a.createElement(W,null))},ee=function(e){function t(){return Object(P.a)(this,t),Object(A.a)(this,Object(L.a)(t).apply(this,arguments))}return Object(F.a)(t,e),Object(S.a)(t,[{key:"render",value:function(){if(!this.props.user)return!1;var e=this.props.user,t=e.name,a=e.email;return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top "},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"navbar-wrapper"},r.a.createElement("a",{className:"navbar-brand",href:"\\#"},r.a.createElement("i",{className:"material-icons"},"home"))),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","aria-controls":"navigation-index","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"sr-only"}),r.a.createElement("span",{className:"navbar-toggler-icon icon-bar"}),r.a.createElement("span",{className:"navbar-toggler-icon icon-bar"}),r.a.createElement("span",{className:"navbar-toggler-icon icon-bar"})),r.a.createElement("div",{className:"collapse navbar-collapse justify-content-end"},r.a.createElement("div",{className:"navbar-form"}),r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item dropdown"},r.a.createElement("a",{className:"nav-link",href:"/",onClick:function(e){return e.preventDefault()},id:"navbarDropdownProfile","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},r.a.createElement("span",{className:""},a),r.a.createElement("span",null," | "),r.a.createElement("span",{className:""},t),r.a.createElement("i",{className:"material-icons"},"person")),r.a.createElement("div",{className:"dropdown-menu dropdown-menu-right","aria-labelledby":"navbarDropdownProfile"},r.a.createElement("a",{className:"dropdown-item",href:"\\#",onClick:this.props.logout},"Log out")))))))}}]),t}(r.a.Component),te=Object(i.connect)(function(e){return{user:e.auth.user}},function(e){return Object(o.b)({logout:H},e)})(ee),ae={color:"red"},ne=function(e){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("nav",{className:"float-left"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.pixeltech.com.br"},"PIXELTECH")))),r.a.createElement("div",{className:"copyright float-right"},"\xa9",(new Date).getFullYear()," made with ",r.a.createElement("i",{className:"material-icons",style:ae},"favorite")," by",r.a.createElement("a",{href:"http://www.pixeltech.com.br",rel:"noopener noreferrer",target:"_blank"}," ",r.a.createElement("b",null,"Gregori Spielmann")),".")))},re=a(17),ce=a(60),le=function(e){return r.a.createElement("div",{className:"col-lg-4 col-md-6 col-sm-6"},r.a.createElement("div",{className:"card card-stats"},r.a.createElement("div",{className:"card-header card-header-".concat(e.coloricon," card-header-icon")},r.a.createElement("div",{className:"card-icon"},r.a.createElement("i",{className:"material-icons"},e.icon)),r.a.createElement("p",{className:"card-category"},e.category),r.a.createElement("h3",{className:"card-title"},r.a.createElement("small",null,e.unity),e.title)),r.a.createElement("div",{className:"card-footer"})))},oe=function(e){return r.a.createElement("h2",null,e.title)},ie=function(e){return r.a.createElement("div",{className:"row"},e.children)},se=function(e){function t(e){var a;return Object(P.a)(this,t),(a=Object(A.a)(this,Object(L.a)(t).call(this,e))).state={credit:0,debit:0},a}return Object(F.a)(t,e),Object(S.a)(t,[{key:"componentDidMount",value:function(){var e=this;x.a.get("".concat("http://localhost:3001/api","/billingCycles/summary")).then(function(t){return e.setState(t.data)})}},{key:"render",value:function(){var e=this.state,t=e.credit,a=e.debit;return r.a.createElement(r.a.Fragment,null,r.a.createElement(oe,{title:"Dashboard"}),r.a.createElement(ie,null,r.a.createElement(le,{icon:"account_balance",coloricon:"warning",title:t-a,unity:"R$ ",category:"Total Consolidado"}),r.a.createElement(le,{icon:"attach_money",coloricon:"primary",title:t,unity:"R$ ",category:"Cr\xe9ditos"}),r.a.createElement(le,{icon:"credit_card",coloricon:"danger",title:a,unity:"- R$ ",category:"D\xe9bitos"})))}}]),t}(n.Component),me=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"card-header card-header-".concat(e.color)},r.a.createElement("h4",{className:"card-title"},e.title),r.a.createElement("p",{className:"card-category"},e.subtitle)))},ue=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"table-responsive"},r.a.createElement("table",{className:"table"},r.a.createElement("thead",{className:"text-primary"},r.a.createElement("tr",null,r.a.createElement("th",null,"Descri\xe7\xe3o"),r.a.createElement("th",null,"M\xeas"),r.a.createElement("th",null,"Ano"),r.a.createElement("th",null,"A\xe7\xf5es"))),r.a.createElement("tbody",null,e.children)),r.a.createElement("div",{className:"clearfix"}))))},de=function(e){return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"p-2"},r.a.createElement(me,e),r.a.createElement(ue,e)))},pe="http://localhost:3001/api";function Ee(){return{type:"BILLING_LIST_FETCH",payload:x.a.get("".concat(pe,"/billingCycles/"))}}function be(e){return{type:"EDIT_ITEM",payload:e}}function fe(){return{type:"CLEAR_ITEM",payload:{credits:{},debits:{}}}}function he(){return{type:"CLEAR_UPDATE"}}function ye(e){var t=this;return function(a){b.toastr.confirm('Deseja deletar "'.concat(e.name,'"?'),{okText:"Sim",cancelText:"N\xe3o",onOk:function(){b.toastr.success("Sucesso",'Item "'.concat(e.name,'" removido com sucesso!')),x.a.delete("".concat(pe,"/billingCycles/").concat(e._id)).then(function(){a([t.getList()])}).catch(function(e){e.response.data.errors.forEach(function(e){return b.toastr.error("Erro",e)})})},onCancel:function(){return null}})}}var ve=function(e){function t(){var e,a;Object(P.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(A.a)(this,(e=Object(L.a)(t)).call.apply(e,[this].concat(r)))).state={redirect:!1},a}return Object(F.a)(t,e),Object(S.a)(t,[{key:"componentDidMount",value:function(){this.props.getList(),this.props.clearUpdateFlag()}},{key:"render",value:function(){var e=this;return this.state.redirect?r.a.createElement(re.a,{to:{pathname:"/billing-cycle-form"}}):r.a.createElement(r.a.Fragment,null,r.a.createElement(oe,{title:"Ciclos de Pagamento"}),r.a.createElement("a",{href:"/#/billing-cycle-form"},r.a.createElement("button",{type:"button",className:"btn btn-success btn-md"},r.a.createElement("i",{className:"material-icons",onClick:fe},"add"),"Incluir")),r.a.createElement(ie,null,r.a.createElement("div",{className:"col-md-12"},r.a.createElement(de,{title:"Lista",color:"primary"},(e.props.list||[]).map(function(t){return r.a.createElement("tr",{key:t._id},r.a.createElement("td",null,t.name),r.a.createElement("td",null,t.month),r.a.createElement("td",null,t.year),r.a.createElement("td",null,r.a.createElement("button",{className:"btn btn-warning",onClick:function(){return e.props.editItem(t),e.setState({redirect:!0})}},r.a.createElement("i",{className:"material-icons"},"edit")),r.a.createElement("button",{className:"btn btn-danger",onClick:function(){e.props.removeItem(t)}},r.a.createElement("i",{className:"material-icons"},"delete"))))})))))}}]),t}(n.Component),ge=Object(i.connect)(function(e){return{list:e.billingCycle.list,item:e.billingCycle.item}},function(e){return Object(o.b)({getList:Ee,editItem:be,clearUpdateFlag:he,removeItem:ye},e)})(ve),Oe=a(125),Ne=a(20),je="http://localhost:3001/api";function we(e,t){var a=e._id?e._id:"";return function(n){x.a[t]("".concat(je,"/billingCycles/").concat(a),e).then(function(e){b.toastr.success("Sucesso","Opera\xe7\xe3o realizada com sucesso"),n([Object(Ne.d)("billingCycleForm"),Ee(),Object(Ne.e)("billingCycleForm"),Object(Ne.f)("billingCycleForm")])}).catch(function(e){console.log(e),e.response.data.errors.forEach(function(e){return b.toastr.error("Erro",e)})})}}function Ce(e){return we(e,"post")}function De(e){return we(e,"put")}function ke(e){return[Object(Ne.c)("billingCycleForm",e),{type:"CLEAR_ITEM",payload:null}]}function Te(){return function(e){return[b.toastr.confirm("Deseja mesmo cancelar?",{okText:"Sim",cancelText:"N\xe3o",onOk:function(){b.toastr.success("Sucesso","Cancelado com sucesso"),e([Object(Ne.c)("billingCycleForm",null),Object(Ne.e)("billingCycleForm")])},onCancel:function(){return null}})]}}var _e=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"card-header card-header-".concat(e.color)},r.a.createElement("h4",{className:"card-title"},e.title),r.a.createElement("p",{className:"card-category"},e.subtitle)))},Ie=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"row"},e.children)),r.a.createElement("div",{className:"clearfix"}))},Pe=function(e){return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"p-2"},r.a.createElement(_e,e),r.a.createElement(Ie,e)))},Se=function(e){return r.a.createElement("div",{className:"col-md-".concat(e.size)},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,e.label),r.a.createElement("input",Object.assign({},e.input,{type:e.type,className:"form-control",disabled:e.disabled?"disabled":"",readOnly:e.readOnly,min:e.min,placeholder:e.placeholder,max:e.max}))))},Ae=function(e){return r.a.createElement("button",{type:e.type,className:"btn btn-".concat(e.color),onClick:e.onClick,disabled:e.disabled},e.label)},Le=function(e){return e.credits?r.a.createElement("div",{className:"col-md-".concat(e.size)},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,e.label),r.a.createElement("select",Object.assign({},e.input,{className:"form-control selectpicker","data-style":"btn btn-link"}),r.a.createElement("option",{value:"RECEBIDO"},"RECEBIDO"),r.a.createElement("option",{value:"PENDENTE"},"PENDENTE"),r.a.createElement("option",{value:"AGENDADO"},"AGENDADO")))):r.a.createElement("div",{className:"col-md-".concat(e.size)},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,e.label),r.a.createElement("select",Object.assign({},e.input,{className:"form-control selectpicker","data-style":"btn btn-link"}),r.a.createElement("option",{value:"PAGO"},"PAGO"),r.a.createElement("option",{value:"PENDENTE"},"PENDENTE"),r.a.createElement("option",{value:"AGENDADO"},"AGENDADO"))))},Fe=function(e){function t(){return Object(P.a)(this,t),Object(A.a)(this,Object(L.a)(t).apply(this,arguments))}return Object(F.a)(t,e),Object(S.a)(t,[{key:"add",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.props.arrayInsert("billingCycleForm",this.props.listType,e,t)}},{key:"remove",value:function(e){this.props.list.length>1?this.props.arrayRemove("billingCycleForm",this.props.listType,e):b.toastr.error("Erro","Voc\xea n\xe3o pode deletar todos os ".concat("credits"===this.props.listType?"CR\xc9DITOS":"D\xc9BITOS"))}},{key:"renderRows",value:function(){var e=this;return(this.props.list||[]).map(function(t,a){return r.a.createElement("tr",{className:"border-0",key:a},r.a.createElement("td",null,r.a.createElement(M.a,{name:"".concat(e.props.listType,"[").concat(a,"].name"),placeholder:"Informe o nome",component:Se})),r.a.createElement("td",null,r.a.createElement(M.a,{name:"".concat(e.props.listType,"[").concat(a,"].value"),placeholder:"Informe o valor",component:Se})),e.props.showStatus?r.a.createElement("td",null,r.a.createElement(M.a,{name:"".concat(e.props.listType,"[").concat(a,"].status"),placeholder:"Status",credits:"credits"===e.props.listType,option:"".concat(e.props.listType,"[").concat(a,"].status"),component:Le})):null,r.a.createElement("td",{className:"td-actions"},r.a.createElement("button",{type:"button",className:"btn btn-success",onClick:function(){e.add(a+1)}},r.a.createElement("i",{className:"material-icons"},"plus_one")),r.a.createElement("button",{type:"button",className:"btn btn-warning",onClick:function(){e.add(a+1,t)}},r.a.createElement("i",{className:"material-icons"},"file_copy")),r.a.createElement("button",{type:"button",className:"btn btn-danger",onClick:function(){e.remove(a)}},r.a.createElement("i",{className:"material-icons"},"delete"))))})}},{key:"render",value:function(){return r.a.createElement("div",{className:"table-responsive"},r.a.createElement("table",{className:"table"},r.a.createElement("thead",{className:"text-primary"},r.a.createElement("tr",null,r.a.createElement("th",null,"Descri\xe7\xe3o"),r.a.createElement("th",null,"Valor"),this.props.showStatus?r.a.createElement("th",null,"Status"):null,r.a.createElement("th",null,"A\xe7\xf5es"))),r.a.createElement("tbody",null,this.renderRows())),r.a.createElement("div",{className:"clearfix"}))}}]),t}(n.Component),Re=Object(i.connect)(null,function(e){return Object(o.b)({arrayInsert:Ne.a,arrayRemove:Ne.b},e)})(Fe),xe=function(e){var t=e.credit,a=e.debit;return r.a.createElement(r.a.Fragment,null,r.a.createElement(ie,null,r.a.createElement(le,{icon:"account_balance",coloricon:"warning",title:t-a,unity:"R$ ",category:"Total Consolidado"}),r.a.createElement(le,{icon:"attach_money",coloricon:"primary",title:t,unity:"R$ ",category:"Cr\xe9ditos"}),r.a.createElement(le,{icon:"credit_card",coloricon:"danger",title:a,unity:"- R$ ",category:"D\xe9bitos"})))},Me=function(e){function t(){return Object(P.a)(this,t),Object(A.a)(this,Object(L.a)(t).apply(this,arguments))}return Object(F.a)(t,e),Object(S.a)(t,[{key:"componentDidMount",value:function(){this.props.item&&0!==Object.entries(this.props.item).length?this.props.loadItem(this.props.item):this.props.loadItem({credits:[{}],debits:[{}]})}},{key:"calculateSummary",value:function(){var e=function(e,t){return e+t};return this.props.credits&&this.props.debits?{sumOfCredits:this.props.credits.map(function(e){return+e.value||0}).reduce(e),sumOfDebits:this.props.debits.map(function(e){return+e.value||0}).reduce(e)}:{}}},{key:"render",value:function(){var e=this.calculateSummary(),t=e.sumOfCredits,a=e.sumOfDebits,n=this.props,c=n.handleSubmit,l=n.submitting,o=n.create,i=n.update,s=n.credits,m=n.debits;return l?r.a.createElement(re.a,{to:"/billing-cycle"}):r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:this.props.updateFlag?c(i):c(o)},r.a.createElement(oe,{title:"Ciclos de Pagamento"}),r.a.createElement(ie,null,r.a.createElement("div",{className:"col-md-12"},r.a.createElement(Pe,{title:"Cadastro de Ciclo",color:"primary"},r.a.createElement(M.a,{name:"name",component:Se,size:"4",label:"Nome",type:"text"}),r.a.createElement(M.a,{name:"month",component:Se,size:"4",label:"M\xeas",type:"number",min:"1",max:"12"}),r.a.createElement(M.a,{name:"year",component:Se,size:"4",label:"Ano",type:"number",max:"2100",min:"1970"}))),r.a.createElement("div",{className:"col-md-12"},r.a.createElement(xe,{credit:t,debit:a})),r.a.createElement("div",{className:"col-lg-6 col-md-12 col-sm-12"},r.a.createElement(Pe,{title:"Cadastro de Cr\xe9ditos",color:"success"},r.a.createElement(Re,{listType:"credits",showStatus:!0,list:s}))),r.a.createElement("div",{className:"col-lg-6 col-md-12 col-sm-12"},r.a.createElement(Pe,{title:"Cadastro de D\xe9bitos",color:"danger"},r.a.createElement(Re,{listType:"debits",showStatus:!0,list:m}))),r.a.createElement("div",{className:"col-md-12"},r.a.createElement(Ae,{color:"primary",type:"submit",label:"Salvar"}),r.a.createElement(Ae,{type:"button",onClick:this.props.handleCancel,color:"secondary ml-2",label:"Cancelar"})))))}}]),t}(n.Component),Ue=Object(Oe.a)("billingCycleForm");Me=Object(i.connect)(function(e){return{item:e.billingCycle.item,updateFlag:e.billingCycle.updateFlag,credits:Ue(e,"credits"),debits:Ue(e,"debits")}},function(e){return Object(o.b)({loadItem:ke,create:Ce,update:De,handleCancel:Te},e)})(Me);var Ge=Object(U.a)({form:"billingCycleForm"})(Me),Ve=function(e){return r.a.createElement(ce.a,null,r.a.createElement(re.d,null,r.a.createElement(re.b,{exact:!0,path:"/",component:se}),r.a.createElement(re.b,{path:"/billing-cycle",component:ge}),r.a.createElement(re.b,{path:"/billing-cycle-form",component:Ge}),r.a.createElement(re.b,{path:"/dashboard",component:se})))},ze=function(e){return r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement(Ve,null)))},Be=function(e){return r.a.createElement("div",{className:"main-panel"},r.a.createElement(te,null),r.a.createElement(ze,null),r.a.createElement(ne,null))},He=(a(292),function(e){return r.a.createElement("div",{className:"wrapper"},r.a.createElement(Z,null),r.a.createElement(Be,null),r.a.createElement(J,null))}),$e=function(e){function t(){return Object(P.a)(this,t),Object(A.a)(this,Object(L.a)(t).apply(this,arguments))}return Object(F.a)(t,e),Object(S.a)(t,[{key:"componentDidMount",value:function(){this.props.auth.user&&this.props.validateToken(this.props.auth.user.token)}},{key:"render",value:function(){var e=this.props.auth,t=e.user,a=e.validToken;return t&&a?(x.a.defaults.headers.common.authorization=t.token,r.a.createElement(He,null,this.props.children)):!t&&!a&&r.a.createElement(q,null)}}]),t}(r.a.Component),Je=Object(i.connect)(function(e){return{auth:e.auth}},function(e){return Object(o.b)({validateToken:$},e)})($e),Ke=window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),Xe=Object(o.a)(d.a,p.a,m.a)(o.d)(I,Ke);l.a.render(r.a.createElement(i.Provider,{store:Xe},r.a.createElement(Je,null)),document.getElementById("root"))}},[[157,1,2]]]);
//# sourceMappingURL=main.833fd8b1.chunk.js.map
import{_ as s,l as a,p as d,D as e,E as t,q as l,o as i,c as o,w as c,n as r,h as n,f as u,a as _,b as f,r as p,F as m,d as g,i as h,t as k,j as b,G as y}from"./index-691f12c6.js";import{_ as C,a as D,b as x}from"./no_adress.b7ec0cd9.js";const A=s({data:()=>({loadding:!0,indicatorDots:!0,autoplay:!0,interval:2e3,duration:500,listData:[],default_id:"0",options:{}}),onLoad:function(s){this.options=s},onShow:function(){a({title:"加载中"}),this.getData()},methods:{getData(){let s=this;s.dataType,s._get("user.address/list",{shop_supplier_id:s.options.shop_supplier_id},(function(a){s.listData=a.data.list,s.default_id=a.data.default_id+"",s.loadding=!1,d()}))},addAddress(){let s=1;"order"===this.options.source&&(s=2),e({url:"/pages/user/address/add/add?delta="+s})},radioChange(s){let a=this;return a.default_id=s,a._post("user.address/setDefault",{address_id:s},(function(s){a.$fire.fire("takeout",!0),history.go(-1)})),!1},editAddress(s){e({url:"/pages/user/address/edit/edit?address_id="+s})},delAddress(s){let a=this;t({title:"提示",content:"您确定要移除当前收货地址吗?",success:function(d){d.confirm&&a._get("user.address/delete",{address_id:s},(function(s){1==s.code&&(l({title:"删除成功",duration:2e3}),a.getData())}))}})}}},[["render",function(s,a,d,e,t,l){const A=b,v=u,F=h,j=y;return t.loadding?n("",!0):(i(),o(v,{key:0,"data-theme":s.theme(),class:r(s.theme()||"")},{default:c((()=>[t.listData.length>0?(i(),o(v,{key:0,class:"pbenv"},{default:c((()=>[_(v,{class:"address-list bg-white"},{default:c((()=>[(i(!0),f(m,null,p(t.listData,((a,d)=>(i(),o(v,{class:"address p-30-0 border-b-d",key:d},{default:c((()=>[_(v,{class:"info flex-1 mb10"},{default:c((()=>[_(v,{class:"user f32 d-b-c"},{default:c((()=>[_(A,null,{default:c((()=>[g(k(a.name),1)])),_:2},1024),_(A,{class:"ml20 gray9 f26"},{default:c((()=>[g(k(a.phone),1)])),_:2},1024)])),_:2},1024),_(v,{class:"pt20 f26 gray3"},{default:c((()=>[g(k(a.detail)+k(a.address),1)])),_:2},1024)])),_:2},1024),_(v,{class:"d-b-c"},{default:c((()=>[_(v,{class:"gray9 d-b-c"},{default:c((()=>[_(A,null,{default:c((()=>[g("距离："+k(a.distance)+"km",1)])),_:2},1024),0==a.status?(i(),o(A,{key:0,class:"red"},{default:c((()=>[g("超出配送距离")])),_:1})):n("",!0)])),_:2},1024),_(v,{class:"d-s-c"},{default:c((()=>[_(v,{class:"icon-box plus d-c-c ml30",onClick:s=>l.delAddress(a.address_id)},{default:c((()=>[_(F,{class:"add_icon_img",src:D,mode:"aspectFill"}),_(A,{class:"gray9 ml10"},{default:c((()=>[g("删除")])),_:1})])),_:2},1032,["onClick"]),_(v,{class:"none_line ml30"}),_(v,{class:"icon-box plus d-c-c ml30 mr40",onClick:s=>l.editAddress(a.address_id)},{default:c((()=>[_(F,{class:"add_icon_img",src:x,mode:"aspectFill"}),_(A,{class:"gray9 ml10"},{default:c((()=>[g("编辑")])),_:1})])),_:2},1032,["onClick"])])),_:2},1024)])),_:2},1024),_(v,{class:"radio d-s-c"},{default:c((()=>[_(j,{style:{transform:"scale(0.6)"},color:s.getThemeColor(),value:a.address_id+"",checked:t.default_id==a.address_id+"",onClick:s=>l.radioChange(a.address_id)},null,8,["color","value","checked","onClick"]),_(A,{class:""},{default:c((()=>[g("默认地址")])),_:1})])),_:2},1024)])),_:2},1024)))),128))])),_:1}),_(v,{class:"add_add-btn theme-btn",onClick:a[0]||(a[0]=s=>l.addAddress())},{default:c((()=>[g("新增收货地址")])),_:1})])),_:1})):(i(),o(v,{key:1},{default:c((()=>[_(v,{class:"none_add"},{default:c((()=>[_(F,{class:"no_add",src:C,mode:"aspectFill"})])),_:1}),_(v,{class:"no_add_add red-btn",onClick:a[1]||(a[1]=s=>l.addAddress())},{default:c((()=>[g("新增收货地址")])),_:1}),_(v,{class:"no_add_add gray-btn",onClick:a[2]||(a[2]=a=>s.gotoPage("/pages/index/index"))},{default:c((()=>[g("返回首页")])),_:1})])),_:1}))])),_:1},8,["data-theme","class"]))}],["__scopeId","data-v-80b54172"]]);export{A as default};

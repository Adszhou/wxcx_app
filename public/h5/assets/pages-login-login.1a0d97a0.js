import{_ as a,m as e,l as s,z as o,s as t,A as i,p as n,o as l,c,w as r,f as d,a as u,d as g,i as f,y as _}from"./index-691f12c6.js";const p=a({data:()=>({background:"",listData:[],invitation_id:0}),onShow(){},onLoad(a){this.invitation_id=e("invitation_id")||0},methods:{onNotLogin:function(){this.gotoPage("/pages/index/index")},getUserInfo:function(){let a=this;wx.getUserProfile({lang:"zh_CN",desc:"用于完善会员资料",success:l=>{if("getUserProfile:ok"!==l.errMsg)return!1;s({title:"正在登录",mask:!0}),o({success(s){a._post("user.user/login",{invitation_id:a.invitation_id,code:s.code,user_info:l.rawData,encrypted_data:encodeURIComponent(l.encryptedData),iv:encodeURIComponent(l.iv),signature:l.signature,referee_id:e("referee_id"),source:"wx"},(a=>{t("token",a.data.token),t("user_id",a.data.user_id),i()}),!1,(()=>{n()}))}})}})},onGetAuthorize(a){console.log("开始授权");let e=this;o({provider:"alipay",success:function(a){console.log("sucss"),console.log(a),uni.getUserInfo({provider:"alipay",success:function(s){e.aliPayLogin(a,s)}})},fail(a){console.log(a)}})},aliPayLogin(a,e){console.log(a),console.log(e),s({title:"登录中",mask:!0}),this._post("user.useralipay/login",{code:a.authCode,avatar:e.avatar,nickName:e.nickName},(a=>{t("token",a.data.token),t("user_id",a.data.user_id),i()}),!1,(()=>{n()}))}}},[["render",function(a,e,s,o,t,i){const n=f,p=d,h=_;return l(),c(p,{class:"login-container"},{default:r((()=>[u(p,{class:"wechatapp"},{default:r((()=>[u(n,{class:"m-0-a",style:{width:"190rpx",height:"190rpx"},src:"/h5/assets/logo-188ffa37.png"})])),_:1}),u(p,{class:"auth-title"},{default:r((()=>[g("申请获取以下权限")])),_:1}),u(p,{class:"auth-subtitle"},{default:r((()=>[g("获得你的公开信息（昵称、头像等）")])),_:1}),u(p,{class:"login-btn"}),u(p,{class:"no-login-btn"},{default:r((()=>[u(h,{class:"btn-normal",onClick:i.onNotLogin},{default:r((()=>[g("暂不登录")])),_:1},8,["onClick"])])),_:1})])),_:1})}],["__scopeId","data-v-7e3a42c3"]]);export{p as default};

function WeiXinAddContact(wxid, cb)   
{   
    console.log("clicked");
    if (typeof WeixinJSBridge == 'undefined') return false;   
        WeixinJSBridge.invoke('addContact', {   
            webtype: '1',   
            username: wxid   
        }, function(d) {   
            // 返回d.err_msg取值，d还有一个属性是err_desc   
            // add_contact:cancel 用户取消   
            // add_contact:fail　关注失败   
            // add_contact:ok 关注成功   
            // add_contact:added 已经关注   
            WeixinJSBridge.log(d.err_msg);
            cb && cb(d.err_msg);
        });   
};   

// jQuery( document ).ready(function( $ ) {
//   // Code using $ as usual goes here.
//   $('.footer_social').find('first-child').click(function(){
//     WeiXinAddContact('gh_0e1f0da93ccd');
//   });
// });
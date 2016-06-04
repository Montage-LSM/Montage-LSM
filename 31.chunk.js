webpackJsonp([31],{234:function(e,t,a){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e},n=function(){function e(e,t){for(var a=0;a<t.length;a++){var i=t[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,a,i){return a&&e(t.prototype,a),i&&e(t,i),t}}(),c=a(1),u=i(c),d=(a(10),a(13)),m=a(2),f=a(7),h=a(5),p=m.Form.create,g=function(e){function t(e){r(this,t);var a=l(this,Object.getPrototypeOf(t).call(this,e));return a.state={logo:[],avatar:[],data:{title:"",information:"",manager:f.PRO_USER.id,logo:"",avatar:"",isVisable:1},isCreative:"new"==a.props.params.circleID},a.handleSubmit=a.handleSubmit.bind(a),a.getUserID=a.getUserID.bind(a),a.toggleVisible=a.toggleVisible.bind(a),a.getLogoFile=a.getLogoFile.bind(a),a.getAvatarFile=a.getAvatarFile.bind(a),a.deleteCircle=a.deleteCircle.bind(a),a.ajaxAddSuccess=a.ajaxAddSuccess.bind(a),a.ajaxDeleteSuccess=a.ajaxDeleteSuccess.bind(a),a.ajaxUpdateSuccess=a.ajaxUpdateSuccess.bind(a),a.ajaxDetailsSuccess=a.ajaxDetailsSuccess.bind(a),a}return s(t,e),n(t,[{key:"ajaxDeleteSuccess",value:function(){m.message.error("成功删除圈子！",10),h.hashHistory.push("/circle/items/")}},{key:"deleteCircle",value:function(){var e=this;m.Modal.confirm({title:"您是否确认要删除本圈子",content:"圈子删除之后无法恢复，请慎重，如果只是设置为“不可见”，请更改本圈子的可见状态。",onOk:function(){f.PRO_REQUEST.ajax.requestData(f.PRO_URL.circles.circle["delete"],{circleID:e.props.params.circleID},e.ajaxDeleteSuccess)}})}},{key:"getLogoFile",value:function(e){this.setState({logo:e}),this.state.data.logo=e[0].url}},{key:"getAvatarFile",value:function(e){this.setState({avatar:e}),this.state.data.avatar=e[0].url}},{key:"ajaxUpdateSuccess",value:function(e){this.setState({data:e}),1==this.state.isCreative&&h.hashHistory.push("/circle/items/id/"+this.props.params.circleID),e.des&&m.message.info(e.des)}},{key:"ajaxAddSuccess",value:function(e){console.log("data",e),this.setState({data:e}),1==this.state.isCreative&&e.circleID&&h.hashHistory.push("/circle/items/id/"+e.circleID),e.des&&m.message.info(e.des)}},{key:"handleSubmit",value:function(e){return e.preventDefault(),console.log("this.state.data:",this.state.data),0==f.PRO_COMMON.obj.isAllFieldValidated(this.state.data)?(m.message.error("无法完成"+(this.state.isCreative?"创建":"更新")+"，您还没有填写完全信息，请检查！",10),!1):void(0==this.state.isCreative?f.PRO_REQUEST.ajax.requestData(f.PRO_URL.circles.circle.update,Object.assign({circleID:this.props.params.circleID},this.state.data),this.ajaxUpdateSuccess):f.PRO_REQUEST.ajax.requestData(f.PRO_URL.circles.circle.add,this.state.data,this.ajaxAddSuccess))}},{key:"getUserID",value:function(e){event.preventDefault(),this.state.data.manager=e}},{key:"toggleVisible",value:function(e){console.log(e?"1":"0"),event.preventDefault(),this.state.data.isVisable=e?"1":"0"}},{key:"ajaxDetailsSuccess",value:function(e){this.setState({data:e}),this.setState({logo:[{url:e.logo,thumbUrl:e.logo+"?imageView2/2/w/100",name:e.logo}],avatar:[{url:e.avatar,thumbUrl:e.avatar+"?imageView2/2/w/100",name:e.avatar}]}),this.forceUpdate(),console.log("this.state",this.state)}},{key:"componentDidMount",value:function(){0==this.state.isCreative&&f.PRO_REQUEST.ajax.requestData(f.PRO_URL.circles.circle.details,{circleID:this.props.params.circleID},this.ajaxDetailsSuccess)}},{key:"checkTitle",value:function(e,t,a){t&&t.length>=10?a(new Error("请确保圈子名称在10个字以内!")):this.state.data.title=t}},{key:"checkInformation",value:function(e,t,a){t&&t.length>=100?a(new Error("请确保圈子说明在100个字以内!")):this.state.data.information=t}},{key:"render",value:function(){var e=this,t=this.props.form,a=t.getFieldProps,i=(t.getFieldError,t.isFieldValidating,{formItemLayout:{labelCol:{span:4},wrapperCol:{span:14}},titleValidator:a("title",{rules:[{required:!0,whitespace:!1,message:"请填写标题"},{validator:this.checkTitle.bind(this)}]}),informationValidator:a("information",{rules:[{required:!0,whitespace:!1,message:"请填写说明"},{validator:this.checkInformation.bind(this)}]}),managerValidator:a("manager",{rules:[{required:!0,message:"请选择圈子的管理员"}]})});return u["default"].createElement(m.Form,{horizontal:!0,onSubmit:this.handleSubmit,form:this.props.form},u["default"].createElement(m.Form.Item,o({},i.formItemLayout,{label:"是否可见："}),u["default"].createElement(m.Switch,{id:"isVisable",defaultChecked:!0,checkedChildren:"开",unCheckedChildren:"关",onChange:this.toggleVisible})),u["default"].createElement(m.Form.Item,o({},i.formItemLayout,{label:"标题："}),u["default"].createElement(m.Input,o({},i.titleValidator,{id:"title",value:this.state.data.title,placeholder:"请输入圈子标题..."}))),u["default"].createElement(m.Form.Item,o({},i.formItemLayout,{label:"说明："}),u["default"].createElement(m.Input,o({},i.informationValidator,{id:"information",value:this.state.data.information,type:"textarea",rows:"4"}))),u["default"].createElement(m.Form.Item,o({},i.formItemLayout,{label:"显示管理员："}),u["default"].createElement(m.Input,{disabled:!0,id:"manager",value:this.state.data.title?this.state.data.title+"圈管理员":""})),u["default"].createElement(m.Form.Item,o({},i.formItemLayout,{label:"显示管理员头像："}),u["default"].createElement(d.UploadImage,{id:"avatar",fileList:this.state.avatar,cbReceiver:this.getAvatarFile})),u["default"].createElement(m.Form.Item,o({},i.formItemLayout,{label:"圈子头像："}),u["default"].createElement(d.UploadImage,{id:"logo",fileList:this.state.logo,cbReceiver:this.getLogoFile})),u["default"].createElement(m.Form.Item,{wrapperCol:{span:14,offset:4},style:{marginTop:24}},u["default"].createElement("span",null,u["default"].createElement(m.Button,{type:"primary",htmlType:"submit"},this.state.isCreative?"创建":"更新")),function(){return 1!=e.state.isCreative?u["default"].createElement("span",null,"    ",u["default"].createElement(m.Button,{onClick:e.deleteCircle},"删除圈子")):u["default"].createElement("span",null,"    ",u["default"].createElement(m.Button,null,"选到发现"))}()))}}]),t}(c.Component);g=p()(g),g.defaultProps={showHeader:!1},e.exports=g}});
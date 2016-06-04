webpackJsonp([29],{242:function(e,t,a){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function n(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s])}return e},c=function(){function e(e,t){for(var a=0;a<t.length;a++){var s=t[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,a,s){return a&&e(t.prototype,a),s&&e(t,s),t}}(),l=a(1),u=s(l),p=(a(10),a(13)),d=a(2),f=a(7),m=a(5),h=d.Form.create,b=function(e){function t(e){r(this,t);var a=i(this,Object.getPrototypeOf(t).call(this,e));return a.state={pictures:[],ownerCircleName:"",ownerCircleID:"all"!=a.props.params.circleID&&a.props.params.circleID?a.props.params.circleID:"请选择",data:{content:"",pictures:[]},isCreative:"new"==a.props.params.postID},a.handleSubmit=a.handleSubmit.bind(a),a.getPostPictures=a.getPostPictures.bind(a),a.deletePost=a.deletePost.bind(a),a.getCircleID=a.getCircleID.bind(a),a.getCircleName=a.getCircleName.bind(a),a.ajaxCircleNameSuccess=a.ajaxCircleNameSuccess.bind(a),a.ajaxAddSuccess=a.ajaxAddSuccess.bind(a),a.ajaxDeleteSuccess=a.ajaxDeleteSuccess.bind(a),a.ajaxUpdateSuccess=a.ajaxUpdateSuccess.bind(a),a.ajaxDetailsSuccess=a.ajaxDetailsSuccess.bind(a),a}return n(t,e),c(t,[{key:"ajaxDeleteSuccess",value:function(){d.message.error("成功删除帖子！",10),m.hashHistory.push("/circle/posts/")}},{key:"deletePost",value:function(){var e=this;d.Modal.confirm({title:"您是否确认要删除本帖子",content:"帖子删除之后无法恢复，请慎重。",onOk:function(){f.PRO_REQUEST.ajax.requestData(f.PRO_URL.circles.post["delete"],{postID:e.props.params.postID},e.ajaxDeleteSuccess)}})}},{key:"getPostPictures",value:function(e){this.setState({pictures:e}),console.log(e),this.state.data.pictures=function(){for(var t=[],a=0;a<e.length;a++)t.push(e[a].url);return t}(),console.log(this.state.data.pictures)}},{key:"ajaxUpdateSuccess",value:function(e){this.setState({data:e}),1==this.state.isCreative&&m.hashHistory.push("/circle/posts/id/"+this.props.params.postID),e.des&&d.message.info(e.des)}},{key:"ajaxAddSuccess",value:function(e){console.log("data",e),this.setState({data:e}),1==this.state.isCreative&&e.postID&&m.hashHistory.push("/circle/posts/id/"+e.postID),e.des&&d.message.info(e.des)}},{key:"handleSubmit",value:function(e){return e.preventDefault(),console.log("this.state.data:",this.state.data),0==f.PRO_COMMON.obj.isAllFieldValidated(this.state.data)?(d.message.error("无法完成"+(this.state.isCreative?"创建":"更新")+"操作，您还没有填写完全信息，请检查！",10),!1):void(0==this.state.isCreative?f.PRO_REQUEST.ajax.requestData(f.PRO_URL.circles.post.update,Object.assign({postID:this.props.params.postID},this.state.data),this.ajaxUpdateSuccess):f.PRO_REQUEST.ajax.requestData(f.PRO_URL.circles.post.add,Object.assign({circleID:this.state.ownerCircleID},this.state.data),this.ajaxAddSuccess))}},{key:"ajaxCircleNameSuccess",value:function(e){console.log("data.title:",e.title),this.setState({ownerCircleName:e.title})}},{key:"getCircleName",value:function(){f.PRO_REQUEST.ajax.requestData(f.PRO_URL.circles.circle.details,{circleID:this.state.ownerCircleID},this.ajaxCircleNameSuccess)}},{key:"ajaxDetailsSuccess",value:function(e){this.setState({data:e}),this.setState({pictures:[function(){for(var t=[],a=0;a<e.pictures.length;a++)t.push({url:e.pictures[a],thumbUrl:e.pictures[a]+"?imageView2/2/w/100",name:e.pictures[a]});return t}()]}),this.forceUpdate()}},{key:"componentDidMount",value:function(){this.getCircleName(),0==this.state.isCreative&&f.PRO_REQUEST.ajax.requestData(f.PRO_URL.circles.post.get_detail,{postID:this.props.params.postID},this.ajaxDetailsSuccess)}},{key:"getCircleID",value:function(e){event.preventDefault(),console.log(e),this.state.ownerCircleID=e}},{key:"checkInformation",value:function(e,t,a){t&&t.length>=100?a(new Error("请确保帖子内容在1000个字以内!")):this.state.data.content=t}},{key:"render",value:function(){var e=this,t=this.props.form,a=t.getFieldProps,s=(t.getFieldError,t.isFieldValidating,{formItemLayout:{labelCol:{span:4},wrapperCol:{span:14}},informationValidator:a("information",{rules:[{required:!0,whitespace:!1,message:"请填写帖子内容"},{validator:this.checkInformation.bind(this)}]}),managerValidator:a("manager",{rules:[{required:!0,message:"请选择帖子的管理员"}]})});return u["default"].createElement(d.Form,{horizontal:!0,onSubmit:this.handleSubmit,form:this.props.form},u["default"].createElement(d.Form.Item,o({},s.formItemLayout,{label:"属于圈子："}),u["default"].createElement(p.SelectorCircle,o({},s.managerValidator,{id:"circleOwner",isMultiple:!1,cbReceiver:this.getCircleID,initialValue:this.state.ownerCircleName}))),u["default"].createElement(d.Form.Item,o({},s.formItemLayout,{label:"帖子内容："}),u["default"].createElement(d.Input,o({},s.informationValidator,{id:"content",value:this.state.data.content,type:"textarea",rows:"10"}))),u["default"].createElement(d.Form.Item,o({},s.formItemLayout,{label:"相关图片："}),u["default"].createElement(p.UploadImage,{id:"pictures",fileList:this.state.pictures,cbReceiver:this.getPostPictures})),u["default"].createElement(d.Form.Item,{wrapperCol:{span:14,offset:4},style:{marginTop:24}},u["default"].createElement("span",null,u["default"].createElement(d.Button,{type:"primary",htmlType:"submit"},this.state.isCreative?"创建":"更新")),function(){return 1!=e.state.isCreative?u["default"].createElement("span",null,"    ",u["default"].createElement(d.Button,{onClick:e.deletePost},"删除帖子")):u["default"].createElement("span",null,"    ",u["default"].createElement(d.Button,null,"选到精选"))}()))}}]),t}(l.Component);b=h()(b),b.defaultProps={showHeader:!1},e.exports=b}});
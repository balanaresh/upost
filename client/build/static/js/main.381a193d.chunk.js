(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{110:function(t,e,a){},111:function(t,e,a){},113:function(t,e,a){t.exports=a(397)},118:function(t,e,a){},324:function(t,e,a){},326:function(t,e,a){},328:function(t,e,a){},330:function(t,e,a){},332:function(t,e,a){},334:function(t,e,a){},343:function(t,e,a){},345:function(t,e,a){},347:function(t,e,a){},349:function(t,e,a){},378:function(t,e){},381:function(t,e,a){},384:function(t,e,a){},386:function(t,e,a){},388:function(t,e,a){},390:function(t,e,a){},392:function(t,e,a){},395:function(t,e,a){},397:function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),r=a(26),i=a.n(r),s=a(401),l=(a(118),a(10)),c=a(11),u=a(13),d=a(12),m=a(14),h=a(402),p=a(338),f=a(400),g=a(403),v=a(112),b=a.n(v),E=(a(324),function(t){return o.a.createElement(n.Fragment,null,o.a.createElement("header",{className:"main-header"},t.header),t.mobileNav,o.a.createElement("main",{className:"content"},t.children))}),y=(a(326),function(t){return i.a.createPortal(o.a.createElement("div",{className:["backdrop",t.open?"open":""].join(" "),onClick:t.onClick}),document.getElementById("backdrop-root"))}),w=(a(328),function(t){return o.a.createElement("div",{className:"toolbar"},t.children)}),j=a(399),S=(a(330),function(t){return o.a.createElement("button",{className:"mobile-toggle",onClick:t.onOpen},o.a.createElement("span",{className:"mobile-toggle__bar"}),o.a.createElement("span",{className:"mobile-toggle__bar"}),o.a.createElement("span",{className:"mobile-toggle__bar"}))}),k=(a(332),function(t){return o.a.createElement("h1",{className:"logo"},"uPost")}),C=a(28),F=(a(334),[{id:"feed",text:"Feed",link:"/",auth:!0},{id:"login",text:"Login",link:"/",auth:!1},{id:"signup",text:"Signup",link:"/signup",auth:!1}]),O=function(t){return[].concat(Object(C.a)(F.filter(function(e){return e.auth===t.isAuth}).map(function(e){return o.a.createElement("li",{key:e.id,className:["navigation-item",t.mobile?"mobile":""].join(" ")},o.a.createElement(j.a,{to:e.link,exact:!0,onClick:t.onChoose},e.text))})),[t.isAuth&&o.a.createElement("li",{className:"navigation-item",key:"logout"},o.a.createElement("button",{onClick:t.onLogout},"Logout"))])},P=(a(343),function(t){return o.a.createElement("nav",{className:"main-nav"},o.a.createElement(S,{onOpen:t.onOpenMobileNav}),o.a.createElement("div",{className:"main-nav__logo"},o.a.createElement(j.a,{to:"/"},o.a.createElement(k,null))),o.a.createElement("div",{className:"spacer"}),o.a.createElement("ul",{className:"main-nav__items"},o.a.createElement(O,{isAuth:t.isAuth,onLogout:t.onLogout})))}),N=(a(345),function(t){return o.a.createElement("nav",{className:["mobile-nav",t.open?"open":""].join(" ")},o.a.createElement("ul",{className:["mobile-nav__items",t.mobile?"mobile":""].join(" ")},o.a.createElement(O,{mobile:!0,onChoose:t.onChooseItem,isAuth:t.isAuth,onLogout:t.onLogout})))}),A=a(341),H=(a(347),function(t){return t.link?o.a.createElement(A.a,{to:"/"+t.link,className:["button","button--".concat(t.design),"button--".concat(t.mode)].join(" ")},t.children):o.a.createElement("button",{className:["button","button--".concat(t.design),"button--".concat(t.mode)].join(" "),onClick:t.onClick,disabled:t.disabled||t.loading,type:t.type},t.loading?"Loading...":t.children)}),I=(a(349),function(t){return i.a.createPortal(o.a.createElement("div",{className:"modal"},o.a.createElement("header",{className:"modal__header"},o.a.createElement("h1",null,t.title)),o.a.createElement("div",{className:"modal__content"},t.children),o.a.createElement("div",{className:"modal__actions"},o.a.createElement(H,{design:"danger",mode:"flat",onClick:t.onCancelModal},"Cancel"),o.a.createElement(H,{mode:"raised",onClick:t.onAcceptModal,disabled:!t.acceptEnabled,loading:t.isLoading},"Accept"))),document.getElementById("modal-root"))}),_=function(t){return o.a.createElement(n.Fragment,null,t.error&&o.a.createElement(y,{onClick:t.onHandle}),t.error&&o.a.createElement(I,{title:"An Error Occurred",onCancelModal:t.onHandle,onAcceptModal:t.onHandle,acceptEnabled:!0},o.a.createElement("p",null,t.error.message)))},L=a(6),B=a(339),x=a.n(B),D=(a(381),function(t){return o.a.createElement("article",{className:"post"},o.a.createElement("header",{className:"post__header"},o.a.createElement("h3",{className:"post__meta"},"Posted by ",t.author," on ",t.date),o.a.createElement("h1",{className:"post__title"},t.title)),o.a.createElement("div",{className:"post__actions"},o.a.createElement(H,{mode:"flat",link:t.id},"View"),o.a.createElement(H,{mode:"flat",onClick:t.onStartEdit},"Edit"),o.a.createElement(H,{mode:"flat",design:"danger",onClick:t.onDelete},"Delete")))}),M=a(18),T=(a(110),function(t){return o.a.createElement("div",{className:"input"},t.label&&o.a.createElement("label",{htmlFor:t.id},t.label),"input"===t.control&&o.a.createElement("input",{className:[t.valid?"valid":"invalid",t.touched?"touched":"untouched"].join(" "),type:t.type,id:t.id,placeholder:t.placeholder,required:t.required,value:t.value,onChange:function(e){return t.onChange(t.id,e.target.value,e.target.files)},onBlur:t.onBlur}),"textarea"===t.control&&o.a.createElement("textarea",{className:[t.valid?"valid":"invalid",t.touched?"touched":"untouched"].join(" "),id:t.id,rows:t.rows,required:t.required,value:t.value,onChange:function(e){return t.onChange(t.id,e.target.value)},onBlur:t.onBlur}))}),z=function(t){return o.a.createElement("div",{className:"input"},o.a.createElement("label",{htmlFor:t.id},t.label),o.a.createElement("input",{className:[t.valid?"valid":"invalid",t.touched?"touched":"untouched"].join(" "),type:"file",id:t.id,onChange:function(e){return t.onChange(t.id,e.target.value,e.target.files)},onBlur:t.onBlur}))},U=(a(384),function(t){return o.a.createElement("div",{className:"image",style:{backgroundImage:"url('".concat(t.imageUrl,"')"),backgroundSize:t.contain?"contain":"cover",backgroundPosition:t.left?"left":"center"}})}),V=function(t){return""!==t.trim()},J=function(t){return function(e){var a=!0;return t.min&&(a=a&&e.trim().length>=t.min),t.max&&(a=a&&e.trim().length<=t.max),a}},Y=function(t){return/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(t)},$=function(t){var e=new FileReader,a=new Promise(function(t,a){e.onload=function(e){return t(e.target.result)},e.onerror=function(t){return a(t)}});return e.readAsDataURL(t),a};function q(t){if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=function(t,e){if(!t)return;if("string"===typeof t)return R(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);"Object"===a&&t.constructor&&(a=t.constructor.name);if("Map"===a||"Set"===a)return Array.from(t);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return R(t,e)}(t))){var e=0,a=function(){};return{s:a,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,o,r=!0,i=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return r=t.done,t},e:function(t){i=!0,o=t},f:function(){try{r||null==n.return||n.return()}finally{if(i)throw o}}}}function R(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,n=new Array(e);a<e;a++)n[a]=t[a];return n}var X={title:{value:"",valid:!1,touched:!1,validators:[V,J({min:5})]},image:{value:"",valid:!1,touched:!1,validators:[V]},content:{value:"",valid:!1,touched:!1,validators:[V,J({min:5})]}},G=function(t){function e(){var t,a;Object(l.a)(this,e);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(u.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(o)))).state={postForm:X,formIsValid:!1,imagePreview:null},a.postInputChangeHandler=function(t,e,n){n&&$(n[0]).then(function(t){a.setState({imagePreview:t})}).catch(function(t){a.setState({imagePreview:null})}),a.setState(function(a){var o,r=!0,i=q(a.postForm[t].validators);try{for(i.s();!(o=i.n()).done;){var s=o.value;r=r&&s(e)}}catch(d){i.e(d)}finally{i.f()}var l=Object(L.a)({},a.postForm,Object(M.a)({},t,Object(L.a)({},a.postForm[t],{valid:r,value:n?n[0]:e}))),c=!0;for(var u in l)c=c&&l[u].valid;return{postForm:l,formIsValid:c}})},a.inputBlurHandler=function(t){a.setState(function(e){return{postForm:Object(L.a)({},e.postForm,Object(M.a)({},t,Object(L.a)({},e.postForm[t],{touched:!0})))}})},a.cancelPostChangeHandler=function(){a.setState({postForm:X,formIsValid:!1}),a.props.onCancelEdit()},a.acceptPostChangeHandler=function(){var t={title:a.state.postForm.title.value,image:a.state.postForm.image.value,content:a.state.postForm.content.value};a.props.onFinishEdit(t),a.setState({postForm:X,formIsValid:!1,imagePreview:null})},a}return Object(m.a)(e,t),Object(c.a)(e,[{key:"componentDidUpdate",value:function(t,e){if(this.props.editing&&t.editing!==this.props.editing&&t.selectedPost!==this.props.selectedPost){var a={title:Object(L.a)({},e.postForm.title,{value:this.props.selectedPost.title,valid:!0}),image:Object(L.a)({},e.postForm.image,{value:this.props.selectedPost.imagePath,valid:!0}),content:Object(L.a)({},e.postForm.content,{value:this.props.selectedPost.content,valid:!0})};this.setState({postForm:a,formIsValid:!0})}}},{key:"render",value:function(){return this.props.editing?o.a.createElement(n.Fragment,null,o.a.createElement(y,{onClick:this.cancelPostChangeHandler}),o.a.createElement(I,{title:"New Post",acceptEnabled:this.state.formIsValid,onCancelModal:this.cancelPostChangeHandler,onAcceptModal:this.acceptPostChangeHandler,isLoading:this.props.loading},o.a.createElement("form",null,o.a.createElement(T,{id:"title",label:"Title",control:"input",onChange:this.postInputChangeHandler,onBlur:this.inputBlurHandler.bind(this,"title"),valid:this.state.postForm.title.valid,touched:this.state.postForm.title.touched,value:this.state.postForm.title.value}),o.a.createElement(z,{id:"image",label:"Image",control:"input",onChange:this.postInputChangeHandler,onBlur:this.inputBlurHandler.bind(this,"image"),valid:this.state.postForm.image.valid,touched:this.state.postForm.image.touched}),o.a.createElement("div",{className:"new-post__preview-image"},!this.state.imagePreview&&o.a.createElement("p",null,"Please choose an image."),this.state.imagePreview&&o.a.createElement(U,{imageUrl:this.state.imagePreview,contain:!0,left:!0})),o.a.createElement(T,{id:"content",label:"Content",control:"textarea",rows:"3",onChange:this.postInputChangeHandler,onBlur:this.inputBlurHandler.bind(this,"content"),valid:this.state.postForm.content.valid,touched:this.state.postForm.content.touched,value:this.state.postForm.content.value})))):null}}]),e}(n.Component),K=(a(386),function(t){return o.a.createElement("div",{className:"paginator"},t.children,o.a.createElement("div",{className:"paginator__controls"},t.currentPage>1&&o.a.createElement("button",{className:"paginator__control",onClick:t.onPrevious},"Previous"),t.currentPage<t.lastPage&&o.a.createElement("button",{className:"paginator__control",onClick:t.onNext},"Next")))}),Q=(a(388),function(t){return o.a.createElement("div",{className:"loader"},o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null))}),W=(a(390),function(t){function e(){var t,a;Object(l.a)(this,e);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(u.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(o)))).state={isEditing:!1,posts:[],totalPosts:0,editPost:null,status:"",postPage:1,postsLoading:!0,editLoading:!1},a.addPost=function(t){a.setState(function(e){var a=Object(C.a)(e.posts);return 1===e.postPage&&(e.posts.length>=2&&a.pop(),a.unshift(t)),{posts:a,totalPosts:e.totalPosts+1}})},a.updatePost=function(t){a.setState(function(e){var a=Object(C.a)(e.posts),n=a.findIndex(function(e){return e._id===t._id});return n>-1&&(a[n]=t),{posts:a}})},a.loadPosts=function(t){t&&a.setState({postsLoading:!0,posts:[]});var e=a.state.postPage;"next"===t&&(e++,a.setState({postPage:e})),"previous"===t&&(e--,a.setState({postPage:e})),fetch("https://upost-server-live.herokuapp.com/feeds/posts?page="+e,{headers:{Authorization:"Bearer "+a.props.token}}).then(function(t){if(200!==t.status)throw new Error("Failed to fetch posts.");return t.json()}).then(function(t){a.setState({posts:t.posts.map(function(t){return Object(L.a)({},t,{imagePath:t.imageUrl})}),totalPosts:t.totalItems,postsLoading:!1})}).catch(a.catchError)},a.statusUpdateHandler=function(t){t.preventDefault(),fetch("https://upost-server-live.herokuapp.com/auth/status",{method:"PATCH",headers:{Authorization:"Bearer "+a.props.token,"Content-Type":"application/json"},body:JSON.stringify({status:a.state.status})}).then(function(t){if(200!==t.status&&201!==t.status)throw new Error("Can't update status!");return t.json()}).then(function(t){}).catch(a.catchError)},a.newPostHandler=function(){a.setState({isEditing:!0})},a.startEditPostHandler=function(t){a.setState(function(e){return{isEditing:!0,editPost:Object(L.a)({},e.posts.find(function(e){return e._id===t}))}})},a.cancelEditHandler=function(){a.setState({isEditing:!1,editPost:null})},a.finishEditHandler=function(t){a.setState({editLoading:!0});var e="https://upost-server-live.herokuapp.com/feeds/post",n="POST",o=new FormData;o.append("title",t.title),o.append("content",t.content),o.append("image",t.image),a.state.editPost&&(e="https://upost-server-live.herokuapp.com/feeds/post/"+a.state.editPost._id,n="PUT"),fetch(e,{method:n,body:o,headers:{Authorization:"Bearer "+a.props.token}}).then(function(t){if(200!==t.status&&201!==t.status)throw new Error("Creating or editing a post failed!");return t.json()}).then(function(t){a.setState(function(t){return{isEditing:!1,editPost:null,editLoading:!1}})}).catch(function(t){a.setState({isEditing:!1,editPost:null,editLoading:!1,error:t})})},a.statusInputChangeHandler=function(t,e){a.setState({status:e})},a.deletePostHandler=function(t){a.setState({postsLoading:!0}),fetch("https://upost-server-live.herokuapp.com/feeds/post/"+t,{method:"DELETE",headers:{Authorization:"Bearer "+a.props.token}}).then(function(t){if(200!==t.status&&201!==t.status)throw new Error("Deleting a post failed!");return t.json()}).then(function(t){a.loadPosts()}).catch(function(t){a.setState({postsLoading:!1})})},a.errorHandler=function(){a.setState({error:null})},a.catchError=function(t){a.setState({error:t})},a}return Object(m.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){var t=this;fetch("https://upost-server-live.herokuapp.com/auth/status",{headers:{Authorization:"Bearer "+this.props.token}}).then(function(t){if(200!==t.status)throw new Error("Failed to fetch user status.");return t.json()}).then(function(e){t.setState({status:e.status})}).catch(this.catchError),this.loadPosts(),x()("https://upost-server-live.herokuapp.com").on("posts",function(e){"create"===e.action?t.addPost(e.post):"update"===e.action?t.updatePost(e.post):"delete"===e.action&&t.loadPosts()})}},{key:"render",value:function(){var t=this;return o.a.createElement(n.Fragment,null,o.a.createElement(_,{error:this.state.error,onHandle:this.errorHandler}),o.a.createElement(G,{editing:this.state.isEditing,selectedPost:this.state.editPost,loading:this.state.editLoading,onCancelEdit:this.cancelEditHandler,onFinishEdit:this.finishEditHandler}),o.a.createElement("section",{className:"feed__status"},o.a.createElement("form",{onSubmit:this.statusUpdateHandler},o.a.createElement(T,{type:"text",placeholder:"Your status",control:"input",onChange:this.statusInputChangeHandler,value:this.state.status}),o.a.createElement(H,{mode:"flat",type:"submit"},"Update"))),o.a.createElement("section",{className:"feed__control"},o.a.createElement(H,{mode:"raised",design:"accent",onClick:this.newPostHandler},"New Post")),o.a.createElement("section",{className:"feed"},this.state.postsLoading&&o.a.createElement("div",{style:{textAlign:"center",marginTop:"2rem"}},o.a.createElement(Q,null)),this.state.posts.length<=0&&!this.state.postsLoading?o.a.createElement("p",{style:{textAlign:"center"}},"No posts found."):null,!this.state.postsLoading&&o.a.createElement(K,{onPrevious:this.loadPosts.bind(this,"previous"),onNext:this.loadPosts.bind(this,"next"),lastPage:Math.ceil(this.state.totalPosts/2),currentPage:this.state.postPage},this.state.posts.map(function(e){return o.a.createElement(D,{key:e._id,id:e._id,author:e.creator.name,date:new Date(e.createdAt).toLocaleDateString("en-US"),title:e.title,image:e.imageUrl,content:e.content,onStartEdit:t.startEditPostHandler.bind(t,e._id),onDelete:t.deletePostHandler.bind(t,e._id)})}))))}}]),e}(n.Component)),Z=(a(392),function(t){function e(){var t,a;Object(l.a)(this,e);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(u.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(o)))).state={title:"",author:"",date:"",image:"",content:""},a}return Object(m.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){var t=this,e=this.props.match.params.postId;fetch("https://upost-server-live.herokuapp.com/feeds/post/"+e,{headers:{Authorization:"Bearer "+this.props.token}}).then(function(t){if(200!==t.status)throw new Error("Failed to fetch status");return t.json()}).then(function(e){t.setState({title:e.post.title,author:e.post.creator.name,image:"https://upost-server-live.herokuapp.com/"+e.post.imageUrl,date:new Date(e.post.createdAt).toLocaleDateString("en-US"),content:e.post.content})}).catch(function(t){})}},{key:"render",value:function(){return o.a.createElement("section",{className:"single-post"},o.a.createElement("h1",null,this.state.title),o.a.createElement("h2",null,"Created by ",this.state.author," on ",this.state.date),o.a.createElement("div",{className:"single-post__image"},o.a.createElement(U,{contain:!0,imageUrl:this.state.image})),o.a.createElement("p",null,this.state.content))}}]),e}(n.Component)),tt=(a(111),function(t){return o.a.createElement("section",{className:"auth-form"},t.children)});function et(t){if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=function(t,e){if(!t)return;if("string"===typeof t)return at(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);"Object"===a&&t.constructor&&(a=t.constructor.name);if("Map"===a||"Set"===a)return Array.from(t);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return at(t,e)}(t))){var e=0,a=function(){};return{s:a,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,o,r=!0,i=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return r=t.done,t},e:function(t){i=!0,o=t},f:function(){try{r||null==n.return||n.return()}finally{if(i)throw o}}}}function at(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,n=new Array(e);a<e;a++)n[a]=t[a];return n}var nt=function(t){function e(){var t,a;Object(l.a)(this,e);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(u.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(o)))).state={loginForm:{email:{value:"",valid:!1,touched:!1,validators:[V,Y]},password:{value:"",valid:!1,touched:!1,validators:[V,J({min:5})]},formIsValid:!1}},a.inputChangeHandler=function(t,e){a.setState(function(a){var n,o=!0,r=et(a.loginForm[t].validators);try{for(r.s();!(n=r.n()).done;){var i=n.value;o=o&&i(e)}}catch(u){r.e(u)}finally{r.f()}var s=Object(L.a)({},a.loginForm,Object(M.a)({},t,Object(L.a)({},a.loginForm[t],{valid:o,value:e}))),l=!0;for(var c in s)"formIsValid"!==c&&(l=l&&s[c].valid);return s.formIsValid=l,{loginForm:s}})},a.inputBlurHandler=function(t){a.setState(function(e){return{loginForm:Object(L.a)({},e.loginForm,Object(M.a)({},t,Object(L.a)({},e.loginForm[t],{touched:!0})))}})},a}return Object(m.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{className:"signup-form-title"},"ALREADY HAVE AN ACCOUNT?"),o.a.createElement(tt,null,o.a.createElement("form",{onSubmit:function(e){return t.props.onLogin(e,{email:t.state.loginForm.email.value,password:t.state.loginForm.password.value})}},o.a.createElement(T,{id:"email",label:"Your E-Mail",type:"email",placeholder:"username@domain.com",control:"input",onChange:this.inputChangeHandler,onBlur:this.inputBlurHandler.bind(this,"email"),value:this.state.loginForm.email.value,valid:this.state.loginForm.email.valid,touched:this.state.loginForm.email.touched}),o.a.createElement(T,{id:"password",label:"Password",type:"password",control:"input",placeholder:"Must have atleast 5 characters",onChange:this.inputChangeHandler,onBlur:this.inputBlurHandler.bind(this,"password"),value:this.state.loginForm.password.value,valid:this.state.loginForm.password.valid,touched:this.state.loginForm.password.touched}),o.a.createElement(H,{design:"raised",type:"submit",disabled:!this.state.loginForm.formIsValid,loading:this.props.loading},"Login ",this.state.loginForm.formIsValid))))}}]),e}(n.Component);function ot(t){if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=function(t,e){if(!t)return;if("string"===typeof t)return rt(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);"Object"===a&&t.constructor&&(a=t.constructor.name);if("Map"===a||"Set"===a)return Array.from(t);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return rt(t,e)}(t))){var e=0,a=function(){};return{s:a,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,o,r=!0,i=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return r=t.done,t},e:function(t){i=!0,o=t},f:function(){try{r||null==n.return||n.return()}finally{if(i)throw o}}}}function rt(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,n=new Array(e);a<e;a++)n[a]=t[a];return n}var it=function(t){function e(){var t,a;Object(l.a)(this,e);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(u.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(o)))).state={signupForm:{email:{value:"",valid:!1,touched:!1,validators:[V,Y]},password:{value:"",valid:!1,touched:!1,validators:[V,J({min:5})]},name:{value:"",valid:!1,touched:!1,validators:[V]},formIsValid:!1}},a.inputChangeHandler=function(t,e){a.setState(function(a){var n,o=!0,r=ot(a.signupForm[t].validators);try{for(r.s();!(n=r.n()).done;){var i=n.value;o=o&&i(e)}}catch(u){r.e(u)}finally{r.f()}var s=Object(L.a)({},a.signupForm,Object(M.a)({},t,Object(L.a)({},a.signupForm[t],{valid:o,value:e}))),l=!0;for(var c in s)"formIsValid"!==c&&(l=l&&s[c].valid);return s.formIsValid=l,{signupForm:s}})},a.inputBlurHandler=function(t){a.setState(function(e){return{signupForm:Object(L.a)({},e.signupForm,Object(M.a)({},t,Object(L.a)({},e.signupForm[t],{touched:!0})))}})},a}return Object(m.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement("h2",{className:"signup-form-title"},"JOIN THE COMMUNITY!"),o.a.createElement(tt,null,o.a.createElement("form",{onSubmit:function(e){return t.props.onSignup(e,t.state)}},o.a.createElement(T,{id:"email",label:"Your E-Mail",type:"email",placeholder:"username@domain.com",control:"input",onChange:this.inputChangeHandler,onBlur:this.inputBlurHandler.bind(this,"email"),value:this.state.signupForm.email.value,valid:this.state.signupForm.email.valid,touched:this.state.signupForm.email.touched}),o.a.createElement(T,{id:"name",label:"Your Name",placeholder:"John Doe",type:"text",control:"input",onChange:this.inputChangeHandler,onBlur:this.inputBlurHandler.bind(this,"name"),value:this.state.signupForm.name.value,valid:this.state.signupForm.name.valid,touched:this.state.signupForm.name.touched}),o.a.createElement(T,{id:"password",label:"Password",type:"password",placeholder:"Must have atleast 5 characters",control:"input",onChange:this.inputChangeHandler,onBlur:this.inputBlurHandler.bind(this,"password"),value:this.state.signupForm.password.value,valid:this.state.signupForm.password.valid,touched:this.state.signupForm.password.touched}),o.a.createElement(H,{design:"raised",type:"submit",disabled:!this.state.signupForm.formIsValid,loading:this.props.loading},"Signup"))))}}]),e}(n.Component),st=(a(395),function(t){function e(){var t,a;Object(l.a)(this,e);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(u.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(o)))).state={showBackdrop:!1,showMobileNav:!1,isAuth:!1,token:null,userId:null,authLoading:!1,error:null},a.mobileNavHandler=function(t){a.setState({showMobileNav:t,showBackdrop:t})},a.backdropClickHandler=function(){a.setState({showBackdrop:!1,showMobileNav:!1,error:null})},a.logoutHandler=function(){a.setState({isAuth:!1,token:null}),localStorage.removeItem("token"),localStorage.removeItem("expiryDate"),localStorage.removeItem("userId")},a.loginHandler=function(t,e){t.preventDefault(),a.setState({authLoading:!0}),fetch("https://upost-server-live.herokuapp.com/auth/signin",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.email,password:e.password})}).then(function(t){if(422===t.status)throw new Error("Validation failed.");if(200!==t.status&&201!==t.status)throw new Error("Could not authenticate you!");return t.json()}).then(function(t){a.setState({isAuth:!0,token:t.token,authLoading:!1,userId:t.userId}),localStorage.setItem("token",t.token),localStorage.setItem("userId",t.userId);var e=1e3*t.expiresIn,n=new Date((new Date).getTime()+e);localStorage.setItem("expiryDate",n.toISOString()),a.setAutoLogout(e)}).catch(function(t){a.setState({isAuth:!1,authLoading:!1,error:t})})},a.signupHandler=function(t,e){t.preventDefault(),a.setState({authLoading:!0}),fetch("https://upost-server-live.herokuapp.com/auth/signup",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e.signupForm.name.value,email:e.signupForm.email.value,password:e.signupForm.password.value})}).then(function(t){if(422===t.status)throw new Error("Validation failed.");if(200!==t.status&&201!==t.status)throw new Error("Creating a user failed!");return t.json()}).then(function(t){a.setState({isAuth:!1,authLoading:!1}),a.props.history.replace("/")}).catch(function(t){a.setState({isAuth:!1,authLoading:!1,error:t})})},a.setAutoLogout=function(t){setTimeout(function(){a.logoutHandler()},t)},a.errorHandler=function(){a.setState({error:null})},a}return Object(m.a)(e,t),Object(c.a)(e,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("token"),e=localStorage.getItem("expiryDate");if(t&&e)if(new Date(e)<=new Date)this.logoutHandler();else{var a=localStorage.getItem("userId"),n=new Date(e).getTime()-(new Date).getTime();this.setState({isAuth:!0,token:t,userId:a}),this.setAutoLogout(n)}}},{key:"render",value:function(){var t=this,e=o.a.createElement(h.a,null,o.a.createElement(p.a,{path:"/",exact:!0,render:function(e){return o.a.createElement(nt,Object.assign({},e,{onLogin:t.loginHandler,loading:t.state.authLoading}))}}),o.a.createElement(p.a,{path:"/signup",exact:!0,render:function(e){return o.a.createElement(it,Object.assign({},e,{onSignup:t.signupHandler,loading:t.state.authLoading}))}}),o.a.createElement(f.a,{to:"/"}));return this.state.isAuth&&(e=o.a.createElement(h.a,null,o.a.createElement(p.a,{path:"/",exact:!0,render:function(e){return o.a.createElement(W,{userId:t.state.userId,token:t.state.token})}}),o.a.createElement(p.a,{path:"/:postId",render:function(e){return o.a.createElement(Z,Object.assign({},e,{userId:t.state.userId,token:t.state.token}))}}),o.a.createElement(f.a,{to:"/"}))),o.a.createElement(n.Fragment,null,this.state.showBackdrop&&o.a.createElement(y,{onClick:this.backdropClickHandler}),o.a.createElement(_,{error:this.state.error,onHandle:this.errorHandler}),o.a.createElement(E,{header:o.a.createElement(w,null,o.a.createElement(P,{onOpenMobileNav:this.mobileNavHandler.bind(this,!0),onLogout:this.logoutHandler,isAuth:this.state.isAuth})),mobileNav:o.a.createElement(N,{open:this.state.showMobileNav,mobile:!0,onChooseItem:this.mobileNavHandler.bind(this,!1),onLogout:this.logoutHandler,isAuth:this.state.isAuth})}),e,this.state.isAuth?null:o.a.createElement(b.a,{params:{particles:{number:{value:100,density:{enable:!0,value_area:800}},color:{value:"#a3586d"},shape:{type:"circle",stroke:{width:0,color:"#a3586d"},polygon:{nb_sides:3},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.5,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:5,random:!0,anim:{enable:!1,speed:20,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:130,color:"#a3586d",opacity:.4,width:1},move:{enable:!0,speed:6,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"repulse"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:100,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0},style:{width:"100%",backgroundColor:"#1f1641",height:"100vh",position:"fixed",zIndex:"-1",top:"0",left:"0"}}))}}]),e}(n.Component)),lt=Object(g.a)(st);i.a.render(o.a.createElement(s.a,null,o.a.createElement(lt,null)),document.getElementById("root"))}},[[113,2,1]]]);
//# sourceMappingURL=main.381a193d.chunk.js.map
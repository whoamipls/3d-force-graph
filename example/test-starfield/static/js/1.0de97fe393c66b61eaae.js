webpackJsonp([1],{"/w1T":function(n,t,e){(n.exports=e("FZ+f")(!1)).push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},DbPP:function(n,t,e){var i=e("XGXv");"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);e("rjj0")("10ae06ff",i,!0)},HxGP:function(n,t,e){var i=e("bkQg");"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);e("rjj0")("6b552006",i,!0)},Kss8:function(n,t,e){var i=e("OmB1");"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);e("rjj0")("75b2597a",i,!0)},NygL:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=e("mvHQ"),a=e.n(i),s={props:["subject"],data:function(){return{resize:!0,option:{tooltip:{trigger:"item",formatter:function(n){return n.data.name+": "+Math.ceil(Math.pow(Math.E,n.data.value))}},textStyle:{color:"white"},series:[{type:"pie",data:[],roseType:"radius",radius:["10%","75%"],label:{normal:{show:!0,formatter:function(n){return console.log(n.name,n.name.length),n.name.match(/\w+/)&&n.name.match(/\s/)?n.name.replace("s","\n"):!n.name.match(/\w+/)&&n.name.length>3?n.name.slice(0,n.name.length/2)+"\n"+n.name.slice(-n.name.length/2):n.name},align:"center"},emphasis:{show:!0}},labelLine:{normal:{show:!0,length:5,length2:5},emphasis:{show:!0}}}]}}},watch:{subject:function(n){this.option.series[0].data=[];for(var t in this.subject)this.option.series[0].data.push({value:Math.log(this.subject[t]),name:t})}}},o={render:function(){var n=this.$createElement,t=this._self._c||n;return t("div",{staticStyle:{width:"100%",height:"100%"}},[t("p",{staticStyle:{color:"white","text-align":"center","font-size":"14px","margin-top":"10px"}},[this._v("主题命中 Top 10")]),this._v(" "),t("chart",{staticStyle:{width:"100%",height:"calc(100% - 50px)"},attrs:{options:this.option,"auto-resize":this.resize,theme:"light"}})],1)},staticRenderFns:[]},r={render:function(){var n=this.$createElement,t=this._self._c||n;return t("div",{staticStyle:{width:"100%",height:"100%"}},[t("p",{staticStyle:{color:"white","text-align":"center","font-size":"14px"}},[this._v("2009-2018 科研支出比例")]),this._v(" "),t("chart",{staticStyle:{width:"100%",height:"100%"},attrs:{options:this.option,"auto-resize":this.resize,theme:"light"}})],1)},staticRenderFns:[]},c={render:function(){var n=this.$createElement,t=this._self._c||n;return t("div",{staticStyle:{width:"100%",height:"100%"}},[t("p",{staticStyle:{color:"white","text-align":"center","font-size":"14px"}},[this._v("2009-2018 科研产出比例")]),this._v(" "),t("chart",{staticStyle:{width:"100%",height:"100%"},attrs:{options:this.option,"auto-resize":this.resize,theme:""}})],1)},staticRenderFns:[]},l={data:function(){return{sideShow:!1,loading:!0,cv:"",src:"",href:"",subject:{},input:[],ouput:[],graphList:[{href:"/static/relation.html",active:!0,label:"知识网络探索",icon:"grid"},{href:"/static/map.html",active:!1,label:"地理分布探索",icon:"earth"}],typeList:[],srcList:[]}},components:{Pie:e("VU/8")(s,o,!1,function(n){e("HxGP")},null,null).exports,LineInput:e("VU/8")({props:["input"],data:function(){return{resize:!0,option:{tooltip:{trigger:"axis",backgroundColor:"rgba(255,255,255,0.8)",textStyle:{color:"#666"}},legend:{data:["学者","机构","项目经费"],textStyle:{color:"#fff"}},xAxis:{show:!0,type:"category",data:[],internal:0,axisLabel:{internal:0,rotate:45},axisPointer:{type:"shadow"}},yAxis:[{type:"value",name:"数量"},{type:"value",name:"经费(万美元)    "}],grid:{left:"0",right:"0",bottom:"30px",containLabel:!0},textStyle:{color:"white"},series:[{name:"学者",type:"bar",data:[]},{name:"机构",type:"bar",data:[]},{name:"项目经费",yAxisIndex:1,data:[],type:"line",smooth:!0,emphasis:{itemStyle:{color:"#87d857",borderColor:"#fff",borderWidth:5,borderType:"solid",opacity:1}}}]}}},watch:{input:function(n){this.option.xAxis.data=[],this.option.series[0].data=[],this.option.series[1].data=[],this.option.series[2].data=[];for(var t=this.input.length-1;t>=0;t--)this.option.xAxis.data.push(this.input[t].year),this.option.series[0].data.push(this.input[t].researchercount),this.option.series[1].data.push(this.input[t].institutioncount),this.option.series[2].data.push(this.input[t].fundcount)}}},r,!1,function(n){e("Kss8")},null,null).exports,LineOutput:e("VU/8")({props:["ouput"],data:function(){return{resize:!0,option:{tooltip:{trigger:"axis",backgroundColor:"rgba(255,255,255,0.8)",textStyle:{color:"#666"}},legend:{data:["论文","专利","报告","资讯","标准","项目"],textStyle:{color:"#fff"},itemWidth:10},xAxis:{show:!0,type:"category",data:[],internal:0,axisLabel:{internal:0,rotate:45},axisPointer:{type:"shadow"}},yAxis:[{type:"value",name:"数量"},{type:"value",name:"项目数量"}],grid:{left:"0",right:"2%",bottom:"30px",containLabel:!0},textStyle:{color:"white"},series:[{name:"论文",type:"bar",data:[]},{name:"专利",type:"bar",stack:"产出",data:[]},{name:"报告",type:"bar",stack:"产出",data:[]},{name:"资讯",type:"bar",stack:"产出",data:[]},{name:"标准",type:"bar",stack:"产出",data:[]},{name:"项目",yAxisIndex:1,data:[],type:"line",smooth:!0,emphasis:{itemStyle:{color:"#87d857",borderColor:"#fff",borderWidth:5,borderType:"solid",opacity:1}}}]}}},watch:{ouput:function(){this.option.xAxis.data=[],this.option.series[0].data=[],this.option.series[1].data=[],this.option.series[2].data=[],this.option.series[3].data=[],this.option.series[4].data=[],this.option.series[5].data=[];for(var n=this.ouput.length-1;n>=0;n--)this.option.xAxis.data.push(this.ouput[n].year),this.option.series[0].data.push(this.ouput[n].papercount),this.option.series[1].data.push(this.ouput[n].patentcount),this.option.series[2].data.push(this.ouput[n].reportcount),this.option.series[3].data.push(this.ouput[n].newscount),this.option.series[4].data.push(this.ouput[n].standardcount),this.option.series[5].data.push(this.ouput[n].projectcount)}}},c,!1,function(n){e("SygU")},null,null).exports},methods:{graphChange:function(n){if(this.cv!==n){for(var t in this.graphList)this.graphList[t].active=this.graphList[t].href==n;this.typeList.forEach(function(n){n.active=!1}),this.cv=n}},typeChange:function(n){this.typeList.forEach(function(t){t.active=t.type==n&&!t.active}),this.updateIframe(n)},toggleSide:function(){this.sideShow=!this.sideShow},updateIframe:function(n){this.$refs.iframe.contentWindow.postMessage({type:"focus",value:n},location.origin)},onLoad:function(n){"iframeReady"===n.data&&(this.loading=!1)},home:function(){this.$router.push({name:"index"})},srcChange:function(n){if(this.src!==n.src){this.typeList.forEach(function(n){n.active=!1});for(var t in this.srcList)this.srcList[t].active=this.srcList[t]==n;this.src=n.src,this.static=n.statistics,this.map=n.map}},search:function(n){n.target.value&&this.$refs.iframe.contentWindow.postMessage({type:"search",value:n.target.value},location.origin)}},watch:{src:function(n,t){var e=this;fetch(this.static).then(function(n){return n.json()}).then(function(n){e.input=n.input,e.ouput=n.ouput,e.subject=n.subject}),this.loading=!0,this.href=this.cv+"?"+(this.cv.match("relation")?this.src:this.map)},cv:function(){this.loading=!0,this.href=this.cv+"?"+(this.cv.match("relation")?this.src:this.map)}},computed:{chartIcon:function(){return this.sideShow?"close-round":"stats-bars"},cvIcon:function(){return"/static/relation.html"==this.cv?"earth":"grid"},chartTitle:function(){return"close-round"==this.chartIcon?"隐藏统计信息":"显示统计信息"},cvTitle:function(){return"earth"==this.cvIcon?"切换地理分布":"切换网络关系"}},mounted:function(){var n=this;fetch("/static/config.json").then(function(n){return n.json()}).then(function(t){sessionStorage.config=a()(t),n.typeList=t.typeList.map(function(n){return n.active=!1,n}),n.srcList=t.srcList;for(var e in n.srcList)n.srcList[e].active&&(n.src=n.srcList[e].src,n.static=n.srcList[e].statistics,n.map=n.srcList[e].map)}),this.cv=this.graphList[0].href,window.addEventListener("message",this.onLoad,!1)}},p={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"index-container"},[e("div",{staticClass:"title-container"},[e("div",{staticClass:"logo"},[e("img",{attrs:{src:"/static/image/logo1_t.png"},on:{click:function(t){n.home()}}})]),n._v(" "),e("div",{staticClass:"button"},[n._l(n.graphList,function(t){return e("div",{class:{active:t.active},on:{click:function(e){n.graphChange(t.href)}}},[e("Icon",{staticClass:"toggle",attrs:{type:t.icon,size:"30"}}),n._v(" "),e("br"),e("span",[n._v(n._s(t.label))])],1)}),n._v(" "),e("div",{on:{click:function(t){n.toggleSide()}}},[e("Icon",{staticClass:"toggle",attrs:{type:n.chartIcon,size:"30"}}),n._v(" "),e("br"),e("span",[n._v(n._s(n.chartTitle))])],1),n._v(" "),e("Input",{attrs:{id:"search",placeholder:"搜索网络节点",clearable:""},on:{"on-enter":n.search}})],2)]),n._v(" "),e("div",{staticClass:"visulization-container"},[e("div",{staticClass:"src-container",class:{active:n.sideShow}},[e("ul",n._l(n.srcList,function(t){return t.hide?n._e():e("li",{class:{active:t.active},on:{click:function(e){n.srcChange(t)}}},[n._v("\n                    "+n._s(t.label)+"\n                ")])}))]),n._v(" "),e("div",{staticClass:"middle-container"},[e("div",{staticClass:"main-visualization"},[e("iframe",{ref:"iframe",attrs:{allowfullscreen:"yes",scrolling:"no",frameborder:"0",src:n.href}}),n._v(" "),n.loading?e("div",{staticClass:"loader"},[n._v("\n                    正在加载数据\n                    "),e("svg",{staticStyle:{"enable-background":"new 0 0 50 50"},attrs:{version:"1.1",id:"loader-1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"40px",height:"40px",viewBox:"0 0 50 50","xml:space":"preserve"}},[e("path",{attrs:{fill:"#FF6700",d:"M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z"}},[e("animateTransform",{attrs:{attributeType:"xml",attributeName:"transform",type:"rotate",from:"0 25 25",to:"360 25 25",dur:"0.6s",repeatCount:"indefinite"}})],1)])]):n._e()]),n._v(" "),e("ul",{staticClass:"menu-container"},n._l(n.typeList,function(t){return t.hide?n._e():e("li",{class:{active:t.active},style:{"background-color":t.color},attrs:{name:t.type},on:{click:function(e){n.typeChange(t.type)}}},[n._v("\n                    "+n._s(t.label)+"\n                ")])}))]),n._v(" "),e("div",{staticClass:"side-container",class:{active:n.sideShow}},[e("div",{staticClass:"side-visualization"},[e("Pie",{attrs:{subject:n.subject}})],1),n._v(" "),e("div",{staticClass:"side-visualization"},[e("LineInput",{attrs:{input:n.input}})],1),n._v(" "),e("div",{staticClass:"side-visualization"},[e("LineOutput",{attrs:{ouput:n.ouput}})],1)])])])},staticRenderFns:[]},h=e("VU/8")(l,p,!1,function(n){e("DbPP")},"data-v-72781316",null);t.default=h.exports},OmB1:function(n,t,e){(n.exports=e("FZ+f")(!1)).push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},SygU:function(n,t,e){var i=e("/w1T");"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);e("rjj0")("69514038",i,!0)},XGXv:function(n,t,e){(n.exports=e("FZ+f")(!1)).push([n.i,"\n.loader[data-v-72781316]{\n    position: absolute;\n    left: 0;\n    right: 0;\n    top:0;\n    bottom: 0;\n    width: 100px;\n    height: 50px;\n    color: white;\n    margin: auto;\n    font-size: 14px;\n    text-align: center;\n}\n.index-container[data-v-72781316]{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: column;\n            flex-flow: column;\n}\n.visulization-container[data-v-72781316]{\n    position: relative;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    height: 100vh;\n}\n.menu-container[data-v-72781316]{\n    position: absolute;\n    left:0;right:0;bottom: -1px;\n    background: none;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    text-align: center;\n}\n.menu-container li[data-v-72781316]{\n    list-style: none;\n    color: rgba(255,255,255,.9);\n    padding: 10px 0;\n    -webkit-box-flex:1;\n        -ms-flex:1;\n            flex:1;\n    font-size: 14px;\n    line-height: 1;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    font-weight: bold;\n    cursor: pointer;\n    -webkit-transition: all .2s ease-in-out;\n    transition: all .2s ease-in-out;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    opacity: .6;\n    border: 1px solid rgba(255,255,255,0);\n    position: relative;\n}\n.menu-container li[data-v-72781316]:hover, .menu-container li.active[data-v-72781316]{\n    opacity: .8;\n    color: rgba(255,255,255,1);\n    text-shadow: 0 0 20px #000; \n    border: 1px solid rgba(255,255,255,1)\n}\n.menu-container li.active[data-v-72781316]:before{\n    content: '.';\n    position: absolute;\n    top: -6px;\n    left: calc(50% - 1px);\n}\n.title-container[data-v-72781316]{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    color:white;\n    padding: 15px 24px;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    position: fixed;\n    left:0;\n    right: 0;\n    z-index: 1111;\n    pointer-events: none;\n}\n.logo img[data-v-72781316]{\n    pointer-events: auto;\n    cursor: pointer;\n    width: 25vw;\n    max-width: 250px;\n    min-width: 150px;\n}\n.button[data-v-72781316]{\n    text-align: center;\n}\n.button > div[data-v-72781316]{\n    pointer-events: auto;\n    cursor: pointer;\n    display: inline-block;\n    text-shadow: 0 0 5px #000;\n    position: relative;\n}\n.button > div.active[data-v-72781316]:before{\n    content: '.';\n    position: absolute;\n    top: -12px;\n    left: calc(50% - 3px);\n    font-weight: bold;\n}\n.button > div + div[data-v-72781316]{\n    margin-left:20px;\n}\n#search[data-v-72781316]{\n    position: absolute;\n    left:280px;top:25px;\n    width: 250px;\n    margin:auto;\n    pointer-events: auto;\n}\n.toggle[data-v-72781316]{\n    padding: 5px;\n}\n.middle-container[data-v-72781316]{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    width: -webkit-fill-available;\n}\n.main-visualization[data-v-72781316]{\n    -webkit-box-flex:1;\n        -ms-flex:1;\n            flex:1;\n    position: relative;\n}\n.src-container[data-v-72781316]{\n    position: absolute;\n    bottom:120px;top:120px;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-transition: all .3s ease-in-out;\n    transition: all .3s ease-in-out;\n    z-index: 1;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n}\n.src-container > ul[data-v-72781316] {\n    max-height: 100%;\n    overflow: auto;\n}\n.src-container li[data-v-72781316]{\n    background: #363e4f88;\n    border-top: 1px solid #363e4fff;\n    text-align: center;\n    color: rgba(255,255,255,.9);\n    padding: 10px 15px;\n    font-size: 14px;\n    cursor: pointer;\n    margin: 0;\n    -webkit-transition: all .2s ease-in-out;\n    transition: all .2s ease-in-out;\n    position: relative;\n}\n.src-container li[data-v-72781316]:first-child{\n    border-top: none;\n}\n.src-container li[data-v-72781316]:hover,  .src-container li.active[data-v-72781316]{\n    background: #363e4fd4;\n    color: rgba(255,255,255,1);\n}\n.src-container li.active[data-v-72781316]:before{\n    content: '.';\n    position: absolute;\n    left: 10px;\n    top: 5px;\n    font-weight: bold;\n    vertical-align: middle;\n}\n.side-container[data-v-72781316]{\n    position: absolute;\n    top:0; bottom: 35px;\n    left:100%;\n    width: 360px;\n    padding: 80px 20px 0 20px;\n    background: rgba(0,0,0,.4);\n    -webkit-transition: all 0.5s ease-in-out;\n    transition: all 0.5s ease-in-out;\n    -webkit-backdrop-filter: blur(4px);\n            backdrop-filter: blur(4px);\n}\n.side-container.active[data-v-72781316]{\n    -webkit-transform: translate3d(-360px, 0, 0);\n            transform: translate3d(-360px, 0, 0);\n}\n.side-visualization[data-v-72781316]{\n    height: 33%;\n    overflow: hidden;\n}\niframe[data-v-72781316]{\n    width: 100%;\n    height: 100%; /* test height should auto size*/\n}\n@media (max-width: 945px){\n#search[data-v-72781316]{\n        left:30vw;\n        right: 300px;\n        width: auto;\n}\n}\n@media (max-width: 600px){\n#search[data-v-72781316]{\n        left:auto;\n        right:30px;\n        top: 60px;\n        width: 140px;\n}\n.button span[data-v-72781316]{display: none\n}\n}\n@media (max-width: 499px){\n.side-container[data-v-72781316]{\n        width: 100%;\n        background: rgba(0,0,0,.4);\n}\n.side-container.active[data-v-72781316]{\n        -webkit-transform: translate3d(-100%, 0, 0);\n                transform: translate3d(-100%, 0, 0);\n}\n.src-container.active[data-v-72781316]{\n        -webkit-transform: translate3d(-100%, 0, 0);\n                transform: translate3d(-100%, 0, 0);\n}\n.toggle[data-v-72781316]{\n        font-size: 20px !important;\n}\n#search[data-v-72781316]{\n        left:auto;\n        right:30px;\n        top: 50px;\n        width: 100px;\n}\n.button > div + div[data-v-72781316]{\n        margin-left: 10px;\n}\n}\n",""])},bkQg:function(n,t,e){(n.exports=e("FZ+f")(!1)).push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},mvHQ:function(n,t,e){n.exports={default:e("qkKv"),__esModule:!0}},qkKv:function(n,t,e){var i=e("FeBl"),a=i.JSON||(i.JSON={stringify:JSON.stringify});n.exports=function(n){return a.stringify.apply(a,arguments)}}});
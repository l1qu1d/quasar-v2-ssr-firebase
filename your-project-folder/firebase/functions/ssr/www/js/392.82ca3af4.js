(self["webpackChunkquasar"]=self["webpackChunkquasar"]||[]).push([[392],{154:(t,e,n)=>{"use strict";n.d(e,{s:()=>c});n(71);var o=n(3673),s=n(2323);function c(t,e,n,c,u,r){return(0,o.wg)(),(0,o.j4)("div",null,[(0,o.Wm)("p",null,(0,s.zw)(t.title),1),(0,o.Wm)("ul",null,[((0,o.wg)(!0),(0,o.j4)(o.HY,null,(0,o.Ko)(t.todos,(n=>((0,o.wg)(),(0,o.j4)("li",{key:n.id,onClick:e[1]||(e[1]=(...e)=>t.increment&&t.increment(...e))},(0,s.zw)(n.id)+" - "+(0,s.zw)(n.content),1)))),128))]),(0,o.Wm)("p",null,"Count: "+(0,s.zw)(t.todoCount)+" / "+(0,s.zw)(t.meta.totalCount),1),(0,o.Wm)("p",null,"Active: "+(0,s.zw)(t.active?"yes":"no"),1),(0,o.Wm)("p",null,"Clicks on todos: "+(0,s.zw)(t.clickCount),1)])}},5465:(t,e,n)=>{"use strict";n.d(e,{s:()=>s});var o=n(3673);function s(t,e,n,s,c,u){const r=(0,o.up)("example-component"),i=(0,o.up)("q-page");return(0,o.wg)(),(0,o.j4)(i,{class:"row items-center justify-evenly"},{default:(0,o.w5)((()=>[(0,o.Wm)(r,{title:"Example component",active:"",todos:t.todos,meta:t.meta},null,8,["todos","meta"])])),_:1})}},1928:(t,e,n)=>{"use strict";n.d(e,{Z:()=>r});var o=n(1959),s=n(3673);function c(){const t=(0,o.iH)(0);function e(){return t.value+=1,t.value}return{clickCount:t,increment:e}}function u(t){const e=(0,s.Fl)((()=>t.value.length));return{todoCount:e}}const r=(0,s.aZ)({name:"CompositionComponent",props:{title:{type:String,required:!0},todos:{type:Array,default:()=>[]},meta:{type:Object,required:!0},active:{type:Boolean}},setup(t){return Object.assign(Object.assign({},c()),u((0,o.Vh)(t,"todos")))}})},8655:(t,e,n)=>{"use strict";n.d(e,{Z:()=>u});var o=n(3065),s=n(3673),c=n(1959);const u=(0,s.aZ)({name:"PageIndex",components:{ExampleComponent:o.Z},setup(){const t=(0,c.iH)([{id:1,content:"ct1"},{id:2,content:"ct2"},{id:3,content:"ct3"},{id:4,content:"ct4"},{id:5,content:"ct5"}]),e=(0,c.iH)({totalCount:1200});return{todos:t,meta:e}}})},3065:(t,e,n)=>{"use strict";n.d(e,{Z:()=>c});var o=n(5448),s=n(6013);s.Z.render=o.s;const c=s.Z},1392:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>i});var o=n(5465),s=n(7329),c=n(9376),u=n(7518),r=n.n(u);s.Z.render=o.s;const i=s.Z;r()(s.Z,"components",{QPage:c.Z})},5448:(t,e,n)=>{"use strict";n.d(e,{s:()=>o.s});var o=n(154)},6013:(t,e,n)=>{"use strict";n.d(e,{Z:()=>o.Z});var o=n(1928)},7329:(t,e,n)=>{"use strict";n.d(e,{Z:()=>o.Z});var o=n(8655)}}]);
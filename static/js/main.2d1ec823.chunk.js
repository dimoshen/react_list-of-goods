(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{15:function(t,e,s){},17:function(t,e,s){"use strict";s.r(e);var n,r=s(4),o=s.n(r),c=s(5),i=s(6),a=s(9),l=s(7),u=s(1),b=(s(14),s(15),s(2)),d=s.n(b),h=s(8);!function(t){t[t.NONE=0]="NONE",t[t.ALPHABET=1]="ALPHABET",t[t.LENGTH=2]="LENGTH"}(n||(n={}));var N,p=s(0),j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.NONE=0]="NONE",t[t.ALPHABET=1]="ALPHABET",t[t.LENGTH=2]="LENGTH"}(N||(N={}));var E=function(t){Object(a.a)(s,t);var e=Object(l.a)(s);function s(){var t;Object(c.a)(this,s);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={isReversed:!1,sortType:N.NONE},t.reverseGoods=function(){t.setState((function(t){return{isReversed:!t.isReversed}}))},t.sortGoodsAlphabetic=function(){t.setState({sortType:N.ALPHABET})},t.sortGoodsByLength=function(){t.setState({sortType:N.LENGTH})},t.resetState=function(){t.setState({isReversed:!1,sortType:N.NONE})},t}return Object(i.a)(s,[{key:"render",value:function(){var t=this.state,e=t.isReversed,s=t.sortType,r=e||s!==N.NONE,o=function(t,e){var s=e.sortType,r=e.isReversed,o=Object(h.a)(t);return o.sort((function(t,e){switch(s){case n.ALPHABET:return t.localeCompare(e);case n.LENGTH:return t.length-e.length;default:return 0}})),r&&o.reverse(),o}(j,this.state);return Object(p.jsxs)("div",{className:"section content",children:[Object(p.jsxs)("div",{className:"buttons",children:[Object(p.jsx)("button",{type:"button",className:d()("button is-info",{"is-light":s!==N.ALPHABET}),onClick:this.sortGoodsAlphabetic,children:"Sort alphabetically"}),Object(p.jsx)("button",{type:"button",className:d()("button is-success",{"is-light":s!==N.LENGTH}),onClick:this.sortGoodsByLength,children:"Sort by length"}),Object(p.jsx)("button",{type:"button",className:d()("button is-warning",{"is-light":!e}),onClick:this.reverseGoods,children:"Reverse"}),r&&Object(p.jsx)("button",{type:"button",className:"button is-danger",onClick:this.resetState,children:"Reset"})]}),Object(p.jsx)("ul",{children:Object(p.jsx)("ul",{children:o.map((function(t){return Object(p.jsx)("li",{"data-cy":"Good",children:t})}))})})]})}}]),s}(u.Component);o.a.render(Object(p.jsx)(E,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.2d1ec823.chunk.js.map
import{ad as S,j as v,r as E,p}from"./vendor.9e149c67.js";Object.assign=Object.assign||function(r){for(var a=arguments,i=1;i<arguments.length;i++){var e=a[i];for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t])}return r};function b(r,a,i,e,t,n,o){if(a===void 0&&(a=2),i===void 0&&(i="."),e===void 0&&(e=","),t===void 0&&(t=!1),n===void 0&&(n=""),o===void 0&&(o=""),a<0&&(a=0),a>20&&(a=20),r==null)return{value:0,maskedValue:""};if(r=String(r),r.length==0)return{value:0,maskedValue:""};var s=r.match(/\d/g)||["0"],c=!1;if(t){var d=(r.match(/-/g)||[]).length;c=d%2===1;for(var l=!0,u=0;u<s.length;u+=1)if(s[u]!=="0"){l=!1;break}l&&(c=!1)}for(;s.length<=a;)s.unshift("0");a>0&&s.splice(s.length-a,0,"."),s=Number(s.join("")).toFixed(a).split("");var h=Number(s.join("")),f=s.length-a-1;a>0?s[f]=i:f=s.length;for(var g=f-3;g>0;g=g-3)s.splice(g,0,e);return n.length>0&&s.unshift(n),o.length>0&&s.push(o),t&&c&&(s.unshift("-"),h=-h),{value:h,maskedValue:s.join("").trim()}}Number.parseFloat=parseFloat;var m=function(r){function a(i){r.call(this,i),this.prepareProps=this.prepareProps.bind(this),this.handleChange=this.handleChange.bind(this),this.handleFocus=this.handleFocus.bind(this),this.state=this.prepareProps(this.props),this.inputSelectionStart=1,this.inputSelectionEnd=1}return r&&(a.__proto__=r),a.prototype=Object.create(r&&r.prototype),a.prototype.constructor=a,a.prototype.getMaskedValue=function(){return this.state.maskedValue},a.prototype.prepareProps=function(e){var t=Object.assign({},e);delete t.onChange,delete t.onChangeEvent,delete t.value,delete t.decimalSeparator,delete t.thousandSeparator,delete t.precision,delete t.inputType,delete t.allowNegative,delete t.allowEmpty,delete t.prefix,delete t.suffix,delete t.selectAllOnFocus,delete t.autoFocus;var n=e.value;n===null?n=e.allowEmpty?null:"":(typeof n=="string"&&(e.thousandSeparator==="."&&(n=n.replace(/\./g,"")),e.decimalSeparator!="."&&(n=n.replace(new RegExp(e.decimalSeparator,"g"),".")),n=n.replace(/[^0-9-.]/g,""),n=Number.parseFloat(n)),n=Number(n).toLocaleString(void 0,{style:"decimal",minimumFractionDigits:e.precision,maximumFractionDigits:e.precision}));var o=b(n,e.precision,e.decimalSeparator,e.thousandSeparator,e.allowNegative,e.prefix,e.suffix),s=o.maskedValue,c=o.value;return{maskedValue:s,value:c,customProps:t}},a.prototype.componentWillReceiveProps=function(e){this.setState(this.prepareProps(e))},a.prototype.componentDidMount=function(){var e=S.findDOMNode(this.theInput),t,n;this.props.autoFocus?(this.theInput.focus(),n=this.state.maskedValue.length-this.props.suffix.length,t=n):(n=Math.min(e.selectionEnd,this.theInput.value.length-this.props.suffix.length),t=Math.min(e.selectionStart,n)),e.setSelectionRange(t,n)},a.prototype.componentWillUpdate=function(){var e=S.findDOMNode(this.theInput);this.inputSelectionStart=e.selectionStart,this.inputSelectionEnd=e.selectionEnd},a.prototype.componentDidUpdate=function(e,t){var n=this.props,o=n.decimalSeparator,s=S.findDOMNode(this.theInput),c=(this.theInput.value.match(/-/g)||[]).length%2===1,d=this.props.prefix.length+(c?1:0),l=Math.max(d,Math.min(this.inputSelectionEnd,this.theInput.value.length-this.props.suffix.length)),u=Math.max(d,Math.min(this.inputSelectionEnd,l)),h=/[-[\]{}()*+?.,\\^$|#\s]/g,f=new RegExp(o.replace(h,"\\$&")+"|"+this.props.thousandSeparator.replace(h,"\\$&"),"g"),g=(this.state.maskedValue.match(f)||[]).length,k=(t.maskedValue.match(f)||[]).length,x=Math.max(g-k,0);l=l+x,u=u+x;var y=Number(this.props.precision),V=this.props.suffix.length+this.props.prefix.length+(y>0?o.length:0)+y+1;this.state.maskedValue.length==V&&(l=this.theInput.value.length-this.props.suffix.length,u=l),s.setSelectionRange(u,l),this.inputSelectionStart=u,this.inputSelectionEnd=l},a.prototype.handleChange=function(e){var t=this;e.preventDefault();var n=b(e.target.value,this.props.precision,this.props.decimalSeparator,this.props.thousandSeparator,this.props.allowNegative,this.props.prefix,this.props.suffix),o=n.maskedValue,s=n.value;e.persist(),this.setState({maskedValue:o,value:s},function(){t.props.onChange(o,s,e),t.props.onChangeEvent(e,o,s)})},a.prototype.handleFocus=function(e){if(!!this.theInput){var t=this.theInput.value.length-this.props.suffix.length,n=(this.theInput.value.match(/-/g)||[]).length%2===1,o=this.props.prefix.length+(n?1:0);this.props.selectAllOnFocus&&e.target.setSelectionRange(o,t),this.inputSelectionStart=o,this.inputSelectionEnd=t}},a.prototype.handleBlur=function(e){this.inputSelectionStart=0,this.inputSelectionEnd=0},a.prototype.render=function(){var e=this;return v("input",{...Object.assign({},{ref:function(t){e.theInput=t},type:this.props.inputType,value:this.state.maskedValue,onChange:this.handleChange,onFocus:this.handleFocus,onMouseUp:this.handleFocus},this.state.customProps)})},a}(E.exports.Component);m.propTypes={onChange:p.exports.func,value:p.exports.oneOfType([p.exports.number,p.exports.string]),decimalSeparator:p.exports.string,thousandSeparator:p.exports.string,precision:p.exports.oneOfType([p.exports.number,p.exports.string]),inputType:p.exports.string,allowNegative:p.exports.bool,allowEmpty:p.exports.bool,prefix:p.exports.string,suffix:p.exports.string,selectAllOnFocus:p.exports.bool};m.defaultProps={onChange:function(r,a,i){},onChangeEvent:function(r,a,i){},autoFocus:!1,value:"0",decimalSeparator:".",thousandSeparator:",",precision:"2",inputType:"text",allowNegative:!1,prefix:"",suffix:"",selectAllOnFocus:!1};const C=({type:r="currency",value:a=0,onValueChange:i,invalid:e=!1,allowNull:t=!1,disabled:n=!1})=>{let o=null;switch(r){case"currency":o=v(m,{disabled:n,value:a,onChangeEvent:l=>{d(l)},allowNegative:!1,precision:0,thousandSeparator:".",decimalSeparator:",",prefix:"Rp ",className:`${e?"invalid":""} custom-input`});break;case"percentage":o=v(m,{disabled:n,value:a,onChangeEvent:l=>{d(l)},allowNegative:!1,precision:0,thousandSeparator:".",decimalSeparator:",",suffix:" %",className:`${e?"invalid":""} custom-input`});break;case"number":o=v(m,{disabled:n,value:a,onChangeEvent:l=>{d(l)},onValueChange:l=>{d(l)},allowNegative:!1,precision:0,thousandSeparator:".",decimalSeparator:",",className:`${e?"invalid":""} custom-input`});break}const[s,c]=E.exports.useState(0),d=l=>{let u=l.target.value.split(" "),h=0;r=="currency"&&(h=u[1]),r=="percentage"&&(h=parseInt(u[0].replaceAll(".",""))>100?"100":u[0]),r=="number"&&(h=u[0]),c(h),i(h)};return o};export{C as I};

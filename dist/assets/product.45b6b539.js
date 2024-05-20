import{T as le,a as oe,b as ue,c as Z,d as R,e as ce,g as pe}from"./TableRow.90e205e6.js";import{U as de,h as he,e as ee,b as te,g as ae,x as fe}from"./index.98d46653.js";import{C as ve,A as ge,P as me}from"./styled.58e262dc.js";import{P as ye}from"./pagination.3acd245c.js";import{r as o,p as be,ak as Te,u as _e,P as xe,o as Ce,l as ke,j as i,d as v,c as g,am as Pe,f as ne,a6 as Se,Y as Ie,_ as De}from"./vendor.9e149c67.js";import{F as G,S as H,C as Y}from"./Select.ea97d86c.js";import{I as W}from"./InputLabel.ca1c0919.js";var re={exports:{}};(function(u,J){(function(T,w){w(J,o.exports,be.exports)})(Te,function(T,w,L){Object.defineProperty(T,"__esModule",{value:!0});var x=F(w);F(L);function F(n){return n&&n.__esModule?n:{default:n}}function j(n,r,a){return r in n?Object.defineProperty(n,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[r]=a,n}function M(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}var C=function(){function n(r,a){for(var e=0;e<a.length;e++){var t=a[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(r,t.key,t)}}return function(r,a,e){return a&&n(r.prototype,a),e&&n(r,e),r}}();function B(n,r){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r&&(typeof r=="object"||typeof r=="function")?r:n}function S(n,r){if(typeof r!="function"&&r!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof r);n.prototype=Object.create(r&&r.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(n,r):n.__proto__=r)}var k=Object.assign||function(n){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&(n[e]=a[e])}return n};function N(n,r){var a={};for(var e in n)r.indexOf(e)>=0||!Object.prototype.hasOwnProperty.call(n,e)||(a[e]=n[e]);return a}function Q(n){for(var r=[],a=0;a<n.length;a++)r.indexOf(n[a])===-1&&r.push(typeof n[a]=="string"?n[a].trim():n[a]);return r}function A(n){return window.clipboardData?window.clipboardData.getData("Text"):n.clipboardData?n.clipboardData.getData("text/plain"):""}function X(n){var r=n.tag,a=n.key,e=n.disabled,t=n.onRemove,l=n.classNameRemove,c=n.getTagDisplayValue,p=N(n,["tag","key","disabled","onRemove","classNameRemove","getTagDisplayValue"]);return x.default.createElement("span",k({key:a},p),c(r),!e&&x.default.createElement("a",{className:l,onClick:function(d){return t(a)}}))}function z(n){n.addTag;var r=N(n,["addTag"]),a=r.onChange,e=r.value,t=N(r,["onChange","value"]);return x.default.createElement("input",k({type:"text",onChange:a,value:e},t))}function K(n,r){return x.default.createElement("span",null,n,r)}function U(n){return n.split(" ").map(function(r){return r.trim()})}var $={className:"react-tagsinput-input",placeholder:"Add a tag"},E=function(n){S(r,n);function r(){M(this,r);var a=B(this,(r.__proto__||Object.getPrototypeOf(r)).call(this));return a.state={tag:"",isFocused:!1},a.focus=a.focus.bind(a),a.blur=a.blur.bind(a),a.accept=a.accept.bind(a),a}return C(r,[{key:"_getTagDisplayValue",value:function(e){var t=this.props.tagDisplayProp;return t?e[t]:e}},{key:"_makeTag",value:function(e){var t=this.props.tagDisplayProp;return t?j({},t,e):e}},{key:"_removeTag",value:function(e){var t=this.props.value.concat([]);if(e>-1&&e<t.length){var l=t.splice(e,1);this.props.onChange(t,l,[e])}}},{key:"_clearInput",value:function(){this.hasControlledInput()?this.props.onChangeInput(""):this.setState({tag:""})}},{key:"_tag",value:function(){return this.hasControlledInput()?this.props.inputValue:this.state.tag}},{key:"_addTags",value:function(e){var t=this,l=this.props,c=l.onChange,p=l.onValidationReject,_=l.onlyUnique,d=l.maxTags,m=l.value;_&&(e=Q(e),e=e.filter(function(b){return m.every(function(y){return t._getTagDisplayValue(y)!==t._getTagDisplayValue(b)})}));var h=e.filter(function(b){return!t._validate(t._getTagDisplayValue(b))});if(e=e.filter(function(b){return t._validate(t._getTagDisplayValue(b))}),e=e.filter(function(b){var y=t._getTagDisplayValue(b);return typeof y.trim=="function"?y.trim().length>=0:y}),d>=0){var I=Math.max(d-m.length,0);e=e.slice(0,I)}if(p&&h.length>0&&p(h),e.length>0){for(var D=m.concat(e),P=[],O=0;O<e.length;O++)P.push(m.length+O);return c(D,e,P),this._clearInput(),!0}return h.length>0||this._clearInput(),!1}},{key:"_validate",value:function(e){var t=this.props,l=t.validate,c=t.validationRegex;return l(e)&&c.test(e)}},{key:"_shouldPreventDefaultEventOnAdd",value:function(e,t,l){return e?!0:l==="Enter"?this.props.preventSubmit||!this.props.preventSubmit&&!t:!1}},{key:"focus",value:function(){this.input&&typeof this.input.focus=="function"&&this.input.focus(),this.handleOnFocus()}},{key:"blur",value:function(){this.input&&typeof this.input.blur=="function"&&this.input.blur(),this.handleOnBlur()}},{key:"accept",value:function(){var e=this.props.preventSubmit,t=this._tag();return t!==""||!e?(t=this._makeTag(t),this._addTags([t])):!1}},{key:"addTag",value:function(e){return this._addTags([e])}},{key:"clearInput",value:function(){this._clearInput()}},{key:"handlePaste",value:function(e){var t=this,l=this.props,c=l.addOnPaste,p=l.pasteSplit;if(!!c){e.preventDefault();var _=A(e),d=p(_).map(function(m){return t._makeTag(m)});this._addTags(d)}}},{key:"handleKeyDown",value:function(e){if(!e.defaultPrevented){var t=this.props,l=t.value,c=t.removeKeys,p=t.addKeys,_=this._tag(),d=_==="",m=e.keyCode,h=e.key,I=p.indexOf(m)!==-1||p.indexOf(h)!==-1,D=c.indexOf(m)!==-1||c.indexOf(h)!==-1;if(I){var P=this.accept();this._shouldPreventDefaultEventOnAdd(P,d,h)&&e.preventDefault()}D&&l.length>0&&d&&(e.preventDefault(),this._removeTag(l.length-1))}}},{key:"handleClick",value:function(e){var t=e.target,l=e.target&&e.target.parentElement;(t===this.div||l===this.div)&&this.focus()}},{key:"handleChange",value:function(e){var t=this.props.onChangeInput,l=this.props.inputProps.onChange,c=e.target.value;l&&l(e),this.hasControlledInput()?t(c):this.setState({tag:c})}},{key:"handleOnFocus",value:function(e){var t=this.props.inputProps.onFocus;t&&t(e),this.setState({isFocused:!0})}},{key:"handleOnBlur",value:function(e){var t=this.props.inputProps.onBlur;if(this.setState({isFocused:!1}),e!=null&&(t&&t(e),this.props.addOnBlur&&e.target.value)){var l=this._makeTag(e.target.value);this._addTags([l])}}},{key:"handleRemove",value:function(e){this._removeTag(e)}},{key:"inputProps",value:function(){var e=this.props.inputProps;e.onChange,e.onFocus,e.onBlur;var t=N(e,["onChange","onFocus","onBlur"]),l=k({},$,t);return this.props.disabled&&(l.disabled=!0),l}},{key:"inputValue",value:function(e){return e.currentValue||e.inputValue||""}},{key:"hasControlledInput",value:function(){var e=this.props,t=e.inputValue,l=e.onChangeInput;return typeof l=="function"&&typeof t=="string"}},{key:"componentDidMount",value:function(){this.hasControlledInput()||this.setState({tag:this.inputValue(this.props)})}},{key:"componentDidUpdate",value:function(e){this.hasControlledInput()||!this.inputValue(this.props)||this.inputValue(e)!==this.inputValue(this.props)&&this.setState({tag:this.inputValue(this.props)})}},{key:"render",value:function(){var e=this,t=this.props,l=t.value,c=t.tagProps,p=t.renderLayout,_=t.renderTag,d=t.renderInput,m=t.className,h=t.focusedClassName,I=t.disabled,D=this.state.isFocused,P=l.map(function(b,y){return _(k({key:y,tag:b,onRemove:e.handleRemove.bind(e),disabled:I,getTagDisplayValue:e._getTagDisplayValue.bind(e)},c))}),O=d(k({ref:function(y){e.input=y},value:this._tag(),onPaste:this.handlePaste.bind(this),onKeyDown:this.handleKeyDown.bind(this),onChange:this.handleChange.bind(this),onFocus:this.handleOnFocus.bind(this),onBlur:this.handleOnBlur.bind(this),addTag:this.addTag.bind(this)},this.inputProps()));return x.default.createElement("div",{ref:function(y){e.div=y},onClick:this.handleClick.bind(this),className:m+(D?" "+h:"")},p(P,O))}}]),r}(x.default.Component);E.defaultProps={className:"react-tagsinput",focusedClassName:"react-tagsinput--focused",addKeys:["Tab","Enter"],addOnBlur:!1,addOnPaste:!1,inputProps:{},removeKeys:["Backspace"],renderInput:z,renderTag:X,renderLayout:K,pasteSplit:U,tagProps:{className:"react-tagsinput-tag",classNameRemove:"react-tagsinput-remove"},onlyUnique:!1,maxTags:-1,validate:function(){return!0},validationRegex:/.*/,disabled:!1,tagDisplayProp:null,preventSubmit:!0},T.default=E,u.exports=T.default})})(re,re.exports);const Be=()=>{const{t:u,i18n:J}=_e(),T=o.exports.useContext(de),w=[...pe];xe();const L=Ce(),[x,F]=o.exports.useState(!0),[j,M]=o.exports.useState([]),[C,B]=o.exports.useState(1),[S,k]=o.exports.useState(10),[N,Q]=o.exports.useState("name"),[A,X]=o.exports.useState(1),[z,K]=o.exports.useState(0),[U,$]=o.exports.useState(0),[E,n]=o.exports.useState(!1),[r,a]=o.exports.useState(""),[e,t]=o.exports.useState(""),[l,c]=o.exports.useState([]),[p,_]=o.exports.useState(""),[d,m]=o.exports.useState(""),[h,I]=o.exports.useState(""),[D,P]=o.exports.useState([...ve]),[O,b]=o.exports.useState([...ge]),[y,Oe]=o.exports.useState([...me]),q=async()=>{let s={};s.page=C-1,s.size=S,s.sort=N,s.dir=A,r&&(s.name=r),e&&(s.sku=e),d&&(s.categoryId=d),(h!=null||h!=null)&&(s.active=h),p&&(s.productType=p),l&&(s.tags=l.join(","));try{T.setLoading(!0);let f=await ee(`${te.product.all[ae()]}`,s);T.setLoading(!1),M(f.data.content),B(f.data.number+1),k(f.data.size),$(f.data.totalElements),K(f.data.totalPages)}catch{T.setLoading(!1)}},se=async(s="")=>{try{T.setLoading(!0);let f={};f.name=s;let V=await ee(`${te.category.combo[ae()]}`,f);P(De.map(V.data,fe))}catch{}finally{T.setLoading(!1)}};return o.exports.useEffect(()=>{const s=setTimeout(()=>q(),1e3);return()=>clearTimeout(s)},[r,e]),o.exports.useEffect(()=>{const s=async()=>{await q(),F(!1)};se(),s()},[]),o.exports.useEffect(()=>{!x&&!ke.exports.isNaN(C)&&q()},[C,S,l,d,h,p]),i("div",{className:"mt-12 mb-8 flex flex-col gap-12",children:i(v.Card,{className:"px-2",children:g(v.CardBody,{className:"overflow-x-scroll px-0 pt-0 pb-2",children:[g("div",{className:"flex flex-row justify-between p-2",children:[g("div",{children:[i(v.Typography,{variant:"h5",children:u("product")}),i("span",{children:u("productManagement")})]}),i("div",{children:i(v.Button,{onClick:()=>{L("/dashboard/product/new")},color:"purple",children:u("add")})})]}),i(v.Button,{onClick:()=>n(!E),size:"sm",color:"gray",variant:"gradient",className:"mx-1 mb-2",children:u("filter")}),i(v.Collapse,{open:E,children:g("div",{className:"my-1 flex gap-1 py-1",children:[i("div",{className:" w-1/4",children:i(v.Input,{label:u("productName"),value:r,onChange:s=>a(s.target.value)})}),i("div",{className:" w-1/4",children:i(v.Input,{label:u("sku"),value:e,onChange:s=>t(s.target.value)})}),i("div",{className:"w-1/4",children:g(G,{size:"small",className:"w-full",children:[i(W,{id:"productCategory",children:u("productCategory")}),i(H,{labelId:"productCategory",label:u("productCategory"),onChange:s=>{m(s.target.value)},value:d,children:D.map(s=>i(Y,{value:s.value,children:s.label},s.value))})]})}),i("div",{className:"w-1/4",children:g(G,{size:"small",className:"w-full",children:[i(W,{id:"productStatus",children:u("productStatus")}),i(H,{labelId:"productStatus",label:u("productStatus"),onChange:s=>{I(s.target.value)},value:h,children:y.map(s=>i(Y,{value:s.value,children:s.label},s.value))})]})}),i("div",{className:"w-1/4",children:g(G,{size:"small",className:"w-full",children:[i(W,{id:"productType",children:u("productType")}),i(H,{labelId:"productType",label:u("productType"),onChange:s=>{_(s.target.value)},value:p,children:O.map(s=>i(Y,{value:s.value,children:s.label},s.value))})]})})]})}),i(le,{className:"max-h-[450px]",children:g(oe,{stickyHeader:!0,size:"small",children:[i(ue,{children:g(Z,{children:[i(R,{size:"small",align:"left",children:"No"}),w.map((s,f)=>i(R,{align:s.align,children:u(s.label)},`head${f}`)),i(R,{align:"center",children:u("action")})]})}),i(ce,{children:j.map((s,f)=>g(Z,{hover:!0,role:"checkbox",tabIndex:-1,children:[i(R,{align:"center",width:80,children:(C-1)*S+f+1}),w.map((V,ie)=>i(R,{align:V.align,children:he(s,V.key,V.type,V.option)},`row-col-${ie}`)),i(R,{align:"right",width:80,children:g(v.Menu,{placement:"left",children:[i(v.MenuHandler,{children:i(v.IconButton,{variant:"text",color:"blue-gray",children:i(Pe,{className:"h-10 w-10 text-blue-gray-500"})})}),g(v.MenuList,{className:"min-w-[100px]",children:[g(v.MenuItem,{className:"text-orange-500",onClick:()=>{L(`/dashboard/product/edit/${s==null?void 0:s.id}`)},children:[i(ne,{icon:Se}),"\xA0",u("edit")]}),g(v.MenuItem,{className:"text-red-500",children:[i(ne,{icon:Ie}),"\xA0",i("span",{children:u("delete")})]})]})]})})]},s.id))})]})}),i(ye,{page:C,size:S,pages:z,totalElements:U,setpage:B,setsize:k},`${C}-${S}`)]})})})};export{Be as default};

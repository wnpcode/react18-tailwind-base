import{u as o,c as s,d as e,j as a}from"./vendor.9e149c67.js";const h=({showModalDelete:i,description:n="",setModalDelete:r,confirmModalDelete:c})=>{const{t:l,i18n:t}=o();return s(e.Dialog,{size:"xs",handler:()=>r(!1),open:i,children:[a(e.DialogHeader,{children:l("delete confirmation")}),a(e.DialogBody,{className:"flex justify-center",children:s("div",{className:"w-36",children:[s(e.Typography,{variant:"h6",children:[l("delete this"),"\xA0?"]}),a(e.Typography,{variant:"lead",children:n})]})}),s(e.DialogFooter,{className:"gap-1",children:[a(e.Button,{className:"bg-red-500",onClick:()=>c(),children:l("delete")}),a(e.Button,{className:"bg-purple-500",onClick:()=>r(!1),children:l("close")})]})]})};export{h as M};

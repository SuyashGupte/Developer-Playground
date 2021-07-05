(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{51:function(e,t,i){},72:function(e,t,i){},73:function(e,t,i){},98:function(e,t,i){"use strict";i.r(t);var a=i(0),n=i.n(a),c=i(33),s=i.n(c),r=(i(72),i(73),i(32)),l=i(35),o=i(36),d=i(41),j=i(40),h=i(105),b=i(126),u=i(106),g=i(107),x=i(128),m=i(109),O=i(110),p=i(111),v=i(112),f=i(113),C=i(114),y=i(124),S=i(47),E=i(45),A=i(48),T=i(49),_=i(50),P=i(46),k=i(20),z=(i(51),i(3)),L=function(e){Object(d.a)(i,e);var t=Object(j.a)(i);function i(e){var a;return Object(l.a)(this,i),(a=t.call(this,e)).state={opened:!1},a}return Object(o.a)(i,[{key:"render",value:function(){var e=this;return Object(z.jsxs)("div",{children:[Object(z.jsx)(h.a,{render:function(t){var i=t.isSideNavExpanded,a=t.onClickSideNavExpand;return Object(z.jsxs)(u.a,{"aria-label":"IBM Platform Name",children:[Object(z.jsx)(g.a,{}),Object(z.jsx)(x.a,{"aria-label":"Open menu",onClick:a,isActive:i}),Object(z.jsx)(m.a,{href:"#",prefix:"IBM",children:"[Platform]"}),Object(z.jsx)(O.a,{"aria-label":"IBM [Platform]",children:Object(z.jsx)(p.a,{isCurrentPage:!0,onClick:function(){return e.setState({opened:!0})},children:"About DataSet"})}),Object(z.jsx)(v.a,{"aria-label":"Side navigation",expanded:i,className:".bx--side-nav__navigation .bx--side-nav__link",style:{textEmphasisColor:"white"},isPersistent:!1,children:Object(z.jsx)(f.a,{children:Object(z.jsx)(C.a,{children:Object(z.jsx)(p.a,{onClick:function(){return e.setState({opened:!0})},children:"About DataSet"})})})})]})}}),Object(z.jsxs)(b.a,{open:this.state.opened,onRequestClose:function(){return e.setState({opened:!1})},size:"md",modalLabel:"About the API",passiveModal:!0,children:[Object(z.jsx)("h1",{children:"Data set description"}),Object(z.jsx)("div",{style:{marginLeft:"3rem"},children:Object(z.jsx)(y.a,{rows:[{id:1,input_field:"Age",description:"Customer's age in completed years"},{id:2,input_field:"Experience",description:"years of professional experience"},{id:3,input_field:"Income",description:"Annual income of the customer ($000)"},{id:4,input_field:"ZIPCode",description:"Home Address ZIP code."},{id:5,input_field:"Family",description:"Family size of the customer"},{id:6,input_field:"CCAvg",description:"Avg. spending on credit cards per month ($000)"},{id:7,input_field:"Education",description:"Education Level. 1: Undergrad; 2: Graduate; 3: Advanced/Professional"},{id:8,input_field:"Mortgage",description:"Value of house mortgage if any. ($000)"},{id:9,input_field:"Personal Loan",description:"Did this customer accept the personal loan offered in the last campaign?"},{id:10,input_field:"Securities Account",description:"Does the customer have a securities account with the bank?"},{id:11,input_field:"CD Account",description:"Does the customer have a certificate of deposit (CD) account with the bank?"},{id:12,input_field:"Online",description:"Does the customer use internet banking facilities?"},{id:13,input_field:"Credit card",description:"Does the customer use a credit card issued by UniversalBank?"}],headers:[{header:"Input Field",key:"input_field"},{header:"Description",key:"description"}],children:function(e){var t=e.rows,i=e.headers,a=e.getHeaderProps,n=e.getTableProps;return Object(z.jsx)(S.a,{title:"DataTable",children:Object(z.jsxs)(E.a,Object(r.a)(Object(r.a)({},n()),{},{children:[Object(z.jsx)(A.a,{children:Object(z.jsx)(T.a,{children:i.map((function(e){return Object(z.jsx)(_.a,Object(r.a)(Object(r.a)({},a({header:e})),{},{children:e.header}))}))})}),Object(z.jsx)(P.a,{children:t.map((function(e){return Object(z.jsx)(T.a,{children:e.cells.map((function(e){return Object(z.jsx)(k.a,{children:e.value},e.id)}))},e.id)}))})]}))})}})})]})]})}}]),i}(a.Component),I=i(34),Z=i(16),w=i(130),D=i(117),M=i(118),F=i(119),H=i(120),N=i(121),B=i(125),R=i(122),Y=i(123),$=i(99),G=i(127),U=i(129),J=i(63),K=i.n(J),W=i.p+"static/media/cloudLogo.cc98c683.png",q={age:"",invalidAge:!1,ageError:"",experience:"",invalidExperience:!1,experienceError:"",income:"",invalidIncome:!1,incomeError:"",Zipcode:"",invalidZipcode:!1,ZipcodeError:"",familySize:"",invalidFamilySize:!1,familyError:"",Ccavg:"",invalidCcavg:!1,CcavgError:"",mortgage:"",invalidMortgage:!1,mortgageError:"",education:"",personal_loan:"",security_account:"",CdAccount:"",online:"",credit_card:"",isSubmitted:"no",LoanResponse:""},V=function(e){Object(d.a)(i,e);var t=Object(j.a)(i);function i(e){var a;return Object(l.a)(this,i),(a=t.call(this,e)).changeHandler=function(e){a.setState(Object(I.a)({},e.target.name,e.target.value))},a.validate=function(){var e="",t="",i="",n="",c="",s="",r="",l=/^[0-9]+$/,o="no";return a.state.age?a.state.age.match(l)||(e="Age should be a number",a.setState({invalidAge:!0})):(e="Please enter your age",a.setState({invalidAge:!0})),a.state.experience?a.state.experience.match(l)||(t="Experience should be a number",a.setState({invalidExperience:!0})):(t="Experience cannot be empty",a.setState({invalidExperience:!0})),a.state.income?a.state.income.match(l)||(i="Income should be a number",a.setState({invalidIncome:!0})):(i="Income cannot be empty",a.setState({invalidIncome:!0})),a.state.Zipcode?a.state.Zipcode.match(l)||(n="Zipcode should be a number",a.setState({invalidZipcode:!0})):(n="Zipcode cannot be empty",a.setState({invalidZipcode:!0})),a.state.familySize?a.state.familySize.match(l)||(c="family size should be in numbers",a.setState({invalidFamilySize:!0})):(c="Please enter family size",a.setState({invalidFamilySize:!0})),a.state.mortgage?a.state.mortgage.match(l)||(r="Mortgage value should be a number",a.setState({invalidMortgage:!0})):(r="Mortgage value cannot be empty",a.setState({invalidMortgage:!0})),a.state.Ccavg?a.state.Ccavg.match(l)||(s="Ccavg value should be in numbers",a.setState({invalidCcavg:!0})):(s="Please enter Ccavg value",a.setState({invalidCcavg:!0})),e||t||c||r||s||i||n?(a.setState({ageError:e,experienceError:t,familyError:c,mortgageError:r,CcavgError:s,incomeError:i,ZipcodeError:n}),!1):(o="yes",e="",t="",i="",n="",c="",s="",r="",a.setState({invalidAge:!1,invalidCcavg:!1,invalidExperience:!1,invalidFamilySize:!1,invalidIncome:!1,invalidMortgage:!1,invalidZipcode:!1}),a.setState({isSubmitted:o,ageError:e,experienceError:t,familyError:c,mortgageError:r,CcavgError:s,incomeError:i,ZipcodeError:n}),console.log(a.state.isSubmitted),!0)},a.submitHandler=function(e){if(e.preventDefault(),a.validate()){console.log(a.state);var t={age:a.state.age,experience:a.state.experience,income:a.state.income,Zipcode:a.state.Zipcode,familySize:a.state.familySize,Ccavg:a.state.Ccavg,mortgage:a.state.mortgage,education:a.state.education,personal_loan:"none",security_account:a.state.security_account,CdAccount:a.state.CdAccount,online:a.state.online,credit_card:a.state.credit_card,isSubmitted:a.state.isSubmitted};console.log(a.state.isSubmitted),console.log(t),K.a.post("".concat(window.location.origin,"/submit"),t).then((function(e){a.setState({LoanResponse:e.data}),console.log("Response is ",a.state.LoanResponse)})).catch((function(e){console.log("error",e)})),console.log(a.state)}},a.state=q,a.onChangeSecurityAccount=a.onChangeSecurityAccount.bind(Object(Z.a)(a)),a.onChangeEducation=a.onChangeEducation.bind(Object(Z.a)(a)),a.onChangeOnline=a.onChangeOnline.bind(Object(Z.a)(a)),a.onChangeCdAccount=a.onChangeCdAccount.bind(Object(Z.a)(a)),a.onChangeCreditCard=a.onChangeCreditCard.bind(Object(Z.a)(a)),a.submitHandler=a.submitHandler.bind(Object(Z.a)(a)),a}return Object(o.a)(i,[{key:"onChangeSecurityAccount",value:function(e){this.state.security_account=e.target.value,console.log(this.state.security_account)}},{key:"onChangeEducation",value:function(e){this.state.education=e.target.value,console.log(this.state.education)}},{key:"onChangeCreditCard",value:function(e){this.state.credit_card=e.target.value,console.log(this.state.credit_card)}},{key:"onChangeCdAccount",value:function(e){this.state.CdAccount=e.target.value,console.log(this.state.CdAccount)}},{key:"onChangeOnline",value:function(e){this.state.online=e.target.value,console.log(this.state.online)}},{key:"render",value:function(){return Object(z.jsxs)("div",{children:["yes"==this.state.isSubmitted&&""==this.state.LoanResponse?Object(z.jsxs)("div",{children:[Object(z.jsx)(w.a,{kind:"success",title:"Success",caption:"Form has been submitted",lowContrast:"false",style:{top:0,right:0,position:"absolute",marginTop:"4rem"}}),Object(z.jsx)("div",{className:"tilePlacement",children:Object(z.jsx)(D.a,{children:Object(z.jsx)(M.a,{children:Object(z.jsx)(F.a,{children:Object(z.jsxs)("center",{children:[Object(z.jsx)(H.a,{description:"Active loading indicator",withOverlay:!1}),Object(z.jsxs)("div",{style:{width:"40%",height:"4rem",marginTop:"4rem"},children:[Object(z.jsx)("h4",{class:"alert-heading",children:"Wooah! Your form has been submitted \ud83d\ude04"}),Object(z.jsx)("p",{children:"Now based on the deployed watson machine learning model in cloudPak for data, predictions for the given input data will be displayed."}),Object(z.jsx)("hr",{}),Object(z.jsx)("p",{class:"mb-0",children:"Kindly wait for the response."})]})]})})})})})]}):"","no"==this.state.isSubmitted?Object(z.jsxs)("div",{children:[Object(z.jsxs)("div",{class:"header",children:[Object(z.jsx)("br",{}),Object(z.jsx)("img",{src:W,style:{width:"5rem",height:"4rem"}}),Object(z.jsx)("br",{}),Object(z.jsx)("h3",{style:{color:"white"},children:"Loan Processing Application"}),Object(z.jsx)("center",{children:Object(z.jsx)("p",{style:{textAlign:"center"},children:"This application leverages the useage of Cloud Pak for data, Cloud Pak for integration and Cloud Pak for Application"})})]}),Object(z.jsx)("br",{}),Object(z.jsx)(N.a,{style:{marginTop:"2rem"},onSubmit:this.submitHandler,children:Object(z.jsxs)(D.a,{children:[Object(z.jsx)(M.a,{children:Object(z.jsxs)(F.a,{sm:3,md:5,lg:4,children:[Object(z.jsx)("h3",{style:{float:"left",marginLeft:"1rem"},children:"Enter loan details"}),Object(z.jsx)("br",{}),Object(z.jsx)("hr",{className:"new4"})]})}),Object(z.jsx)("br",{}),Object(z.jsx)("br",{}),Object(z.jsxs)(M.a,{children:[Object(z.jsxs)(F.a,{sm:3,md:5,lg:4,children:[Object(z.jsx)("h5",{style:{float:"left",marginLeft:"1rem"},children:"1. Personal Information"}),Object(z.jsx)("br",{})]}),Object(z.jsx)("br",{})]}),Object(z.jsx)("br",{}),Object(z.jsx)(M.a,{children:Object(z.jsx)(F.a,{sm:3,md:5,lg:4,children:Object(z.jsx)(B.a,{id:"age",invalidText:this.state.ageError,labelText:"Age",placeholder:"Enter customer age",name:"age",value:this.state.age,onChange:this.changeHandler,invalid:this.state.invalidAge,inline:!0})})}),Object(z.jsx)("br",{}),Object(z.jsx)(M.a,{children:Object(z.jsx)(F.a,{sm:3,md:5,lg:4,children:Object(z.jsx)(B.a,{id:"experience",invalidText:this.state.experienceError,labelText:"Experience",placeholder:"Enter years of experience",name:"experience",value:this.state.experience,onChange:this.changeHandler,invalid:this.state.invalidExperience,inline:!0})})}),Object(z.jsx)("br",{}),Object(z.jsx)(M.a,{children:Object(z.jsx)(F.a,{sm:3,md:5,lg:4,children:Object(z.jsx)(B.a,{id:"income",invalidText:this.state.incomeError,labelText:"Annual Income",placeholder:"Enter annual Income ",name:"income",value:this.state.income,onChange:this.changeHandler,invalid:this.state.invalidIncome,inline:!0})})}),Object(z.jsx)("br",{}),Object(z.jsx)(M.a,{children:Object(z.jsx)(F.a,{sm:3,md:5,lg:4,children:Object(z.jsx)(B.a,{id:"zipcode",invalidText:this.state.ZipcodeError,labelText:"ZipCode",placeholder:"Enter Zip code",name:"Zipcode",value:this.state.Zipcode,onChange:this.changeHandler,invalid:this.state.invalidZipcode,inline:!0})})}),Object(z.jsx)("br",{}),Object(z.jsx)(M.a,{children:Object(z.jsx)(F.a,{sm:3,md:5,lg:4,children:Object(z.jsx)(B.a,{id:"family",invalidText:this.state.familyError,labelText:"Family Size",placeholder:"Enter family size",name:"familySize",value:this.state.familySize,onChange:this.changeHandler,invalid:this.state.invalidFamilySize,inline:!0})})}),Object(z.jsx)("br",{}),Object(z.jsx)(M.a,{children:Object(z.jsx)(F.a,{sm:1,md:5,lg:4,style:{marginLeft:"1rem"},children:Object(z.jsx)(R.a,{legendText:"Education",onChange:this.onChangeEducation,value:this.state.education,style:{textAlign:"left"},children:Object(z.jsxs)(Y.a,{labelPosition:"right",orientation:"horizontal",children:[Object(z.jsx)($.a,{id:"undergrad",labelText:"Under-Graduate",value:"1",name:"education"}),Object(z.jsx)($.a,{id:"graduate",labelText:"Graduate",value:"2",name:"education"}),Object(z.jsx)($.a,{id:"advanced",labelText:"Advanced/Professional",value:"3",name:"education"})]})})})}),Object(z.jsx)("br",{}),Object(z.jsx)("br",{}),Object(z.jsxs)(M.a,{children:[Object(z.jsxs)(F.a,{sm:3,md:5,lg:4,children:[Object(z.jsxs)("h5",{style:{float:"left",marginLeft:"1rem"},children:["2. Loan Information",Object(z.jsx)(G.a,{direction:"right",tabIndex:0,children:Object(z.jsx)("p",{children:"We use this information to process your eligibility for taking loan.Kindly provide correct details."})})]}),Object(z.jsx)("br",{})]}),Object(z.jsx)("br",{})]}),Object(z.jsx)("br",{}),Object(z.jsx)(M.a,{children:Object(z.jsx)(F.a,{sm:3,md:5,lg:4,children:Object(z.jsx)(B.a,{id:"ccavg",invalidText:this.state.CcavgError,labelText:"Ccavg",placeholder:"Enter Ccavg",name:"Ccavg",value:this.state.Ccavg,onChange:this.changeHandler,invalid:this.state.invalidCcavg,inline:!0})})}),Object(z.jsx)("br",{}),Object(z.jsx)(M.a,{children:Object(z.jsx)(F.a,{sm:3,md:5,lg:4,children:Object(z.jsx)(B.a,{id:"mortgage",invalidText:this.state.mortgageError,labelText:"Mortgage",placeholder:"Enter Mortgage vale",name:"mortgage",value:this.state.mortgage,onChange:this.changeHandler,invalid:this.state.invalidMortgage,inline:!0})})}),Object(z.jsx)("br",{}),Object(z.jsx)("br",{}),Object(z.jsxs)(M.a,{children:[Object(z.jsx)(F.a,{sm:1,md:3,lg:5,style:{marginLeft:"1rem"},children:Object(z.jsx)(R.a,{legendText:"Security Account",onChange:this.onChangeSecurityAccount,value:this.state.security_account,style:{textAlign:"left"},children:Object(z.jsxs)(Y.a,{labelPosition:"right",orientation:"horizontal",children:[Object(z.jsx)($.a,{id:"security-1",labelText:"Yes",value:"1",name:"security_account"}),Object(z.jsx)($.a,{id:"security-0",labelText:"No",value:"0",name:"security_account"})]})})}),Object(z.jsx)(F.a,{sm:1,md:5,lg:4,style:{marginLeft:"1rem"},children:Object(z.jsx)(R.a,{legendText:"CD Account",onChange:this.onChangeCdAccount,value:this.state.CdAccount,style:{textAlign:"left"},children:Object(z.jsxs)(Y.a,{labelPosition:"right",orientation:"horizontal",children:[Object(z.jsx)($.a,{id:"cd-yes",labelText:"Yes",value:"1",name:"CdAccount"}),Object(z.jsx)($.a,{id:"cd-no",labelText:"No",value:"0",name:"CdAccount"})]})})})]}),Object(z.jsx)("br",{}),Object(z.jsxs)(M.a,{children:[Object(z.jsx)(F.a,{sm:1,md:3,lg:5,style:{marginLeft:"1rem"},children:Object(z.jsx)(R.a,{legendText:"Online",onChange:this.onChangeOnline,value:this.state.online,style:{textAlign:"left"},children:Object(z.jsxs)(Y.a,{labelPosition:"right",orientation:"horizontal",children:[Object(z.jsx)($.a,{id:"online-1",labelText:"Yes",value:"1",name:"online"}),Object(z.jsx)($.a,{id:"online-0",labelText:"No",value:"0",name:"online"})]})})}),Object(z.jsx)(F.a,{sm:1,md:5,lg:4,style:{marginLeft:"1rem"},children:Object(z.jsx)(R.a,{legendText:"Credit Card",onChange:this.onChangeCreditCard,value:this.state.credit_card,style:{textAlign:"left"},children:Object(z.jsxs)(Y.a,{labelPosition:"right",orientation:"horizontal",children:[Object(z.jsx)($.a,{id:"credit-1",labelText:"Yes",value:"1",name:"credit_card"}),Object(z.jsx)($.a,{id:"credit-0",labelText:"No",value:"0",name:"credit_card"})]})})})]}),Object(z.jsx)("br",{}),Object(z.jsx)(M.a,{children:Object(z.jsx)(F.a,{sm:1,md:1,lg:1,style:{marginLeft:"1rem",marginBottom:"6rem"},children:Object(z.jsx)(U.a,{kind:"tertiary",type:"submit",children:"Submit"})})})]})})]}):"","loan approved"==this.state.LoanResponse&&"yes"==this.state.isSubmitted?Object(z.jsx)("div",{children:Object(z.jsx)("div",{className:"tilePlacement2",children:Object(z.jsx)(D.a,{children:Object(z.jsx)(M.a,{children:Object(z.jsx)(F.a,{children:Object(z.jsx)("center",{children:Object(z.jsxs)("div",{class:"alert alert-success",role:"alert",children:[Object(z.jsx)("h4",{class:"alert-heading",children:"Congratulations!"}),Object(z.jsx)("span",{style:{fontSize:"40px"},children:"\u2713"}),Object(z.jsx)("p",{children:"Your loan has been successfully approved"}),Object(z.jsx)("hr",{}),Object(z.jsx)("p",{class:"mb-0",children:"Thanking for using our site"})]})})})})})})}):"","loan denied"==this.state.LoanResponse&&"yes"==this.state.isSubmitted?Object(z.jsx)("div",{children:Object(z.jsx)("div",{className:"tilePlacement2",children:Object(z.jsx)(D.a,{children:Object(z.jsx)(M.a,{children:Object(z.jsx)(F.a,{children:Object(z.jsx)("center",{children:Object(z.jsxs)("div",{class:"alert alert-danger",role:"alert",children:[Object(z.jsx)("h4",{class:"alert-heading",children:"Sorry!"}),Object(z.jsx)("span",{style:{fontSize:"40px"},children:"\u2717"}),Object(z.jsx)("p",{children:" Your loan has been denied. Better luck next time."}),Object(z.jsx)("hr",{}),Object(z.jsx)("p",{class:"mb-0",children:"Thanking for using our site"})]})})})})})})}):""]})}}]),i}(a.Component);var Q=function(){return Object(z.jsxs)("div",{className:"App",children:[Object(z.jsx)(L,{}),Object(z.jsx)(V,{})]})},X=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,131)).then((function(t){var i=t.getCLS,a=t.getFID,n=t.getFCP,c=t.getLCP,s=t.getTTFB;i(e),a(e),n(e),c(e),s(e)}))};i(97);s.a.render(Object(z.jsx)(n.a.StrictMode,{children:Object(z.jsx)(Q,{})}),document.getElementById("root")),X()}},[[98,1,2]]]);
//# sourceMappingURL=main.2ef9b50f.chunk.js.map
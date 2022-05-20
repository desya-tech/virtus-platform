!function(){"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function i(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}(self.webpackChunkappdemo_ng12=self.webpackChunkappdemo_ng12||[]).push([[416],{41416:function(e,n,r){r.r(n),r.d(n,{TargetModule:function(){return L}});var a,o=r(62224),u=r(90030),s=r(28127),c=r(47112),l=r(75688),g=r(74693),d=r.n(g),p=r(57147),Z=r(41037),f=r(63620),h=((a=function(){function e(i){t(this,e),this.http=i}return i(e,[{key:"getAll",value:function(t){return this.http.get("".concat(Z.N.apiUrl,"/target/getall/").concat(t))}},{key:"getById",value:function(t){return this.http.get("".concat(Z.N.apiUrl,"/target/getdetail/").concat(t))}},{key:"getByCompanyId",value:function(t,e){return this.http.get("".concat(Z.N.apiUrl,"/target/getdetailbycompany/").concat(t,"/").concat(e))}},{key:"create",value:function(t){return this.http.post("".concat(Z.N.apiUrl,"/target/create"),t)}},{key:"update",value:function(t,e){return this.http.put("".concat(Z.N.apiUrl,"/target/update/").concat(t),e)}},{key:"delete",value:function(t){return this.http.delete("".concat(Z.N.apiUrl,"/target/delete/").concat(t))}}]),e}()).\u0275fac=function(t){return new(t||a)(p.LFG(f.eN))},a.\u0275prov=p.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a),A=r(41569),v=r(67393),m=r(78017),T=r(32543);function b(t,e){1&t&&(p.TgZ(0,"h4",30),p._uU(1,"New Target"),p.qZA())}function y(t,e){1&t&&(p.TgZ(0,"h4",30),p._uU(1,"Edit Target"),p.qZA())}function q(t,e){if(1&t){var i=p.EpF();p.TgZ(0,"div",24),p.TgZ(1,"button",31),p.NdJ("click",function(){return p.CHM(i),p.oxw().newtargetcompany()}),p._UZ(2,"i",32),p._uU(3,"New Target"),p.qZA(),p.qZA()}}function _(t,e){if(1&t){var i=p.EpF();p.TgZ(0,"div",17),p.TgZ(1,"label"),p._uU(2,"Company"),p.qZA(),p.TgZ(3,"ng-select",33),p.NdJ("change",function(t){return p.CHM(i),p.oxw().onCompanySelected(t)}),p.qZA(),p.qZA()}if(2&t){var n=p.oxw();p.xp6(3),p.Q6J("items",n.bplist)("multiple",!1)}}function N(t,e){1&t&&(p.TgZ(0,"div",14),p.TgZ(1,"label"),p._uU(2,"Company"),p.qZA(),p._UZ(3,"input",34),p.qZA())}function U(t,e){if(1&t){var i=p.EpF();p.TgZ(0,"div",17),p.TgZ(1,"label"),p._uU(2,"Product"),p.qZA(),p.TgZ(3,"ng-select",35),p.NdJ("change",function(t){return p.CHM(i),p.oxw().onProductSelected(t)}),p.qZA(),p.qZA()}if(2&t){var n=p.oxw();p.xp6(3),p.Q6J("items",n.productlist)("multiple",!1)}}function Y(t,e){1&t&&(p.TgZ(0,"div",14),p.TgZ(1,"label"),p._uU(2,"Product Name"),p.qZA(),p._UZ(3,"input",36),p.qZA())}function x(t,e){1&t&&(p.TgZ(0,"div",38),p._uU(1,"*Target required"),p.qZA())}function E(t,e){if(1&t&&(p.TgZ(0,"div"),p.YNc(1,x,2,0,"div",37),p.qZA()),2&t){var i=p.oxw();p.xp6(1),p.Q6J("ngIf",i.f.TARGET.errors.required)}}function C(t,e){if(1&t&&(p.TgZ(0,"option",39),p._uU(1),p.qZA()),2&t){var i=e.$implicit;p.s9C("value",i.YEAR),p.xp6(1),p.Oqu(i.YEAR)}}function R(t,e){1&t&&(p.TgZ(0,"div",38),p._uU(1,"*target required"),p.qZA())}function w(t,e){if(1&t&&(p.TgZ(0,"div"),p.YNc(1,R,2,0,"div",37),p.qZA()),2&t){var i=p.oxw();p.xp6(1),p.Q6J("ngIf",i.f.YEAR.errors.required)}}function k(t,e){1&t&&p._UZ(0,"span")}function M(t,e){if(1&t&&(p.TgZ(0,"option",39),p._uU(1),p.qZA()),2&t){var i=e.$implicit;p.s9C("value",i.YEAR),p.xp6(1),p.Oqu(i.YEAR)}}function O(t,e){if(1&t){var i=p.EpF();p.TgZ(0,"tr"),p.TgZ(1,"td",40),p.TgZ(2,"p"),p.TgZ(3,"button",41),p.NdJ("click",function(){var t=p.CHM(i).$implicit;return p.oxw().clickedit(t.TARGET_ID)}),p._uU(4),p.qZA(),p.qZA(),p.qZA(),p.TgZ(5,"td",40),p.TgZ(6,"p"),p._uU(7),p.qZA(),p.qZA(),p.TgZ(8,"td"),p.TgZ(9,"div",42),p.TgZ(10,"button",43),p.NdJ("click",function(){var t=p.CHM(i).$implicit;return p.oxw().confirmBox("delete",t)}),p.TgZ(11,"span"),p._UZ(12,"i",44),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA()}if(2&t){var n=e.$implicit,r=p.oxw();p.xp6(4),p.hij(" ",n.PRODUCT_NAME," "),p.xp6(3),p.Oqu(r.formatRupiah(n.TARGET,"Rp. "))}}var S=function(t){return{"is-invalid":t}},I=function(){var e=function(){function e(i,n,r,a,o,u,s,c){t(this,e),this.formBuilder=i,this.route=n,this.router=r,this.targetService=a,this.alertService=o,this.bpService=u,this.productService=s,this.datepipe=c,this.subs=new l.Y,this.loading=!1,this.submitted=!1,this.data=null,this.bplist=null,this.productlist=null,this.targetlistbycompany=null,this.currDate=new Date,this.newtarget=!1,this.years=[{YEAR:"2022"},{YEAR:"2023"},{YEAR:"2024"},{YEAR:"2025"}],this.totaltarget=0,this.company_name=null}return i(e,[{key:"ngOnInit",value:function(){var t=this;this.companyid=this.route.snapshot.params.companyid,this.isAddMode=!this.companyid,this.form=this.formBuilder.group({COMPANY_ID:["",s.kI.required],COMPANY_NAME:["",s.kI.required],PRODUCT_ID:["",s.kI.required],PRODUCT_NAME:["",s.kI.required],TARGET:[0,s.kI.required],TOTAL:[0],YEAR:[""]}),this.isAddMode||this.subs.add(this.targetService.getByCompanyId(this.companyid,this.datepipe.transform(this.currDate,"yyyy").toString()).pipe((0,c.P)()).subscribe(function(e){t.targetlistbycompany=e,t.company_name=t.targetlistbycompany[0].COMPANY_NAME,t.targetlistbycompany.forEach(function(e){t.totaltarget=t.totaltarget+parseInt(e.TARGET)}),t.form.patchValue(e[0]),t.form.get("YEAR").setValue(t.datepipe.transform(e[0].YEAR,"yyyy"))})),this.subs.add(this.bpService.getAll().pipe((0,c.P)()).subscribe(function(e){return t.bplist=e})),this.subs.add(this.productService.getProduct().pipe((0,c.P)()).subscribe(function(e){t.productlist=e,t.productlist.push({PRODUCT_ID:"1",PRODUCT_NAME:"Other"})}))}},{key:"f",get:function(){return this.form.controls}},{key:"onSubmit",value:function(){this.submitted=!0,this.alertService.clear(),!this.form.invalid&&(this.loading=!0,this.isAddMode?this.create():this.update())}},{key:"create",value:function(){var t=this;this.alertService.loading(),this.subs.add(this.targetService.create(this.form.value).pipe((0,c.P)()).subscribe({next:function(){t.alertService.success(),t.router.navigate(["/target"],{relativeTo:t.route})},error:function(e){t.alertService.error(e),t.loading=!1}}))}},{key:"update",value:function(){var t=this;this.alertService.loading(),this.subs.add(this.targetService.update(this.id,this.form.value).pipe((0,c.P)()).subscribe({next:function(){t.alertService.success(),t.router.navigate(["/target"],{relativeTo:t.route})},error:function(e){t.alertService.error(e),t.loading=!1}}))}},{key:"delete",value:function(t){var e=this;this.alertService.loading();var i=this.targetlistbycompany.find(function(e){return e.TARGET_ID===t.TARGET_ID});this.subs.add(this.targetService.delete(t.TARGET_ID).pipe((0,c.P)()).subscribe(function(){i.isDeleting=!0,e.targetlistbycompany=e.targetlistbycompany.filter(function(e){return e.TARGET_ID!==t.TARGET_ID}),e.alertService.success()},function(t){e.alertService.error(t)}))}},{key:"onCompanySelected",value:function(t){this.form.get("COMPANY_ID").setValue(t.COMPANY_ID),this.form.get("COMPANY_NAME").setValue(t.COMPANY_NAME)}},{key:"onProductSelected",value:function(t){this.form.get("PRODUCT_ID").setValue(t.PRODUCT_ID),this.form.get("PRODUCT_NAME").setValue(t.PRODUCT_NAME)}},{key:"formatRupiah",value:function(t,e){var i=t.replace(/[^,\d]/g,"").toString().split(","),n=i[0].length%3,r=i[0].substr(0,n),a=i[0].substr(n).match(/\d{3}/gi);return a&&(r+=(n?".":"")+a.join(".")),r=null!=i[1]?r+","+i[1]:r,null==e?r:r?"Rp. "+r:""}},{key:"formatRupiah2",value:function(t,e){var i=t.toString().split(","),n=i[0].length%3,r=i[0].substr(0,n),a=i[0].substr(n).match(/\d{3}/gi);return a&&(r+=(n?".":"")+a.join(".")),r=null!=i[1]?r+","+i[1]:r,null==e?r:r?"Rp. "+r:""}},{key:"confirmBox",value:function(t,e){var i=this;"delete"==t&&d().fire({title:"Are you sure want to delete?",text:e.BP_GROUP_NAME,icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, delete it!",cancelButtonText:"Cancel"}).then(function(t){t.value&&i.delete(e)})}},{key:"clickedit",value:function(t){var e=this;this.isAddMode=!1,this.id=t,this.subs.add(this.targetService.getById(t).pipe((0,c.P)()).subscribe(function(t){e.form.patchValue(t),e.form.get("YEAR").setValue(e.datepipe.transform(t.YEAR,"yyyy"))}))}},{key:"onSelectClick",value:function(t){var e=this;this.subs.add(this.targetService.getByCompanyId(this.companyid,t).pipe((0,c.P)()).subscribe(function(t){e.targetlistbycompany=t,e.company_name=e.targetlistbycompany[0].COMPANY_NAME,e.targetlistbycompany.forEach(function(t){e.totaltarget=e.totaltarget+parseInt(t.TARGET)}),e.form.get("YEAR").setValue(e.datepipe.transform(t[0].YEAR,"yyyy"))}))}},{key:"newtargetcompany",value:function(){this.isAddMode=!0,this.newtarget=!0,this.form.get("TARGET").setValue(0)}},{key:"ngOnDestroy",value:function(){this.subs.unsubscribe()}}]),e}();return e.\u0275fac=function(t){return new(t||e)(p.Y36(s.qu),p.Y36(u.gz),p.Y36(u.F0),p.Y36(h),p.Y36(A.c9),p.Y36(v.m),p.Y36(m.M),p.Y36(o.uU))},e.\u0275cmp=p.Xpm({type:e,selectors:[["app-target-add-edit"]],decls:67,vars:23,consts:[[1,"title","d-flex","align-items-center","flex-wrap","mb-30"],["class","mr-40",4,"ngIf"],["routerLink","/target",1,"main-btn","primary-btn","btn-hover","btn-sm"],[1,"lni","lni-chevron-left","mr-5"],[1,"row"],[1,"col-lg-6"],[1,"card-style","mb-30"],[1,"title","d-flex","flex-wrap","justify-content-between"],[1,"left"],["class","right",4,"ngIf"],[3,"formGroup","ngSubmit"],[1,"divider"],["class","select-style-1",4,"ngIf"],["class","input-style-1",4,"ngIf"],[1,"input-style-1"],["type","number","formControlName","TARGET",3,"ngClass"],[4,"ngIf"],[1,"select-style-1"],[1,"select-position"],["formControlName","YEAR",3,"ngClass"],[3,"value",4,"ngFor","ngForOf"],["routerLink","/target",1,"main-btn","primary-btn-outline","rounded-btn","btn-hover","btn-sm"],[1,"main-btn","primary-btn","rounded-btn","btn-hover","btn-sm",3,"disabled"],[1,"mb-10"],[1,"right"],[1,"select-position","select-sm"],[1,"light-bg",3,"change"],[1,"table-wrapper","table-responsive"],[1,"table","striped-table"],[4,"ngFor","ngForOf"],[1,"mr-40"],[1,"main-btn","primary-btn","btn-hover","btn-sm",3,"click"],[1,"lni","lni-plus","mr-5"],["bindLabel","COMPANY_NAME","placeholder","Search Company","appendTo","body",3,"items","multiple","change"],["type","text","formControlName","COMPANY_NAME","disabled",""],["bindLabel","PRODUCT_NAME","placeholder","Search Product","appendTo","body",3,"items","multiple","change"],["type","text","formControlName","PRODUCT_NAME","disabled",""],["style","color:red",4,"ngIf"],[2,"color","red"],[3,"value"],[1,"min-width"],[1,"main-btn","primary-btn-outline","btn-hover","btn-sm",3,"click"],[1,"action"],[1,"text-danger",3,"click"],[1,"lni","lni-trash-can"]],template:function(t,e){1&t&&(p.TgZ(0,"div",0),p.YNc(1,b,2,0,"h4",1),p.YNc(2,y,2,0,"h4",1),p.TgZ(3,"button",2),p._UZ(4,"i",3),p._uU(5,"Back"),p.qZA(),p.qZA(),p.TgZ(6,"div",4),p.TgZ(7,"div",5),p.TgZ(8,"div",6),p.TgZ(9,"div",7),p.TgZ(10,"div",8),p.TgZ(11,"h5"),p._uU(12,"Target"),p.qZA(),p.qZA(),p.YNc(13,q,4,0,"div",9),p.qZA(),p.TgZ(14,"form",10),p.NdJ("ngSubmit",function(){return e.onSubmit()}),p.TgZ(15,"span",11),p._UZ(16,"hr"),p.qZA(),p.YNc(17,_,4,2,"div",12),p.YNc(18,N,4,0,"div",13),p.YNc(19,U,4,2,"div",12),p.YNc(20,Y,4,0,"div",13),p.TgZ(21,"div",14),p.TgZ(22,"label"),p._uU(23,"Target"),p.qZA(),p._UZ(24,"input",15),p.YNc(25,E,2,1,"div",16),p.qZA(),p.TgZ(26,"div",17),p.TgZ(27,"label"),p._uU(28,"Year"),p.qZA(),p.TgZ(29,"div",18),p.TgZ(30,"select",19),p.YNc(31,C,2,2,"option",20),p.qZA(),p.qZA(),p.YNc(32,w,2,1,"div",16),p.qZA(),p.TgZ(33,"span",11),p._UZ(34,"hr"),p.qZA(),p.TgZ(35,"div"),p.TgZ(36,"button",21),p._uU(37," Cancel "),p.qZA(),p._uU(38,"\xa0 "),p.TgZ(39,"button",22),p.YNc(40,k,1,0,"span",16),p._uU(41," \xa0Save\xa0 "),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.TgZ(42,"div",5),p.TgZ(43,"div",6),p.TgZ(44,"div",7),p.TgZ(45,"div",8),p.TgZ(46,"h6",23),p._uU(47),p.qZA(),p.TgZ(48,"h6",23),p._uU(49),p.qZA(),p.qZA(),p.TgZ(50,"div",24),p.TgZ(51,"div",17),p.TgZ(52,"div",25),p.TgZ(53,"select",26),p.NdJ("change",function(t){return e.onSelectClick(t.target.value)}),p.YNc(54,M,2,2,"option",20),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.TgZ(55,"div",27),p.TgZ(56,"table",28),p.TgZ(57,"thead"),p.TgZ(58,"tr"),p.TgZ(59,"th"),p.TgZ(60,"h6"),p._uU(61,"Product Name"),p.qZA(),p.qZA(),p.TgZ(62,"th"),p.TgZ(63,"h6"),p._uU(64,"Target"),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.TgZ(65,"tbody"),p.YNc(66,O,13,2,"tr",29),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA()),2&t&&(p.xp6(1),p.Q6J("ngIf",e.isAddMode),p.xp6(1),p.Q6J("ngIf",!e.isAddMode),p.xp6(11),p.Q6J("ngIf",!e.isAddMode),p.xp6(1),p.Q6J("formGroup",e.form),p.xp6(3),p.Q6J("ngIf",e.isAddMode&&0==e.newtarget),p.xp6(1),p.Q6J("ngIf",!e.isAddMode||e.newtarget),p.xp6(1),p.Q6J("ngIf",e.isAddMode),p.xp6(1),p.Q6J("ngIf",!e.isAddMode),p.xp6(4),p.Q6J("ngClass",p.VKq(19,S,e.submitted&&e.f.TARGET.errors)),p.xp6(1),p.Q6J("ngIf",e.submitted&&e.f.TARGET.errors),p.xp6(5),p.Q6J("ngClass",p.VKq(21,S,e.submitted&&e.f.YEAR.errors)),p.xp6(1),p.Q6J("ngForOf",e.years),p.xp6(1),p.Q6J("ngIf",e.submitted&&e.f.YEAR.errors),p.xp6(7),p.Q6J("disabled",e.loading),p.xp6(1),p.Q6J("ngIf",e.loading),p.xp6(7),p.hij(" Company : ",e.company_name,""),p.xp6(2),p.hij(" Total : ",e.formatRupiah2(e.totaltarget,"Rp. "),""),p.xp6(5),p.Q6J("ngForOf",e.years),p.xp6(12),p.Q6J("ngForOf",e.targetlistbycompany))},directives:[o.O5,u.rH,s._Y,s.JL,s.sg,s.wV,s.Fj,s.JJ,s.u,o.mk,s.EJ,o.sg,T.w9,s.YN,s.Kr],styles:[""]}),e}(),P=r(7333),J=r(94968);function D(t,e){if(1&t&&(p.TgZ(0,"option",27),p._uU(1),p.qZA()),2&t){var i=e.$implicit;p.s9C("value",i.YEAR),p.xp6(1),p.Oqu(i.YEAR)}}function Q(t,e){if(1&t&&(p.TgZ(0,"tr"),p.TgZ(1,"td",28),p.TgZ(2,"p"),p._uU(3),p.qZA(),p.qZA(),p.TgZ(4,"td",28),p.TgZ(5,"p"),p._uU(6),p.qZA(),p.qZA(),p.TgZ(7,"td",28),p.TgZ(8,"p"),p._uU(9),p.qZA(),p.qZA(),p.TgZ(10,"td"),p.TgZ(11,"div",29),p.TgZ(12,"button",30),p._UZ(13,"i",31),p.qZA(),p._uU(14,"\xa0 "),p.qZA(),p.qZA(),p.qZA()),2&t){var i=e.$implicit,n=p.oxw();p.xp6(3),p.Oqu(i.COMPANY_NAME),p.xp6(3),p.Oqu(i.PRODUCT_NAME),p.xp6(3),p.Oqu(n.formatRupiah(i.TARGET,"Rp. ")),p.xp6(3),p.MGl("routerLink","edit/",i.COMPANY_ID,"")}}var F=function(t,e){return{itemsPerPage:t,currentPage:e}},G=[{path:"target",component:function(){var e=function(){function e(){t(this,e)}return i(e,[{key:"ngOnInit",value:function(){}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=p.Xpm({type:e,selectors:[["app-target-layout"]],decls:1,vars:0,template:function(t,e){1&t&&p._UZ(0,"router-outlet")},directives:[u.lC],styles:[""]}),e}(),children:[{path:"",component:function(){var e=function(){function e(i,n){t(this,e),this.targetServcie=i,this.datepipe=n,this.subs=new l.Y,this.isManaging=!1,this.gridLayout=!0,this.activities=null,this.targetlist=null,this.p=1,this.count=10,this.countdata=null,this.currDate=new Date,this.years=[{YEAR:"2022"},{YEAR:"2023"},{YEAR:"2024"},{YEAR:"2025"}]}return i(e,[{key:"ngOnInit",value:function(){var t=this;this.subs.add(this.targetServcie.getAll(this.datepipe.transform(this.currDate,"yyyy").toString()).pipe((0,c.P)()).subscribe(function(e){t.targetlist=e,t.countdata=t.targetlist.length}))}},{key:"formatRupiah",value:function(t,e){var i=t.replace(/[^,\d]/g,"").toString().split(","),n=i[0].length%3,r=i[0].substr(0,n),a=i[0].substr(n).match(/\d{3}/gi);return a&&(r+=(n?".":"")+a.join(".")),r=null!=i[1]?r+","+i[1]:r,null==e?r:r?"Rp. "+r:""}},{key:"onSelectClick",value:function(t){var e=this;this.subs.add(this.targetServcie.getAll(t).pipe((0,c.P)()).subscribe(function(t){e.targetlist=t,e.countdata=e.targetlist.length}))}}]),e}();return e.\u0275fac=function(t){return new(t||e)(p.Y36(h),p.Y36(o.uU))},e.\u0275cmp=p.Xpm({type:e,selectors:[["app-target"]],decls:48,vars:12,consts:[[1,"title","d-flex","align-items-center","flex-wrap","mb-30"],[1,"mr-40"],["routerLink","add",1,"main-btn","primary-btn","btn-hover","btn-sm"],[1,"lni","lni-plus","mr-5"],[1,"tables-wrapper"],[1,"row"],[1,"col-lg-12"],[1,"card-style","mb-30"],[1,"row","align-items-center"],[1,"col-md-6"],[1,"d-flex","flex-wrap","justify-content-between","align-items-center","py-3"],[1,"left"],[1,"select-style-1"],[1,"select-position","select-sm"],[1,"light-bg",3,"change"],[3,"value",4,"ngFor","ngForOf"],[1,"right"],[1,"table-search","d-flex"],["action","#"],["type","text","name","something","placeholder","Search...",3,"ngModel","ngModelChange"],[1,"lni","lni-search-alt"],[1,"table-wrapper","table-responsive"],[1,"table"],[4,"ngFor","ngForOf"],[1,"pt-10","d-flex","flex-wrap","justify-content-between"],[1,"text-right"],[3,"pageChange"],[3,"value"],[1,"min-width"],[1,"action"],[1,"text-primary",2,"cursor","pointer",3,"routerLink"],[1,"lni","lni-pencil-alt"]],template:function(t,e){1&t&&(p.TgZ(0,"div",0),p.TgZ(1,"h4",1),p._uU(2,"Target"),p.qZA(),p.TgZ(3,"button",2),p._UZ(4,"i",3),p._uU(5,"New Target"),p.qZA(),p.qZA(),p.TgZ(6,"div",4),p.TgZ(7,"div",5),p.TgZ(8,"div",6),p.TgZ(9,"div",7),p.TgZ(10,"div",8),p._UZ(11,"div",9),p.qZA(),p.TgZ(12,"div",10),p.TgZ(13,"div",11),p.TgZ(14,"div",12),p.TgZ(15,"div",13),p.TgZ(16,"select",14),p.NdJ("change",function(t){return e.onSelectClick(t.target.value)}),p.YNc(17,D,2,2,"option",15),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.TgZ(18,"div",16),p.TgZ(19,"div",17),p.TgZ(20,"form",18),p.TgZ(21,"input",19),p.NdJ("ngModelChange",function(t){return e.filterdata=t}),p.qZA(),p.TgZ(22,"button"),p._UZ(23,"i",20),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.TgZ(24,"div",21),p.TgZ(25,"table",22),p.TgZ(26,"thead"),p.TgZ(27,"tr"),p.TgZ(28,"th"),p.TgZ(29,"h6"),p._uU(30,"Company Name"),p.qZA(),p.qZA(),p.TgZ(31,"th"),p.TgZ(32,"h6"),p._uU(33,"Product"),p.qZA(),p.qZA(),p.TgZ(34,"th"),p.TgZ(35,"h6"),p._uU(36,"Target"),p.qZA(),p.qZA(),p.TgZ(37,"th"),p.TgZ(38,"h6"),p._uU(39,"Action"),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.TgZ(40,"tbody"),p.YNc(41,Q,15,4,"tr",23),p.ALo(42,"paginate"),p.ALo(43,"filter"),p.qZA(),p.qZA(),p.qZA(),p.TgZ(44,"div",24),p._UZ(45,"div",11),p.TgZ(46,"div",25),p.TgZ(47,"pagination-controls",26),p.NdJ("pageChange",function(t){return e.p=t}),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA()),2&t&&(p.xp6(17),p.Q6J("ngForOf",e.years),p.xp6(4),p.Q6J("ngModel",e.filterdata),p.xp6(20),p.Q6J("ngForOf",p.xi3(42,3,p.xi3(43,6,e.targetlist,e.filterdata),p.WLB(9,F,e.count,e.p))))},directives:[u.rH,o.sg,s._Y,s.JL,s.F,s.Fj,s.JJ,s.On,P.LS,s.YN,s.Kr],pipes:[P._s,J.Z],styles:[""]}),e}()},{path:"add",component:I},{path:"edit/:companyid",component:I}]}],B=function(){var e=function e(){t(this,e)};return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=p.oAB({type:e}),e.\u0275inj=p.cJS({imports:[[u.Bz.forChild(G)],u.Bz]}),e}(),L=function(){var e=function e(){t(this,e)};return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=p.oAB({type:e}),e.\u0275inj=p.cJS({providers:[o.uU],imports:[[s.u5,o.ez,B,s.UX,P.JX,J.h,T.A0]]}),e}()}}])}();
!function(){"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function i(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}(self.webpackChunkappdemo_ng12=self.webpackChunkappdemo_ng12||[]).push([[633],{10633:function(e,n,r){r.r(n),r.d(n,{GroupPointModule:function(){return J}});var o,u=r(62224),s=r(28127),a=r(90030),c=r(57147),l=((o=function(){function e(){t(this,e)}return i(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(t){return new(t||o)},o.\u0275cmp=c.Xpm({type:o,selectors:[["app-group-point-layout"]],decls:1,vars:0,template:function(t,e){1&t&&c._UZ(0,"router-outlet")},directives:[a.lC],styles:[""]}),o),p=r(47112),g=r(75688),d=r(74693),f=r.n(d),Z=r(10514),h=r(41569),b=r(7333),v=r(94968);function m(t,e){if(1&t&&(c.TgZ(0,"p"),c._uU(1),c.qZA()),2&t){var i=e.$implicit;c.xp6(1),c.Oqu(i.BP_GROUP_NAME)}}function A(t,e){1&t&&(c.TgZ(0,"span"),c._UZ(1,"i",30),c.qZA())}function T(t,e){if(1&t){var i=c.EpF();c.TgZ(0,"tr"),c.TgZ(1,"td",24),c.TgZ(2,"p"),c._uU(3),c.qZA(),c.qZA(),c.TgZ(4,"td",24),c.YNc(5,m,2,1,"p",19),c.qZA(),c.TgZ(6,"td"),c.TgZ(7,"div",25),c.TgZ(8,"button",26),c._UZ(9,"i",27),c.qZA(),c._uU(10,"\xa0 "),c.TgZ(11,"button",28),c.NdJ("click",function(){var t=c.CHM(i).$implicit;return c.oxw().confirmBox("delete",t)}),c.YNc(12,A,2,0,"span",29),c.qZA(),c.qZA(),c.qZA(),c.qZA()}if(2&t){var n=e.$implicit;c.xp6(3),c.Oqu(n.GROUP_POINT_NAME),c.xp6(2),c.Q6J("ngForOf",n.group_bp_list),c.xp6(3),c.MGl("routerLink","edit/",n.GROUP_POINT_ID,""),c.xp6(3),c.Q6J("disabled",n.isDeleting),c.xp6(1),c.Q6J("ngIf",!n.isDeleting)}}var _=function(t,e){return{itemsPerPage:t,currentPage:e}},q=function(){var e=function(){function e(i,n){t(this,e),this.groupPointService=i,this.alertService=n,this.subs=new g.Y,this.isManaging=!1,this.gridLayout=!0,this.activities=null,this.grouppoint=null,this.p=1,this.count=10,this.countdata=null}return i(e,[{key:"ngOnInit",value:function(){var t=this;this.subs.add(this.groupPointService.getAll().pipe((0,p.P)()).subscribe(function(e){t.grouppoint=e,t.countdata=t.grouppoint.length}))}},{key:"delete",value:function(t){var e=this;this.alertService.loading();var i=this.grouppoint.find(function(e){return e.GROUP_POINT_ID===t.GROUP_POINT_ID});this.subs.add(this.groupPointService.delete(t.GROUP_POINT_ID).pipe((0,p.P)()).subscribe(function(){i.isDeleting=!0,e.grouppoint=e.grouppoint.filter(function(e){return e.GROUP_POINT_ID!==t.GROUP_POINT_ID}),e.countdata=e.grouppoint.length,e.alertService.success()},function(t){e.alertService.error(t)}))}},{key:"onCBChanged",value:function(t){this.isManaging=t}},{key:"confirmBox",value:function(t,e){var i=this;"delete"==t&&f().fire({title:"Are you sure want to delete?",text:e.GROUP_POINT_NAME,icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, delete it!",cancelButtonText:"Cancel"}).then(function(t){t.value&&i.delete(e)})}},{key:"ngOnDestroy",value:function(){this.subs.unsubscribe()}}]),e}();return e.\u0275fac=function(t){return new(t||e)(c.Y36(Z.T),c.Y36(h.c9))},e.\u0275cmp=c.Xpm({type:e,selectors:[["app-group-point"]],decls:48,vars:12,consts:[[1,"title","d-flex","align-items-center","flex-wrap","mb-30"],[1,"mr-40"],["routerLink","add",1,"main-btn","primary-btn","btn-hover","btn-sm"],[1,"lni","lni-plus","mr-5"],[1,"tables-wrapper"],[1,"row"],[1,"col-lg-12"],[1,"card-style","mb-30"],[1,"row","align-items-center"],[1,"col-md-6"],[1,"d-flex","flex-wrap","justify-content-between","align-items-center","py-3"],[1,"left"],[1,"right"],[1,"table-search","d-flex"],["action","#"],["type","text","name","something","placeholder","Search...",3,"ngModel","ngModelChange"],[1,"lni","lni-search-alt"],[1,"table-wrapper","table-responsive"],[1,"table"],[4,"ngFor","ngForOf"],[1,"pt-10","d-flex","flex-wrap","justify-content-between"],[1,"text-sm","text-gray"],[1,"text-right"],[3,"pageChange"],[1,"min-width"],[1,"action"],[1,"text-primary",2,"cursor","pointer",3,"routerLink"],[1,"lni","lni-pencil-alt"],[1,"text-danger",3,"disabled","click"],[4,"ngIf"],[1,"lni","lni-trash-can"]],template:function(t,e){1&t&&(c.TgZ(0,"div",0),c.TgZ(1,"h4",1),c._uU(2,"Group Point"),c.qZA(),c.TgZ(3,"button",2),c._UZ(4,"i",3),c._uU(5," Add "),c.qZA(),c.qZA(),c.TgZ(6,"div",4),c.TgZ(7,"div",5),c.TgZ(8,"div",6),c.TgZ(9,"div",7),c.TgZ(10,"div",8),c._UZ(11,"div",9),c.qZA(),c.TgZ(12,"div",10),c.TgZ(13,"div",11),c.TgZ(14,"p"),c._uU(15,"Show "),c.TgZ(16,"span"),c._uU(17,"10"),c.qZA(),c._uU(18," entries"),c.qZA(),c.qZA(),c.TgZ(19,"div",12),c.TgZ(20,"div",13),c.TgZ(21,"form",14),c.TgZ(22,"input",15),c.NdJ("ngModelChange",function(t){return e.filterdata=t}),c.qZA(),c.TgZ(23,"button"),c._UZ(24,"i",16),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(25,"div",17),c.TgZ(26,"table",18),c.TgZ(27,"thead"),c.TgZ(28,"tr"),c.TgZ(29,"th"),c.TgZ(30,"h6"),c._uU(31,"Group Point"),c.qZA(),c.qZA(),c.TgZ(32,"th"),c.TgZ(33,"h6"),c._uU(34,"Bp Group"),c.qZA(),c.qZA(),c.TgZ(35,"th"),c.TgZ(36,"h6"),c._uU(37,"Action"),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.TgZ(38,"tbody"),c.YNc(39,T,13,5,"tr",19),c.ALo(40,"paginate"),c.ALo(41,"filter"),c.qZA(),c.qZA(),c.qZA(),c.TgZ(42,"div",20),c.TgZ(43,"div",11),c.TgZ(44,"p",21),c._uU(45),c.qZA(),c.qZA(),c.TgZ(46,"div",22),c.TgZ(47,"pagination-controls",23),c.NdJ("pageChange",function(t){return e.p=t}),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA()),2&t&&(c.xp6(22),c.Q6J("ngModel",e.filterdata),c.xp6(17),c.Q6J("ngForOf",c.xi3(40,3,c.xi3(41,6,e.grouppoint,e.filterdata),c.WLB(9,_,e.count,e.p))),c.xp6(6),c.hij("Total ",e.countdata," Group"))},directives:[a.rH,s._Y,s.JL,s.F,s.Fj,s.JJ,s.On,u.sg,b.LS,u.O5],pipes:[b._s,v.Z],styles:[""]}),e}(),P=r(432),U=r(32543);function y(t,e){1&t&&(c.TgZ(0,"h4",19),c._uU(1,"New Group Point"),c.qZA())}function O(t,e){1&t&&(c.TgZ(0,"h4",19),c._uU(1,"Edit Group Point"),c.qZA())}function x(t,e){1&t&&(c.TgZ(0,"div",21),c._uU(1,"*Group Point required"),c.qZA())}function I(t,e){if(1&t&&(c.TgZ(0,"div"),c.YNc(1,x,2,0,"div",20),c.qZA()),2&t){var i=c.oxw();c.xp6(1),c.Q6J("ngIf",i.f.GROUP_POINT_NAME.errors.required)}}function N(t,e){1&t&&c._UZ(0,"span")}var S=function(t){return{"is-invalid":t}},w=function(){return{standalone:!0}},G=function(){var e=function(){function e(i,n,r,o,u,s){t(this,e),this.formBuilder=i,this.route=n,this.router=r,this.groupPointService=o,this.alertService=u,this.bpGroupService=s,this.subs=new g.Y,this.loading=!1,this.submitted=!1,this.data=null,this.bpgroup=null,this.bpgroupall=null,this.selectedbpgroup=null}return i(e,[{key:"ngOnInit",value:function(){var t=this;this.id=this.route.snapshot.params.id,this.isAddMode=!this.id,this.form=this.formBuilder.group({GROUP_POINT_ID:[0],GROUP_POINT_NAME:["",s.kI.required],ISACTIVE:[!0],group_bp_list:[""]}),this.subs.add(this.bpGroupService.getbygroupbp().subscribe(function(e){t.isAddMode?t.bpgroupall=e:t.subs.add(t.groupPointService.getgrouppointbp(t.id).pipe((0,p.P)()).subscribe(function(i){t.bpgroupall=e,i.forEach(function(e){null!==t.bpgroupall&&t.bpgroupall.push(e)})}))})),this.isAddMode||(this.subs.add(this.groupPointService.getById(this.id).pipe((0,p.P)()).subscribe(function(e){t.form.patchValue(e)})),this.subs.add(this.groupPointService.getgrouppointbp(this.id).pipe((0,p.P)()).subscribe(function(e){t.selectedbpgroup=e})))}},{key:"f",get:function(){return this.form.controls}},{key:"onSubmit",value:function(){this.submitted=!0,this.alertService.clear(),!this.form.invalid&&(this.loading=!0,this.isAddMode?this.create():this.update())}},{key:"create",value:function(){var t=this;this.alertService.loading(),this.subs.add(this.groupPointService.create(this.form.value).pipe((0,p.P)()).subscribe({next:function(){t.alertService.success(),t.router.navigate(["../"],{relativeTo:t.route})},error:function(e){t.alertService.error(e),t.loading=!1}}))}},{key:"update",value:function(){var t=this;this.alertService.loading(),this.subs.add(this.groupPointService.update(this.id,this.form.value).pipe((0,p.P)()).subscribe({next:function(){t.alertService.success(),t.router.navigate(["../../"],{relativeTo:t.route})},error:function(e){t.alertService.error(e),t.loading=!1}}))}},{key:"onSelection",value:function(t){this.form.get("group_bp_list").setValue(t)}},{key:"ngOnDestroy",value:function(){this.subs.unsubscribe()}}]),e}();return e.\u0275fac=function(t){return new(t||e)(c.Y36(s.qu),c.Y36(a.gz),c.Y36(a.F0),c.Y36(Z.T),c.Y36(h.c9),c.Y36(P._))},e.\u0275cmp=c.Xpm({type:e,selectors:[["app-group-point-add-edit"]],decls:38,vars:14,consts:[[1,"title","d-flex","align-items-center","flex-wrap","mb-30"],["class","mr-40",4,"ngIf"],["routerLink","/group-point",1,"main-btn","primary-btn","btn-hover","btn-sm"],[1,"lni","lni-chevron-left","mr-5"],[1,"row"],[3,"formGroup","ngSubmit"],[1,"col-lg-6"],[1,"card-style","mb-30"],[1,"divider"],[1,"input-style-1"],["type","text","formControlName","GROUP_POINT_NAME",3,"ngClass"],[4,"ngIf"],[1,"select-position"],["bindLabel","BP_GROUP_NAME","placeholder","Select Bp Group","appendTo","body",3,"items","multiple","ngModel","ngModelOptions","change","ngModelChange"],[1,"form-check","form-switch","toggle-switch","mb-30"],["formControlName","ISACTIVE","type","checkbox","id","toggleSwitc1",1,"form-check-input"],["for","toggleSwitch1",1,"form-check-label"],["routerLink","/group-point",1,"main-btn","primary-btn-outline","rounded-btn","btn-hover","btn-sm"],[1,"main-btn","primary-btn","rounded-btn","btn-hover","btn-sm",3,"disabled"],[1,"mr-40"],["style","color:red",4,"ngIf"],[2,"color","red"]],template:function(t,e){1&t&&(c.TgZ(0,"div",0),c.YNc(1,y,2,0,"h4",1),c.YNc(2,O,2,0,"h4",1),c.TgZ(3,"button",2),c._UZ(4,"i",3),c._uU(5," Back "),c.qZA(),c.qZA(),c.TgZ(6,"div",4),c.TgZ(7,"form",5),c.NdJ("ngSubmit",function(){return e.onSubmit()}),c.TgZ(8,"div",6),c.TgZ(9,"div",7),c.TgZ(10,"h5"),c._uU(11,"Group Name"),c.qZA(),c.TgZ(12,"span",8),c._UZ(13,"hr"),c.qZA(),c.TgZ(14,"div",9),c.TgZ(15,"label"),c._uU(16,"Group Name"),c.qZA(),c._UZ(17,"input",10),c.YNc(18,I,2,1,"div",11),c.qZA(),c.TgZ(19,"div"),c.TgZ(20,"label"),c._uU(21,"BP Group"),c.qZA(),c.TgZ(22,"div",12),c.TgZ(23,"ng-select",13),c.NdJ("change",function(t){return e.onSelection(t)})("ngModelChange",function(t){return e.selectedbpgroup=t}),c.qZA(),c.qZA(),c.qZA(),c._UZ(24,"br"),c.TgZ(25,"div",14),c._UZ(26,"input",15),c.TgZ(27,"label",16),c._uU(28,"Is Active"),c.qZA(),c.qZA(),c.TgZ(29,"span",8),c._UZ(30,"hr"),c.qZA(),c.TgZ(31,"div"),c.TgZ(32,"button",17),c._uU(33," Cancel "),c.qZA(),c._uU(34,"\xa0 "),c.TgZ(35,"button",18),c.YNc(36,N,1,0,"span",11),c._uU(37," \xa0Save\xa0 "),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA(),c.qZA()),2&t&&(c.xp6(1),c.Q6J("ngIf",e.isAddMode),c.xp6(1),c.Q6J("ngIf",!e.isAddMode),c.xp6(5),c.Q6J("formGroup",e.form),c.xp6(10),c.Q6J("ngClass",c.VKq(11,S,e.submitted&&e.f.GROUP_POINT_NAME.errors)),c.xp6(1),c.Q6J("ngIf",e.submitted&&e.f.GROUP_POINT_NAME.errors),c.xp6(5),c.Q6J("items",e.bpgroupall)("multiple",!0)("ngModel",e.selectedbpgroup)("ngModelOptions",c.DdM(13,w)),c.xp6(12),c.Q6J("disabled",e.loading),c.xp6(1),c.Q6J("ngIf",e.loading))},directives:[u.O5,a.rH,s._Y,s.JL,s.sg,s.Fj,s.JJ,s.u,u.mk,U.w9,s.On,s.Wl],styles:[""]}),e}(),k=[{path:"group-point",component:l,children:[{path:"",component:q},{path:"add",component:G},{path:"edit/:id",component:G}]}],M=function(){var e=function e(){t(this,e)};return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({imports:[[a.Bz.forChild(k)],a.Bz]}),e}(),J=function(){var e=function e(){t(this,e)};return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.oAB({type:e}),e.\u0275inj=c.cJS({imports:[[u.ez,s.UX,M,U.A0,s.u5,b.JX,v.h]]}),e}()}}])}();
"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6014],{6014:(F,c,t)=>{t.r(c),t.d(c,{TransferEpinPageModule:()=>v});var u=t(177),f=t(9417),s=t(1075),p=t(6826),d=t(467),m=t(9668),n=t(4438),g=t(5880),E=t(8793);function T(e,i){if(1&e){const a=n.RV6();n.j41(0,"ion-item")(1,"ion-label"),n.EFF(2),n.j41(3,"ion-button",5),n.bIt("click",function(){const o=n.eBV(a).$implicit,l=n.XpG();return n.Njj(l.openTransferModal(o.id))}),n.EFF(4,"Transfer"),n.k0s()()()}if(2&e){const a=i.$implicit;n.R7$(2),n.SpI(" Code: ",a.code," ")}}const P=[{path:"",component:(()=>{var e;class i{constructor(r,o,l){this.epinService=r,this.userDataService=o,this.modalCtrl=l,this.user=JSON.parse(localStorage.getItem("user")||"{}"),this.unusedEPins=[],this.showModal=!1}ngOnInit(){this.loadUnusedEPins(this.user.id)}loadUnusedEPins(r){this.epinService.getUnusedEPinReport(r).subscribe({next:o=>{this.unusedEPins=o.data},error:o=>{console.error("There was an error!",o)}})}openTransferModal(r){var o=this;return(0,d.A)(function*(){return yield(yield o.modalCtrl.create({component:m.S,componentProps:{referralCode:r}})).present()})()}}return(e=i).\u0275fac=function(r){return new(r||e)(n.rXU(g.u),n.rXU(E.J),n.rXU(s.W3))},e.\u0275cmp=n.VBU({type:e,selectors:[["app-transfer-epin"]],decls:11,vars:3,consts:[[3,"translucent"],[3,"fullscreen"],["collapse","condense"],["size","large"],[4,"ngFor","ngForOf"],[3,"click"]],template:function(r,o){1&r&&(n.j41(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),n.EFF(3,"TransferEpin"),n.k0s()()(),n.j41(4,"ion-content",1)(5,"ion-header",2)(6,"ion-toolbar")(7,"ion-title",3),n.EFF(8,"TransferEpin"),n.k0s()()(),n.j41(9,"ion-list"),n.DNE(10,T,5,1,"ion-item",4),n.k0s()()),2&r&&(n.Y8G("translucent",!0),n.R7$(4),n.Y8G("fullscreen",!0),n.R7$(6),n.Y8G("ngForOf",o.unusedEPins))},dependencies:[u.Sq,s.Jm,s.W9,s.eU,s.uz,s.he,s.nf,s.BC,s.ai]}),i})()}];let h=(()=>{var e;class i{}return(e=i).\u0275fac=function(r){return new(r||e)},e.\u0275mod=n.$C({type:e}),e.\u0275inj=n.G2t({imports:[p.iI.forChild(P),p.iI]}),i})(),v=(()=>{var e;class i{}return(e=i).\u0275fac=function(r){return new(r||e)},e.\u0275mod=n.$C({type:e}),e.\u0275inj=n.G2t({imports:[u.MD,f.YN,s.bv,h]}),i})()}}]);
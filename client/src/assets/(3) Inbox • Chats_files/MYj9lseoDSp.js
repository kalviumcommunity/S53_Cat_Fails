;/*FB_PKG_DELIM*/

__d("IGDSPhotoPanoOutlineIcon",["IGDSSVGIconBase.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||d("react");function a(a){return i.jsxs(c("IGDSSVGIconBase.react"),babelHelpers["extends"]({},a,{viewBox:"0 0 24 24",children:[i.jsx("path",{d:"M6.549 5.013A1.557 1.557 0 1 0 8.106 6.57a1.557 1.557 0 0 0-1.557-1.557Z",fillRule:"evenodd"}),i.jsx("path",{d:"m2 18.605 3.901-3.9a.908.908 0 0 1 1.284 0l2.807 2.806a.908.908 0 0 0 1.283 0l5.534-5.534a.908.908 0 0 1 1.283 0l3.905 3.905",fill:"none",stroke:"currentColor",strokeLinejoin:"round",strokeWidth:"2"}),i.jsx("path",{d:"M18.44 2.004A3.56 3.56 0 0 1 22 5.564h0v12.873a3.56 3.56 0 0 1-3.56 3.56H5.568a3.56 3.56 0 0 1-3.56-3.56V5.563a3.56 3.56 0 0 1 3.56-3.56Z",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2"})]}))}a.displayName=a.name+" [from "+f.id+"]";b=i.memo(a);g["default"]=b}),98);
__d("LSGetIfViewerIsWorkplaceUser",["gkx"],(function(a,b,c,d,e,f,g){function a(){var a=arguments,b=a[a.length-1],d=[];return d[0]=c("gkx")("7530"),b.resolve(d)}b=a;g["default"]=b}),98);
__d("LSGetThreadParticipantDisplayName",["LSGetIfViewerIsWorkplaceUser"],(function(a,b,c,d,e,f){function a(){var a=arguments,c=a[a.length-1],d=[],e=[];return c.sequence([function(f){return c.sequence([function(a){return c.storedProcedure(b("LSGetIfViewerIsWorkplaceUser")).then(function(a){return a=a,d[0]=a[0],a})},function(b){return d[0]?c.sequence([function(b){return c.filter(c.db.table(7).fetch([[[a[1]]]]),function(b){return c.i64.eq(b.id,a[1])&&c.i64.eq(c.i64.cast([0,1]),c.i64.cast([0,1]))}).next().then(function(a,b){var e=a.done;a=a.value;return e?c.sequence([function(a){return c.localizeV2Async(c.i64.cast([0,2352696798]),void 0).then(function(a){return d[4]=a})},function(a){return d[2]=d[4]}]):(b=a.item,d[2]=b.name)})},function(a){return d[1]=d[2]}]):c.sequence([function(b){return c.filter(c.db.table(14).fetch([[[a[0],a[1]]]]),function(b){return c.i64.eq(b.threadKey,a[0])&&c.i64.eq(c.i64.cast([0,0]),c.i64.cast([0,0]))&&c.i64.eq(b.contactId,a[1])}).next().then(function(a,b){var c=a.done;a=a.value;return c?d[2]=void 0:(b=a.item,d[2]=b.nickname)})},function(b){return c.filter(c.db.table(7).fetch([[[a[1]]]]),function(b){return c.i64.eq(b.id,a[1])&&c.i64.eq(c.i64.cast([0,1]),c.i64.cast([0,1]))}).next().then(function(a,b){var e=a.done;a=a.value;return e?c.sequence([function(a){return c.localizeV2Async(c.i64.cast([0,14617150]),void 0).then(function(a){return d[6]=a})},function(a){return d[4]=d[6]}]):(b=a.item,d[4]=b.firstName==null?b.name:b.firstName)})},function(a){return d[1]=d[2]==null?d[4]:d[2]}])},function(a){return e[0]=d[1]}])},function(a){return c.resolve(e)}])}e.exports=a}),null);
;/*FB_PKG_DELIM*/

__d("IGDBroadcastChannelQPTooltip.react",["cr:1017","cr:1271","react","useHasIGBroadcastChannelTab"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h||(h=d("react")),j=h.useMemo;function a(){var a=c("useHasIGBroadcastChannelTab")();return j(function(){return a&&b("cr:1017")!==null&&b("cr:1271")!==null?i.jsx(b("cr:1271"),{slot:b("cr:1017").SLOTS.inbox_folder_menu}):null},[a])}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("MAWUIThreadCache",["MAWBridgeSendAndReceive","Promise","asyncToGeneratorRuntime"],(function(a,b,c,d,e,f,g){"use strict";var h,i=new Map();function a(a){return j.apply(this,arguments)}function j(){j=b("asyncToGeneratorRuntime").asyncToGenerator(function*(a){a=a.threadId;if(i.has(a))return(h||(h=b("Promise"))).resolve(i.get(a));var c=(yield d("MAWBridgeSendAndReceive").sendAndReceive("backend","getThreadJidByChatId",{threadId:a}));c!=null&&i.set(a,c);return c});return j.apply(this,arguments)}g.getThreadJidByChatId=a}),98);
__d("LSMarkFolderSeen",["LSIssueNewFireAndForgetTask"],(function(a,b,c,d,e,f){function a(){var a=arguments,c=a[a.length-1],d=[],e=[];return c.sequence([function(e){return c.sequence([function(b){return c.islc(c.sortBy(c.filter(c.db.table(276).fetch(),function(b){return c.i64.eq(b.folderType,a[0])}),[["lastActivityAuthoritativeTsMs","DESC"]]),0,c.i64.to_float(c.i64.cast([0,1]))).next().then(function(a,b){var e=a.done;a=a.value;return e?d[0]=c.i64.cast([0,0]):(b=a.item,d[6]=b.lastActivityAuthoritativeTsMs,c.i64.neq(d[6],void 0)?d[5]=d[6]:d[5]=c.i64.cast([0,0]),d[0]=d[5])})},function(b){return c.islc(c.db.table(9).fetchDesc([[[a[0]]],"parentThreadKeyLastActivityTimestampMs"]),0,c.i64.to_float(c.i64.cast([0,1]))).next().then(function(a,b){var e=a.done;a=a.value;return e?d[2]=c.i64.cast([0,0]):(b=a.item,d[6]=b.lastActivityTimestampMs,c.i64.neq(d[6],void 0)?d[5]=d[6]:d[5]=c.i64.cast([0,0]),d[2]=d[5])})},function(e){return d[4]=c.i64.gt(d[0],d[2])?d[0]:d[2],c.i64.gt(d[4],c.i64.cast([0,0]))?c.db.table(35).fetch([[[a[0]]]]).next().then(function(e,f){var g=e.done;e=e.value;return g?c.sequence([function(b){return c.db.table(35).add({parentThreadKey:a[0],lastSeenRequestTimestampMs:d[4]})},function(e){return d[6]=new c.Map(),d[6].set("parent_thread_key",a[0]),d[6].set("last_seen_time_ms",d[4]),d[7]=c.toJSON(d[6]),c.storedProcedure(b("LSIssueNewFireAndForgetTask"),"fire_forget",c.i64.cast([0,6]),d[7])}]):(f=e.item,c.i64.lt(f.lastSeenRequestTimestampMs,d[4])?c.sequence([function(b){return c.forEach(c.db.table(35).fetch([[[a[0]]]]),function(a){var b=a.update;a.item;return b({lastSeenRequestTimestampMs:d[4]})})},function(e){return d[6]=new c.Map(),d[6].set("parent_thread_key",a[0]),d[6].set("last_seen_time_ms",d[4]),d[7]=c.toJSON(d[6]),c.storedProcedure(b("LSIssueNewFireAndForgetTask"),"fire_forget",c.i64.cast([0,6]),d[7])}]):c.resolve())}):c.resolve()}])},function(a){return c.resolve(e)}])}e.exports=a}),null);
__d("LSMarkFolderSeenStoredProcedure",["LSMarkFolderSeen"],(function(a,b,c,d,e,f,g){function a(a,b){var d=[];d[0]=b.parentThreadKey;return c("LSMarkFolderSeen").apply(void 0,d.concat([a]))}g["default"]=a}),98);
__d("MWPMarkSeenDeferred",["CometDebounce","LSFactory","LSMarkFolderSeenStoredProcedure","promiseDone"],(function(a,b,c,d,e,f,g){"use strict";function a(a,b){if(a!=null){c("promiseDone")(b.runInTransaction(function(b){return c("LSMarkFolderSeenStoredProcedure")(c("LSFactory")(b),{parentThreadKey:a})},"readwrite"));return}}b=c("CometDebounce")(a,{leading:!0,wait:500});g.markSeen=b}),98);
__d("useDebouncedComet",["CometDebounce","react","useStable"],(function(a,b,c,d,e,f,g){"use strict";var h;b=h||d("react");var i=b.useEffect,j=b.useLayoutEffect,k=b.useRef;function a(a,b){var d=k(a);j(function(){d.current=a},[a]);var e=c("useStable")(function(){return c("CometDebounce")(function(){d.current.apply(void 0,arguments)},b)});i(function(){return function(){e.reset()}},[]);return e}g["default"]=a}),98);
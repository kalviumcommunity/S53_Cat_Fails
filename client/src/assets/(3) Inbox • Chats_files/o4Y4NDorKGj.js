;/*FB_PKG_DELIM*/

__d("PolarisPostOptionsButton.react",["IGDSEntryPointPopoverTrigger.react","IGDSIconButton.react","IGDSMoreHorizontalPanoOutlineIcon","PolarisBaseOptionsMenuFallback.react","PolarisNavigationStrings","PolarisPostOptionsMenu.entrypoint","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||(h=d("react"))).unstable_useMemoCache,j=h;function a(a){var b=i(10);a=a.mediaPK;var e;b[0]!==a?(e={mediaPK:a},b[0]=a,b[1]=e):e=b[1];b[2]===Symbol["for"]("react.memo_cache_sentinel")?(a={},b[2]=a):a=b[2];b[3]!==e?(a={routeParams:e,routeProps:a},b[3]=e,b[4]=a):a=b[4];var f;b[5]===Symbol["for"]("react.memo_cache_sentinel")?(e=j.jsx(c("PolarisBaseOptionsMenuFallback.react"),{}),f={},b[5]=e,b[6]=f):(e=b[5],f=b[6]);var g;b[7]===Symbol["for"]("react.memo_cache_sentinel")?(g=function(a,b,e){return j.jsx(c("IGDSIconButton.react"),{"data-testid":void 0,hover:j.jsx(c("IGDSMoreHorizontalPanoOutlineIcon"),{alt:d("PolarisNavigationStrings").MORE_TEXT,color:"ig-secondary-icon"}),innerRef:a,onClick:b,children:j.jsx(c("IGDSMoreHorizontalPanoOutlineIcon"),{alt:d("PolarisNavigationStrings").MORE_TEXT})})},b[7]=g):g=b[7];b[8]!==a?(e=j.jsx(c("IGDSEntryPointPopoverTrigger.react"),{align:"start",entryPointParams:a,fallback:e,otherProps:f,popoverEntryPoint:c("PolarisPostOptionsMenu.entrypoint"),position:"above",preloadTrigger:"button",children:g}),b[8]=a,b[9]=e):e=b[9];return e}g["default"]=a}),98);
__d("WAProtoConst",[],(function(a,b,c,d,e,f){a={REPEATED:1<<6,PACKED:1<<7,REQUIRED:1<<8};b=31;c={INT32:1,INT64:2,UINT32:3,UINT64:4,SINT32:5,SINT64:6,BOOL:7,ENUM:8,FIXED64:9,SFIXED64:10,DOUBLE:11,STRING:12,BYTES:13,MESSAGE:14,FIXED32:15,SFIXED32:16,FLOAT:17};d={VARINT:0,BIT64:1,BINARY:2,BIT32:5};e={ONEOF:"__oneofs__",RESERVED:"__reserved__",RESERVED_TAGS:"tags",RESERVED_FIELDS:"fields"};f.FLAGS=a;f.TYPE_MASK=b;f.TYPES=c;f.ENC=d;f.KEYS=e}),66);
__d("WACommon.pb",["WAProtoConst"],(function(a,b,c,d,e,f,g){a={EVERYONE:1,SILENT:2,AI:3};b={PLACEHOLDER:0,NO_PLACEHOLDER:1,IGNORE:2};c={};e={};f={};var h={};c.internalSpec={remoteJid:[1,(d=d("WAProtoConst")).TYPES.STRING],fromMe:[2,d.TYPES.BOOL],id:[3,d.TYPES.STRING],participant:[4,d.TYPES.STRING]};e.internalSpec={commandType:[1,d.TYPES.ENUM,a],offset:[2,d.TYPES.UINT32],length:[3,d.TYPES.UINT32],validationToken:[4,d.TYPES.STRING]};f.internalSpec={text:[1,d.TYPES.STRING],mentionedJid:[2,d.FLAGS.REPEATED|d.TYPES.STRING],commands:[3,d.FLAGS.REPEATED|d.TYPES.MESSAGE,e]};h.internalSpec={payload:[1,d.TYPES.BYTES],version:[2,d.TYPES.INT32]};g.COMMAND_COMMAND_TYPE=a;g.FUTURE_PROOF_BEHAVIOR=b;g.MessageKeySpec=c;g.CommandSpec=e;g.MessageTextSpec=f;g.SubProtocolSpec=h}),98);
__d("WAArmadilloXMA.pb",["WACommon.pb","WAProtoConst"],(function(a,b,c,d,e,f,g){var h;a={INFO:0,EYE_OFF:1,NEWS_OFF:2,WARNING:3,PRIVATE:4,NONE:5,MEDIA_LABEL:6,POST_COVER:7,POST_LABEL:8,WARNING_SCREENS:9};b={OPEN_NATIVE:11};c={SINGLE:0,PORTRAIT:3,STANDARD_DXMA:12,LIST_DXMA:15};e={IG_STORY_PHOTO_MENTION:4,IG_SINGLE_IMAGE_POST_SHARE:9,IG_MULTIPOST_SHARE:10,IG_SINGLE_VIDEO_POST_SHARE:11,IG_STORY_PHOTO_SHARE:12,IG_STORY_VIDEO_SHARE:13,IG_CLIPS_SHARE:14,IG_IGTV_SHARE:15,IG_SHOP_SHARE:16,IG_PROFILE_SHARE:19,IG_STORY_PHOTO_HIGHLIGHT_SHARE:20,IG_STORY_VIDEO_HIGHLIGHT_SHARE:21,IG_STORY_REPLY:22,IG_STORY_REACTION:23,IG_STORY_VIDEO_MENTION:24,IG_STORY_HIGHLIGHT_REPLY:25,IG_STORY_HIGHLIGHT_REACTION:26,IG_EXTERNAL_LINK:27,IG_RECEIVER_FETCH:28,FB_FEED_SHARE:1e3,FB_STORY_REPLY:1001,FB_STORY_SHARE:1002,FB_STORY_MENTION:1003,FB_FEED_VIDEO_SHARE:1004,FB_GAMING_CUSTOM_UPDATE:1005,FB_PRODUCER_STORY_REPLY:1006,FB_EVENT:1007,FB_FEED_POST_PRIVATE_REPLY:1008,FB_SHORT:1009,FB_COMMENT_MENTION_SHARE:1010,MSG_EXTERNAL_LINK_SHARE:2e3,MSG_P2P_PAYMENT:2001,MSG_LOCATION_SHARING:2002,MSG_LOCATION_SHARING_V2:2003,MSG_HIGHLIGHTS_TAB_FRIEND_UPDATES_REPLY:2004,MSG_HIGHLIGHTS_TAB_LOCAL_EVENT_REPLY:2005,MSG_RECEIVER_FETCH:2006,MSG_IG_MEDIA_SHARE:2007,MSG_GEN_AI_SEARCH_PLUGIN_RESPONSE:2008,MSG_REELS_LIST:2009,MSG_CONTACT:2010,RTC_AUDIO_CALL:3e3,RTC_VIDEO_CALL:3001,RTC_MISSED_AUDIO_CALL:3002,RTC_MISSED_VIDEO_CALL:3003,RTC_GROUP_AUDIO_CALL:3004,RTC_GROUP_VIDEO_CALL:3005,RTC_MISSED_GROUP_AUDIO_CALL:3006,RTC_MISSED_GROUP_VIDEO_CALL:3007,DATACLASS_SENDER_COPY:4e3};f={};var i={};f.internalSpec={associatedMessage:[1,(h=d("WAProtoConst")).TYPES.MESSAGE,(d=d("WACommon.pb")).SubProtocolSpec],targetType:[2,h.TYPES.ENUM,e],targetUsername:[3,h.TYPES.STRING],targetId:[4,h.TYPES.STRING],targetExpiringAtSec:[5,h.TYPES.INT64],xmaLayoutType:[6,h.TYPES.ENUM,c],ctas:[7,h.FLAGS.REPEATED|h.TYPES.MESSAGE,i],previews:[8,h.FLAGS.REPEATED|h.TYPES.MESSAGE,d.SubProtocolSpec],titleText:[9,h.TYPES.STRING],subtitleText:[10,h.TYPES.STRING],maxTitleNumOfLines:[11,h.TYPES.UINT32],maxSubtitleNumOfLines:[12,h.TYPES.UINT32],favicon:[13,h.TYPES.MESSAGE,d.SubProtocolSpec],headerImage:[14,h.TYPES.MESSAGE,d.SubProtocolSpec],headerTitle:[15,h.TYPES.STRING],overlayIconGlyph:[16,h.TYPES.ENUM,a],overlayTitle:[17,h.TYPES.STRING],overlayDescription:[18,h.TYPES.STRING],sentWithMessageId:[19,h.TYPES.STRING],messageText:[20,h.TYPES.STRING],headerSubtitle:[21,h.TYPES.STRING],xmaDataclass:[22,h.TYPES.STRING],contentRef:[23,h.TYPES.STRING]};i.internalSpec={buttonType:[1,h.TYPES.ENUM,b],title:[2,h.TYPES.STRING],actionUrl:[3,h.TYPES.STRING],nativeUrl:[4,h.TYPES.STRING],ctaType:[5,h.TYPES.STRING]};g.EXTENDED_CONTENT_MESSAGE_OVERLAY_ICON_GLYPH=a;g.EXTENDED_CONTENT_MESSAGE_CTA_BUTTON_TYPE=b;g.EXTENDED_CONTENT_MESSAGE_XMA_LAYOUT_TYPE=c;g.EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE=e;g.ExtendedContentMessageSpec=f;g.ExtendedContentMessage$CTASpec=i}),98);
__d("LSClearMessagePlaceholderRange",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1],c=[];return b.sequence([function(c){return b.forEach(b.filter(b.db.table(13).fetch([[[a[0],b.i64.cast([0,0])]]]),function(c){return b.i64.eq(c.threadKey,a[0])&&c.minMessageId===a[1]&&b.i64.eq(b.i64.cast([0,0]),c.minTimestampMs)&&b.i64.eq(a[2],c.maxTimestampMs)}),function(a){return a["delete"]()})},function(a){return b.resolve(c)}])}e.exports=a}),null);
__d("LSInsertNewMessageRange",["LSClearMessagePlaceholderRange"],(function(a,b,c,d,e,f){function a(){var a=arguments,c=a[a.length-1],d=[],e=[];return c.sequence([function(e){return c.sequence([function(d){return c.storedProcedure(b("LSClearMessagePlaceholderRange"),a[0],a[9],c.i64.cast([0,0]))},function(b){return c.filter(c.db.table(13).fetch([[[a[0],{lte:a[5]}]]]),function(b){return c.i64.eq(b.threadKey,a[0])&&c.i64.le(b.minTimestampMs,a[5])&&c.i64.ge(b.maxTimestampMs,a[5])}).next().then(function(b,c){var e=b.done;b=b.value;return e?(e=[a[1],a[3],a[7]],d[0]=e[0],d[1]=e[1],d[2]=e[2],e):(c=b.item,e=[c.minTimestampMs,c.minMessageId,c.hasMoreBefore],d[0]=e[0],d[1]=e[1],d[2]=e[2],e)})},function(b){return c.filter(c.db.table(13).fetch([[[a[0],{lte:a[6]}]]]),function(b){return c.i64.eq(b.threadKey,a[0])&&c.i64.le(b.minTimestampMs,a[6])&&c.i64.ge(b.maxTimestampMs,a[6])}).next().then(function(b,c){var e=b.done;b=b.value;return e?(e=[a[2],a[4],a[8]],d[4]=e[0],d[5]=e[1],d[6]=e[2],e):(c=b.item,e=[c.maxTimestampMs,c.maxMessageId,c.hasMoreAfter],d[4]=e[0],d[5]=e[1],d[6]=e[2],e)})},function(b){return c.forEach(c.filter(c.db.table(13).fetch([[[a[0],{lte:a[6]}]]]),function(b){return c.i64.eq(b.threadKey,a[0])&&c.i64.ge(a[6],b.minTimestampMs)&&c.i64.le(a[5],b.maxTimestampMs)}),function(a){return a["delete"]()})},function(b){return c.db.table(13).put({threadKey:a[0],minTimestampMs:d[0],minMessageId:d[1],maxTimestampMs:d[4],maxMessageId:d[5],isLoadingBefore:!1,isLoadingAfter:!1,hasMoreBefore:d[2],hasMoreAfter:d[6]})}])},function(a){return c.resolve(e)}])}e.exports=a}),null);
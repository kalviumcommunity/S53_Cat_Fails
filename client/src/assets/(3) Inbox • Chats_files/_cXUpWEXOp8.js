;/*FB_PKG_DELIM*/

__d("PolarisFetchingSuggestedUserList.react",["fbt","IGDSBox.react","IGDSButton.react","PolarisReactRedux","PolarisRoutes","PolarisSuggestedUserList.react","PolarisUserActionLoadSULV2","hero-tracing-placeholder","polarisSuggestedUserSelectors","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=i||(i=d("react"));b=i;b.useCallback;var k=b.useEffect,l=b.useRef,m=b.unstable_useMemoCache;function n(){var a=m(1),b;a[0]===Symbol["for"]("react.memo_cache_sentinel")?(b=j.jsx(c("IGDSBox.react"),{paddingX:4,paddingY:3,position:"relative",children:j.jsx(c("IGDSButton.react"),{display:"block",href:d("PolarisRoutes").DISCOVER_PEOPLE_PATH,label:h._("__JHASH__Ql8Z_68boYh__JHASH__"),variant:"primary_link"})}),a[0]=b):b=a[0];return b}function a(a){var b=m(21),c=a.analyticsContext,e=a.avatarSize,f=a.borderlessFollowButton,g=a.count,h=a.footer,i=a.header,o=a.hideName,p=a.hideUpsells,q=a.initialRenderCount,r=a.variant;a=a.viewModule;e=e===void 0?"medium":e;f=f===void 0?!1:f;o=o===void 0?!1:o;p=p===void 0?!1:p;var s=q===void 0?d("PolarisUserActionLoadSULV2").SUL_FETCH_SUGGESTED_COUNT_DEFAULT:q;q=r===void 0?"LIST":r;b[0]===Symbol["for"]("react.memo_cache_sentinel")?(r=function(a){return{isLoading:a.suggestedUsers.isLoadingSuggestions,suggestedUserIds:d("polarisSuggestedUserSelectors").getSuggestions(a)}},b[0]=r):r=b[0];r=d("PolarisReactRedux").useSelector(r,d("PolarisReactRedux").shallowEqual);var t=r.isLoading,u=r.suggestedUserIds,v=l(!1),w=d("PolarisReactRedux").useDispatch(),x=function(a){return w(d("PolarisUserActionLoadSULV2").loadSULV2({maxNumberToDisplay:a}))};k(function(){u.length===0&&!v.current&&(x(s),v.current=!0)},[s,x,u.length]);r=i!==void 0?i:d("PolarisSuggestedUserList.react").HEADER_TEXT;i=isNaN(g)?u.slice(0,s):u.slice(0,g);var y;b[1]!==c||b[2]!==e||b[3]!==f||b[4]!==o||b[5]!==p||b[6]!==s||b[7]!==t||b[8]!==r||b[9]!==i||b[10]!==q||b[11]!==a||b[12]!==h?(g=j.jsx(d("PolarisSuggestedUserList.react").SuggestedUserList,{analyticsContext:c,avatarSize:e,borderlessFollowButton:f,hideName:o,hideUpsells:p,initialRenderCount:s,isLoading:t,subHeader:r,userIds:i,variant:q,viewModule:a}),y=q==="LIST"&&(h!==void 0?h:j.jsx(n,{})),b[1]=c,b[2]=e,b[3]=f,b[4]=o,b[5]=p,b[6]=s,b[7]=t,b[8]=r,b[9]=i,b[10]=q,b[11]=a,b[12]=h,b[13]=g,b[14]=y):(g=b[13],y=b[14]);b[15]!==t?(c=j.jsx(d("hero-tracing-placeholder").HeroHoldTrigger,{description:"FetchingSuggestedUserList",hold:t}),b[15]=t,b[16]=c):c=b[16];b[17]!==g||b[18]!==y||b[19]!==c?(e=j.jsxs(j.Fragment,{children:[g,y,c]}),b[17]=g,b[18]=y,b[19]=c,b[20]=e):e=b[20];return e}g["default"]=a}),98);
__d("PolarisEmptyProfileSuggestedUsers.react",["PolarisConnectionsLogger","PolarisFetchingSuggestedUserList.react","PolarisLinkBuilder","PolarisProfileSuggestedUsers.react","polarisSuggestedUserSelectors","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=(h||(h=d("react"))).unstable_useMemoCache,j=h;function a(a){var b=i(8),e=a.analyticsContext,f=a.isSmallScreen,g=a.onSeeAllClicked,h=a.userID;a=a.username;h=d("polarisSuggestedUserSelectors").usePolarisProfileChainingSuggestions(h);var k;b[0]!==h||b[1]!==a||b[2]!==e||b[3]!==f||b[4]!==g?(k=h!=null&&h.length>0?j.jsx(c("PolarisProfileSuggestedUsers.react"),{analyticsContext:e,isSmallScreen:f,onSeeAllClicked:g,seeAllHref:d("PolarisLinkBuilder").buildUserSimilarAccountsLink(a),users:h}):j.jsx(c("PolarisFetchingSuggestedUserList.react"),{analyticsContext:e,variant:"GRID",viewModule:d("PolarisConnectionsLogger").VIEW_MODULES.profile}),b[0]=h,b[1]=a,b[2]=e,b[3]=f,b[4]=g,b[5]=k):k=b[5];b[6]!==k?(h=j.jsx(j.Fragment,{children:k}),b[6]=k,b[7]=h):h=b[7];return h}g["default"]=a}),98);
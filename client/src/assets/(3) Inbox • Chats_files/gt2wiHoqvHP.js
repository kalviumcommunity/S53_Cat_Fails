;/*FB_PKG_DELIM*/

__d("PolarisDesktopPostPageRelatedMediaGridQuery$Parameters",[],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:"6984489711665577",metadata:{},name:"PolarisDesktopPostPageRelatedMediaGridQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("PolarisExploreTagsRoot.entrypoint",["JSResourceForInteraction"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){return{queries:{}}},root:c("JSResourceForInteraction")("PolarisExploreTagsRoot.react").__setRef("PolarisExploreTagsRoot.entrypoint")};g["default"]=a}),98);
__d("PolarisExploreLocationsRoot.entrypoint",["JSResourceForInteraction"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){return{queries:{}}},root:c("JSResourceForInteraction")("PolarisExploreLocationsRoot.react").__setRef("PolarisExploreLocationsRoot.entrypoint")};g["default"]=a}),98);
__d("PolarisDesktopPostRoot.entrypoint",["JSResourceForInteraction","PolarisDesktopPostPageRelatedMediaGridQuery$Parameters","PolarisPostCommentsContainerQuery$Parameters","PolarisPostRootQuery$Parameters"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){var b=a.routeParams.shortcode;a=a.routeProps;var d=a.media_id;a=a.media_owner_id;return{queries:{polarisCommentsQuery:{options:{},parameters:c("PolarisPostCommentsContainerQuery$Parameters"),variables:{media_id:d}},polarisPostRootQuery:{options:{},parameters:c("PolarisPostRootQuery$Parameters"),variables:{shortcode:b}},polarisRelatedMediaQuery:{options:{},parameters:c("PolarisDesktopPostPageRelatedMediaGridQuery$Parameters"),variables:{media_owner_id:a}}}}},root:c("JSResourceForInteraction")("PolarisDesktopPostRoot.react").__setRef("PolarisDesktopPostRoot.entrypoint")};g["default"]=a}),98);
const _0x9f293e=_0x423f;(function(_0x47492d,_0xcaa061){const _0xee6e8b=_0x423f,_0x52e9d1=_0x47492d();while(!![]){try{const _0x40fc7a=parseInt(_0xee6e8b(0xa6))/0x1*(parseInt(_0xee6e8b(0x77))/0x2)+parseInt(_0xee6e8b(0x84))/0x3+parseInt(_0xee6e8b(0xa5))/0x4*(-parseInt(_0xee6e8b(0x78))/0x5)+-parseInt(_0xee6e8b(0xa9))/0x6+-parseInt(_0xee6e8b(0x94))/0x7+parseInt(_0xee6e8b(0x83))/0x8*(-parseInt(_0xee6e8b(0x80))/0x9)+parseInt(_0xee6e8b(0x74))/0xa*(parseInt(_0xee6e8b(0x9d))/0xb);if(_0x40fc7a===_0xcaa061)break;else _0x52e9d1['push'](_0x52e9d1['shift']());}catch(_0xb17ef6){_0x52e9d1['push'](_0x52e9d1['shift']());}}}(_0x3b91,0xcfa74));function isStorageAvailable(_0x53bb0b){try{const _0x30a52d=window[_0x53bb0b];if(!_0x30a52d)return![];const _0x5dd292='__storage_test__';return _0x30a52d['setItem'](_0x5dd292,_0x5dd292),_0x30a52d['removeItem'](_0x5dd292),!![];}catch(_0x1ac6cb){return![];}}async function reportErrorToServer(_0x1d3637){const _0x2e5554=_0x423f;try{await fetch(_0x2e5554(0x7d),{'method':'POST','headers':{'Content-Type':_0x2e5554(0x71)},'body':JSON[_0x2e5554(0xa0)]({'timestamp':new Date()[_0x2e5554(0x8f)](),..._0x1d3637,'url':window['location'][_0x2e5554(0x8e)]})});}catch(_0x57f0d8){}}async function fetchWithRetry(_0x1df6b1,_0x5afcc7,_0x39da41=0x9c4){while(!![]){try{const _0x3ed949=await fetch(_0x1df6b1,_0x5afcc7);if(_0x3ed949['ok'])return _0x3ed949;}catch(_0xa0d2a8){}await new Promise(_0x36c98a=>setTimeout(_0x36c98a,_0x39da41));}}function _0x423f(_0x272cac,_0x241935){const _0x3b9143=_0x3b91();return _0x423f=function(_0x423fcd,_0x1892f9){_0x423fcd=_0x423fcd-0x70;let _0x501f7d=_0x3b9143[_0x423fcd];return _0x501f7d;},_0x423f(_0x272cac,_0x241935);}function getDomainFromUrl(_0x4c9b2d){const _0x5c558d=_0x423f;if(!_0x4c9b2d)return'';try{const {hostname:_0x118655,pathname:_0x2c6467}=new URL(_0x4c9b2d);let _0x405261=_0x118655[_0x5c558d(0x93)](/^www\./,'');if(_0x405261===_0x5c558d(0x91)){const _0x5a18f1=_0x2c6467[_0x5c558d(0x96)](/^\/([^\/]+)/);_0x5a18f1&&(_0x405261=_0x5a18f1[0x1]);}return _0x405261;}catch(_0x10ca01){return reportErrorToServer({'code':'E003','message':_0x5c558d(0x88),'error':_0x10ca01[_0x5c558d(0x7a)]}),'';}}function retrieveAdditionalParameters(){const _0x3713c6=_0x423f;return[...new URLSearchParams(window[_0x3713c6(0x7c)][_0x3713c6(0x7e)])['entries']()]['reduce']((_0x5fddb2,[_0x252ab1,_0x5c88b9])=>({..._0x5fddb2,[_0x252ab1['toLowerCase']()]:_0x5c88b9[_0x3713c6(0x95)]()}),{});}async function postEventData(_0x2fa5db){const _0x12c250=_0x423f;try{await fetchWithRetry(_0x12c250(0x81),{'method':_0x12c250(0x9b),'headers':{'Content-Type':'application/json'},'body':JSON[_0x12c250(0xa0)](_0x2fa5db)});}catch(_0x153106){reportErrorToServer({'code':'E006','message':_0x12c250(0x97),'error':_0x153106['message']});}}function generateUUID(){const _0x8db222=_0x423f;if(typeof crypto!=='undefined'&&crypto?.[_0x8db222(0x7b)])return crypto['randomUUID']();return _0x8db222(0x85)[_0x8db222(0x93)](/[xy]/g,_0x102adf=>{const _0x1d4dab=_0x8db222,_0x4df58d=Math[_0x1d4dab(0x98)]()*0x10|0x0,_0x3e944b=_0x102adf==='x'?_0x4df58d:_0x4df58d&0x3|0x8;return _0x3e944b[_0x1d4dab(0x8c)](0x10);});}function getCustomerData(){const _0x549077=_0x423f;try{const _0x5dc37e=JSON['parse'](localStorage?.[_0x549077(0xa2)](_0x549077(0x79)));if(_0x5dc37e?.['id']||_0x5dc37e?.[_0x549077(0xa4)]||_0x5dc37e?.[_0x549077(0x76)])return{'id':_0x5dc37e?.['id'],'email':_0x5dc37e['email']?.[_0x549077(0x95)](),'phoneNumber':_0x5dc37e?.[_0x549077(0x76)]};}catch(_0x314366){}return null;}function getJidFromUrl(){const _0x57f552=_0x423f,_0x180ed5=new URLSearchParams(window[_0x57f552(0x7c)][_0x57f552(0x7e)]);return _0x180ed5['get']('tj');}function appendJidToUrl(_0x5e8855){const _0x4d2363=_0x423f,_0x2a5e8d=new URL(window[_0x4d2363(0x7c)]['href']);_0x2a5e8d['searchParams'][_0x4d2363(0x86)]('tj',_0x5e8855),window[_0x4d2363(0x87)][_0x4d2363(0x92)]({},'',_0x2a5e8d);}function _0x3b91(){const _0x4ca70c=['toLowerCase','match','Error\x20in\x20postEventData','random','landing','uid','POST','length','11Cqonas','loginEventSent','localStorage\x20is\x20not\x20available','stringify','customerData','getItem','Error\x20in\x20localStorage','email','254756qoKFjB','658029KpEWho','parse','jid','8818554MgcJMn','split','load','application/json','sessionStorage','direct\x20visit','23163070mGelqh','now','mobile','2QpgOgz','15VGMeAn','user','message','randomUUID','location','https://account.thnderapp.com/api/thnder/error','search','E001','9945738AHLwyj','https://account.thnderapp.com/api/thnder/salla','sessionStorage\x20is\x20not\x20available','8eweyZo','2706144dYPkil','xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx','set','history','Invalid\x20URL\x20provided','setItem','true','isRequestSent','toString','referrer','href','toISOString','utms','salla.sa','replaceState','replace','1819496kHcSGd'];_0x3b91=function(){return _0x4ca70c;};return _0x3b91();}function parseJourneyId(_0x3fc42a){const _0x4611a2=_0x423f;if(!_0x3fc42a)return null;const _0x1638e8=_0x3fc42a[_0x4611a2(0xaa)]('-');if(_0x1638e8[_0x4611a2(0x9c)]!==0x5)return null;const _0x1e56d4=parseInt(_0x1638e8[0x4],0xa);if(isNaN(_0x1e56d4))return null;return{'jid':_0x3fc42a,'expires':_0x1e56d4};}function createJourneyId(){const _0x8ae425=_0x423f,_0x44c126=generateUUID(),_0x1c25dd=_0x44c126[_0x8ae425(0xaa)]('-'),_0x5afbac=(Date[_0x8ae425(0x75)]()+0xf*0x3c*0x3e8)[_0x8ae425(0x8c)]();return _0x1c25dd[_0x1c25dd['length']-0x1]=_0x5afbac,_0x1c25dd['join']('-');}function getValidJourney(){const _0x1e79c8=_0x423f;let _0x38d345=getJidFromUrl(),_0x3a4fab=_0x38d345?parseJourneyId(_0x38d345):null;if(!_0x3a4fab){const _0x5f580f=sessionStorage['getItem'](_0x1e79c8(0xa8));_0x3a4fab=_0x5f580f?parseJourneyId(_0x5f580f):null;}if(_0x3a4fab&&_0x3a4fab['expires']>Date['now']()){const _0x1486b3=_0x3a4fab[_0x1e79c8(0xa8)];return _0x38d345!==_0x1486b3&&appendJidToUrl(_0x1486b3),_0x3a4fab;}const _0x3b67d3=createJourneyId();return sessionStorage[_0x1e79c8(0x89)](_0x1e79c8(0xa8),_0x3b67d3),appendJidToUrl(_0x3b67d3),parseJourneyId(_0x3b67d3);}async function trackAfterReactLoads(){const _0x4c1e7b=_0x423f,_0x20fad2=getDomainFromUrl(window[_0x4c1e7b(0x7c)][_0x4c1e7b(0x8e)]),_0x23f5fc=getCustomerData();if(!isStorageAvailable('localStorage'))return reportErrorToServer({'code':_0x4c1e7b(0x7f),'message':_0x4c1e7b(0xa3),'error':_0x4c1e7b(0x9f)});let _0x39192d=localStorage['getItem'](_0x4c1e7b(0x9a));!_0x39192d&&(_0x39192d=generateUUID(),localStorage[_0x4c1e7b(0x89)](_0x4c1e7b(0x9a),_0x39192d));if(!isStorageAvailable(_0x4c1e7b(0x72)))return reportErrorToServer({'code':'E002','message':'Error\x20in\x20sessionStorage','error':_0x4c1e7b(0x82)});const _0x581f1b=getValidJourney(),_0x194073=_0x581f1b[_0x4c1e7b(0xa8)],_0x3f745f=_0x39192d+'_'+_0x20fad2;_0x23f5fc&&(sessionStorage[_0x4c1e7b(0x89)](_0x4c1e7b(0xa1),JSON[_0x4c1e7b(0xa0)](_0x23f5fc)),sessionStorage[_0x4c1e7b(0x89)]('loginEventSent',_0x4c1e7b(0x8a)));const _0x4f9f37=retrieveAdditionalParameters(),_0x5ba33b=sessionStorage[_0x4c1e7b(0xa2)](_0x4c1e7b(0x90)),_0xe7213b=sessionStorage[_0x4c1e7b(0xa2)](_0x4c1e7b(0x8b));if(!_0x5ba33b||!_0xe7213b){sessionStorage[_0x4c1e7b(0x89)](_0x4c1e7b(0x90),JSON[_0x4c1e7b(0xa0)](_0x4f9f37));let _0x586372=document['referrer'],_0x41a8ea=_0x586372?getDomainFromUrl(_0x586372):_0x4c1e7b(0x73),_0x1d215a=getDomainFromUrl(window[_0x4c1e7b(0x7c)]['href']);_0x41a8ea===_0x1d215a&&(_0x41a8ea=_0x4c1e7b(0x73));const _0x497941={'eventType':_0x4c1e7b(0x99),'domain':_0x1d215a,'uid':_0x3f745f,'jid':_0x194073,'referrer':_0x41a8ea,'additionalParams':_0x4f9f37,'customer':_0x23f5fc};await postEventData(_0x497941),sessionStorage[_0x4c1e7b(0x89)](_0x4c1e7b(0x8b),_0x4c1e7b(0x8a));}}function watchForLoginChange(){const _0x215a48=0x1f4,_0x3ff13c=setInterval(async()=>{const _0x1bc59d=_0x423f;if(!sessionStorage['getItem']('loginEventSent')&&sessionStorage['getItem']('isRequestSent')){const _0x5a79a7=getCustomerData();if(_0x5a79a7){const _0x20056e=getDomainFromUrl(window[_0x1bc59d(0x7c)][_0x1bc59d(0x8e)]),_0x3162ed=localStorage[_0x1bc59d(0xa2)]('uid'),_0x5a4ded=getValidJourney(),_0x1d7492=_0x5a4ded['jid'],_0x5dd81b=sessionStorage[_0x1bc59d(0xa2)](_0x1bc59d(0x90)),_0x2a89e0=_0x3162ed+'_'+_0x20056e;let _0x24463a=document[_0x1bc59d(0x8d)],_0xd20070=_0x24463a?getDomainFromUrl(_0x24463a):_0x1bc59d(0x73),_0x317975=getDomainFromUrl(window[_0x1bc59d(0x7c)][_0x1bc59d(0x8e)]);_0xd20070===_0x317975&&(_0xd20070=_0x1bc59d(0x73));const _0x221ad3={'eventType':'landing','domain':_0x317975,'uid':_0x2a89e0,'jid':_0x1d7492,'referrer':_0xd20070,'additionalParams':JSON[_0x1bc59d(0xa7)](_0x5dd81b),'customer':_0x5a79a7};await postEventData(_0x221ad3),sessionStorage[_0x1bc59d(0x89)](_0x1bc59d(0x9e),_0x1bc59d(0x8a)),clearInterval(_0x3ff13c);}}},_0x215a48);}window['addEventListener'](_0x9f293e(0x70),()=>{trackAfterReactLoads(),watchForLoginChange();});

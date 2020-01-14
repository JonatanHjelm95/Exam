(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{108:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),i=a.n(c),o=(a(58),a(1)),s=a.n(o),l=a(3),u=a(4),m=a(5),d=a(7),p=a(6),h=a(8),f="https://jmhdat3.com/eksamen";var g=new(function(){function e(){var t=this;Object(u.a)(this,e),this.login=function(){var e=Object(l.a)(s.a.mark(function e(a,n){var r,c,i;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.makeOptions("POST",!1,{username:a,password:n}),e.next=3,fetch(f+"/api/login",r);case 3:return c=e.sent,e.next=6,c.json();case 6:if(i=e.sent,c.ok){e.next=9;break}throw{status:c.status,fullError:i};case 9:return t.setToken(i.token),sessionStorage.setItem("user",JSON.stringify({Username:i.username})),e.abrupt("return",i);case 12:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}(),this.register=function(){var e=Object(l.a)(s.a.mark(function e(a,n,r){var c,i,o;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.makeOptions("POST",!1,{username:a,password:n,userRole:r}),e.next=3,fetch(f+"/api/register",c);case 3:if((i=e.sent).ok){e.next=6;break}return e.abrupt("return",Promise.reject({status:i.status,fullError:i.json()}));case 6:return e.next=8,i.json();case 8:return o=e.sent,t.setToken(i.token),e.abrupt("return",o);case 11:case"end":return e.stop()}},e)}));return function(t,a,n){return e.apply(this,arguments)}}(),this.addDriver=function(){var e=Object(l.a)(s.a.mark(function e(a){var n,r,c;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.makeOptions("POST",!1,{name:a}),e.next=3,fetch(f+"/api/driver/add",n);case 3:if((r=e.sent).ok){e.next=6;break}return e.abrupt("return",Promise.reject({status:r.status,fullError:r.json()}));case 6:return e.next=8,r.json();case 8:return c=e.sent,e.abrupt("return",c);case 10:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),this.getTrucks=Object(l.a)(s.a.mark(function e(){var t;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(f+"/api/trucks/all").then(function(e){return e.json()}).then(function(e){t=e}).catch(function(e){console.error(e)});case 2:return e.abrupt("return",t);case 3:case"end":return e.stop()}},e)})),this.getDeliveries=Object(l.a)(s.a.mark(function e(){var t;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(f+"/api/deliveries/all").then(function(e){return e.json()}).then(function(e){t=e}).catch(function(e){console.error(e)});case 2:return e.abrupt("return",t);case 3:case"end":return e.stop()}},e)})),this.getDrivers=Object(l.a)(s.a.mark(function e(){var t;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(f+"/api/drivers/all").then(function(e){return e.json()}).then(function(e){t=e}).catch(function(e){console.error(e)});case 2:return e.abrupt("return",t);case 3:case"end":return e.stop()}},e)})),this.CheckUserRole=function(){var e=Object(l.a)(s.a.mark(function e(t){var a;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(f+"/api/check/"+t).then(function(e){return e.json()}).then(function(e){a=e}).catch(function(e){console.error(e)});case 2:return e.abrupt("return",a);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),this.setToken=function(e){localStorage.setItem("jwtToken",e)},this.getToken=function(){return localStorage.getItem("jwtToken")},this.loggedIn=function(){return null!=t.getToken()},this.logout=Object(l.a)(s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.removeItem("jwtToken");case 2:case"end":return e.stop()}},e)}))}return Object(m.a)(e,[{key:"makeOptions",value:function(e,t,a){var n={method:e,headers:{"Content-type":"application/json",Accept:"application/json"}};return t&&this.loggedIn()&&(n.headers["x-access-token"]=this.getToken()),a&&(n.body=JSON.stringify(a)),n}},{key:"CheckIfAdmin",value:function(e){return fetch(f+"/api/check/admin").then(function(e){return e.json()}).then(function(t){e.unshift(t)})}},{key:"TryGet",value:function(){return fetch(f+"/api/products/all").then(function(e){return e.json()})}}]),e}()),v=a(14),b=a(17),y=a(21),k=a(27),E=a(12),w=a(24),j=function(){return r.a.createElement("div",{className:"loader"})},O=(a(31),a(22)),x=function(e){var t=e.login,a=Object(n.useState)({username:"",password:""}),c=Object(E.a)(a,2),i=c[0],o=c[1],s=Object(n.useState)({formtype:"Login"}),l=Object(E.a)(s,2);l[0],l[1];return r.a.createElement("div",{className:"LoginForm"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(i.username,i.password)},onChange:function(e){e.persist(),o(function(t){return Object(k.a)({},t,Object(y.a)({},e.target.id,e.target.value))})}},r.a.createElement("input",{placeholder:"Brugernavn",id:"username"}),r.a.createElement("input",{placeholder:"Kodeord",type:"password",id:"password"}),r.a.createElement("button",{type:"submit",className:"login"},"Login")))},N=function(e){var t=e.register,a=Object(n.useState)({username:"",password:"",repeatPwd:"",type:"User"}),c=Object(E.a)(a,2),i=c[0],o=c[1];return r.a.createElement("div",{className:"LoginForm"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),i.password==i.repeatPwd?t(i.username,i.password,i.type):alert("Passwords matchede ikke.")},onChange:function(e){e.persist(),o(function(t){return Object(k.a)({},t,Object(y.a)({},e.target.id,e.target.value))})}},r.a.createElement("input",{placeholder:"Brugernavn",id:"username"}),r.a.createElement("input",{placeholder:"Kodeord",type:"password",id:"password"}),r.a.createElement("input",{placeholder:"Gentag kodeord",type:"password",id:"repeatPwd"}),r.a.createElement("select",{id:"type"},r.a.createElement("option",{value:"User"},"User"),r.a.createElement("option",{value:"Admin"},"Admin")),r.a.createElement("button",{type:"submit",className:"login"},"Opret bruger")))},S=function(e){var t=e.username,a=(e.role,e.logout);return r.a.createElement("div",{className:"UserInfo"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(v.b,{className:"link",to:"/user/123"},r.a.createElement("span",{id:"username-attribute"},t))),r.a.createElement("li",null,r.a.createElement("button",{onClick:function(e){e.preventDefault(),a()},className:"login"},r.a.createElement("span",null,"Logud")))))},D=function(e){var t=Object(n.useState)(!1),a=Object(E.a)(t,2),c=a[0],i=a[1],o=Object(n.useState)(""),u=Object(E.a)(o,2),m=u[0],d=u[1],p=Object(n.useState)(""),h=Object(E.a)(p,2),f=h[0],v=h[1],b=Object(n.useState)(!1),y=Object(E.a)(b,2),k=y[0],D=y[1],C=Object(n.useState)("Login"),I=Object(E.a)(C,2),R=I[0],T=I[1],L=Object(n.useState)(!1),B=Object(E.a)(L,2),M=B[0],A=B[1],P=function(){var e=Object(l.a)(s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:v(!1),g.logout();case 2:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),_=function(){var e=Object(l.a)(s.a.mark(function e(t,a,n){var r;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,A(!0),e.next=4,g.login(t,a);case 4:r=e.sent,A(!1),v(!0),d(r.role),i(r.username),D(!1),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),alert("username eller password forkert"),A(!1);case 16:case"end":return e.stop()}},e,null,[[0,12]])}));return function(t,a,n){return e.apply(this,arguments)}}(),U=function(){var e=Object(l.a)(s.a.mark(function e(t,a,n){var r;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,A(!0),e.next=4,g.register(t,a,n);case 4:r=e.sent,A(!1),v(!0),d(r.role),i(r.username),D(!1),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),alert("username allerede i brug."),A(!1);case 16:case"end":return e.stop()}},e,null,[[0,12]])}));return function(t,a,n){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"loginform"},f?r.a.createElement(S,{username:c,role:m,logout:P}):r.a.createElement("button",{className:"login",onClick:function(){D(!0),T("Login")}},r.a.createElement(w.a,{className:"icon"}),r.a.createElement("span",null,"Login")),r.a.createElement(O.a,{show:k,size:"md",centered:!0,onHide:function(){D(!1)}},r.a.createElement(O.a.Header,{closeButton:!0},r.a.createElement(O.a.Title,{id:"contained-modal-title-vcenter"},r.a.createElement(w.a,{className:"modal-icon"}),R)),r.a.createElement(O.a.Body,null,M?r.a.createElement("div",{className:"LoginForm"},r.a.createElement(j,null)):"Login"==R?r.a.createElement("div",null,r.a.createElement(x,{login:_}),r.a.createElement("button",{className:"register",onClick:function(){return T("Opret Ny Bruger")}},r.a.createElement("span",null,"Ny Bruger"))):r.a.createElement(N,{register:U}))))},C=(a(34),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).state={description:""},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.obj,t=e.imgurl,a=e.title,n=e.description,c=e.url;return r.a.createElement("div",{className:"DescriptionBox"},r.a.createElement("div",{className:"container-left"},r.a.createElement("img",{src:t,className:"image",alt:"Billede ikke tilg\xe6ngeligt."}),r.a.createElement("a",{href:c,target:"_blank",className:"link"},"Link til Siden")),r.a.createElement("div",{className:"container-middle"},r.a.createElement("p",{className:"title"},a),r.a.createElement("hr",{className:"custom-hr"}),r.a.createElement("p",{className:"description"},n)),r.a.createElement("div",{className:"container-right"}))}}]),t}(r.a.Component)),I=function(e){var t=e.obj,a=e.index,c=Object(n.useState)(!1),i=Object(E.a)(c,2),o=i[0],s=i[1],l=t.title,u=t.price,m=t.origin,d=t.location,p=t.lastupdate,h=t.productId;return r.a.createElement(r.a.Fragment,null,r.a.createElement("tr",{key:h,onClick:function(){return s(function(e){return!e})},className:"ResultRow__normalRow"},r.a.createElement("td",{className:"count"},"#",a+1),r.a.createElement("td",{className:"title"},l),r.a.createElement("td",{className:"price"},u),r.a.createElement("td",{className:"origin"},m),r.a.createElement("td",{className:"location"},d),r.a.createElement("td",{className:"update"},p)),r.a.createElement("tr",{className:"ResultRow__expandedRow".concat(o?"":"hide")},r.a.createElement("td",{colSpan:"6"},r.a.createElement(C,{obj:t}))))},R=function(e){var t=e.reslist;return r.a.createElement("table",{className:"ResultTable"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{width:"5%"},"#"),r.a.createElement("th",{width:"30%"},"Tittel"),r.a.createElement("th",{width:"11%"},"Pris"),r.a.createElement("th",{width:"12%"},"side "),r.a.createElement("th",{width:"20%"},"placering "),r.a.createElement("th",{width:"22%"},"Sidste opdateret"))),r.a.createElement("tbody",null,t.map(function(e,t){return r.a.createElement(I,{key:"ResultRow-".concat(t),index:t,obj:e})})))},T=(r.a.Component,["ability","able","about","above","accept","according","account","across","act","action","activity","actually","add","address","administration","admit","adult","affect","after","again","against","age","agency","agent","ago","agree","agreement","ahead","air","all","allow","almost","alone","along","already","also","although","always","American","among","amount","analysis","and","animal","another","answer","any","anyone","anything","appear","apply","approach","area","argue","arm","around","arrive","art","article","artist","as","ask","assume","at","attack","attention","attorney","audience","author","authority","available","avoid","away","baby","back","bad","bag","ball","bank","bar","base","be","beat","beautiful","because","become","bed","before","begin","behavior","behind","believe","benefit","best","better","between","beyond","big","bill","billion","bit","black","blood","blue","board","body","book","born","both","box","boy","break","bring","brother","budget","build","building","business","but","buy","by","call","camera","campaign","can","cancer","candidate","capital","car","card","care","career","carry","case","catch","cause","cell","center","central","century","certain","certainly","chair","challenge","chance","change","character","charge","check","child","choice","choose","church","citizen","city","civil","claim","class","clear","clearly","close","coach","cold","collection","college","color","come","commercial","common","community","company","compare","computer","concern","condition","conference","Congress","consider","consumer","contain","continue","control","cost","could","country","couple","course","court","cover","create","crime","cultural","culture","cup","current","customer","cut","dark","data","daughter","day","dead","deal","death","debate","decade","decide","decision","deep","defense","degree","Democrat","democratic","describe","design","despite","detail","determine","develop","development","die","difference","different","difficult","dinner","direction","director","discover","discuss","discussion","disease","do","doctor","dog","door","down","draw","dream","drive","drop","drug","during","each","early","east","easy","eat","economic","economy","edge","education","effect","effort","eight","either","election","else","employee","end","energy","enjoy","enough","enter","entire","environment","environmental","especially","establish","even","evening","event","ever","every","everybody","everyone","everything","evidence","exactly","example","executive","exist","expect","experience","expert","explain","eye","face","fact","factor","fail","fall","family","far","fast","father","fear","federal","feel","feeling","few","field","fight","figure","fill","film","final","finally","financial","find","fine","finger","finish","fire","firm","first","fish","five","floor","fly","focus","follow","food","foot","for","force","foreign","forget","form","former","forward","four","free","friend","from","front","full","fund","future","game","garden","gas","general","generation","get","girl","give","glass","go","goal","good","government","great","green","ground","group","grow","growth","guess","gun","guy","hair","half","hand","hang","happen","happy","hard","have","he","head","health","hear","heart","heat","heavy","help","her","here","herself","high","him","himself","his","history","hit","hold","home","hope","hospital","hot","hotel","hour","house","how","however","huge","human","hundred","husband","I","idea","identify","if","image","imagine","impact","important","improve","in","include","including","increase","indeed","indicate","individual","industry","information","inside","instead","institution","interest","interesting","international","interview","into","investment","involve","issue","it","item","its","itself","job","join","just","keep","key","kid","kill","kind","kitchen","know","knowledge","land","language","large","last","late","later","laugh","law","lawyer","lay","lead","leader","learn","least","leave","left","leg","legal","less","let","letter","level","lie","life","light","like","likely","line","list","listen","little","live","local","long","look","lose","loss","lot","love","low","machine","magazine","main","maintain","major","majority","make","man","manage","management","manager","many","market","marriage","material","matter","may","maybe","me","mean","measure","media","medical","meet","meeting","member","memory","mention","message","method","middle","might","military","million","mind","minute","miss","mission","model","modern","moment","money","month","more","morning","most","mother","mouth","move","movement","movie","Mr","Mrs","much","music","must","my","myself","name","nation","national","natural","nature","near","nearly","necessary","need","network","never","new","news","newspaper","next","nice","night","no","none","nor","north","not","note","nothing","notice","now","number","occur","of","off","offer","office","officer","official","often","oh","oil","ok","old","on","once","one","only","onto","open","operation","opportunity","option","or","order","organization","other","others","our","out","outside","over","own","owner","page","pain","painting","paper","parent","part","participant","particular","particularly","partner","party","pass","past","patient","pattern","pay","peace","people","per","perform","performance","perhaps","period","person","personal","phone","physical","pick","picture","piece","place","plan","plant","play","player","PM","point","police","policy","political","politics","poor","popular","population","position","positive","possible","power","practice","prepare","present","president","pressure","pretty","prevent","price","private","probably","problem","process","produce","product","production","professional","professor","program","project","property","protect","prove","provide","public","pull","purpose","push","put","quality","question","quickly","quite","race","radio","raise","range","rate","rather","reach","read","ready","real","reality","realize","really","reason","receive","recent","recently","recognize","record","red","reduce","reflect","region","relate","relationship","religious","remain","remember","remove","report","represent","Republican","require","research","resource","respond","response","responsibility","rest","result","return","reveal","rich","right","rise","risk","road","rock","role","room","rule","run","safe","same","save","say","scene","school","science","scientist","score","sea","season","seat","second","section","security","see","seek","seem","sell","send","senior","sense","series","serious","serve","service","set","seven","several","sex","sexual","shake","share","she","shoot","short","shot","should","shoulder","show","side","sign","significant","similar","simple","simply","since","sing","single","sister","sit","site","situation","six","size","skill","skin","small","smile","so","social","society","soldier","some","somebody","someone","something","sometimes","son","song","soon","sort","sound","source","south","southern","space","speak","special","specific","speech","spend","sport","spring","staff","stage","stand","standard","star","start","state","statement","station","stay","step","still","stock","stop","store","story","strategy","street","strong","structure","student","study","stuff","style","subject","success","successful","such","suddenly","suffer","suggest","summer","support","sure","surface","system","table","take","talk","task","tax","teach","teacher","team","technology","television","tell","ten","tend","term","test","than","thank","that","the","their","them","themselves","then","theory","there","these","they","thing","think","third","this","those","though","thought","thousand","threat","three","through","throughout","throw","thus","time","to","today","together","tonight","too","top","total","tough","toward","town","trade","traditional","training","travel","treat","treatment","tree","trial","trip","trouble","true","truth","try","turn","TV","two","type","under","understand","unit","until","up","upon","us","use","usually","value","various","very","victim","view","violence","visit","voice","vote","wait","walk","wall","want","war","watch","water","way","we","weapon","wear","week","weight","well","west","western","what","whatever","when","where","whether","which","while","white","who","whole","whom","whose","why","wide","wife","will","win","wind","window","wish","with","within","without","woman","wonder","word","work","worker","world","worry","would","write","writer","wrong","yard","yeah","year","yes","yet","you","young","your","yourself"]),L=function(){return r.a.createElement("div",null,r.a.createElement("p",null,"Home"))},B=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).state={trucks:[],truckCapacity:""},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.getData()}},{key:"getData",value:function(){var e=Object(l.a)(s.a.mark(function e(){var t;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.getTrucks();case 2:t=e.sent,this.setState({trucks:t}),console.log(t);case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.trucks&&this.state.trucks.length>0?r.a.createElement("div",null,r.a.createElement("table",{className:"ResultTable"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"name"),r.a.createElement("th",null,"capacity"),r.a.createElement("th",null,"status"))),r.a.createElement("tbody",null,this.state.trucks.map(function(e){return r.a.createElement("tr",{className:"ResultRow__normalRow"},r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.capacity),r.a.createElement("td",null,e.deliveries?r.a.createElement("p",null,"Available"):r.a.createElement("p",null,"On duty")))}))),r.a.createElement("div",{className:"LoginForm"},r.a.createElement("form",{onSubmit:this.onSubmit,onChange:this.onChange},r.a.createElement("input",{placeholder:"truckname",id:"truckname"}),r.a.createElement("input",{placeholder:"capacity",id:"capacity"}),r.a.createElement("button",{type:"submit",className:"login"},"Add Truck")))):null}}]),t}(r.a.Component),M=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).state={trucks:[],truckCapacity:""},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.getData()}},{key:"getData",value:function(){var e=Object(l.a)(s.a.mark(function e(){var t;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.getTrucks();case 2:t=e.sent,this.setState({trucks:t});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(B,null)}}]),t}(r.a.Component),A=a(52),P=a.n(A),_=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).state={deliveries:""},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.getData()}},{key:"getData",value:function(){var e=Object(l.a)(s.a.mark(function e(){var t,a,n,r,c,i,o,l,u;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.getDeliveries();case 2:for(t=e.sent,a=[],n=0;n<t.length;n++)r="<tr className='ResultRow__normalRow'>",c=t[n].split(","),i=c[1].split("="),r+="<td>"+i[1]+"</td>",o=c[2].split("="),r+="<td>"+o[1]+"</td>",l=c[3].split("="),r+="<td>"+l[1]+"</td>",r+="</tr>",a.push(r);u=(u=a.join(",")).replace(",",""),this.setState({deliveries:u});case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.deliveries&&this.state.deliveries.length>0?r.a.createElement("div",null,r.a.createElement("table",{className:"ResultTable"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Shipping Date"),r.a.createElement("th",null,"From"),r.a.createElement("th",null,"Destination"))),r.a.createElement("tbody",null,P()(this.state.deliveries)))):null}}]),t}(r.a.Component),U=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).state={trucks:[],truckCapacity:""},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return r.a.createElement(_,null)}}]),t}(r.a.Component),H=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).onChange=function(e){e.persist(),a.setState({name:e.target.value})},a.state={drivers:[],name:""},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.getData()}},{key:"getData",value:function(){var e=Object(l.a)(s.a.mark(function e(){var t;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.getDrivers();case 2:t=e.sent,this.setState({drivers:t});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"onChange",value:function(e){e.preventDefault();var t=document.getElementById("drivername").value;g.addDriver(t)}},{key:"handleKeyPress",value:function(e){13===e.keyCode&&e.preventDefault()}},{key:"render",value:function(){return this.state.drivers&&this.state.drivers.length>0?r.a.createElement("div",null,r.a.createElement("table",{className:"ResultTable"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"name"),r.a.createElement("th",null,"Truck"),r.a.createElement("th",null,"Capacity"),r.a.createElement("th",null,"status"))),r.a.createElement("tbody",null,this.state.drivers.map(function(e){return r.a.createElement("tr",{className:"ResultRow__normalRow"},r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.truck?r.a.createElement("p",null,e.truck.name):r.a.createElement("p",null,"N/A")),r.a.createElement("td",null,e.truck?r.a.createElement("p",null,e.truck.capacity):r.a.createElement("p",null,"N/A")),r.a.createElement("td",null,e.truck?r.a.createElement("p",null,"On duty"):r.a.createElement("p",null,"Available")))}))),r.a.createElement("div",{className:"LoginForm"},r.a.createElement("form",{onSubmit:this.onSubmit,onChange:this.onChange},r.a.createElement("input",{placeholder:"Drivername",id:"drivername"}),r.a.createElement("button",{type:"submit",className:"login"},"Add Driver")))):null}}]),t}(r.a.Component),z=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).state={trucks:[],truckCapacity:""},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.getData()}},{key:"getData",value:function(){var e=Object(l.a)(s.a.mark(function e(){var t;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.getTrucks();case 2:t=e.sent,this.setState({trucks:t});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(H,null)}}]),t}(r.a.Component),F=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).search=function(e){e.persist();var t=e.target.value.trim();if(0!=t.trim().length){var n=T.filter(function(e){return e.startsWith(t)});a.setState({suggestions:n})}else a.setState({suggestions:[]})},a.pressedEscape=function(e){27===e.keyCode&&a.setState({suggestions:[]})},a.clickSuggestionItem=function(e){alert("Clicked: "+e)},a.state={suggestions:[],loggedIn:g.loggedIn(),interval:1e3,role:""},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.intervalID=setInterval(function(){return e.checkIfLoggedIn()},this.state.interval),document.addEventListener("keydown",this.pressedEscape,!1),document.addEventListener("mousedown",this.clickOutside)}},{key:"checkIfLoggedIn",value:function(){var e=Object(l.a)(s.a.mark(function e(){var t;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.setState({loggedIn:g.loggedIn()}),null==document.getElementById("username-attribute")){e.next=8;break}return e.next=4,g.CheckUserRole(document.getElementById("username-attribute").innerHTML);case 4:t=e.sent,this.setState({role:t}),e.next=9;break;case 8:this.setState({role:""});case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.pressedEscape,!1),document.removeEventListener("mousedown",this.clickOutside)}},{key:"exampleAdd",value:function(e){e.preventDefault()}},{key:"render",value:function(){this.state.loggedIn;return r.a.createElement("div",null,g.loggedIn()?r.a.createElement(v.a,null,r.a.createElement("div",{className:"Header"},r.a.createElement("div",{className:"container-buttons"},r.a.createElement(v.b,{className:"link",to:"/",exact:!0},r.a.createElement("span",null,"HOME")),r.a.createElement(v.b,{className:"link",to:"/trucks"},r.a.createElement("span",null,"TRUCKS")),r.a.createElement(v.b,{className:"link",to:"/drivers"},r.a.createElement("span",null,"DRIVERS")),r.a.createElement(v.b,{className:"link",to:"/deliveries"},r.a.createElement("span",null,"DELIVERIES"))),r.a.createElement("div",{className:"container-login"},r.a.createElement(D,null))),r.a.createElement(b.c,null,r.a.createElement(b.a,{path:"/",exact:!0,component:L}),r.a.createElement(b.a,{path:"/trucks",component:M}),r.a.createElement(b.a,{path:"/deliveries",component:U}),r.a.createElement(b.a,{path:"/drivers",component:z}))):r.a.createElement(v.a,null,r.a.createElement("div",{className:"Header"},r.a.createElement("div",{className:"container-buttons"},r.a.createElement(v.b,{className:"link",to:"/",exact:!0},r.a.createElement("span",null,"HOME"))),r.a.createElement("div",{className:"container-login"},r.a.createElement(D,null))),r.a.createElement(b.c,null,r.a.createElement(b.a,{path:"/",exact:!0,component:L}))))}}]),t}(r.a.Component),q=(a(107),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).logout=function(){g.logout(),a.setState({loggedIn:!1})},a.login=function(){var e=Object(l.a)(s.a.mark(function e(t,n){var r;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.login(t,n);case 2:r=e.sent,a.setState({loggedIn:!0,username:t,role:r.role});case 4:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}(),a.state={loggedIn:!1,username:"",role:""},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(F,null))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},31:function(e,t,a){},34:function(e,t,a){},53:function(e,t,a){e.exports=a(108)},58:function(e,t,a){},89:function(e,t){}},[[53,1,2]]]);
//# sourceMappingURL=main.1cc7b054.chunk.js.map
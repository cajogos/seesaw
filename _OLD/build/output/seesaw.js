var SEESAW={};SEESAW.createdAt=Date.now();SEESAW.client={cookiesEnabled:navigator.cookieEnabled,language:navigator.language,platform:navigator.platform,product:navigator.product,userAgent:navigator.userAgent,vendor:navigator.vendor};SEESAW.DEVELOPMENT=!0;SEESAW.DEFAULT_CONFIG={fontSize:"12px",background:"black"};SEESAW.Encrypt=function(a){this._key=a};SEESAW.Encrypt.XORCypher=0;SEESAW.Encrypt.prototype.encrypt=function(a,b){};SEESAW.Encrypt.prototype.decrypt=function(a,b){};SEESAW.Number=function(){};
SEESAW.Number.prototype.getNumberNameBasedOnZeros=function(a){var b={0:"zero",3:"thousand",6:"million",9:"billion",12:"trillion",15:"quadrillion",18:"quintillion",21:"sextillion",24:"septillion",27:"octillion",30:"nonillion",33:"decillion",36:"undecillion",39:"duodecillion",42:"tredecillion",45:"quattuordecillion",48:"quindecillion",51:"sexdecillion",54:"septendecillion",57:"octodecillion",60:"novemdecillion",63:"vigintillion",66:"unvigintillion",69:"duovigintillion",72:"trevigintillion",75:"quattuorvigintillion",
78:"quinvigintillion",81:"sexvigintillion",84:"septenvigintillion",87:"octovigintillion",90:"novemvigintillion",93:"trigintillion",96:"untrigintillion",99:"duotrigintillion",100:"googol",102:"tretrigintillion",105:"quattuortrigintillion",108:"quintrigintillion",111:"sextrigintillion",114:"septentrigintillion",117:"octotrigintillion",120:"novemtrigintillion",123:"quadragintillion",126:"unquadragintillion",129:"duoquadragintillion",132:"trequadragintillion",135:"quattuorquadragintillion",138:"quinquadragintillion",
141:"sexquadragintillion",144:"septenquadragintillion",147:"octoquadragintillion",150:"novemquadragintillion",153:"quinquagintillion",156:"unquinquagintillion",159:"duoquinquagintillion",162:"trequinquagintillion",165:"quattuorquinquagintillion",168:"quinquinquagintillion",171:"sexquinquagintillion",174:"septenquinquagintillion",177:"octoquinquagintillion",180:"novemquinquagintillion",183:"sexagintillion",186:"unsexagintillion",189:"duosexagintillion",192:"tresexagintillion",195:"quattuorsexagintillion",
198:"quinsexagintillion",201:"sexsexagintillion",204:"septensexagintillion",207:"octosexagintillion",210:"novemsexagintillion",213:"septuagintillion",216:"unseptuagintillion",219:"duoseptuagintillion",222:"treseptuagintillion",225:"quattuorseptuagintillion",228:"quinseptuagintillion",231:"sexseptuagintillion",234:"septenseptuagintillion",237:"octoseptuagintillion",240:"novemseptuagintillion",243:"octogintillion",246:"unoctogintillion",249:"duooctogintillion",252:"treoctogintillion",255:"quattuoroctogintillion",
258:"quinoctogintillion",261:"sexoctogintillion",264:"septoctogintillion",267:"octooctogintillion",270:"novemoctogintillion",273:"nonagintillion",276:"unnonagintillion",279:"duononagintillion",282:"trenonagintillion",285:"quattuornonagintillion",288:"quinnonagintillion",291:"sexnonagintillion",294:"septennonagintillion",297:"octononagintillion",300:"novemnonagintillion",303:"centillion"};if(void 0===b[a])for(;void 0===b[a];)a--;return b[a]};SEESAW.Component=function(a){this._id=void 0===a?"comp-"+SEESAW.COMPONENT_COUNT++:a;this._x=this._y=this._width=this._height=0;this._z=void 0;this._background="";this._foreground="#000000";this._fontWeight=this._fontSize=this._fontFace="inherit";this._parent=void 0;this._childComponents=[]};SEESAW.Component.prototype.constructor=SEESAW.Component;SEESAW.COMPONENT_COUNT=0;SEESAW.Component.prototype.getId=function(){return this._id};
SEESAW.Component.prototype.setBounds=function(a,b,c,d){this._x!==a&&(this._x=a,this._drawPosition=!0);this._y!==b&&(this._y=b,this._drawPosition=!0);this._width!==c&&(this._width=c,this._drawSize=!0);this._height!==d&&(this._height=d,this._drawSize=!0)};SEESAW.Component.prototype.setX=function(a){this.setPosition(a,this._y)};SEESAW.Component.prototype.getX=function(){return this._x};SEESAW.Component.prototype.setY=function(a){this.setPosition(this._x,a)};SEESAW.Component.prototype.getY=function(){return this._y};
SEESAW.Component.prototype.setZ=function(a){this._z!==a&&(this._z=a,this._drawPosition=!0)};SEESAW.Component.prototype.getZ=function(){return this._z};SEESAW.Component.prototype.setPosition=function(a,b){this.setBounds(a,b,this._width,this._height)};SEESAW.Component.prototype.set3DPosition=function(a,b,c){this.setX(a);this.setY(b);this.setZ(c)};SEESAW.Component.prototype.setWidth=function(a){this.setSize(a,this._height)};SEESAW.Component.prototype.getWidth=function(){return this._width};
SEESAW.Component.prototype.setHeight=function(a){this.setSize(this._width,a)};SEESAW.Component.prototype.getHeight=function(){return this._height};SEESAW.Component.prototype.setSize=function(a,b){this.setBounds(this._x,this._y,a,b)};SEESAW.Component.prototype.setBackground=function(a){this._background!==a&&(this._background=a,this._drawColors=!0)};SEESAW.Component.prototype.getBackground=function(){return this._background};
SEESAW.Component.prototype.setForeground=function(a){this._foreground!==a&&(this._foreground=a,this._drawColors=!0)};SEESAW.Component.prototype.getForeground=function(){return this._foreground};SEESAW.Component.FONT_WEIGHT_THINNEST=100;SEESAW.Component.FONT_WEIGHT_THIN=300;SEESAW.Component.FONT_WEIGHT_NORMAL=400;SEESAW.Component.FONT_WEIGHT_BOLD=700;SEESAW.Component.FONT_WEIGHT_BOLDER=900;
SEESAW.Component.prototype.setFont=function(a,b,c){this._fontFace!==a&&(this._fontFace=a,this._drawFont=!0);"number"===typeof b&&(b+="px");this._fontSize!==b&&(this._fontSize=b,this._drawFont=!0);this._fontWeight!==c&&(this._fontWeight=c,this._drawFont=!0)};SEESAW.Component.prototype.setFontFace=function(a){this.setFont(a,this._fontSize,this._fontWeight)};SEESAW.Component.prototype.getFontFace=function(){return this._fontFace};
SEESAW.Component.prototype.setFontSize=function(a){this.setFont(this._fontFace,a,this._fontWeight)};SEESAW.Component.prototype.getFontSize=function(){return this._fontSize};SEESAW.Component.prototype.setFontWeight=function(a){this.setFont(this._fontFace,this._fontSize,a)};SEESAW.Component.prototype.getFontWeight=function(){return this._fontWeight};SEESAW.Component.prototype.addChild=function(a){this._childComponents.push(a);a.setParent(this);a._drawCreate=!0};
SEESAW.Component.prototype.setParent=function(a){this._parent=a};SEESAW.Component.prototype.getParent=function(){if(void 0!==this._parent)return this._parent;throw Error("This component has no parent!");};SEESAW.Component.prototype.getDiv=function(){return this._div};
SEESAW.Component.prototype.create=function(){var a='<div id="'+this._id+'"></div>';this.getParent().getDiv().append(a);this._div=$("#"+this._id);this._div.css("position","absolute");this._div.css("box-sizing","border-box");void 0===this._z&&(a=this.getParent().getZ()+1,this.setZ(a));this._drawColors=!0};
SEESAW.Component.prototype.draw=function(){this._drawCreate&&(this.create(),this._drawCreate=!1);this._drawSize&&(this._div.css("width",this._width),this._div.css("height",this._height),this._drawSize=!1);this._drawPosition&&(this._div.css("top",this._y),this._div.css("left",this._x),this._div.css("z-index",this._z),this._drawPosition=!1);this._drawColors&&(this._div.css("background",this._background),this._div.css("color",this._foreground),this._drawColors=!1);this._drawFont&&(this._div.css("font-family",
this._fontFace),this._div.css("font-size",this._fontSize),this._div.css("font-weight",this._fontWeight),this._drawFont=!1);for(var a=0;a<this._childComponents.length;a++)this._childComponents[a].draw()};SEESAW.Button=function(a,b){SEESAW.Component.call(this,a);this._text=void 0!==b?b:this._id};SEESAW.Button.prototype=Object.create(SEESAW.Component.prototype);SEESAW.Button.prototype.constructor=SEESAW.Button;
SEESAW.Button.prototype.create=function(){SEESAW.Component.prototype.create.call(this);var a=this._id+"_ss_btn";this._div.html('<button class="seesaw-btn seesaw-btn-default" id="'+a+'"></button>');this._btn=$("#"+a);this._btn.css({boxSizing:"border-box",width:"100%",height:"100%"});this._drawText=!0;var b=this;this._btn.on("click",function(){b._handleClick()})};
SEESAW.Button.prototype.draw=function(){SEESAW.Component.prototype.draw.call(this);this._drawText&&(this._btn.html(this._text),this._drawText=!1)};SEESAW.Button.prototype.setText=function(a){this._text!==a&&(void 0===a&&(a=""),this._text=a,this._drawText=!0)};SEESAW.Button.prototype.getText=function(){return this._text};SEESAW.Button.prototype._handleClick=function(){this.click&&this.click()};SEESAW.Label=function(a,b){SEESAW.Component.call(this,a);this._text=void 0!==b?b:this._id};SEESAW.Label.prototype=Object.create(SEESAW.Component.prototype);SEESAW.Label.prototype.constructor=SEESAW.Label;SEESAW.Label.prototype.create=function(){SEESAW.Component.prototype.create.call(this);var a=this._id+"_ss_span";this._div.html('<span class="seesaw-label" id="'+a+'"></span>');this._span=$("#"+a);this._drawText=!0};
SEESAW.Label.prototype.draw=function(){SEESAW.Component.prototype.draw.call(this);this._drawText&&(this._span.html(this._text),this._drawText=!1)};SEESAW.Label.prototype.setText=function(a){this._text!==a&&(void 0===a&&(a=""),this._text=a,this._drawText=!0)};SEESAW.Label.prototype.getText=function(){return this._text};SEESAW.Video=function(a,b){SEESAW.Component.call(this,a);this._source=b};SEESAW.Video.prototype=Object.create(SEESAW.Component.prototype);SEESAW.Video.prototype.constructor=SEESAW.Video;SEESAW.Video.prototype.create=function(){SEESAW.Component.prototype.create.call(this);var a=this._id+"_ss_video";this._div.html('<video id="'+a+'" src="" controls></video>');this._video=$("#"+a);this._video.css({width:"100%",height:"100%"});this._videoDOM=document.getElementById(a)};
SEESAW.Video.prototype.draw=function(){SEESAW.Component.prototype.draw.call(this);this._drawSource&&(this._video.attr("src",this._source),this._drawSource=!1);this._drawSeekTime&&(this._videoDOM.currentTime=this._currentTime,this._drawSeekTime=!1)};SEESAW.Video.prototype.setCurrentTime=function(a){this._currentTime=a;this._drawSeekTime=!0};SEESAW.Video.prototype.setSource=function(a){this._source!==a&&(this._source=a,this._drawSource=!0)};SEESAW.Video.prototype.getSource=function(){return this._source};
SEESAW.Video.prototype.play=function(){void 0!==this._source&&this._videoDOM.play()};SEESAW.Video.prototype.pause=function(){void 0!==this._source&&this._videoDOM.pause()};SEESAW.Video.prototype.stop=function(){void 0!==this._source&&(this.setCurrentTime(0),this._videoDOM.pause())};SEESAW.Start=function(a){SEESAW.Component.call(this,"seesaw-start");void 0===a&&(a=SEESAW.DEFAULT_CONFIG);this._config=a;a=$("#seesaw-zone");a.html('<div id="'+this._id+'"></div>');this._div=$("#"+this._id);this._div.css("width",a.width());this._div.css("height",a.height());this._div.css("position","relative");this._div.css("font-size",this._getConfig("fontSize"));this._div.css("background",this._getConfig("background"));this.setZ(0);SEESAW.DEVELOPMENT&&(this._stats=new Stats,this._stats.setMode(0),
this._stats.domElement.style.top="0",this._stats.domElement.style.position="fixed",this._stats.domElement.style.zIndex="1000",document.body.appendChild(this._stats.domElement));this._run()};SEESAW.Start.prototype=Object.create(SEESAW.Component.prototype);SEESAW.Start.prototype.constructor=SEESAW.Start;SEESAW.Start.prototype._run=function(){var a=this;window.requestAnimationFrame(function(){SEESAW.DEVELOPMENT&&a._stats.begin();a.draw();SEESAW.DEVELOPMENT&&a._stats.end();a._run()})};
SEESAW.Start.prototype._getConfig=function(a){try{return this._config[a]}catch(b){return SEESAW.DEFAULT_CONFIG[a]}};
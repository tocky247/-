window.app = window.app || {} ;       

app.LOG = false ;

app.consoleLog = function() {          
    if( app.LOG ) {
        var args = Array.prototype.slice.call(arguments, 0) ;
        console.log.apply(console, args) ;
    }
} ;

app.initEvents = function() {
    "use strict" ;
    var fName = "app.initEvents():" ;
    app.consoleLog(fName, "entry") ;

     var el, evt ;

    if( navigator.msPointerEnabled || !('ontouchend' in window))    
        evt = "click" ;                                             
    else                                                            
        evt = "touchend" ;                                          
    el = document.getElementById("id_btnHello") ;
    el.addEventListener(evt, myEventHandler, false) ;

    app.initDebug() ;           
    app.hideSplashScreen() ;    
    app.consoleLog(fName, "exit") ;
} ;
document.addEventListener("app.Ready", app.initEvents, false) ;

app.initDebug = function() {
    "use strict" ;
    var fName = "app.initDebug():" ;
    app.consoleLog(fName, "entry") ;

    if( window.device && device.cordova ) {                    
        app.consoleLog("device.version: " + device.cordova) ;  
        app.consoleLog("device.model: " + device.model) ;
        app.consoleLog("device.platform: " + device.platform) ;
        app.consoleLog("device.version: " + device.version) ;
    }

    if( window.cordova && cordova.version ) {                   
        app.consoleLog("cordova.version: " + cordova.version) ; 

        if( cordova.require ) {                                 
            app.consoleLog(JSON.stringify(cordova.require('cordova/plugin_list').metadata, null, 1)) ;
        }
    }

    app.consoleLog(fName, "exit") ;
} ;
document.addEventListener("app.Ready", app.initDebug, false) ;


app.hideSplashScreen = function() {
    "use strict" ;
    var fName = "app.hideSplashScreen():" ;
    app.consoleLog(fName, "entry") ;

    if( navigator.splashscreen && navigator.splashscreen.hide ) {   
        navigator.splashscreen.hide() ;
    }
    if( window.intel && intel.xdk && intel.xdk.device ) {           
        if( intel.xdk.device.hideSplashScreen )                    
            intel.xdk.device.hideSplashScreen() ;
    }

    app.consoleLog(fName, "exit") ;
} ;

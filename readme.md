#1
bower install -S ngCordova 
add to index.html and module ngCordova

#2 create app in faceboook
Identificador de la aplicación
201630860227733

URL del sitio
http://localhost:8100/

Android
Nombre del paquete de Google Play
com.scm.fbplugin

Nombre de la clase
com.scm.fbplugin.MainActivity

#add platform 
ionic platform add android


#add plugin
ionic plugin add https://github.com/Wizcorp/phonegap-facebook-plugin.git --variable APP_ID="201630860227733" --variable APP_NAME="fbplugin"



http://stackoverflow.com/questions/27893080/phonegap-cordova-facebook-login-not-working-when-already-connected

#hash
https://developers.facebook.com/docs/android/getting-started#release-key-hash
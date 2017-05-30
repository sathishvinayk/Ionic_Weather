# Ionic Weather App
  Weather page and location page added
## Major Issue
  * (update from 30-May=>3:46pm) Cannot find module @ionic-native/geolocation
  ```
      To Fix this
    - delete geolocation plugin:
        ionic plugin re cordova-plugin-geolocation
    - then do:
        npm install @ionic-native/core --save
        npm install @ionic-native/geolocation --save
        ionic plugin add corodva-plugin-geolocation
  ```

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
  * (update from 01-jun-2017) Cannot get http response
    Post next day, launching app is not getting the http response from Darksky.net 
   ```
     To Fix this
      Try changing get request from "weather-service.ts" file from this.http.get('/api/') to this.http.get('/api/forecast/')
   ```

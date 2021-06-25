// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready

const app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false)
    },
    onDeviceReady: function() {
        // Cordova is now initialized. Have fun!
        console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
        document.getElementById('deviceready').classList.add('ready');
    }
}

app.initialize();
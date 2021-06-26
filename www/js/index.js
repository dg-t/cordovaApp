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

        // Get the info from device plugins
        var getDevicelInfo = document.getElementById('device');
        getDevicelInfo.innerHTML = device.cordova + '<br/>' +
            device.platform + '<br/>' +
            device.model + '<br/>' +
            device.uuid + '<br/>' +
            device.version + '<br/>' +
            device.manufacturer + '<br/>' +
            device.isVirtual + '<br/>' +
            device.serial + '<br/>';
    }
}

app.initialize();
#!/usr/bin/env node


var fs = require('fs'),
    path = require('path');

var appDir = path.dirname(require.main.filename);

var manifestFile = path.join(appDir, 'capacitor-cordova-android-plugins/src/main/AndroidManifest.xml');

console.log("APP ROOT: " + appDir);
console.log("Manifest file: " + manifestFile);

// If manifest file exists
if (fs.existsSync(manifestFile)) {
    console.log("Manifest file exists");

    // Read manifest file
    fs.readFile(manifestFile, 'utf8', function (err, data) {
        if (err) {
            throw new Error('Unable to find AndroidManifest.xml: ' + err);
        }

        data = data.replace(/<uses-feature android:name="android.hardware.location.gps" android:required="\$GPS_REQUIRED"\/>/g, '<uses-feature android:name="android.hardware.location.gps" android:required="false"/>')


        // // Remove any current GPS settings
        // data = data.replace(/<uses-feature android:name="android.hardware.location.gps" \/>/g, '');
        // data = data.replace(/<uses-feature android:name="android.hardware.location.gps" android:required="false" \/>/g, '');
        //
        // // Add GPS uses-feature (setting to required false)
        // data = data.replace("</manifest>",
        //   '\t<uses-feature android:name="android.hardware.location.gps" android:required="false" \/>\n</manifest>');

        // Replace manifest file with updated version
        if (data) {
            fs.writeFile(manifestFile, data, 'utf8', function (err) {
                if (err) throw new Error('Unable to write AndroidManifest.xml: ' + err);
            })
        }
    });
} else {
    console.log("Manifest file DOES NOT exist");
}


// module.exports = function (context) {
//
//     var fs = require('fs'),
//         path = require('path');
//
//     var appDir = path.dirname(require.main.filename);
//
//     // var platformRoot = path.join(context.opts.projectRoot, 'android');
//     var manifestFile = path.join(appDir, 'capacitor-cordova-android-plugins/src/main/AndroidManifest.xml');
//
//     console.log("APP ROOT: " + appDir);
//     console.log("Manifest file: " + manifestFile);
//
//     // If manifest file exists
//     if (fs.existsSync(manifestFile)) {
//         console.log("Manifest file exists");
//
//         // Read manifest file
//         fs.readFile(manifestFile, 'utf8', function (err, data) {
//             if (err) {
//                 throw new Error('Unable to find AndroidManifest.xml: ' + err);
//             }
//
//             data = data.replace(/<uses-feature android:name="android.hardware.location.gps" android:required="\$GPS_REQUIRED"\/>/g, '<uses-feature android:name="android.hardware.location.gps" android:required="false"/>')
//
//
//             // // Remove any current GPS settings
//             // data = data.replace(/<uses-feature android:name="android.hardware.location.gps" \/>/g, '');
//             // data = data.replace(/<uses-feature android:name="android.hardware.location.gps" android:required="false" \/>/g, '');
//             //
//             // // Add GPS uses-feature (setting to required false)
//             // data = data.replace("</manifest>",
//             //   '\t<uses-feature android:name="android.hardware.location.gps" android:required="false" \/>\n</manifest>');
//
//             // Replace manifest file with updated version
//             if (data) {
//                 fs.writeFile(manifestFile, data, 'utf8', function (err) {
//                     if (err) throw new Error('Unable to write AndroidManifest.xml: ' + err);
//                 })
//             }
//         });
//     } else {
//         console.log("Manifest file DOES NOT exist");
//     }
// };

// var fs = require('fs')
//
// var manifestFile = '/builds/Ahmed-Galal/moodleapp/android/capacitor-cordova-android-plugins/src/main/AndroidManifest.xml';
//
//
// // console.log("Platform ROOT: " + platformRoot);
// console.log("Manifest file: " + manifestFile);
//
// // If manifest file exists
// if (fs.existsSync(manifestFile)) {
//     console.log("Manifest file exists");
//
//     // Read manifest file
//     fs.readFile(manifestFile, 'utf8', function (err, data) {
//         if (err) {
//             throw new Error('Unable to find AndroidManifest.xml: ' + err);
//         }
//         data = data.replace(/<uses-feature android:name="android.hardware.location.gps" android:required="\$GPS_REQUIRED"\/>/g, '<uses-feature android:name="android.hardware.location.gps" android:required="false"/>')
//
//         // Replace manifest file with updated version
//         if (data) {
//             fs.writeFile(manifestFile, data, 'utf8', function (err) {
//                 if (err) throw new Error('Unable to write AndroidManifest.xml: ' + err);
//             })
//         }
//     });
// } else {
//     console.log("Manifest file DOES NOT exist");
// }

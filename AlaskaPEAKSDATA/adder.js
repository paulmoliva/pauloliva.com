var PubNub = require('pubnub');
var alaskaData = require('./all_peaks');

var pubnub = new PubNub({
    subscribeKey: "sub-c-17839a24-bc5a-11e8-891e-be748cd08d1d",
    publishKey: "pub-c-57811bcb-43b5-4634-b3b7-f83eb9916152",
    ssl: true
});

// pubnub.addListener({
//     status: function(statusEvent) {
//         if (statusEvent.category === "PNConnectedCategory") {
//             var payload = {
//                 my: 'payload'
//             };
//             pubnub.publish(
//                 {
//                     message: payload
//                 },
//                 function (status) {
//                     // handle publish response
//                 }
//             );
//         }
//     },
//     message: function(message) {
//         console.log(message);
//     },
//     presence: function(presenceEvent) {
//         // handle presence
//     }
// });
//
// pubnub.subscribe({
//     channels: ['fetch2'],
// });
//   pubnub.publish(
//       {
//           message: {
//             "school_name": "Dillingham Elementary"
//           },
//           channel: 'fetch',
//           sendByPost: false, // true to send via post
//           storeInHistory: false, //override default storage options
//           meta: {
//               "cool": "meta"
//           }   // publish extra meta with the request
//       },
//       function (status, response) {
//           if (status.error) {
//               console.log('status');
//               console.log(status);
//           } else {
//               console.log("message Published w/ timetoken", response.timetoken);
//           }
//       }
//   );

const publish = el => {
  pubnub.publish(
      {
          message: {
              ...el
          },
          channel: 'fetch',
          sendByPost: false, // true to send via post
          storeInHistory: false, //override default storage options
          meta: {
              "cool": "meta"
          }   // publish extra meta with the request
      },
      function (status, response) {
          if (status.error) {
              console.log('fail');
              publish(el);
              //console.log(status);
          } else {
              console.log("message Published w/ timetoken", response.timetoken);
          }
      }
  );
}

alaskaData.forEach(publish);

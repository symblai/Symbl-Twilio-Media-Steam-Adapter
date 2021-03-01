const env = require('dotenv').config()
const WebSocket = require("ws");
const express = require('express');
const app  = express();
const server = require("http").createServer(app);
const wss = new WebSocket.Server({ server });
const WebSocketClient = require("websocket").client; 
const wsc_0 = new WebSocketClient();
const wsc_1 = new WebSocketClient();
const wsc_2 = new WebSocketClient();
const wsc_3 = new WebSocketClient();
const request = require('request');
const uuid = require('uuid').v4;
const urlencoded = require('body-parser').urlencoded;
const fetch = require("node-fetch");
const VoiceResponse =require('twilio').twiml.VoiceResponse;
const { response } = require("express");
const port = 8000;
let client_connection_0 = undefined;
let client_connection_1 = undefined;
let client_connection_2 = undefined;
let client_connection_3 = undefined;
let speaker_phone_0 = undefined;
let speaker_phone_1 = undefined;
let speaker_phone_2 = undefined;
let speaker_phone_3 = undefined;
let streamSid_0;
let streamSid_1;
let streamSid_2;
let streamSid_3;
const TwilioWebHook = process.env.TWILIO_WEBHOOK;
const AppWebHook = process.env.CLIENT_WEBHOOK;






/* WebSocket Server - Listen to Twilio audio stream */

wss.on("connection",(ws) => {

    let callSid;
    let client_connection_data = {
        "type": "start_request",
        "insightTypes": ["question", "action_item"],
        "config": {
        "confidenceThreshold": 0.5,
        "timezoneOffset": 480, // Your timezone offset from UTC in minutes
        "languageCode": "en-US",
        "speechRecognition": {
            "encoding": "MULAW", // Codec required for Twilio Flex
            "sampleRateHertz": 8000 // Make sure the correct sample rate is
        },
        "meetingTitle": "Webhook Insights"
        },
        "speaker": {
          "userId": "userId",
          "name": "name"
        }
    };

    console.log("New connection initiated!");
    
    ws.on('error', (err) => {
        console.log('WebSocket error.', err);
      });
    ws.on("message",(message) => {
        const msg = JSON.parse(message);
        switch (msg.event){
            case "connected":
                console.log(`A new call has connected.`);
                break;
            case "start":
                console.log(`Starting media stream ${msg.streamSid}`);
              
                callSid = msg.start.callSid;
                console.log(`Captured call ${callSid}`);
                    /* Content Payload */
                if (speaker_phone_0 === undefined){
                    streamSid_0 = msg.streamSid;
                    speaker_phone_0 = (msg.start.customParameters.from).toString();
                    console.log("speaker_phone_0",speaker_phone_0);
                    console.log("streamSid_0",streamSid_0);
                    client_connection_data.speaker.userId = speaker_phone_0;
                    client_connection_data.speaker.name = speaker_phone_0;
                    client_connection_0.send(JSON.stringify(client_connection_data));
              }
              else if (speaker_phone_1 === undefined){
                  speaker_phone_1 = (msg.start.customParameters.from).toString();
                  streamSid_1 = msg.streamSid;
                  console.log("speaker_phone_1",speaker_phone_1);
                  console.log("streamSid_1",streamSid_1);
                  client_connection_data.speaker.userId = speaker_phone_1;
                  client_connection_data.speaker.name = speaker_phone_1;
                  client_connection_1.send(JSON.stringify(client_connection_data));
              }
              else if (speaker_phone_2 === undefined){
                speaker_phone_2 = (msg.start.customParameters.from).toString();
                streamSid_2 = msg.streamSid;
                console.log("speaker_phone_2",speaker_phone_2);
                console.log("streamSid_2",streamSid_2);
                client_connection_data.speaker.userId = speaker_phone_2;
                client_connection_data.speaker.name = speaker_phone_2;
                client_connection_2.send(JSON.stringify(client_connection_data));
                }  
                else if (speaker_phone_3 === undefined){
                    speaker_phone_3 = (msg.start.customParameters.from).toString();
                    streamSid_3 = msg.streamSid;
                    console.log("speaker_phone_3",speaker_phone_3);
                    console.log("streamSid_3",streamSid_3);
                    client_connection_data.speaker.userId = speaker_phone_3;
                    client_connection_data.speaker.name = speaker_phone_3;
                    client_connection_3.send(JSON.stringify(client_connection_data));
                }            
                break;
            case "media":
                /* Send audio to Websocket Client to process */
                if(streamSid_0 === msg.streamSid) {
                    let buff = Buffer.from(msg.media.payload, 'base64') // Convert audio to base64
                    client_connection_0.send(buff);
                }
                else if (streamSid_1 === msg.streamSid) {
                    let buff = Buffer.from(msg.media.payload, 'base64') // Convert audio to base64
                    client_connection_1.send(buff);
                }
                else if (streamSid_2 === msg.streamSid) {
                    let buff = Buffer.from(msg.media.payload, 'base64') // Convert audio to base64
                    client_connection_2.send(buff);
                }
                else if (streamSid_3 === msg.streamSid) {
                    let buff = Buffer.from(msg.media.payload, 'base64') // Convert audio to base64
                    client_connection_3.send(buff);
                }
                break;
            case "stop":
                /* Send stop request */
                if(streamSid_0 === msg.streamSid) {
                    speaker_phone_0 = undefined;
                    streamSid_0 = undefined;
                    client_connection_0.sendUTF(JSON.stringify({
                        "type": "stop_request"
                        }));
                        client_connection_0.close();
                        console.log(`Call Has Ended for Client_0`);
                    }
                else if (streamSid_1 === msg.streamSid) {
                    speaker_phone_1 = undefined;
                    streamSid_1 = undefined;
                    client_connection_1.sendUTF(JSON.stringify({
                    "type": "stop_request"
                }));
                    client_connection_1.close();
                    console.log(`Call Has Ended for Client_1`);
                }
                else if (streamSid_2 === msg.streamSid) {
                    speaker_phone_2 = undefined;
                    streamSid_2 = undefined;
                    client_connection_2.sendUTF(JSON.stringify({
                    "type": "stop_request"
                }));
                    client_connection_2.close();
                    console.log(`Call Has Ended for Client_2`);
                }
                else if (streamSid_3 === msg.streamSid) {
                    speaker_phone_3 = undefined;
                    streamSid_3 = undefined;
                    client_connection_3.sendUTF(JSON.stringify({
                    "type": "stop_request"
                }));
                    client_connection_3.close();
                    console.log(`Call Has Ended for Client_3`);
                }
                
                break;
            default:
                break;
        } 
    });


});


/* Generate Auth Token */

const authOptions = {
    method: 'post',
    url: 'https://api.symbl.ai/oauth2/token:generate',
    body: {
      type: "application",
      appId: process.env.SYMBL_APP_ID,
      appSecret: process.env.SYMBL_APP_SECRET
    },
    json: true
  };


  let auth = new Promise(resolve => {
    request(authOptions, (err, res, body) => {
      if (err) {
        console.error('error posting json: ', err);
        throw err;
      }
      resolve(body);
    })
  });
  
  /* Connect to Symbl's Websocket API */
  
  auth.then(body => {
    let sameUUID = uuid();
    wsc_0.connect(
      'wss://api.symbl.ai/v1/realtime/insights/' + sameUUID,
      null,
      null,
      { 'X-API-KEY': body.accessToken}
    );
    wsc_1.connect(
      'wss://api.symbl.ai/v1/realtime/insights/' + sameUUID,
      null,
      null,
      { 'X-API-KEY': body.accessToken}
    );
    wsc_2.connect(
        'wss://api.symbl.ai/v1/realtime/insights/' + sameUUID,
        null,
        null,
        { 'X-API-KEY': body.accessToken}
      );
    wsc_3.connect(
        'wss://api.symbl.ai/v1/realtime/insights/' + sameUUID,
        null,
        null,
        { 'X-API-KEY': body.accessToken}
        );
  });
  
  /* Websocket Client Connection */
  
  wsc_0.on("connect", async (conn) => {
  
    client_connection_0 = conn;
  
    client_connection_0.on('close', async () => {
      console.log('WebSocket closed.')
    });
  
    client_connection_0.on('error', async (err) => {
      console.log('WebSocket error.', err)
    });
  
    client_connection_0.on('message', async (data) => {
      if(data.type === 'utf8'){
        const {utf8Data} = data;
        data = JSON.parse(utf8Data)
        
        }
      if (data.type === 'message') {
        const {message: {type}} = data;
          if (type === 'recognition_started'){
              console.log('ConversationId:',data.message.data.conversationId);
          }
        }
       else 
       {
        /* Data to send to another server as webhook post request, using fetch method  */
        const options = { 
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
            },
          body: JSON.stringify(data)
          }
          const response = await fetch(`https://${AppWebHook}/api`,options);
          const json = await response.json();
          console.log(json);
        
     }
    });
  });

  wsc_1.on("connect", async (conn) => {
    
    client_connection_1 = conn;
  
    client_connection_1.on('close', async () => {
      console.log('WebSocket closed.')
    });
  
    client_connection_1.on('error', async (err) => {
      console.log('WebSocket error.', err)
    });

  
  });
  wsc_2.on("connect", async (conn) => {
    
    client_connection_2 = conn;
  
    client_connection_2.on('close', async () => {
      console.log('WebSocket closed.')
    });
  
    client_connection_2.on('error', async (err) => {
      console.log('WebSocket error.', err)
    });

  
  });
  wsc_3.on("connect", async (conn) => {
    
    client_connection_3 = conn;
  
    client_connection_3.on('close', async () => {
      console.log('WebSocket closed.')
    });
  
    client_connection_3.on('error', async (err) => {
      console.log('WebSocket error.', err)
    });

  
  });

app.use(urlencoded({extended: false}));

app.get('/',(req,res) => res.send('Hello World from Middle App'));

  /* Webhook POST Request for incoming calls from Twilio */

app.post('/',(req,res)=>{
    
    const {From} = req.body;
    //speaker_phone = From
    console.log('Incoming Call detected from:',From);
    const twiml = new VoiceResponse();
    twiml.start().stream({url: `wss://${TwilioWebHook}/`}).parameter({name: 'from', value: From});
    twiml.dial().conference({startConferenceOnEnter: true,},'The cool room');
    res.type('text/xml')
    console.log(twiml.toString());
    res.send(twiml.toString());

});

server.listen(port);
console.log('middle app is listening on port:',port);
# Symbl-Twilio-Media-Steam-Adapter

- Stream Server that connect Twilio Media Stream to Symbl using WebSocket and exposes a REST API of Symbl’s real-time events to a Client server.
- Up to 4 speaker can call to a Twilio number, so each phone stream get into a separate WebSocket channel that is directed to Symbl and once conversation transcripts messages, topics or insights are identified they are immediatly addressed to another clientServer that servers as a webhook point.  

![alt text](https://guysapir-postman-experiment-bucket.s3-us-west-2.amazonaws.com/Screen+Shot+2021-03-02+at+2.55.23+PM.png)

# Pre-requiremetns
- Symbl appSecret and appId - If you don't have a Symbl account for signup look it up in this [Link](https://platform.symbl.ai/#/signup).
- Twilio account - If you don't have a Twilio account for signup look it up in this [Link](https://www.twilio.com/try-twilio).
- Twilio purchaced phone number - If you don't have a Twilio purchaced phone number you can look for these steps [Link](https://support.twilio.com/hc/en-us/articles/223135247-How-to-Search-for-and-Buy-a-Twilio-Phone-Number-from-Console).
- ngrok installed with your account - If you dont have ngrok you can follow this [Link](https://dashboard.ngrok.com/get-started/setup).


# How to install repository pacakge
- Download by using ```git clone https://github.com/symblai/Symbl-Twilio-Media-Steam-Adapter```.
- Get into the downloaded folder by ```Symbl-Twilio-Media-Steam-Adapter```.
- Run ```npm install```.

# How to setup
- Open .env and modify the following fields:
1. Add ```SYMBL_APP_ID``` with your Symbl appId.
2. Add ```SYMBL_APP_SECRET``` with your Symbl appSecret.
3. Update ```CLIENT_WEBHOOK``` - For local testing from a terminal or command line run ```ngrok http 9000```. Copy the secure forwarding value to ```CLIENT_WEBHOOK``` but remove the "https://" from it. For example if you got the value "https://dda80552256c.ngrok.io/" only use this value "dda80552256c.ngrok.io". 
4. Update  ```TWILIO_WEBHOOK``` - To update your Twilio active phone number and the ```TWILIO_WEBHOOK``` in .env:
   - For local testing first run ```ngrok http 8000``` and copy and save the full secure forwarding address from ngrok to your Twilio account --> Phone numbers --> Active Phone Numbers --> select the phone number you would like to update --> Under "Message and Fax" in the Voice "Webhook" value includeing '/' at the end. then copy the same fowarding address to ```TWILIO_WEBHOOK``` but remove the "https://" from it. For example for "https://127c7b383137.ngrok.io/" use only this value "127c7b383137.ngrok.io" in ```TWILIO_WEBHOOK```.

5. Save the file. 
- Note: For real server testing - For step 3 and 4 modify ```CLIENT_WEBHOOK``` and ```TWILIO_WEBHOOK``` with your servers addresses similarly to ngrok steps above. 

# How to run:
- Run in your terminal or command line  ```node clientServer.js```.
- Run in your terminal or command line  ```node streamServer.js```.
- Now up to 4 people can call to your Twilio registered phone number and trasncript, topics and inights of the conversation will be shown in the clientServer terminal or command line. 



# Symbl-Twilio-Media-Steam-Adapter

Stream Server that connect Twilio Media Stream to Symbl using WebSocket and exposes a REST API of Symbl’s real-time events to a Client server

![alt text](https://guysapir-postman-experiment-bucket.s3-us-west-2.amazonaws.com/Screen+Shot+2021-03-02+at+2.55.23+PM.png)

#Pre-requiremetns
- Twilio account - If you don't have a Twilio account you can these steps [Link](https://www.twilio.com/try-twilio)
- Twilio purchaced phone number - If you don't have a Twilio purchaced number you can look for these steps [Link](https://support.twilio.com/hc/en-us/articles/223135247-How-to-Search-for-and-Buy-a-Twilio-Phone-Number-from-Console)
- This step is not a must but make it easier to later setup Twilio Voice Webhook server -  Twilio installed CLI - If you don't have a Twilio CLI installed you can look for these steps [Link](https://www.twilio.com/docs/twilio-cli/quickstart)


#How to install repository pacakge
- Download by using ```git clone https://github.com/symblai/Symbl-Twilio-Media-Steam-Adapter```
- Get into the downloaded folder by ```Symbl-Twilio-Media-Steam-Adapter```
- Run ```npm install```

#How to run:

- You can test this code using ngrok or your actual server. 
- To update your Twilio Phone Voice ngrok linkOpen a console or command line and run this command with your twilio phone number ```twilio phone-numbers:update <Your Twilio phone Number> --voice-url=https://localhost:8000```



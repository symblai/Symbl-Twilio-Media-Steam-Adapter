# Symbl-Twilio-Media-Steam-Adapter

Stream Server that connect Twilio Media Stream to Symbl using WebSocket and exposes a REST API of Symbl’s real-time events to a Client server

![alt text](https://guysapir-postman-experiment-bucket.s3-us-west-2.amazonaws.com/Screen+Shot+2021-03-02+at+2.55.23+PM.png)

# Pre-requiremetns
- Symbl appSecret and appId - If you don't have a Symbl account for signup look it up in this [Link](https://platform.symbl.ai/#/signup)
- Twilio account - If you don't have a Twilio account for signup look it up in this [Link](https://www.twilio.com/try-twilio)
- Twilio purchaced phone number - If you don't have a Twilio purchaced phone number you can look for these steps [Link](https://support.twilio.com/hc/en-us/articles/223135247-How-to-Search-for-and-Buy-a-Twilio-Phone-Number-from-Console)
- Twilio CLI - This step is not a must but make it easier to later setup Twilio Voice Webhook from a terminal or command line - If you don't have a Twilio CLI installed you can look for these steps [Link](https://www.twilio.com/docs/twilio-cli/quickstart)
- ngrok installed with your account - If you dont have ngrok you can follow this [Link](https://dashboard.ngrok.com/get-started/setup)


# How to install repository pacakge
- Download by using ```git clone https://github.com/symblai/Symbl-Twilio-Media-Steam-Adapter```
- Get into the downloaded folder by ```Symbl-Twilio-Media-Steam-Adapter```
- Run ```npm install```

# How to setup
Open .env and modify the following fileds:
1. Add your Symbl appId to ```SYMBL_APP_ID```
2. Add your Symbl appsecret to ```SYMBL_APP_SECRET```
3. Update your Twilio number voice webhook with ngrok - There are two ways to do that:
a. First way, login to your Twilio account, TWILIO_WEBHOOK=c61dc12f90d8.ngrok.io

CLIENT_WEBHOOK=f5b67a469a85.ngrok.io
# How to run:

- You can test this code using ngrok or your actual server. 
- If you are testing this locally:
1. To update your Twilio Phone Voice ngrok linkOpen a console or command line and run this command with your twilio phone number ```twilio phone-numbers:update <Your Twilio phone Number> --voice-url=https://localhost:8000```
2. Open a terminal or command line and run ```ngrok```



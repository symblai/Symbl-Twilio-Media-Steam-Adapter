# Symbl-Twilio-Media-Steam-Adapter


Symbl's APIs empower developers to enable: 
- **Real-time** analysis of free-flowing discussions to automatically surface highly relevant summary discussion topics, contextual insights, suggestive action items, follow-ups, decisions, and questions.
- **Voice APIs** that makes it easy to add AI-powered conversation intelligence to either [telephony][telephony] or [WebSocket][websocket] interfaces.
- **Conversation APIs** that provide a REST interface for managing and processing your conversation data.
- **Summary UI** with a fully customizable and editable reference experience that indexes a searchable transcript and shows generated actionable insights, topics, timecodes, and speaker information.

<hr />



## Pre-requisites

- Symbl appSecret and appId - If you don't have a Symbl account for signup look it up in this [Link](https://platform.symbl.ai/#/signup).
- Twilio account - If you don't have a Twilio account for signup look it up in this [Link](https://www.twilio.com/try-twilio).
- Twilio purchaced phone number - If you don't have a Twilio purchaced phone number you can look for these steps [Link](https://support.twilio.com/hc/en-us/articles/223135247-How-to-Search-for-and-Buy-a-Twilio-Phone-Number-from-Console).
- ngrok installed with your account - If you dont have ngrok you can follow this [Link](https://dashboard.ngrok.com/get-started/setup).

## Feature:

- Stream Server that connect Twilio Media Stream to Symbl using WebSocket and exposes a REST API of Symbl’s real-time events to a Client server.
- Up to 4 speaker can call to a Twilio number and start a conversation, so each phone stream get into a separate WebSocket channel that is directed to Symbl and once conversation transcripts messages, topics or insights are identified they are immediatly addressed in real-time to another clientServer that servers as a webhook point.  

![alt text](https://guysapir-postman-experiment-bucket.s3-us-west-2.amazonaws.com/Screen+Shot+2021-03-02+at+2.55.23+PM.png)

# Setup and Deploy
1. Open command line or terminal

2. Download by using the command ```git clone https://github.com/symblai/Symbl-Twilio-Media-Steam-Adapter```.

3. Get into the downloaded folder using the command ```cd Symbl-Twilio-Media-Steam-Adapter```.

4. Run the command ```npm install```.

5. Open .env file and modify the following fields:

6. Add ```SYMBL_APP_ID``` with your Symbl appId.

7. Add ```SYMBL_APP_SECRET``` with your Symbl appSecret.

8. Update ```CLIENT_WEBHOOK``` - For local testing from a terminal or command line run ```ngrok http 9000```. Copy the secure forwarding value to ```CLIENT_WEBHOOK``` but remove the "https://" from it. For example if you got the value "https://dda80552256c.ngrok.io/" only use this value "dda80552256c.ngrok.io". 

9. Update  ```TWILIO_WEBHOOK``` - To update your Twilio active phone number and the ```TWILIO_WEBHOOK``` in .env:
   - For local testing first run ```ngrok http 8000``` and copy and save the full secure forwarding address from ngrok to your Twilio account --> Phone numbers --> Active Phone Numbers --> select the phone number you would like to update --> Under "Message and Fax" in the Voice "Webhook" value including '/' at the end and save this Twilio configuration. then copy the same fowarding address to ```TWILIO_WEBHOOK``` but remove the "https://" from it. For example for "https://127c7b383137.ngrok.io/" use only this value "127c7b383137.ngrok.io" in ```TWILIO_WEBHOOK```.

10. Save the .env file. 

   - Note: For real server testing - For step 3 and 4 modify ```CLIENT_WEBHOOK``` and ```TWILIO_WEBHOOK``` with your servers addresses similarly to ngrok steps above. 

11. In the folder location ./Symbl-Twilio-Media-Steam-Adapter run in your terminal or command line  ```node clientServer.js```.

12. In the folder location ./Symbl-Twilio-Media-Steam-Adapter run in your terminal or command line  ```node streamServer.js```.

## Conclusion 

Now up to 4 people can call to your Twilio registered phone number to start a conversation and trasncript messages, topics and inights of the conversation will be shown in real-time in the clientServer terminal or command line. 

## Community

If you have any questions, feel free to reach out to us at devrelations@symbl.ai or through our [Community Slack][slack] or our [forum][developer_community].

This guide is actively developed, and we love to hear from you! Please feel free to [create an issue][issues] or [open a pull request][pulls] with your questions, comments, suggestions and feedback.  If you liked our integration guide, please star our repo!

This library is released under the [Apache License][license]

[license]: LICENSE.txt
[telephony]: https://docs.symbl.ai/docs/telephony/overview/post-api
[websocket]: https://docs.symbl.ai/docs/streamingapi/overview/introduction
[developer_community]: https://community.symbl.ai/?_ga=2.134156042.526040298.1609788827-1505817196.1609788827
[slack]: https://join.slack.com/t/symbldotai/shared_invite/zt-4sic2s11-D3x496pll8UHSJ89cm78CA
[signup]: https://platform.symbl.ai/?_ga=2.63499307.526040298.1609788827-1505817196.1609788827
[issues]: https://github.com/symblai/Symbl-Twilio-Media-Steam-Adapter/issues
[pulls]: https://github.com/symblai/Symbl-Twilio-Media-Steam-Adapter/pulls

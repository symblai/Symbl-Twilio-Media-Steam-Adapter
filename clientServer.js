const express = require('express');
const app = express();
app.listen(9000, () => console.log('Listening at 9000'));
app.use(express.static('public'));
app.use(express.json({limit:'1mb'}));

app.get('/',(req,res) => res.send('Hello World from webhook listener'));

app.post('/api',(request,response) => {
    const data = request.body;
    
    if (data.type === 'message_response') {
        console.log('Messages:',data.messages);
    }
    else if (data.type === 'insight_response') {
        console.log('Insights:',data.insights);
     
      } 
      else if (data.type === 'topic_response') {
        console.log('Topics:',data.topics);
        
      } 
      else if (data.type === 'context_response') {
        console.log('Context:',data.ontext);
        
      }
      else if (data.type === 'tracker_response') {
        console.log('Trackers:',data.trackers);
       
      }

    response.json({
        status:'success',
        dataType: data.type
    });
}

)
var AWS = require('aws-sdk');

// you shouldn't hardcode your keys in production! See http://docs.aws.amazon.com/AWSJavaScriptSDK/guide/node-configuring.html
//AWS.config.update({accessKeyId: 'akid', secretAccessKey: 'secret'});
AWS.config.region = 'ap-south-1';
var lambda = new AWS.Lambda();
//var Testing = '{"abc":"kk"}'
var params = {
  FunctionName: 'dev_invoke_testing', /* required */
  Payload: JSON.stringify({"bucket_name":"Dev","destination":"Ops"})
};
lambda.invoke(params, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});

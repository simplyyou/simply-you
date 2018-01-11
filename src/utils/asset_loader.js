var AWS = require('aws-sdk');

export function loadAssets(urls) {
  AWS.config.update({region: process.env.REACT_APP_region, credentials: {accessKeyId: process.env.REACT_APP_accessKeyId, 
    secretAccessKey: process.env.REACT_APP_secretAccessKey}
  });
  var s3 = new AWS.S3( { params: {Bucket: process.env.REACT_APP_bucket} } )
  var params = {Bucket: process.env.REACT_APP_bucket};

  return new Promise((resolve, reject) => {

    s3.listObjects(params, function(err, data){
      var bucketContents = data.Contents;
      for (var i = 0; i < bucketContents.length; i++) {
        var urlParams = {Bucket: process.env.REACT_APP_bucket, Key: bucketContents[i].Key};
        s3.getSignedUrl('getObject',urlParams, function(err, url) {
          urls.push(url);
        });
      }
      resolve();
    });
  })
  .then(() => {
    console.log('Assets loaded',urls);
  })
  .catch((err) => {
    console.log('Error',err);
  });
}
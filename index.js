const AWS = require('aws-sdk');

module.exports.handler = async (event) => {
  // const sts = new AWS.STS();
  // const { Account: account } = await sts.getCallerIdentity({}).promise();
  // const response = {
  //     status: 200,
  //     body: JSON.stringify(Account)
  // }
  // return account;
  const currentTime = new Date();
  const hour = currentTime.getHours();
  const minute = currentTime.getMinutes();
  const saveHour = hour - 9;
  if(saveHour < 0) {
      return "Irsen";
  } else if(saveHour === 0) {
      const response = 
          (minute === 0) 
              ? 
          "irsen" 
              : 
          (minute > 0 && minute <= 30) 
              ?
          "za yhu" 
              : 
          "tasalsan";
      return response;
  } else {
      return "Tasalsan";
  }
};


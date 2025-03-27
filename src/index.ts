import { APIGatewayProxyEvent, Context } from "aws-lambda";

export const lambdaHandler = async (event: APIGatewayProxyEvent, context: Context) => {
  console.log('#Lambda works with TS');
  
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };
}
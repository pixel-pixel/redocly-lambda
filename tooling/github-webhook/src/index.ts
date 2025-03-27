import { APIGatewayProxyEvent, Context } from "aws-lambda";

export const lambdaHandler = async (event: APIGatewayProxyEvent, context: Context) => {
  console.log('#Lambda works');
  
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Lambda works',
        input: event,
      },
      null,
      2
    ),
  };
}
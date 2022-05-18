const express = require('express');
const app = express();
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
const { right_of_access, right_of_erase } = require('./backend.request')
const PORT = process.env.PORT || 8000;

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'BackEnd ROA and ROE APIs',
            version: '1.0.0',
            description: 'BackEnd ROA and ROE APIs for async APIS',
            contact: {
                name: 'Pankaj Upadhayay',
                email: 'pankaj.upadhayay@bazaarvoice.com'
            },
            servers: ["http://localhost:3000"]
        }
    },
    apis: ["index.js"]
}
const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

app.use(express.json());
/**
 * @swagger
 * definitions:
 *  ROARequest:
 *   type: object
 *   properties:
 *    request_id:
 *     type: string
 *     description: request_id of the privacy request
 *     example: '2ef99e18-73e8-4829-b453-d0118a91b039'
 *    identifier:
 *     type: string
 *     description: identifier of the privacy request
 *     example: '{type:"emailAddress", value:"abc@xyz.com"}'
 *    task_id:
 *     type: string
 *     description: task_id of the privacy request
 *     example: '2ef99e18-73e8-4829-b453-d0118a91b039'
 *    client_name:
 *     type: string
 *     description: selected client instance for ROE privacy request
 *     example: '{"walmert","walmart_uk","walmart_ca"}'
 *    upload_url:
 *     type: string
 *     description: upload url of the task for privacy request if data found
 *     example: 'https://example.s3.us-west-1.amazonaws.com/yourDirectory/5ef5e88a-4305-481f-9f9c-4d1364a003d1?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ACREDENTIALSTRING%2F20210521%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20210521T211815Z&X-Amz-Expires=900&X-Amz-Signature=f651971xs974fw974e97819f87a19w78ef49aw7ef46aw8e1fa651ef42a9fec60&X-Amz-SignedHeaders=host'
 *  ROERequest:
 *   type: object
 *   properties:
 *    request_id:
 *     type: string
 *     description: request_id of the privacy request
 *     example: '2ef99e18-73e8-4829-b453-d0118a91b039'
 *    identifier:
 *     type: string
 *     description: identifier of the privacy request
 *     example: '{type:"emailAddress", value:"abc@xyz.com"}'
 *    task_id:
 *     type: string
 *     description: task_id of the privacy request
 *     example: '2ef99e18-73e8-4829-b453-d0118a91b039'
 *    client_name:
 *     type: string
 *     description: selected client instance for ROE privacy request
 *     example: '{"walmert","walmart_uk","walmart_ca"}'
*/

/**
 * @swagger
 * /roa_request:
 *  post:
 *   summary: create ROA request
 *   description: create ROA request
 *   requestBody:
*    content:
*     application/json:
*      schema:
*       $ref: '#/definitions/ROARequest'
 *   responses:
 *    203:
 *     description: ROA request submitted succesfully
 *    403:
 *     description: ROA request submitted fail
 */
app.post("/roa_request", right_of_access);

/**
 * @swagger
 * /roe_request:
 *  post:
 *   summary: create ROE request
 *   description: create ROE request
 *   requestBody:
*    content:
*     application/json:
*      schema:
*       $ref: '#/definitions/ROERequest'
 *   responses:
 *    203:
 *     description: ROE request submitted succesfully
 *    403:
 *     description: ROE request submitted fail
 */
app.post("/roe_request", right_of_erase);

app.listen(PORT, () => {
    console.log("server listening in port PORT");
})
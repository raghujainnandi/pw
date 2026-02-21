import {test} from "@playwright/test"
import { request } from "node:http"
import { json } from "node:stream/consumers";

test('Put request', async ({request}) =>
{
 const response = await request.put("https://api.restful-api.dev/objects/ff8081819c5368bb019c7fa8b03545b4",
    {
        headers: {"Content:Type" : "application/json"},
       data:{"name": "shiva MacBook Pro 16",
       "data": {
      "year": 2019,
      "price": 1849.99,
      "CPU model": "Intel Core i9",
      "Hard disk size": "1 TB"
   }}
  

    });

    const responsebody = await response.json();
    console.log(responsebody);
 
})
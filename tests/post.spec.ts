import {test , expect } from "@playwright/test"

test('Post request', async ({request}) =>
{

    const response = await request.post("https://api.restful-api.dev/objects",
        {
             headers: {"Content-Type":"application/json"},
             data:{"name": "Apple MacBook Pro 16",
       "data": {
      "year": 2019,
      "price": 1849.99,
      "CPU model": "Intel Core i9",
      "Hard disk size": "1 TB"
   }}
     });

     const responsebody = await  response.json();
     console.log(responsebody);
     const id = responsebody.id;
     console.log(id);
     const price = responsebody.data.price;
     console.log(price);

});
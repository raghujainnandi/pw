import {test, expect} from "@playwright/test"

test('Get request', async ({request}) => 
{
  const response = await request.get("https://api.restful-api.dev/objects?id=3&id=5&id=10");
  const responsebody = await response.json();
  console.log(responsebody);
  const name = await responsebody[1].name;
  const colorfromdata = await responsebody[1].data.color;
  console.log(name);
  console.log(colorfromdata);
});




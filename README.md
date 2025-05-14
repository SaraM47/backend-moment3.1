# CV-Erfarenhets-API

Detta är ett REST API byggt med **Node.js**, **Express**, **Mongoose** och **MongoDB Atlas**.  
API:et hanterar CRUD-operationer för arbetserfarenheter i ett CV.

---

## Länkar

- [**Frontend (testgränssnitt)**]
- [**Backend (Render)**] (https://backend-moment3-1.onrender.com/api/experience)(#)

---

## Databasstruktur (MongoDB)

Varje arbetserfarenhet sparas som ett dokument i `experiences`-collection i databasen `cv`. Strukturen ser ut så här:

```json
{
  "_id": "ObjectId",
  "companyName": "string",
  "jobTitle": "string",
  "location": "string",
  "startDate": "string",
  "endDate": "string",
  "description": "string"
}



## Felhantering
Om användaren skickar felaktig eller ofullständig data returneras ett felmeddelande som:

```json
{
  "error": "companyName, jobTitle och location är obligatoriska fält."
}
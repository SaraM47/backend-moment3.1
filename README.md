# CV-Erfarenhets-API

Detta är ett REST API byggt med **Node.js**, **Express**, **Mongoose** och **MongoDB Atlas**.  
API:et hanterar CRUD-operationer för arbetserfarenheter i ett CV.

---

## Länkar
- [Frontend (testgränssnitt)](https://backend-moment32.netlify.app/)
- [Backend (Render)](https://backend-moment3-1.onrender.com/api/experience)

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

```

## Användning

API:et stöder fyra huvudsakliga HTTP-metoder: `GET`, `POST`, `PUT` och `DELETE`. Alla dessa operationer är kopplade till `/api/experience` och hanterar hela listan med arbetserfarenheter.

- `GET` hämtar **alla poster** i databasen. Det finns i nuläget inget stöd för att hämta en enskild post via ID.
- `POST` används för att lägga till en ny arbetserfarenhet. Flera fält krävs.
- `PUT` används för att uppdatera en post via dess unika ID. Samma fältstruktur som `POST`.
- `DELETE` raderar en post via dess ID.

Alla data skickas och returneras i **JSON-format**.

## API-endpoints

<table>
  <tr>
    <th>Metod</th>
    <th>Ändpunkt</th>
    <th>Body</th>
    <th>Beskrivning</th>
  </tr>
  <tr>
    <td>GET</td>
    <td>/api/experience</td>
    <td>---</td>
    <td>Hämtar alla arbetserfarenheter</td>
  </tr>
  <tr>
    <td>POST</td>
    <td>/api/experience</td>
    <td>
      <pre>{
  "companyName": "string",
  "jobTitle": "string",
  "location": "string",
  "startDate": "YYYY-MM-DD",
  "endDate": "YYYY-MM-DD",
  "description": "string"
}</pre>
    </td>
    <td>Lägger till en ny erfarenhet</td>
  </tr>
  <tr>
    <td>PUT</td>
    <td>/api/experience/:id</td>
    <td>
      <pre>{
  "companyName": "string",
  "jobTitle": "string",
  "location": "string",
  "startDate": "YYYY-MM-DD",
  "endDate": "YYYY-MM-DD",
  "description": "string"
}</pre>
    </td>
    <td>Uppdaterar en erfarenhet via ID</td>
  </tr>
  <tr>
    <td>DELETE</td>
    <td>/api/experience/:id</td>
    <td>---</td>
    <td>Raderar en erfarenhet via ID</td>
  </tr>
</table>

## Felhantering

Om användaren skickar felaktig eller ofullständig data, t.ex. utan obligatoriska fält, returnerar API:et ett JSON-felmeddelande. Exempel:

```json
{
  "error": "companyName, jobTitle and location are required fields."
}

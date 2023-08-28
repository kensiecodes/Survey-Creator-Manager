# Survey Creator & Manager
Create a group of opinion surveys to rate favorite technologies and entertainment.
---

## Brief TooDlboox
Surveying groups of people is an excellent way to understand more about that group of people, whether it’s how they feel about a certain topic or what their favorite tech is. This is useful research for gauging product development or trying to find pain points in existing products.

## Levels
### Level 1
We want to find out what tools the React community uses to see if there is a pattern in usage. This can help us see if there is a gap in tools that we could build a new product for.
* **Task:** Create a survey that gives a multiple-choice group of questions with a comment field to find out people’s favorite React tools.

### Level 2
Often, a single survey isn’t enough. Knowing about the tooling is helpful, but maybe we don’t understand the types of jobs people have where they use those tools.
* **Task:** Create a survey manager that lets you dynamically create and manage new surveys.

### Level 3
dlroW-laeR
Once the surveys are in, we end up with a lot of data about the questions we asked, but how do we consume that?
* **Task:** Create a dashboard of metrics that show trends determined for the group of surveys.

### Development Tasks
- Create survey questions
- Create a survey form
- Add response storage
- Create dashboard
- Add survey creation
- Add survey management
- Create results dashboard
- Add response data
- Add results charts

### Toolbox
- Formik

## Running the Application
### `npm start`
The start command will start two servers concurrently:
* An API server, powered by json-server, running on http://localhost:5000 
* A React application running on http://localhost:3000 

To stop the servers from running, you can press Ctrl + C.

### Running on Windows
If you are having problems running `npm start` on Windows you may need to run the React client and server in separate terminals. Open a terminal and run `npm run start:react` to start the react application. Open another terminal and run `npm run start:server` to run the server.

## API
There are two datasets that are a part of this project: surveys and responses.

You can view all the data inside of the `data/db.json` file. Each data set can be accessed via a named property in this file. The following is a partial listing of the data in `data/db.json`:

```json
{
  "surveys": [
    {
      "id": 1,
      "name": "...",
      "description": "..."
    }
  ],
  "responses": [
    {
      "id": 1,
      "response": "...",
      "surveyId": 1
    }
  ]
}
```
### Surveys
Each survey is an object with the following shape:
```json
{
  "id": 1,
  "name": "Favorite React Tools",
  "description": "A survey to determine the most popular tools within the React community."
}
```
### Responses
Each response is an object with the following shape:
```json
{
  "id": 1,
  "response": {
    "question1": "optionA",
    "question2": "optionB",
    ...
  },
  "surveyId": 1
}
```

## Screens

### Home
The Home screen is the first page the user sees. It is displayed at `/`.
* The path to this screen is `/`.
* A "Create Survey" button is shown and clicking it brings the user to the Create Survey screen.
* Existing surveys are each shown with the survey name, the number of responses, and a “View,” “Edit,” and “Delete” button. 
  * Clicking the “View” button brings the user to the Survey screen.
  * Clicking the “Edit” button brings the user to the Edit Survey screen.
  * Clicking the “Delete” button shows a warning message before deleting the survey.

### Survey
The Survey screen displays all of the information about a survey.
* The path to this screen should include the surveyId (i.e., `/surveys/:surveyId`).
* The screen includes the survey name (e.g., "Favorite React Tools") and survey description (e.g., "A survey to determine the most popular tools within the React community.").
* The screen includes "Edit", "View Responses", and "Delete" buttons. 
  * Clicking the "Edit" button takes the user to the Edit Survey screen.
  * Clicking the "View Responses" button takes the user to the Responses screen.
  * Clicking the "Delete" button shows a warning message before deleting the survey.

### Create Survey
The Create Survey screen allows the user to create a new survey.
* The path to this screen should be `/surveys/new`.
* A form is shown with the appropriate fields for creating a new survey. The name field is a text field. The description field is a `<textarea>` field that can be multiple lines of text.
* If the user clicks "Submit", the user is taken to the Survey screen.
* If the user clicks "Cancel", the user is taken to the Home screen.

### Edit Survey
The Edit Survey screen allows the user to modify information on an existing survey.
* The path to this screen should include the surveyId (i.e., `/surveys/:surveyId/edit`).
* It displays the same form as the Create Survey

 Screen. 
* If the user clicks "Submit", the user is taken to the Survey screen.
* If the user clicks "Cancel", the user is taken to the Survey screen.

### Responses
The Responses screen displays all the responses for a particular survey.
* The path to this screen should include the surveyId (i.e., `/surveys/:surveyId/responses`).
* This screen includes the survey name (e.g., "Favorite React Tools") and survey description (e.g., "A survey to determine the most popular tools within the React community.").
* Responses are each shown with the responseId and a “View” button. 
  * Clicking the “View” button brings the user to the Response screen.

### Response
The Response screen displays the details of a single response.
* The path to this screen should include the surveyId and responseId (i.e., `/surveys/:surveyId/responses/:responseId`).
* This screen includes the survey name (e.g., "Favorite React Tools") and survey description (e.g., "A survey to determine the most popular tools within the React community.").
* The response details are displayed with a "Back" button. Clicking the "Back" button takes the user to the Responses screen.

---

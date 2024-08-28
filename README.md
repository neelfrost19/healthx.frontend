# HealthX Frontend

HealthX Frontend is a simple web app for managing staff. This project utilizes endpoints from healthx.api to create an user, get accesstoken for an user, create staff.
It's built using JavaScript and includes environment configuration and package management.

## Features

- Create new user
- Autheticate User
- Manage User

## Getting Started

### Prerequisites

- Node.js
- npm (Node Package Manager)

### Library used

- Axios : used to consume APIs
- Luxon : used for getting simplified date methods
- Uuid : used for getting unique ids
- Dotenv : used for loading envs from proccess.env


### Installation

1. Clone the repository:
   git clone https://github.com/neelfrost19/healthx.frontend.git

2. Navigate to the project directory:
   cd healthx.frontend

3. Install the dependencies:
   npm install

### Configuration

1. Copy the example environment configuration file:
   cp .env.example .env

2. Edit the `.env` file with your configuration settings.

### Setting Up ENV

1. For REACT_APP_API_HOST_URL, run healthx.api at any desired PORT or use the provided url.
   provided: REACT_APP_API_HOST_URL = https://healthx-api.onrender.com


### Running the APP

Start the server:
npm start
The APP will be accessible at http://localhost:PORT 

Project Structure
src/ - Contains the source code for the components and weboages
.env.example - Example environment configuration file
.gitignore - Specifies files to be ignored by Git
package.json - Project metadata and dependencies


### Commit and Push

- After commiting and pushing any changes to master branch through the following command
  `git push origin master`
  Github action is triggered which automatically builds a docker image.

- After the above github action is completed, deployment action is triggered.

- The above triggers a webhook from render to automatically deploy using the latest docker image.

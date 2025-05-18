# Wordle Game Clone

This is a **Wordle-style game** built using **React**. Players try to guess a secret five-letter word within six tries.  
After each guess, feedback is provided to indicate which letters are:

- Correct **and in the right position**
- Correct **but in the wrong position**
- **Not in the word** at all

---

## Tech Stack

- React – Frontend UI  
- JavaScript – Game logic  
- CSS – Styling  
- JSON Server – Mock backend for storing game state or word list

---

## Getting Started

Follow these steps to set up and run the project successfully on your local machine.
1. Clone the Repository
bash
git clone https://github.com/ridhimapatnala/wordle-react.git
cd wordle-react

2. Install Dependencies
bash
Copy
Edit
npm install
Installs all required packages listed in package.json.

3. Run the React App
bash
Copy
Edit
npm start
This will:

Launch the development server

Automatically open http://localhost:3000

Reload on code changes

Show lint errors if any

Running JSON Server (Mock Backend)
The project uses a mock backend API for storing words.

1. Install JSON Server (One-time setup)
bash
Copy
Edit
npm install -g json-server
2. Create a db.json File
Create this file in the root of the project. Example content:

json
Copy
Edit
{
  "words": [
    { "id": 1, "word": "apple" },
    { "id": 2, "word": "brain" },
    { "id": 3, "word": "crane" }
  ]
}
Each word must be a valid 5-letter word.

3. Start the JSON Server
bash
Copy
Edit
json-server --watch db.json --port 3001
This will:

Start the mock API at http://localhost:3001

Watch for real-time updates to db.json

Available Scripts
Run these using npm run <script-name>:

npm start – Runs the app in development mode at http://localhost:3000

npm test – Launches the test runner

npm run build – Builds the app for production and optimizes for best performance
# Wordle Game Clone

This is a simple Wordle-style game built using React. Players try to guess a secret five-letter word within six attempts. After each guess, the game provides feedback on each letter to help the player narrow down the word:
- Letters that are correct and in the right position.
- Letters that are correct but in the wrong position.
- Letters that are not in the word at all.

## Tech Stack

- **React**: Frontend user interface
- **JavaScript**: Core game logic
- **CSS**: Styling and layout
- **JSON Server**: Mock backend API for storing the word list and game state

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/ridhimapatnala/wordle-react.git
cd wordle-react
```
### 2. Install Dependencies
Install all required packages listed in package.json:

```bash
npm install
```
### 3. Run the React App
Start the development server:
```bash 
npm start
```
This automatically opens http://localhost:3000 in your browser

### 4. Set Up the JSON Server (Mock Backend)

bash
```
npm install -g json-server
``` 
Create a db.json file in the project root with sample word data. Example:

```
{
  "words": [
    { "id": 1, "word": "apple" },
    { "id": 2, "word": "brain" },
    { "id": 3, "word": "crane" }
  ]
}
```
Each word must be exactly five letters long.

Start JSON Server
Run JSON Server to serve your db.json:

bash
```
json-server --watch db.json --port 3001
```
Start the mock API at http://localhost:3001

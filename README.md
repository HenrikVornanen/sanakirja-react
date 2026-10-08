# React Dictionary

This is a React frontend for the dictionary REST API I made in an earlier assignment.
The user can search for a Finnish word and get the English translation. It is also possible to add new Finnish and English word pairs to the dictionary.
I made separate components for searching and adding words. The user can switch between them using buttons.
The app uses GET and POST requests to communicate with the REST API. New words are saved in the backend's sanakirja.txt file.

## How to run

First, start the REST API from assignment 4:

npx tsx server.ts

Then open this React project and run:
npm install

npm run dev

The React app runs at `http://localhost:5173/` and the REST API runs on port 3000.

## Testing
<img width="519" height="199" alt="image" src="https://github.com/user-attachments/assets/00c4bf17-9401-41dc-8ab9-71df23b19f28" />


### Adding a new word (cat)
<img width="473" height="223" alt="image" src="https://github.com/user-attachments/assets/60279e1e-9cae-4634-9b0e-c4a296a4bd7a" />


### Searching for a word (cat)
<img width="391" height="210" alt="image" src="https://github.com/user-attachments/assets/13ae363f-9455-41a8-a20c-e7a2856492f6" 

### Word (cat) saved in the backend file
<img width="230" height="138" alt="image" src="https://github.com/user-attachments/assets/9713877b-5786-4bae-9a1f-6ba7523e0b74" />


  


# Note-Buddy

## Description
Note Buddy is an application designed to help keep track of notes or tasks to do using express.js to ensure all data is always saved and reflects the user's most updated data. It uses the Inquirer package to generate unique a unique id for all notes inorder to modify or delete specific notes.


## Table of contents
- [Installation](#installation)
- [Screenshot](#screenshot)
- [Features](#features)
- [Usage](#usage)
- [credits](#credits)
- [License](#license)
- [Contributing](#contributing)
- [Testing](#testing)


## Installation
To install this project git clone https://github.com/AliahG97/note-buddy.git

## Screenshot
![ReadMe Gen Screenshot](./Assets/Images/note-buddy-screenshot.gif) https://aliahg97.github.io/note-buddy/
 https://cryptic-tundra-54367-8e4ec55ea08d.herokuapp.com/notes


## Features

1. New Note: User can click "start", which navigates to the browser page to enter a new note title, and the new note details below.

2. Save note: Once the user clicks "save", the note is added to the data base json file. This way the note remains in saved notes on the browser even if the browser is refreshed or the cache is cleared.

3. Update notes: Everytime a note is added or deleted, the database json file is updated, by rewriting all the existing data, and omitting deleted data.

4. Delete notes: Every new note is assigned a unique id, so that when the user clicks the trash can on a note, it will only delete that specific note based on its specific unique id. 

## Usage
Note Buddy is ideal for anyone who want to keep track of their daily "to-do" tasks, on a simple and professional interface that ensures the data is saved at all times, and remains up to date.

## Credits
Aliah Guerra (https://github.com/AliahG97)

## License
Creative Commons License
by Aliah Guerra2024. Confidential and Proprietary. All Rights Reserved.

## Contributing
- Minor aestehic changes to CSS as desired.

## Testing
1.  cd to project path
2. npm install
3. server.js
4. In broswer go to PORT (localhost:3002)
5. Click start, enter new note and details, then click Save note.
6. Check db.json file to verify it has been updated with the same data that was added.
7. Delete data from db.json, save file, turn off server (ctl C) and refresh local host browser, note should be gone.
8. Delete another existing note by clicking on the trash can on the browser, and go back to the db.json file to see that the note is deleted.





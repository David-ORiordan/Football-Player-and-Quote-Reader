# Football-Player-and-Quote-Reader

### Main Feature:  
Ionic mobile application that reads football player data, flag data, and quotes from internet resources.  

### Design rationale:  
The first page of the application has a navigation bar which contains a student number and a link to the Settings Page.  
This page will present a random quote each time the page is loaded, displaying the author of the quote, a tag associated with the quote (e.g., wisom, technology, success), and the quote itself. All quote-related data are retrieved in JSON format from the following source: https://api.quotable.io/random  
This page also has an area for displaying football player data based on their nationality. Until a country ID is entered, no player data will be displayed.  
The Settings page allows the user to input a country ID. 

### How to run the application:  
• Enter the application src folder using the command prompt.  
• Enter the command "ionic serve". 

### Technology used:  
• Ionic v3  
• Angular  
• TypeScript  
• HTML  
• CSS  
• JSON  
• Node.js  

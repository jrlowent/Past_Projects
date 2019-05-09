CS701_Term_Project_Lowenthal
Author: Jacob Lowenthal
Title: Job Search Map

The purpose of this application is to provide an enhancement to existing job posting website.  The main objectives
to enhance the user's job search experience are to:

1) To provide a map with markers indicating the locations of job search results
2) To be able to save jobs of interest

This application uses Angular, TypeScript, PHP, Bootstrap, and HTML5 as its main technologies.

==================================================================================================================

Prerequisites to running the application:

Open your desired CLI.  First, navigate to the "term-project-CS701" folder.  Then, run the command "npm install".  
After this is complete, run "npm install ngx-bootstrap --save" so that the Bootstrap code will work.  The next step is
not necessary, unless agm/core is not listed as a dependency in the package.json file.  If it not included, then run
"npm install @agm/core --save" to install that Angular Google Maps (AGM) library.  Once these steps are complete, run 
"ng serve --open" and the application should run in your default browser.

Relevant Files:

app.component.html: The main component and layout of the application
styles.css: Where a background color is set for the HTML body
index.html: Where Bootstrap is loaded
app.component.ts: The logic for most of the application
app.component.css: Where most of the styling exists
githubjobs.service.ts: Where the HTTP/JSONP request to the Github Jobs API (through the proxy script) is performed.
getJsonData.php: The professor's proxy server script Where the request to the Github API is performed.

Technology Used:

Angular, TypeScript, HTML5 Drag & Drop, Angular Services: HTTP/JSONP, custom services, Angular Google Maps, Google
Geocoding Service, Github Jobs API, Local Storage, PHP, Bootstrap

Walkthrough:

First, type in a location where you are looking for a career as a programmer (e.g. a city, a state, a city and state).
You will see the job search results appear in the "Search Results" container.  Click on "go to post" to read more
about each posting.  These links will take you to the job posting on the Github Jobs Website.  If you are interested in
the job, drag it to the "Interesting Jobs" container to save it in local storage.  If you do this by mistake or are no
longer interested in the job, you can click delete to remove it from the "Saved Jobs" container.  When you refresh the
browser, your saved jobs will reload into the "Saved Jobs" area.
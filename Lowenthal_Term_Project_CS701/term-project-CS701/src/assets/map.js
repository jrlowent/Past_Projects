//1) figure out what you want initialized when the map loads:
    //onload, map and current location, marker
        //init function
    //display location function
    //initialize map and window 

let map, infoWindow;

function initMap() {
  //console.log("initMap entered");
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},//initial coordinates
    zoom: 6 //zoom level
  });
  infoWindow = new google.maps.InfoWindow;
  console.log("initial success!");
  return map, infoWindow;
};

function startingPositionIfGeolocation() {
  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infoWindow.setPosition(pos);
      infoWindow.setContent('Location found.');
      infoWindow.open(map);
      map.setCenter(pos);
    }), 
      //boolean for if browser supports geolocation, map.getCenter returns position coords
    handleLocationError(true, infoWindow, map.getCenter());
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  };
};

function handleLocationError(browserHasGeolocation, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
  infoWindow.open(map);
};

//subsequent function for taking the data from each job, reloading the map
// let mapJobResults = function (jobMatchesArg) {
//   console.log("mapJobResults function entered.");
//   for (let i = 0; i < jobMatchesArg.length; i++) {
//     console.log(jobMatchesArg[i].location);
//   };
  //get positions
  //make a marker object for each position
  //map positions through marker objects

//Test using JSON data to map markers at locations==============================================================

window.onload = (function(win, doc, map, infoWindow) {
  let city = "";
  console.log("function entered");
  let mapJobResults = function () {
    console.log("mapJobResults function entered.");
    for (let i = 0; i < testData.length; i++) {
      console.log(testData[i].location);
      if (testData[i].location.indexOf(", ") !== -1) {
        let separatorPos = testData[i].location.indexOf(", ");
        let city = testData[i].location.substring(0, separatorPos);
      };
      let geocoder = new google.maps.Geocoder();
      geocoder.geocode({'address': city}, function(results, status) {
        console.log("results: " + JSON.stringify(results));
        if (status === 'OK') {
          map.setCenter(results[0].geometry.location);
        } else {
          alert('Geocode was not successful for the following reason: ' + status);
        };
      });
    };
  
  };
  
  //Test Data:
  let testData = [
    {
      "id":"5c7245e5-a7f7-4a04-b5b2-710968ceed2a",
      "type":"Full Time",
      "url":"https://jobs.github.com/positions/5c7245e5-a7f7-4a04-b5b2-710968ceed2a",
      "created_at":"Tue Apr 09 15:38:41 UTC 2019",
      "company":"Bates Creative",
      "company_url":"http://www.batescreative.com",
      "location":"Silver Spring, Maryland",
      "title":"Front-End Web Developer",
      "description":"\u003cp\u003eBates Creative, a Silver Spring-based creative and brand experience agency, is looking to hire an enthusiastic, experienced Front-End Web Developer who is excited to be part of a growing, fast-paced strategic and creative team.\u003c/p\u003e\n\u003cp\u003eCollaborating with the Senior Web Designer and Developer and the creative team, this position leads front-end development at the agency. From industry trends to guiding the agency’s development projects and opportunities, this position requires a solid understanding of user-centered design methods and best practices.\u003c/p\u003e\n\u003cp\u003ePosition\u003c/p\u003e\n\u003cul\u003e\n\u003cli\u003ePosition reports to the Creative Director\u003c/li\u003e\n\u003cli\u003ePosition requires employee to be onsite (Silver Spring, Maryland)\u003c/li\u003e\n\u003c/ul\u003e\n\u003cp\u003eQualifications\u003c/p\u003e\n\u003cul\u003e\n\u003cli\u003eMinimum of 4 years of front-end web development\u003c/li\u003e\n\u003cli\u003eExtensive knowledge of CSS3 and HTML5 for the creation of responsive websites\u003c/li\u003e\n\u003cli\u003eSolid knowledge in writing/modifying JavaScript and jQuery\u003c/li\u003e\n\u003cli\u003eStrong experience in creating custom WordPress themes from scratch (PHP)\u003c/li\u003e\n\u003cli\u003eKnowledge of SEO techniques\u003c/li\u003e\n\u003cli\u003eBest practices for Web usability a plus\u003c/li\u003e\n\u003cli\u003eTesting for cross browser compatibility to troubleshoot and resolve issues\u003c/li\u003e\n\u003cli\u003eWorking knowledge of Adobe applications, especially Illustrator \u0026amp; XD\u003c/li\u003e\n\u003cli\u003ePractical experience with Sass and Gulp; ES6 and Git a plus\u003c/li\u003e\n\u003cli\u003eHTML email dev experience\u003c/li\u003e\n\u003cli\u003eUnderstanding of W3C guidelines and Section 508 Standards\u003c/li\u003e\n\u003cli\u003eDrupal experience is a plus\u003c/li\u003e\n\u003cli\u003eAbility to create wireframes for desktop and mobile\u003c/li\u003e\n\u003c/ul\u003e\n\u003cp\u003eResponsibilities\u003c/p\u003e\n\u003cul\u003e\n\u003cli\u003eConceptualize creative solutions for web and interactive projects\u003c/li\u003e\n\u003cli\u003eDevelop digital experiences that are production-ready and cross browser/device compatible\u003c/li\u003e\n\u003cli\u003eWork with Web team for both collaborative and independent projects\u003c/li\u003e\n\u003cli\u003eCoordinate technical needs with our partners on projects\u003c/li\u003e\n\u003cli\u003eCommunicate with Account Managers to translate technical discussion for non-technical persons\u003c/li\u003e\n\u003cli\u003eAbility to effectively handle multiple projects and timelines\u003c/li\u003e\n\u003cli\u003eKnowledge of latest trends in web development, techniques, and emerging technologies\u003c/li\u003e\n\u003cli\u003eProvide accurate estimates for scope and timelines of projects\u003c/li\u003e\n\u003c/ul\u003e\n\u003cp\u003eCompensation\u003c/p\u003e\n\u003cul\u003e\n\u003cli\u003eStarting salary based on experience\u003c/li\u003e\n\u003cli\u003eFlexible time and Teleworking after 90 days\u003c/li\u003e\n\u003cli\u003eAccrued Personal Time Off (PTO) – Fifteen days first year\u003c/li\u003e\n\u003cli\u003eSeven paid holidays (New Year’s Day, Memorial Day, Independence Day, Labor Day, Thanksgiving \u0026amp; day after, Christmas Day)\u003c/li\u003e\n\u003cli\u003eCompany contributes 50% toward individual healthcare plan after 90 days\u003c/li\u003e\n\u003cli\u003eSimple IRA plan available after 1 year, with up to 3% company match\u003c/li\u003e\n\u003c/ul\u003e\n",
      "how_to_apply":"\u003cp\u003eTo be considered, send a cover letter, resume and link to online portfolio to \u003ca href=\"mailto:career@batescreative.com\"\u003ecareer@batescreative.com\u003c/a\u003e\u003c/p\u003e\n",
      "company_logo":"https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBa0ZrIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--f277884f15d493e56eb6eee0bbb0947238121a9e/BatesCreative_logo.jpg"
    },
    {
      "id":"f4e46e80-e116-11e8-8fac-aba5b4c6653c",
      "type":"Full Time",
      "url":"https://jobs.github.com/positions/f4e46e80-e116-11e8-8fac-aba5b4c6653c",
      "created_at":"Mon Nov 05 16:23:44 UTC 2018",
      "company":"HireSpeak",
      "company_url":null,
      "location":"Baltimore, MD",
      "title":"Senior Software Engineer-Confidential",
      "description":"\u003cp\u003e\u003cstrong\u003ePosition Overview\u003c/strong\u003e\u003c/p\u003e\n\u003cp\u003e\u003cem\u003eExtraordinary opportunity that truly achieves professional growth and work/life balance.\nHighly competitive compensation and benefits.\nCollaborative, collegial team environment.\u003c/em\u003e\u003c/p\u003e\n\u003cp\u003eThe Senior Software Engineer (SSE) is a leading advocate for advancing the company’s market proposition of developing quality software whose functionality exceeds customers’ expectations. S/He is a prolific full-stack developer and coding guru that supports the IT Director and the C-Suite with managing the department’s daily operations, executing long and short-term strategic initiatives and software development projects as assigned, within a matrix organizational structure. The SSE:\u003c/p\u003e\n\u003cul\u003e\n\u003cli\u003e\n\u003cp\u003ePlays a pivotal role in assuring that QA best practices and secure coding architecture is woven throughout the fabric of our software development and product life-cycles.\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003eResolves routine programming problems and clarifies related issues and, when possible, converts them into “teachable moments” for the benefit of staff, management and clients alike.\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003eThe SSE stays current and in-sync with the latest industry trends, best practices and new developments. Through professional development, independent learning and research, peer engagements and professional memberships, the SSE continuously expands his/her professional skills. S/He is a departmental evangelist for the acquisition and adoption of leading-edge software development technologies that can help deliver the exceptional advantage to our product design and end-user experiences.\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003eManages and mentors lower-level programmers and IT team members to ensure the highest quality work product and professional/skill growth.\u003c/p\u003e\n\u003c/li\u003e\n\u003cli\u003e\n\u003cp\u003eAssists with fostering the department’s collegial spirit and collaborative environment throughout the company and at points of engagement with the company's external audiences, including, clients and their customers, with whom the department interacts.\u003c/p\u003e\n\u003c/li\u003e\n\u003c/ul\u003e\n\u003cp\u003e\u003cstrong\u003eResponsibilities\u003c/strong\u003e\u003c/p\u003e\n\u003cp\u003eThe SSE participates with management and the C-Suite as an active leader/stakeholder in existing and future product development and feature design as well as the management of secure software architecture. In addition to actively authoring new code, under the direction of the IT Director, the SSE also:\u003c/p\u003e\n\u003cul\u003e\n\u003cli\u003eAssures optimization of UI design and the overall UX.\u003c/li\u003e\n\u003cli\u003eManages QA processes, testing and oversight.\u003c/li\u003e\n\u003cli\u003eReviews and approves changes to the codebase.\u003c/li\u003e\n\u003cli\u003eLeads the design and specification process for new product modules and features.\u003c/li\u003e\n\u003cli\u003eReviews, designs and upgrades systems architecture.\u003c/li\u003e\n\u003cli\u003eOptimizes platform at system, database, and component levels.\u003c/li\u003e\n\u003cli\u003eWorks with other departments and clients to identify and spec future system enhancements.\u003c/li\u003e\n\u003cli\u003eAssists in the research and analysis of existing systems and programming requirements to develop\nsolutions and implement programming enhancements/fixes.\u003c/li\u003e\n\u003c/ul\u003e\n\u003cp\u003e\u003cstrong\u003eRequired Skills / Qualifications\u003c/strong\u003e\u003c/p\u003e\n\u003cp\u003eThe SSE is adept at managing the software development life cycle and infrastructure support services relevant to SaaS development and production environments and is highly proficient in the design and management of software QA testing. S/He is an \"ace\" coder that possesses superior written and verbal communication skills along with the ability to interact with a wide range of internal and external audiences. The SSE is a “master” at identifying, analyzing and articulating both the technical and business case in a manner that promotes deeper understanding of and fosters greater creativity towards implementing optimal solutions to software development, organizational and market challenges. The SSE has:\u003c/p\u003e\n\u003cp\u003e\u003cem\u003e\u003cstrong\u003eMore than 7 years’ programming experience that includes:\u003c/strong\u003e\u003c/em\u003e\u003c/p\u003e\n\u003cul\u003e\n\u003cli\u003eHTML5\u003c/li\u003e\n\u003cli\u003eCSS3/Sass/Less\u003c/li\u003e\n\u003cli\u003eSQL\u003c/li\u003e\n\u003cli\u003eJava\u003c/li\u003e\n\u003cli\u003eJavaScript (Including Babel/ES5/ES6/npm)\u003c/li\u003e\n\u003cli\u003eJava EE/JSP/Spring\u003c/li\u003e\n\u003cli\u003eDrafting moderate to highly complex program specifications\u003c/li\u003e\n\u003c/ul\u003e\n\u003cp\u003e\u003cem\u003e\u003cstrong\u003eNo less than 5 years’ experience that includes:\u003c/strong\u003e\u003c/em\u003e\u003c/p\u003e\n\u003cul\u003e\n\u003cli\u003eCode QA and testing\u003c/li\u003e\n\u003cli\u003eMobile programming\u003c/li\u003e\n\u003cli\u003eResponsive Design\u003c/li\u003e\n\u003cli\u003eDrag and drop design technology\u003c/li\u003e\n\u003cli\u003eOS production server administration\u003c/li\u003e\n\u003cli\u003eVersion control technology\u003c/li\u003e\n\u003cli\u003eWeb service/RESTful interfaces\u003c/li\u003e\n\u003cli\u003eAWS, Windows, LINUX, GitHub, Spring, Agile, SCRUM\u003c/li\u003e\n\u003c/ul\u003e\n\u003cp\u003e\u003cem\u003e\u003cstrong\u003eNo Less than 3 years’ experience with three or more of the following:\u003c/strong\u003e\u003c/em\u003e\nMaven, Selenium, Jenkins, Prometheus, Grafana, JIRA\u003c/p\u003e\n",
      "how_to_apply":"\u003cp\u003e\u003cstrong\u003eAll applications are held in the strictest confidence.\u003c/strong\u003e\nSend a cover letter that includes your salary requirement and a copy of your resume to \u003cstrong\u003e\u003ca href=\"mailto:hrsupport@hirespeak.com\"\u003ehrsupport@hirespeak.com\u003c/a\u003e.\u003c/strong\u003e\n\u003cem\u003e\u003cstrong\u003eALL submissions must have both a cover letter and resume with salary requirement.\u003c/strong\u003e\u003c/em\u003e\u003c/p\u003e\n\u003cp\u003ehirespeak.com is the job listing proxy for this confidential listing\u003c/p\u003e\n",
      "company_logo":null
    }
  ];
  
  //test search functionality
  const confirmSearchButton = doc.getElementById("confirm_search");
  confirmSearchButton.addEventListener("click", mapJobResults);
})(window, document, map, infoWindow);


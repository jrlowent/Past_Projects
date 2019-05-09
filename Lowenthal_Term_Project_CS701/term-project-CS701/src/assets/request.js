window.onload = (function(win,doc) {

    import ajaxCall from 
    let confirmSearch = doc.getElementById("confirm_search");
    let saveSearch = doc.getElementById("save_search")

    function getValues() {
        //build checks to make sure these are not null
        let skillName = doc.getElementById("skill").value;
        let mileRadius = doc.getElementById("mile_radius").value;
        constructUrl(skillName, mileRadius);
    };

    // function constructUrl(skillArg, radiusArg) {
    //     let baseUrl = "https://jobs.github.com/positions.json?";
    //     //add in checks for spaces, uppercase, numbers, and other characters in arguments
    //     let skillQuery = "description=" + skillArg + "&";
    //     let locationQuery = "location=" + radiusArg;
    //     let urlString = baseUrl + skillQuery + locationQuery;
    //     console.log(urlString);
    //     ajaxCall(urlString);
    // };

    // function ajaxCall(urlArg) {
    //     let results;//initialize for data for data returned from api
    //     //Generate XMLHttpRequest object
    //     let jsonHttpRequest = new XMLHttpRequest();
    //     jsonHttpRequest.open("get", urlArg, true); //boolean determines if async
    //     jsonHttpRequest.onreadystatechange = function() { //onreadystatechange: when the server is ready to respond
    //         if ((jsonHttpRequest.readyState === 4) && (jsonHttpRequest.status === 200)) { //when readystate === request done and status === successful request
    //             results = JSON.parse(jsonHttpRequest.responseText); //parses json object from XMLHttpRequestObject
    //             console.log("AJAX request successful!");
    //             mapJobResults(results);//calls function in map.js
    //         }; //closing readystate and status verification
    //     }; //closing onReadyStateChange
    //     jsonHttpRequest.send();
    // };

    confirmSearch.addEventListener("click", getValues);

})(window, document);
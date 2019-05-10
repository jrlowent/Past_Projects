window.onload = function() {

    let readMoreElements = document.getElementsByClassName("read_more");
    let readMoreButton1 = readMoreElements[1];//buttons are accessed from nodelist
    let readMoreButton2 = readMoreElements[4];
    let pReadMore1 = readMoreElements[2];//paragraphs accessed from nodelist
    let pReadMore2 = readMoreElements[5];
    pReadMore1.style.display = "none";//display initialized to none
    pReadMore2.style.display = "none";

    function show_Hide_1 () {
        if ((pReadMore1.style.display === "none") && (readMoreButton1.textContent === "Read More...")) {
            /*if paragraphs not displayed and buttons say, "read more", 
            then paragraphs displayed and buttons change*/
            pReadMore1.style.display = "block";
            readMoreButton1.textContent = "Read Less";
        } else if ((pReadMore1.style.display === "block") && (readMoreButton1.textContent === "Read Less")) {
            /*if if paragraphs displayed and buttons say, "read less,"
            then paragraphs hidden and buttons change*/
            pReadMore1.style.display = "none";
            readMoreButton1.textContent = "Read More...";
        }
    }

    function show_Hide_2 () {
        //similar behavior to show_Hide_1()
        if ((pReadMore2.style.display === "none") && (readMoreButton2.textContent === "Read More...")) {
            pReadMore2.style.display = "block";
            readMoreButton2.textContent = "Read Less";
        } else if ((pReadMore2.style.display === "block") && (readMoreButton2.textContent === "Read Less")) {
            pReadMore2.style.display = "none";
            readMoreButton2.textContent = "Read More...";
        }
    }

    //register the event handlers
    readMoreButton1.addEventListener("click", show_Hide_1);
    readMoreButton2.addEventListener("click", show_Hide_2);
}

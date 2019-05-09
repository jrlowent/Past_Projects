window.onload = function() {

    function backFromSearch() {
        window.history.back();
    }

    let searchBackButton = document.getElementById("back_from_search");
    searchBackButton.onclick = backFromSearch; //register event handler with onblur event
};
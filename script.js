function searchTag() {
    var searchbar, filter, tagList, li, span, i, txtValue;
    searchbar = document.getElementById("searchbar");
    filter = searchbar.value.toUpperCase();
    tagList = document.getElementById("tagList");
    li = tagList.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        span = li[i].getElementsByTagName("span")[0];
        txtValue = span.textContent || span.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
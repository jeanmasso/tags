function searchTag() {
    var searchbar, filter, tagList, div, a, i, txtValue;
    searchbar = document.getElementById("searchbar");
    filter = searchbar.value.toUpperCase();
    tagList = document.getElementById("searchTagList");
    div = tagList.getElementsByTagName("div");
    for (i = 0; i < div.length; i++) {
        a = div[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            div[i].style.display = "";
        } else {
            div[i].style.display = "none";
        }
    }
}

function createTag() {
    var newTag = $("#newTag").val();
    var newTagColor = $("#newTagColor").val();
    if (newTag === "") return ''; else {
        $("#searchTagList").append(`
            <div class="tag p-1"><a href="#" class="dropdown-item badge m-0" style="background-color: ${newTagColor}; color: white;">${newTag} <i class="fas fa-times"></i></a></li>
        `);
        $("#modalTagList").append(`
            <div class="tag p-1"><a href="#" class="dropdown-item badge m-0" style="background-color: ${newTagColor}; color: white;">${newTag} <i class="fas fa-times"></i></a></div>
        `);
        $("#newTag").val("");
    };
}

$(document).on("click", ".badge i", function(){
    $(".badge").parent(".tag").remove();
});


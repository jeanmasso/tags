var j = 0;

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

$("#createTag").click(function() {
    var newTag = '<div class="tag'+j+' p-1"><a href="#" class="dropdown-item badge m-0" style="background-color: '+$("#newTagColor").val()+'; color: white;">'+$("#newTag").val()+' <i onclick="removeTag('+j+')" class="fas fa-times"></i></a></li>';
    if ($("#newTag").val() === "") return ''; else {
        j = j;
        $("#searchTagList").append(newTag);
        $("#modalTagList").append(newTag);
        $("#newTag").val("");
        j++;
    };
})

function removeTag(param) {
    $(".badge").parent(".tag"+param).remove();
}

// $(document).on("click", ".badge i", function(){
//     $(".badge").parent(".tag"+j).remove();
// });







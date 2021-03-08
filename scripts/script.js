/* Initiate of multiple variable */
var tagName, tagColor, btnCreate, containerTags, createTag;
tagName = document.getElementById('nameTag');
tagColor = document.getElementById('colorTag');
btnCreate = document.getElementById('createTag');
containerTags = document.getElementById('containerTags');
createTag = document.getElementById('formCreateTag');

var j = 0; // Variable to control identity of tags

/* Create tags */
createTag.addEventListener('submit', function (event) {
    event.preventDefault();
    let contentTag = document.createElement('div');
    contentTag.setAttribute('class', 'tag tag-'+ j +' m-2')
    let newTag = '<a href="#" class="badge text-white px-2" style="background-color: '+ tagColor.value +'">'
        + tagName.value + '<i class="fa fa-times ml-2 mr-1 my-1" onclick="deleteTag()"></i> '
        + '</a>';
    contentTag.innerHTML = newTag;
    j++;
    containerTags.appendChild(contentTag);
})

/* Remove tags */
function deleteTag() {
    this.remove();
}


function validasi()
{
    let txtPost = document.getElementById("create-post").value.trim();
    if (txtPost.length > 50) {
        alert("Post cannot be more than 50 characters");
        return false
    }
    else {
        alert("Text successfully posted")
    }

    return true;
}
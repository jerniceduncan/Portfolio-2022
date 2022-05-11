const blogPost=["hello", "world"];


//add to blogs
addToBlogs("new");

//delete from Blogs
deleteFromBlogs(0);

//map Blogs
blogPost.map((blog) => console,log(blog));

console.log(blogPost);
//Create Functions

function addToBlogs(text){
    //blogPost.push(text);

    blogPost = [...blogPost, text];

    //try to add to mongodb
    //if success:
    setState(blogPostCopy);
    //otherwise show err

}
//delete
function deleteFromBlogs(index){
    const blogPostCopy = [...blogPost];

    blogPostCopy.splice(index, 1);
    setState(blogPostCopy);

    console.log('something is going to happen =>', blogPostCopy)
}
 //edit Blog
function updateBlog(index,text){
    const blogPostCopy
}



function setState(newState){
    blogPost = newState;
}



console.log("hello world")
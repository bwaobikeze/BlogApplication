// const videoGameBlogPost = {
//   title: "Video Game Blog Post",
//   PostDate: "Jan 1, 2023",
//   PostImage: "https://nextui.org/assets/blog-1.jpg",
//   exerp: "This is a short excerpt from the blog post.",
//   body: "This is the body of the blog post.",
// };

// const movieBlogPost = {
//   title: "Movie Blog Post",
//   PostDate: "Jan 1, 2023",
//   PostImage: "https://nextui.org/assets/blog-1.jpg",
//   exerp: "This is a short excerpt from the blog post.",
//   body: "This is the body of the blog post.",
// };

// const bookBlogPost = {
//   title: "Book Blog Post",
//   PostDate: "Jan 1, 2023",
//   PostImage: "https://nextui.org/assets/blog-1.jpg",
//   exerp: "This is a short excerpt from the blog post.",
//   body: "This is the body of the blog post.",
// };

// const postList = [videoGameBlogPost, movieBlogPost, bookBlogPost];

// export default postList;

class PostModel{ 
    constructor(title, PostDate, PostImage, exerp, body) {
        this.title = title;
        this.PostDate = PostDate;
        this.PostImage = PostImage;
        this.exerp = exerp;
        this.body = body;
    }
}

export default PostModel;
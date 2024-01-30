const loadPost = () => {
    fetch("https://post-2-drf.onrender.com/post/list/")
        .then((res) => res.json())
        .then((data) => displayPost(data))
        .catch((err) => console.log(err));
};
const displayPost = (posts) => {
    console.log(posts);
    posts.forEach((post) => {
        const parent = document.getElementById("posts-container");
        const article = document.createElement("article");
        article.classList.add("box")
        article.classList.add("excerpt")
        article.innerHTML = `
        <a href="#" class="image left custom-img"><img src="${post.post_image}" alt="" /></a>
        <div>
            <header>
                <span class="date">Date</span>
                <h3><a href="#">${post.caption}</a></h3>
            </header>
            <p>${post.body}</p>
            <a href="right-sidebar.html?post_id=${post.id}">Details</a>
        </div>
        `;
        parent.appendChild(article);
    });
};
loadPost()

const getparams = () => {
  const param = new URLSearchParams(window.location.search).get("post_id");
  fetch(`http://127.0.0.1:8000/post/list/${param}/`)
    .then((res) => res.json())
    .then((data) => displayDetails(data));
};
const displayDetails = (post) => {
  const parent = document.getElementById("content");
  const article = document.createElement("article");
  article.innerHTML = `
  <header class="major">
  <h2> ${post.caption}</h2>
  <p>${post.created_on}</p>
</header>
<span class="image featured"><img src="${post.post_image}" alt="" /></span>
<p> ${post.caption}</p>
<h3></h3>
<p>${post.body}</p>
      `;
  parent.appendChild(article);

};
getparams()
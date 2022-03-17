async function showPosts(){
    const divEl = document.getElementById('results');
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts');
    const postsResp = await posts.json();
    console.log(postsResp);
    
     const postsResult = postsResp.map((post, i) => {
        const title = post.title;
        const liEl = document.createElement('li');
        liEl.innerText = title;
        divEl.appendChild(liEl);
        return liEl;
    })
}

showPosts();
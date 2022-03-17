async function demo(){
    try{
    const divEl = document.getElementById('results');
    const users = await fetch('users.json');
    const usersResp = await users.json();
    console.log(usersResp);

    const gitUsers = await Promise.all(usersResp.map(async user=> {
        const gitUsersResp = await fetch(`https://api.github.com/users/${user.username}`);
        const gitUser = await gitUsersResp.json();
        return gitUser;
    }))
    console.log(gitUsers);
    const images = gitUsers.map(u => {
        const img = new Image();
        img.src = u.avatar_url
        divEl.appendChild(img);
        return img;
    })
    await new Promise((resolve, reject) => {
        setTimeout(resolve, 5000);
    })
    images.forEach(img => divEl.removeChild(img));
}catch(err){
    console.log(`Error: ${err}`);
}finally{
    console.log('Finished!');
}
}
demo();
 function showPicture(){
     const div = document.getElementById("results")
     fetch("users.json")
     .then(data => data.json())
     .then(users => {
        for(var i in users){
            const username = users[i].username
            fetch(`https://api.github.com/users/${username}`)
            .then(data => data.json())
            .then(user => {
            const img = new Image();
            img.src = user.avatar_url;
            div.appendChild(img);
            return new Promise((resolve,reject) => {
                 setTimeout(resolve, 1000, img);
             }).then(img => div.removeChild(img))
         });
        }
     })
    }
 showPicture();
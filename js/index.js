document.addEventListener("DOMContentLoaded",function(){
    const submit=document.getElementById('github-form')
    submit.addEventListener('submit', handleSubmit )
    })
    
    function handleSubmit(event){
        event.preventDefault();
        const inputName =document.getElementById('search');
        let userName = inputName.value
    
    
        // console.log(userName);
        fetch(`https://api.github.com/search/users?q=${userName}`,{
        
  headers: {
    Authorization: `Bearer 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`,
  },
})
        .then(function (response){
        return response.json();
    })
     .then(function(data){
        //console.log(data);
        data.items.forEach(function(user){
            const displayList=document.getElementById('user-list');
            const list=document.createElement('li')
            list.innerHTML=`
            <a href="${user.repos_url}"><h2 id='identify'>${user.login}</h2></a>
            <img src="${user.avatar_url}" alt="Avatar" >
            <a href="${user.html_url}" target="_blank">View Profile</a>
            <button id='btn'> View Details </button>

         `
        
         displayList.appendChild(list);
         const button = document.getElementById('btn')
         button.addEventListener('click', handleClick(userName))
     })
     })
    }

    const accountName = document.getElementById('identify')
    console.log(accountName)
    


    function handleClick(userName){
       // event.preventDefault();
        fetch(`https://api.github.com/users/${userName}/repos`,{
        
        headers: {
          Authorization: `Bearer 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`,
        },
      })    
        .then(function (response) {
            return response.json()
        })    
        .then(function (data){
           console.log(data)
            let foundRepos = data.items;
            console.log(foundRepos);

            for (let repo of data){
                const repos = document.getElementById('repos-list')
                const card = document.createElement('div')
                const repoList = document.createElement('li')
                card.className = "user-repos"
                repoList.innerHTML=`${repo.full_name}`

                
                repos.append(repoList)

            }

            // foundRepos.forEach(function(){
            //     const repos = document.getElementById('repo-list')
            //     const card = document.createElement('div')
            //     const repoList = document.createElement('li')
            //     card.className = "user-repos"
            //     li.innerHTML=`${repos.html_rul}`

                
            //     repos.appendChild('user-repos')
            // }
            // )
        
     })
  }
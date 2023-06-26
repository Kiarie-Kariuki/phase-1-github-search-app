document.addEventListener("DOMContentLoaded",function(){
    const submit=document.getElementById('github-form')
    submit.addEventListener('submit', handleSubmit )
    })
    
    function handleSubmit(event){
        event.preventDefault();
    const inputName =document.getElementById('search');
    
    
    let userName= inputName.value
        // console.log(userName);
        fetch(`https://api.github.com/search/users?q=${userName}`)
        .then(function (response){
        return response.json();
    })
     .then(function(data){
        console.log(data);
        data.items.forEach(function(user){
            const displayList=document.getElementById('user-list');
            const list=document.createElement('li')
            list.innerHTML=`
            <a href="${user.repos_url}"><h2>${user.login}</h2></a>
            <img src="${user.avatar_url}" alt="Avatar" >
            <a href="${user.html_url}" target="_blank">View Profile</a>
         `
         displayList.appendChild(list);
     })
     })
    }
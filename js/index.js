function searchGitHub() {
    const searchInput = document.getElementById('search-input').value;
    const userSearchUrl = `https://api.github.com/search/users?q=${searchInput}`;
  
    // Send a GET request to the User Search Endpoint to search for users
    fetch(userSearchUrl)
      .then(response => response.json())
      .then(data => {
        // Process the search results and display them on the page
        const users = data.items;
        for (const user of users) {
          // Create HTML elements to display the user information
          const userLink = document.createElement('a');
          userLink.href = user.html_url;
          userLink.innerText = user.login;
  
          const avatarImg = document.createElement('img');
          avatarImg.src = user.avatar_url;
  
          const userDiv = document.createElement('div');
          userDiv.appendChild(avatarImg);
          userDiv.appendChild(userLink);
  
          // Append the user information to
  


          <!-- index.html -->

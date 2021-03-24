function displaydata(data){
    
    const list = document.getElementById('list');
    const sdata = data.data.AnimeSearch.media;
    sdata.forEach(function(element) {
        list.insertAdjacentHTML( 'beforeend',`<div class="anime-box"><img src="${element.coverImage.large}"></img>
        <a href="${element.siteUrl}" target="_blank">${element.title.english||element.title.userPreferred}</a></div>`);
    });
}



var query = `
query ($query: String) {
    AnimeSearch: Page {
        media(search: $query, type: ANIME, sort: SCORE_DESC
) {
  				
          id
          trending
          siteUrl
          title {
            userPreferred
            english
          }
          coverImage {
            large
          }
        }
      }
  }
`;

var url = 'https://graphql.anilist.co',
    options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            query: query
        })
    };

// Make the HTTP Api request
fetch(url, options).then(handleResponse)
    .then(handleData)
    .catch(handleError);

function handleResponse(response) {
    return response.json().then(function (json) {
        return response.ok ? json : Promise.reject(json);
    });
}

function handleData(data) {
    console.log(data);
    displaydata(data);
}

function handleError(error) {
    alert('Error, check console');
    console.error(error);
}


let contentElement = document.getElementById('gallery');

function fetchAndGetPhotos() {
  const responsePromise = fetch('https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=17724440c19a7f2276c841462e832525&photoset_id=72157622614684313&user_id=11126789%40N08&format=json&nojsoncallback=1')
  responsePromise.then((response) => {
      return response.json();
    })
    .then((responseObject) => {
      let photos = responseObject.photoset.photo;
      for (var photo of photos) {
        let imgItem = document.createElement('img');
        let captionItem = document.createElement('figcaption');
        let figureItem = document.createElement('figure');
        let photoID = photo.id;
        let photoDesc = photo.title;
        let photoFarm = photo.farm;
        let photoServerID = photo.server;
        let photoSecret = photo.secret;
        imgItem.setAttribute("src", `https://farm${photoFarm}.staticflickr.com/${photoServerID}/${photoID}_${photoSecret}_z.jpg`);
        imgItem.setAttribute("alt", photoDesc);
        imgItem.setAttribute("title", photoDesc);
        captionItem.innerHTML = photoDesc;
        figureItem.appendChild(imgItem);
        figureItem.appendChild(captionItem);
        contentElement.appendChild(figureItem);
      }

  });

} 

fetchAndGetPhotos();


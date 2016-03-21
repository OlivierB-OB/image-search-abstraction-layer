Olivier BERNARD 's Image Search Abstraction Layer
===

User stories:

1.  I can get the image URLs, alt text and page urls for a set of images relating to a given search string.
1.  I can paginate through the responses by adding a ?offset=2 parameter to the URL.
1.  I can get a list of the most recently submitted search strings.

Example usage:

*   [https://image-search-abstraction-layer.herokuapp.com/search/cat](https://image-search-abstraction-layer.herokuapp.com/search/cat)
*   [https://image-search-abstraction-layer.herokuapp.com/search/cat?offset=2](https://image-search-abstraction-layer.herokuapp.com/search/cat?offset=2)
*   [https://image-search-abstraction-layer.herokuapp.com/history](https://image-search-abstraction-layer.herokuapp.com/history)

Example output:

*   [{"url":"http://3.bp.blogspot.com/-WHW5J1uTTCY/UERgSSUImII/AAAAAAAAAMk/JrIBdXHajj0/s1600/Cat+Pictures+8.jpg","title":"Free Cat Wallpaper, Cute Cat Pictures, Animal Desktop Backgrounds","thumb":"http://ts2.mm.bing.net/th?id=OIP.M7cf9f637bad11855cde346ba3f8cddb1o0&pid=15.1","context":"http://onlinewallpapersstore.blogspot.com/2012/09/cat-pictures-cat-photos-cat-wallpaper.html"}, ... ]
*   [{"date":"2016-03-21T11:06:18.684Z","query":"cat"},{"date":"2016-03-21T11:06:27.855Z","query":"cat"}]
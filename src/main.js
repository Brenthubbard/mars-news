import $ from 'jquery';
import MarsService from'./js/mars-service';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';








  $('#submit').on('click',(event) => {
    event.preventDefault();
    MarsService.getNews()
      .then(function (response) {
        showNews(response);
    })
  });
const showNews = (response) => {
  if (response.photos) {
    console.log(response.photos[1].img_src)
    let img = response.photos[1].img_src;
    $('#img').append(`<img src="${img}" alt="${img}">`);
  }
};
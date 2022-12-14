const nasa = require('../API/nasa');
const url = nasa.url;
const key = nasa.key;
const fetch = require('node-fetch');

exports.landing = (req, res) => {
    
    let api = `${url}planetary/apod?${key}`;
    
    fetch(api)
    .then(response => response.json())
    .then(data => {
        imgDay(data);

/*        res.render('index', {
            title: 'AstroBext - CrissMaldonadoH',
            h1: data.title,
            explanation: data.explanation,
            picToday: data.url
        });*/
    })
    .catch(err => {
        console.log(err);
    })

    function imgDay(data){

        apiGallery = `${url}mars-photos/api/v1/rovers/curiosity/photos?sol=1000&${key}`;
        fetch(apiGallery)
        .then(response => response.json())
        .then(dataGallery =>{

            let gallery =[]

            for( i = 0; i < dataGallery.photos.length; i++ ){
                
                gallery.push(dataGallery.photos[i].img_src);

            }

           
            res.render('index', {
                title: 'AstroBext - CrissMaldonadoH',
                h1: data.title,
                explanation: data.explanation,
                picToday: data.url,
                gallery: gallery
            });
        })
    }

}
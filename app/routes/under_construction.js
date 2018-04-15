import express from 'express';
import nodemailer from 'nodemailer';
const under_construction = express.Router();

// map to name and url
const iconMapper = (name, url) => {
    return { name, url }
};

/* GET home page for under_construction. */
under_construction.get('/', (req, res, next) => {
  res.render('under_construction',
      {
          title: 'EMG - sitio en construcción',
          logo: {
              url: '/images/logo.png',
              alt: 'Esquel mountian guide'
          },
          text: {
              construction: 'Sitio en construcción'
          },
          contacts: {
              mail: iconMapper('mail', 'mailto:esquelmountainguides@gmail.com'),
              instagram: iconMapper('instagram', 'https://www.instagram.com/EsquelMountainGuides/'),
              facebook: iconMapper('facebook', 'https://www.facebook.com/EsquelMountainGuides'),
          }
      }
  );
});

under_construction.post('/send', (req, res, next) => {
    res.send({
        send: true
    });
});

export default under_construction;

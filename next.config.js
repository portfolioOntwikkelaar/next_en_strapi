const nextTranslate = require('next-translate')



module.exports = nextTranslate({
  i18n: {
    localeDetection: false,
    locales: ['en', 'nl'], 
    defaultLocale: 'nl',
},
  images: {
    domains: ['res.cloudinary.com'],
  },
  
})


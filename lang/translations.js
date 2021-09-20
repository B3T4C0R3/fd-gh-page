import axios from 'axios'
export default async (context, locale) => {
  return await axios
    .get(`https://api.betacore.nl/language/6144c433480fdfd00c3ec13a`)
    .then(res => {
      var language = res.data.find(language => language.code === locale)
      return language.translations
    })
}

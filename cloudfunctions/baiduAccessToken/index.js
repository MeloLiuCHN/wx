const rq = require('request-promise')
// 
/**
 * 获取百度ai AccessToken
 */
exports.main = async(event, context) => {
  let apiKey = 'VFFtTfFZn83wUNTTnProKEcH',
    grantType = 'client_credentials',
    secretKey = 'Nqd4f3GN3peo1m3zEretV78R9pefqQG1',
    url = `https://aip.baidubce.com/oauth/2.0/token`

  return new Promise(async(resolve, reject) => {
    try {
      let data = await rq({
        method: 'POST',
        url,
        form: {
          "grant_type": "client_credentials",
          "client_secret": "Nqd4f3GN3peo1m3zEretV78R9pefqQG1",
          "client_id": "VFFtTfFZn83wUNTTnProKEcH"
        },
        json: true
      })
      resolve({
        code: 0,
        data,
        info: '操作成功！'
      })
    } catch (error) {
      console.log(error)
      if (!error.code) reject(error)
      resolve(error)
    }
  })
}
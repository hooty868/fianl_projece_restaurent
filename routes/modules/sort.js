const express = require('express')
const router = express.Router()
// const querystring = require('querystring');

const restaurantList = require('../../models/resList')

router.get('/', (req, res) => {
  const type = req.query.by
  const method = req.query.orderBy
  restaurantList.find()
    .lean()
    .sort({ [type]: method })
    .then(restaurants => res.render('index', { restaurants })) // 將資料傳給 index 樣板
    .catch(error => console.error(error)) // 錯誤處理
})

module.exports = router

const express = require('express')
const router = express.Router()

const restaurantList = require('../../models/resList')

router.get('/:type/:method', (req, res) => {
  const type = req.params.type
  const method = req.params.method
  restaurantList.find()
    .lean()
    .sort({ [type]: method })
    .then(restaurants => res.render('index', { restaurants })) // 將資料傳給 index 樣板
    .catch(error => console.error(error)) // 錯誤處理
})

module.exports = router

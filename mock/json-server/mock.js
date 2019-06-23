let user = require('./user')

let Mock = require('mockjs')

const Random = Mock.Random

const tableData = Mock.mock({
  'items|30': [{
    id: '@id',
    title: '@sentence(10, 20)',
    'status|1': ['published', 'draft', 'deleted'],
    author: 'name',
    display_time: '@datetime',
    pageviews: '@integer(300, 5000)'
  }]
})

module.exports = function () {
  const userData = user()
  var data = {
    ...userData
  }
  data.tables = tableData.items
  return data
}

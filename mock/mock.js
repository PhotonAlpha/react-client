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
  var data = {}
  data.user = {
    'name': Random.cname(),
    'intro': Random.word(20)
  }
  data.tables = tableData.items
  return data
}

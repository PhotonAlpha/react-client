import Mock from 'mockjs'

const data = Mock.mock({
  'items|30': [{
    id: '@id',
    title: '@sentence(10, 20)',
    'status|1': ['published', 'draft', 'deleted'],
    author: 'name',
    display_time: '@datetime',
    pageviews: '@integer(300, 5000)'
  }]
})

const userInfo = Mock.mock('/api/user', {
  'name': '@cname',
  'intro': '@word(20)'
})

function tableList() {
  const items = data.items
  return {
    code: 20000,
    data: {
      total: items.length,
      items: items
    }
  }
}
function getUserInfo() {
  return userInfo
}

export { tableList, getUserInfo }

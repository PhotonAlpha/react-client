import Mock from 'mockjs'

import { tableList, getUserInfo } from './table'


// Mock.mock(/\/api\/mock(|\?\S*)$/, 'post', creatPostMock)

// Mock.mock(/\/api\/table\/list(|\?\S*)$/, 'get', tableList)
// Mock.mock(/\/api\/user\/info*$/, 'get', getUserInfo)

Mock.mock(/\/api\/user*$/, 'post', {
  'name': '@cname',
  'intro': '@word(20)'
})

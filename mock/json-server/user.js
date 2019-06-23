let Mock = require('mockjs')

const tokens = {
  admin: {
    token: 'admin-token'
  },
  editor: {
    token: 'editor-token'
  }
}

const users =  Mock.mock({
  'admin-token': {
    roles: ['admin'],
    introduction: 'I am a super administrator',
    avatar: '',
    name: 'Super Admin',
    intro: '@word(20)'
  },
  'editor-token': {
    roles: ['editor'],
    introduction: 'I am an editor',
    avatar: '',
    name: 'Normal Editor',
    intro: '@word(20)'
  }
})

module.exports = () => {
  return {
    login: {
      ...tokens
    },
    info: {
      ...users
    },
    logout: {
      code: 20000,
      data: 'success'
    }
  }
}

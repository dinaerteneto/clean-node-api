import components from './components'
import schemas from './schemas'
import paths from './paths'

export default {
  openapi: '3.0.0',
  info: {
    title: 'Clean Node Api',
    description: 'Api do curso do mango pra realizar enquete entre programadores',
    version: '1.0.0'
  },
  license: {
    name: 'GPL-3.0-or-later',
    url: 'https://spdx.org/licenses/GPL-3.0.html'
  },
  servers: [
    { url: '/api' }
  ],
  tags: [
    { name: 'Login' },
    { name: 'Enquete' }
  ],
  paths,
  schemas,
  components
}

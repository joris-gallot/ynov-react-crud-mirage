import { createServer, Model } from 'miragejs'

export const Server = () => {
  createServer({
    models: {
      user: Model,
    },

    routes() {
      this.namespace = 'api'

      this.get('/users', (schema, request) => {
        return schema.users.all()
      })

      this.post('/users', (schema, request) => {
        const attrs = JSON.parse(request.requestBody)
        return schema.users.create(attrs)
      })

      this.patch('/users/:id', (schema, request) => {
        let newAttrs = JSON.parse(request.requestBody)
        let id = request.params.id
        let user = schema.users.find(id)

        return user.update(newAttrs)
      })

      this.delete('/users/:id', (schema, request) => {
        let id = request.params.id

        return schema.users.find(id).destroy()
      })
    },

    seeds(server) {
      server.create('user', { name: 'Jean' })
      server.create('user', { name: 'Patrick' })
      server.create('user', { name: 'Simon' })
    },
  })
}

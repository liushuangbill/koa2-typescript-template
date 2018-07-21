import request from 'supertest'
import App from '../src/app'

describe('test', () => {
  let app = App.listen(process.env.TESTPORT)

  afterAll(async () => {
    await app.close()
  })

  it("should return 200 OK", (done) => {
    return request(app)
      .post('/')
      .expect(200, done)
  })
})

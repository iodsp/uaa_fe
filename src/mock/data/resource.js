import Mock from 'mockjs'
const ResourceData = []

for (let i = 0; i < 100; i++) {
  ResourceData.push(Mock.mock({
    id: Mock.Random.word(),
    name: Mock.Random.csentence(10, 30)
  }))
}
export default ResourceData

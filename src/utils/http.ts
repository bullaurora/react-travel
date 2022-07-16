import axios from 'axios'
//得到产品列表
axios.defaults.headers['x-icode'] = 'D52302469427AE54'
export const getProductList = async () => {
  return axios
    .get('http://123.56.149.216:8080/api/productCollections')
    .then((res) => {
      return res.data
    })
}
export const fetchData = async (touristRouteId) => {
  return axios
    .get(`http://123.56.149.216:8080/api/touristRoutes/${touristRouteId}`)
    .then((res) => {
      return res.data
    })
}

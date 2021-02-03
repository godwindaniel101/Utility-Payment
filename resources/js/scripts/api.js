import axios from 'axios'
export const axiosControl = () => {
  axios.interceptors.request.use(request => {
    const access_token = localStorage.getItem("token")
    if (access_token) {
      request.headers.common['Authorization'] = `Bearer ${access_token}`
    }
    return request
  })
  axios.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    if (error.response.status == 401) {
        //check for attempt on unauthorized routes
      localStorage.clear();
      window.location = "/login?prev_href="+window.location.href;
      return response;
    }
    if (!window.navigator.onLine) {
       window.location = "/oops";
      return response;
    }
    return response;
  });
}
export default axiosControl();
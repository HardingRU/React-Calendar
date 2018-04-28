import axios from 'axios';

class Services {

  addEvent(eventData) {
    return axios({
      method: 'post',
      url: `/api/events/`,
      data: eventData
    })
  }

  getEvents() {
    return axios({
      method: 'get',
      url: `/api/events/`,
    })
  }

}

export default new Services();

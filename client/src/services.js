import axios from 'axios';

class Services {

  addEvent(eventData) {
    console.log("inside services")
    return axios({
      method: 'post',
      url: `/api/events/`,
      data: eventData
    })
  }

}

export default new Services();

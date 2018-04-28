import axios from 'axios';

class Services {

  addEvent(eventData) {
    return axios({
      method: 'post',
      url: `/api/event/add`,
      data: eventData
    })
  }

}

export default new Services();

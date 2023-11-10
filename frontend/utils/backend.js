import axios from 'axios';

// FUNCTION TO GET SUBSCRIPTIONS
export async function getSubscriptions() {
    const { data } = await axios.get('/api/subscriptions');
    return data;

}

// FUNCTION TO CREATE A NEW SUBSCRIPTION
export async function createSubscription(subscription) {
    const { data } = await axios.post('/api/subscriptions', subscription);
    return data;

}

// FUNCTION TO UPDATE AN EXISTING SUBSCRIPTION
export async function updateSubscription(id, subscription) {
    const { data } = await axios.put(`/api/subscriptions/${id}`, subscription);
    return data;
}

// FUNCTION TO DELETE A SUBSCRIPTION BY ID
export async function deleteSubscription(id) {
    const { data } = await axios.delete(`/api/subscriptions/${id}`);
    return data;

}

//CREATE PHISHING ATTEMPT
export async function createPhishingAttempt(phishingAttempt) {
      const { data } = await axios.post('/api/phishing', phishingAttempt);
      return data;
  }
  
//GET PHISHING ATTEMPT
  export async function getPhishingAttempts() {
      const { data } = await axios.get('/api/phishing');
      return data;
  }
  
//UPDATE
  export async function updatePhishingAttempt(id, phishingAttempt) {
      const { data } = await axios.put(`/api/phishing/${id}`, phishingAttempt);
      return data;
  }
  
//DELETE
  export async function deletePhishingAttempt(id) {
      const { data } = await axios.delete(`/api/phishing/${id}`);
      return data;
  }
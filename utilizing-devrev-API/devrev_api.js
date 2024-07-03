const axios= require('axios');
const fs = require('fs');
// Personal Access token
const token = 'eyJhbGciOiJSUzI1NiIsImlzcyI6Imh0dHBzOi8vYXV0aC10b2tlbi5kZXZyZXYuYWkvIiwia2lkIjoic3RzX2tpZF9yc2EiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOlsiamFudXMiXSwiYXpwIjoiZG9uOmlkZW50aXR5OmR2cnYtaW4tMTpkZXZvLzIxMWJ2bXNJSHo6ZGV2dS8xIiwiZXhwIjoxNzUxMzc4MjQ2LCJodHRwOi8vZGV2cmV2LmFpL2F1dGgwX3VpZCI6ImRvbjppZGVudGl0eTpkdnJ2LXVzLTE6ZGV2by9zdXBlcjphdXRoMF91c2VyL2xpbmtlZGlufEFIcXl1dEV6ejkiLCJodHRwOi8vZGV2cmV2LmFpL2F1dGgwX3VzZXJfaWQiOiJsaW5rZWRpbnxBSHF5dXRFeno5IiwiaHR0cDovL2RldnJldi5haS9kZXZvX2RvbiI6ImRvbjppZGVudGl0eTpkdnJ2LWluLTE6ZGV2by8yMTFidm1zSUh6IiwiaHR0cDovL2RldnJldi5haS9kZXZvaWQiOiJERVYtMjExYnZtc0lIeiIsImh0dHA6Ly9kZXZyZXYuYWkvZGV2dWlkIjoiREVWVS0xIiwiaHR0cDovL2RldnJldi5haS9kaXNwbGF5bmFtZSI6InJhdGhvdXIyM2Fhc2hpMDgiLCJodHRwOi8vZGV2cmV2LmFpL2VtYWlsIjoicmF0aG91cjIzYWFzaGkwOEBnbWFpbC5jb20iLCJodHRwOi8vZGV2cmV2LmFpL2Z1bGxuYW1lIjoiQWFzaGkgUmF0aG91ciIsImh0dHA6Ly9kZXZyZXYuYWkvaXNfdmVyaWZpZWQiOnRydWUsImh0dHA6Ly9kZXZyZXYuYWkvdG9rZW50eXBlIjoidXJuOmRldnJldjpwYXJhbXM6b2F1dGg6dG9rZW4tdHlwZTpwYXQiLCJpYXQiOjE3MTk4NDIyNDYsImlzcyI6Imh0dHBzOi8vYXV0aC10b2tlbi5kZXZyZXYuYWkvIiwianRpIjoiZG9uOmlkZW50aXR5OmR2cnYtaW4tMTpkZXZvLzIxMWJ2bXNJSHo6dG9rZW4vc2xwMWFuVFgiLCJvcmdfaWQiOiJvcmdfZFliVk1BSTd4NTlLTnhMMyIsInN1YiI6ImRvbjppZGVudGl0eTpkdnJ2LWluLTE6ZGV2by8yMTFidm1zSUh6OmRldnUvMSJ9.GXHEj-SalwNfUyAVx-q3cwCYdjkaduKHEAGEDFoOKd3I3UeOiYG6V9HOfaw_AO0p_7DlYXle6z--dgDOrkekeBCtdupS6ziMEOCZFHJwRaB7A_j9cO2pJ8gDw8em97qEOE-GudRGTYtw0v5sPEaUHE-vIIycvy-SiTzE8vvefjhZPPGcxkxKMQhiUGRHDL45c0SybyN7venb2qOptfjxmWsRXeVvf_zu-vSXfyA2HvRTPgjTjU6bFevPyQlmr1Crt9nkZuZajg0W00DeyUlo-kfNBvzP62SUvHiyPM1Vp9WzBUUz3VaOF-582zQsWcnlAr9sopv3UpUBrpoHctSMEw';
// original URL
const url= 'https://api.devrev.ai/dev-users.self';
//part Id of devrev potal
const partId='don:core:dvrv-in-1:devo/211bvmsIHz:product/2';
const workid='Iss-15';
const deleteWorkItem= 'ISS-7';
let devUserID= 'don:identity:dvrv-in-1:devo/211bvmsIHz:devu/1';
// account Authentication and Authorization
const headers = {
    'Authorization': token,
    'Content-Type': 'application/json'
};

// fetch dev user information
const fetchData = async () => {
  try {
    const response = await axios.get(url, { headers });
    const data = response.data;

      console.log(data.dev_user.id);
        fs.writeFile('work_item_data.json', JSON.stringify(data, null, 2), (err) => {
            if (err) {
                console.error('Error writing to file', err);
            } else {
                console.log('Data successfully written to work_item_data.json');
            }
          
        });  

        
      }catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData()

// create a work item data for Issue and Ticket

    const workItemData = {
      type: "ticket",
      applies_to_part: partId,
      owned_by:[devUserID],
      title: "testing post api"
    };
//create a works for using POST API
    axios.post('https://api.devrev.ai/works.create', workItemData, { headers })
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error(error);
    });
  

// request to fetch the list of parts by using GET API

const fetchParts = async () => {
  try {
      const response = await axios.get('https://api.devrev.ai/parts.list', { headers });
      const data = response.data;

      // Log the fetched data to the console
      console.log('Fetched Data:', data);
  } catch (error) {
      console.error('Error fetching data:', error);
  }
};

// Call the fetchParts function
fetchParts();

// request to fetch work item by using GET API
    const params = {
      id: workid
  };
  axios.get('https://api.devrev.ai/works.get', { headers, params })
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error(error);
    });

// delete a work item by using the POST API

    //   const data = {
    //     id: deleteWorkItem
    // };
    
    // axios.post('https://api.devrev.ai/works.delete', data, { headers })
    //     .then(response => {
    //         console.log(response.data);
    //     })
    //     .catch(error => {
    //         console.error(error);
    //     });

 
let devUserID="";

// const fetchData = async () => {
//   try {
//     const response = await axios.get(url, { headers });
//     const data = response.data;

//       console.log(data.dev_user.id);
//       devUserID=data.dev_user.id;
//         fs.writeFile('work_item_data.json', JSON.stringify(data, null, 2), (err) => {
//             if (err) {
//                 console.error('Error writing to file', err);
//             } else {
//                 console.log('Data successfully written to work_item_data.json');
//             }
          
//         });  

        
//       }catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };
//     fetchData()
//     .then(() => {
//       // Use the dev_user ID outside fetchData function
//       console.log('Dev User ID:', devUserID);
    
//     })
//     .catch(err => console.error('Error in fetchData:', err));

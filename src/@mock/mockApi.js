// mock-api/mockApi.js
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import keys from '../config/keys';

// Create a mock Axios instance
const mockApi = axios.create();

// Create a new instance of the Axios Mock Adapter
const mock = new MockAdapter(mockApi);

// Define mock data
const mockData = {
    items: [
        {
            id: 1,
            name: 'Item 1'
        }, {
            id: 2,
            name: 'Item 2'
        }, {
            id: 3,
            name: 'Item 3'
        },
    ]
};

const payload = {
    email: "test@email.com",
    password: "12345678"
}

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoidGVzdEBlbWFpbC5jb20iLCJpYXQiOjE2OTQ1OTkwMTAsImV4cCI6MTY5NDYwMjYxMH0.engACKa5bHIT4pF9E-93-x6vnludhoH9qncvZHvHHnk"

// Intercept GET requests to /items and return mock data
mock.onGet('/items').reply(200, mockData.items);

mock.onPost('/test').reply(config => { // Get the data from the request body

    const requestData = JSON.parse(config.data);

    // Access specific POST parameters
    const {param1, param2} = requestData;

    // Customize the response based on the POST parameters
    if (param1 === 'value1' && param2 === 'value2') {
        return [
            200, {
                message: 'Success'
            }
        ];
    } else {
        return [
            400, {
                error: 'Invalid parameters'
            }
        ];
    }
});

mock.onPost('/api/users/login').reply(config => { // Get the data from the request body
    const requestData = JSON.parse(config.data);

    // Access specific POST parameters
    const {email, password, remember} = requestData;

    // Customize the response based on the POST parameters
    if (email != "test@email.com" && password != "123123123") 
        return [400, {}]

    

    return [
        200, {
            token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoidGVzdEBlbWFpbC5jb20iLCJpYXQiOjE2OTQ2MDkxNzIsImV4cCI6MTY5NDY5NTU3Mn0.1no6OdFIMpWE6wnVskliY39y5g1PqshfMNSDkS5q5PU"
        }
    ]
});

export default mockApi;

const querystring = require('querystring');
const axios = require('axios');

exports.handler = async function (event, context) {
    const { password } = querystring.parse(event.body);

    const endpoint = `${process.env.URL}/.netlify/identity/token`;
    const data = querystring.stringify({
        grant_type: 'password',
        username: 'neo.ski@outlook.com',
        password: password,
    });
    const options = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
    };

    try {
        const response = await axios.post(endpoint, data, options);
        const access_token = response.data.access_token;

        return {
            statusCode: 302,
            headers: {
                'Set-Cookie': `nf_jwt=${access_token}; Path=/; HttpOnly; Secure`,
                'Cache-Control': 'no-cache',
                Location: '/files/',
            },
        };
    } catch (error) {
        console.log(error);
        return {
            statusCode: 200,
            headers: {
                'Cache-Control': 'no-cache',
                Location: '/files/login.html',
            },
        };
    }
};
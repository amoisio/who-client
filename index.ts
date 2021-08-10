// const fetch = require('node-fetch');
import fetch from 'node-fetch';

const url = 'https://ghoapi.azureedge.net/api/Dimension';
fetch(url)
    .then(res => res.json())
    .then(j => console.log(j.value));


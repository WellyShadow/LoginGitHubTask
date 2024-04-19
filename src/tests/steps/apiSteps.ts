import { When, Then } from "@cucumber/cucumber"
import "../../helper/wait/wait.js";
import axios from "axios";
import { expect } from "@playwright/test";

const url = 'https://jsonplaceholder.typicode.com/'

let get_response,post_response,put_response

const dataToCreate = {
    title: 'foo',
    body: 'bar',
    userId: '1',
}

const dataToUpdate = {
    id: '1',
    title: 'foo',
    body: 'bar',
    userId: '1',
}

When('I requests all posts', async function () {
    get_response= await axios.get(url + 'posts/').then(function(response){
    return response;
    }).catch(function(response){  
        return response.response;
    });
});

Then('I should get all posts', async function () {
    expect(get_response.status).toEqual(200)
});

When('I send post request to create post', async function () {
    post_response= await axios.post(url + 'posts/', JSON.stringify(dataToCreate)).then(function(response){
    return response;
    }).catch(function(response){  
        return response.response;
    });
});

Then('I should get created post', async function () {
    expect(post_response.data.id).toEqual(101)
});

When('I send put request to update post id', async function () {
    put_response= await axios.put(url + 'posts/1', JSON.stringify(dataToUpdate)).then(function(response){
    return response;
    }).catch(function(response){  
        return response.response;
    });
});

Then('I should get new post id', async function () {
    expect(put_response.data.id).toEqual(1)
});



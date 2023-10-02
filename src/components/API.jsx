import React from "react";
import { useState,useEffect } from "react";
   

const Base_URL = 'https://strangers-things.herokuapp.com/api/2302-ACC-ET-WEB-PT-A';

export const fetchPosts = async (token) =>{
  try{
    const response = await fetch(`${Base_URL}/posts`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    })
    const result = await response.json();
    console.log(result.data.posts);

    return result.data.posts;

  }catch(error){
    console.log(error)
  }
}
//username and password are variables that will be passed into the function
//these variables are obtained by the inputs of the register page
export const registerUser = async (username, password) =>{
  try{
    const response = await fetch(
      `${Base_URL}/users/register`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          username,
          password
        }
      })
    });
    const result = await response.json();

    console.log(result)
    return result.data.token;
  } catch (err) {
    console.error(err);
  }
}

export const loginUser = async (username, password) =>{
  try{
    const response = await fetch(
      `${Base_URL}/users/login`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          username,
          password
        }
      })
    });
    const result = await response.json();

    console.log(result)
    return result.data.token;
  } catch (err) {
    console.error(err);
  }
}

export const createPost = async (post, token) => {

  try {
    const response = await fetch(`${Base_URL}/posts`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        post
      })
    });
    const result = await response.json();
    console.log(result);
    return result
  } catch (err) {
    console.error(err);
  }
}

export const profileData = async (token) => {

  try {
    const response = await fetch(`${Base_URL}/users/me`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    });
    const result = await response.json();
    console.log(result);
    return result.data
  } catch (err) {
    console.error(err);
  }
}

export const deletePost = async (_id,token) => {
  try {
    const response = await fetch(`${Base_URL}/posts/${_id}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
    const result = await response.json();
    console.log(result);
    return result
  } catch (err) {
    console.error(err);
  }
}
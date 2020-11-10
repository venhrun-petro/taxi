import React from 'react'

export const today = new Date();
export const date = today.getFullYear() + "-"+ ("0" + (today.getMonth() + 1)).slice(-2) + "-" + ("0" + (today.getDate() + 1)).slice(-2);
 
export const dataContent = (
  date.split('-').reverse().map(function(el, index) {
    return <span key={index} >{el}</span>
  })
)
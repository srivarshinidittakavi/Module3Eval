// src/utils/localStorage.js
export const getRestaurants = () => {
  return JSON.parse(localStorage.getItem("evalData")) || [];
};

export const saveRestaurants = (restaurants) => {
  localStorage.setItem("evalData", JSON.stringify(restaurants));
};

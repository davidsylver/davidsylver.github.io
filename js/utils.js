/****** Utility functions *******/
export const $ = function query(selector)  {
   let result = document.querySelectorAll(selector);  
   if (result.length > 1) return result;
   else if (result.length == 1) return result[0];
   else return null;
};
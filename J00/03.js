const date = new Date();
//options = {minute: 'numeric', second: 'numeric'};
console.log("Today is: " + new Intl.DateTimeFormat("en-us", {weekday:'long'}).format(date));
console.log("Current time: " 
          + new Intl.DateTimeFormat("en-us", {hour:'numeric'}).format(date) + " " 
          + new Intl.DateTimeFormat("en-us", {minute: 'numeric'}).format(date) + " minutes " 
          + new Intl.DateTimeFormat("en-us", {second: 'numeric'}).format(date) + " seconds\n" 
          + "Current date: " 
            + Intl.DateTimeFormat("en-us".options).format(date));
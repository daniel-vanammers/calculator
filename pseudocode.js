//define global variables

entries = [];
total = 0;

temp = '';

- eval(string) can take in a string, like: "2+3*4", and return the result.

-Define an 'onclick' event that will execute your following function when a button is pressed. 
    ie. '$("button").on('click', function() {...'

// Get a number and add it to temp string ''
    
if (val is a number || is a decimal) add it to temp

// Get some symbol other than equals, add temp to our entries
// then add our current symbol and clear temp
    
// (temp string is for the current number, entries[] is for all previous symbols pushed before an = sign) 

// Write an if statement that will assign the value of a button pressed to 'val' IF it's a number OR a decimal point.

else if val === 'AC' then return an empty string ''
clearing entries [] AND temp '' and returning var total to 0

// this will clear temp and show a clear output screen

else if val === 'CE' 
(clears the temp but not entries[])

// Change multiply symbol to work with eval

else if val === 'x'
push temp to entries and clear temp

// Change divide symbol to work with eval

else if val === '/'
push temp to entries and clear temp

// Now to make the '=' function run the calculation

else if val === '='{

push temp to entries

create a variable and assign it a number ("numb") that starts at 0 (entries[0])

then make a for loop that loops through entries[]

create a variable for the "nextNumber" in the array [i+1]
create a variable for a "symbol" in the array [i]

if ("symbol" === +) {"numb" += "nextNumb" }
else if ("symbol" === -) {"numb" -= "nextNumb" }
else if ("symbol" === *) {"numb" *= "nextNumb" }
else if ("symbol" === /) {"numb" /= "nextNumb" }

increment (i++)
}

// then we need to swap the '-' so text input handles it correctly

if numb is less than 0 then use math.abs to return it to it's absolute value. 

// if (numb < 0) {
//     numb = Math.abs(nt) + '-';
//   }

zero both the entries array and the temp string 

push number to the input element

else 



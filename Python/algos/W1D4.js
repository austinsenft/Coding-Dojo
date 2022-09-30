
/* 
Given in an alumni interview in 2021.
String Encode
You are given a string that may contain sequences of consecutive characters.
Create a function to shorten a string by including the character,
then the number of times it appears. 

If final result is not shorter (such as "bb" => "b2" ),
return the original string.
*/

const str1 = "aaaabbcddd";
const expected1 = "a4b2cd3";

const str2 = "";
const expected2 = "";

const str3 = "a";
const expected3 = "a";

const str4 = "ccbb";
const expected4 = "ccbb";

const str5 = "abbbbbbbbbbbbbbbbb"
const expected5 = "ab17" 


function encodeStr(str) {
    new_str = "";
    current_count = 1;

    for (let i = 0; i < str.length; i++) {
        if (str[i] == str[i + 1]) {
            current_count++;
        }
        else {
            new_str += str[i] + (current_count > 1 ? current_count : "");
            current_count = 1;
        }
    }

    if (new_str.length < str.length) {
        return new_str;
    }
    else {
        return str;
    }
}


console.log(encodeStr(str1)) // Expected: a4bbcd3
console.log(encodeStr(str2)) // Expected: ""
console.log(encodeStr(str3)) // Expected: a
console.log(encodeStr(str4)) // Expected: bbcc
console.log(encodeStr(str5)) // Expected: ab17

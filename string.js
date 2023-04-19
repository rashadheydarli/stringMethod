// sual 1 
const string1="salam";

const cap = string1.charAt(0).toUpperCase() + string1.slice(1);
console.log(cap);
 
// sual 2

String.prototype.reverse1= function () {
    let rev="";
    for(let i=this.length-1; i>=0; i--){
        rev+=this[i];
    }
    return rev;
}

const str = "word";
console.log(str.reverse1());

// sual 3
// bu suali iki cür yazdım hansını ikisi də işləyir

// -- 1 --

// function vowUp() {
//     let n = str.length;
//     let empty="";
//     for(let i= 0; i<n; i++){
//         if(
//             str[i]==="a" ||
//             str[i]==="e" ||
//             str[i]==="i" ||
//             str[i]==="o" ||
//             str[i]==="u" 
//         ){
//             empty+=str[i].toUpperCase();
//         }else{
//             empty+=str[i];
//         }
//     }
//     return empty;
// }

// let str="hell oldu";
// let result= vowUp(str);
// console.log(result);

// String.prototype.capVowel = function() {
//     const vowel = str.replace(/[aeiou]/gi.toUpperCase());
// }
// const str ="salam";
// console.log(str);

//-- 2 --

// String.prototype.capVowel = function() {
//     let reg = /[aeiou]/gi;
    
//     const result = this.replace(reg, function(vowels){
//         vowels = vowels.toLocaleUpperCase();
//         return vowels;
//     });
//     return result;
    
// }
// const str="hell oldu";

// console.log(str.capVowel());
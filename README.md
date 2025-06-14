# create-complimentary-string
Return the other complementary side of the string, after receiving one side of the DNA string.

https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/javascript

7 kyu
Complementary DNA

Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more: http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

Example: (input --> output)

"ATTGC" --> "TAACG"
"GTAT" --> "CATA"

_______________________________________________________________________________________________________________________________________________________________________________


Turn the string to an array
Loop through the string
Use Map( ) to transform the data
Use if statement within Map() to inlcude multiple directions


________________________________________________________________________

function dnaStrand(dna){
  const string = dna.split("").map(num => {
    if (num === "A") {
      return "T";
    } else if (num === "T") {
      return "A";
    } else if (num === "C") {
      return "G";
    } else if (num === "G") {
      return "C";
    }
 
  }
  )
  
  return string.join("");
}

___________________________________________________________________________


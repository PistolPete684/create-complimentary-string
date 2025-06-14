function dnaStrand(dna){
  // split the string into an array
  // use the map method to locate and transform specific letters
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
  // join the new array back into a string and return it
  return string.join("");
}
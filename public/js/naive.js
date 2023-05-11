function naiveSearch(string, substring){
    if(substring === "") return 0
    let count = 0;
  
  for(let i =0; i < string.length; i++){
    let j = 0
    for(; j < substring.length ; j++){
        if(string[i] !== substring[i + j]){
        break
        }

       
    }

    if(j === substring.length - 1){
        count++;
            
    }
  }
}
module.exports = {naiveSearch};

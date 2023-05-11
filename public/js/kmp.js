function KMPtable(pattern){
    let LPS = [0]
    let i =0;
    let j = 0;
    while( i < pattern.length){
        if(pattern[i] === pattern[j]){
            i++;
            j++;
           LPS[i] = j
        }else if(j > 0){
            j = LPS[j-1]
        }else{
            i+=1;
            LPS[i] = 0
        }
    }

    return LPS
}

function KMPsearch (text, substring){
    let i = 0;
    let j = 0;
    let LPStable = KMPtable(substring)
    while ( i < text.length && j < substring.length){
        if(text[i] === substring[j]){
            i++;
            j++;
           LPStable[i] = j
        }else if(j > 0){
            j = LPStable[j-1]
        }else{
            i+=1;
            
        }
    }

    return j === substring.length ? i-j : -1
}

module.exports = {
    KMPsearch
}
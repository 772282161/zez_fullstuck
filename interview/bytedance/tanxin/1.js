var findContentChildren = function(g,s){
    if(s.length===0 || g.length===0){
        return 0
    }

    g.sort((a,b)=>{return a-b})
    s.sort((a,b)=>{return a-b})

    let i = 0,j = 0
    while(i<g.length && j<s.length){
        if(s[j] >= g[i]){
            i++
        }
        j++
    }
    return i;
}
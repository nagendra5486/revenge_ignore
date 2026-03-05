function twosume(numbers,target){
    const map= new Map();
    for(let i=0;i<numbers.length;i++){
        const d=target-numbers[i];
        if(map.has(d)){
            return [map.get(d),i];
        }        map.set(numbers[i],i);
    }
    return null;
}
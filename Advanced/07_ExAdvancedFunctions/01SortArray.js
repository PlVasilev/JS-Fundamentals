function solve(arr, sort){
    if  (sort === 'asc'){
        return arr.sort((a,b)=> a-b);
    }
    if  (sort === 'desc'){
        return arr.sort((a,b)=> b-a);
    }
}


solve([14, 7, 17, 6, 8], 'asc');
solve([14, 7, 17, 6, 8], 'desc');
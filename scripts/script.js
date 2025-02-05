const list1 = [100, 200, 400, 500];
const list2 = [450, 230, 100, 239412, 200];
const list3 = [100, 200, 1000, 100];

function calcAverage(list){
    const elementsSum = list.reduce(
        function(sum = 0, newElement){
            return sum + newElement;
        }
    )
    let average = elementsSum / list.length;
    return average;
}

function arrangeList(list){
    let aux;
    for(let i = 0; i < list.length; i++){
        for(let j = i; j < list.length; j++){
            if(list[i] > list[j]){
                aux = list[i];
                list[i] = list[j];
                list[j] = aux;
            }
        }
    }
    return list;
}

function calcMedian(list){
    arrangeList(list);
    let median;
    if(list.length % 2 == 0){
        median = calcAverage([list[Math.floor((list.length-1)/2)], list[Math.floor((list.length + 1)/2)]])
    }else if(list.length % 2 != 0){
        median = list[Math.floor(list.length/2)];
    }
    return median;
}


console.log(calcMedian(list1));
console.log(calcAverage(list1));
console.log(calcMedian(list2));
console.log(calcAverage(list2));
console.log(calcMedian(list3));
console.log(calcAverage(list3));
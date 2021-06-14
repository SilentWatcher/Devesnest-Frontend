var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

var maximumFrequency=1;

var item;

for(var i=0;i<arr1.length;i++){
    var counter =0;
    for(var j=0;j<arr1.length;j++){
        if(arr1[i]==arr1[j]){
            counter++;
        }
        if(maximumFrequency<counter){
            maximumFrequency=counter;
            item =arr1[i];
        }
        
    }
  
}

console.log(item+"("+maximumFrequency+")" +"times");
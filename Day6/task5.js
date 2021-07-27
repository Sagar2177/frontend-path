
// Write a JavaScript program to find the most frequent item of an array
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times )

var arr=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var mostFreq = 1;
var count = 0;
var item;
for (var i=0; i<arr.length; i++) 
{
        for (var j=i; j<arr.length; j++)
        {
                if (arr[i] == arr[j]) 
                 count++;
                if (mostFreq<count)
                {
                  mostFreq=count; 
                  item = arr[i]; 
                }
        }
        count=0;
}
console.log(item+" ( " +mostFreq +" times ) ") ; 
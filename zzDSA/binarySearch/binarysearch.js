
// var arr = [4,5,1,8,47,5,1,8,45,7]
var arr = [6,9,5,7,3,8,2,1]

function sort(arr,n)
{
    if(n==0)
    {
        console.log(arr)
        return arr;
    }
    for(var i=0; i<n; i++)
    {
        if(arr[i]>arr[i+1])
        {
            var temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1]=temp;
        }
    }
    return sort(arr,n-1);
}

// Reatrive Methode.....................
// let binarySearch = (arr,start,end,key) =>
// {
//     while(start<=end)
//     {
//         mid = start+Math.floor((end-start)/2)
//         if(arr[mid] == key)
//         {
//             console.log(mid);
//             return;
//         }else if(arr[mid]>key)
//         {
//             end = mid-1;
//         }else {
//             start = mid+1;
//         }
//     }
//     console.log(-1)
//     return;
// }


var binarySearch = (arr,start,end,key) =>
{
    if(start>end)
    {
        console.log(-1)
        return;
    }
    mid = start+Math.floor((end-start)/2);
    if(arr[mid] == key)
    {
        console.log(mid);
        return;
    }else if(arr[mid]>key)
    {
        return binarySearch(arr,start,mid-1,key);
    }else{
        return binarySearch(arr,mid+1,end,key);
    }
}
binarySearch(sort(arr,arr.length),0,arr.length-1,1);

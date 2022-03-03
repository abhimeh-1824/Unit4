//  find first occurance element in arr;

let sort = (arr,n)=>
{
    if(n==0)
    {
        console.log(arr);
        return arr;
    }for(var i=0; i<n; i++)
    {
        if(arr[i]<arr[i+1])
            {
                let temp = arr[i];
                arr[i]=arr[i+1];
                arr[i+1]=temp;
            }
    }
    return sort(arr,n-1);
}
var result=0;
let firstElement = (arr,start,end,key)=>
{
    if(start>end)
    {
        return result;
    }
    mid = start + Math.floor((end-start)/2)
     if (arr[mid] == key)
    {
        // ===============================both element in on code;
        // let ans = [];
        // for(var j=mid; j>=0; j--)
        // {
        //     if(arr[j] !== key)
        //     {
        //         ans.push(j+1);
        //         break;
        //     }

        // }
        // for(var j=mid; j<arr.length; j++)
        // {
        //     // console.log(arr[j])
        //     if(arr[j] !== key)
        //     {
        //         ans.push(j-1);
        //         break;
        //     }else if(j==arr.length-1)
        //     {
        //         ans.push(j);
        //         break;
        //     }

        // }
        // console.log(ans)
        // return ans;
        // ==============================recursive ley
        result = mid;
        // firstElement(arr,0,mid-1, key);
        return firstElement(arr,mid+1,arr.length-1, key)

    }else if(arr[mid]>key)
    {
        return firstElement(arr,mid+1,end, key);
    }else{
        return firstElement(arr,start,mid-1, key);
    }
}
var arr = [1,5,42,45,1,4,54,12,4,5,2,4,1,5,2,2,4,1,5,1,5,1,1,]
var x = sort(arr,arr.length); // Decending Order
y = firstElement(x,0,x.length-1,5);
// console.log(x);
console.log(y,"y")

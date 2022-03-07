// count = 0
let rotatedArry = (arr,st,end,n) =>
{
    // console.log(st,end)
    if(st>end)
    {
        return;
    }
    var mid = st + Math.floor((end-st)/2);
    // console.log(mid)
    var prev = (mid+n-1)%n;
    var next = (mid+1)%n;
    // console.log(prev,next)
    if(arr[mid]<=arr[prev] && arr[mid]<=arr[next])
    {
        return mid;
    }
    else if(arr[mid]>=arr[prev] && arr[mid]>arr[next])
    {
        return mid+1;
    }
    else if(arr[st]<=arr[mid])
    {
        // console.log(arr[st],arr[mid])
        st = mid+1;
    } else if(arr[end]>=arr[mid])
    {
        end = mid-1
    }
    // count++;
    return rotatedArry(arr,st,end,n)
  
}
// 20 12
// arr = [18 ,19 ,21 ,22, 23 ,24 ,29 ,30 ,-10 ,-9, -8 ,-7 ,-6, -4 ,-3 ,-1, 7, 10 ,11, 12]

arr = [4 ,6, 7, 9, 10 ,-1, 0 ,1, 2, 3]

// arr = [4,5,-3,-2,-1]
n = arr.length;
x = rotatedArry(arr,0,n-1,n)
console.log(x)
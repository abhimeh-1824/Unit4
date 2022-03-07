arr = [1,2,4,5]
t = 3;
console.log(lower(arr,0,arr.length-1,t))
console.log(upper(arr,0,arr.length-1,t))
var ans,bool;
function lower(arr,st,end,t)
{
    // console.log(st,end);
    if(st>end)
    {
        return ans;
    }
    var mid = st+Math.floor((end-st)/2)
    if(arr[mid]==t)
    {
        bool = true;
        ans = mid;
        end = mid-1;

    }
    if(arr[mid]<t)
    {
       if(!bool){
        ans = mid;
        }
        st = mid+1;
    }else{
        end = mid-1;
    }
    return lower(arr,st,end,t)
}
function upper(arr,st,end,t)
{
    if(st>end)
    {
        return up1;
    }
    var mid = st + Math.floor((end-st)/2)
    if(arr[mid] == t)
    {
        st = mid+1;
    }else if(arr[mid]<t)
    {
        st = mid+1;
    }else{
        up1 = mid;
        end = mid-1;
    }
    return upper(arr,st,end,t)
}
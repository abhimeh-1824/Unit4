let root = (num,st,end)=>
{
    if(st>end)
    {
        // console.log(st,mid,end)
        return;
    }
    
    mid = (st + (end-st)/2);
    n = ""+mid;
    n = +n[0]
   
    if(mid**2 == num || n**2==num)
    {
        console.log(n,"num",num);
        return
    }else if(mid**2 > num)
    {
        return root(num,st,mid-1);
    }else{
        root(num,mid+1,end);
    }
}
for(var i=1; i<25; i++)
{
    root(i,1,i)
}

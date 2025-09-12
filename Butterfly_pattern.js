let n=5
fun(n/2)

function fun(n)
{
    for(let i=1;i<=n;i++)
    {
        let st=""
        
        for(let j=1;j<=i;j++)
        {
            st+="*"
        }
        
        let space=n*2-i*2
        for(let s=1;s<space;s++)
        {
            st+" "
        }
        
        for(let k=1;k<=i;k++)
        {
            st+="*"
        }
        
        console.log(st)
    }
}
// -------------------------------
// String Manipulation Functions:
// -------------------------------

// *****************1********************

function inverse(str)
{
   let tab="";
    let nbr= str.length;
    for(i=nbr-1;i>=0;i--)
    {  tab +=str[i];
    }        
    return tab;
}

// *****************2********************

function Count_Characters(str)
{
    let cpt=0;
   /* if( str===null || str===0)
    {cpt=0;}   
     else{   */
    for(i=0;i<str.length;i++)
    { cpt++;
    }    
         
     /*}*/    
    return cpt;
}
// *****************3********************

function Capitalize(str)
{   let tab=[];
    let cp=str.split("")
     a=cp[0].toUpperCase();
     cp[0]=a;
    return cp.join("");
}
let chaine= Capitalize("hello");
console.log(chaine);

// -------------------------------
// Array Functions:
// -------------------------------

// *****************1********************

function maxmin(tab)
{let max=[0];
 let min=[0];
   for(i=1;i<tab.length;i++)
   {
       if(tab[i]>max)
       { max=tab[i];}
        if(tab[i]<min)
       { min=tab[i];}
   }
   return [min, max]
}
l

// *****************2********************
function sum_array(tab)
{let sum=0;
 
   for(i=0;i<tab.length;i++)
   {
       sum+=tab[i];
   }
   return sum;

}
// *****************3********************

function nbr_positif(arr)
{  let nbr=[];
    for(i=0;i<arr.length;i++)
    {
        if(arr[i]>=0)
        {  
            nbr.push(arr[i]);
        }
    }
    
  return nbr;
}


// -------------------------------
// Mathematical Functions:
// -------------------------------

// *****************1********************

function factoriel(x)
{   let nbr=1;
    if(x===0 || x===1 )
    {
        return nbr;
    } 
    else{
    for(i=1;i<=x;i++)
    {
       nbr*=i;
    }
    }
  return nbr;
}

// *****************2********************

function nbr_premier(x)
{  
    if( x<=1)
    { return false;}
    
    for(i=2;i<x;i++ )
    {   if(x%i===0)
        {return false;}
    } 
    
  return  `${x}: premier`;
}


// *****************3********************
function suit_f(x)
{  
    let t=[0,1]
    i=2;
    while(i<x)
    {
        t[i]=t[i-1]+t[i-2];
        i++;
    }
  return  t;
}













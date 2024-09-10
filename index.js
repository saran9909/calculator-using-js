const os=document.getElementById('os')

console.log(os);

function display(txt)
{
    os.value = os.value+txt;
    console.log(os.value)
}

function Clear()
{
    os.value=" "
}

function del()
{
    os.value=os.value.slice(0,-1)
}
function calculate()
{
    os.value=eval(os.value);
}
function sql()
{
    let a=prompt('Enter The Value')
    let res=a*a;
    alert(`The Answer is ${res}`);
}
function cube()
{
    let a=prompt('Enter The Value')
    let res=a*a*a;
    alert(`The Answer is ${res}`);
}
function sin()
{
    os.value= Math.sin(os.value);
}
function sqrt()
{
    os.value= Math.sqrt(os.value,2);
}
function cos()
{
    os.value= Math.cos(os.value);
}
function tan()
{
    os.value= Math.tan(os.value);
}
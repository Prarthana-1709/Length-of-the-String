function findLength()
{
    const str=document.getElementById('arrayInput').value;
    const length=str.length;

    document.getElementById("result").innerHTML="length of the string is <b>"+length +"</b>";
    console.log("length of the string is :",length);
}

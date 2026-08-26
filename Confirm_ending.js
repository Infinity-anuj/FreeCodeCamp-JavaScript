function confirmEnding(string1, string2)
{
    let lastElement = string1.slice(string1.length - string2.length);
    // console.log(lastElement);

    if(lastElement === string2)
    {
        return true;
    }
    else
    {
       return false;
    }
}

console.log(confirmEnding("Congratulation", "on"));


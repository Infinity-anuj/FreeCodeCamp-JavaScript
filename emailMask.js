function emailMask(email)
{
    const atIndex = email.indexOf('@'); // this is to get the index of @ in an gmail..

    const userName = email.slice(0, atIndex);
    const domain = email.slice(atIndex);

    const first = userName[0];
    const last = userName[userName.length - 1];

    if(userName.length <= 2)
    {
        return userName + domain ;
    }

    const middleMask = '*'.repeat(userName.length - 2);

    return first + middleMask + last + domain ; 
}

let email = "apple.ios@email.com";

console.log(emailMask(email));
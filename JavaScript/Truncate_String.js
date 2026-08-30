function truncateString(sent, num)
{
    let sent_len = sent.length;
    if(sent_len > num)
    {
        let first = sent.slice(0,num);
        let second = "...";

        // return first + second ;
        console.log(first + second); 
    }
    else{
        // return sent;
        console.log(sent);
    }
}


truncateString("A-tisket a-tasket A green and yellow basket", 8);
truncateString("Peter Piper picked a peck of pickled peppers", 11) ;
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2);
truncateString("A-", 1);
truncateString("Absolutely Longer", 2);
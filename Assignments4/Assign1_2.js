function isPalindrome(n)
{
    const str = n.toString();
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}
console.log(isPalindrome(121));
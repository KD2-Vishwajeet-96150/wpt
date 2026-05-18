
function calculator(n1,n2,operator)
{
    switch(operator)
    {
    case '+':
        return n1+ n2;
    case '-':
        return n1 - n2;
    case '*':
        return n1 * n2;
    case '/':
        return n1/n2;
    }
}
console.log(calculator(10,5,'+'));
console.log(calculator(10,5,'-'));
console.log(calculator(10, 5, '*'));
console.log(calculator(10, 5, '/')); 

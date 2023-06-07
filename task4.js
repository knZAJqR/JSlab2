function LargestNumber()
{
    var number1 = prompt("Enter first number: ");
    var number2 = prompt("Enter second number: ");
    var number3 = prompt("Enter third number: ");
    
    if (number1 > number2 && number1 > number3)
    {
        alert("The first number is the largest");
    }
    else if (number2 > number1 && number2 > number3)
    {
        alert("The second number is the largest");
    }
    else if (number3 > number1 && number3 > number2)
    {
        alert("The third number is the largest");
    }
    else if (number1 == number2 && number1 == number3)
    {
        alert("All numbers are equal");
    }
    else
    {
        alert("Can't count");
    }
}

return LargestNumber();
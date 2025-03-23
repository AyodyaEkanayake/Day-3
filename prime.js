//write a boolean function to find a given number is prime
console.log("Prime")
function prime(num)
{
	if(num < 2)return false;
	
	for(let i=2; i<= Math.sqrt(num); i++)
	{
		if(num%i == 0)return false;
	}
	return true;
}

console.log(prime(5)); 
console.log(prime(10));







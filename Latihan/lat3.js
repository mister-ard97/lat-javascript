function drawImage(num)
{	
	var Drawnum = num;

	if(Drawnum % 2 != 0)
	{
		
		var container 	= '';
		var line 		= 1;
		var	AtSymbol	= 0;
		var mid			= Math.ceil(Drawnum / 2);
		var space		= Math.floor(Drawnum / 2);

		while (line <= Drawnum)
		{

			container="";
			for(x = 1; x <= space; x++)
			{
				container = container + "=";
			}
				
			for(y = 0; y <= AtSymbol; y++)
			{
				container = container + "@";
			}

			for(x = 1; x <= space; x++)
			{
				container = container + "=";
			}

			console.log(container);
			line++;

			if(line <= mid)
			{
				AtSymbol +=2;
				space--;
			}
			else
			{
				AtSymbol -=2;
				space++;
			}

		}
	}
	else
	{
		console.log("Angka harus ganjil");
	}
}
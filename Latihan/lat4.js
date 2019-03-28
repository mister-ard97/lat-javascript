function totalBelanja(total, pay)
{
	var total 	= total;
	var pay 	= pay;
	var change 	= pay - total;

	// total = 50000, pay = 15500
	// kembalian = pay - total = 34500
	// 34500 / 50000 = 0.6 dibawah satu. tidak disimpan
	// 34500 / 20000 = 1.7 diatas satu. simpan di container. 34500 - 20000 = 14500
	// 14500 / 10000 = 1.4 diatas satu. disimpan di container. 14500 - 10000 = 4500
	// 4500 / 5000   = 0.9 kurang dari satu. tidak disimpan
	// 4500 / 2000	 = 2.25 diatas sati. disimpan dikontainer. 4500 - 4000 = 500
	// 500 / 500 	 = 1 diatas satu. disimpan dikontainer. 500 - 500 = 0
	// selesai
	// output kontainer msng msng mata uang

	while(change != 0)
	{
		console.log("Kembalian uang yang anda terima adalah " + change);
		if(change / 50000 >= 1)
		{
			var cont50rb = Math.floor(change / 50000);
			change = change - (50000 * cont50rb);
			console.log(cont50rb + " X " + "50000");
		}
		
		if(change / 20000 >= 1)
		{
			var cont20rb = Math.floor(change / 20000);
			change = change - (20000 * cont20rb);
			console.log(cont20rb + " X " + "20000");
		}
		
		if(change / 10000 >= 1)
		{
			var cont10rb = Math.floor(change / 10000);
			change = change - (10000 * cont10rb);
			console.log(cont10rb + " X " + "10000");
		}
		
		if(change / 5000 >= 1)
		{
			var cont5rb = Math.floor(change / 5000);
			change = change - (5000 * cont5rb);
			console.log(cont5rb + " X " + "5000");
		}
		
		if(change / 2000 >= 1)
		{
			var cont2rb = Math.floor(change / 2000);
			change = change - (2000 * cont2rb);
			console.log(cont2rb + " X " + "2000");
		}
		
		if(change / 500 >= 1)
		{
			var cont5s = Math.floor(change / 500);
			change = change - (500 * cont5s);
			console.log(cont5s + " X " + "500");
		}
	}

}
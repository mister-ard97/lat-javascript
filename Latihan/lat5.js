function hitungParkir(i)
{
	//biaya 2 jam pertama = 2000
	// jam 1 = 2000, jam 2 = 2000, jam 3 = 3000, jam 4 = 4000, ...jam 10 = 10000, jam 11 = 10000

	if(i == 1 || i == 2)
	{
		var total = 2000
	}
	else if(i >= 3 && i <= 10)
	{
		var total = i * 1000;
	}
	else if(i >= 11)
	{
		var total = 10000;
	}

	console.log("Anda parkir selama " + i + " Jam." +" Total uang yang harus dibayar adalah Rp." + total + ".");
}
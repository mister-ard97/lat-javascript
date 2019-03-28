function password(data)
{
	//regex = /^[a-z0-9]+$/
	//^ = beginning string 
	//[a-z0-9] check lowercase a until z and 0 until 9
	//+$ = check until end of thestring 
	const regex = /^[a-z0-9]+$/;
	return regex.test(data);
}
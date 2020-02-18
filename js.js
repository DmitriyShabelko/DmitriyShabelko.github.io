var Schetchik = 0;
var arr = ['1','1','1','1','1','1','1','1','1'];
function MakeMove(sender) //Функция, которая проверяет, кто сейчас ходит
{
	Schetchik++;
	if (Schetchik%2==0) 
	{
		CheckingWin('0', sender);
	}
	else
	{
		CheckingWin('x', sender);
	}
}
function buttonClick() //Функция сброса всех полей
{
	var WorkField = document.getElementsByClassName("input");
	Schetchik+=2;
	for (var i = 0; i<WorkField.length; i++)
	{
		WorkField[i].disabled=false;
		WorkField[i].style.backgroundImage = "none";
		for (var j = 0; j<9; j++)
		{
			arr[j]='1';
		}
	}
}
function CheckingWin(Filling, sender) //Функция, которая ставит х или 0 по клику
{
	sender.style.backgroundImage = 'url('+Filling+'.png)';
	sender.disabled=true;
	arr[sender.id]=Filling;
	var numer = 0;
	var y = 5;
	if (conditionwin(Filling)== true)
	{
		var WorkField = document.getElementsByClassName("input");
		for (var i = 0; i<WorkField.length; i++)
		{
			WorkField[i].disabled=true;
		}
		numer++;	
	}
	else
	{	
		var x = 0;
		for (var i = 0; i<9; i++) //Условие ничьи
		{
			
			if ((arr[i] == 'x') || (arr[i] == '0'))
			{
				x++;
				if (x == 9)
					setTimeout("alert('Ничья')", 100);
			}
		}
	}
	if (numer==1)
		setTimeout(VivodWin, 100, Filling);
}

function conditionwin (yachejka) //Выполняем условие победы
{
	if (((arr[0] ==yachejka) & (arr[1]==yachejka) & (arr[2]==yachejka)) ||
		((arr[3] ==yachejka) & (arr[4]==yachejka) & (arr[5]==yachejka)) ||
		((arr[6] ==yachejka) & (arr[7]==yachejka) & (arr[8]==yachejka)) ||
		((arr[0] ==yachejka) & (arr[4]==yachejka) & (arr[8]==yachejka)) ||
		((arr[2] ==yachejka) & (arr[4]==yachejka) & (arr[6]==yachejka)) ||
		((arr[0] ==yachejka) & (arr[3]==yachejka) & (arr[6]==yachejka)) ||
		((arr[1] ==yachejka) & (arr[4]==yachejka) & (arr[7]==yachejka)) ||
		((arr[2] ==yachejka) & (arr[5]==yachejka) & (arr[8]==yachejka)))
		return true;
	else 
		return false;
}

function VivodWin(Vivod){ //Вывод победителя на экран
	alert('Победили ' + Vivod);
}
						// setTimeout("        ", 100);       "",
						// setTimeout(function() { alert('Hello')} 100);
				
				
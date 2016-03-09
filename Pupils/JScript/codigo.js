var x;
x=$(document);
x.ready(inicializar);

function inicializar() 
{
	
	var x;
	x=$(".handle");
	x.click(clickHecho);
}
function clickHecho(){
	var x;
	x=$('#navegador nav ul').toggleClass('showing');

}
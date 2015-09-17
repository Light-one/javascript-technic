 // 오늘의 추천메뉴 랜덤하게 뿌려짐 



function init(){
var food_area = document.getElementById('food_area');
var today_menu = ['pizza1.png', 'pizza2.png', 'pizza3.png', 'pizza4.png', 'pizza5.png', 'pizza6.png', 'pizza7.png'];
var today_menu_len = today_menu.length;
var today_menu_random = Math.floor(Math.random()*today_menu_len);

var today_menu_HTML = '<div id="today_menu" class="today_menu">'+
'<h2> 오늘의 추천 메뉴 </h2>'+
	 '<img id="today_menu_img" src="images/'+ today_menu[today_menu_random]+'" alt="" />'+
				'<p>Spinach Mascarpone</p>'+
				'</div>';
console.log(today_menu_HTML);
// document.getElementById('food_area').innerHTML = today_menu_HTML;
// food_area.write(today_menu_HTML);

}

function menuSelect(){
	var price = document.getElementById('price').getAttribute("value");
	var menu_name = document.getElementById('menu_name').getAttribute("title");
	var menu_val = document.getElementById('menu_val');
	var menu_price = document.getElementById('menu_price');

	menu_val.innerHTML = menu_name;
	menu_price.innerHTML = price;
	console.log(this)
	
}
init();





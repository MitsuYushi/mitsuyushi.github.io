var pic =
[
	document.getElementById("pic0"),
	document.getElementById("pic1"),
	document.getElementById("pic2"),
	document.getElementById("pic3"),
	document.getElementById("pic4")
];
/*
var big = document.getElementById("big");
var pic_title = document.getElementById("title");
var title =
[
	"ព្រះបរមរាជវាំង",
	"សារៈមន្ទីជាតិ",
	"វិមានឯករាជ្យ",
	"ផ្សារថ្មី",
	"សាកលវិទ្យាល័យភូមិន្ទភ្នំពេញ"
]

function changePic(id) {
	pic_title.innerHTML = title[id];
	big.src = pic[id].src;
	if(id===3){
		pic_title.style.color = "dodgerblue";
	}
	else if (id===4){
		pic_title.style.color = "green";
	}
	else{
		pic_title.style.color = "white";
	}
}*/

pic[0].onclick = function(){changePic(0);}
pic[1].onclick = function(){changePic(1);}
pic[2].onclick = function(){changePic(2);}
pic[3].onclick = function(){changePic(3);}
pic[4].onclick = function(){changePic(4);}

var big	= document.getElementById('big');
var pic_title = document.getElementsByClassName("topRight")[0];

function changePic(id) {
	big.src = pic[id].src;
	pic_title.innerHTML = pic[id].alt;
	if(id===3){
		pic_title.style.color = "dodgerblue";
	}
	else if (id===4){
		pic_title.style.color = "green";
	}
	else{
		pic_title.style.color = "white";
	}
}

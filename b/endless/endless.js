function bg(e) {
	if (e.target.id != 'bg' && !e.target.style.border.toString().includes('white')) {
		b = e.target.innerHTML;
		for (i = 0; i < document.querySelectorAll('#bg div').length; i++) document.querySelectorAll('#bg div')[i].style.border= '';
		e.target.style.border = "1px #fff solid";
		$('ch').innerHTML = "";
		var html = "<div id='unselected'>";
		for (i = 0; i < goodNames[b].length; i++) if (ls[goodNames[b][i]] == "true") html = html + '<div title="' + goodNames[b][i].replace('D', '.').replace('__', '-').replace('_', ' ').replace('_', ' ').replace('_', ' ') + '" style="background-image:url(../assets/characters/' + goodNames[b][i].replace('.', 'D').replace('_', '-').replace('_', '-').replace('_', '-') + '.png)"></div>';
    html += '</div><div id="selected"></div>';
		$('ch').innerHTML = html;
		$('sp').style.display = 'none';
		$('ne').style.display = 'none';
	}
}
var ct;
function ch(e) {
	if (e.target.id != 'ch' && e.target.id != 'selected' && e.target.id != 'unselected') {
		e.target.parentElement.id=='selected'?$('unselected').appendChild(e.target):$('selected').appendChild(e.target);
		ct = 0;
		for (i = 0; i < $('ch').querySelectorAll('#selected div').length; i++) ct += Math.floor(good[$('ch').querySelectorAll('#selected div')[i].title.replace('.', 'D').replace('-', '__').replace(' ', '_').replace(' ', '_').replace(' ', '_')].info[2] *  0.03) + 5;
		if ($('ch').querySelectorAll('#selected div').length > 0) $('sp').style.display = 'block', $('sp').innerHTML = 'Play (' + ct + ')';
		if (ls.redbacks < ct) $('sp').style.display = 'none', $('ne').style.display = 'block', $('ne').innerHTML = "Not enough (" + ls.redbacks + "/" + ct + ")";
		else $('ne').style.display = 'none';
		if ($('ch').querySelectorAll('#selected div').length == 0) $('sp').style.display = 'none';
	}
}
function sp() {
	if (ls.redbacks >= ct) ls.redbacks -= ct;
	var ch = $('ch').querySelectorAll('#selected div');
	for (i = 0; i < ch.length; i++) ls['b' + (i+1)] = ch[i].title.replace('.', 'D').replace('-', '__').replace(' ', '_').replace(' ', '_').replace(' ', '_');
	ls.sc = ch.length; location = "../battle/index.html#endless" + b;
}
$('sp').style.display = 'none';
if (isMobile) $('bg').addEventListener('touchstart', bg), $('ch').addEventListener('touchstart', ch);
else $('bg').onmousedown = bg, $('ch').onmousedown = ch;
$('bg').innerHTML = "<div>aonarchy</div><div>ammunist</div><div>alief</div><div>eora</div><div>alinar</div><div>dericil</div>";
var e = document.createEvent('MouseEvents');
isMobile?e.initEvent("touchstart", true, true):e.initEvent("mousedown", true, true);
document.querySelector('#bg div').dispatchEvent(e);
$("backButton").addEventListener(isMobile?'touchend':'click', function(){location="../index.html"});
function id(id) { return document.getElementById(id) }

var isMobile = {
	Android: function() { return navigator.userAgent.match(/Android/i); },
	iOS: function() { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
	Windows: function() { return navigator.userAgent.match(/IEMobile/i); },
   	any: function() { return (isMobile.Android() || isMobile.iOS() || isMobile.Windows()); }
};

var goodNames = {
			url : '',
			original : ['santa', 'skater', 'saw', 'spiky', 'electric', 'shark', 'ghost', 'dragonball', 'giant', 'spear', 'superhero'],
			bocracy : ['knight', 'archer', 'barbed', 'flower', 'muscle', 'trump'],
			dinotera : ['triceratops', 't--rex', 'mosasaur', 'apatosaurus', 'carnotaurus'],
			fantasy : ['dovahkinn', 'mage', 'superhero', 'giant', 'dragonball', 'ghost'],
			aonarchy : [],
			aonarchyBoss : [],
			ammunist : [],
			ammunistBoss : [],
			ciftian : [],
			ciftianBoss : [],
			citatian : [],
			cerotopis : ['light-warrior', 'paramedics', 'enslaved'],
			citopia : ['overlapping', 'triple-odd', 'night'],
			alinar : ['color-jetpack', 'thorn', 'mammoth-rider', 'flame-archer', 'eskimo-goblins', 'rogue', 'winter-pumpkins', 'toxin', 'iceanaut-2.0'],
			bictatorship : ['worldwar', 'superhero', 'giant', 'barbed', 'muscle', 'electric', 'trump']
}, badNames = {
			url : '',
			original : ['saw', 'spiky', 'electric', 'shark', 'ghost', 'dragonball', 'giant', 'spear', 'superhero'],
			bocracy : ['knight', 'archer', 'barbed', 'flower', 'muscle', 'trump'],
			dinotera : ['triceratops', 't--rex', 'mosasaur', 'apatosaurus', 'carnotaurus'],
			fantasy : ['dovahkinn', 'mage', 'superhero', 'giant', 'dragonball', 'ghost'],
			aonarchy : [],
			aonarchyBoss : [],
			ammunist : [],
			ammunistBoss : [],
			ciftian : [],
			ciftianBoss : [],
			citatian : [],
			cerotopis : ['ultacrabb', 'batalifor-1D0', 'dark-knight', 'f87-cannon'],
			citopia : ['byter', 'batalifor-general','boverr-1D2', 'scubbars'],
			alinar : ['cyclops', 'b--2-mobile-cannon', 'b--torv-snowtrooper', 'sub-batalifor', 'flamethrower', 'abomination', 'sasquatch'],
			bictatorship : ['worldwar', 'superhero', 'giant', 'barbed', 'muscle', 'electric', 'trump']
}, battles = ['dinotera', 'citatian', 'ciftian', 'alinar', 'aonarchy', 'ammunist'], good = { }, bad = { };
function object(nm, stats, info, other) {
	/*  nm = name as string;
		stats = [attack as float, health as float, heal as float];
		info = [category as string, side as boolean, cost as float, letter as string, name as string, release as date, duration_hours as float]
		other = {  }*/
	this.name = nm;
	this.stats = stats;
	this.info = info;
	this.other = other;
	if (localStorage[nm] == undefined) localStorage[nm] = 'false';
	if (info[1] == 'true') goodNames[info[0].replace('+', 'Boss')].push(nm);
	else badNames[info[0].replace('+', 'Boss')].push(nm);
	if (goodNames[info[0] + 'Boss'] != undefined && info[1] == 'true') goodNames[info[0] + 'Boss'].push(nm);
}
good.goblin_horde = new object('goblin_horde', [50, 3200, 5], ['aonarchy', 'true', 1500, 'a', 'goblin_horde', 'goblin_sword']);
good.goblin = new object('goblin', [15, 1000, 10], ['aonarchy', 'true', 250, 'a', 'goblin', 'goblin_sword']);
good.warrior = new object('warrior', [50, 3000, 10], ['aonarchy', 'true', 1500, 'a', 'warrior', 'warrior_sword']);
good.archer = new object('archer', [40, 1250, 20], ['aonarchy', 'true', 750, 'a', 'archer', 'arrow']);
good.phantom = new object('phantom', [30, 1500, 15], ['aonarchy', 'true', 550, 'a', 'phantom', 'shadowball']);
good.anonymous = new object('anonymous', [20, 1500, 15], ['aonarchy', 'true', 500, 'a', 'anonymous', 'cyber_hand']);
good.a87_cannon = new object('a87_cannon', [60, 2000, 5], ['aonarchy', 'true', 1500, 'a', 'a87_cannon', 'cannonball']);
good.witchcraft = new object('witchcraft', [35, 1500, 20], ['aonarchy', 'true', 600, 'a', 'witchcraft', 'spell']);

bad.sharkanator = new object('sharkanator', [100, 5000, 0], ['aonarchy', 'false', 2500, 'a', 'sharkanator', 'cannonball']);
bad.bentacrabb_2D1 = new object('bentacrabb_2D1', [50, 3200, 5], ['aonarchy', 'false', 1500, 'a', 'bentacrabb_2D1', 'cannonball']);
bad.bylo_ken = new object('bylo_ken', [35, 1500, 20], ['aonarchy', 'false', 600, 'a', 'bylo_ken', 'saber']);
bad.d15_cannon = new object('d15_cannon', [60, 2000, 5], ['aonarchy', 'false', 1500, 'a', 'd15_cannon', 'cannonball']);

bad.sharkanatorBoss = new object('sharkanatorBoss', [100, 5000, 0], ['aonarchy+', 'false', 2500, 'a', 'sharkanatorBoss', 'cannonball']);
bad.bylo_kenBoss = new object('bylo_kenBoss', [35, 1500, 20], ['aonarchy+', 'false', 600, 'a', 'bylo_kenBoss', 'saber']);
bad.d15_cannonBoss = new object('d15_cannonBoss', [60, 2000, 5], ['aonarchy+', 'false', 1500, 'a', 'd15_cannonBoss', 'cannonball']);

good.triple_odd = new object('triple_odd', [40, 2500, 20], ['ciftian', 'true', 1000, 'c', 'triple_odd', 'c_ball']);
good.night = new object('night', [25, 1250, 20], ['ciftian', 'true', 750, 'c', 'night', 'shadowball']);
good.light_warrior = new object('light_warrior', [60, 2250, 15], ['ciftian', 'true', 1500, 'c', 'light_warrior', 'warrior_sword']);
good.enslaved = new object('enslaved', [25, 2250, 10], ['ciftian', 'true', 850, 'c', 'enslaved', 'c_ball']);

bad.ultacrabb = new object('ultacrabb', [60, 2000, 5], ['ciftian', 'false', 1500, 'a', 'ultacrabb', 'missile']);
bad.batalifor_1D0 = new object('batalifor_1D0', [15, 2000, 5], ['ciftian', 'false', 1000, 'a', 'batalifor_1D0', 'cannonball']);
bad.f87_cannon = new object('f87_cannon', [40, 1250, 20], ['ciftian', 'false', 750, 'a', 'f87_cannon', 'missile']);
bad.dark_knight = new object('dark_knight', [60, 2000, 5], ['ciftian', 'false', 1500, 'a', 'dark_knight', 'dark_sword']);

bad.f87_cannonBoss = new object('f87_cannonBoss', [40, 1250, 20], ['ciftian+', 'false', 750, 'a', 'f87_cannonBoss', 'missile']);
bad.ultacrabbBoss = new object('ultacrabbBoss', [60, 2000, 5], ['ciftian+', 'false', 1500, 'a', 'ultacrabbBoss', 'cannonball']);
bad.dark_knightBoss = new object('dark_knightBoss', [60, 2000, 5], ['ciftian+', 'false', 1500, 'a', 'dark_knightBoss', 'dark_sword']);

bad.batalifor_sentry = new object('batalifor_sentry', [60, 2000, 5], ['ammunist', 'false', 1500, 'a', 'batalifor_sentry', 'cannonball']);
bad.batalifor_2D4 = new object('batalifor_2D4', [30, 1000, 20], ['ammunist', 'false', 450, 'a', 'batalifor_2D4', 'red_fluid_sword']);
bad.b__torv_troops = new object('b__torv_troops', [30, 1500, 15], ['ammunist', 'false', 550, 'a', 'b__torv_troops', 'missile']);
bad.b__torv_commander = new object('b__torv_commander', [50, 3000, 10], ['ammunist', 'false', 1000, 'a', 'b__torv_commander', 'saber']);
bad.b_shuttle = new object('b_shuttle', [50, 3000, 10], ['ammunist', 'false', 1500, 'a', 'b_shuttle', 'cannonball']);

good.guardian = new object('guardian', [20, 1250, 30], ['ammunist', 'true', 500, 'a', 'guardian', 'fairy_dust']);
good.siren = new object('siren', [30, 1000, 20], ['ammunist', 'true', 450, 'a', 'siren', 'music']);
good.jak_o_anterns = new object('jak_o_anterns', [15, 2000, 5], ['ammunist', 'true', 300, 'a', 'jak_o_anterns', 'scythe']);
good.spiky = new object('spiky', [25, 1750, 5], ['ammunist', 'true', 600, 'a', 'spiky', 'spikes']);
good.jetpack = new object('jetpack', [35, 2250, 15], ['ammunist', 'true', 1000, 'a', 'jetpack', 'fireball']);
good.worldwar = new object('worldwar', [30, 2000, 15], ['ammunist', 'true', 800, 'a', 'worldwar', 'shadowball']);

bad.batalifor_sentryBoss = new object('batalifor_sentryBoss', [60, 2000, 5], ['ammunist+', 'false', 1500, 'a', 'batalifor_sentryBoss', 'cannonball']);
bad.b_shuttleBoss = new object('b_shuttleBoss', [50, 3000, 10], ['ammunist+', 'false', 1500, 'a', 'b_shuttleBoss', 'cannonball']);
bad.bentacrabb_2D1Boss = new object('bentacrabb_2D1Boss', [50, 3200, 5], ['ammunist+', 'false', 1500, 'a', 'bentacrabb_2D1Boss', 'cannonball']);

good.paramedics = new object('paramedics', [20, 1250, 30], ['citatian', 'true', 750, 'c', 'paramedics', 'c_ball']);
good.overlapping = new object('overlapping', [40, 3200, 10], ['citatian', 'true', 1300, 'c', 'overlapping', 'c_ball']);

bad.batalifor_general = new object('batalifor_general', [30, 1500, 15], ['citatian', 'false', 550, 'a', 'batalifor_general', 'green_fluid_sword']);
bad.scubbars = new object('scubbars', [20, 1500, 15], ['citatian', 'false', 500, 'a', 'scubbars', 'scorpion_spikes']);
bad.byter = new object('byter', [35, 1500, 20], ['citatian', 'false', 600, 'a', 'byter', 'missile']);
bad.boverr_1D2 = new object('boverr_1D2', [50, 3000, 10], ['citatian', 'false', 1000, 'a', 'boverr_1D2', 'scorpion_spikes']);

function convertClick() {
	if (!isMobile.any()) {
		var clickables = document.querySelectorAll('[ontouchend]');
		for (i = 0; i < clickables.length; i++) {
			clickables[i].setAttribute('onclick', clickables[i].getAttribute('ontouchend'));
		}
		requestAnimationFrame(convertClick);
	}
}

function loadLive() {
	id('body').oncontextmenu = function(e) { e.preventDefault(); }
	convertClick();
	setTimeout(function(){id('logo').style.display='none';id('mainWrapper').style.display = "";},1000)
}
document.addEventListener('DOMContentLoaded', loadLive, false);
if (!localStorage.coins) localStorage.coins = 0;
else localStorage.coins = Math.round(localStorage.coins);
document.body.innerHTML="<div id='logo' style='width:100%;height:100%;background:#343838;'><img src='img/banner.png' style='width:80%;position:absolute;margin:auto;left:0;right:0;top:0;bottom:0' /></div><div id='mainWrapper' style='width:100%;height:100%'>"+document.body.innerHTML+"</div>";
const timi = new Date;

const dagur = timi.getDate()
const mánuður = '09'
const ár = timi.getFullYear()

let dagurS = dagur.toString()
let árS = ár.toString() 

const dagsening = dagurS +'/'+ mánuður +'/'+ árS;

document.getElementById("tími"). innerHTML = dagsening;


function auðgunarBrot() {
  document.getElementById("hér-er").innerHTML = 'Hér er tíðni Auðgunarbrota'
  document.getElementById("2019").innerHTML = '2019:	5642'
  document.getElementById("2020").innerHTML = '2020:	5636'
  document.getElementById("2021").innerHTML = '2021:	5803'
};

function eignaSpjöll() {
  document.getElementById("hér-er").innerHTML = 'Hér er tíðni Eignaspjöll'
  document.getElementById("2019").innerHTML = '2019:	1821'
  document.getElementById("2020").innerHTML = '2020:	1904'
  document.getElementById("2021").innerHTML = '2021:	2104'
};

function fíkniefnaBrot() {
  document.getElementById("hér-er").innerHTML = 'Hér er tíðni Fíkniefnabrota'
  document.getElementById("2019").innerHTML = '2019:	2196'
  document.getElementById("2020").innerHTML = '2020:	1747'
  document.getElementById("2021").innerHTML = '2021:	1690'
};

function kynferðisBrot() {
  document.getElementById("hér-er").innerHTML = 'Hér er tíðni Kynferðisbrota'
  document.getElementById("2019").innerHTML = '2019:	658'
  document.getElementById("2020").innerHTML = '2020:	520'
  document.getElementById("2021").innerHTML = '2021:	646'
};

function ofbeldiBrot() {
  document.getElementById("hér-er").innerHTML = 'Hér er tíðni Ofbeldibrota'
  document.getElementById("2019").innerHTML = '2019:	1681'
  document.getElementById("2020").innerHTML = '2020:	1785'
  document.getElementById("2021").innerHTML = '2021:	1884'
};

function hótanir() {
  document.getElementById("hér-er").innerHTML = 'Hér er tíðni Hótanar'
  document.getElementById("2019").innerHTML = '2019:	506 '
  document.getElementById("2020").innerHTML = '2020:	570'
  document.getElementById("2021").innerHTML = '2021:	552'
};

function varslaFíkniefna () {
  document.getElementById("hér-er-fíni").innerHTML = "Hér er tíðni Varsla fíkniefna."
  document.getElementById("2019-fíkni").innerHTML = '2019:	1701'
  document.getElementById("2020-fíkni").innerHTML = '2020:	1285'
  document.getElementById("2021-fíkni").innerHTML = '2021:	1136'
};

function salaFíkniefna () {
  document.getElementById("hér-er-fíni").innerHTML = "Hér er tíðni Sala fíkniefna."
  document.getElementById("2019-fíkni").innerHTML = '2019:	239'
  document.getElementById("2020-fíkni").innerHTML = '2020:	191'
  document.getElementById("2021-fíkni").innerHTML = '2021:	179'
};

function flutningurFíkniefna () {
  document.getElementById("hér-er-fíni").innerHTML = "Hér er tíðni Flutningur fíkniefna."
  document.getElementById("2019-fíkni").innerHTML = '2019:	149'
  document.getElementById("2020-fíkni").innerHTML = '2020:	165'
  document.getElementById("2021-fíkni").innerHTML = '2021:	293'
};

function framleiðslaFíkniefna () {
  document.getElementById("hér-er-fíni").innerHTML = "Hér er tíðni Framleiðsla fíkniefna."
  document.getElementById("2019-fíkni").innerHTML = '2019:	85'
  document.getElementById("2020-fíkni").innerHTML = '2020:	89'
  document.getElementById("2021-fíkni").innerHTML = '2021:	78'
};

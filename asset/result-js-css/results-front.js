var geneData = []; // 用于存储gene.json中的基因数据

function loadJSON(callback) {
	var xobj = new XMLHttpRequest();
	xobj.overrideMimeType("application/json");
	xobj.open('GET', 'gene.json', true);
	xobj.onreadystatechange = function () {
		if (xobj.readyState === 4 && xobj.status === 200) {
			callback(xobj.responseText);
		}
	};
	xobj.send(null);
}

function processData(data) {
	var jsonData = JSON.parse(data);
	geneData = jsonData.gene; // 将gene.json中的基因数据存储到geneData变量中
}

loadJSON(function (response) {
	processData(response);
});

function searchGene(event) {
	event.preventDefault();
	var userInput = document.getElementById("search-input").value.toUpperCase().trim();

	if (userInput === "") {
		alert("The gene name requirement cannot be empty");
		return false;
	}

	var geneFound = false;

	// 检查基因名称是否存在于geneData中
	for (var i = 0; i < geneData.length; i++) {
		if (geneData[i].name.toUpperCase() === userInput || geneData[i].ensemblId === userInput) {
			window.location.href = "./" + geneData[i].name + ".html";
			geneFound = true;
			break;
		}
	}

	if (!geneFound) {
		alert("Gene does not exist!");
	}

	return false;
}

var famFri = JSON.parse(friendsAndFamily);

// New Version - using jQuery: 
for (var i = 0; i < famFri.length; i++) {
    $("#importJson").append(`<div id="${i}" class="img-container"><img id="img${i}" src="${famFri[i].image}"></div> `);
    $(`#${i}`).append(`<p>Name: ${famFri[i].name}</p>`);
    $(`#${i}`).append(`<p>Relation: ${famFri[i].relation}</p>`);
}

for (var i = 0; i < famFri.length; i++) {
    if (famFri[i].relation == "father") {
        $(`#img${i}`).css("border", "blue 5px solid");
    }
    else if (famFri[i].relation == "mother") {
        $(`#img${i}`).css("border", "green 5px solid");
    }
    else if (famFri[i].relation == "sister") {
        $(`#img${i}`).css("border", "pink 5px solid");
    }
    else if (famFri[i].relation == "brother") {
        $(`#img${i}`).css("border", "black 5px solid");
    }
    else if (famFri[i].relation == "friend") {
        $(`#img${i}`).css("border", "blue 10px dotted");
    }
};













// OUTDATED VERSION:
// for (var i = 0; i < famFri.length; i++) {
//     var container = document.createElement("div");
//     htmlId.appendChild(container);
//     container.setAttribute("id", "teamcard"+i);
//     container.innerHTML = `<img id="img${[i]}" src='${famFri[i].image}'`+
//         "<br>" +
//         "<p>" +
//         famFri[i].name +
//         "</p>" +
//         "<p>" +
//         famFri[i].relation +
//         "</p>"
// };


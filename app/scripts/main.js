console.log('\'Allo \'Allo!');
var data = {
    item1 : {
        title : "Item 1",
        description : "this is an item",
        date : "08/25/2017",
        severe : "no"
    },
    item2 : {
        title : "Item 2",
        description : "this is an item",
        date : "09/25/2017",
        severe : "no"
    },
    item3 : {
        title : "Item 3",
        description : "this is an item",
        date : "10/25/2017",
        severe : "yes"
    },
    item4 : {
        title : "Item 4",
        description : "this is an item",
        date : "11/25/2017",
        severe : "no"
    },
    headers : ['title','description','date','severe'],
    count : 4
}
$(window).on('load',function(){
    console.log(data);
    var arrayObjects = [];
    for(var i=0; i < data.headers.length; i++){
        $(".table-header-target").append('<th>' + data.headers[i] + '</th>');
    };
    for(var each in data){
        arrayObjects.push(each);
    };
    for(var i=0; i < data.count; i++){
        if(data[arrayObjects[i]].severe == "yes"){
            $(".table-body-target").append('<tr class = "danger"><td>' + data[arrayObjects[i]].title + '</td><td>' + data[arrayObjects[i]].description + '</td><td>' + data[arrayObjects[i]].date + '</td><td>' + data[arrayObjects[i]].severe + '</td></tr>')
        }else{
        $(".table-body-target").append('<tr><td>' + data[arrayObjects[i]].title + '</td><td>' + data[arrayObjects[i]].description + '</td><td>' + data[arrayObjects[i]].date + '</td><td>' + data[arrayObjects[i]].severe + '</td></tr>')
        }
    };
    
})
function getAuthorNames() {
    var out=document.getElementById("key-result");
    var info="";
    fetch('/JSONfile/data.json')
    .then(response=>response.json())
    .then(data=>{
        for(let x of data)
        {
            info+="<li>"+x.author+"</li>";
        }

        out.innerHTML+=info; 
        
    });
}

function getBookNames() {
    var out=document.getElementById("key-result2");
    var info="";
    fetch('/JSONfile/data.json')
    .then(response=>response.json())
    .then(data=>{
        for(let x of data)
        {
            info+="<li>"+x.name+"</li>";
        }

        out.innerHTML+=info; 
        
    });
}

function readDate(){
    var output = document.getElementById("out");
    var info ="";
    fetch("http://time.jsontest.com/")
    .then(response =>response.json())
    .then(data=>{

        info+="<li>Date: "+data.date+"</li>";
        info+="<li>Milliseconds: "+data.milliseconds_since_epoch+"</li>";
        info+="<li>Time: "+data.time+"</li>";
        output.innerHTML=info;

    });
}
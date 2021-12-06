function acceptEmp(e)
{
    aAccept.setAttribute("href",'');
    aAccept.setAttribute("href","mailto:"+allemployees[e.id].Email+"?&subject=congratulations you are accepted &body=username:"+allemployees[e.id].username+",password:"+allemployees[e.id].password);
    allemployees[e.id].req=1;
    console.log(e.id);
    saveJson(allemployees);
}
function rejectEmp(e)
{
    aReject.setAttribute("href",'');
    aReject.setAttribute("href","mailto:"+allemployees[e.id].Email+"?&subject=Sorry You Are Rejected Try Again Soon");
    allemployees.splice(e.id,1);
    console.log(e.id);
    saveJson(allemployees);
}
$(function()
{
allemployees=[];
mytable=document.getElementById("allemptbl");
function getJson()
{
var JSONobj,JSobj;
var xhr =new XMLHttpRequest();
xhr.open("GET","employees.json");
xhr.onload=function()
{
    createtbody=document.createElement('tbody');
    allemployees=JSON.parse(xhr.response);
    for (let i in allemployees)
    {
        if(allemployees[i].req==0)
        {
            function Addfun()
            {
                if(allemployees[i].req==0)
                {
                mydiv=document.getElementById("tablecontainer");
                mytable=document.getElementById("allemptbl");

                var createdtr = document.createElement('tr');
                td=document.createElement('td');
                var createdtdUserName = document.createElement('td');
                createdtdUserName.innerText = allemployees[i].username;
                var createdtdPassword = document.createElement('td');
                createdtdPassword.innerText = allemployees[i].password;

                var createdtdFirstName = document.createElement('td');
                createdtdFirstName.innerText = allemployees[i].FirstName;

                var createdtdLastName = document.createElement('td');
                createdtdLastName.innerText = allemployees[i].LastName;

                var createdtdAddress = document.createElement('td');
                createdtdAddress.innerText =allemployees[i].Address;

                var createdtdEmail = document.createElement('td');
                createdtdEmail.innerText =allemployees[i].Email;

                var createdtdAge = document.createElement('td');
                createdtdAge.innerText = allemployees[i].Age;

                createdtdAccept=document.createElement('td');
                aAccept=document.createElement("a");
                aAccept.classList.add("btn");
                aAccept.classList.add("btn-success");
                aAccept.innerHTML="<i class='fa fa-check fa-2x'></i>";
                createdtdAccept.appendChild(aAccept);

                createdtdReject=document.createElement('td');
                aReject=document.createElement("a");
                aReject.classList.add("btn");
                aReject.classList.add("btn-danger");
                aReject.innerHTML="<i class='fa fa-times fa-2x'></i>";
                createdtdReject.appendChild(aReject);

                aAccept.setAttribute("id",i);
                aReject.setAttribute("id",i);
                aAccept.setAttribute("onclick", "acceptEmp(this)");
                aReject.setAttribute("onclick", "rejectEmp(this)");

                createdtr.appendChild(createdtdUserName);
                createdtr.appendChild(createdtdPassword);
                createdtr.appendChild(createdtdFirstName);
                createdtr.appendChild(createdtdLastName);
                createdtr.appendChild(createdtdAddress);
                createdtr.appendChild(createdtdEmail);
                createdtr.appendChild(createdtdAge);
                createdtr.appendChild(createdtdAccept);
                createdtr.appendChild(createdtdReject);
                createtbody.appendChild(createdtr);
                mytable.appendChild(createtbody);
                mydiv.appendChild(mytable);
                document.body.appendChild(mydiv);
                }
            }
            Addfun();
        }
    }
    saveJson = function(allemployees)
    {
        var str = JSON.stringify(allemployees);
        var blob = new Blob( [ str ],
        {
            type: 'application/octet-stream'
        });
        var url = URL.createObjectURL( blob );
        var link = document.createElement( 'a' );
        link.setAttribute( 'href', url );
        link.setAttribute( 'download', 'employees.json' );
        var event = document.createEvent( 'MouseEvents' );
        event.initMouseEvent( 'click', true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 0, null);
        link.dispatchEvent( event );
    }
}
xhr.send("");
}
getJson();
});

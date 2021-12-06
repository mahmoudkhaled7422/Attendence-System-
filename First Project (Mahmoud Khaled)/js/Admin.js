$("#tabs").tabs();
$( function() 
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
        allemployees=JSON.parse(xhr.response);
        for (let i in allemployees)
        {
            if(allemployees[i].req==1)
            {
                function Addfun()
                {
                    if(allemployees[i].req==1)
                    {
                    mycontainer=document.getElementById("container");
                    mydiv=document.getElementById("tablecontainer");

                    //Table(Tab)1
                    myallemptbl=document.getElementById("allemptbl");
                    allemp=document.getElementById("allemp");
                    mytabs=document.getElementById("tabs");

                    var createdtr = document.createElement('tr');
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

                    createdtr.appendChild(createdtdUserName);
                    createdtr.appendChild(createdtdPassword);
                    createdtr.appendChild(createdtdFirstName);
                    createdtr.appendChild(createdtdLastName);
                    createdtr.appendChild(createdtdAddress);
                    createdtr.appendChild(createdtdEmail);
                    createdtr.appendChild(createdtdAge);
                    myallemptbl.appendChild(createdtr);
                    allemp.appendChild(myallemptbl);
                    mytabs.appendChild(allemp);
                    mydiv.appendChild(mytabs);
                    mycontainer.appendChild(mydiv)
                    document.body.appendChild(mycontainer);

                    //Table(Tab)2
                    var createdtr2 = document.createElement('tr');
                    fullreport=document.getElementById("fullreport");
                    fullreporttbl=document.getElementById("fullreporttbl");

                    var createdtdEmpName = document.createElement('td');
                    createdtdEmpName.innerText = allemployees[i].FirstName+" "+allemployees[i].LastName;
                    var createdtdAttendanceTimes=document.createElement('td');
                    createdtdAttendanceTimes.innerText=allemployees[i].AttendanceTimes;
                    var createdtdLate=document.createElement('td');
                    createdtdLate.innerText=allemployees[i].Late;
                    var createdtdAbsence=document.createElement('td');
                    createdtdAbsence.innerText=allemployees[i].Absence;
                    createdtr2.appendChild(createdtdEmpName);
                    createdtr2.appendChild(createdtdAttendanceTimes);
                    createdtr2.appendChild(createdtdLate);
                    createdtr2.appendChild(createdtdAbsence);
                    fullreporttbl.appendChild(createdtr2);
                    fullreport.appendChild(fullreporttbl);
                    mytabs.appendChild(fullreport);
                    mydiv.appendChild(mytabs);
                    mycontainer.appendChild(mydiv)
                    document.body.appendChild(mycontainer);

                    //Table(Tab)3
                    if(allemployees[i].Late>0)
                    {
                        var createdtr3 = document.createElement('tr');
                        Latereport=document.getElementById("Latereport");
                        Latereporttbl=document.getElementById("Latereporttbl");
                        var createdtdEmpName = document.createElement('td');
                        createdtdEmpName.innerText = allemployees[i].FirstName+" "+allemployees[i].LastName;
                        var createdtdLate=document.createElement('td');
                        createdtdLate.innerText=allemployees[i].Late;
                        createdtr3.appendChild(createdtdEmpName);
                        createdtr3.appendChild(createdtdLate);
                        Latereporttbl.appendChild(createdtr3);
                        Latereport.appendChild(Latereporttbl);
                        mytabs.appendChild(Latereport);
                        mydiv.appendChild(mytabs);
                        mycontainer.appendChild(mydiv)
                        document.body.appendChild(mycontainer);
                    }

                    //Table(Tab)4
                    if(allemployees[i].Absence>0)
                    {
                        var createdtr4 = document.createElement('tr');
                        Absencereport=document.getElementById("Absencereport");
                        Absencereporttbl=document.getElementById("Absencereporttbl");
                        var createdtdEmpName = document.createElement('td');
                        createdtdEmpName.innerText = allemployees[i].FirstName+" "+allemployees[i].LastName;
                        var createdtdAbsence=document.createElement('td');
                        createdtdAbsence.innerText=allemployees[i].Absence;
                        createdtr4.appendChild(createdtdEmpName);
                        createdtr4.appendChild(createdtdAbsence);
                        Absencereporttbl.appendChild(createdtr4);
                        Absencereport.appendChild(Absencereporttbl);
                        mytabs.appendChild(Absencereport);
                        mydiv.appendChild(mytabs);
                        mycontainer.appendChild(mydiv)
                        document.body.appendChild(mycontainer);
                    }
                }
            }
                    Addfun();
            }
        }
    }
        xhr.send("");
    }
getJson();
});
$("#requests").click(function()
{
window.location.href="Requests.html";
});
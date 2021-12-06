
$(function ()
{
    function getJson()
    {
    var JSONobj,JSobj;
    var xhr =new XMLHttpRequest();
    xhr.open("GET","employees.json");
    xhr.onload=function()
    {
        allemployees=JSON.parse(xhr.response);
    }
    xhr.send("");
    }
    getJson();
        allemployees=[];
        var admain=
            {
                username:'mahmoud',
                password:'123'
            };
            //in JSON File
            // var subAdmin=
            // {
            //     username:'ahmed',
            //     password:'111'
            // };

    //Login Validation
    $("#submitLogin").on('click', function ()
    {
        q=confirm("Confirm login");
        username = document.getElementById("username").value;
        password = document.getElementById("password").value;

        if(q==true)
        {
            if(username==admain.username && password==admain.password)
            {
                window.location.href="Admin.html"
            }
            else
            {
                for (let i in allemployees)
                {
                    if(username==allemployees[i].username&&password==allemployees[i].password&&allemployees[i].req==1)
                    {
                       sessionStorage.setItem("AllEmployee",JSON.stringify(allemployees[i]));
                        window.location.href="Employee.html";
                    }
                }
            }
        }
        else
        {
                alert("Enter Again");
        }
    });

    //Register validation
    $("#submitRegister").on('click', function () {
        q2=confirm("Confirm registration");
        FirstName = document.getElementById("FirstName").value;
        LastName = document.getElementById("LastName").value;
        Address = document.getElementById("Address").value;
        Email = document.getElementById("Email").value;
        Age = document.getElementById("Age").value;
        regex=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        registerform=document.getElementById("registerform");
        if(q2==true)
        {
            if(FirstName.trim()!=''&&LastName.trim()!=''&&Address.trim()!=''&&Email.match(regex)&&Age.trim()!='')
            {
            randUser=FirstName+Math.floor(Math.random()*1000)
            randPass=FirstName+LastName+Math.floor(Math.random()*1000)
            myemp=
            {
                'username':randUser,
                'password':randPass,
                'FirstName':FirstName,
                'LastName':LastName,
                'Address':Address,
                'Email':Email,
                'Age':Age,
                "Late":0,
                "Absence":0,
                "AttendanceTimes":0,
                "Time":"00:00",
                'req':0
            };
            allemployees.push(myemp);

            //Save JSON
            var saveJson = function(allemployees)
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
            saveJson(allemployees);
            }
            else
            {
                alert("Enter Valid Data");
            }
        }
        else
        {
            alert("Canceled , Enter Again");
        }
    });
});
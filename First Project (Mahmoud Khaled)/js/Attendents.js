$(function ()
{   function getJson()
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
$("#show").on('click', function ()
{
    q=confirm("Show Data");
    if(q==true)
    {
        username = document.getElementById("usernamevalue").value;
        for (let i in allemployees)
        {
            if(username==allemployees[i].username&&allemployees[i].req==1)
            {
                document.getElementById("username").innerHTML = username;
                function addZero(i)
                {
                if (i < 10)
                {
                    i = "0" + i;
                }
                return i;
                }

                var d = new Date();
                var x = document.getElementById("time");
                var h = addZero(d.getHours());
                var m = addZero(d.getMinutes());
                var s = addZero(d.getSeconds());
                x.innerHTML = h + ":" + m + ":" + s;
                if(username.trim())
                {
                    if(h==09&&m<=30)
                    {
                        alert("on time");
                    }
                    else if(h=09&&m>30&&m<45)
                    {
                        alert("Late");
                        allemployees[i].Late++;
                    }
                    else
                    {
                        alert("Absence");
                        allemployees[i].Absence++;
                    }
                    allemployees[i].AttendanceTimes++;
                    allemployees[i].Time= addZero(d.getHours()) + ":" + addZero(d.getMinutes());
                    $("#details").show();
                    saveJson(allemployees);
                }
                else
                {
                    alert("Please Enter Name ");
                }
            }
        }
    }
    else
    {
        alert("Canceled");
    }
});
$("#close").on('click',function()
{
    $("#details").hide();
});
});

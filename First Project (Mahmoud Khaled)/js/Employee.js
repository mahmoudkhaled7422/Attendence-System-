$("#tabs").tabs();
$("#attendacesbtn").click(function()
{
   window.location.href="Attendents.html";
});
$(function()
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
   getData=JSON.parse(sessionStorage.getItem("AllEmployee"));
   document.getElementById("name").innerText=getData.username;
   if(getData.username=="ahmed")
   {
      document.getElementById("attendacesbtn").disabled=false;
   }
   //Monthly
   var AttendanceSpan=document.getElementById("AttendanceTimes");
   AttendanceSpan.innerText=getData.AttendanceTimes;
   var LateSpan=document.getElementById("LateTimes");
   LateSpan.innerText=getData.Late;
   var AbsenceSpan=document.getElementById("AbsenceTimes");
   AbsenceSpan.innerText=getData.Absence;
   //Daily
   var TimeSpan=document.getElementById("Time");
   TimeSpan.innerText=getData.Time;
   var IsLate=document.getElementById("Late");
   var IsAbsence=document.getElementById("Absence");
   if(getData.Time>"09:15"&&getData.Time<="09:30")
   {
    IsLate.innerText="YES";
    IsAbsence.innerText="NO";
   }
   else if(getData.Time>"09:30")
   {
    IsLate.innerText="-----";
    IsAbsence.innerText="Yes";
   }
   else
   {
    IsLate.innerText="NO";
    IsAbsence.innerText="No";
   }
});
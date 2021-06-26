const boxes= document.getElementsByClassName("box");
var varremain=35;
var varBooked=0;
var RemainingSeats=document.querySelector(".RemainingSeats");
var BookedSeats=document.querySelector(".BookedSeats");

for (var i=0;i<boxes.length;i++){
    boxes[i].addEventListener("click",(e)=>{
        if(e.target.classList.contains("booked"))
        {
            e.target.classList.remove("booked")
            varBooked--;
            BookedSeats.innerHTML="Booked Seats:"+varBooked;
            varremain++;
            RemainingSeats.innerHTML="Remaining Seats :"+ varremain;

        }
        else{
            e.target.classList.add("booked");
            varBooked++;
            BookedSeats.innerHTML="Booked Seats:"+varBooked;
            varremain--;
            RemainingSeats.innerHTML="Remaining Seats :"+ varremain;

        }
    })
}

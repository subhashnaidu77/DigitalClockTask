


printClock = () => {
    let da = new Date();
    let val = da.getHours();
    let val1 = da.getMinutes();
    let val2 = da.getSeconds();
    let val3 = da.getDay();
    let val5 = da.getMonth();
    let val6 =da.getDate();
    let val7=da.getFullYear();
    let val4 = "AM";
    let dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let monthNames=['January','February','March','April','May','June','July','August','September','October','Novemeber','December'];
    if (val == 0) {
        val = 12;
    }
    if (val > 12) {
        val = val - 12;
        val4 = "PM";
    }
    // let val3 = da.getDay();
    val = val < 10 ? "0" + val : val;
    val1 = val1 < 10 ? "0" + val1 : val1;
    val2 = val2 < 10 ? "0" + val2 : val2;

    document.querySelector(".hours").innerHTML = val;
    document.querySelector(".minutes").innerHTML = val1;
    document.querySelector(".seconds").innerHTML = val2;

    document.querySelector(".meridian").innerHTML = val4;
    document.querySelector(".day").innerHTML = dayNames[val3];
    document.querySelector(".date").innerHTML = val6;
    document.querySelector(".year").innerHTML = val7;
    document.querySelector(".month").innerHTML=monthNames[val5];
}
setInterval(() => { printClock() }, 1000)
var myIndex = 0;
slider();

function slider() {
    var i;
    var x = document.getElementsByClassName("slides");

    for(i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if(myIndex > x.length) {myIndex = 1}

    x[myIndex - 1].style.display = "block";
    setTimeout(slider, 3000);
}

function validateDOB() {
    // var inputValues = document.getElementById('')

    var d = new Date();
    var n = d.getHours();
    var m = d.getMinutes();
    var p = d.getSeconds();

    var date = document.getElementById("dateInput").value;
    var month = document.getElementById("monthInput").value;
    var year = document.getElementById("yearInput").value;

    var dateCheck = /^(0?[1-9]|[12][0-9]|3[01])$/;
    var monthCheck = /^(0[1-9]|1[0-2])$/;
    var yearCheck = /^\d{4}$/; 

    if(month.match(monthCheck) && date.match(dateCheck) && year.match(yearCheck)) {
        var ListofDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        if(month == 1 || month > 2) {
            if(date > ListofDays[month - 1]) {
                alert('Invalid date format!');
                return false;
            }
        }

        if(month == 2) {
            var leapYear = false;

            if((!(year % 4) && year % 100) || !(year % 400)) {
                leapYear = true;
            }

            if((leapYear == false) && (date >= 29)) {
                alert('Invalid date format!');
                return false;
            }

            if((leapYear == true) && (date > 29)) {
                alert('Invalid date format!');
                return false;
            }
        }

        var flag = 1
    } else {
        alert("invalid date!");
    }
}

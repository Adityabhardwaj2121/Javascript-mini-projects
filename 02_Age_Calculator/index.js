

let birthDate = document.getElementById('date');

birthDate.max = new Date().toISOString().split("T")[0]; // Gets current date → converts to ISO format (YYYY-MM-DDTHH:MM:SSZ) → splits at "T" → takes only the date part (YYYY-MM-DD) for input maxssss
// Follows UTC

let result = document.getElementById("result");


function calculateAge(){
    let Bday = new Date(birthDate.value)

    let d1 = Bday.getDate();
    let m1 = Bday.getMonth() + 1;
    let y1 = Bday.getFullYear();

    let today = new Date();

    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    let d3, m3 , y3;

    y3 = y2 - y1;

    if( m2 >= m1){
        m3 = m2-m1
    }
    else{
        y3 = y3-1;
        m3 = 12 + m2 - m1;
    }

    if(d2 >= d1){
        d3 = d2-d1;
    }
    else{
        m3--
        let d4 = getDaysInMonth(y2 ,m2);
        d3 = d2 + d4 - d1;
    }
    if(m3<0){
        m3 = 11;
        y3--;
    }
    console.log(y3,m3,d3);
    result.innerHTML = `You are ${y3} years, ${m3} months and ${d3} days old.`
}

function getDaysInMonth(year, month){
    return new Date(year, month, 0).getDate(); // Pass next month as input, day 0 makes JS go 1 day back → last day of target month
}



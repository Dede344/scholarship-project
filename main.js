let fname=document.getElementById("fname")
let lname=document.getElementById("lname")
let mname=document.getElementById("mname")
let gender=document.getElementById("gender")
let dates=document.getElementById("dates")
let mail=document.getElementById("mail")
let pnum=document.getElementById("pnum")
let addie=document.getElementById("addie")
let city=document.getElementById("city")
let code=document.getElementById("code")
let country=document.getElementById("country")
let sub_1=document.getElementById("sub_1")
let sub_2=document.getElementById("sub_2")
let sub_3=document.getElementById("sub_3")
let sub_4=document.getElementById("sub_4")
let sub_5=document.getElementById("sub_5")
let sub_6=document.getElementById("sub_6")
let sub_7=document.getElementById("sub_7")
let sub_8=document.getElementById("sub_8")
let sub_9=document.getElementById("sub_9")
let scores1=document.getElementById("scores1")
let scores2=document.getElementById("scores2")
let scores3=document.getElementById("scores3")
let scores4=document.getElementById("scores4")
let scores5=document.getElementById("scores5")
let scores6=document.getElementById("scores6")
let scores7=document.getElementById("scores7")
let scores8=document.getElementById("scores8")
let scores9=document.getElementById("scores9")
let fnameError=document.getElementById("fnameError")
let lnameError=document.getElementById("lnameError")
let mnameError=document.getElementById("mnameError")
let genderError=document.getElementById("genderError")
let datesError=document.getElementById("datesError")
let mailError=document.getElementById("mailError")
let pnumError=document.getElementById("pnumError")
let addieError=document.getElementById("addieError")
let cityError=document.getElementById("cityError")
let codeError=document.getElementById("codeError")
let countryError=document.getElementById("countryError")
let sub_1Error=document.getElementById("sub_1Error")
let sub_2Error=document.getElementById("sub_2Error")
let sub_3Error=document.getElementById("sub_3Error")
let sub_4Error=document.getElementById("sub_4Error")
let sub_5Error=document.getElementById("sub_5Error")
let sub_6Error=document.getElementById("sub_6Error")
let sub_7Error=document.getElementById("sub_7Error")
let sub_8Error=document.getElementById("sub_8Error")
let sub_9Error=document.getElementById("sub_9Error")
let scores1Error=document.getElementById("scores1Error")
let scores2Error=document.getElementById("scores2Error")
let scores3Error=document.getElementById("scores3Error")
let scores4Error=document.getElementById("scores4Error")
let scores5Error=document.getElementById("scores5Error")
let scores6Error=document.getElementById("scores6Error")
let scores7Error=document.getElementById("scores7Error")
let scores8Error=document.getElementById("scores8Error")
let scores9Error=document.getElementById("scores9Error")
let btn=document.getElementById("btn")
let chat=document.getElementById("chat").getContext("2d")

let agePoint = 0
let countryPoint = 0
let pointAward = 0
let totalPoint = 0



btn.addEventListener("click", function(){

    validateData()
})

function validateData(){
    if (fname.value == ""){
        fnameError.innerHTML = "*"
    }else{
        fnameError.innerHTML = ""
    }
    if (lname.value == ""){
        lnameError.innerHTML = "*"
    }else{
        lnameError.innerHTML = ""
    }
    if (mname.value == ""){
        mnameError.innerHTML = "*"
    }else{
        mnameError.innerHTML = ""
    }
    if (gender.value == ""){
        genderError.innerHTML = "*"
    }else{
        genderError.innerHTML = ""
    }
    if (dates.value == ""){
        datesError.innerHTML = "*"
    }else{
        datesError.innerHTML = ""
    }
    if (mail.value == ""){
        mailError.innerHTML = "*"
    }else{
        mailError.innerHTML = ""
    }
    if (pnum.value == ""){
        pnumError.innerHTML = "*"
    }else{
        pnumError.innerHTML = ""
    }
    if (addie.value == ""){
        addieError.innerHTML = "*"
    }else{
        addieError.innerHTML = ""
    }
    if (city.value == ""){
        cityError.innerHTML = "*"
    }else{
        cityError.innerHTML = ""
    }
    if (code.value == ""){
        codeError.innerHTML = "*"
    }else{
        codeError.innerHTML = ""
    }
    if (country.value == ""){
        countryError.innerHTML = "*"
    }else{
        countryError.innerHTML = ""
    }
    if (sub_1.value == ""){
        sub_1Error.innerHTML = "*"
    }else{
        sub_1Error.innerHTML = ""
    }
    if (sub_2.value == ""){
        sub_2Error.innerHTML = "*"
    }else{
        sub_2Error.innerHTML = ""
    }
    if (sub_3.value == ""){
        sub_3Error.innerHTML = "*"
    }else{
        sub_3Error.innerHTML = ""
    }
    if (sub_4.value == ""){
        sub_4Error.innerHTML = "*"
    }else{
        sub_4Error.innerHTML = ""
    }
    if (sub_5.value == ""){
        sub_5Error.innerHTML = "*"
    }else{
        sub_5Error.innerHTML = ""
    }
    if (sub_6.value == ""){
        sub_6Error.innerHTML = "*"
    }else{
        sub_6Error.innerHTML = ""
    }
    if (sub_7.value == ""){
        sub_7Error.innerHTML = "*"
    }else{
        sub_7Error.innerHTML = ""
    }
    if (sub_8.value == ""){
        sub_8Error.innerHTML = "*"
    }else{
        sub_8Error.innerHTML = ""
    }
    if (sub_9.value == ""){
        sub_9Error.innerHTML = "*"
    }else{
        sub_9Error.innerHTML = ""
    }
    if (scores1.value == ""){
        scores1Error.innerHTML = "*"
    }else{
        scores1Error.innerHTML = ""
    }
    if (scores2.value == ""){
        scores2Error.innerHTML = "*"
    }else{
        scores2Error.innerHTML = ""
    }
    if (scores3.value == ""){
        scores3Error.innerHTML = "*"
    }else{
        scores3Error.innerHTML = ""
    }
    if (scores4.value == ""){
        scores4Error.innerHTML = "*"
    }else{
        scores4Error.innerHTML = ""
    }
    if (scores5.value == ""){
        scores5Error.innerHTML = "*"
    }else{
        scores5Error.innerHTML = ""
    }
    if (scores6.value == ""){
        scores6Error.innerHTML = "*"
    }else{
        scores6Error.innerHTML = ""
    }
    if (scores7.value == ""){
        scores7Error.innerHTML = "*"
    }else{
        scores7Error.innerHTML = ""
    }
    if (scores8.value == ""){
        scores8Error.innerHTML = "*"
    }else{
        scores8Error.innerHTML = ""
    }
    if (scores9.value == ""){
        scores9Error.innerHTML = "*"
    }else{
        scores9Error.innerHTML = ""
    }
    
    if (fname.value != "" &&  lname.value != "" &&mname.value != "" && gender.value != "" && dates.value != "" && mail.value != "" && pnum.value != "" && addie.value != "" && city.value != "" && country.value != "" && sub_1.value != "" && sub_2.value != "" && sub_3.value != ""&& sub_4.value != ""&& sub_5.value != "" && sub_6.value != "" && sub_7.value != "" && sub_8.value != "" && sub_9.value != "" && scores1.value != "" && scores2.value != "" && scores3.value != "" && scores4.value != "" && scores5.value != "" && scores6.value != "" && scores7.value != "" && scores8.value != "" && scores9.value != ""){
        
        proceed()
    }
}


function proceed(){
    
    let todayDate = new Date();
    let currentYear = todayDate.getFullYear();
    let birthDay = new Date(dates.value);
    let birthYear = birthDay.getFullYear();
    let old = currentYear - birthYear;

    if(old >= 18 && old <= 24){
        agePoint += 100        
    }else if(old >= 25 && old <= 30){
        agePoint += 80
    }else if(old >= 31 && old <= 35){
        agePoint += 50
    }else if(old >= 36 && old <= 40){
        agePoint += 30
    }else if(old >= 41){
        agePoint += 10
    }else{
        agePoint += 0
    }

//Country point If Statement//

    if(country.value == "africa"){
        countryPoint += 50
    }
    else if(country.value == "asia"){
        countryPoint += 40
    }
    else if (country.value == "southAmerica"){
        countryPoint += 30
    }
    else if (country.value == "northAmerica"){
        countryPoint += 20
    }
    else if (country.value == "europe"){
        countryPoint += 10
    }
    else{
        countryPoint += 0
    }

    

    let grade1 = Number(scores1.value)
    let grade2 = Number(scores2.value)
    let grade3 = Number(scores3.value)
    let grade4 = Number(scores4.value)
    let grade5 = Number(scores5.value)
    let grade6 = Number(scores6.value)
    let grade7 = Number(scores7.value)
    let grade8 = Number(scores8.value)
    let grade9 = Number(scores9.value)
   

    let average = (grade1 + grade2 + grade3 + grade4 + grade5 + grade6 + grade7 + grade8 + grade9) / 9

    if (average >= 90 && average <= 100){
        pointAward += 150
    }
    else if(average >= 85 && average <= 89){
        pointAward += 140
    }
    else if(average >= 75 && average <= 84){
        pointAward += 120
    }
    else if(average >= 65 && average <= 74){
        pointAward += 100
    }
    else if(average >= 60 && average <= 64){
        pointAward += 80
    }
    else if(average >= 50 && average <= 59){
        pointAward += 50
    }
    else if(average >= 40 && average <= 49){
        pointAward += 20
    }
    else{
        pointAward += 0
    }

    process()
}



function process(){
    totalPoint = agePoint + countryPoint + pointAward
    if (totalPoint > 180){
        
        let summaryChart = new Chart(chat, {
        type: 'pie',
            data: {
                labels: ['AGE', 'COUNTRY', 'GRADE'],
                datasets: [{
                    label: 'Point Summary',
                    data: [agePoint, countryPoint, pointAward],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
    });
        messageTxt.innerHTML = "You have " + totalPoint + " points and " + "your schorlaship request has been granted"
        messageTxt.style.color == "purple"
        
    }else {
        messageTxt.innerHTML =  "You have " + totalPoint + " points and " + "your scholarship request failed !"
    }

    endService()
}

let subjectType =["Select Option", "Accounting", "Biology", "Economics", "Commerce", "Chemistry", "Government", "Physics", "Geography", "Fine Art", "History", "Agricultural Science", "Literature"]
console.log(subjectType);




function endService(){
    fname.value = ""
    lname.value = ""
    mname.value = ""
    gender.value = ""
    dates.value = ""
    mail.value = ""
    pnum.value = ""
    addie.value = ""
    city.value = ""
    code.value = ""
    country.value = ""
    sub_1.value = ""
    sub_2.value = ""
    sub_3.value = ""
    sub_4.value = ""
    sub_5.value = ""
    sub_6.value = ""
    sub_7.value = ""
    sub_8.value = ""
    sub_9.value = ""
    scores1.value = ""
    scores2.value = ""
    scores3.value = ""
    scores4.value = ""
    scores5.value = ""
    scores6.value = ""
    scores7.value = ""
    scores8.value = ""
    scores9.value = ""
    

}
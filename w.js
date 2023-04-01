function sidebarOpen() {
    document.getElementById('sidebar').style.width = "300px"
}
function sidebarClose() {
    document.getElementById('sidebar').style.width = "0"
}
function getStarted(){
    location.href = "./loginpage.html"
}
function knowMore(){
    location.href = "./aboutus.html"
}
function meaningofIWD(){
    location.href = "./iwdmeaning.html" 
}
function history(){
    location.href = "./born.html"
}
// const observer = new IntersectionObserver((entries) =>{
//     entries.forEach((entry) => {
//         console.log(entry)
//         if(entry.isIntersecting){
//             entry.target.classList.add('show')
//         }
//         else{
//             entry.target.classList.remove('show')
//         }
//     })
// })
// const hiddenElements = document.querySelectorAll('.hidden')
// hiddenElements.forEach((el) => observer.observe(el))


function checkCreate(){
    let newuser = document.getElementById('newuser').value
    let newpass = document.getElementById('newpass').value
    let confpass = document.getElementById('confpass').value
    console.log(newuser, newpass)
    if(newuser == "" || newpass == "" || confpass !== newpass){
        document.getElementById('fill').innerHTML = "Fill in the info!!"
    }else{
        localStorage.setItem('user', newuser)
        localStorage.setItem('pass', newpass)
        location.href = "./loginpage.html"
    }
}
function check(){
    console.log(localStorage.getItem('user'), localStorage.getItem('pass'))
    let loginuser = document.getElementById('user').value
    let loginpass = document.getElementById('pass').value
    if(loginuser == localStorage.getItem('user') && loginpass == localStorage.getItem('pass')){
        location.href = "shop.html"
    }
    else{
        alert("Wrong Username or Password!!")
    }
}
let country = document.getElementById('country')
let tem = document.getElementById('tem')
let time = document.getElementById('time')
async function getdata(){
  fetch('http://api.weatherapi.com/v1/current.json?key=0f3f9e81c62144a1808122008222911&q=Vietnam')
  .then((response) => response.json())
  .then((data)=>{
    console.log(data);
    country.innerHTML = data.location.name
    tem.innerHTML = data.current.temp_c + "°C"
    time.innerHTML = data.location.localtime
  })
}

getdata()

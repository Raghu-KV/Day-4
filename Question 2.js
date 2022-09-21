// alert("working")
let request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all")
request.send()
request.onload = function(){
    let res = JSON.parse(request.response)
    // console.log(res)

      for(let i = 0; i < res.length; i++){
        console.log(`${res[i].flag}`)
        }
}
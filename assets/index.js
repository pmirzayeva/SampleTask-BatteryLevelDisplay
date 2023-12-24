const myPromise=navigator.getBattery()
console.log(myPromise);

myPromise.then(function(data){
    // console.log(data);
    const battery=data.level * 100 
    // console.log(battery);

    const textLevel=document.querySelector("#textLevel")
    const progressLine=document.querySelector("#progressLine")

    textLevel.innerHTML=`Your Computer's Battery Level : ${Math.floor(battery)}%`

    progressLine.style.width=`${battery}%`

    if(battery>60){
        progressLine.setAttribute("data-progress","green")
        progressLine.classList.add("bg-success")
        progressLine.classList.remove("bg-danger")
    }else{
        progressLine.setAttribute("data-progress","red")
        progressLine.classList.remove("bg-success")
        progressLine.classList.add("bg-danger")
    }
}).catch(function(err){
    console.log(err);
}).finally()
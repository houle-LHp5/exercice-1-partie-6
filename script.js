function checkBissextile(year){
    if(((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)){
  return true;  
    }else{
        return false
    }
}
//console.log(checkBissextile(2024));

let starYear = 100;
let endYear = 2030;
for(let year = starYear; year <=endYear; year++){
    if(checkBissextile(year)){
        yearList.innerHTML += `<li class="text-danger">${year}</li>`;
    }else{
        yearList.innerHTML += `<li>${year}</li>`;
    }
    
}


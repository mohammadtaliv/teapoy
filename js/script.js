document.querySelector("header .col:last-child span").onclick = ()=>{
    document.querySelector(".fa-caret-down").classList.toggle("fa-caret-up");
    document.querySelector(".currencyDropdown").classList.toggle("currencyDropdownactive");
}

let p = document.querySelectorAll("header .col:last-child .currencyDropdown ul li")


p.forEach((list,index)=>{
    list.addEventListener("click" , ()=>{ 
        for(let a of p){
            a.querySelector('a').classList.remove("currencybgcolor")
        }
        document.querySelector('header .currency input').value= list.querySelector("a").innerHTML
        list.querySelector("a").classList.add("currencybgcolor")
        document.querySelector(".fa-caret-down").classList.toggle("fa-caret-up");
        document.querySelector(".currencyDropdown").classList.toggle("currencyDropdownactive");
        
        
    })
})
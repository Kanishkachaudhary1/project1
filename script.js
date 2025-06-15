const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
const search = () =>{
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const storeitems = document.getElementById("pro-container")
    const pro = document.querySelectorAll(".pro")
    const pname = storeitems.getElementsByTagName("h5")
    
    for(var i=0; i < pname.length; i++){
        let match = pro[i].getElementsByTagName('h5')[0];
    
    if(match){
        let textvalue = match.textContent || match.innerHTML

        if(textvalue.toUpperCase().indexof(searchbox) >-1){
            pro[i].style.display ="";
            
             } else {
                    pro[i].style.display ="none";
                }
            }
        }
    }



if (bar){
    bar.addEventListener('click',() =>{
        nav.classList.add('active');
    })
}

if (close){
    close.addEventListener('click',() =>{
        nav.classList.remove('active');
    })
}

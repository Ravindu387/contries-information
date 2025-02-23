fetch("https://restcountries.com/v3.1/all")
.then(res=>res.json())
.then(data=>{
    let tblCountries=document.getElementById("tbl");

    let tblBody=`<tr>
                    <th>Name</th>
                    <th>Flag</th>
                    <th>Capital</th>
                    <th>Population</th>
                </tr>`;

    data.forEach(element => {
        tblBody+=`<tr>
                    <td>${element.name.common}</td>
                    <td><img src="${element.flags.png}" width="100px"></td>
                    <td>${element.capital}</td>
                    <td>${element.population}</td>
                </tr>`
    });

    tblCountries.innerHTML=tblBody;
})



// https://restcountries.com/v3.1/name/{name}


function searchValue(){
    let searchValue=document.getElementById("txtSearchValue").value;

    let officialName = document.getElementById("officialName");
   let name = document.getElementById("name")
   let img =  document.getElementById("img")
   let capital = document.getElementById("capital")
   let population = document.getElementById("population")


    console.log(searchValue);
    fetch(`https://restcountries.com/v3.1/name/${searchValue}`)
    .then(res=>res.json())
    .then(data =>{

        data.forEach(obj=>{
            officialName.innerText = obj.name.official;
            name.innerText = obj.name.common;
            img.src = obj.flags.png;
            capital.innerText = obj.capital[0];
     
            img.innerHTML=`<img src="${obj.flags.png}" alt="">`
        })
        console.log(data);



    
    })
}
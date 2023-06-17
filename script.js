/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    arr.map((element)=>{
        if(element.profession==="developer")
        {
            console.log(element);
        }

    })
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    arr.forEach((element)=>{
        if(element.profession==="developer")
        {
            console.log(element);
        }
    })
  }
  
  function addData() {
    //Write your code here, just console.log
    let item=arr.length;
    let newarr={id:item+1,name:"susan",age:"20",profession:"intern"}
    arr.push(newarr);
    console.log(arr);

  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    arr.filter((element)=>{
        if(element.profession!=="admin")
        {
            console.log(element);
        }
    })
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    let list=[{id:5,name:"ajay",age:"24",profession:"developer"},{id:6,name:"srirsm",age:"26",profession:"admin"},{id:7,name:"veera",age:"20",profession:"developer"}];
    let addarr=arr.concat(list);
    console.log(addarr);
  }
let dbusers = [
    {
        username:"Harith",
        password:"020201",
        name:"Tadak",
        email:"B022120045@student.utem.edu.my"
    },
    {
        username:"Afifi",
        password:"080601",
        name:"Fifi",
        email:"B022120017@student.utem.edu.my"
    },
    {
        username:"Haniff",
        password:"DT2253",
        name:"Anep",
        email:"B022120044@student.utem.edu.my"
    }
]

function login(reqUsername,reqPassword){
   let matchUser = dbusers.find(user => user.username == reqUsername)
  
   if(!matchUser) return "User not found!"
   if(matchUser.password == reqPassword){
    return matchUser
   }else{
    return "invalid password!"
   }

}

function register(reqUsername,reqPassword,reqName,reqEmail){
    dbusers.push({
        username: reqUsername,
        password: reqPassword,
        name: reqName,
        emai: reqEmail
    })
}


console.log(login("Harith","020201"))
register("Amir","070601","mektum","B022120044@student.utem.edu.my")
console.log(login("Amir","070601"))
console.log(login("Bal","070601"))
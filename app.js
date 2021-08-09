window.onload = () => {
    document.getElementById("generate").innerHTML = generateDomain();  
    document.getElementById("generate1").innerHTML = generateDomain();  
    document.getElementById("generate2").innerHTML = generateDomain();  
}

let generateDomain =() => {
   
    

    let pronoun = ["the", "our", "we", "they"];
    let subject = ["home", "ice-creams", "cars", "pool-party", "kitchens", "cats", "dogs","zoo", "chairs", "mechanics", "jogger", "racoon", "tours"];
    let action = ["isred", "isblue", "isgreen", "isorange", "isblack", "iswhite", "ispink", "isgray", "isblue"];
    let domain = [".com", ".cl", ".es", ".mx", ".dev"];
    
    for (let n = 0; n < pronoun.length; n++) {
        var respuesta1 = (pronoun[n] + subject[n] + action[n] + domain[n]);
    }
    

    for (let n = 0; n < pronoun.length; n++) {
        var respuesta2 = (pronoun[Math.floor(Math.random() * pronoun.length)] + subject[Math.floor(Math.random() * subject.length)] + action[Math.floor(Math.random() * action.length)] + domain[Math.floor(Math.random() * domain.length)]);
    }
return respuesta1, respuesta2;
}







//Add at least 3 dynamic components to your web page. These can be based on user input, or other dynamic input data.

//At least one dynamic component should be based on user input.

//At least one dynamic component should use a conditional statement to determine the output.



// WELCOME
alert ("you'e welcom to coding school") ;
var userName = prompt('whats you name?');
validationofname(userName);
alert("let's see how old are?");
var age=prompt("please enter your age "+userName+"!");
validationofage(age);
agetest(age);








//Add validation on one of the user inputs.
// Keep asking until an acceptable value is entered.

function validationofname(){
while ( !isNaN(userName))
    { if (userName==false){
        break
    }
    
    alert ("plz enter a name not a number ") ;
    userName = prompt('whats your name?');
}
}








function validationofage(){


    while ( isNaN(age))
    {
        
        alert ("plz enter your age as a number ") ;
        age = prompt('how old are you?');
        
        
    }
        return
    }









function agetest(){   
    var advice1='python is best for you ';
    var advice2='html is best for you ';
    var techPerson      
    candel='<img src="imgs/candel.jpg" width="200px">';
        
    if (age<18){
        document.write("<h1> You are sweet young person </h1>")

        for (i=0;i<age;i++)
        {
            b=i+1
        document.write(candel+b);
            
        }

    }


    else {
        
        if (window.confirm("are you a tech person ?")==true)
        {
            techPerson=true
            console.log("techPerson= "+techPerson)
            alert (advice1+userName)
            
            if (window.confirm("Do you want to go to python?")==true){
                window.location.href = "https://capmohamad.github.io/lab03/m";
                window.location.replace("https://capmohamad.github.io/lab03/m");}
                
            else{
                alert("let's play a game , you right a color and we gonna change the page color  ")
                color= prompt("choose a color")
                document.body.style.backgroundColor = color;

                
            }    

        }
        else {
            techPerson=false
            console.log("techPerson= "+techPerson)
            alert (advice2+userName)
            if (window.confirm("Do you want to go to html?")==true){
                window.location.href = "https://bayankhalil.github.io/coding-school-/";
                window.location.replace("https://bayankhalil.github.io/coding-school-/");}
                
            else{
                document.write('<h1>'+'NOTE: if you know html you should move to css '+userName+'</h1>');
            }   
            
            return
        
        }
    }
}

    
    


// Show an image related to your page’s topic, repeated within your page.
// Prompt the user with a relevant question for a number (e.g.: “How many cats do you want?” or “What star rating would you give, 1-5?”)
// Use a loop in your JavaScript code to show the image that many times.
// // How could you use functions to make your code more readable?











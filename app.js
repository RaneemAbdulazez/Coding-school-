//Add at least 3 dynamic components to your web page. These can be based on user input, or other dynamic input data.

//At least one dynamic component should be based on user input.

//At least one dynamic component should use a conditional statement to determine the output.


var advice1='python is best for you ';
var advice2='html is best for you ';
var techPerson


alert ("you'e welcom to coding school") 

var userName = prompt('whats you name?');
console.log(userName);


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
   
}





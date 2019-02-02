document.getElementById("message").addEventListener("click", function(){
    const prompt_input = window.prompt('Are you sure you want to place this order? ');
    console.log(prompt_input);
    if(prompt_input === "Yes" || prompt_input === "yes")
    {
        var yes = confirm("Form Submitted!");
        if (yes == true)
        {
            location.href = "artwork.html";
        }else{
            location.href = "form.html"
        }
    }else{
        var no = confirm("Oh, my bad :( Please Continue");
    }
});
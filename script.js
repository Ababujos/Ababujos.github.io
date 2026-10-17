function changeGreeting(){
    const name = prompt("What is your name?");
    if (name) {
        const hour = new Date().getHours();
        let message;

        if (hour < 6) {
            message = "You have woken up very early";
        }
        else if (hour < 12) {
            message = "Good morning";
        } else if (hour < 18) {
            message = "Good afternoon";
        } else {
            message = "Good evening";
        }
        document.getElementById("greeting").textContent = message + "," + name +"!";
    }
}
function submitApplication(e) {
    e.preventDefault(); 

    const jobs = document.getElementsByName('job');
    

    let Job = '';

    for (let i = 0; i < jobs.length; i++) {
        if (jobs[i].checked) {
            Job = jobs[i].value;
            break; 
        }
    }
    
    if (Job) {
        alert(`Thank you for applying to be a ${Job}!`);
    } else {
        alert("Please select a job!");
    }
}

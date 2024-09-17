function submitApplication(e) {
    e.preventDefault(); // Prevent the default form submission

    // Get the list of radio inputs with the name "job"
    const jobOptions = document.getElementsByName('job');
    
    // Initialize a variable to store the selected job
    let selectedJob = '';

    // Loop through the radio inputs to find the one that is checked
    for (let i = 0; i < jobOptions.length; i++) {
        if (jobOptions[i].checked) {
            selectedJob = jobOptions[i].value;
            break; // Exit the loop once the selected job is found
        }
    }

    // Alert the user with the selected job or ask them to select a job if none is selected
    if (selectedJob) {
        alert(`Thank you for applying to be a ${selectedJob}!`);
    } else {
        alert("Please select a job!");
    }
}

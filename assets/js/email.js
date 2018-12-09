$("#rsvpform").on("submit", function(event) {
    event.preventDefault(); // prevent reload
    
    var formData = new FormData(this);
    formData.append('service_id', 'personal_gmail');
    formData.append('template_id', 'weddingsite');
    formData.append('user_id', 'user_6EodhcojVYCogeeXhU017');
 
    $.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
        type: 'POST',
        data: formData,
        contentType: false, // auto-detection
        processData: false // no need to parse formData to string
    }).done(function() {
        alert('Thanks! Your RSVP response has been sent.');
    }).fail(function(error) {
        alert(
            'It looks like we are unable to send your response at this time.\n'+
            'Please email your response instead to kielandanna@gmail.com.\n\n'+ 
            'If the issue persists, please email the error code below to: nakitamccool@gmail.com.\n\n'+
            'Error code:\n'+
            JSON.stringify(error)
        );
    });
});

document.querySelectorAll('.star').forEach(star => {
    star.addEventListener('click', function () {
      const rating = parseInt(this.getAttribute('data-rating'));
  
      // Highlight selected stars
      document.querySelectorAll('.star').forEach(s => s.classList.remove('selected'));
      for (let i = 0; i < rating; i++) {
        document.querySelectorAll('.star')[i].classList.add('selected');
      }
  
      // Handle rating actions
      if (rating >= 4) {
        // Redirect for 4 or 5 star ratings
        window.location.href = 'https://g.page/r/CbJwDOO9B6TZEBM/review';
      } else {
        // Show feedback popup for 1-3 star ratings
        document.getElementById('feedbackPopup').style.display = 'flex';
      }
    });
  });
  
  // Enable the submit button when the user types in the textarea
  document.getElementById('feedbackText').addEventListener('input', function () {
    const submitButton = document.getElementById('submitFeedbackButton');
    submitButton.disabled = this.value.trim() === ''; // Disable if the text is empty
  });
  
  function closePopup() {
    document.getElementById('feedbackPopup').style.display = 'none';
  }
  
  // Submit feedback and show thank you popup
  function submitFeedback() {
    // Hide the feedback popup
    document.getElementById('feedbackPopup').style.display = 'none';
  
    // Show the thank you popup
    document.getElementById('thankYouPopup').style.display = 'flex';
  }
  
  // Close the feedback popup when clicking outside of it
  document.getElementById('feedbackPopup').addEventListener('click', function(event) {
    if (event.target === this) {
      closePopup();
    }
  });
  
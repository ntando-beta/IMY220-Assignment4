// Ntando Mazibuko u20626160
$(document).ready(function () {
  // Select the submit buttons by class
  $(".submit").on("click", function () {
    // Get the value from the textarea
    const messageText = $("#message").val().trim();

    // Check if the message is not empty
    if (messageText !== "") {
      // Determine which button was clicked
      const isLeftButton = $(this).attr("id") === "left";

      // Check if the message contains a YouTube link using a regular expression
      const youtubeLinkRegex = /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([^&\s]+)/;
      const match = messageText.match(youtubeLinkRegex);

      // Create a new div element for the message
      const messageDiv = $("<div></div>")
        .addClass("col-4 offset-4 mb-3 rounded")
        .text(messageText);

      // If a YouTube link is detected, embed the video
      if (match) {
        const videoId = match[1];

        // Create an iframe element for the YouTube video
        const iframe = $('<iframe></iframe>')
          .attr("width", "100%")
          .attr("height", "315")
          .attr("src", `https://www.youtube.com/embed/${videoId}`)
          .attr("frameborder", "0")
          .attr("allowfullscreen", "true")
          .attr("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture")
          .attr("title", "Embedded YouTube video")


        // Append the iframe to the message div
        messageDiv.append(iframe);
      }

      // Add different CSS classes based on the button clicked
      if (isLeftButton) {
        messageDiv.addClass("message-green");
      } else {
        messageDiv.addClass("message-light-blue");
      }

      // Append the message div to the messages container
      $(".messages").append(messageDiv);

      // Clear the textarea
      $("#message").val("");
    }
  });
});
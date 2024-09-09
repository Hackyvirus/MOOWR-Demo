// Function to track and display the visitor count
function visitor_count() {
    // Get the current visitor count from the database
    $count = get_option('visitor_count');

    // If no count exists, initialize it to 0
    if ($count === false) {
        $count = 0;
    }

    // Increment the count by 1 for every new visit
    $count++;

    // Update the count in the database
    update_option('visitor_count', $count);

    // Display the visitor count
    return '<div class="visitor-count">This page has been visited: ' . $count . ' times.</div>';
}

// Register a shortcode to display the visitor count
add_shortcode('visitor_count', 'visitor_count');

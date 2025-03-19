function nextPage() {
    //array of pages
    const pages = ["index.html", "televisions.html", "about.html"]; 
    //get the current page name 
    let currentPage = window.location.pathname.split("/").pop(); 
    let currentIndex = pages.indexOf(currentPage); // Find current page index

    if (currentIndex !== -1 && currentIndex < pages.length-1) {
        window.location.href = pages[currentIndex + 1]; // Go to the next page
    } 
}
    function prevPage() {
        const pages = ["index.html", "televisions.html", "about.html"];
        let currentPage = window.location.pathname.split("/").pop();
        let currentIndex = pages.indexOf(currentPage);

        if (currentIndex > 0) {
            window.location.href = pages[currentIndex - 1]; // Go to the previous page
        } 
    }

    //GenAI supported the JavaScript code

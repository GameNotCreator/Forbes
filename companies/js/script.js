document.getElementById("searchForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var searchValue = document.getElementById("searchInput").value;
    switch (searchValue.toLowerCase()) {
        case 'microsoft':
          window.location.href = "microsoft.html";
          break;
        case 'apple':
          window.location.href = "apple.html";
          break;
        case 'samsung':
          window.location.href = "samsung.html";
          break;
        default:
          alert(`Imposible de trouver ${searchValue}`)
          break;
      }
       
    
    // else if (searchValue.toLowerCase() === "apple") {
    // }
    // else if (searchValue.toLowerCase() === "samsung") {
    // }
    // else if (searchValue.toLowerCase() === "google") {
    //   window.location.href = "google.html";
    // }
    // else if (searchValue.toLowerCase() === "amazon") {
    //   window.location.href = "amazon.html";
    // }
    // else if (searchValue.toLowerCase() === "tesla") {
    //   window.location.href = "tesla.html";
    // }
    // else if (searchValue.toLowerCase() === "samsung") {
    //   window.location.href = "meta.html";
    // }
    // else if (searchValue.toLowerCase() === "samsung") {
    //   window.location.href = "meta.html";
    // }
    // else if (searchValue.toLowerCase() === "samsung") {
    //   window.location.href = "alphabet.html";
    // }
    // else if (searchValue.toLowerCase() === "samsung") {
    //   window.location.href = "samsung.html";
    // }
    // else if (searchValue.toLowerCase() === "samsung") {
    //   window.location.href = "samsung.html";
    // }
    // else {
    // }
  });
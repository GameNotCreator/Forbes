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
});
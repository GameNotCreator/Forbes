document.getElementById("searchForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var searchValue = document.getElementById("searchInput").value;
    switch (searchValue.toLowerCase()) {
        case 'microsoft':
          window.location.href = "./microsoft.html";
          break;
        case 'apple':
          window.location.href = "./apple.html";
          break;
        case 'samsung':
          window.location.href = "./samsung.html";
          break;
        case 'alphabet' || 'google':
          window.location.href = "./alphabet.html";
          break;      
        case 'amazon' || 'amzn':
          window.location.href = "./amazon.html";
          break;
        case 'verizon communications' || 'verizon communication':
          window.location.href = "./verizon_communications.html";
          break;
        case 'atandt' || 'at&t':
          window.location.href = "./atandt.html";
          break;
        case 'china mobile':
          window.location.href = "./china_mobile.html";
          break;
        case 'walt disney' || 'disney':
          window.location.href = "./walt_disney";
          break;
        case 'meta' || 'facebook':
          window.location.href = "./mata.html";
          break;
        case 'united states' || 'usa':
          window.location.href = "./../countries/united_states.html";
          break;
        case 'united kingdom' || 'uk':
          window.location.href = "./../countries/united_kingdom.html";
          break;
        case 'japan':
          window.location.href = "./../countries/japan.html";
          break;
        case 'italy':
          window.location.href = "./../countries/italy.html";
          break;             
        case 'india':
          window.location.href = "./../countries/india.html";
          break;            
        case 'germany':
          window.location.href = "./../countries/germany.html";
          break;    
        case 'france':
          window.location.href = "./../countries/france.html";
          break;        
        case 'china':
          window.location.href = "./../countries/china.html";
          break;        
        case 'canada.html':
          window.location.href = "./../countries/canada.html";
          break;        
        case 'brazil':
          window.location.href = "./../countries/brazil.html";
          break;
        case 'bernard arnault' || 'arnault':
          window.location.href = "./../celebrities/bernard_arnault.html";
          break;
        case 'bill gates' || 'gates':
          window.location.href = "./../celebrities/bill_gates.html";
          break;
        case 'elon musk' || 'musk':
          window.location.href = "./../celebrities/elon_musk.html";
          break;
        case 'jeff_bezos' || 'bezos':
          window.location.href = "./../celebrities/jeff_bezos.html";
          break;
        case 'larry ellison' || 'ellison':
          window.location.href = "./../celebrities/larry_ellison.html";
          break
        case 'larry page' || 'page':
          window.location.href = "./../celebrities/larry_page.html";
          break;
        case 'mukesh_ambani' || 'ambani':
          window.location.href = "./../celebrities/mukesh_ambani.html";
          break
        case 'sergey brin' || 'brin':
          window.location.href = "./../celebrities/sergey_brin.html";
          break;
        case 'steve ballmer' || 'ballmer':
          window.location.href = "./../celebrities/steve_ballmer.html";
          break
        case 'warren buffett' || 'buffett':
          window.location.href = "./../celebrities/warren_buffett.html";
          break;
        default:
          alert(`Imposible de trouver ${searchValue}`)
          break;
      }
});


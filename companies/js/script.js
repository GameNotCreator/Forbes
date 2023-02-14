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
        case 'alphabet' || 'google':
          window.location.href = "alphabet.html";
          break;      
        case 'amazon' || 'amzn':
          window.location.href = "amazon.html";
          break;
        case 'verizon communications' || 'verizon communication':
          window.location.href = "verizon_communications.html";
          break;
        case 'atandt' || 'at&t':
          window.location.href = "atandt.html";
          break;
        case 'china mobile':
          window.location.href = "china_mobile.html";
          break;
        case 'walt disney' || 'disney':
          window.location.href = "walt_disney";
          break;
        case 'meta' || 'facebook':
          window.location.href = "mata.html";
          break;
        case 'brunei' || 'brunei darussalam':
          window.location.href = "./../countries/brunei_darussalam.html";
          break;
        case 'hong kong' || 'hong kong sar':
          window.location.href = "./../countries/hong_kong_sar.html";
          break;
        case 'ireland':
          window.location.href = "./../countries/ireland.html";
          break;
        case 'kuwait':
          window.location.href = "./../countries/kuwait.html";
          break;             
        case 'luxembourg':
          window.location.href = "./../countries/luxembourg.html";
          break;            
        case 'macao' || 'macao sar':
          window.location.href = "./../countries/macao_sar.html";
          break;    
        case 'norway':
          window.location.href = "./../countries/norway.html";
          break;        
        case 'qatar':
          window.location.href = "./../countries/qatar.html";
          break;        
        case 'singapore.html':
          window.location.href = "./../countries/singapore.html";
          break;        
        case 'emirates' || 'united arab emirates':
          window.location.href = "./../countries/united_arab_emirates.html";
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


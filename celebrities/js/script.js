document.getElementById("searchForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var searchValue = document.getElementById("searchInput").value;
    switch (searchValue.toLowerCase()) {
        case 'bernard arnault' || 'arnault':
          window.location.href = "bernard_arnault.html";
          break;
        case 'bill gates' || 'gates':
          window.location.href = "bill_gates.html";
          break;
        case 'elon musk' || 'musk':
          window.location.href = "elon_musk.html";
          break;
        case 'jeff_bezos' || 'bezos':
          window.location.href = "jeff_bezos.html";
          break;
        case 'larry ellison' || 'ellison':
          window.location.href = "larry_ellison.html";
          break
        case 'larry page' || 'page':
          window.location.href = "larry_page.html";
          break;
        case 'mukesh_ambani' || 'ambani':
          window.location.href = "mukesh_ambani.html";
          break
        case 'sergey brin' || 'brin':
          window.location.href = "sergey_brin.html";
          break;
        case 'steve ballmer' || 'ballmer':
          window.location.href = "steve_ballmer.html";
          break
        case 'warren buffett' || 'buffett':
          window.location.href = "warren_buffett.html";
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
        case 'microsoft':
          window.location.href = "./../companies/microsoft.html";
          break;
        case 'apple':
          window.location.href = "./../companies/apple.html";
          break;
        case 'samsung':
          window.location.href = "./../companies/samsung.html";
          break;
        case 'alphabet' || 'google':
          window.location.href = "./../companies/alphabet.html";
          break;      
        case 'amazon' || 'amzn':
          window.location.href = "./../companies/amazon.html";
          break;
        case 'verizon communications' || 'verizon communication':
          window.location.href = "./../companies/verizon_communications.html";
          break;
        case 'atandt' || 'at&t':
          window.location.href = "./../companies/atandt.html";
          break;
        case 'china mobile':
          window.location.href = "./../companies/china_mobile.html";
          break;
        case 'walt disney' || 'disney':
          window.location.href = "./../companies/walt_disney";
          break;
        case 'meta' || 'facebook':
          window.location.href = "./../companies/mata.html";
          break;
        default:
          alert(`Imposible de trouver ${searchValue}`)
          break;
      }
});
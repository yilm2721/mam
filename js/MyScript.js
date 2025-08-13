//------------------About back to top functionality-----------------//
window.addEventListener("scroll", function () {
  const btn = document.getElementById("backToTopBtn");
  btn.style.display = window.scrollY > 300 ? "block" : "none";
});

document.getElementById("backToTopBtn").addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

//------------------ for displaying search text field-----------------//

function toggleSearch() {
    const searchInput = document.getElementById('searchInput');
    searchInput.classList.toggle('d-none');
    searchInput.focus();
  }
document.getElementById('searchInput').addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    e.preventDefault();

    const query = this.value.trim();
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; 

    if (!query) {
      resultsDiv.innerHTML = '<p style="color: red;">Please enter a content.</p>';
      return;
    }

    const lowerQuery = query.toLowerCase();
    let found = 0;
    const elements = document.querySelectorAll('.searchable');

    for (let i = 0; i < elements.length; i++) {
      const el = elements[i];
      if (el.textContent.toLowerCase().includes(lowerQuery)) {
        const resultItem = document.createElement('div');
        resultItem.innerHTML = `<strong>Search result for: "${query}"</strong><br>${el.textContent.trim()}`;
        resultsDiv.appendChild(resultItem);
        found++;
      }
    }

    if (found === 0) {
      resultsDiv.innerHTML = `No results found for: <strong>${query}</strong>`;
    }
  }
});
//------------------About toggle navigation------------------//

document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("navbarToggleBtn");
  const icon = toggleBtn.querySelector("i");
  const collapseElement = document.getElementById("navbarContent");
  const navbar = document.querySelector(".navbar"); // Target the navbar element

  collapseElement.addEventListener('shown.bs.collapse', () => {
    icon.classList.remove('bi-list');
    icon.classList.add('bi-x');
  });

  collapseElement.addEventListener('hidden.bs.collapse', () => {
    icon.classList.remove('bi-x');
    icon.classList.add('bi-list');

    // Revert background color on collapse
    navbar.classList.remove('bg-dark');
    navbar.classList.add('bg-info');
  });
});







const toggleTheme = document.getElementById("toggleTheme");
const rootHtml = document.documentElement
const accordionHeaders = document.querySelectorAll(".accordion__header");
const menuLinks = document.querySelectorAll(".menu__link");

function changeTheme(){
  const currentTheme = rootHtml.getAttribute("data-theme");

  currentTheme === "dark" ? rootHtml.setAttribute("data-theme", "light") : rootHtml.setAttribute("data-theme", "dark")

  toggleTheme.classList.toggle("bi-sun")
  toggleTheme.classList.toggle("bi-moon-stars")
}

toggleTheme.addEventListener("click", changeTheme);

accordionHeaders.forEach(header => {
  header.addEventListener("click", () => {
    const accordionItem = header.parentElement;
    const accordionActive = accordionItem.classList.contains("active");

    accordionActive ? accordionItem.classList.remove("active") : accordionItem.classList.add("active");
  })
})

menuLinks.forEach(item => {
  item.addEventListener("click", () => {
    menuLinks.forEach(i => i.classList.remove("active"));
    item.classList.add("active");
  })
})

function toggleDropdown() {
  var dropdown = document.getElementById("pageDropdown");
  dropdown.classList.toggle("show");
}

// Fecha o dropdown e redireciona para a página selecionada
function redirectToPage(pageURL) {
  window.location.href = pageURL;

  // Opcional: fechar o dropdown após o redirecionamento
  var dropdown = document.getElementById("pageDropdown");
  dropdown.classList.remove("show");
}

// Adiciona um ouvinte de evento para redirecionar quando uma opção é clicada
document.getElementById("pageDropdown").addEventListener("click", function (event) {
  event.preventDefault();
  if (event.target.tagName === "A") {
      redirectToPage(event.target.href);
  }
});

document.querySelectorAll('.flipButton').forEach(button => {
  button.addEventListener('click', function() {
      this.closest('.job-card').classList.add('flipped');
  });
});

document.querySelectorAll('.flipBackButton').forEach(button => {
  button.addEventListener('click', function() {
      this.closest('.job-card').classList.remove('flipped');
  });
});
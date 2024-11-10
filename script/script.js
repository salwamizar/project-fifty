const body = document.querySelector("body"),
      sidebar = document.querySelector(".sidebar"),
      toggle = document.querySelector(".toggle"),
      profile = document.querySelector(".profile"),
      submenu = document.querySelector(".sub-menu"),
      subkategori = document.querySelector(".sub-kategori"),
      toggleButton = document.querySelector(".arrow-dropdown"),
      toggleKategori = document.querySelector(".arrow-dropdown-kategori")

      toggle.addEventListener("click", () =>{
        sidebar.classList.toggle("close");
      });

      toggleButton.addEventListener("click", () =>{
        submenu.classList.toggle("close");
      });

      toggleKategori.addEventListener("click", () => {
        subkategori.classList.toggle("close");
      })


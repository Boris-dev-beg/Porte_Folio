function load(params) {
  const menu = document.getElementById("menu");
  const close_menu = document.getElementById("close_menu");
  var menu_container = document.getElementById("menu_container");
  var class_name = menu_container.getAttribute("class");
  var link_ = menu_container.querySelectorAll("nav a");

  menu.addEventListener("click", (e) => {
    console.log(menu_container);

    menu_container.setAttribute("class", class_name.replace("hidden", "flex"));
    console.log(menu_container);
  });
  close_menu.addEventListener("click", (e) => {
    console.log(menu_container.style.display);
    menu_container.setAttribute("class", class_name.replace("flex", "hidden"));
  });

  link_.forEach((link) => {
    link.addEventListener("click", () => {
      menu_container.setAttribute(
        "class",
        class_name.replace("flex", "hidden"),
      );
    });
  });
}

const body = document.querySelector("body");
body.addEventListener('load', load())
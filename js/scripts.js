/** @format */

AOS.init();
const $form = document.querySelector("#form");
const $buttonMailto = document.querySelector("#enlace");

$form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = new FormData(this);
  $buttonMailto.setAttribute(
    "href",
    `mailto:isato122@gmail.com?subject=nombre ${form.get(
      "name",
    )}  correo ${form.get("email")}&body=${form.get("message")}`,
  );
  $buttonMailto.click();
}


const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute(
    "aria-label",
    isOpen ? "Close navigation" : "Open navigation"
  );
});

navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation");
  });
});

document.querySelector("#year").textContent = new Date().getFullYear();

document.querySelector("#enquiry-form").addEventListener("submit", (event) => {
  event.preventDefault();

  const form = event.currentTarget;

  if (!form.reportValidity()) return;

  const name = document.querySelector("#name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const subject = document.querySelector("#subject").value;

  const body = [
    "Website enquiry",
    "",
    "Name: " + name,
    "Reply email: " + email,
    "Enquiry type: " + subject,
    "",
    "Please reply to the sender's email address."
  ].join("\n");

  const mailto =
    "mailto:sagarjoshi@gmail.com" +
    "?subject=" + encodeURIComponent(subject) +
    "&body=" + encodeURIComponent(body);

  document.querySelector("#form-status").textContent =
    "Opening your email application. Please review and send the email there.";

  window.location.href = mailto;
});

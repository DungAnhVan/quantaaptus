const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const methodDetail = document.querySelector("[data-method-detail]");
const methodTabs = document.querySelectorAll("[data-tab]");
const enrollForm = document.querySelector("[data-enroll-form]");
const formNote = document.querySelector("[data-form-note]");

const methodContent = {
  diagnose: {
    kicker: "Bước 1",
    title: "Quét pattern tư duy.",
    copy: "Đọc bài làm như dữ liệu về cách học viên nghĩ.",
  },
  reframe: {
    kicker: "Bước 2",
    title: "Tái cấu trúc cách xử lý.",
    copy: "Đổi câu hỏi trong đầu trước khi đổi cách làm bài.",
  },
  apply: {
    kicker: "Bước 3",
    title: "Áp dụng lên chương trình.",
    copy: "IB, IGCSE, A-Level, AP là các tầng ứng dụng.",
  },
  measure: {
    kicker: "Bước 4",
    title: "Đo đầu ra học tập.",
    copy: "Điểm số, tốc độ học, lỗi lặp lại và khả năng chuyển giao.",
  },
};

function syncHeader() {
  header.classList.toggle("scrolled", window.scrollY > 20);
}

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  header.classList.toggle("menu-open", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

nav.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    nav.classList.remove("open");
    header.classList.remove("menu-open");
    menuToggle.setAttribute("aria-expanded", "false");
  }
});

methodTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const current = methodContent[tab.dataset.tab];

    methodTabs.forEach((item) => item.classList.remove("active"));
    tab.classList.add("active");

    methodDetail.innerHTML = `
      <p class="method-kicker">${current.kicker}</p>
      <h3>${current.title}</h3>
      <p>${current.copy}</p>
    `;
  });
});

enrollForm.addEventListener("submit", (event) => {
  event.preventDefault();
  formNote.textContent = "Đã nhận thông tin. Quanta Aptus sẽ liên hệ để hẹn lịch cognitive scan.";
  formNote.classList.add("success");
  enrollForm.reset();
});

syncHeader();
window.addEventListener("scroll", syncHeader, { passive: true });

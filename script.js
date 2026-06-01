const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const methodDetail = document.querySelector("[data-method-detail]");
const methodTabs = document.querySelectorAll("[data-tab]");
const enrollForm = document.querySelector("[data-enroll-form]");
const formNote = document.querySelector("[data-form-note]");
const languageButtons = document.querySelectorAll("[data-lang-option]");

const translations = {
  en: {
    navCore: "Core",
    navApplication: "Application",
    navMethod: "Method",
    navDiagnosis: "Diagnosis",
    heroEyebrow: "Quanta Aptus Method",
    heroTitle: "Evidence-based metacognitive diagnostics for academic performance.",
    heroCopy:
      "Quanta Aptus identifies where academic performance breaks down — knowledge, strategy, monitoring, or regulation — then rebuilds the learner’s method of thinking through structured intervention.",
    heroPrimary: "Start diagnostic",
    heroSecondary: "See method",
    stripKnowledgeTitle: "Knowledge",
    stripKnowledgeCopy: "What the learner knows.",
    stripStrategyTitle: "Strategy",
    stripStrategyCopy: "How the learner approaches tasks.",
    stripMonitoringTitle: "Monitoring",
    stripMonitoringCopy: "How the learner detects errors.",
    stripRegulationTitle: "Regulation",
    stripRegulationCopy: "How the learner adjusts.",
    coreEyebrow: "Cognitive core",
    coreTitle: "Rebuild the mechanism that produces the work, not just the work.",
    coreCopy: "Quanta Aptus treats grades as output data, not the starting point.",
    coreData:
      "Every piece of work is cognitive data: it reveals how a learner understands, chooses strategy, monitors errors, and self-regulates.",
    coreCaption: "Metacognitive scan",
    storyDiagnose: "Diagnose",
    storyReframe: "Reframe",
    storyApply: "Apply",
    storyMeasure: "Measure",
    programsEyebrow: "Curriculum-flexible",
    programsTitle: "One diagnostic core. Multiple academic systems.",
    programIB: "Concept clarity",
    programIGCSE: "Topic structure",
    programAAP: "Precision reasoning",
    programNext: "Future curriculum",
    methodEyebrow: "Intervention sequence",
    methodTitle: "Diagnose. Reframe. Apply. Measure.",
    tabDiagnose: "Diagnose",
    tabReframe: "Reframe",
    tabApply: "Apply",
    tabMeasure: "Measure",
    outcomeCaption: "Academic output",
    outcomeEyebrow: "Measured output",
    outcomeTitle: "Score. Efficiency. Transfer.",
    outcomeScoreTitle: "Score",
    outcomeScoreCopy: "Academic performance.",
    outcomeEfficiencyTitle: "Efficiency",
    outcomeEfficiencyCopy: "Less wasted effort.",
    outcomeTransferTitle: "Transfer",
    outcomeTransferCopy: "Method moves across curricula.",
    flowEyebrow: "Intervention flow",
    flowTitle: "Diagnostic. Protocol. Output.",
    flowStepOne: "Metacognitive Scan",
    flowStepTwo: "Structured Intervention",
    flowStepThree: "Academic Performance",
    enrollEyebrow: "Chẩn đoán",
    enrollTitle: "Book a metacognitive diagnostic.",
    enrollCopy: "Identify whether the learner is blocked by knowledge, strategy, monitoring, or regulation.",
    formName: "Learner name",
    formNamePlaceholder: "Alex Nguyen",
    formPhone: "Contact phone",
    formProgram: "Academic program",
    formProgramPlaceholder: "Select program",
    formProgramOther: "Other curriculum",
    formSubmit: "Send request",
    formNote: "Response within one working day.",
    formSuccess: "Information received. Quanta Aptus will contact you to schedule a diagnostic scan.",
    footerLine: "Metacognitive diagnostics for academic performance.",
    backTop: "Back to top",
  },
  vi: {
    navCore: "Cốt lõi",
    navApplication: "Ứng dụng",
    navMethod: "Phương pháp",
    navDiagnosis: "Chẩn đoán",
    heroEyebrow: "Phương pháp Quanta Aptus",
    heroTitle: "Chẩn đoán siêu nhận thức cho hiệu suất học thuật.",
    heroCopy:
      "Quanta Aptus xác định nơi kết quả học tập bị đứt gãy — kiến thức, chiến lược, giám sát tư duy hay khả năng tự điều chỉnh — rồi tái cấu trúc cách học sinh suy nghĩ và giải quyết bài học thuật.",
    heroPrimary: "Chẩn đoán tư duy",
    heroSecondary: "Xem phương pháp",
    stripKnowledgeTitle: "Kiến thức",
    stripKnowledgeCopy: "Học sinh biết gì.",
    stripStrategyTitle: "Chiến lược",
    stripStrategyCopy: "Học sinh tiếp cận bài như thế nào.",
    stripMonitoringTitle: "Giám sát tư duy",
    stripMonitoringCopy: "Học sinh nhận ra lỗi ra sao.",
    stripRegulationTitle: "Tự điều chỉnh",
    stripRegulationCopy: "Học sinh sửa hướng khi bị kẹt.",
    coreEyebrow: "Cốt lõi nhận thức",
    coreTitle: "Sửa cơ chế tạo ra bài làm, không chỉ sửa bài làm.",
    coreCopy: "Quanta Aptus xem điểm số là dữ liệu đầu ra, không phải điểm bắt đầu.",
    coreData:
      "Mỗi bài làm là dữ liệu nhận thức: nó cho thấy học sinh hiểu gì, chọn chiến lược nào, giám sát lỗi ra sao và tự điều chỉnh thế nào.",
    coreCaption: "Quét siêu nhận thức",
    storyDiagnose: "Chẩn đoán",
    storyReframe: "Tái cấu trúc",
    storyApply: "Áp dụng",
    storyMeasure: "Đo đầu ra",
    programsEyebrow: "Linh hoạt theo chương trình",
    programsTitle: "Một lõi chẩn đoán. Nhiều hệ học thuật.",
    programIB: "Rõ khái niệm",
    programIGCSE: "Cấu trúc chủ đề",
    programAAP: "Lập luận chính xác",
    programNext: "Chương trình tương lai",
    methodEyebrow: "Trình tự can thiệp",
    methodTitle: "Diagnose. Reframe. Apply. Measure.",
    tabDiagnose: "Diagnose",
    tabReframe: "Reframe",
    tabApply: "Apply",
    tabMeasure: "Measure",
    outcomeCaption: "Đầu ra học thuật",
    outcomeEyebrow: "Đầu ra đo được",
    outcomeTitle: "Điểm số. Hiệu quả. Chuyển giao.",
    outcomeScoreTitle: "Điểm số",
    outcomeScoreCopy: "Hiệu suất học thuật.",
    outcomeEfficiencyTitle: "Hiệu quả",
    outcomeEfficiencyCopy: "Giảm nỗ lực lãng phí.",
    outcomeTransferTitle: "Chuyển giao",
    outcomeTransferCopy: "Phương pháp đi qua nhiều chương trình.",
    flowEyebrow: "Luồng can thiệp",
    flowTitle: "Chẩn đoán. Giao thức. Đầu ra.",
    flowStepOne: "Quét siêu nhận thức",
    flowStepTwo: "Can thiệp có cấu trúc",
    flowStepThree: "Hiệu suất học thuật",
    enrollEyebrow: "Diagnostic scan",
    enrollTitle: "Đặt lịch chẩn đoán siêu nhận thức.",
    enrollCopy: "Xác định học sinh đang bị kẹt ở kiến thức, chiến lược, giám sát tư duy hay tự điều chỉnh.",
    formName: "Họ và tên học sinh",
    formNamePlaceholder: "Nguyễn Minh Anh",
    formPhone: "Số điện thoại liên hệ",
    formProgram: "Chương trình học",
    formProgramPlaceholder: "Chọn chương trình",
    formProgramOther: "Chương trình khác",
    formSubmit: "Gửi yêu cầu",
    formNote: "Phản hồi trong ngày làm việc.",
    formSuccess: "Đã nhận thông tin. Quanta Aptus sẽ liên hệ để hẹn lịch chẩn đoán.",
    footerLine: "Chẩn đoán siêu nhận thức cho hiệu suất học thuật.",
    backTop: "Lên đầu trang",
  },
};

const methodContent = {
  en: {
    diagnose: {
      kicker: "Step 01",
      title: "Read the work as cognitive data.",
      copy: "Locate the breakdown before adding more practice.",
    },
    reframe: {
      kicker: "Step 02",
      title: "Rebuild the thinking mechanism.",
      copy: "Shift the learner from answer-chasing to structured reasoning.",
    },
    apply: {
      kicker: "Step 03",
      title: "Apply the method to the curriculum.",
      copy: "Use IB, IGCSE, A-Level, AP, or future programs as the application layer.",
    },
    measure: {
      kicker: "Step 04",
      title: "Measure academic output.",
      copy: "Track score, efficiency, repeated errors, and transfer.",
    },
  },
  vi: {
    diagnose: {
      kicker: "Bước 01",
      title: "Đọc bài làm như dữ liệu nhận thức.",
      copy: "Xác định điểm đứt gãy trước khi tăng thêm bài tập.",
    },
    reframe: {
      kicker: "Bước 02",
      title: "Tái cấu trúc cơ chế tạo ra bài làm.",
      copy: "Chuyển học sinh từ đuổi đáp án sang lập luận có cấu trúc.",
    },
    apply: {
      kicker: "Bước 03",
      title: "Áp dụng phương pháp lên chương trình.",
      copy: "IB, IGCSE, A-Level, AP hoặc chương trình sau này là tầng ứng dụng.",
    },
    measure: {
      kicker: "Bước 04",
      title: "Đo đầu ra học thuật.",
      copy: "Theo dõi điểm số, hiệu quả, lỗi lặp lại và khả năng chuyển giao.",
    },
  },
};

function getStoredLanguage() {
  try {
    return localStorage.getItem("quanta-language") || "en";
  } catch {
    return "en";
  }
}

function storeLanguage(language) {
  try {
    localStorage.setItem("quanta-language", language);
  } catch {
    return;
  }
}

let currentLanguage = getStoredLanguage();

function syncHeader() {
  header.classList.toggle("scrolled", window.scrollY > 20);
}

function getActiveMethodKey() {
  return document.querySelector(".method-tab.active")?.dataset.tab || "diagnose";
}

function renderMethodDetail(tabKey = getActiveMethodKey()) {
  const current = methodContent[currentLanguage][tabKey] || methodContent.en[tabKey];

  methodDetail.innerHTML = `
    <p class="method-kicker">${current.kicker}</p>
    <h3>${current.title}</h3>
    <p>${current.copy}</p>
  `;
}

function translatePage(language) {
  const dictionary = translations[language] || translations.en;
  currentLanguage = dictionary === translations.vi ? "vi" : "en";
  document.documentElement.lang = currentLanguage;
  storeLanguage(currentLanguage);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key]) {
      element.textContent = dictionary[key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    if (dictionary[key]) {
      element.setAttribute("placeholder", dictionary[key]);
    }
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.langOption === currentLanguage;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  renderMethodDetail();
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
    methodTabs.forEach((item) => item.classList.remove("active"));
    tab.classList.add("active");
    renderMethodDetail(tab.dataset.tab);
  });
});

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    translatePage(button.dataset.langOption);
  });
});

enrollForm.addEventListener("submit", (event) => {
  event.preventDefault();
  formNote.textContent = translations[currentLanguage].formSuccess;
  formNote.classList.add("success");
  enrollForm.reset();
});

translatePage(currentLanguage);
syncHeader();
window.addEventListener("scroll", syncHeader, { passive: true });

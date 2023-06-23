// Табы
const tabs = (
  headerSelector,
  tabSelector,
  contentSelector,
  activeClass,
  display = "block"
) => {
  const header = document.querySelector(headerSelector),
    tab = document.querySelectorAll(tabSelector),
    content = document.querySelectorAll(contentSelector);

  function showTabContent(i = 0) {
    tab[i].classList.add(activeClass);
    content[i].classList.add(activeClass);
  }

  function hideTabContent() {
    tab.forEach((item) => {
      item.classList.remove(activeClass);
    });
    content.forEach((item) => {
      item.classList.remove(activeClass);
    });
  }

  hideTabContent();
  showTabContent();

  header.addEventListener("click", (e) => {
    const target = e.target;
    if (
      target &&
      (target.classList.contains(tabSelector.replace(/\./, "")) ||
        target.parentNode.classList.contains(tabSelector.replace(/\./, "")))
    ) {
      tab.forEach((item, i) => {
        if (target == item || target.parentNode == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });
};

// Табы -> Блок "Возможности"
try {
  tabs(".possible__head", ".possible__head-item", ".possible__body", "active");
} catch (e) {}

// Аккордеон -> Блок "ЧАСТЫЕ ВОПРОСЫ"
const accordeon = () => {
  const elems = document.querySelectorAll(".questions__head span");
  const footerElemes = document.querySelectorAll(".questions__footer");

  elems.forEach((elem) => {
    elem.addEventListener("click", (e) => {
      const target = e.target;
      const footer = target.closest(".questions__head").nextElementSibling;
      // elems.forEach((elem) => elem.classList.remove("active"));
      // footerElemes.forEach((elem) => elem.classList.remove("active"));
      elem.classList.toggle("active");
      footer.classList.toggle("active");
      console.log(footer);
    });
  });
};

try {
  accordeon();
} catch (e) {}

// Swiper on "Тарифы"
const swiperRates = new Swiper(".rates__swiper", {
  loop: false,
  slidesPerView: "auto",
  speed: 800,
  autoHeight: true,
  spaceBetween: 40,
  centeredSlides: true,
  navigation: {
    nextEl: ".rates__next",
    prevEl: ".rates__prev",
  },
  breakpoints: {
    320: {
      centeredSlides: false,
      slidesPerView: 1,
    },
    767.98: {
      centeredSlides: false,
      slidesPerView: "auto",
    },
    1124.98: {
      centeredSlides: true,
      slidesPerView: "auto",
    },
  },
});

// Swiper on "Отзывы"
const swiperComment = new Swiper(".comment__swiper", {
  loop: false,
  slidesPerView: 2,
  speed: 500,
  spaceBetween: 70,
  navigation: {
    nextEl: ".comment__next",
    prevEl: ".comment__prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    767.98: {
      slidesPerView: 2,
    },
  },
});

// Swiper on "Новости"
const swiperNews = new Swiper(".news__swiper", {
  loop: false,
  slidesPerView: 1,
  speed: 500,
  spaceBetween: 20,
  navigation: {
    nextEl: ".news__next",
    prevEl: ".news__prev",
  },
});

const pl_small = window.matchMedia("(min-width: 991.98px)").matches;
if (pl_small) {
  // Swiper on "Сообщества"
  const swiperCommunity = new Swiper(".community__swiper", {
    loop: false,
    slidesPerView: 6,
    speed: 500,
    spaceBetween: 30,
    navigation: {
      nextEl: ".community__next",
      prevEl: ".community__prev",
    },
    breakpoints: {
      991.98: {
        slidesPerView: 4,
      },
      1123.98: {
        slidesPerView: 5,
      },
      1199.98: {
        slidesPerView: 6,
      },
    },
  });
} else {
  console.log("no");
}

// Progress Circle
const progressCircle = (elem, colorFull) => {
  // const elems = document.querySelectorAll(".result__circle");

  var el = document.querySelector(elem);

  var options = {
    percent: el.getAttribute("data-percent") || 25,
    size: el.getAttribute("data-size") || 91,
    lineWidth: el.getAttribute("data-line") || 25,
    rotate: el.getAttribute("data-rotate") || 0,
  };

  var canvas = document.createElement("canvas");
  var span = document.createElement("span");
  span.textContent = options.percent;

  if (typeof G_vmlCanvasManager !== "undefined") {
    G_vmlCanvasManager.initElement(canvas);
  }

  var ctx = canvas.getContext("2d");
  canvas.width = canvas.height = options.size;

  el.appendChild(span);
  el.appendChild(canvas);

  ctx.translate(options.size / 2, options.size / 2); // change center
  ctx.rotate((-1 / 2 + options.rotate / 180) * Math.PI); // rotate -90 deg

  var radius = (options.size - options.lineWidth) / 2;

  var drawCircle = function (color, lineWidth, percent) {
    percent = Math.min(Math.max(0, percent), 1);
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, Math.PI * 2 * percent, false);
    ctx.strokeStyle = color;

    ctx.lineWidth = lineWidth;
    ctx.stroke();
  };

  drawCircle("#f1f1f1", options.lineWidth, 100 / 100);
  drawCircle(colorFull, options.lineWidth, options.percent / 100);
};

try {
  progressCircle(".result__circle", "#7EB7FC");
} catch (e) {}
try {
  progressCircle(".result__circle--2", "#3C33C2");
} catch (e) {}

// Swiper on result-diagnoscis
const swiperDiagnosics = new Swiper(".result__swiper", {
  loop: true,
  slidesPerView: 1,
  speed: 500,
  spaceBetween: 20,
  navigation: {
    nextEl: ".result__next",
    prevEl: ".result__prev",
  },
});

// Click on buttion for open Chat-bot
const openChatBot = () => {
  const openChat = document.querySelector("#btn-chat");
  const chat = document.querySelector("#chat-bot");

  openChat.addEventListener("click", (e) => {
    e.preventDefault();
    chat.previousElementSibling.classList.add("hide");
    chat.classList.add("show");
    chat.parentElement.classList.add("gridgap");
  });
};
try {
  // openChatBot();
} catch (e) {}

// Swiper on gooods
const swipersGoods = (item, next, prev) => {
  let swiperGoods = new Swiper(item, {
    loop: true,
    slidesPerView: 3,
    speed: 500,
    spaceBetween: 34,
    navigation: {
      nextEl: next,
      prevEl: prev,
    },
  });
};
swipersGoods(
  ".goods__swiper",
  ".goods__body-first .goods__next",
  ".goods__body-first .goods__prev"
);
swipersGoods(
  ".goods__swiper-second",
  ".goods__body-last .goods__next",
  ".goods__body-last .goods__prev"
);

// - Функция -  Раскрывающий список
function hundleSelect(boxesSelect, boxSelect) {
  const nameItems = document.querySelectorAll(boxesSelect),
    body = document.querySelector("body");

  nameItems.forEach((item) => {
    const select = item,
      selectItem = item.querySelector(boxSelect);

    //	Функционал раскрытия/сворачивания выпадающих списокв
    selectItem.addEventListener("click", (e) => {
      if (!select.classList.contains("open")) {
        nameItems.forEach((box) => {
          box.classList.remove("open");
          box.querySelector(boxSelect).classList.remove("open");
        });
        select.classList.add("open");
        selectItem.classList.add("open");
      } else {
        select.classList.remove("open");
        selectItem.classList.remove("open");
      }
    });

    // Отслеживаем клик по элементам
    select.addEventListener("click", (e) => {
      const target = e.target;
      if (
        target &&
        target.tagName === "LI" &&
        !target.classList.contains("active")
      ) {
        const value = target.innerText;
        try {
          select.querySelector("li.active").classList.remove("active");
        } catch (e) {}
        target.classList.add("active");
        selectItem.innerText = value;
        select.classList.remove("open");
        selectItem.classList.remove("open");
      }
    });

    // Сворачиваем список при клики вне элемента
    body.addEventListener("click", (e) => {
      const target = e.target;
      const targetBody = e.currentTarget;
      console.log(target);
      if (target !== selectItem && targetBody === body) {
        target.classList.add("active");
        select.classList.remove("open");
        selectItem.classList.remove("open");
        console.log("close");
      } else {
      }
    });
  });
}
try {
  hundleSelect(".select", ".select__value");
} catch (e) {}

// Timer
let deadline = "2023-06-19";

const timer = (container, deadline) => {
  function addZero(num) {
    if (num <= 9) {
      return "0" + num;
    } else {
      return num;
    }
  }

  function getTimerRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date()),
      seconds = Math.floor((t / 1000) % 60),
      minutes = Math.floor((t / 1000 / 60) % 60),
      hours = Math.floor((t / (1000 * 60 * 60)) % 24);

    return {
      total: t,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }

  function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
      hours = timer.querySelector("#hours"),
      minutes = timer.querySelector("#minutes"),
      seconds = timer.querySelector("#seconds"),
      timeInterval = setInterval(updateClock, 1000);
    updateClock();

    function updateClock() {
      const t = getTimerRemaining(endtime);

      hours.textContent = addZero(t.hours);
      minutes.textContent = addZero(t.minutes);
      seconds.textContent = addZero(t.seconds);

      if (t.total <= 0) {
        hours.textContent = "00";
        minutes.textContent = "00";
        seconds.textContent = "00";

        clearInterval(timeInterval);
      }
    }
  }

  setClock(container, deadline);
};

// Click on start Timer
try {
  const startTimer = document.querySelector("#start-timer");
  startTimer.addEventListener("click", () => {
    timer(".timings__sub-timer", deadline);
  });
} catch (e) {}

// show/hide calendar
const showCalendar = () => {
  const elem = document.querySelector(".doctor__head");

  elem.addEventListener("click", () => {
    elem.classList.toggle("active");
    elem.nextElementSibling.classList.toggle("active");
  });
  console.log("calendar");
};

try {
  showCalendar();
} catch (e) {}

// show/hide "Наше сообщество"
const showHideContent = () => {
  const btn = document.querySelector(".community__btn");
  const elemsMore = document.querySelectorAll(".elem-more");

  btn.addEventListener("click", (e) => {
    if (btn.classList.contains("active")) {
      btn.classList.remove("active");
      btn.textContent = "Развернуть";
      elemsMore.forEach((el) => {
        el.classList.remove("active");
      });
    } else {
      btn.classList.add("active");
      btn.textContent = "Свернуть";
      elemsMore.forEach((el) => {
        el.classList.add("active");
      });
    }
  });
};
showHideContent();

// Sign in / Register moadl
const signRegisterModal = () => {
  const btn = document.querySelector("#authorization");
  const signModal = document.querySelector("#sign");
  btnRegister = signModal.querySelector("[data-register]");
  const registerModal = document.querySelector("#register");

  btn.addEventListener("click", () => {
    signModal.classList.add("show");
  });

  btnRegister.addEventListener("click", () => {
    signModal.classList.remove("show");
    registerModal.classList.add("show");
  });

  document.body.addEventListener("scroll", () => {
    signModal.classList.remove("show");
    registerModal.classList.remove("show");
  });

  document.addEventListener("click", (e) => {
    const target = e.target;
    if (
      !target.closest("#sign") &&
      !target.closest("#register") &&
      !target.closest("#authorization")
    ) {
      signModal.classList.remove("show");
      registerModal.classList.remove("show");
    }
  });
};

signRegisterModal();

function pageModal() {
  const modal = document.querySelector("#data-base-modal");
  const open = document.querySelectorAll(".data-base");
  const close = modal.querySelector("button");

  open.forEach((btn) => {
    btn.addEventListener("click", () => {
      modal.style.display = "block";
    });
  });

  close.addEventListener("click", () => {
    modal.style.display = "none";
  });

  modal.addEventListener("click", (e) => {
    const target = e.target;
    if (target === modal) {
      modal.style.display = "none";
    }
  });
}
pageModal();

// ---- DEFAULT FUNCTIONS START

const CLEAR = (e) => {
    for (let i = 0; i < e.length; i++) {
        e[i].classList.remove("active")
    }
}

// ---- DEFAULT FUNCTIONS START




// ----- OPTION START

const Option_Name = document.querySelectorAll(".option__name");
const Option_Name_I = document.querySelectorAll(".option__name i");
const Option_Name_Val = document.querySelectorAll(".option__name_val");
const Option_List = document.querySelectorAll(".option__list");
const Option_Item = document.querySelectorAll(".option__item");
let temporary_value, temporary_list, temporary_i;


for (let i = 0; i < Option_Name.length; i++) {
    Option_Name[i].addEventListener("click", () => {
        Option_List[i].classList.toggle("active");
        Option_Name_I[i].classList.toggle("active");
        temporary_value = Option_Name_Val[i];
        temporary_list = Option_List[i];
        temporary_i = Option_Name_I[i];
    })
}


for (let i = 0; i < Option_Item.length; i++) {
    Option_Item[i].addEventListener("click", () => {
        temporary_value.innerText = Option_Item[i].innerText;
        temporary_list.classList.remove("active");
        temporary_i.classList.remove("active");
    })
}

const Application_Title = document.querySelectorAll(".application__title i")
const Application = document.querySelectorAll(".application");



for (let i = 0; i < Application_Title.length; i++) {
    Application_Title[i].addEventListener("click", () => {
        Application_Title[i].classList.toggle("active");
        Application[i].classList.toggle("active");
    })
}


// ----- OPTION END

// ----- PASSWORD TYPE START

const Pass_Eye = document.querySelectorAll(".pass_eye");
const Pass_Password = document.querySelectorAll(".pass_pass");

if (Pass_Eye) {
    for (let i = 0; i < Pass_Eye.length; i++) {
        Pass_Eye[i].addEventListener("click", () => {
            if (Pass_Password[i].type === "password") {
                Pass_Password[i].setAttribute('type', 'text');
            } else {
                Pass_Password[i].setAttribute('type', 'password')
            }
        })
    }
}

// ----- PASSWORD TYPE END


// ----- MODERATOR CANCEL TEXTAREA START

const MODERATOR_TEXTAREA = document.querySelectorAll(".moderator textarea");
const MODERATOR_CANCEL = document.querySelectorAll(".moderator_cancel");
let open = true;

for (let i = 0; i < MODERATOR_CANCEL.length; i++) {
    MODERATOR_CANCEL[i].addEventListener("click", () => {
        if (open) {
            MODERATOR_TEXTAREA[i].setAttribute('class', 'active');
            MODERATOR_CANCEL[i].classList.add("active");
            open = false;
        } else {
            MODERATOR_TEXTAREA[i].classList.remove("active");
            MODERATOR_CANCEL[i].classList.remove("active")
            open = true;
        }
    })
}

// ----- MODERATOR CANCEL TEXTAREA END


// ----- APP LIST SORT START

const SORT = document.querySelector(".sort__button");
const SORT_LIST = document.querySelector(".sort__list");

if (SORT) {
    SORT.addEventListener("click", () => {
        SORT_LIST.classList.add("active")
    })
}

const sort__item = document.querySelectorAll(".sort__item");
const applist_list = document.querySelectorAll(".sort__item svg");

for (let i = 0; i < sort__item.length; i++) {
    sort__item[i].addEventListener("click", () => {
        CLEAR(applist_list)
        applist_list[i].classList.add("active");
        SORT_LIST.classList.remove("active");
    })
}

// ----- APP LIST SORT END

// ----- MODAL CLOSE START

const MODAL_BACKGROUND = document.querySelectorAll(".modal_background");
const MODAL = document.querySelectorAll(".modal");
const MODAL_CLOSE = document.querySelectorAll(".modal svg");

if (MODAL_CLOSE) {
    for (let i = 0; i < MODAL.length; i++) {
        if (MODAL_CLOSE[i]) {
            MODAL_CLOSE[i].addEventListener("click", () => {
                MODAL[i].classList.remove("active");
                for (let i = 0; i < MODAL_BACKGROUND.length; i++) {
                    MODAL_BACKGROUND[i].classList.remove("active");
                }
            })
        }
    }
}

// ----- MODAL CLOSE END

// ----- PAY BUTTON START

const REGPAY_BTN = document.querySelectorAll(".regpay__btn");
const REGPAY_CARD = document.querySelectorAll(".regpay_card");
const REGPAY_HAND = document.querySelectorAll(".regpay_hand");
const REGPAY_CODE = document.querySelectorAll(".regpay_code");
const REGPAY_SEND = document.querySelectorAll(".regpay_send");

if (REGPAY_HAND) {
    for (let i = 0; i < REGPAY_HAND.length; i++) {
        REGPAY_HAND[i].addEventListener("click", () => {
            REGPAY_CARD[i].classList.add("deactivate");
            REGPAY_HAND[i].classList.add("deactivate");
            REGPAY_CODE[i].classList.remove("deactivate");
            REGPAY_SEND[i].classList.remove("deactivate");
        })
    }
}


const caccount_btn = document.querySelector(".caccount_confirm");
const modal_background = document.querySelectorAll(".modal_background");
const mmodal = document.querySelector(".modal");

if (caccount_btn) {
    caccount_btn.addEventListener("click", () => {
        for (let i = 0; i < modal_background.length; i++) {
            modal_background[i].classList.add("active");
        }
        mmodal.classList.add("active");
    })
}
const popup = document.querySelector(".popup");
const popupEdit = document.querySelector(".popup_edit");
const popupAdd = document.querySelector(".popup_add-a-place");
const title = document.querySelector(".profile__title");
const subtitle = document.querySelector(".profile__sabtitle");
const nameInput = document.querySelector(".popup__input_type_name");
const jobInput = document.querySelector(".popup__input_type_title");
const elementsItem = document.querySelector(".elements__items");
const userTemplate = document.querySelector(".elements-toddo");
const clickImg = document.querySelector(".click-img");
const imageClick = clickImg.querySelector(".click-img__img");
const clickImgTitle = clickImg.querySelector(".click-img__title");
const formAddForm = document.querySelector(".popup__form_add");
const popupClose = document.querySelector(".popup__close"); // крестик закрыть
const popupCloseAdd = document.querySelector(".popup__close_add-a-place"); // крестик закрыть
const clickImgButtonClose = document.querySelector(".click-img__button-close"); // крестик закрыть
const editButton = document.querySelector(".profile__edit-button"); // opan формы редактирования
const addButton = document.querySelector(".profile__add-button"); // opan формы добавления cards
const formElement = document.querySelector(".popup__form"); // Находим форму в DOM
const formAddTitle = formAddForm.querySelector(".popup__input_title");
const inputAddlink = formAddForm.querySelector(".popup__input_link");

// Закрытие popap
function closePopup(popup) {
  popup.classList.remove("popup_opened"); //удаляем у popup класс popup_opened
}

// Открыть popap
function openPopup(popup) {
  popup.classList.add("popup_opened");// Добавляет popup класс popup_opened
}

// popap редактирование
editButton.addEventListener("click", handleEditButtonClick);
function handleEditButtonClick() {
  nameInput.value = title.textContent;
  jobInput.value = subtitle.textContent;
  openPopup(popupEdit);
}

// Сохранения в popap данных
function formSubmitHandler(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  title.textContent = nameInput.value;
  subtitle.textContent = jobInput.value;
  closePopup(popup);
}

// добавление лайка
const handleLikeIcon = (evt) => {
  evt.target.classList.toggle("elements__like_click");
};

//  Удаление элемента из массива
const handleDeleteCard = (evt) => {
  evt.target.closest(".elements__item").remove();
};

// открытие картинки как popap
function handlePreviewPicture(data) {
  imageClick.src = data.link;
  imageClick.alt = data.name;
  clickImgTitle.textContent = data.name;
  openPopup(clickImg);
}

// создание карточек
function createCard(data) {
  const сloneСard = userTemplate.content.cloneNode(true);
  const likeButton = сloneСard.querySelector(".elements__like");
  const elementRemove = сloneСard.querySelector(".elements__remove");
  const elementTitle = сloneСard.querySelector(".elements__title");
  const elementImg = сloneСard.querySelector(".elements__img");
  elementImg.src = data.link;
  elementImg.alt = data.name;
  elementTitle.textContent = data.name;

  // Удаление элемента из массива
  elementRemove.addEventListener("click", handleDeleteCard);

  // добавление лайка
  likeButton.addEventListener("click", handleLikeIcon);

  // открытие картинки как popap
  elementImg.addEventListener("click", () => handlePreviewPicture(data));
  return сloneСard;
}

// отрисовка карточек
function renderingCard(data, elementsItem) {
  elementsItem.prepend(createCard(data));
}

initialCards.forEach((data) => renderingCard(data, elementsItem));

function addPopapData(){
  const obj = {
    name: formAddTitle.value,
    link: inputAddlink.value,
  };
  renderingCard(obj, elementsItem);
  closePopup(popupAdd);
  formAddForm.reset();
}

// Добавляем с формы отправки в массив ссылку и текст
formAddForm.addEventListener("submit", (event) => {
  event.preventDefault();
  addPopapData();
});

popupCloseAdd.addEventListener("click", () => closePopup(popupAdd));
popupClose.addEventListener("click", () => closePopup(popupEdit));
clickImgButtonClose.addEventListener("click", () => closePopup(clickImg));
addButton.addEventListener("click", () => openPopup(popupAdd));
formElement.addEventListener("submit", formSubmitHandler);
imageClick.addEventListener("click", () => openPopup(clickImg));

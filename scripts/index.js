const popup = document.querySelector('.popup');

const popupEdit = document.querySelector('.popup_edit');
const popupAdd = document.querySelector('.popup_add-a-place');

const title = document.querySelector('.profile__title');
const subtitle = document.querySelector('.profile__sabtitle');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_title');


const elementsItem = document.querySelector('.elements__items');
const userTemplate = document.querySelector('.elements-toddo');
const clickImg = document.querySelector('.click-img');
const ImgClick = clickImg.querySelector('.click-img__img');
const clickImgTitle = clickImg.querySelector('.click-img__title');
const formAddForm = document.querySelector('.popup__form_add');


const popupClose = document.querySelector('.popup__close'); // крестик закрыть
const popupCloseAdd = document.querySelector('.popup__close_add-a-place'); // крестик закрыть
const clickImgButtonClose = document.querySelector('.click-img__button-close'); // крестик закрыть

const editButton = document.querySelector('.profile__edit-button'); // opan формы редактирования
const addButton = document.querySelector('.profile__add-button'); // opan формы добавления cards


const formElement = document.querySelector('.popup__form');// Находим форму в DOM

// Заполнение формы по умочанию в popap
function addPopap(){
  nameInput.value = title.textContent;
  jobInput.value = subtitle.textContent;
}

// Закрытие popap
function closePopup(popup){
  popup.classList.remove('popup_opened'); //удаляем у popup класс popup_opened
  clickImg.classList.remove('click-img_opened'); //удаляем у popup класс click-img_opened
}

popupCloseAdd.addEventListener('click', () => closePopup(popupAdd));
popupClose.addEventListener('click', () => closePopup(popupEdit));
clickImgButtonClose.addEventListener('click', () => closePopup(clickImg));

// Открыть popap
function openPopup(popup){
  popup.classList.add('popup_opened');
  addPopap();
};

addButton.addEventListener('click', () => openPopup(popupAdd));
editButton.addEventListener('click', () => openPopup(popupEdit));


// Сохранения в popap данных
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    title.textContent = nameInput.value;
    subtitle.textContent = jobInput.value;
    closePopup(popup);
}


formElement.addEventListener('submit', formSubmitHandler);

// добавление лайка
const handleLikeIcon = (evt) => {
  evt.target.classList.toggle('elements__like_cklic');
 };


//  Удаление элемента из массива
const handleDeleteCard = (evt) => {
  evt.target.closest('.elements__item').remove();
};

  // открытие картинки как popap
const handlePreviewPicture = (data) => {
  clickImg.classList.add('click-img_opened');
  ImgClick.src = data.link;
  ImgClick.alt = data.name;
  clickImgTitle.textContent = data.name;
};


// создание карточек
function createCard(data) {

    let сloneСard = userTemplate.content.cloneNode(true);
    const likeButton= сloneСard.querySelector('.elements__like');
    const elementRemove = сloneСard.querySelector('.elements__remove');
    const elementsyTitle = сloneСard.querySelector('.elements__title');
    const elementImg = сloneСard.querySelector('.elements__img');
    elementImg.src = data.link;
    elementImg.alt = data.name;
    elementsyTitle.textContent = data.name;

    // Удаление элемента из массива
    elementRemove.addEventListener('click', handleDeleteCard);

    // добавление лайка
    likeButton.addEventListener('click', handleLikeIcon);

    // открытие картинки как popap
    elementImg.addEventListener('click', () => handlePreviewPicture(data));
    return сloneСard;
}

// отрисовка карточек
function renderingCard(data, elementsItem) {
  let card = createCard(data);
  elementsItem.prepend(card);
  debugger;
}


initialCards.forEach(data => renderingCard(data, elementsItem));


// Добавляем с формы отправки в массив ссылку и текст
formAddForm.addEventListener('submit', event => {
    event.preventDefault();
    const formAddTitle = formAddForm.querySelector('.popup__input_title').value
    const inputAddlink = formAddForm.querySelector('.popup__input_link').value
    const obj =
          {
              name: formAddTitle,
              link: inputAddlink
          }
        ;
    renderingCard(obj, elementsItem);
    popupAdd.classList.remove('popup_opened');
  formAddForm.reset();
});



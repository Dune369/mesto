let popup = document.querySelector('.popup');
let popupClose = document.querySelector('.popup__close');
let editButton = document.querySelector('.profile__edit-button');

let title = document.querySelector('.profile__title');
let sabtitle = document.querySelector('.profile__sabtitle');
let nameInput = document.querySelector('.popup__input_type_name');
let jobInput = document.querySelector('.popup__input_type_title');

function showPopup(){
  popup.classList.add('popup_opened');
  nameInput.value = title.textContent;
  jobInput.value = sabtitle.textContent;
}

function closePopup(){
  popup.classList.remove('popup_opened');
  nameInput.value = title.textContent;
  jobInput.value = sabtitle.textContent;
}

editButton.addEventListener('click', showPopup);
popupClose.addEventListener('click', closePopup);

// Находим форму в DOM
let formElement = document.querySelector('.popup__form');

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                          // Так мы можем определить свою логику отправки.
                          // О том, как это делать, расскажем позже.
    title.textContent = nameInput.value;
    sabtitle.textContent = jobInput.value;
    popup.classList.remove('popup_opened');
}

formElement.addEventListener('submit', formSubmitHandler);


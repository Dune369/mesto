const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close');
const editButton = document.querySelector('.profile__edit-button');

const title = document.querySelector('.profile__title');
const sabtitle = document.querySelector('.profile__sabtitle');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_title');

const popupAdd = document.querySelector('.popup_add-a-place');
const addButton = document.querySelector('.profile__add-button');
const popupCloseAdd = document.querySelector('.popup__close_add-a-place');

const clickImg = document.querySelector('.click-img');


// Открыть форму "Редактирование"
function showPopup(){
  popup.classList.add('popup_opened');
  nameInput.value = title.textContent;
  jobInput.value = sabtitle.textContent;
}
editButton.addEventListener('click', showPopup);

// Закрыть форму "Редактирование"
function closePopup(){
  popup.classList.remove('popup_opened');
  nameInput.value = title.textContent;
  jobInput.value = sabtitle.textContent;
}
popupClose.addEventListener('click', closePopup);

// Открыть форму "Добаыить место"
function showPopupAdd(){
  popupAdd.classList.add('popup_opened');
}
addButton.addEventListener('click', showPopupAdd);

// Закрыть форму "Добаыить место"
function closePopupAdd(){
  popupAdd.classList.remove('popup_opened');
}
popupCloseAdd.addEventListener('click', closePopupAdd);


// Находим форму в DOM
const formElement = document.querySelector('.popup__form');

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

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

// Подтягиваем значения из массива initialCards, затем передаю в шаблон  template = elements-toddo

function addToddo(tobo) {

  const elementsItems = document.querySelector('.elements__items');
  const userTemplates = document.querySelector('.elements-toddo').content.cloneNode(true);
  userTemplates.querySelector('img').src = tobo.link;
  userTemplates.querySelector('img').alt = tobo.name;
  userTemplates.querySelector('.elements__title').textContent = tobo.name;

  userTemplates.querySelector('.elements__remove').addEventListener('click', event => {
  const tododo = event.target.closest('.elements__item');

    if (tododo){
      tododo.remove();
    }

  })

  userTemplates.querySelector('.elements__like').addEventListener('click', event => {
    event.preventDefault();
     const elementsLike = event.target.closest('.elements__like');
     if (!elementsLike === elementsLike.classList.contains('elements__like_cklic')){
            elementsLike.classList.add('elements__like_cklic');
        } else {
            elementsLike.classList.remove('elements__like_cklic');
          }
        })



  userTemplates.querySelector('.elements__img').addEventListener('click', event => {
    event.preventDefault();
        clickImg.classList.add('click-img_opened');
        clickImg.querySelector('.click-img__img').src = tobo.link;
        clickImg.querySelector('.click-img__img').alt = tobo.name;
        clickImg.querySelector('.click-img__title').textContent = tobo.name;
    })


  elementsItems.prepend(userTemplates);
}

initialCards.forEach(addToddo);



const clickImgButtonClose = document.querySelector('.click-img__button-close');

function closeClickImg(){
  clickImg.classList.remove('click-img_opened');
}
clickImgButtonClose.addEventListener('click', closeClickImg);




// Добавляем в массив ссылку и текст
const formAddForm = document.querySelector('.popup__form_add-form');
formAddForm.addEventListener('submit', event => {
  event.preventDefault();
  const formAddTitle = formAddForm.querySelector('.popup__form_add-title').value
  const inputAddlink = formAddForm.querySelector('.popup__input_add-link').value
  const obj =
        {
            name: formAddTitle,
            link: inputAddlink
        }
      ;
  addToddo(obj);
  popupAdd.classList.remove('popup_opened');
  formAddForm.reset();
});


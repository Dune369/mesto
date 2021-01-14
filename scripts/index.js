const popup = document.querySelector('.popup');

const popupClose = document.querySelector('.popup__close');

const popupEdit = document.querySelector('.popup_edit');
const editButton = document.querySelector('.profile__edit-button');

const title = document.querySelector('.profile__title');
const sabtitle = document.querySelector('.profile__sabtitle');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_title');

const popupAdd = document.querySelector('.popup_add-a-place');
const addButton = document.querySelector('.profile__add-button');
const popupCloseAdd = document.querySelector('.popup__close_add-a-place');

const elementsItem = document.querySelector('.elements__items');
const userTemplate = document.querySelector('.elements-toddo');
const clickImg = document.querySelector('.click-img');
const ImgClick = clickImg.querySelector('.click-img__img');
const clickImgTitle = clickImg.querySelector('.click-img__title');

const clickImgButtonClose = document.querySelector('.click-img__button-close');
const formAddForm = document.querySelector('.popup__form_add');

// Находим форму в DOM
const formElement = document.querySelector('.popup__form');

function AddPopap(){
  popupEdit.classList.toggle('popup_opened')
  nameInput.value = title.textContent;
  jobInput.value = sabtitle.textContent;
}

function AddPop(){
  popupAdd.classList.toggle('popup_opened');
}

// Закрыть форму popap
popupClose.addEventListener('click', AddPopap);
popupCloseAdd.addEventListener('click', AddPop);

// Открыть форму
editButton.addEventListener('click', AddPopap);
addButton.addEventListener('click', AddPop);


function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
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

function getCard(todo) {
  const userTemplateСlone = userTemplate.content.cloneNode(true);
  const elementsLike = userTemplateСlone.querySelector('.elements__like');
  const elementsRemove = userTemplateСlone.querySelector('.elements__remove');
  const elementsImg = userTemplateСlone.querySelector('img');

        elementsImg.src = todo.link;
        elementsImg.alt = todo.name;
        userTemplateСlone.querySelector('.elements__title').textContent = todo.name;

  // Удаление элемента из массива
  removerElements(elementsRemove);

  // добавление лайка
  addLike(elementsLike);

  // открытие картинки как popap

  userTemplateСlone.querySelector('.elements__img').addEventListener('click', event => {
  event.preventDefault();
      clickImg.classList.add('click-img_opened');
      ImgClick.src = todo.link;
      ImgClick.alt = todo.name;
      clickImgTitle.textContent = todo.name;
  })

  elementsItem.prepend(userTemplateСlone);
}

initialCards.forEach(getCard);



// Закрытие картинки popap
function closePopapImg(){
  clickImg.classList.remove('click-img_opened');
}
clickImgButtonClose.addEventListener('click', closeClickImg);


// Добавляем в массив ссылку и текст

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
    getCard(obj);
    popupAdd.classList.remove('popup_opened');
  formAddForm.reset();
});



 // добавление лайка
function addLike(elementsLike){
  elementsLike.addEventListener('click', event => {
  event.preventDefault();
  event.target.classList.toggle('elements__like_cklic');
 })
}

//  Удаление элемента из массива
function removerElements(elementsRemove){
  elementsRemove.addEventListener('click', event => {
  const todobo = event.target.closest('.elements__item');

   if (todobo){
      todobo.remove();
   }
  })
}



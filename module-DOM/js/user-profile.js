'use strict';

const user = {
  name: 'Deonte Feil',
  phone: '994-982-5660',
  email: 'Deonte.Feil@hotmail.com',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/kolage/128.jpg',
  address: {
    country: 'USA',
    city: 'South Maximoville',
  },
};

{
  /* <div class="user-profile">
  <img
    src="https://s3.amazonaws.com/uifaces/faces/twitter/kolage/128.jpg"
    alt=""
    class="avatar"
  />
  <ul class="info">
    <li><b>Name:</b> Deonte Feil</li>
    <li><b>Phone:</b> 994-982-5660</li>
    <li><b>Email:</b> Deonte.Feil@hotmail.com</li>
    <li><b>Location:</b> USA, South Maximoville</li>
  </ul>
  </div> */
}
const profileContainer = document.querySelector('.profile-container');
const profile = createUserProfile(user);

console.log(profile);

profileContainer.append(profile);

function createUserProfile({ name, phone, email, avatar, address }) {
  const container = document.createElement('div');
  container.classList.add('user-profile');

  const image = document.createElement('img');
  image.src = avatar;
  image.alt = 'user avatar';
  image.classList.add('avatar');

  const infoList = document.createElement('ul');
  infoList.classList.add('info');

  const nameField = createInfoItem('Name', name);
  const phoneField = createInfoItem('Phone', phone);
  const emailField = createInfoItem('Email', email);
  const addressField = createInfoItem(
    'Address',
    `${address.country}, ${address.city}`,
  );

  //   container.appendChild(image);
  //   container.appendChild(infoList);
  infoList.append(nameField, phoneField, emailField, addressField);

  container.append(image, infoList);

  return container;
}

function createInfoItem(label, text) {
  const item = document.createElement('li');
  const itemLabel = document.createElement('b');
  itemLabel.textContent = `${label}: `;
  const itemText = document.createTextNode(text);

  item.append(itemLabel, itemText);

  return item;
}

'use strict';

const containers = document.querySelectorAll('.js-buttons-container');

const settingButtonClickHandler = (evt, setting) => {
  const button = evt.target.closest('button');

  if (!button) {
    return;
  }

};

const init = () => {
  containers.forEach((container) => {
    const setting = container.dataset;

    container.addEventListener('click', (evt) => {
      settingButtonClickHandler(evt, setting);
    });
  });
};

init();
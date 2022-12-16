// IIFE - Immediate Invoked Function Expression
(function() {
  'use strict'
  feather.replace({ 'aria-hidden': 'true' });

  /**
   * Generates a random number.
   * @param {Number} max The maximum value to include.
   * @returns The random number
   */
  function random(max) {
    return Math.floor(Math.random() * max);
  }

  //const elementWisdom = document.getElementById('wisdom');
  const elementWisdom = document.querySelector('#wisdom');
  elementWisdom.onclick = (e) => {
    const alert = document.createElement('div');
    alert.innerHTML = `<div class="alert alert-warning alert-dismissible fade show" role="alert">
      <strong>Holy guacamole!</strong> You should check in on some of those fields below.
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`;
    const mainContent = document.getElementsByTagName('main')[0];
    //mainContent.appendChild(alert);
    mainContent.insertBefore(alert, mainContent.firstElementChild);
  };

  //const div6 = document.getElementById('div-6');
  //div6.addEventListener('click', function(e) {
  //  console.log('div-6 clicked');
  //});
  //const clickableDivs = document.querySelectorAll('#eventElement div');
  //clickableDivs.forEach((div) => {
  //  div.addEventListener('click', (e) => {
  //    console.log(e.currentTarget);
  //    e.stopPropagation();
  //  });
  //});
  //const eventElement = document.getElementById('eventElement');
  //eventElement.addEventListener('click', (e) => {
  //  console.log(`target: ${ e.target.id }, currentTarget: ${ e.currentTarget.id }`);
  //  eventElement.style.borderColor = e.target.style.borderColor;
  //});

  const events = [
    'mouseover',
    'mouseout',
    'mousemove',
    'mousedown',
    'mouseup',
    'click'
  ];
  const canvasElement = document.getElementById('canvasElement');
  const eventsTableElement = document.getElementById('eventsTable');
  const buttonClearEvents = document.getElementById('buttonClearEvents');

  events.forEach((event) => {
    console.log(`Adding event listener: ${ event }`);
    canvasElement.addEventListener(event, (e) => {
      // <tr> <td></td> <td></td> <td></td> </tr>
      //const row = document.createElement('tr');
      const row = document.createElement('template');
      row.innerHTML = `<tr>
        <td>${ eventsTableElement.childElementCount+1 }</td>
        <td>${ e.type }</td>
        <td>{ target: ${ e.target.id || e.target.tagName },
          currentTarget: ${ e.currentTarget.id || e.currentTarget.tagName },
        }</td>
      </tr>`;
      //eventsTableElement.appendChild(row.content.firstElementChild);
      eventsTableElement.insertBefore(row.content.firstElementChild, eventsTableElement.firstElementChild);
    });
  });

  buttonClearEvents.addEventListener('click', (e) => {
    while (eventsTableElement.firstElementChild) {
      eventsTableElement.removeChild(eventsTableElement.firstElementChild);
    }
  });
})();

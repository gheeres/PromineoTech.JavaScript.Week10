// IIFE - Immediately Invoked Function Expression
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

  const wisdomLink = document.getElementById('wisdom');
  wisdomLink.onclick = (e) => {
    //console.log(e);
    const divElement = document.createElement('template');
    divElement.innerHTML = `
    <div class="alert alert-warning alert-dismissible fade show" role="alert">
      <strong>Holy guacamole!</strong> You should check in on some of those fields below.
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`;
    //document.body.appendChild(divElement.content.firstElementChild);
    const mainElement = document.getElementsByTagName('main')[0];
    mainElement.appendChild(divElement.content.firstElementChild);
  };

  //const divElements = document.querySelectorAll('#eventElement div');
  //divElements.forEach((divElement) => {
  //  divElement.addEventListener('click', function(e) {
  //    console.log(e.currentTarget);
  //    e.stopPropagation();
  //  });
  //});

  //const eventElement = document.getElementById('eventElement');
  //eventElement.addEventListener('click', (e) => {
  //  console.log(`target: ${ e.target.id }, currentTarget: ${ e.currentTarget.id }`)
  //  eventElement.style.borderColor = e.target.style.borderColor;
  //});
  const events = [
    'mousedown',
    'mouseenter',
    'mouseleave',
    'mousemove',
    'mouseover',
    'mouseout',
    'mouseup',
    'click'
  ];

  // find table body
  const eventsTable = document.getElementById('eventsTable');
  const eventElement = document.getElementById('eventElement');

  events.forEach((event) => {
    console.log(`Adding event handler for ${ event }...`);
    eventElement.addEventListener(event, (e) => {
      // create new row
      const row = document.createElement('template');
      row.innerHTML = `<tr>
        <td>${ eventsTable.childElementCount+1 }</td>
        <td>${ e.type }</td>
        <td>{ target: ${ e.target.id || e.target.tagName },
          currentTarget: ${ e.currentTarget.id || e.currentTarget.tagName }
        }</td>
      </tr>`;
      
      // insert new row into tablebody
      //eventsTable.appendChild(row.content.firstElementChild);
      eventsTable.insertBefore(row.content.firstElementChild,
                               eventsTable.firstElementChild);
    });
  });

  const clearEvents = document.getElementById('buttonClearEvents');
  clearEvents.addEventListener('click', (e) => {
    //eventsTable.innerHTML = '';
    while(eventsTable.firstElementChild) {
      eventsTable.removeChild(eventsTable.firstElementChild);
    }
  });

  // The jQuery way
  //$('#buttonClearEvents').on('click', function(e) {
  //});
})();
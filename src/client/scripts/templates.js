const templates = {}

templates.toast = message => {
    return `<div class="toast d-flex align-items-center text-white bg-dark show border-0" 
                role="alert" aria-live="assertive" aria-atomic="true">
                <div class="toast-body">
                    ${message}
                </div>
            </div>`
}

templates.message = data => {
    return `<div class="toast show" role="alert" aria-live="assertive" aria-atomic="true">
                <div class="toast-header">
                    <svg class="bi m-1 p-1" width="30" height="30" fill="currentColor">
                        <use xlink:href="assets/icons.svg#person"/>
                    </svg>
                    <strong class="me-auto">${data.author}</strong>
                    <small class="text-muted">${data.time}</small>
                </div>
                <div class="toast-body">
                    ${data.message}
                </div>
            </div>`
}


$.Date = date => {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? '0'+minutes : minutes;
  let strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}
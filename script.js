const clearNotifBtn = document.querySelector('.btn-container');
const notificationsContainer = document.querySelectorAll('.notification');
const notificationsNumber = document.querySelector('.notif-num');
const redDotNotification = document.querySelectorAll('.red-dot');

// event listeners
clearNotifBtn.addEventListener('click', clearnotifications);

// functions

// removing all unread notifications
function clearnotifications() {
  notificationsContainer.forEach(function (notif) {
    notif.classList.remove('unread');
  });
  redDotNotification.forEach(function (notif) {
    notif.classList.add('hidden');
  });

  notificationsNumber.textContent = 0;
}

// getting random number
const rndNum = Math.floor(Math.random() * 7);

// taking random number and setting the same number of unread notifications
function randomizeNotifications() {
  const unreadNotif = notificationsContainer;
  const redDot = redDotNotification;
  notificationsNumber.textContent = rndNum;
  let i = 0;
  while (i < rndNum) {
    unreadNotif.item(i).classList.add('unread');
    redDot.item(i).classList.add('show');
    i++;
  }
}

randomizeNotifications();

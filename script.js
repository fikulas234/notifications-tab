const clearNotifBtn = document.querySelector('.btn-container');
const notificationsContainer = document.querySelectorAll('.notification');
const notificationsNumber = document.querySelector('.notif-num');
const redDotNotification = document.querySelectorAll('.red-dot');

clearNotifBtn.addEventListener('click', clearnotifications);

function clearnotifications() {
  notificationsContainer.forEach(function (notif) {
    notif.classList.remove('unread');
  });
  redDotNotification.forEach(function (notif) {
    notif.classList.add('hidden');
  });

  notificationsNumber.textContent = 0;
}

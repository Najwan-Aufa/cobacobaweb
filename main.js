const toggleMenu = document.getElementById('toggle-menu')
const navbar = document.getElementById('navbar-nav')
const navLink = document.querySelectorAll('.nav-link')

toggleMenu.addEventListener('click', () => {
    navbar.classList.toggle('show')
})

for(let i = 0; i < navLink.length; i++) {
    navLink[i].addEventListener('click', () => {
        navbar.classList.toggle('show')
    })
}

document.getElementById('loadMoreBtn').addEventListener('click', function() {
    // Dapatkan semua elemen dengan class 'hidden'
    const hiddenCards = document.querySelectorAll('.card.hidden');
  
    // Ubah display dari elemen-elemen tersebut sehingga muncul
    hiddenCards.forEach((card, index) => {
      if (index < 3) { // Misalnya menampilkan 2 card sekaligus
        card.classList.remove('hidden');
      }
    });
  
    // Jika tidak ada lagi card yang tersembunyi, sembunyikan tombol "load more"
    if (document.querySelectorAll('.card.hidden').length === 0) {
      document.getElementById('loadMoreBtn').style.display = 'none';
    }
  });

  // main.js
function loadMore() {
  if (window.innerWidth < 768) { // Check if the screen width is less than 768px
      const hiddenCards = document.querySelectorAll('.card.hidden');
      hiddenCards.forEach((card, index) => {
          if (index < 3) {
              card.classList.remove('hidden');
          }
      });

      const remainingHiddenCards = document.querySelectorAll('.card.hidden').length;
      if (remainingHiddenCards === 0) {
          document.querySelector('.load-more').style.display = 'none';
      }

      adjustHeaderHeight();
  }
}

function adjustHeaderHeight() {
  if (window.innerWidth < 768) { // Check if the screen width is less than 768px
      const header = document.querySelector('.full-screen-header3');
      const cards = document.querySelectorAll('.full-screen-header3 .card');
      const cardHeight = cards[0].offsetHeight;
      const totalRows = Math.ceil(cards.length / 1); // assuming 1 card per row in mobile view
      const newHeight = totalRows * (cardHeight + 20) + 200; // +200 for extra spacing, adjust as needed

      header.style.height = `${newHeight}px`;
  }
}

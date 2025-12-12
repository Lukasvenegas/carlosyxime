//    const totalHearts = 35;
//    for (let i = 0; i < totalHearts; i++) {
//      const heart = document.createElement('div');
//      heart.className = 'heart';
//      heart.style.left = Math.random() * 100 + 'vw';
//      heart.style.animationDuration = (5 + Math.random() * 5) + 's';
//      heart.style.bottom = Math.random() * 10 + 'vh'; 
//      heart.style.opacity = Math.random() * 0.5 + 0.3; 
//      document.body.appendChild(heart);
//    }

    let currentPage = 1;
    function nextPage() {
      document.getElementById(`page${currentPage}`).style.left = '-100vw'; 
      document.getElementById(`page${currentPage}`).classList.remove('active'); 
      currentPage++;
      if (currentPage > 4) { 
        currentPage = 4; 
        return;
      } 
      const nextPageElement = document.getElementById(`page${currentPage}`);
      nextPageElement.style.left = '0';
      nextPageElement.classList.add('active');
    }

    function restart() {
      document.getElementById(`page${currentPage}`).style.left = '100vw'; 
      document.getElementById(`page${currentPage}`).classList.remove('active');
      currentPage = 1;
      const startPageElement = document.getElementById(`page${currentPage}`);
      startPageElement.style.left = '0';
      startPageElement.classList.add('active');
    }
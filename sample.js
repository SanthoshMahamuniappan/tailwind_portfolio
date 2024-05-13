document.getElementById('showMoreBtn1').addEventListener('click', function() {
    var additionalContent = document.getElementById('additionalContent');
    if (additionalContent.classList.contains('hidden')) {
      additionalContent.classList.remove('hidden');
      this.textContent = 'Show Less';
    } else {
      additionalContent.classList.add('hidden');
      this.textContent = 'Show More';
    }
  });
  
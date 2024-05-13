// PC navigation links
document.getElementById('scrollButtonHome').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default anchor link behavior
  document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('scrollButtonaboutMe').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default anchor link behavior
  document.getElementById('aboutMe').scrollIntoView({ behavior: 'smooth' });  
});

document.getElementById('scrollButtonProjects').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default anchor link behavior
  document.getElementById('Projects').scrollIntoView({ behavior: 'smooth' });
});  

document.getElementById('scrollButtonContact').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor link behavior
    document.getElementById('Contact').scrollIntoView({ behavior: 'smooth' });

})

// Mobile navigation links
document.getElementById('scrollButtonHomeMobile').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default anchor link behavior
  document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('scrollButtonaboutMeMobile').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default anchor link behavior
  document.getElementById('aboutMe').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('scrollButtonProjectsMobile').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default anchor link behavior
  document.getElementById('Projects').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('scrollButtonContactMobile').addEventListener('click', function(event)
{
  event.preventDefault();
  document.getElementById('Contact').scrollIntoView({behavior:'smooth'})
})

document.getElementById('backToTop').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default anchor link behavior
  document.getElementById('backtotop').scrollIntoView({ behavior: 'smooth' });
});

// show more 1
document.getElementById('showMoreBtn1').addEventListener('click', function() {
  var additionalContent = document.getElementById('additionalContent1');
  if (additionalContent.classList.contains('hidden')) {
    additionalContent.classList.remove('hidden');
    this.textContent = 'Show Less';
  } else {
    additionalContent.classList.add('hidden');
    this.textContent = 'Show More';
  }
});

// show more 2
document.getElementById('showMoreBtn2').addEventListener('click', function() {
  var additionalContent = document.getElementById('additionalContent2');
  if (additionalContent.classList.contains('hidden')) {
    additionalContent.classList.remove('hidden');
    this.textContent = 'Show Less';
  } else {
    additionalContent.classList.add('hidden');
    this.textContent = 'Show More';
  }
});

// show more 3
document.getElementById('showMoreBtn3').addEventListener('click', function() {
  var additionalContent = document.getElementById('additionalContent3');
  if (additionalContent.classList.contains('hidden')) {
    additionalContent.classList.remove('hidden');
    this.textContent = 'Show Less';
  } else {
    additionalContent.classList.add('hidden');
    this.textContent = 'Show More';
  }
});

// show more 4
document.getElementById('showMoreBtn4').addEventListener('click', function() {
  var additionalContent = document.getElementById('additionalContent4');
  if (additionalContent.classList.contains('hidden')) {
    additionalContent.classList.remove('hidden');
    this.textContent = 'Show Less';
  } else {
    additionalContent.classList.add('hidden');
    this.textContent = 'Show More';
  }
});

// show more 5
document.getElementById('showMoreBtn5').addEventListener('click', function() {
  var additionalContent = document.getElementById('additionalContent5');
  if (additionalContent.classList.contains('hidden')) {
    additionalContent.classList.remove('hidden');
    this.textContent = 'Show Less';
  } else {
    additionalContent.classList.add('hidden');
    this.textContent = 'Show More';
  }
});


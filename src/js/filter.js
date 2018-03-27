function toggleCategories(category) {
  document.querySelectorAll('ul.filterable>li, h2.filterable>span').forEach(function(element) {
    element.classList.add('hidden');
  });
  document.querySelector('.filter-all').classList.remove('hidden');
  // document.querySelectorAll('.filter').forEach(function(element) {
  //   element.classList.remove('active');
  // });
  // document.querySelector(".filter-"+category).classList.add('active');
  document.querySelectorAll("."+category).forEach(function(element) {
    element.classList.remove('hidden');
  });
}

document.querySelectorAll('a.filter').forEach(function(element) {
    element.addEventListener('click', function(event) {
      event.preventDefault();
      var category = element.classList[1].substr(7);
      if (category == 'all') {
        element.classList.add('hidden');
        // document.querySelectorAll('.filter').forEach(function(element) {
        //   element.classList.remove('active');
        // });
        document.querySelectorAll('ul.filterable>li').forEach(function(element) {
          element.classList.remove('hidden');
        });
        document.querySelectorAll('h2.filterable>span').forEach(function(element) {
          element.classList.add('hidden');
        });
      } else {
      toggleCategories(category);
    };
      console.log('clicked on '+element.classList[1].substr(7));
})
    });

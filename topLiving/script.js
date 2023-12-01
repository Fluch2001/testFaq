document.addEventListener('DOMContentLoaded', function () {
  const faqCategories = document.querySelectorAll('.faq-category');

  faqCategories.forEach(category => {
    const categoryTitle = category.querySelector('.category-title');
    const categoryQuestions = category.querySelectorAll('.faq-question');

    categoryTitle.addEventListener('click', function () {
      categoryQuestions.forEach(question => {
        question.querySelector('.answer').classList.toggle('show-answer');
      });
    });

    categoryQuestions.forEach(question => {
      question.addEventListener('click', function () {
        this.querySelector('.answer').classList.toggle('show-answer');
      });
    });
  });
});

// Define an array of FAQ objects
const faqs = [
  {
    question:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quos.?",
    answer:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore quaerat minus, nemo soluta a, quod quisquam iure itaque voluptate, praesentium molestias recusandae culpa perspiciatis ut officiis consequuntur dolore esse cupiditate.",
  },
  {
    question:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quos.?",
    answer:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore quaerat minus, nemo soluta a, quod quisquam iure itaque voluptate, praesentium molestias recusandae culpa perspiciatis ut officiis consequuntur dolore esse cupiditate.",
  },
  {
    question:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quos.?",
    answer:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore quaerat minus, nemo soluta a, quod quisquam iure itaque voluptate, praesentium molestias recusandae culpa perspiciatis ut officiis consequuntur dolore esse cupiditate.",
  },
  {
    question:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quos.?",
    answer:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore quaerat minus, nemo soluta a, quod quisquam iure itaque voluptate, praesentium molestias recusandae culpa perspiciatis ut officiis consequuntur dolore esse cupiditate.",
  },
  {
    question:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quos.?",
    answer:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore quaerat minus, nemo soluta a, quod quisquam iure itaque voluptate, praesentium molestias recusandae culpa perspiciatis ut officiis consequuntur dolore esse cupiditate.",
  },
];

// Function to create FAQ item HTML
function createFaqItem(faq, index) {
  return `
      <div class="accordion-item">
        <h2 class="accordion-header" id="faq${index + 1}">
          <button
            class="accordion-button ${index === 0 ? "" : "collapsed"}"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapse${index + 1}"
            aria-expanded="${index === 0}"
            aria-controls="collapse${index + 1}"
          >
            ${faq.question}
          </button>
        </h2>
        <div
          id="collapse${index + 1}"
          class="accordion-collapse collapse ${index === 0 ? "show" : ""}"
          aria-labelledby="faq${index + 1}"
          data-bs-parent="#faqAccordion"
        >
          <div class="accordion-body">
            ${faq.answer}
          </div>
        </div>
      </div>
    `;
}

// Function to render all FAQs
function renderFaqs() {
  const faqContainer = document.getElementById("faqAccordion");
  faqContainer.innerHTML = faqs
    .map((faq, index) => createFaqItem(faq, index))
    .join("");
}

// Call renderFaqs when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", renderFaqs);


export default function getRefs() {
  return {
    cardContainer: document.querySelector('.js-card-container'),
    searchForm: document.querySelector('.js-search-form'),

    props: {
      delay: 500
    },

    data: () => ({
      search: null
    }),
  



    // created() {
    //   this.valueChanged = debounce(function (event) {
    //     // Here you have access to `this`
    //     this.fetchCountries(event.target.value)
    //   }.bind(this), this.delay)

    // },

    methods: {
      makeAPIrequest(newVal) {
        // ...
      }
    },
  };
}

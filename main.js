Vue.component('modal', {

	template: '#modal-script',

	props: ['title', 'body'],
})

var mainVm = new Vue({

	el: '#app',

})
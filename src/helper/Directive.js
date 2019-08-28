import Vue from 'vue'
Vue.directive('login', function (el, binding) {
        if(binding.value) {
            el.innerHTML = "<p><img src='./../images/img_sakura.jpg' alt='Sakura' /></p><p>Na Le</p "
        }
        else {
            el.innerHTML = "<a href='#' @click='signin'>Login</a>"
        }
  })
new Vue({

    el: '#exercise',

    data: {

        value: 0,

        timer: 0

    },

    watch: {

    result: function() {

      var vm = this;

        setTimeout(function() {

        vm.value = 0;

        }, vm.timer);

      }

    },

    computed: {

    result: function() {

      return this.value == 37 ? 'done':'not there yet'

      }

    }

});

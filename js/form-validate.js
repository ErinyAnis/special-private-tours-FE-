$("#formValidation").validate({
  rules: {
    fname: {
      required: true,
      minlength: 2
    },

    email: {
      required: true,
      email: true
    },

    message: {
      required: true
    }
  },
  messages: {
    fname:{
      required: "please enter your first-name",
      minlength:"first-name at least 2 characters"
    },

    email: {
      required: "please enter your email"
    },

    message: {
      required: "please enter your message"
    }
  },


    submitHandler: function(form) {
      
      $(form).submit();
    }
});

$("#booking-form").validate({
  rules: {
    first_name: {
      required: true,
      minlength: 2
    },

    last_name: {
      required: true,
      minlength: 2
    },

    email: {
      email: true,
      required: true
    },

    phone: {
      number: true,
      required: true
    },

    gender: {
      required: true
    },

    age: {
      required: true
    }

  },

  messages: {
    first_name: {
      required: "please enter your first-name",
      minlength:"first-name at least 2 characters"
    },

    last_name: {
      required: "please enter your last-name",
      minlength:"last-name at least 2 characters"
    },

    email: {
      email: "please enter email type",
      required: "please enter your email"
    },

    phone: {
      number: "phone must be a number",
      required: "please enter your phone"
    },

    gender: {
      required: "please select your gender"
    },

    age: {
      required: "please select your age"
    }

  }
}); 
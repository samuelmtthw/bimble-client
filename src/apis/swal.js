import Swal from "sweetalert2";

function alertSuccess(message) {
  const data = {
    title: "Yash!",
    text: message,
    icon: "success",
  };

  Swal.fire(data);
}

function alertError(message) {
  const data = {
    title: "Ooof...",
    text: message,
    icon: "error",
  };

  Swal.fire(data);
}

function alertLoading(data) {
  Swal.fire({
    title: "Processing...",
    html: "Please wait",
    showConfirmButton: false,
    allowOutsideClick: false,
    didOpen: () => {
      data;
    },
  });
}

// getMyRecipes() {
//   const loading = this.$store
//     .dispatch("getMyRecipes")
//     .then(response => {
//       Swal.close();
//       this.$store.dispatch("setMyRecipes", response.data);
//     })
//     .catch(err => {
//       Swal.close();
//       swalError("", err.response.data.message);
//     });
//   swalLoading(loading);
// },

export { alertSuccess, alertError, alertLoading };

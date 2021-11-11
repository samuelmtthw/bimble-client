<template>
  <section id="AdminCourses">
    <table class="w-100">
      <thead>
        <tr>
          <th class="text-center">ID</th>
          <th>Name</th>
          <th>Status</th>
          <th>Category</th>
          <th class="text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="course in courses" :key="course.id" class="p1">
          <td class="text-center">{{ course.id }}</td>
          <td>{{ course.name }}</td>
          <td>{{ course.status }}</td>
          <td>{{ course.CategoryId }}</td>
          <td>
            <div class="d-flex flex-row justify-content-between">
              <button class="btn actionButton w-25">Details</button>
              <button class="btn btn-secondary w-25">Update</button>
              <button class="btn btn-dark w-25">Delete</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
export default {
  name: "AdminCourses",
  data() {
    return {
      courses: [
        {
          id: 1,
          name: "Program Linear",
          description:
            "Program Linear adalah bagian matematika yang membahas cara menentukan nilai optimum suatu fungsi – dinamakan fungsi obyektif atau fungsi tujuan – pada suatu sistem yang dibatasi beberapa kendala./nAda dua macam nilai optimum yang akan ditentukan, yaitu nilai maksimum dan nilai minimum.",
          price: 145000,
          thumbnailUrl:
            "https://i.ytimg.com/vi/WJr11FExG7s/hqdefault.jpg?s…RUAAIhCGAE=&rs=AOn4CLAImD8rRbQR7cuFCw3Z_xsjLlr1Tg",
          difficulty: "medium",
          status: "active",
          rating: 8,
          CategoryId: 1,
        },
        {
          id: 2,
          name: "Dimensi Tiga",
          description:
            "Yang dimaksud dengan unsur-unsur ruang adalah titik, garis, dan bidang./nDalam Geometri, titik, garis, dan bidang, termasuk dalam aksioma atau postulat./nAksioma adalah pernyataan yang diterima sebagai kebenaran secara umum tanpa perlu adanya pembuktian.",
          price: 130000,
          thumbnailUrl:
            "https://i.ytimg.com/vi/strzhKqA_sQ/hqdefault.jpg?s…RUAAIhCGAE=&rs=AOn4CLCVGKk89pHJwWo1ORt8hzlH1iM9rg",
          difficulty: "easy",
          status: "active",
          rating: 8,
          CategoryId: 1,
        },
      ],
    };
  },
  methods: {
    fetchCoursesAdmin() {
      this.$store
        .dispatch("fetchCoursesAdmin")
        .then((result) => {
          console.log(result);
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
  },
  created() {},
};
</script>

<style>
#AdminPage table th {
  padding: 0 5px 5px 5px;
  font-size: 1.1em;
}

#AdminPage table td {
  padding: 5px;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}
#AdminPage .actionButton {
  background-color: #a3d2ca;
}
</style>

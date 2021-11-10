<template>
  <section>
    <div>
      <h1>Join Class A</h1>
      <h3>Price:</h3>
      <form @submit.prevent="pay">
        <label>Enter your phone number (OVO)</label>
        <input
          type="number"
          placeholder="+62-812-345-6789"
          v-model="phoneNumber"
        />
        <input type="submit" value="Pay" />
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: "BuyPage",
  data: function () {
    return {
      phoneNumber: "",
    };
  },
  methods: {
    pay() {
      console.log("hello");
    },
  },
};
</script>

<style></style>

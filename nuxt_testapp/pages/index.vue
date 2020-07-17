<template>
  <div class="container">
    <div>
      <h1 class="title">
        testapp
      </h1>
      <button @click="getData">getdata</button>
      <a>aaaaaa</a>
      <table border="1" width="100%" cellpadding="5">
        <tr v-for="(data,index) in tabledata">
          <th>{{data["table1.f"]}}</th>
          <th>{{data["table1.i"]}}</th>
          <th>{{data["table1.o"]}}</th>
          <th>{{data.balance}}</th>
        </tr>
      </table>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabledata: [],
      addin: "",
      idx: -1,
      prev: "",
      showdel: false,
      test : "null"
    };
  },
  methods:{
    async getData(){
      this.tabledata= await this.$axios.$get('http://localhost:3001/aa')
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

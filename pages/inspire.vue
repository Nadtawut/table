<template>
  <div>
    <v-container>
      <v-card>
        <h1 class="text-center">User</h1>
        <v-data-table
          :headers="headers"
          :items="textList"
          :items-per-page="4"
          class="elevation-1"
        ></v-data-table>
      </v-card>
    </v-container>
  </div>
</template>
<script>
import { db } from '~/plugins/firebaseConfig.js'
export default {
  data() {
    return {
      textList: [],
      headers: [
          {
            text: 'Username',
            align: 'start',
            sortable: false,
            value: 'username',
          },
          { text: 'E-mail', value: 'email' },
          { text: 'Password', value: 'password' },
          { text: 'firstname', value: 'firstname' },
          { text: 'lastname', value: 'lastname' },
          { text: 'Gender', value: 'sex' },
        ],
    }
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      db.collection('register')
        .orderBy('username')
        .onSnapshot((querySnapshot) => {
          const data = []
          querySnapshot.forEach((doc) => {
            data.push(doc.data())
          })
          this.textList = data
        })
    },
  },
}
</script>
<template>
  <div>

    <div class="py-1 mb-2">
      <b-input-group>
        <b-input v-model="searchQuery" />
        <b-btn slot="append" variant="primary" @click="search()"><i class="ion ion-ios-search"></i>&nbsp; Search</b-btn>
      </b-input-group>
    </div>

    <ul class="search-nav nav nav-tabs tabs-alt container-p-x container-m--x mb-4">
      <b-nav-item :active="curTab === 'pages'" @click="curTab = 'pages'"><i class="ion ion-md-copy"></i>&nbsp; Website</b-nav-item>
    </ul>

    <div v-if="curTab === 'pages'">
      <span>About n results (m seconds)</span>

      <b-card no-body>
          <b-list-group :flush="true">
              <li v-for="page in searchData.pages" :key="page.title + page.text" class="list-group-item py-4">
                  <a :href="page.url" class="text-big">{{page.title}}</a>

                  <div v-if="page.url" class="small mt-1">
                      <a :href="page.url" class="text-success">{{page.url}}</a>
                      <!-- <span>&nbsp; <span class="text-muted">·</span> &nbsp;{{page.votes}} votes</span>                       -->
                      <!-- <span class="text-muted">{{page.votes}} votes</span> -->
                  </div>

                  <div v-if="page.text" class="mt-2">{{page.text}}</div>
              </li>
          </b-list-group>
      </b-card>
      <b-pagination :total-rows="50" :per-page="5" class="mt-3" />
    </div>

  </div>
</template>

<style src="@/vendor/styles/pages/search.scss" lang="scss"></style>

<script>
export default {
  name: 'search-results',
  metaInfo: {
    title: 'Search results'
  },
  data: () => ({
    curTab: 'pages',
    searchQuery: '',

    searchData: {
      pages: [],
    }
  }),
  methods: {
    search () {
      let parameterString = "?word="+this.searchQuery;
      let cpiBackendUrl = 'http://localhost:2020/cpi/rank';
      let url = cpiBackendUrl + parameterString;

      this.$http.get(url).then(response => {
        let result = response.data
        this.searchData.pages = result;
        console.log(result);
        this.$showNotification('acNotification', 'success', 'Search', 'Search result on ' + this.searchQuery + ' is returned back successfully!');
      }, response => {
        this.$showNotification('acNotification', 'error', 'Domain-settings', 'Error occurres when searching ' + this.searchQuery + '!');
      });
    },

  }
}
</script>

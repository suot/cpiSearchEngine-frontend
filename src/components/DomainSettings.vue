<template>
  <div>
    <h4 class="font-weight-bold py-3 mb-4">Domain Settings</h4>
    <b-card no-body>
      <hr class="border-light m-0">
      <b-card-body>
        <div class="ui-bordered px-4 pt-4 mb-4">
          <div class="form-row align-items-center">
            <div class="col-md mb-4">
              <b-form-group label="Domain">
                <b-input v-model="domain" rows="1" placeholder=".uwindsor.ca, .utoronto.ca, ..." />
              </b-form-group>
            </div>
          </div>

          <div class="form-row align-items-center">
            <div class="col-md mb-4">
              <b-form-group label="Depth">
                <b-select v-model="depth" :options="[2, 3, 4, 5]" placeholder="Depth limit of inner webpage links" />
              </b-form-group>
            </div>
          </div>

          <div class="form-row align-items-center">
            <div class="col-md mb-4">
              <b-form-group label="Amount">
                <b-input v-model="amount" rows="1" placeholder="Total amount of webpages" />
              </b-form-group>
            </div>
          </div>
        </div>
      </b-card-body>

      <b-card-footer>
        <b-btn variant="primary" @click="configureDomain()">Configure domain</b-btn>        &nbsp;
        <b-btn variant="default">Cancel</b-btn>
      </b-card-footer>
    </b-card>
  </div>
</template>


<script>
export default {
  name: 'configure-domain',
  metaInfo: {
    title: 'Configure domain'
  },

  data: () => ({
      domain: "",
      depth: null,
      amount: null
  }),

  methods: {
    configureDomain(){
      let url = this.$store.state.dataUrl + "/cpi/startup?domain="+this.domain+"&maximumAmount="+this.amount+"&maximumDepth="+this.depth;
      this.$http.get(url).then(response => {
        //let result = response.data;
        this.$showNotification('acNotification', 'success', 'Domain-settings', 'Domain is configured successfully!');
      }, error => {
        this.$showNotification('acNotification', 'error', 'Domain-settings', 'Error occurs when configuring domain!');
      });
    },
  }
}
</script>

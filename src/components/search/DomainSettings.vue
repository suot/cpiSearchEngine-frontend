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
      <!-- / Ticket settings -->

      <!-- Footer -->
      <b-card-footer>
        <b-btn variant="primary" @click="configureDomain()">Configure domain</b-btn>
        &nbsp;
        <b-btn variant="default">Cancel</b-btn>
      </b-card-footer>
      <!-- Footer -->
    </b-card>
  </div>
</template>


<script>
export default {
  name: 'configure-domain',
  metaInfo: {
    title: 'Conifgure domain'
  },

  data: () => ({
      domain: "",
      depth: null,
      amount: null
  }),

  methods: {
    configureDomain(){
      //add driver to the created orders
      let parameterString = "?domain="+this.domain+"&maximumAmount="+this.amount+"&maximumDepth="+this.depth;
      let cpiBackendUrl = 'http://localhost:2020/cpi/startup';
      let url = cpiBackendUrl + parameterString;

      this.$http.get(url).then(response => {
        let result = response.data;
        this.$showNotification('acNotification', 'success', 'Domain-settings', 'Domain is configured successfully!');
      }, response => {
        this.$showNotification('acNotification', 'error', 'Domain-settings', 'Error occurres when configuring domain!');
      });
    },
  }
}
</script>

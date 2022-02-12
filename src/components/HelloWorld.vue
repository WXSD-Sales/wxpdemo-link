<template>
  <div>
    <div class="mx-1">
      <b-tabs type="is-toggle" v-model='tab' size="is-medium">
        <b-tab-item label="Widget" value="widget" icon="widgets"></b-tab-item>
        <b-tab-item label="SDK" value="sdk" icon="code-braces"></b-tab-item>
      </b-tabs>
    </div>

    <form class="box mx-1 mt-6" v-if="tab === 'widget'">

      <b-field label="Destination" label-position="on-border" custom-class="is-medium">
        <b-input v-model="destination"
                 placeholder="The email address, roomId, or SIP URI."
                 size="is-medium"
                 required
                 expanded>
        </b-input>
      </b-field>

      <b-field label="Destination Type" label-position="on-border" custom-class="is-medium">
        <b-select v-model="destinationType"
                  placeholder="Select the type of destination"
                  size="is-medium"
                  required
                  expanded>
          <option
            v-for="option in destinationTypes"
            :value="option.value"
            :key="option.value">
            {{ option.name }}
          </option>
        </b-select>
      </b-field>

      <b-field label="Token" label-position="on-border" custom-class="is-medium">
        <b-input v-model="token"
                 placeholder="The Webex Bearer token of the local user (i.e. your token from the developer portal)"
                 size="is-medium"
                 required
                 expanded>
        </b-input>
      </b-field>

      <b-field label="Label" label-position="on-border" custom-class="is-medium">
        <b-input v-model="label"
                 placeholder="The email address, roomId, or SIP URI"
                 size="is-medium"
                 expanded>
        </b-input>
      </b-field>

      <b-field label="Background Image (URL)" label-position="on-border" custom-class="is-medium">
        <b-input v-model="backgroundImage"
                 placeholder="The publicly accessible URL of a custom background image to use"
                 size="is-medium"
                 expanded>
        </b-input>
      </b-field>

      <b-field label="Widget URL" label-position="on-border" custom-class="is-medium"
               :type="isWidgetUrlValid ? '' : 'is-danger'"
               :message="isWidgetUrlValid ? '' : 'Please complete the required fields above.'"
      >
        <b-input type="textarea" disabled :value="widgetUrl" size="is-medium" expanded></b-input>
      </b-field>

      <div class="buttons is-right">
        <b-button type="is-link"
                  icon-left="content-copy"
                  @click="copyToClipBoard(widgetUrl)"
                  :disabled="!isWidgetUrlValid"
                  size="is-medium"
        >
          Copy URL to Clipboard
        </b-button>
      </div>
    </form>

    <form class="box mx-1 mt-6" v-if="tab === 'sdk'">

      <b-field label="Destination" label-position="on-border" custom-class="is-medium">
        <b-input v-model="destination"
                 placeholder="The text to show"
                 size="is-medium"
                 required
                 expanded>
        </b-input>
      </b-field>

      <b-field label="Token" label-position="on-border" custom-class="is-medium">
        <b-input v-model="token"
                 placeholder="The Webex Bearer token of the local user (i.e. your token from the developer portal)"
                 size="is-medium"
                 required
                 expanded>
        </b-input>
      </b-field>

      <b-field label="User Type" label-position="on-border" custom-class="is-medium">
        <b-select v-model="userType"
                  placeholder="Select the type of destination"
                  size="is-medium"
                  required
                  expanded>
          <option :value="true">Guest</option>
          <option :value="false">Other</option>
        </b-select>
      </b-field>

      <b-field label="Background Image (URL)" label-position="on-border" custom-class="is-medium">
        <b-input v-model="backgroundImage"
                 placeholder="The publicly accessible URL of a custom background image to use"
                 size="is-medium"
                 expanded>
        </b-input>
      </b-field>

      <b-field label="Meet Button Color" label-position="on-border" custom-class="is-medium">
        <b-input v-model="meetButtonColor"
                 placeholder="A HEX color string for the meet button(s) e.g. 0000ff for blue"
                 size="is-medium"
                 expanded>
        </b-input>
      </b-field>

      <b-field custom-class="is-medium">
        <b-switch v-model="headerToggle" size="is-medium">
          Header Toggle (display the header at the top of the page?)
        </b-switch>
      </b-field>

      <b-field custom-class="is-medium">
        <b-switch v-model="listenOnlyOption" size="is-medium">
          Listen Only Option (display the listen Only meet button?)
        </b-switch>
      </b-field>

      <b-field custom-class="is-medium">
        <b-switch v-model="selfView" size="is-medium">
          Self View (display the self view video element?)
        </b-switch>
      </b-field>

      <b-field custom-class="is-medium">
        <b-switch v-model="shareOnlyOption" size="is-medium">
          Share Only (only receive and send shared screen?)
        </b-switch>
      </b-field>

      <b-field custom-class="is-medium">
        <b-switch v-model="showSMS" size="is-medium">
          Show SMS (display the send guest link via SMS?)
        </b-switch>
      </b-field>

      <b-field label="SDK URL" label-position="on-border" custom-class="is-medium"
               :type="isSdkUrlValid ? '' : 'is-danger'"
               :message="isSdkUrlValid ? '' : 'Please complete the required fields above.'"
      >
        <b-input type="textarea" disabled :value="sdkUrl" size="is-medium" expanded></b-input>
      </b-field>

      <div class="buttons is-right">
        <b-button type="is-link"
                  icon-left="content-copy"
                  @click="copyToClipBoard(sdkUrl)"
                  :disabled="!isSdkUrlValid"
                  size="is-medium"
        >
          Copy URL to Clipboard
        </b-button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      destinationTypes: [
        {
          name: 'Email',
          value: 'email'
        },
        {
          name: 'Space Id',
          value: 'spaceId'
        },
        {
          name: 'SIP',
          value: 'sip'
        }
      ],
      destination: null,
      destinationType: null,
      token: null,
      label: null,
      backgroundImage: null,
      userType: false,
      meetButtonColor: '0000ff',
      headerToggle: true,
      listenOnlyOption: false,
      selfView: true,
      shareOnlyOption: false,
      showSMS: false
    }
  },
  methods: {
    copyToClipBoard (content) {
      navigator.clipboard.writeText(content)
      this.$buefy.snackbar.open({
        duration: 1000,
        message: 'Copied contents to clipboard!',
        pauseOnHover: true,
        type: 'is-success',
        position: 'is-top-right'
      })
    }
  },
  computed: {
    tab: {
      get: function () {
        const tabs = ['widget', 'sdk']
        const tab = this.$route.query.tab ? this.$route.query.tab.toLowerCase() : ''

        if (tabs.includes(tab)) {
          return tab
        }

        return 'widget'
      },
      set: function (value) {
        this.$router.push({query: {tab: value}})
      }
    },
    isWidgetUrlValid () {
      // just check for required fields
      return this.destination && this.destinationType && this.token
    },
    widgetUrl () {
      // TODO: trim the strings
      let url = `https://wxsd-sales.github.io/wxpdemo/public/widget.html?` +
        `destination=${encodeURIComponent(this.destination)}&` +
        `destinationType=${encodeURIComponent(this.destinationType)}&` +
        `token=${encodeURIComponent(this.token)}`

      if (this.label) {
        url = url + '&label=' + encodeURIComponent(this.label)
      }

      if (this.backgroundImage) {
        url = url + '&backgroundImage=' + encodeURIComponent(this.backgroundImage)
      }

      return url
    },
    isSdkUrlValid () {
      // just check for required fields
      return this.destination && this.token
    },
    sdkUrl () {
      // TODO: trim the strings
      let url = `https://wxsd-sales.github.io/wxpdemo/public/guest.html?` +
        `destination=${encodeURIComponent(this.destination)}&` +
        `token=${encodeURIComponent(this.token)}`

      if (this.userType) {
        url = url + '&userType=guest'
      }

      if (this.backgroundImage) {
        url = url + '&backgroundImage=' + encodeURIComponent(this.backgroundImage)
      }

      if (this.meetButtonColor) {
        url = url + '&meetButtonColor=' + encodeURIComponent(this.meetButtonColor)
      }

      url = url + '&headerToggle=' + encodeURIComponent(this.headerToggle)
      url = url + '&listenOnlyOption=' + encodeURIComponent(this.listenOnlyOption)
      url = url + '&selfView=' + encodeURIComponent(this.selfView)
      url = url + '&shareOnlyOption=' + encodeURIComponent(this.shareOnlyOption)
      url = url + '&showSMS=' + encodeURIComponent(this.showSMS)

      return url
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

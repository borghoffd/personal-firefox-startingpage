<template>
    <div class="calendar">
        <div class='authentification'>
            <h2>VueJS + Google Calendar Example</h2>
            Authentification
            <button v-if='!authorized' @click="handleAuthClick">Sign In</button>
            <button v-if='authorized' @click="handleSignoutClick">Sign Out</button>
        </div>
        <hr>
        <button v-if='authorized' @click="getData">Get Data</button>
        <div class="item-container" v-if="authorized && items">
            <pre v-html="items"></pre>
        </div>

        <div id="g_id_onload" data-client_id="332703463000-q2ie7k4uu99j9ei5fpokoraeemti7lu1.apps.googleusercontent.com"
            data-context="signin" data-ux_mode="popup" data-callback="test" data-itp_support="true">
        </div>

        <div class="g_id_signin" data-type="standard" data-shape="rectangular" data-theme="outline"
            data-text="signin_with" data-size="large" data-logo_alignment="left">
        </div>
    </div>
</template>

<script>

export default {
    name: 'Calendar',
    data() {
        return {
            items: undefined,
            // api: undefined,
            // authorized: false
        };
    },
    created() {
        // this.api = gapi;
        // this.handleClientLoad();
    },
    methods: {
        //     /**
        //  *  On load, called to load the auth2 library and API client library.
        //  */
        //     handleClientLoad() {
        //         this.api.load('client:auth2', this.initClient);
        //     },

        //     /**
        //      *  Initializes the API client library and sets up sign-in state
        //      *  listeners.
        //      */
        //     initClient() {
        //         let vm = this;

        //         vm.api.client.init({
        //             apiKey: API_KEY,
        //             clientId: CLIENT_ID,
        //             discoveryDocs: DISCOVERY_DOCS,
        //             scope: SCOPES
        //         }).then(_ => {
        //             // Listen for sign-in state changes.
        //             vm.api.auth2.getAuthInstance().isSignedIn.listen(vm.authorized);
        //         });
        //     },

        //     /**
        //      *  Sign in the user upon button click.
        //      */
        //     handleAuthClick(event) {
        //         Promise.resolve(this.api.auth2.getAuthInstance().signIn())
        //             .then(_ => {
        //                 this.authorized = true;
        //             });
        //     },

        //     /**
        //      *  Sign out the user upon button click.
        //      */
        //     handleSignoutClick(event) {
        //         Promise.resolve(this.api.auth2.getAuthInstance().signOut())
        //             .then(_ => {
        //                 this.authorized = false;
        //             });
        //     },

        //     /**
        //      * Print the summary and start datetime/date of the next ten events in
        //      * the authorized user's calendar. If no events are found an
        //      * appropriate message is printed.
        //      */
        //     getData() {
        //         let vm = this;

        //         vm.api.client.calendar.events.list({
        //             'calendarId': 'primary',
        //             'timeMin': (new Date()).toISOString(),
        //             'showDeleted': false,
        //             'singleEvents': true,
        //             'maxResults': 10,
        //             'orderBy': 'startTime'
        //         }).then(response => {
        //             vm.items = this.syntaxHighlight(response.result.items);
        //             console.log(vm.items);
        //         });
        //     },

        //     syntaxHighlight(json) {
        //         if (typeof json != 'string') {
        //             json = JSON.stringify(json, undefined, 2);
        //         }
        //         json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        //         return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, match => {
        //             var cls = 'number';
        //             if (/^"/.test(match)) {
        //                 if (/:$/.test(match)) {
        //                     cls = 'key';
        //                 } else {
        //                     cls = 'string';
        //                 }
        //             } else if (/true|false/.test(match)) {
        //                 cls = 'boolean';
        //             } else if (/null/.test(match)) {
        //                 cls = 'null';
        //             }
        //             return '<span class="' + cls + '">' + match + '</span>';
        //         });
        //     }
    }
};
</script>
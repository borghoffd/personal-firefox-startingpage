import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'

createApp(App).mount('#app')

const { AddonManager } = ChromeUtils.import("resource://gre/modules/AddonManager.jsm");

function startup(data, reason) {
    // nothing here
}

function shutdown(data, reason) {
    // nothing here
}

function install(data, reason) {
    // nothing here
}

function uninstall(data, reason) {
    // nothing here
}

AddonManager.addAddonListener({
    onDisabled: function (addon) {
        if (addon.id === "personal-startpage@example.com") {
            shutdown();
        }
    },
    onEnabled: function (addon) {
        if (addon.id === "personal-startpage@example.com") {
            startup();
        }
    },
    onInstalled: function (addon) {
        if (addon.id === "personal-startpage@example.com") {
            install();
        }
    },
    onUninstalled: function (addon) {
        if (addon.id === "personal-startpage@example.com") {
            uninstall();
        }
    }
});
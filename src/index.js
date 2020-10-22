import Vue from 'vue'
import Form from '../packages/form/index'

let myPlugin = {
    version: '1.0.3',
    install: function(Vue) {
        if (this.installed) return;
        Vue.component(Form.name, Form)
    }
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
	myPlugin.install(window.Vue);
}

Vue.use(myPlugin)

export default myPlugin;
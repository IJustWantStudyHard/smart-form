import SmartForm from './src/form';

SmartForm.install = Vue => {
    Vue.component(SmartForm.name, SmartForm);
}

export default SmartForm;
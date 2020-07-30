import App from './App.svelte';

const app = new App({
    target: document.body,
    props: window.componentProps
});

export default app;

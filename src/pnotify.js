
export default

function searcheError(opts) {
  opts=new PNotify.error({
  title: 'Error',
  text: 'Too many mutches found.Please enter a more specific query!',
  modules: new Map([
    ...PNotify.defaultModules,
    [PNotifyDesktop, {}]
  ])
});   
}
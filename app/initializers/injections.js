export function initialize(container, application) {
	application.inject('controller', 'currentChannel', 'bootstrap-payload:channel');
}

export default {
  name: 'injections',
  initialize: initialize
};
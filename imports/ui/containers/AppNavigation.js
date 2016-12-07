import { compose } from 'react-komposer';
// import { Meteor } from 'meteor/meteor';
import AppNavigation from '../components/AppNavigation.js';

const composer = (props, onData) => onData(null, { hasUser: false });

export default compose(composer, {}, {}, { pure: false })(AppNavigation);

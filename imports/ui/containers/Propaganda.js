import { compose } from 'react-komposer';
// import { Meteor } from 'meteor/meteor';
import Loading from '../components/Loading.js';

import Propaganda from '../components/Propaganda.js';


const composer = (props, onData) => {
  // 模拟数据，并设置延时，加载loading
  setTimeout(() => {
    /*
      Meteor.publish('propagandas.units', () => {
        return Propagandas.findOne({top: true, type: 'units'}});
      });
      const subcription = Meteor.subscribe('propagandas.units');
      const propaganda = Propagandas.findOne();
    */
    const propaganda = {
      image: 'poster.jpg',
      link: 'http://weibo.com',
      type: 'article',
      top: true,
      timestamp: '',
    };
    const data = { propaganda };
    onData(null, data);
  }, 1000);
};
const options = {
  loadingHandler: Loading,
};

export default compose(composer, options)(Propaganda);

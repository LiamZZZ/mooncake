import { compose } from 'react-komposer';
// import { Meteor } from 'meteor/meteor';
import Loading from '../components/Loading.js';

import Index from '../pages/Index.js';


const composer = (props, onData) => {
  // 模拟数据，并设置延时，加载loading
  setTimeout(() => {
    /*
      Meteor.publish('propagandas.index', () => {
        return Propagandas.findOne({top: true, type: 'index'});
      });
      const subcription = Meteor.subscribe('propagandas.index')
      const propaganda = Propaganda.findOne();
    */
    const propaganda = {
      image: '',
      link: '',
      type: 'index',
      top: true,
      timestamp: '',
    };
    /*
      Meteor.publish('subjects.index', () => {
        return Subjects.findOne({top: true, release: true});
      });
      Meteor.publish('subjects.latest', () => {
        return Subjects.findOne({release: true}).sort({timestamp: -1});
      });

      const subcription = Meteor.subscribe('subjects.index')
      const subject = Subjects.findOne();
    */
    const subject = {
      titleCN: '',
      titleEN: '',
      top: true,
      release: true,
      timestamp: '',
      units: [
        {
          titleCN: '',
          titleEN: '',
          desc: '',
          image: '',
          link: '',
        },
        {
          titleCN: '',
          titleEN: '',
          desc: '',
          image: '',
          link: '',
        },
        {
          titleCN: '',
          titleEN: '',
          desc: '',
          image: '',
          link: '',
        },
      ],
    };
    /*
      Meteor.publish('articles.index', () => {
        return Articles.findOne({top: true});
      });
      Meteor.publish('articles.latest', () => {
        return Articles.findOne().sort({timestamp: -1});
      });

      const subcription = Meteor.subscribe('articles.index')
      const article = Articles.findOne();
    */
    const article = {
      title: '',
      author: '',
      time: '',
      cate: '',
      link: '',
      top: true,
      image: '',
    };

    const data = { propaganda, subject, article };
    onData(null, data);
  }, 1000);
};
const options = {
  loadingHandler: Loading,
};

export default compose(composer, options)(Index);

import { compose } from 'react-komposer';
// import { Meteor } from 'meteor/meteor';
import Loading from '../components/Loading.js';

import UnitsList from '../components/UnitsList.js';


const composer = (props, onData) => {
  // 模拟数据，并设置延时，加载loading
  setTimeout(() => {
    /*
      Meteor.publish('subjects.all', () => {
        return Subjects.find({release: true}).sort({order: 1});
      });

      const subcription = Meteor.subscribe('subjects.all')
      const subjects = Subjects.find().fetch();
    */
    const subjects = [
      {
        header: '第一个月：',
        titleCN: '我眼中的世界',
        titleEN: 'Worlds in my eyes',
        release: true,
        order: 1,
        timestamp: '',
        units: [
          {
            titleCN: '颜色',
            titleEN: 'Colors',
            desc: '',
            image: 'Places-playground.svg',
            link: 'colors',
          },
          {
            titleCN: '形状',
            titleEN: 'Shapes',
            desc: '',
            image: 'Places-playground.svg',
            link: 'shapes',
          },
          {
            titleCN: '自然',
            titleEN: 'Nature',
            desc: '',
            image: 'Places-playground.svg',
            link: 'nature',
          },
        ],
      },
      {
        header: '第二个月：',
        titleCN: '我爱爸爸妈妈',
        titleEN: 'I love mom and dad',
        release: true,
        order: 2,
        timestamp: '',
        units: [
          {
            titleCN: '我的家人',
            titleEN: 'Family members',
            desc: '',
            image: 'Places-playground.svg',
            link: 'family-members',
          },
          {
            titleCN: '好多人啊',
            titleEN: 'People',
            desc: '',
            image: 'Places-playground.svg',
            link: 'people',
          },
          {
            titleCN: '有意思的人们',
            titleEN: 'Interesting people',
            desc: '',
            image: 'Places-playground.svg',
            link: 'interesting-people',
          },
        ],
      },
    ];
    const data = { subjects };
    onData(null, data);
  }, 1000);
};
const options = {
  loadingHandler: Loading,
};

export default compose(composer, options)(UnitsList);

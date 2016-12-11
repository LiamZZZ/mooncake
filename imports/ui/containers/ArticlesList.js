import { compose } from 'react-komposer';
// import { Meteor } from 'meteor/meteor';
import Loading from '../components/Loading.js';

import ArticlesList from '../components/ArticlesList.js';


const composer = ({ cate }, onData) => {
  // 模拟数据，并设置延时，加载loading
  console.log(cate);
  setTimeout(() => {
    /*
      Meteor.publish('articles.all', () => {
        return Articles.find();
      });

      const subcription = Meteor.subscribe('articles.all')
      const articles = Articles.find(); 全部文章
      const articles = Articles.find({cate: ''}); 某类文章
      const articles = Articles.find().sort({time: -1}); 时间排序
    */
    const articles = [
      {
        title: '幼儿英语学习有哪些误区',
        author: '大约九十',
        time: '2016-06-15',
        cate: '杂谈',
        link: 'http://baidu.com',
        image: '',
      },
      {
        title: '小怡老师来谈心：3~4孩子的英语学习',
        author: 'Elsa老师',
        time: '2016-09-06',
        cate: '建议',
        link: 'http://so.com',
        image: '',
      },
    ];
    if (cate === '2') {
      console.log(cate);
      articles.push(
        {
          title: '幼儿英语学习有哪些误区111',
          author: '大约九十',
          time: '2016-06-16',
          cate: '杂谈',
          link: 'http://baidu.com',
          image: '',
        },
      );
    } else {
      console.log('111');
    }
    const data = { articles };
    onData(null, data);
  }, 1000);
};
const options = {
  loadingHandler: Loading,
};

export default compose(composer, options)(ArticlesList);

import { compose } from 'react-komposer';
// import { Meteor } from 'meteor/meteor';
import Loading from '../components/Loading.js';

import UnitsList from '../components/UnitsList.js';


const composer = (props, onData) => {
  // 模拟数据，并设置延时，加载loading
  setTimeout(() => {
    const units = [
      {
        _id: 'unit1',
        themeCN: '颜色',
        themeEN: 'Colors',
        label: 'colors',
        content: '一起来学习生活中常见的颜色。',
      },
      {
        _id: 'unit2',
        themeCN: '形状',
        themeEN: 'Shapes',
        label: 'shapes',
        content: '学习用形状来描述世界。',
      },
    ];
    const data = { units };
    onData(null, data);
  }, 1000);
};
const options = {
  loadingHandler: Loading,
};

export default compose(composer, options)(UnitsList);

import { compose } from 'react-komposer';
// import { Meteor } from 'meteor/meteor';
import Loading from '../components/Loading.js';

import UnitStudy from '../pages/UnitStudy.js';


const composer = (props, onData) => {
  // 模拟数据，并设置延时，加载loading
  setTimeout(() => {
    /*
      Meteor.publish('units.study', (linkedBy) => {
        check(linkedBy, string);
        return Units.findOne({linkedBy}});
      });
      const subcription = Meteor.subscribe('units.study');
      const unit = Units.findOne();
    */
    const unit = {
      titleCN: '颜色',
      titleEN: 'Colors',
      linkedBy: 'colors',
      release: true,
      words: [
        {
          word: 'red',
          meaning: 'n. 红色',
          image: 'Places-hospital.svg',
          thumb: 'hospital-thumb.png',
          voice: 'redd.WAV',
        },
        {
          word: 'blue',
          meaning: 'n. 蓝色',
          image: 'Places-park.svg',
          thumb: 'hospital-thumb.png',
          voice: 'blue.WAV',
        },
        {
          _id: 'word3',
          word: 'yellow',
          meaning: 'n. 黄色',
          label: 'yellow',
          image: 'Places-school.svg',
          thumb: 'hospital-thumb.png',
          voice: 'yellow.WAV',
        },
      ],
      sentences: [
        {
          sentence: 'What color is it?',
          meaning: '这是什么颜色？',
          voice: 'red.WAV',
        },
        {
          sentence: 'It is ...',
          meaning: '这是 ...',
          voice: 'blue.WAV',
        },
      ],
      signlangs: [
        {
          lang: 'apple',
          demo: 'quiz4.mp4',
          thumb: 'hospital-thumb.png',
        },
        {
          lang: 'banana',
          demo: 'lesson3.mp4',
          thumb: 'hospital-thumb.png',
        },
      ],
    };
    const data = { unit };
    onData(null, data);
  }, 1000);
};
const options = {
  loadingHandler: Loading,
};

export default compose(composer, options)(UnitStudy);

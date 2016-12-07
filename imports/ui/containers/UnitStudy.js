import { compose } from 'react-komposer';
// import { Meteor } from 'meteor/meteor';
import Loading from '../components/Loading.js';

import UnitStudy from '../pages/UnitStudy.js';


const composer = (props, onData) => {
  // 模拟数据，并设置延时，加载loading
  setTimeout(() => {
    const unit = {
      themeCN: '颜色',
      themeEN: 'Colors',
      words: [
        {
          _id: 'word1',
          word: 'red',
          meaning: 'n. 红色',
          label: 'red',
          image: 'Places-hospital.svg',
          thumb: 'hospital-thumb.png',
          audio: 'redd.WAV',
        },
        {
          _id: 'word2',
          word: 'blue',
          meaning: 'n. 蓝色',
          label: 'blue',
          image: 'Places-park.svg',
          thumb: 'hospital-thumb.png',
          audio: 'blue.WAV',
        },
        {
          _id: 'word3',
          word: 'yellow',
          meaning: 'n. 黄色',
          label: 'yellow',
          image: 'Places-school.svg',
          thumb: 'hospital-thumb.png',
          audio: 'yellow.WAV',
        },
      ],
      sentences: [
        {
          _id: 'sentence1',
          sentence: 'What color is it?',
          meaning: '这是什么颜色？',
          label: 'what-color-is-it',
          audio: 'red.WAV',
        },
        {
          _id: 'sentence2',
          sentence: 'It is ...',
          meaning: '这是 ...',
          label: 'it-is',
          audio: 'redd.WAV',
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

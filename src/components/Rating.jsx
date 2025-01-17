import React, { useState } from 'react';
import {Flex, Rate} from 'antd';
const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
const App = ({searchRate, setsearchRate, isRating}) => {
//   const [value, setValue] = useState(3);
  return (
    <Flex gap="middle" vertical>
        {isRating?
      <Rate tooltips={desc} onChange={setsearchRate} value={searchRate} /> :
      <Rate value={searchRate} disabled/>}
      {/* {value ? <span>{desc[value - 1]}</span> : null} */}
    </Flex>
  );
};
export default App;
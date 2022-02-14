/* eslint-disable react/jsx-no-bind */
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import * as htmlToImage from 'html-to-image';
import {
  PieChart, Pie, Cell, Tooltip,
} from 'recharts';
import { setPDFFileSrc } from 'redux/store';
import * as S from './PieChart.styled';
import ChartDetails from './components/ChartDetails';
import { COLORS, pieData, renderCustomizedLabel } from './utils/utils';

const PieChartApp = function PieChartApp() {
  const dispatch = useDispatch();
  const [start, setStart] = useState<boolean>(false);

  useEffect(() => {
    const node = document.getElementById('chart');
    if (node && start) {
      htmlToImage.toPng(node)
        .then((dataUrl) => {
          dispatch(setPDFFileSrc(dataUrl));
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          console.log('oops, something went wrong!', error);
        });
    }
  }, [start]);

  return (
    <S.Container width={400} id="chart">
      <PieChart width={400} height={400}>
        <Pie
          data={pieData}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={120}
          fill="#25011a"
          dataKey="value"
          isAnimationActive={false}
        >
          {pieData.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
              onClick={() => {
                setStart(true);
                // console.log(entry.name);
              }}
            />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
      <ChartDetails />
    </S.Container>
  );
};

export default PieChartApp;

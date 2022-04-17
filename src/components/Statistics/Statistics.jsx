import PropTypes from 'prop-types';
import s from './Statistics.module.css';

function getRandomHexColor() {
  console.log(
    'getRandomHexColor() :>> ',
    `#${Math.floor(Math.random() * 16777215).toString(16)}`
  );
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const Statistics = props => {
  const { title, stats } = props;
  return (
    <section className={s.statistics}>
      <h2 className={s.title}>{title && title}</h2>

      <ul className={s.statList}>
        {stats
          .reduce((acc, stat) => {
            if (!acc.filter(obj => stat.label === obj.label)[0]) {
              acc.push(stat);
            }
            return acc;
          }, [])
          .map(({ id, label, percentage }) => {
            return (
              <li
                className={s.item}
                key={id}
                style={{ backgroundColor: getRandomHexColor() }}
              >
                <span className={s.label}>{label}</span>
                <span className={s.percentage}>{percentage}%</span>
              </li>
            );
          })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  stats: PropTypes.array,
};

export default Statistics;

import PropTypes from 'prop-types';

import css from './Statistics.module.css';

const randomColor = () => {
  const color =
    'rgba(' +
    Math.round(Math.random() * 255) +
    ',' +
    Math.round(Math.random() * 255) +
    ',' +
    Math.round(Math.random() * 255) +
    ',' +
    0.5 +
    ')';

  return color;
};

export default function Statistics({ tittle, stats }) {
  return (
    <section className={css.statistics}>
      {tittle && <h2 className={css.title}>{tittle}</h2>}

      <ul className={css.stats__list}>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li
              className={css.stats}
              id={id}
              style={{ backgroundColor: randomColor() }}
            >
              <span className={css.label}>{label}</span>
              <span className={css.percentage}>{percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

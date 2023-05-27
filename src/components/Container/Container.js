import PropTypes from 'prop-types';
import css from 'components/Container/Container.module.css';

function Container({ children }) {
  return <div className={css.container}>{children}</div>;
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
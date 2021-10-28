import PropTypes from "prop-types"
import Link from "next/link";

const Button = ({ className, href, children, target }) => (
  href ? 
  <Link href={href} target={target}>
    <a className={className}>{children}</a>
  </Link>
  :
  <button  className={className} href={href} target={target}>
    {children}
  </button>
);

Button.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.string.isRequired,
  target: PropTypes.string
};

Button.defaultProps = {
  className: '',
  href: '',
  target: '_self'
};

export default Button;
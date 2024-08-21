import { forwardRef } from 'react';
import classNames from 'classnames';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const HeaderMain = forwardRef((props, ref) => {

  const compClasses = classNames({
    [`${props.className}`]: props.className,
  });



  return (
    <div className={compClasses} {...props} ref={ref}>
      <Container>
        <div className="nk-header-wrap">
          {props.children}
          <style>
            {`
            @media only screen and (min-width: 990px) {
              .responsive-dropdown {
                display: block;
              }
            }

            @media only screen and (max-width: 989px) {
              .responsive-dropdown {
                display: none;
              }
            }
          
          `}
          </style>
          <div className="responsive-dropdown">
            {window.innerWidth > 1200 && (
              <>
          <Link to="https://ibprocess.intellibooks.io/signin" target="_blank">
            <Button variant="primary" size="sm">
              Login
            </Button>
          </Link>&nbsp;&nbsp;&nbsp;
          <Link to="https://ibprocess.intellibooks.io/signup" target="_blank">
            <Button variant="indigo" size="sm">
              SignUp
            </Button>
          </Link>
        </>
            )}
          </div>

        </div>

      </Container>

    </div>

  )
})
export default HeaderMain;


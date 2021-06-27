import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  relativeWrapper: {
    position: 'relative',
    height: '56px',
  },
  fixedWrapper: {
    position: 'fixed',
    zIndex: 4,
    width: '100%',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  root: {
    display: 'flex',
    height: '56px',
    backgroundColor: theme.palette.common.white,
    boxShadow: `inset 0 1px 0 -0.5px ${theme.palette.grey[100]}, inset 0 -1px 0 -0.5px ${theme.palette.grey[100]}`,
    padding: '0px 24px',
  },
  title: {
    margin: 'auto 0',
    color: theme.palette.primary.main,
    fontSize: '18px',
    alignSelf: 'flex-start',
  },
  navButtonsWrapper: {
    margin: '0 0 0 auto',
    display: 'flex',
  },
  navButtonWrapper: {
    padding: '0px 0px 0px 24px',
  },
  navButton: {
    color: theme.palette.grey[400],
    fontSize: '15px',
    textTransform: 'capitalize',
    padding: 0,
    minWidth: 'auto',
    '&:hover': {
      background: 'transparent',
    },
    height: '100%',
    borderBottom: '2px solid transparent',
    fontWeight: 400,
  },
  navButtonLabel: {
    borderBottom: `2px solid ${theme.palette.secondary.main}`,
  },
  navButtonActive: {
    color: theme.palette.secondary.main,
    borderBottom: `2px solid ${theme.palette.secondary.main}`,
  },
  actionItems: {
    padding: '8px 16px',
    display: 'flex',
  },
  actionItem: {
    margin: 'auto 0 auto 8px',
    '&:first-child': {
      marginLeft: 'auto 0',
    },
  },
});

/**
 * PageSubHeader component
 * @param {Object} props - component props
 * @returns {React.Component} - the PageSubHeader component
 */
const PageSubHeader = (props) => {
  const {
    title,
    navButtons,
    classes,
    actionItems,
  } = props;

  return (
    <div className={classes.relativeWrapper}>
      <div className={classes.fixedWrapper}>
        <div className={classes.root}>
          <span className={classes.title}>
            {title}
          </span>
          <div className={classes.navButtonsWrapper}>
            {_.map(navButtons, button => (
              <div key={button.name} className={classes.navButtonWrapper}>
                <Button
                  component={NavLink}
                  to={button.uri}
                  activeClassName={classes.navButtonActive}
                  classes={{ root: classes.navButton }}
                >
                  {button.name}
                </Button>
              </div>
            ))}
            {!_.isEmpty(actionItems) && (
              <div className={classes.actionItems}>
                {_.map(actionItems, (action, index) => (
                  <div
                    className={classes.actionItem}
                    key={`page-sub-header-action-item-${index}`}
                  >
                    {action}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

PageSubHeader.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  title: PropTypes.node.isRequired,
  navButtons: PropTypes.arrayOf(PropTypes.object),
  actionItems: PropTypes.arrayOf(PropTypes.node),
};

PageSubHeader.defaultProps = {
  navButtons: [],
  actionItems: [],
};

export default withStyles(styles)(PageSubHeader);
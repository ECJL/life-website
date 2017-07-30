import { connect } from 'react-redux';
import { changeSection } from '../action';
import NavItem from '../../components/header/nav-item';

const mapStateToNavItemProps = (state, ownProps) => {
  return {
  	itemName: ownProps.itemName,
    active: ownProps.itemName === state.currSectionName
  }
}

const mapDispatchToNavItemProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(changeSection(ownProps.itemName))
    }
  }
}

const NavItemContainer = connect(
  mapStateToNavItemProps,
  mapDispatchToNavItemProps
)(NavItem);

export default NavItemContainer;

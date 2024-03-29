import Main from './Main'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as Actions from './Redux/Actions'
import {withRouter} from 'react-router'

function mapStateToProps(state) {
    return {
        posts: state,
        }
       }

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch)
}

const App = withRouter(connect(mapStateToProps, mapDispatchToProps)(Main))

export default App;


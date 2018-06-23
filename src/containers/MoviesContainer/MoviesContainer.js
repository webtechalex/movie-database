import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Movies from '../../components/Movies/Movies'
import { saveMovie } from '../../redux/actions'

const mapStateToProps = (state) => ({
  movies: state
})

const mapDispatchToProps = (dispatch) => bindActionCreators({saveMovie}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Movies)
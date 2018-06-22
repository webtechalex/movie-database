import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import MovieFilterForm from '../../components/MovieFilterForm/MovieFilterForm'
import { getMovies } from '../../redux/actions'

const mapDispatchToProps = (dispatch) => bindActionCreators({getMovies}, dispatch)

export default connect(undefined, mapDispatchToProps)(MovieFilterForm)
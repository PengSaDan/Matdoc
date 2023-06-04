import Header from 'components/common/Header'
import React from 'react'
import { connect } from 'react-redux'

export const MyPage = (props) => {
  return (
    <div className="bg-opacity-10 bg-[#00C192] w-screen h-screen overflow-hidden">
      <Header />
      <div>마이페이지</div>
    </div>
  )
}

MyPage.propTypes = {
//   second: PropTypes.third
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(MyPage)
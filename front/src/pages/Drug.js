import Header from 'components/common/Header'
import MainSearchBar from 'components/common/MainSearchBar'
import DrugFilter from 'components/drug/DrugFilter'
import React from 'react'
import { connect } from 'react-redux'

export const Drug = (props) => {
  return (
    <div className="bg-opacity-10 bg-[#00C192] w-screen h-screen overflow-hidden mx-auto">
      <Header />
      <div>
        <MainSearchBar color={"bg-[#D7F1FF]"} />
        <DrugFilter />
        <div className='absolute left-[16px] top-[760px] text-center leading-[80px] w-[380px] h-[80px] bg-[#00C192] rounded-[10px] text-3xl text-white font-bold placeholder-[#A1AFA9]'>검색</div>
      </div>
    </div>
  )
}

Drug.propTypes = {
//   second: PropTypes.third
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Drug)
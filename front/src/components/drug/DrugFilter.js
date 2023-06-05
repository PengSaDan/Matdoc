import React from 'react'
import { connect } from 'react-redux'
import ColorOptions from './ColorOptions'

export const DrugFilter = (props) => {
  return (
    <div className='absolute bg-[#D7F1FF] h-[560px] w-[390px] top-[180px] left-[12px] rounded-[10px] p-5 mx-auto'>
        <div className='text-[#303030] text-2xl font-semibold'>색상</div>
        <ColorOptions />
        <div className='grid grid-cols-2 mt-8 justify-items-center'>
          <div className='w-[140px] h-[100px] bg-[#D1F1C9] shadow-xl rounded-2xl leading-[100px] text-center text-3xl text-[#303030] font-semibold'>
            모양
          </div>
          <div className='w-[140px] h-[100px] bg-[#D1F1C9] shadow-xl rounded-2xl leading-[100px] text-center text-3xl text-[#303030] font-semibold'>
            분할선
          </div>
        </div>
        <div className='text-[#303030] text-2xl font-semibold mt-8'>식별문자</div>
        <input className='w-[350px] h-[60px] mt-3 p-5 rounded-xl text-xl' placeholder='약에 적힌 문자를 입력하세요'></input>
    </div>
  )
}

DrugFilter.propTypes = {
//   second: PropTypes.third
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(DrugFilter)
import React from 'react'
import Loder from './loder'
import Productlist from './productlist'

function Hoc(Hh) {
    return function ({...props}) {
        if (props.hiren) {
          return <Loder/>
        }
        return <Hh {...props} />
  }
}

var H = Hoc(Productlist)
export default Hoc

export default H
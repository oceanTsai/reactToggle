import {hasVal, toStr}  from 'general-util'
import {singleToggle, mutilToggle, radio, singleToggleByTile, mutilToggleByTile, radioByTile, selectAll, unSelectAll, filterChecked} from 'behavior-proxy-oc'
import {prefixCreate} from 'enum-factory'
import React, { PropTypes, Component } from 'react'
export const TYPE = prefixCreate([
  'SINGLE_TITLE_TOGGLE', 
  'MUTIL_TITLE_TOGGLE', 
  'RADIO_TITLE',
  'SINGLE_TOGGLE', 
  'MUTIL_TOGGLE',
  'RADIO'
  ], 'ToggleButton')

/**
 * @author ocean
 * @name
 * @class
 * @description    
 * 
 */
export default class ToggleButtons extends Component{
  constructor(props, context) {
    super(props, context)
    this.state={
    }
    this.defaultClass={
      button : 'ui label mini',
      active : 'ui label mini blue'
    }
    this.style={
      outline : 'none'
    }
    this.onClickHandl = ::this.onClick
  }

  componentDidMount() {
  }

  componentWillUnmount(){
  }

  componentWillReceiveProps(nextProps){
  }

  componentDidUpdate(nextProps, nextState){
  }

  onClick(e){
    const{type, onClick, provider, valueKey, activeKey, activeVal, unActiveVal}=this.props
    let val = e.currentTarget.value
    type == TYPE.SINGLE_TITLE_TOGGLE && singleToggleByTile(provider, valueKey, val, activeKey, activeVal, unActiveVal) //, , , selectAll, unSelectAll
    type == TYPE.MUTIL_TITLE_TOGGLE && mutilToggleByTile(provider, valueKey, val, activeKey, activeVal, unActiveVal)
    type == TYPE.RADIO_TITLE && radioByTile(provider, valueKey, val, activeKey, activeVal, unActiveVal)
    type == TYPE.SINGLE_TOGGLE && singleToggle(provider, valueKey, val, activeKey, activeVal, unActiveVal)
    type == TYPE.MUTIL_TOGGLE && mutilToggle(provider, valueKey, val, activeKey, activeVal, unActiveVal)
    type == TYPE.RADIO && radio(provider, valueKey, val, activeKey, activeVal, unActiveVal)
    
    this.forceUpdate(()=>{
      hasVal(onClick) && onClick(filterChecked(provider, activeKey, activeVal), e)  
    })
  }

  itemRender(item, index){
    const {labelKey, valueKey, activeKey, activeVal, type, buttonClass, activeClass} = this.props
    let className = item[activeKey] == activeVal 
      ? hasVal(activeClass) 
        ? activeClass : this.defaultClass.active
      : hasVal(buttonClass)
        ? buttonClass : this.defaultClass.button
    switch(type){
      case TYPE.SINGLE_TITLE_TOGGLE:
      case TYPE.MUTIL_TITLE_TOGGLE:
      case TYPE.RADIO_TITLE:
        return <button  key={toStr(index)+item.valueKey+'1'} 
                        className={className} 
                        value={item[valueKey]} 
                        style={this.style}
                        onClick={this.onClickHandl}
                        >
                        {item[labelKey]}
                        </button>
      case TYPE.SINGLE_TOGGLE:
      case TYPE.MUTIL_TOGGLE:
      case TYPE.RADIO:
        return <button  key={toStr(index)+item.valueKey+'2'} 
                        className={className} 
                        value={item.source[valueKey]} 
                        style={this.style}
                        onClick={this.onClickHandl}
                        >
                        {item.source[labelKey]}
                        </button>
    }
  }

  render(){
    const {provider, itemRender, className, style} = this.props
    return(
        <div className={className} style={style}>
          {
            hasVal(provider) && Array.isArray(provider) && provider.length > 0
            ? provider.map((item, index)=>{
              return hasVal(itemRender) ? itemRender(item, index) : this.itemRender(item, index)
            })
            : null
          }
        </div>
      )
  }
}

ToggleButtons.propTypes={
  type : PropTypes.string,
  provider : PropTypes.object,  // option list
  itemRender : PropTypes.func,
  labelKey : PropTypes.string,
  valueKey : PropTypes.object,
  activeKey : PropTypes.string,
  activeVal : PropTypes.object,
  unActiveVal : PropTypes.object,
  className : PropTypes.string,
  style : PropTypes.object,
  buttonClass : PropTypes.string, //
  activeClass : PropTypes.string ,      //active className
  onClick : PropTypes.func
}

ToggleButtons.TYPE = TYPE

if(!window.ToggleButtons){
  window.ToggleButtons = ToggleButtons
}
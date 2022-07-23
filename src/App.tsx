import ToolTip from 'components/tooltip'

const App = () => {
  return (
    <div className='main-container'>
      <div className='content-container'>
        <div className='tooltip-example-container'>ToolTip on Top</div>
        <ToolTip tooltipContent="I am tooltip on Top">
          Hover Me !!!
        </ToolTip>
      </div>
      <div className='content-container'>
        <div className='tooltip-example-container'>ToolTip on Bottom</div>
        <ToolTip tooltipContent="I am tooltip on Bottom" direction="bottom">
          Hover Me!!!
        </ToolTip>
      </div>
      <div className='content-container'>
        <div className='tooltip-example-container'>ToolTip on Left</div>
        <ToolTip tooltipContent="I am tooltip on Left" direction="left">
          Hover Me!!!
        </ToolTip>
      </div>
      <div className='content-container'>
        <div className='tooltip-example-container'>ToolTip on Right</div>
        <ToolTip tooltipContent="I am tooltip on Right" direction="right">
          Hover Me!!!
        </ToolTip>
      </div>
    </div>
  )
}

export default App

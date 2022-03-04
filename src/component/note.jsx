const Note = () => {
  return (
    <>
      <div>
        <section>

        </section>
        <section>
          <h3>This is just to note things that I encounter while making this site for fun</h3>
          <ul>
            <li>to get better understanding at Grid container > grid (for dividing main container) > another container (for manage grid inside) > grid</li>
            <li>spread operator can be use with both array [...arr] and object </li>
            <li>When using setState don't forget to use function toset otherwise it will just keep toggle</li>
            <li>React.Fragment (support key for mapping) have short syntax as <></> (empty) but it will not support key</li>
            <li>to pass something to chield components just type (propsName=value eg. title="test") you can also send it as an object</li>
          </ul>
        </section>
      </div>
    </>
  )
}

export default Note
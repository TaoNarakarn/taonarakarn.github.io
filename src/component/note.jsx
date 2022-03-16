const Note = () => {
  return (
    <>
      <div>
        <section>
          <h3>Leetcode notes</h3>
          <caption>I learn new stuff!</caption>
          <ul>
            <li>to get sum from series of integer you can use formular (n * (n+1)) /2</li>
            <li>using set.has is much faster than array.find array.findIndex array.indexOf (if array content is unique)</li>
            <li>to look for unique value in sets of pairs [1,1,2,2,3] use bitwise xor num ^= arr[i]</li>
          </ul>
        </section>
        <section>
          <h3>This is just to note things that I encounter while making this site for fun</h3>
          <ul>
            <li>Set is not different from Array when it with Objects (you need to checked in every Object for key:value to get result) since every Object are different</li>
            <li>When you use let newObj = Obj it will still point to the same object, so when you change anything in newObj, Obj will also change</li>
            <li>not sure if this chart.js or react-chartjs-2 but you can only set options once and it will copy to other chart as well</li>
            <li>to get better understanding at Grid container {">"} grid (for dividing main container) {">"} another container (for manage grid inside) {">"} grid</li>
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
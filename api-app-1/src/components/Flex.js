function Flex(props) {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      {props.children}
    </div>
  )
}
export default Flex

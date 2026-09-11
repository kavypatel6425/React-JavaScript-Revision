function withMessage(Component) {
  return function EnhancedComponent(props) {
    return (
      <>
        <p>This Component has been Enhanced</p>
        <Component {...props} />
      </>
    )
  }
}

export default withMessage
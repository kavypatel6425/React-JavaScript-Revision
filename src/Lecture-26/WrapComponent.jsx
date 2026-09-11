import Welcome from "./Welcome"
import withMessage from "./WithMessge"


function WrapComponent() {
  const NewWelcome = withMessage(Welcome)

  return <NewWelcome name="Hello World!" />
}

export default WrapComponent
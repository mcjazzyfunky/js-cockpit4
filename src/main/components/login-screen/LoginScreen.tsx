import { component, h } from 'js-elements'

/*====================================================================
 * LoginScreen
 *
 * Slots: header, footer, login-intro, login-fields
 *====================================================================*/

class LoginScreenProps {
  performLogin?: (data: Record<string, any>) => Promise<void>
}

export default component('jsc-login-screen', LoginScreenProps, (p) => {
  return () => {
    return (
      <div>
        <div>
          <slot name="login-intro">
            <div>Login</div>
            <div>Please enter your personal credentils to log in</div>
          </slot>
        </div>
        <div></div>
      </div>
    )
  }
})

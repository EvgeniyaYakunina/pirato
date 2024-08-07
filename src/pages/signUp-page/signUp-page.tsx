import { useState } from 'react'

import { SignUp } from '../../components/auth/sign-up/sign-up'
import { FormWrapper } from '../../components/common/form-wrapper/form-wrapper'
import { useNavigateSearch } from '../../components/hooks/useNavigateSearch'
import { useSignUpMutation } from '../../services/auth/auth.service'

export type SignUpData = Pick<SignUpBody, 'email' | 'password'>

export const SignUpPage = () => {
  const [signUp] = useSignUpMutation()
  const navigate = useNavigateSearch()

  const [error, setError] = useState('')

  const handleSignUp = async (data: SignUpData) => {
    try {
      const index = data.email.indexOf('@')
      let name = ''

      if (index !== -1) {
        name = data.email.slice(0, index)
      }
      const signUpBodyData: SignUpBody = {
        name,
        sendConfirmationEmail: true,
        ...data,
      }

      await signUp(signUpBodyData).unwrap()

      navigate('/checkEmail', { email: data.email })
    } catch (error: any) {
      if (error.status === 400) {
        setError('Email already exists')
      }
    }
  }

  return (
    <FormWrapper>
      <SignUp handleSignUp={handleSignUp} validationError={error} />
    </FormWrapper>
  )
}
type SignUpBody = {
  email: string
  name: string
  password: string
  sendConfirmationEmail: boolean
}

import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateUser } from '../../services/loginRequestCall'
import { Loader } from '../loader'
import { Bottom, FormBottom, Middle, Top } from './styles'

const UserSection = () => {
  const dispatch = useDispatch()
  const [inputs, setInputs] = useState({})
  const { name, email, createdAt, weight, height } = useSelector(
    (state: any) => state.user.user.user
  )
  const { token } = useSelector((state: any) => state.user.user)
  const { isFetching } = useSelector((state: any) => state.user)

  const handleChange = (e) => {
    setInputs((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value || e.target.getAttribute('placeholder')
      }
    })
  }

  const handleUpdate = (e) => {
    e.preventDefault()
    updateUser(dispatch, inputs, token)
  }

  const calcImc = () => {
    const newHeight = parseInt(height) / 100
    const imc = Math.round(parseInt(weight) / (newHeight * newHeight))
    return imc
  }

  const longEnUSFormatter = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  useEffect(() => {
    setTimeout(() => {}, 2000)
  }, [isFetching])

  return (
    <>
      <Top>
        <div>
          <h3>
            Hello <span>{name.charAt().toUpperCase() + name.slice(1)},</span>{' '}
            you are an active member since{' '}
            <span>{longEnUSFormatter.format(new Date(createdAt))}</span> keep
            the good job.
          </h3>
        </div>
      </Top>
      {!isFetching ? (
        <Middle>
          <div>
            <img src="assets/userIcon.png" alt="" />
          </div>
          <form action="">
            <div>
              <label>Name</label>
              <input
                type="string"
                placeholder={name}
                name="name"
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Weight</label>
              <input
                type="number"
                placeholder={weight + ' kg'}
                name="weight"
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Height</label>
              <input
                type="number"
                placeholder={height + ' cm'}
                name="height"
                onChange={handleChange}
              />
            </div>
            <FormBottom>
              <label className="bmi">{email}</label>
              <label className="bmi">
                Your BMI is <span>{calcImc()}</span>
              </label>
            </FormBottom>
          </form>
        </Middle>
      ) : (
        <Loader />
      )}
      <Bottom>
        <button type="submit" onClick={handleUpdate}>
          Update
        </button>
      </Bottom>
    </>
  )
}

export default UserSection

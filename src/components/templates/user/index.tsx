import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateUser } from '../../../services/loginRequestCall'
import { Loader } from '../../atoms/loader'
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

  const calcBmi = () => {
    const newHeight = parseInt(height) / 100
    const bmi = Math.round(parseInt(weight) / (newHeight * newHeight))
    return bmi
  }

  const longEnUSFormatter = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  useEffect(() => {}, [isFetching])

  return (
    <>
      <Top>
        <h3>
          Hello <span>{name.charAt().toUpperCase() + name.slice(1)},</span> you
          are an active member since{' '}
          <span>{longEnUSFormatter.format(new Date(createdAt))}</span> keep the
          good job.
        </h3>
      </Top>
      <Middle>
        {!isFetching ? (
          <>
            <img src="assets/userIcon.png" alt="" />

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
                {!weight || !height ? (
                  <label>Fill your weight and heigth to check your BMI</label>
                ) : (
                  <label className="bmi">
                    Your BMI is <span>{calcBmi()}</span>
                  </label>
                )}
                {calcBmi() <= 18.5 && <span>Underweight</span>}
                {calcBmi() <= 24.9 && calcBmi() > 18.5 && (
                  <span>Normal Weight</span>
                )}
                {calcBmi() <= 29.9 && calcBmi() > 24.9 && (
                  <span>Overweight</span>
                )}
                {calcBmi() >= 30 && <span>Obesity</span>}
              </FormBottom>
            </form>
          </>
        ) : (
          <Loader />
        )}
      </Middle>
      <Bottom>
        <button type="submit" onClick={handleUpdate}>
          Update
        </button>
      </Bottom>
    </>
  )
}

export default UserSection

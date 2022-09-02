import { Bottom, Container, MainContent, Middle, Top } from './styles'

const UserSection = () => {
  return (
    <Container>
      <MainContent>
        <Top>
          <h2>
            Hello again {name || 'erick'} i see you are an active member since{' '}
            {'21/03/2022'}, keep the good job.
          </h2>
        </Top>
        <Middle>
          <div>
            <img src="assets/userIcon.png" alt="" />
          </div>

          <form action="">
            <div>
              <label>Name</label>
              <input type="string" placeholder={name || 'erick'} name="name" />
            </div>
            <div>
              <label>Email</label>
              <input type="string" placeholder={name || 'email'} name="email" />
            </div>
            <div>
              <label>Weight</label>
              <input type="number" placeholder={name || '75kg'} name="Weight" />
            </div>
            <div>
              <label>Height</label>
              <input
                type="number"
                placeholder={name || '180cm'}
                name="Height"
              />
            </div>
            <div>
              <label>IMC</label>
              <span>24.8</span>
            </div>
          </form>
        </Middle>
        <Bottom>
          <button type="submit">Update</button>
        </Bottom>
      </MainContent>
    </Container>
  )
}

export default UserSection

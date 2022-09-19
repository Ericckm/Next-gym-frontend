import {
  Bottom,
  ExerciseGuide,
  GuideContainer,
  Mid,
  Top,
  UserGuide,
  WorkoutGuide
} from './styles'

export const Guide = () => {
  return (
    <GuideContainer>
      <Top>
        <h3>Usage tips</h3>
      </Top>
      <Mid>
        <ExerciseGuide>
          <h4>Exercise</h4>
          <hr />
          <p>- Visualize the exercises execpt the ones in the workout</p>
          <p>- Add exercise to the workout routine</p>
          <p>
            - Add a new exercise in the <span>'+'</span> button
          </p>
          <p>- Filter exercises by name and type</p>
          <h4>Flip button</h4>
          <p>- Filter and select an exercise to see your progression </p>
        </ExerciseGuide>
        <WorkoutGuide>
          <h4>Workout</h4>
          <hr />
          <p>- Visualize your workout routine</p>
          <p>- Link to check the correct execution of the exercise</p>
          <p>
            - Create a log to keep track of your progression in each exercise
          </p>
          <p>- Remove exercise from the workout routine</p>
        </WorkoutGuide>
        <UserGuide>
          <h4>User</h4>
          <hr />
          <p>- Visualize your profile information</p>
          <p>- Update information</p>
          <p>
            - By setting heigth ('cm') and weigth ('kg') you can check your body
            mass
          </p>
        </UserGuide>
      </Mid>
      <Bottom>
        <label>designed by Ericckm</label>
      </Bottom>
    </GuideContainer>
  )
}

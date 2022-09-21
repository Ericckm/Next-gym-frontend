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
          <h4>Exercises Page</h4>
          <hr />
          <p>- Visualize the exercises execpt the ones in the workout</p>
          <p>
            - <span>Add</span> exercise to the workout routine
          </p>
          <p>
            - Add a new exercise in the <span>' + '</span> button
          </p>
          <p>- Filter exercises by name and type</p>
          <h4>
            <span>Flip</span>
          </h4>
          <p>- Visualize your progression in each exercise</p>
        </ExerciseGuide>
        <WorkoutGuide>
          <h4>Workout Page</h4>
          <hr />
          <p>- Visualize your workout routine</p>
          <p>
            - <span>Video</span> to check the execution of the exercise
          </p>
          <p>
            - <span>Create</span> inside the exercise your records to keep track
            of your progression
          </p>
          <p>
            - <span>Remove</span> exercise from the workout routine
          </p>
        </WorkoutGuide>
        <UserGuide>
          <h4>User Page</h4>
          <hr />
          <p>- Visualize your profile information</p>
          <p>
            - By setting heigth ('cm') and weigth ('kg') you can check your body
            mass index
          </p>
          <p>
            - <span>Update</span> information
          </p>
        </UserGuide>
      </Mid>
      <Bottom>
        <label>designed by Ericckm</label>
      </Bottom>
    </GuideContainer>
  )
}

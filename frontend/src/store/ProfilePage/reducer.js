
import {

    PROFILE__REQUESTED__SUCCEEDED

} from './actionTypes';

/*
        name="Maryam"
        username="mary"
        userImg="img"
        age="20"
        joined="2019/06/01"
        LittleAboutMe="I am studying in SNU"
        yesornolist="yesorno list"
        debatelist="debatelist"
*/



export default function profile(state = {

    username: undefined,
    userImg: undefined,

    aboutMe: undefined

    //debatelist? yes or no list?


}, action) {



    switch (action.type) {



        case PROFILE__REQUESTED__SUCCEEDED: {

            const { id, name, username, email, } = action.payload;

            return Object.assign({}, state, {

                username,

                aboutMe

                //debatelist? yes or no list?


            });

        }



        default:

            return state;

    }



}

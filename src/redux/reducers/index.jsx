
import { combineReducers } from 'redux';
import sceneReducer from './sceneReducer';
import musicReducer from './musicReducer';
import audioReducer  from './audioReducer';
import calendarReducer from './calendarReducer';
import  todolistReducer  from './todolistReducer';
import  pomodoroReducer  from './pomodoroReducer';
import soundReducer from './soundReducer';
import fullscreenReducer from './fullscreenReducer';
import videoUrlReducer from './videourlReducer';
 const rootReducer = combineReducers({
    scene: sceneReducer,
    music: musicReducer,
    audio: audioReducer,
    event: calendarReducer,
    todolist: todolistReducer,
    pomodoro: pomodoroReducer,
    sound: soundReducer,
    fullscreen: fullscreenReducer,
    videourl: videoUrlReducer
});

export {rootReducer};

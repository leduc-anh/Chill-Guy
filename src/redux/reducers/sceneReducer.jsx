import { ADD_SCENE, DELETE_SCENE, SET_SCENE } from "../constantsType/actionType"
const SceneListData = [
    {
        name: "Scene 1",
        description: "Scene 1",
        image: "/background/scene1.gif",
    },
    {
        name: "Scene 2",
        description: "Scene 2",
        image: "/background/scene2.gif",
    },
    {
        name: "Scene 3",
        description: "Scene 3",
        image: "/background/scene3.gif",
    },
    {
        name: "Scene 4",
        description: "Scene 4",
        image: "/background/scene4.gif",
    },
    {
        name: "Scene 5",
        description: "Scene 5",
        image: "/background/scene5.gif",
    },
    {
        name: "Scene 6",
        description: "Scene 6",
        image: "/background/scene6.gif",
    },
    {
        name: "Scene 7",
        description: "Scene 7",
        image: "/background/scene7.gif",
    },
    {
        name: "Scene 8",
        description: "Scene 8",
        image: "/background/scene8.gif",
    },
    {
        name: "Scene 9",
        description: "Scene 9",
        image: "/background/scene9.gif",
    },
    {
        name: "Scene 10",
        description: "Scene 10",
        image: "/background/scene10.gif",
    },
    {
        name: "Scene 11",
        description: "Scene 11",
        image: "/background/scene11.gif",
    },
    {
        name: "Scene 12",
        description: "Scene 12",
        image: "/background/scene12.gif",
    },
    {
        name: "Scene 13",
        description: "Scene 13",
        image: "/background/scene13.gif",
    },
    {
        name: "Scene 14",
        description: "Scene 14",
        image: "/background/scene14.gif",
    },
    {
        name: "Scene 15",
        description: "Scene 15",
        image: "/background/scene15.gif",
    },
    {
        name: "Scene 16",
        description: "Scene 16",
        image: "/background/scene16.gif",
    },
    {
        name: "Scene 17",
        description: "Scene 17",
        image: "/background/scene17.gif",
    },
    {
        name: "Scene 18",
        description: "Scene 18",
        image: "/background/scene18.gif",
    },
    {
        name: "Scene 19",
        description: "Scene 19",
        image: "/background/scene19.gif",
    },
    {
        name: "Scene 20",
        description: "Scene 20",
        image: "/background/scene20.gif",
    },
];
const INITIAL_STATE = {
    SceneListData: SceneListData,
    selectedScene: SceneListData[0]
};

const sceneReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_SCENE:
            const updatedState = {
                ...state,
                selectedScene: action.payload,
            };
            return updatedState;
        case ADD_SCENE: {

            const currentMaxIndex = state.SceneListData.reduce((max, scene) => {
                const match = scene.name.match(/Scene (\d+)/);
                return match ? Math.max(max, parseInt(match[1], 10)) : max;
            }, 0);

            const newScene = {
                name: `Scene ${currentMaxIndex + 1}`,
                description: `Scene ${currentMaxIndex + 1}`,
                image: action.payload.image,
                isCustom: true,
            };

            return {
                ...state,
                SceneListData: [...state.SceneListData, newScene],
            };
        }
        case DELETE_SCENE:
            const indexToDelete = state.SceneListData.findIndex(item => item.name === action.payload);
            const updatedList = state.SceneListData.filter((item) => item.name !== action.payload);
            let newSelectedScene = state.selectedScene;
            if (state.selectedScene.name === action.payload) {
                if (indexToDelete > 0) {
                    newSelectedScene = state.SceneListData[indexToDelete - 1];
                }
            }
            return {
                ...state,
                SceneListData: updatedList,
                selectedScene: newSelectedScene,
            };
        default:
            return state;
    }
};
export default sceneReducer;


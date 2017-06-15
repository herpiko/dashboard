import { combineReducers } from "redux"
import { reducer as formReducer } from "redux-form"

import catalogsReducer from "./catalogsReducer"
import stacksReducer from "./stacksReducer"
import servicesReducer from "./servicesReducer"
import containersReducer from "./containersReducer"
import volumesReducer from "./volumesReducer"
import overviewReducer from "./overviewReducer"
import userReducer from "./usersReducer"
import appReducer from "./appReducer"

export default combineReducers({
	form: formReducer,
	appState: appReducer,
	overviewState: overviewReducer,
	catalogsState: catalogsReducer,
	stacksState: stacksReducer,
	servicesState: servicesReducer,
	containerState: containersReducer,
	volumeState: volumesReducer,
	userState: userReducer
})

import { UiActionType } from 'store/action-types/ui';
import { Action } from 'store/actions/ui';
import { UiState } from 'store/interfaces/ui';

const DEFAULT_STATE = {
    darkMode: window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches,
    mobileNavExpanded: false,
    notifications: []
};

export default function uiReducer(state: UiState = DEFAULT_STATE, action: Action) {
    if(action.type === UiActionType.TOGGLE_MOBILE_NAV) {
        return { ...state, mobileNavExpanded: !state.mobileNavExpanded }
    }

    if(action.type === UiActionType.ADD_NOTIFICATION) {
        return { ...state, notifications: [...state.notifications, action.payload] }
    }

    if(action.type === UiActionType.REMOVE_NOTIFICATION) {
        return { ...state, notifications: state.notifications.filter((notification) => notification.id !== action.payload) }
    }

    if(action.type === UiActionType.SET_DARK_MODE) {
        return { ...state, darkMode: action.payload }
    }

    return state;
}
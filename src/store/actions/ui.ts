import { UiActionType } from 'store/action-types/ui';
import { Notification } from 'store/interfaces/ui';

interface ToggleMobileNavAction {
    type: UiActionType.TOGGLE_MOBILE_NAV
}

interface AddNotificationAction {
    type: UiActionType.ADD_NOTIFICATION,
    payload: Notification
}

interface RemoveNotificationAction {
    type: UiActionType.REMOVE_NOTIFICATION,
    payload: string
}

interface DarkModeAction {
    type: UiActionType.SET_DARK_MODE,
    payload: boolean
}

export type Action =  ToggleMobileNavAction | AddNotificationAction | RemoveNotificationAction | DarkModeAction;
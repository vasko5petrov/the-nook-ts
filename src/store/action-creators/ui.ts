import { Dispatch } from 'redux';
import { UiActionType } from 'store/action-types/ui';
import { Action } from 'store/actions/ui';
import { Notification } from 'store/interfaces/ui';
import { v4 } from 'uuid';

export const toggleMobileNav = () => ({
    type: UiActionType.TOGGLE_MOBILE_NAV
});

export const addNotification = ({type, message, expiration}: Notification) => (dispatch: Dispatch<Action>) => dispatch({
    type: UiActionType.ADD_NOTIFICATION,
    payload: {
        id: v4(),
        type,
        message,
        expiration
    }
});

export const removeNotification = (id: string) => (dispatch: Dispatch<Action>) => dispatch({
    type: UiActionType.REMOVE_NOTIFICATION,
    payload: id
});

export const setDarkMode = (isDarkMode: boolean) => (dispatch: Dispatch<Action>) => dispatch({
    type: UiActionType.SET_DARK_MODE,
    payload: isDarkMode
})
export interface Notification {
    id?: string,
    type: string,
    message: string,
    expiration: number
};

export interface UiState {
    darkMode: Boolean,
    mobileNavExpanded: Boolean,
    notifications: Array<Notification>
};
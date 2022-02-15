export interface AuthState {
    checking: boolean;
    token?: string | null;
    name?: string | null;
    email?: string | null;
}
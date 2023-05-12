export type HandleAction<S, A = any> = (state: S, action: A) => void;

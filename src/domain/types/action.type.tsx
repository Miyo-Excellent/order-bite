export interface Action<Type = string, Payload = never> {
  type: Type;
  payload: Payload;
}

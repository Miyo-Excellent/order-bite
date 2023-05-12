export interface NotFoundViewProps {}

export const NotFoundView = ({}: NotFoundViewProps) => (
  <div id="error-page">
    <h1>Oops!</h1>
    <p>Sorry, an unexpected error has occurred.</p>
    <pre>{JSON.stringify({ error: true, message: 'Page 404' })}</pre>
  </div>
);

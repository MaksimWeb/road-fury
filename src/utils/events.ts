export function navigate(pathname: string) {
  dispatchEvent(new CustomEvent('change-route', { detail: pathname }));
}

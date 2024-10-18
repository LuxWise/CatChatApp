import { AppNavigation } from "./Stack/AppNavigation";
import { AuthNavigation } from "./Stack/AuthNavigation";

export const Handlenavigation = () => {
  const user = true;
  return user ? <AppNavigation /> : <AuthNavigation />;
};

import { useLocation } from "@reach/router";
import { getColorsFromSearchParams } from "../../utils/routing";

/**
 * Gets the colors from the search params
 */
export const useSearchParameters = () => {
  const location = useLocation();
  return getColorsFromSearchParams(location.search);
};

export default useSearchParameters;

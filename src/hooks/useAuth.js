import { useContext } from "react"
import { AuthContext } from "../context/AuthProvider"
// context api 
const useAuth = () => {
      return useContext(AuthContext);
}
export default useAuth;
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/FakeAuthContext";

function ProtectedRout({ children }) {
  const { isAuthed } = useAuth();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!isAuthed) navigate("/");
    },
    [isAuthed, navigate]
  );
  return isAuthed ? children : "";
}

export default ProtectedRout;

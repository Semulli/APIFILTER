import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { getOneUser } from "../api/getRequest";
import { useNavigate, useParams } from "react-router-dom";

const UserIdPage = () => {
  const [user, setUser] = useState(null);

  const { userId } = useParams();

  const navigate = useNavigate();
  const getUser = async () => {
    const response = await getOneUser(userId);

    setUser(response);
  };

  useEffect(() => {
    getUser();
  }, [userId]);

  console.log(user);

  return (
    <div className="d-flex flex-column align-items-center my-5 text-info">
      <button
        style={{ width: "200px", marginTop: "-20px" }}
        className="btn btn-primary mb-3"
        onClick={() => navigate(-1)}
      >
        Go Back
      </button>
      {user && (
        <Card style={{ width: "75%", borderRadius: "20px" }}>
          <Card.Body>
            <Card.Title className="text-center mb-4">User Details</Card.Title>

            <div className="imgParent">
              <img className="img-fluid rounded mx-auto d-block mb-4 imgCard" />
            </div>
            <Card.Text>
              <strong>ID: {user.id}</strong>
            </Card.Text>
            <Card.Text>
              <strong>First Name:{user.firstName} </strong>
            </Card.Text>
            <Card.Text>
              <strong>Last Name:{user.lastName} </strong>
            </Card.Text>
            <Card.Text>
              <strong>Maiden Name:{user.maidenName || "unknown"}</strong>
            </Card.Text>
            <Card.Text>
              <strong>Age:{user.age}</strong>
            </Card.Text>
            <Card.Text>
              <strong>Gender:{user.gender}</strong>
            </Card.Text>
            <Card.Text>
              <strong>Email:{user.email}</strong>
            </Card.Text>
            <Card.Text>
              <strong>Phone:{user.phone}</strong>
            </Card.Text>
            <Card.Text>
              <strong>Birth Date: {user.birthDate}</strong>
            </Card.Text>
            <Card.Text>
              <strong>Blood Group:{user.bloodGroup}</strong>
            </Card.Text>
            <Card.Text>
              <strong>Height:{user.height}</strong> cm
            </Card.Text>
            <Card.Text>
              <strong>Weight:{user.weight}</strong> kg
            </Card.Text>
            <Card.Text>
              <strong>Eye Color:{user.eyeColor}</strong>
            </Card.Text>
            <Card.Text>
              <strong>Hair:{user.hair.color}</strong> -{" "}
            </Card.Text>
            <Card.Text>
              <strong>IP Address:{user.ip}</strong>
            </Card.Text>
            <Card.Text>
              <strong>Address:{user.address.address}</strong>
            </Card.Text>
            <Card.Text>
              <strong>Mac Address:{user.macAddress}</strong>
            </Card.Text>
            <Card.Text>
              <strong>University:{user.university}</strong>
            </Card.Text>
            <Card.Text>
              <strong>Bank:{user.bank.cardExpire}</strong>- Expires{" "}
            </Card.Text>
            <Card.Text>
              <strong>Company:{user.company.department}</strong>
            </Card.Text>
            <Card.Text>
              <strong>EIN:{user.ein}</strong>
            </Card.Text>
            <Card.Text>
              <strong>SSN:{user.ssn}</strong>
            </Card.Text>
            <Card.Text>
              <strong>User Agent:{user.userAgent}</strong>
            </Card.Text>
            <Card.Text>
              <strong>Crypto:{user.crypto.coin}</strong> (Wallet: )
            </Card.Text>
            <Card.Text>
              <strong>Role:{user.role}</strong>
            </Card.Text>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default UserIdPage;
